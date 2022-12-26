import { Router } from 'express';
import threadsV1 from './threads.router.v1';

const router = Router();

router.use('/v1/threads', threadsV1);

export * from './threads.types';
export default router;