(function () {
  const form = document.getElementById("waitlist-form");
  const ok = document.getElementById("waitlist-ok");
  if (!form) return;

  const KEY = "markov.waitlist.v1";

  function load() {
    try {
      return JSON.parse(localStorage.getItem(KEY) || "[]");
    } catch {
      return [];
    }
  }

  function save(rows) {
    localStorage.setItem(KEY, JSON.stringify(rows));
  }

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    const data = new FormData(form);
    const row = {
      ts: new Date().toISOString(),
      name: String(data.get("name") || "").trim(),
      email: String(data.get("email") || "").trim().toLowerCase(),
      wallet: String(data.get("wallet") || "").trim(),
      market: String(data.get("market") || ""),
      holds: data.get("holds") === "on",
      role: String(data.get("role") || ""),
    };
    if (!row.email || !row.email.includes("@")) {
      form.querySelector("[name=email]").focus();
      return;
    }
    const rows = load();
    if (rows.some((r) => r.email === row.email)) {
      ok.style.display = "block";
      ok.textContent = "Already on the list for " + row.email + ".";
      form.reset();
      return;
    }
    rows.push(row);
    save(rows);
    form.reset();
    ok.style.display = "block";
    ok.textContent =
      "In. " +
      row.email +
      " is on the early-access list. We only open wallets that already hold NVDAx or TSLAx first.";
  });
})();
