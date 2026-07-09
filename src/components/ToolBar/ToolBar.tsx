import { ToolBarProps } from "../../types/notes"
import AddNoteButton from "./AddNoteButton"
import DeleteButton from "./DeleteButton"

const ToolBar = ({ addNote, deleteNote, selectedId }: ToolBarProps) => {
    return (
        <div className="flex h-full w-17.5 flex-col gap-2 bg-gray-800 pl-5">
            <div className="mt-8">
                <AddNoteButton addNote={addNote} />
            </div>

            <div>
                <DeleteButton
                    onClick={() => selectedId !== null && deleteNote(selectedId)}
                />
            </div>
        </div>
    );
};

export default ToolBar;
