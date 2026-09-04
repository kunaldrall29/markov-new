#!/bin/bash
set -euo pipefail
FF=/usr/local/bin/ffmpeg
B=/workspace/artifacts/tmp/trailer-build
V=/workspace/artifacts/imagine_videos
FONT=/usr/share/fonts/truetype/liberation/LiberationSans-Bold.ttf
VO=/workspace/artifacts/tmp/markov_vo.mp3
mkdir -p "$B/cuts"

scale_vf='scale=1920:1080:force_original_aspect_ratio=increase,crop=1920:1080,setsar=1,fps=30,eq=contrast=1.05:saturation=1.07,drawbox=0:0:1920:78:black:t=fill,drawbox=0:1002:1920:78:black:t=fill'

cut_clip() {
  local src=$1 ss=$2 dur=$3 out=$4
  $FF -y -ss "$ss" -t "$dur" -i "$src" -vf "$scale_vf" -an \
    -c:v libx264 -preset veryfast -crf 19 -pix_fmt yuv420p "$out"
}

NYC=$V/5a1e845a-f6e8-4e91-bac8-6657c4860cb4.mp4
WATCH=$V/ff211ba0-4c66-4fde-9273-85103dfc73ce.mp4
FLOOR=$V/906e823a-d900-46b1-85b0-442790a789dc.mp4
HOOD=$V/3fbc013d-ff25-45a5-a32f-55eb0e0434d0.mp4
WOMAN=$V/b9a1e269-8c3d-4ad9-aea2-8d9e3b98b4f5.mp4
CAMP=$V/0650bf0b-955a-4048-a3a8-3b2b41cedf10.mp4
FACT=$V/1e5a6b96-a3ef-49b6-837c-19aff8f94a5e.mp4
OTS=$V/93a3f374-623b-4202-9c5f-9e555afd5432.mp4
EXCH=$V/2679dd27-f3d6-4c70-8f8f-9dce4b65816f.mp4
NOD=$V/482e2084-c0ef-47f9-8149-1016a10f702c.mp4
ACC=$V/3ee1ea94-fffa-439c-a6d8-8a5e8394e754.mp4

cut_clip "$NYC"   0.35 2.60 "$B/cuts/01.mp4"
cut_clip "$WATCH" 0.20 2.00 "$B/cuts/02.mp4"
cut_clip "$FLOOR" 0.45 2.40 "$B/cuts/03.mp4"
cut_clip "$HOOD"  0.55 2.60 "$B/cuts/04.mp4"
cut_clip "$WOMAN" 0.25 2.60 "$B/cuts/05.mp4"
cut_clip "$CAMP"  0.40 2.80 "$B/cuts/06.mp4"
cut_clip "$FACT"  0.30 2.60 "$B/cuts/07.mp4"
cut_clip "$OTS"   0.50 2.40 "$B/cuts/08.mp4"
cut_clip "$EXCH"  0.20 2.00 "$B/cuts/09.mp4"
cut_clip "$NOD"   0.80 2.40 "$B/cuts/10.mp4"
cut_clip "$ACC"   0.90 2.60 "$B/cuts/11.mp4"
cut_clip "$HOOD"  3.20 2.20 "$B/cuts/12.mp4"
cut_clip "$NYC"   3.10 2.40 "$B/cuts/13.mp4"
cut_clip "$WOMAN" 3.10 2.20 "$B/cuts/14.mp4"
cut_clip "$FACT"  3.20 2.20 "$B/cuts/15.mp4"

# 5s end card with slow push
$FF -y -loop 1 -t 5 -i "$B/endcard.png" -vf \
  "scale=1920:1080,zoompan=z='min(1.08,1+0.0012*on)':d=150:x='iw/2-(iw/zoom/2)':y='ih/2-(ih/zoom/2)':s=1920x1080:fps=30,setsar=1,drawbox=0:0:1920:78:black:t=fill,drawbox=0:1002:1920:78:black:t=fill" \
  -an -c:v libx264 -preset veryfast -crf 18 -pix_fmt yuv420p "$B/cuts/16.mp4"

{
  for i in $(seq -w 1 16); do
    echo "file '$B/cuts/${i}.mp4'"
  done
} > "$B/concat.txt"
# seq -w 1 16 => 01..16 on GNU; busybox may differ. Write explicitly:
cat > "$B/concat.txt" <<EOF
file '$B/cuts/01.mp4'
file '$B/cuts/02.mp4'
file '$B/cuts/03.mp4'
file '$B/cuts/04.mp4'
file '$B/cuts/05.mp4'
file '$B/cuts/06.mp4'
file '$B/cuts/07.mp4'
file '$B/cuts/08.mp4'
file '$B/cuts/09.mp4'
file '$B/cuts/10.mp4'
file '$B/cuts/11.mp4'
file '$B/cuts/12.mp4'
file '$B/cuts/13.mp4'
file '$B/cuts/14.mp4'
file '$B/cuts/15.mp4'
file '$B/cuts/16.mp4'
EOF

$FF -y -f concat -safe 0 -i "$B/concat.txt" -c copy "$B/picture.mp4"

DT="fontfile=${FONT}:fontcolor=white:borderw=2:bordercolor=black@0.55:shadowcolor=black@0.6:shadowx=0:shadowy=2"

$FF -y -i "$B/picture.mp4" -i "$B/beat.wav" -i "$VO" -filter_complex "
[0:v]drawtext=${DT}:fontsize=44:text='16:00 ET':x=96:y=112:enable='between(t,0.35,4.3)',
drawtext=${DT}:fontsize=40:text='CASH SESSION  CLOSED':x=96:y=112:enable='between(t,4.4,7.0)',
drawtext=${DT}:fontsize=48:text='AFTER HOURS':x=96:y=112:fontcolor=0xC4A574:enable='between(t,9.5,14.5)',
drawtext=${DT}:fontsize=42:text='NVDAx-PERP':x=96:y=112:enable='between(t,12.2,15.0)',
drawtext=${DT}:fontsize=42:text='TSLAx-PERP':x=96:y=112:enable='between(t,15.0,17.6)',
drawtext=${DT}:fontsize=40:text='RFQ  ·  3x  ·  ISOLATED':x=96:y=112:enable='between(t,19.8,24.2)',
drawtext=${DT}:fontsize=52:text='REQUEST':x=96:y=112:enable='between(t,24.4,26.0)',
drawtext=${DT}:fontsize=52:text='ACCEPT':x=96:y=112:enable='between(t,26.0,28.8)'[v];
[1:a]aformat=sample_fmts=fltp:sample_rates=44100:channel_layouts=stereo,volume=0.32[beat];
[2:a]aformat=sample_fmts=fltp:sample_rates=44100:channel_layouts=stereo,volume=1.25,adelay=350|350[vo];
[beat][vo]amix=inputs=2:duration=first:dropout_transition=3,loudnorm=I=-13:LRA=10:TP=-1.4[a]
" -map "[v]" -map "[a]" -c:v libx264 -preset medium -crf 18 -pix_fmt yuv420p \
  -c:a aac -b:a 192k -movflags +faststart -shortest \
  "$B/teaser.mp4"

cp -f "$B/teaser.mp4" /workspace/public/video/teaser.mp4
$FF -y -ss 1.1 -i "$NYC" -frames:v 1 -q:v 3 /workspace/public/img/teaser-poster.jpg
echo DONE
$FF -hide_banner -i /workspace/public/video/teaser.mp4 2>&1 | head -20
