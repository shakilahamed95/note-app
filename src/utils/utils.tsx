import { INote } from "@/interface/Interface";
import axios from "axios";

// Function to fetch all notes

export const fetchNotes = () =>
  axios.get("http://localhost:5000/notes").then((res) => res.data);

// Function to add a note
export const addNotes = (data: INote) =>
  axios.post("http://localhost:5000/notes", data).then((res) => res.data);

// Function to delete a note by ID
export const deleteNote = (id: number) =>
  axios.delete(`http://localhost:5000/notes/${id}`).then((res) => res.data);

// Function to update a note by ID

export const updateNote = (data: INote) =>
  axios
    .patch(`http://localhost:5000/notes/${data.id}`, { title: data.title })
    .then((res) => res.data);

    