const toggle = document.querySelector(".menu-toggle");
const panel = document.querySelector(".mobile-panel");

if (toggle && panel) {
  toggle.addEventListener("click", () => {
    const open = panel.classList.toggle("open");
    toggle.setAttribute("aria-expanded", String(open));
    toggle.setAttribute("aria-label", open ? "Close menu" : "Open menu");
  });

  panel.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      panel.classList.remove("open");
      toggle.setAttribute("aria-expanded", "false");
      toggle.setAttribute("aria-label", "Open menu");
    });
  });
}

const copyBtn = document.querySelector(".clone-copy");
if (copyBtn) {
  copyBtn.addEventListener("click", async () => {
    const text = copyBtn.getAttribute("data-copy") || "";
    try {
      await navigator.clipboard.writeText(text);
      copyBtn.textContent = "Copied";
      copyBtn.classList.add("is-copied");
      window.setTimeout(() => {
        copyBtn.textContent = "Copy";
        copyBtn.classList.remove("is-copied");
      }, 1600);
    } catch {
      copyBtn.textContent = "Copy failed";
    }
  });
}
