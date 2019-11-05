import API from "./data.js"
import renderDom from "./entriesDOM.js"

const moodContainer = {      //variable to export
    moodEvents()  {          //overall function to invoke
        const moodButtonArray = document.getElementsByName("moodButton") //variable containing the buttons

         //forEach loop that runs through buttons and uses an empty function declaring button(taco)
        moodButtonArray.forEach(function(button) {
            button.addEventListener("click", event => {      //putseventlistener on buttons
                API.getJournalEntries()                      //entries called
                    .then(entries => {                       //entries(taco) function
                        const filteredArray = entries.filter(entry =>   //takes the filtered array 
                            button.value === entry.mood         //says button(taco) must equal mood
                        )
                        renderDom.renderJournalEntries(filteredArray)      //places results on dom
                        })  
                    })
                        
                })
             }
            }
                        
       

export default moodContainer