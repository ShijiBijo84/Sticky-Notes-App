import { useCallback, useEffect, useState } from "react";
import { NotePositionProps } from "../types/notes";

export function useDrag(moveNote: (id: number, newX: number, newY: number) => void,
    setSelectedNoteId: React.Dispatch<React.SetStateAction<number | null>>) {
    const [currentNote, setCurrentNote] = useState<NotePositionProps>(null)

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

    const startDrag = useCallback((e: React.MouseEvent, id: number) => {
        const note = e.currentTarget
        const rect = note.getBoundingClientRect()
        setCurrentNote({ id, x: e.clientX - rect.x, y: e.clientY - rect.y })
        setSelectedNoteId(id)
    }, [setSelectedNoteId])

    return { startDrag }
}