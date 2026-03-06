import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query";
import {
    CreateNoteParams,
    CreateNoteResponse,
    DeleteNoteResponse,
    GetOneNoteResponse,
    UpdateNoteParams,
    UpdateNoteResponse,
} from "./types";

const baseUrl = process.env.EXPO_PUBLIC_BASE_URL;

const baseQuery = fetchBaseQuery({
    baseUrl,
});

export const notesApi = createApi({
    reducerPath: "notesApi",
    baseQuery,
    endpoints: (builder) => ({
        create: builder.mutation<CreateNoteResponse, CreateNoteParams>({
            query: (body) => ({
                url: "notes",
                method: "POST",
                body,
            }),
        }),
        getOne: builder.query<GetOneNoteResponse, void>({
            query: (id) => ({
                url: `notes/${id}`,
            }),
        }),
        delete: builder.mutation<DeleteNoteResponse, void>({
            query: (id) => ({
                url: `notes/${id}`,
                method: "DELETE",
            }),
        }),
        update: builder.mutation<UpdateNoteResponse, UpdateNoteParams>({
            query: (id) => ({
                url: `notes/${id}`,
                method: "PATCH",
            }),
        }),
    }),
});
