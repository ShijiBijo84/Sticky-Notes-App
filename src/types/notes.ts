export type NoteProps = {
    id: number;
    title: string;
    content: string;
    x: number;
    y: number;
    color: string;
}

export type NotePositionProps = {
    id: number;
    x: number;
    y: number
} | null

export type ToolBarProps = {
    addNote: () => void;
    deleteNote: (id: number) => void;
    updateNote: (id: number, field: 'title' | 'content' | 'color', value: string) => void;
    selectedId: number | null;
}

export type DeleteButtonProps = {
    onClick: () => void
}

export type NoteItemProps = {
    note: NoteProps;
    updateNote: (id: number, field: 'title' | 'content' | 'color', value: string) => void;
    startDrag: (e: React.MouseEvent, id: number) => void;
    isSelected: boolean;
}