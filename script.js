// Mobile nav toggle
const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("navLinks");

if (hamburger) {
  hamburger.addEventListener("click", (e) => {
    e.stopPropagation();
    navLinks.classList.toggle("open");
  });
}

if (navLinks) {
  navLinks.querySelectorAll("a").forEach((a) => {
    a.addEventListener("click", () => navLinks.classList.remove("open"));
  });
}

// FAQ accordion
document.querySelectorAll("[data-acc]").forEach((btn) => {
  btn.addEventListener("click", (e) => {
    e.preventDefault();
    const row = btn.closest(".qa-row");
    if (!row) return;

    // Optional: only keep one open at a time
    document.querySelectorAll(".qa-row.open").forEach((openRow) => {
      if (openRow !== row) openRow.classList.remove("open");
    });

    row.classList.toggle("open");
  });
});

// Fake contact submit (replace with your backend later)
const form = document.getElementById("contactForm");
const formNote = document.getElementById("formNote");

if (form) {
  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const fd = new FormData(form);
    const name = (fd.get("name") || "").toString().trim();
    const email = (fd.get("email") || "").toString().trim();

    if (formNote) {
      formNote.textContent = `Thanks ${name || "there"}! Message saved locally (demo). I'll reach you at ${email || "your email"}.`;
    }
    form.reset();
  });
}
