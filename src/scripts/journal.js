import API from "./data.js"
import renderDom from "./entriesDOM.js"
import moodContainer from "./moodFilter.js "
/*
    Main application logic that uses the functions and objects
    defined in the other JavaScript files.

    Change the fake variable names below to what they should be
    to get the data and display it.
*/
API.getJournalEntries()             //brings in the pre-new entry API
.then(response => renderDom.renderJournalEntries(response))


const record = document.querySelector("#recordButton").addEventListener("click", function(){
    event.preventDefault()  //allows record button to be in form tags without refreshing pagve
    const allInput= {
         date: document.querySelector("#dateInput").value,              //placing all the input into a variable
         concept: document.querySelector("#conceptInput").value,
         entry: document.querySelector("#entryInput").value,
         mood: document.querySelector("#moodInput").value
    }

    
    API.newJournalEntry(allInput)               //calling the new API with the new entry
    .then(API.getJournalEntries).then(renderDom.renderJournalEntries)
    
})

moodContainer.moodEvents();
