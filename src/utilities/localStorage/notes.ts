import { storage } from "./storageInstance";

interface InoteGeneric<T> {
    content: string
    creationDate: T
}

export type Inote = InoteGeneric<Date>


// notes when parsed from local storage
export type InoteJSON = InoteGeneric<string>


/**
 *  
 * @returns all user saved notes from local storage or null if group doesn't exist
 */
export const getNotesFromLS = (id: string): Inote[] | null => {
    const notesJSON = storage.getString(id);

    if (notesJSON === undefined) return null

    let notesParsed = JSON.parse(notesJSON) as InoteJSON[]

    let notes: Inote[] = []

    notesParsed.forEach(n => {
        let creationDate = new Date(n.creationDate)

        notes.push({ content: n.content, creationDate })
    })

    return notes
}


/**
 * creates and saves empty notes array to local storage with groupName as key
 */
export const createAndSaveNotesToLS = (id: string) => {
    const notes: Inote[] = []

    storage.set(id, JSON.stringify(notes))
}


/**
 * adds new note to existing notes array in local storage 
 */
export const addNoteToLS = (id: string, note: Inote) => {

    let notes = getNotesFromLS(id);

    if (notes === null) throw Error(`notes with id - ${id} doesn't exist`);

    notes.push(note)

    storage.set(id, JSON.stringify(notes))

}