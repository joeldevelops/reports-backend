import thread from "../models/threads";

import { ThreadedComment, ThreadedCommentInput } from "./threads.types";

export async function getThreadByParentId(parentId: number): Promise<ThreadedComment[]> {
    return thread.findAll({
        where: {
            parentId,
        },
        order: [
            ['createdAt', 'ASC'],
        ],
    });
};

export async function createThread(parentId: number, newThread: ThreadedCommentInput): Promise<ThreadedComment> {
    return thread.create({
        ...newThread,
        parentId,
    });
};