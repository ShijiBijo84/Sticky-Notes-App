import { AddNoteProps } from "../../types/notes"
import AddNoteButton from "./AddNoteButton"

const ToolBar = ({ addNote }: AddNoteProps) => {
    return (
        <div className="left-toolbar">
            <div className="add-note-button">
                <AddNoteButton addNote={addNote} />
            </div>
        </div>
    )

}
export default ToolBar