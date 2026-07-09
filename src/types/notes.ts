export type Note = {
    id: string;
    title: string;
    content: string;
    color: string;
}

export type NotePosition = {
    x: number;
    y: number;
    zIndex: number;
};

export type DragState = {
    id: string;
    x: number;
    y: number;
} | null;

export type NoteProps = Note & NotePosition

export type NoteEditableField = 'title' | 'content' | 'color'

export type AddNoteFn = () => void;

type UpdateNoteFn = (id: string, field: NoteEditableField, value: string) => void;

type DeleteNoteFn = (id: string) => void;

type StartDragFn = (e: React.MouseEvent, id: string) => void;

export type ToolBarProps = {
    addNote: AddNoteFn;
    deleteNote: DeleteNoteFn;
    updateNote: UpdateNoteFn;
    selectedId: string | null;
}

export type ColorPaletteProps = {
    selectedId: string | null;
    updateNote: UpdateNoteFn;
}

export type DeleteButtonProps = {
    onClick: () => void
}

export type NoteItemProps = {
    note: NoteProps;
    updateNote: UpdateNoteFn
    startDrag: StartDragFn;
    isSelected: boolean;
}