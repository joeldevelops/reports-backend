import comment from "../models/comments";

import { Comment, CommentInput } from ".";

export const getComments = async (page: number): Promise<Comment[]> => {
    return comment.findAll({
        where: {
            page,
        },
    });
}

export const getCommentById = async (id: number): Promise<Comment> => {
    return comment.findByPk(id);
}

export const createComment = async (newComment: CommentInput): Promise<Comment> => {
    return comment.create(newComment);
}


