document.addEventListener("DOMContentLoaded", () => {
  const shareBtn = document.querySelector(".card__share-btn");
  const shareMenu = document.querySelector(".card__share-menu");
  const cardFooter = document.querySelector(".card__footer");

  if (!shareBtn || !shareMenu) return;

  // Toggle share menu state
  shareBtn.addEventListener("click", (e) => {
    e.stopPropagation(); // Prevents click from instantly closing menu via body click listener
    const isExpanded = shareBtn.getAttribute("aria-expanded") === "true";

    shareBtn.setAttribute("aria-expanded", !isExpanded);
    shareBtn.classList.toggle("active");
    shareMenu.classList.toggle("active");
    if (cardFooter) cardFooter.classList.toggle("share-active");
  });

  // Close menu when clicking outside
  document.addEventListener("click", (e) => {
    if (!shareMenu.contains(e.target) && !shareBtn.contains(e.target)) {
      shareBtn.setAttribute("aria-expanded", "false");
      shareBtn.classList.remove("active");
      shareMenu.classList.remove("active");
      if (cardFooter) cardFooter.classList.remove("share-active");
    }
  });
});
