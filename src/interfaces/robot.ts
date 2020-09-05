import { ChangeEvent } from "react";

export interface Robot {
  id: string;
  name: string;
  email: string;
}

export interface CardListType {
  robots: Robot[];
}

export interface SearchBoxProps {
  change: (e: ChangeEvent<HTMLInputElement>) => void;
}

export interface ScrollProps {
  children: React.ReactNode;
}
