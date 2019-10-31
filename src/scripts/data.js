const API = {         //gets the data from the API
  getJournalEntries () {
      return fetch("http://localhost:3000/entries")
          .then(response => response.json())
  },


  newJournalEntry(newJournalEntry) {            //posts the data from the API
    return fetch("http://localhost:3000/entries", {
      method: "POST",
      headers: {
          "Content-Type": "application/json"
      },
      body: JSON.stringify(newJournalEntry)
    })
  }
}

export default API