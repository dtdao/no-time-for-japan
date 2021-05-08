const removeAd = () => {
  const body = document.body.className;
  const isTpModalOpen = body.includes("tp-modal-open");
  if (isTpModalOpen) {
    document.body.classList.remove("tp-modal-open");
    document.querySelector(".tp-modal").remove();
    document.querySelector(".tp-backdrop").remove();
  }
};

(function () {
  /**
   * Check and set a global guard variable.
   * If this content script is injected into the same page again,
   * it will do nothing next time.
   */
  removeAd();
})();
