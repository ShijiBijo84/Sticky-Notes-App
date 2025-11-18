
import { Palette } from "lucide-react"
import { NoteItemProps } from "../../types/notes"
import DeleteButton from "./DeleteButton"

const Note = ({ note, updateNote, startDrag, deleteNote }: NoteItemProps) => {
    return (
        <div className="sticky-note"
            style={{
                top: note.y,
                left: note.x,
                backgroundColor: note.color
            }}
            onMouseDown={(e) => startDrag(e, note.id)}
        >

            <input name="title" placeholder="Enter title"
                value={note.title}
                className="note-title"
                onChange={(e) => updateNote(note.id, "title", e.target.value)}
            />

            <textarea name="content" placeholder="Write something...." value={note.content}
                className="note-content"
                onChange={(e) =>
                    updateNote(note.id, "content", e.target.value)}
                onMouseDown={(e) => e.stopPropagation()} />

            <div className="note-toolbar">
                <label className="color-palette-btn" onMouseDown={(e) => e.stopPropagation()}>
                    <Palette size={15} />
                    <input type="color"
                        onChange={(e) => updateNote(note.id, "color", e.target.value)}
                    />
                </label>
                <DeleteButton onClick={() => deleteNote(note.id)} />

            </div>
        </div>
    )
}
export default Note