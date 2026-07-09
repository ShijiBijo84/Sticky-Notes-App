import { useCallback } from "react";
import { NoteProps } from "../types/notes";
import { COLORS } from "../constants/constants";

export function useNotes(
    setNotes: React.Dispatch<React.SetStateAction<NoteProps[]>>) {

    const addNote = useCallback(() => {
        const randomX = Math.floor(Math.random() * (window.innerWidth - 250))
        const randomY = Math.floor(Math.random() * (window.innerHeight - 250))
        const randomColor = COLORS[Math.floor(Math.random() * COLORS.length)]
        const newNote = {
            id: crypto.randomUUID(),
            title: '', content: '',
            x: randomX, y: randomY,
            zIndex: 0,
            color: randomColor
        }
        setNotes(prev => [...prev, newNote])
    }, [setNotes])

    const deleteNote = (id: string) => {
        setNotes((prev) => prev.filter(note => note.id !== id))
    }

    const updateNote = (id: string, field: "title" | "content" | "color", value: string) => {
        setNotes((prev) => prev.map(note => note.id === id ? { ...note, [field]: value } : note))
    }

    const moveNote = (id: string, newX: number, newY: number) => {
        setNotes((prev) => prev.map(note => note.id === id ? { ...note, x: newX, y: newY } : note))
    }

    const bringToFront = (id: string) => {
        setNotes(prev => {
            const maxZ = Math.max(...prev.map(note => note.zIndex), 0)
            return prev.map(note => note.id === id ? { ...note, zIndex: maxZ + 1 } : note)
        }
        )
    }

    return { addNote, deleteNote, updateNote, moveNote, bringToFront }
}