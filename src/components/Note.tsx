import React, { useState } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteNote, updateNote } from "@/utils/utils";
import { toast } from "react-toastify";
import { DeleteIcon, EditIcon } from "@/icons/Icons";
import { INote } from "@/interface/Interface";
import { useAppDispatch, useAppSelector } from "@/redux/hook";
import { setEditingState } from "@/redux/features/noteSlice";
import { Tooltip, Button, TextField, Table } from "@radix-ui/themes";

export default function Note({ note }: { note: INote }) {
  const [title, setTitle] = useState(note.title);

  const isEditing = useAppSelector((state) => state.note.isEditing[note.id]);

  const dispatch = useAppDispatch();
  const queryClient = useQueryClient();

  const { mutateAsync: deleteOne } = useMutation({
    mutationFn: deleteNote,
    onSuccess: () => {
      // Invalidate and refetch
      queryClient.invalidateQueries({ queryKey: ["note"] });
    },
  });

  const { mutateAsync: updateOne } = useMutation({
    mutationFn: updateNote,
    onSuccess: () => {
      // Invalidate and refetch
      queryClient.invalidateQueries({ queryKey: ["note"] });
    },
  });

  const handleUpdate = async () => {
    try {
      dispatch(setEditingState({ id: note.id, isEditing: false }));
      await updateOne({ id: note.id, title });
      toast.success("Your selected note is updated", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
    } catch (error) {
      toast.error("Something Went wrong", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
    }
  };

  const handleDelete = async () => {
    try {
      await deleteOne(note.id);
      toast.success("Note deleted Successfully", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
    } catch (error) {
      toast.error("Something Went wrong", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
    }
  };

  return (
    <Table.Row>
      <Table.RowHeaderCell>
        {isEditing ? (
          <div className="max-w-[320px]">
            <TextField.Input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
        ) : (
          <p className="text-xl">{title}</p>
        )}
      </Table.RowHeaderCell>
      <Table.Cell>
        {isEditing ? (
          <Button onClick={handleUpdate}>Save</Button>
        ) : (
          <Tooltip content="Edit Note">
            <Button
              onClick={() =>
                dispatch(setEditingState({ id: note.id, isEditing: true }))
              }
            >
              <EditIcon />
            </Button>
          </Tooltip>
        )}
      </Table.Cell>
      <Table.Cell>
        <Tooltip content="Delete Note">
          <button
            className="py-2 px-3 bg-red-600 rounded-md text-white hover:bg-red-500 transition hover:duration-300"
            onClick={handleDelete}
          >
            <DeleteIcon />
          </button>
        </Tooltip>
      </Table.Cell>
    </Table.Row>
  );
}
