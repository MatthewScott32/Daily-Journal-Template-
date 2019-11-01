const entryManager = {

  makeJournalEntryComponent(journalEntry) {
    // structure for html "skeleton"
    return `
      <section>
        <h3>${journalEntry.concept}</h3>       
        <p>${journalEntry.entry}</p>
        <p>${journalEntry.mood}</p>
        <p>${journalEntry.date}</p>
      </section>
    `
  },

  generateObject(date, concept, entry, mood) {
    return {
      date: date,
      concept: concept ,        
      entry: entry,             //raw data that goes on the skeleton
      mood: mood
  }
}
}

export default entryManager