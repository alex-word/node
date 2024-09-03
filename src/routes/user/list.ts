import { Router } from 'express';
import { handleGetUserList } from '../../pages/user/list';
const router = Router();

router.get('/user-list', handleGetUserList);


export default router;