var messages = document.body.getElementsByClassName("message");

for (i = 0; i < messages.length; i++)
{
  messages[i].innerHTML = messages[i].innerHTML.replace(/#zone\s[A-Za-z0-9]+\s-*[0-9]+\s-*[0-9]+\s-*[0-9]+|#zone\s[A-Za-z0-9]+\s-*[0-9]+\s-*[0-9]+|#zone\s[A-Za-z0-9]+/gm, "<a href='#' onclick='return false;' class='zoneLink'>$&</a>")
}


function performCopyOnValidLink(e){
    let target = e.target;
    
    console.log("click event found");

    console.log(`target.tagName: ${target.tagName}`)

    if (target.tagName != "A")
        return;

    let classList = target.classList
    
    console.log(`classList: ${classList}`)

    if (classList !== undefined && classList[0] !== "zoneLink")
        return;

    let valueOfZoneCommand = target.innerHTML;
    
    updateClipboard(valueOfZoneCommand);
}

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

window.addEventListener("click", performCopyOnValidLink);