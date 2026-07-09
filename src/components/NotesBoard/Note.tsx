
import { Palette } from "lucide-react";
import { NoteItemProps } from "../../types/notes";

const Note = ({ note, updateNote, startDrag }: NoteItemProps) => {
    return (
        <div
            className="absolute flex min-h-45 min-w-62.5 cursor-grab select-none flex-col p-2.5"
            style={{
                top: note.y,
                left: note.x,
                backgroundColor: note.color,
            }}
            onMouseDown={(e) => startDrag(e, note.id)}
        >
            <input
                name="title"
                placeholder="Enter title"
                value={note.title}
                className="mb-1 border-none bg-transparent p-2.5 font-bold outline-none"
                onChange={(e) => updateNote(note.id, "title", e.target.value)}
            />

            <textarea
                name="content"
                placeholder="Write something..."
                value={note.content}
                className="flex-1 resize-none border-none bg-transparent p-3.75 leading-6 outline-none"
                onChange={(e) =>
                    updateNote(note.id, "content", e.target.value)
                }
            />

            <div className="absolute right-0 flex  flex-col pt-12.5">
                <label
                    className="cursor-pointer"
                    onMouseDown={(e) => e.stopPropagation()}
                >
                    <Palette size={15} />
                    <input
                        type="color"
                        className="hidden"
                        onChange={(e) =>
                            updateNote(note.id, "color", e.target.value)
                        }
                    />
                </label>
            </div>
        </div>
    );
};

export default Note;