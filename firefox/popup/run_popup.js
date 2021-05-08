let removeAdButton = document.getElementById("remove");

function removeAd() {
  function handleRemove(tabs) {
    console.log(tabs);
  }
  browser.tabs.query({ active: true, currentWindow: true }).then(handleRemove);
}

/**
 * Listen for clicks on the buttons, and send the appropriate message to
 * the content script in the page.
 */
function listenForClicks() {
  removeAdButton.addEventListener("click", removeAd);
}

/**
 * When the popup loads, inject a content script into the active tab,
 * and add a click handler.
 * If we couldn't inject the script, handle the error.
 */
browser.tabs
  .executeScript({ file: "/content_scripts/popup.js" })
  .then(listenForClicks);
