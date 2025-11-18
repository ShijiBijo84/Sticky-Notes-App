import Note from "./Note"
import { NoteProps } from "../../types/notes"
import { useLocalStorage } from "../../hooks/useLocalStorage"
import { useNotes } from "../../hooks/useNotes"
import { useDrag } from "../../hooks/useDrag"
import { INITIAL_NOTES } from "../../constants/constants"
import ToolBar from "./ToolBar"


const NotesBoard = () => {
    const [notes, setNotes] = useLocalStorage<NoteProps[]>('notes', INITIAL_NOTES)
    const { addNote, deleteNote, updateNote, moveNote } = useNotes(notes, setNotes)
    const { startDrag } = useDrag(moveNote)

    return (
        <div className="notes-board">
            <ToolBar addNote={addNote} />
            {notes.map((note) => (
                <Note key={note.id} note={note}
                    updateNote={updateNote}
                    startDrag={startDrag}
                    deleteNote={deleteNote}
                />
            ))}
        </div>
    )
}
export default NotesBoard