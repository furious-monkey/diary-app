const entryForm = document.getElementById('entryForm');

//function to avoid refresh when submiting the form.
function addEntryToDom(event) {
    event.preventDefault();
}

//listening for the submit and calling function to prevent refresh.
entryForm.addEventListener('submit', addEntryToDom)