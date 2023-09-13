import RootLayout from "@/components/layout/RootLayout";
import { addNotes, fetchNotes } from "@/utils/utils";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import React, { useState } from "react";
import { toast } from "react-toastify";
import { Button, TextField } from "@radix-ui/themes";

export default function AddNewNote() {
  const [title, setTitle] = useState("");
  const queryClient = useQueryClient();

  const { data: notes, isLoading } = useQuery({
    queryKey: ["note"],
    queryFn: fetchNotes,
  });

  const { mutateAsync: addNew } = useMutation({
    mutationFn: addNotes,
    onSuccess: () => {
      // Invalidate and refetch
      queryClient.invalidateQueries({ queryKey: ["note"] });
    },
  });

  const handleAddNote = async (id: number) => {
    try {
      await addNew({ id: id, title: title });
      setTitle("");
      toast.success("You have successfully added a new note", {
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
      console.log(error);
    }
  };

  return (
    <RootLayout>
      <div className="container mx-auto">
        <h3 className="text-3xl text-center text-blue-700 font-semibold pt-28">
          Add A New Note
        </h3>
        <div className="flex items-center justify-center mt-5">
          <div className="flex flex-col gap-5 items-center justify-center bg-gray-200 w-fit p-8 rounded-md">
            <TextField.Input
              variant="surface"
              placeholder="Enter Your Note Here"
              type="text"
              className="min-w-[300px]"
              onChange={(e) => setTitle(e.target.value)}
              value={title}
            />
            <Button
              disabled={title === ""}
              onClick={() => handleAddNote(Date.now())}
            >
              Add new
            </Button>
          </div>
        </div>
      </div>
    </RootLayout>
  );
}
