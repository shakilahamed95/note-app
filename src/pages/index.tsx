import React from "react";
import RootLayout from "@/components/layout/RootLayout";
import { useQuery } from "@tanstack/react-query";
import { fetchNotes } from "@/utils/utils";
import { INote } from "@/interface/Interface";
import Note from "@/components/Note";
import { Table } from "@radix-ui/themes";

export default function Home() {
  const { data: notes, isLoading } = useQuery({
    queryKey: ["note"],
    queryFn: fetchNotes,
  });

  return (
    <RootLayout>
      <div className="container mx-auto py-16">
        <h3 className="text-3xl text-center text-blue-800 font-semibold">
          All Added notes
        </h3>
        <div className="py-10">
          {!notes && isLoading && (
            <p className="text-center text-xl text-red-600">Loading....</p>
          )}
          {notes && !isLoading && (
            <Table.Root>
              <Table.Header>
                <Table.Row>
                  <Table.ColumnHeaderCell>Note</Table.ColumnHeaderCell>
                  <Table.ColumnHeaderCell>Edit</Table.ColumnHeaderCell>
                  <Table.ColumnHeaderCell>Delete</Table.ColumnHeaderCell>
                </Table.Row>
              </Table.Header>
              <Table.Body>
                {notes.map((note: INote) => (
                  <Note key={note.id} note={note} />
                ))}
              </Table.Body>
            </Table.Root>
          )}
        </div>
      </div>
    </RootLayout>
  );
}
