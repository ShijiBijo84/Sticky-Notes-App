
import { ToolBarProps } from "../../types/notes";
import AddNoteButton from "./AddNoteButton";
import DeleteButton from "./DeleteButton";
import ColorPalette from "./ColorPalette";

const ToolBar = ({
    addNote,
    deleteNote,
    updateNote,
    selectedId
}: ToolBarProps) => {
    return (
        <div className="flex h-full w-17.5 flex-col items-center gap-5 bg-gray-800 pt-8">

            <AddNoteButton addNote={addNote} />
            <ColorPalette updateNote={updateNote} selectedId={selectedId} />

            <DeleteButton
                onClick={() =>
                    selectedId !== null && deleteNote(selectedId)
                }
            />
        </div>
    );
};

export default ToolBar;