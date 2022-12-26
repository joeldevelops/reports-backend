export type Comment = {
    id: number;
    content: string;
    page: number;
    paragraph: number;
    createdAt: Date;
    updatedAt: Date;
};

export type CommentInput = {
    content: string;
    page: number;
    paragraph?: number;
};