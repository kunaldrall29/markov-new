#!/usr/bin/env python3
"""Dark trap / action-hiphop bed. No samples — all synthesized."""
from __future__ import annotations

import math
import wave
from pathlib import Path

import numpy as np

SR = 44100
BPM = 140
BEAT = 60.0 / BPM
BARS = 24  # 24 * 4 beats @ 140 ≈ 41.14s
DURATION = BARS * 4 * BEAT
RNG = np.random.default_rng(7)


def env_exp(n: int, tau: float) -> np.ndarray:
    t = np.arange(n) / SR
    return np.exp(-t / tau).astype(np.float64)


def sine(n: int, f0: float, f1: float | None = None) -> np.ndarray:
    t = np.arange(n) / SR
    if f1 is None or f1 == f0:
        phase = 2 * math.pi * f0 * t
    else:
        # linear chirp
        k = (f1 - f0) / max(t[-1], 1e-6)
        phase = 2 * math.pi * (f0 * t + 0.5 * k * t * t)
    return np.sin(phase)


def noise(n: int) -> np.ndarray:
    return RNG.standard_normal(n)


def hp(x: np.ndarray, alpha: float = 0.96) -> np.ndarray:
    y = np.zeros_like(x)
    for i in range(1, len(x)):
        y[i] = alpha * (y[i - 1] + x[i] - x[i - 1])
    return y


def lp(x: np.ndarray, alpha: float = 0.2) -> np.ndarray:
    y = np.zeros_like(x)
    for i in range(1, len(x)):
        y[i] = y[i - 1] + alpha * (x[i] - y[i - 1])
    return y


def place(mix: np.ndarray, buf: np.ndarray, at: float, gain: float = 1.0) -> None:
    i = int(at * SR)
    if i >= len(mix):
        return
    n = min(len(buf), len(mix) - i)
    mix[i : i + n] += buf[:n] * gain


def kick(n: int) -> np.ndarray:
    body = sine(n, 150, 38) * env_exp(n, 0.18)
    click = hp(noise(min(n, int(0.01 * SR))), 0.8) * env_exp(min(n, int(0.01 * SR)), 0.004)
    out = body * 1.4
    out[: len(click)] += click * 0.35
    return np.tanh(out * 1.6)


def snare(n: int) -> np.ndarray:
    tone = sine(n, 190) * env_exp(n, 0.08)
    nz = hp(noise(n), 0.85) * env_exp(n, 0.07)
    return np.tanh(tone * 0.5 + nz * 0.9)


def hat(n: int, open_: bool = False) -> np.ndarray:
    tau = 0.09 if open_ else 0.018
    return np.tanh(hp(noise(n), 0.92) * env_exp(n, tau) * (0.55 if open_ else 0.8))


def bass(n: int, f: float) -> np.ndarray:
    # 808: pitch drop + long tail
    drop = sine(n, f * 1.6, f) * env_exp(n, 0.55)
    sub = sine(n, f) * env_exp(n, 0.7)
    return np.tanh(drop * 0.9 + sub * 1.1)


def stab(n: int, f: float) -> np.ndarray:
    s = (
        sine(n, f)
        + 0.4 * sine(n, f * 2)
        + 0.18 * sine(n, f * 3)
    ) / 1.58
    a = np.linspace(0, 1, int(0.01 * SR), endpoint=False)
    env = env_exp(n, 0.22)
    env[: len(a)] *= a
    return np.tanh(s * env * 1.3)


def riser(n: int) -> np.ndarray:
    t = np.arange(n) / SR
    nz = hp(noise(n), 0.9) * (t / max(t[-1], 1e-6)) ** 2
    tone = sine(n, 220, 1400) * (t / max(t[-1], 1e-6))
    return np.tanh(nz * 0.55 + tone * 0.25)


def main() -> None:
    n = int(DURATION * SR)
    mix = np.zeros(n, dtype=np.float64)

    # F minor-ish 808 pattern per bar: F, F, Ab, C
    notes = [43.65, 43.65, 51.91, 65.41]

    for bar in range(BARS):
        t0 = bar * 4 * BEAT
        # 808 on beat 1 of each bar, extra on 3 in even bars
        place(mix, bass(int(2.4 * SR), notes[bar % 4]), t0, 0.95)
        if bar % 2 == 1:
            place(mix, bass(int(1.6 * SR), notes[bar % 4] * 0.75), t0 + 2 * BEAT, 0.7)

        for b in range(4):
            t = t0 + b * BEAT
            # kick: 1 and 3, plus extra in drop half
            if b in (0, 2) or (bar >= 8 and b == 1 and bar % 2 == 0):
                place(mix, kick(int(0.45 * SR)), t, 1.05)
            if bar >= 12 and b == 3:
                place(mix, kick(int(0.28 * SR)), t + 0.5 * BEAT, 0.55)

            # snare 2 and 4
            if b in (1, 3):
                place(mix, snare(int(0.32 * SR)), t, 0.85)

            # hats 8ths, 16ths after bar 4, rolls on last beat of odd bars
            for s in range(2):
                place(mix, hat(int(0.08 * SR)), t + s * BEAT / 2, 0.22)
            if bar >= 4:
                for s in range(4):
                    place(mix, hat(int(0.05 * SR)), t + s * BEAT / 4, 0.12)
            if bar % 2 == 1 and b == 3:
                for k in range(8):
                    place(
                        mix,
                        hat(int(0.04 * SR)),
                        t + k * BEAT / 8,
                        0.1 + 0.02 * k,
                    )

        # brass/synth stabs on drop bars
        if bar in (0, 4, 8, 12, 16, 20):
            place(mix, stab(int(0.5 * SR), 174.61), t0, 0.35)  # F3
            place(mix, stab(int(0.4 * SR), 207.65), t0 + 1.5 * BEAT, 0.28)  # Ab3
        if bar in (7, 11, 15, 19):
            place(mix, riser(int(4 * BEAT * SR)), t0, 0.45)

    # stereo + light saturation
    mix = np.tanh(mix * 1.15)
    peak = np.max(np.abs(mix)) or 1.0
    mix = mix / peak * 0.86
    # fake stereo: delay + high-hat width
    delay = int(0.012 * SR)
    L = mix.copy()
    R = np.concatenate([np.zeros(delay), mix[:-delay]]) if delay else mix.copy()
    stereo = np.stack([L * 0.98, R * 0.98], axis=1)

    out = Path("/workspace/artifacts/tmp/trailer-build/beat.wav")
    pcm = np.clip(stereo, -1, 1)
    pcm = (pcm * 32767).astype(np.int16)
    with wave.open(str(out), "wb") as w:
        w.setnchannels(2)
        w.setsampwidth(2)
        w.setframerate(SR)
        w.writeframes(pcm.tobytes())
    print(f"wrote {out} dur={DURATION:.2f}s peak={peak:.3f}")


if __name__ == "__main__":
    main()
