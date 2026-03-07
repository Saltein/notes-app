import { Note } from "../../../entities/note/model/types";

export interface CreateNoteParams {
    title: string;
    content: string;
    color: string;
}

export interface CreateNoteResponse extends Note {}

export interface GetOneNoteResponse extends Note {}

export interface GetMyNotesResponse {
    data: Note[];
}

export interface DeleteNoteResponse {
    id: number;
}

export interface UpdateNoteParams {
    title?: string;
    content?: string;
    color?: string;
}

export interface UpdateNoteResponse {
    id: number;
    title?: string;
    content?: string;
    color?: string;
}
