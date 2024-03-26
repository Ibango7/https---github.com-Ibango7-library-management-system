import { createContext } from "react";
export interface IBook {
    id: string;
    ISBN: string;
    title: string;
    description: string;
    content: string;
    author: string;
    genre: string;
    imageUrl: string;
    accessFrequency: number;
    quantity: number;
    shelf: number;
  }
export interface IbookGenre{
    genre:string;
}
export interface IBookstateContext {
    books?: IBook[];
    error?:any;
}

export interface IBookActionContext {
    getBooksByGenre:(bookInfo: IBook) => void;
}

export const BOOK_CONTEXT_INITIAL_STATE: IBookstateContext = {};
export const BookStateContext = createContext<IBookstateContext>(BOOK_CONTEXT_INITIAL_STATE);
export const BookActionContext = createContext<IBookActionContext>({} as any);