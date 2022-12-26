export type ThreadedComment = {
    id: number;
    content: string;
    createdAt: Date;
    updatedAt: Date;
    parentId?: number;
};

export type ThreadedCommentInput = {
    content: string;
    parentId?: number;
};