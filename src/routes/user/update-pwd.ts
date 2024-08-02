import { Router } from 'express';
import { updatePwd } from '../../controllers/authController';

const router = Router();

router.put('/pwd', updatePwd);

export default router;