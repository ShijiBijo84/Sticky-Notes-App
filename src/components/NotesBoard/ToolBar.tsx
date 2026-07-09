import { ToolBarProps } from "../../types/notes"
import AddNoteButton from "./AddNoteButton"
import DeleteButton from "./DeleteButton"

const ToolBar = ({ addNote, deleteNote, selectedId }: ToolBarProps) => {
    return (
        <div className="left-toolbar">
            <div className="add-note-button">
                <AddNoteButton addNote={addNote} />
            </div>
            <div className="delete-note-button">
                <DeleteButton onClick={() => selectedId !== null && deleteNote(selectedId)} />
            </div>
        </div>
    )

}
export default ToolBar