import { useCallback, useEffect, useState } from "react";
import { DragState } from "../types/notes";

type UseDragOptions = {
    moveNote: (id: string, newX: number, newY: number) => void;
    setSelectedNoteId: (id: string) => void;
    bringToFront: (id: string) => void;
};

export function useDrag({ moveNote,
    setSelectedNoteId,
    bringToFront }: UseDragOptions) {
    const [currentNote, setCurrentNote] = useState<DragState>(null)

    useEffect(() => {
        window.addEventListener("mousemove", handleMouseMove)
        window.addEventListener("mouseup", handleMouseUp)

        return () => {
            window.removeEventListener("mousemove", handleMouseMove)
            window.removeEventListener("mouseup", handleMouseUp)
        }
    })

    const handleMouseUp = useCallback(() => {
        setCurrentNote(null)
    }, [])

    const handleMouseMove = useCallback((e: MouseEvent) => {
        if (!currentNote) return
        moveNote(currentNote.id, e.clientX - currentNote.x, e.clientY - currentNote.y)
    }, [currentNote, moveNote])

    const startDrag = useCallback((e: React.MouseEvent, id: string) => {
        const note = e.currentTarget
        const rect = note.getBoundingClientRect()
        setCurrentNote({ id, x: e.clientX - rect.x, y: e.clientY - rect.y })
        setSelectedNoteId(id)
        bringToFront(id)
    }, [setSelectedNoteId, bringToFront])

    return { startDrag }
}