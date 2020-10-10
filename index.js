const entryForm = document.getElementById('entryForm')
const entriesSection = document.getElementById('entries')
const entryTextbox = document.getElementsByClassName('entry-textbox')

function addEntryToDom(event) {
    event.preventDefault() // to avoid refresh when submiting the form.
    const entryDiv = document.createElement("div")
    entryDiv.className = 'single-entry' //asign classname to the new div element.
    entryDiv.innerText = entryTextbox[0].value //because getElementsByClassName returns a "array-like" object we need to look at the first index of it to get the value.
    entriesSection.append(entryDiv)
    entryTextbox[0].value = ''
}

//listening for the submit and calling function to prevent refresh.
entryForm.addEventListener('submit', addEntryToDom)