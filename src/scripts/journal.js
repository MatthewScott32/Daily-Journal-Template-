import API from "./data.js"
import renderDom from "./entriesDOM.js"
/*
    Main application logic that uses the functions and objects
    defined in the other JavaScript files.

    Change the fake variable names below to what they should be
    to get the data and display it.
*/
API.getJournalEntries()
.then(response => renderDom.renderJournalEntries(response))


const record = document.querySelector("#recordButton").addEventListener("click", function(){
    event.preventDefault()
    const allInput= {
         date: document.querySelector("#dateInput").value,
         concept: document.querySelector("#conceptInput").value,
         entry: document.querySelector("#entryInput").value,
         mood: document.querySelector("#moodInput").value
    }

    
    API.newJournalEntry(allInput)
    .then(API.getJournalEntries).then(renderDom.renderJournalEntries)
    
})
