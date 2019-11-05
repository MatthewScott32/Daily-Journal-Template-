import API from "./data.js"
import renderDom from "./entriesDOM.js"

const moodContainer = {
 moodEvents()  {
    const moodButtonArray = document.getElementsByName("moodButton")
    moodButtonArray.forEach(function(button) {
        button.addEventListener("click", event => {
            API.getJournalEntries()
            .then(entries => {
              let emptyMoodArray = []
              entries.forEach(function(entry){
                  if(button.value === entry.mood){
                  emptyMoodArray += entry
                  }
              })
            renderDom.renderJournalEntries(emptyMoodArray)
            })
            
            }
            
        )
    })
 }
}


export default moodContainer