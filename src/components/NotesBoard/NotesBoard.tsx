
import Note from "./Note";
import { NoteProps } from "../../types/notes";
import { useLocalStorage } from "../../hooks/useLocalStorage";
import { useNotes } from "../../hooks/useNotes";
import { useDrag } from "../../hooks/useDrag";
import { INITIAL_NOTES } from "../../constants/constants";
import ToolBar from "../ToolBar/ToolBar";
import { useState } from "react";

const NotesBoard = () => {
    const [notes, setNotes] = useLocalStorage<NoteProps[]>(
        "notes",
        INITIAL_NOTES
    );

    const [selectedNoteId, setSelectedNoteId] = useState<string | null>(null);

    const { addNote, deleteNote, updateNote, moveNote, bringToFront } = useNotes(
        setNotes
    );

    const { startDrag } = useDrag({ moveNote, setSelectedNoteId, bringToFront });

    return (
        <div className="relative h-screen w-screen overflow-hidden bg-gray-200">
            <ToolBar
                addNote={addNote}
                deleteNote={deleteNote}
                selectedId={selectedNoteId}
                updateNote={updateNote}
            />

            {notes.map((note) => (
                <Note
                    key={note.id}
                    note={note}
                    updateNote={updateNote}
                    startDrag={startDrag}
                    isSelected={note.id === selectedNoteId}
                />
            ))}
        </div>
    );
};

export default NotesBoard;