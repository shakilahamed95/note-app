import { ReactNode } from "react";

export interface INote {
  id: number;
  title: string;
}

export interface RootLayoutProps {
  children: ReactNode;
}