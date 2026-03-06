export interface CreateNoteParams {
    title: string;
    content: string;
    color: string;
}

export interface CreateNoteResponse {
    id: number;
    user_id: number;
    title: string;
    content: string;
    color: string;
    created_at: string;
    updated_at: string;
}

export interface GetOneNoteResponse {
    id: 0;
    user_id: 0;
    title: string;
    content: string;
    color: string;
    created_at: string;
    updated_at: string;
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
    id: number,
    title?: string;
    content?: string;
    color?: string;
}
