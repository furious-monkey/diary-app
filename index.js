const entryForm = document.getElementById('entryForm')
const entriesSection = document.querySelector('#entries')
const entryTextbox = document.querySelector('.entry-textbox')
const entriesNav = document.querySelector('.entries-nav')
let entryCountNumber = 1
function addEntryToDom(event) {
    event.preventDefault() // to avoid refresh when submiting the form.
    const entryDiv = document.createElement("div")
    entryDiv.className = 'single-entry' //asign classname to the new div element.
    entryDiv.innerText = entryTextbox.value //because getElementsByClassName returns a "array-like" object we need to use entryTextbox[0].value to look at the first index of it to get the value. .querySelector returns the first element that match.
    entryDiv.style.display = 'none' //Hide value of input by default
    entriesSection.append(entryDiv)
    entryTextbox.value = '' //resets the content of the entryTextbox
    const displayEntryButton = document.createElement('button')
    displayEntryButton.className = 'display-entry-button'
    displayEntryButton.innerText = entryCountNumber++
    entriesNav.appendChild(displayEntryButton)

    displayEntryButton.addEventListener('click', function(){
      const allEntries = document.querySelectorAll('.single-entry');
        for (let i = 0; i < allEntries.length; i++) {
            allEntries[i].style.display = 'none';
        }
      entryDiv.style.display = 'block'
    })
}

//listening for the submit and calling function to prevent refresh.
entryForm.addEventListener('submit', addEntryToDom)