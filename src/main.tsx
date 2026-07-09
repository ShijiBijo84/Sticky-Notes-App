import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles/index.css";
import NotesBoard from "./components/NotesBoard/NotesBoard";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <NotesBoard />
  </StrictMode>
);
