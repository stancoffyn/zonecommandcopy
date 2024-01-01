browser.runtime.onMessage.addListener(copySelection);

function copySelection(message) {
    console.log(message);

    if (message.zoneLink) {
        console.log(`requesting updateClipboard for ${message}`);
        updateClipboard(message.zoneLink);        
    }
}

console.log("background registered");

function updateClipboard(newClip) {
  console.log(`clip requested for ${newClip}`);

  navigator.clipboard.writeText(newClip).then(
    () => {
      console.log("Clipboard successfully set!")
    },
    () => {
      console.log("We failed to set clipboard, permission issue or some such")
    },
  );
}