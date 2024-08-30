import { Router } from 'express';
import { fetchHotSearch } from '../../src/pages/myHotSearch/index';
const router = Router();

router.get('/search/:source', fetchHotSearch);

export default router;