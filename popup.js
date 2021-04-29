// Initialize button with user's preferred color
let changeColor = document.getElementById("remove");

const remove = async () => {
  let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    function: handleRemove,
  });
};

const handleRemove = () => {
  const body = document.body.className;
  const isTpModalOpen = body.includes("tp-modal-open");
  if (isTpModalOpen) {
    document.body.classList.remove("tp-modal-open");
    document.querySelector(".tp-modal").remove();
    document.querySelector(".tp-backdrop").remove();
  }
};

changeColor.addEventListener("click", remove);
