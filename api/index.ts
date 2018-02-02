import { Router } from 'express';
const router = Router();

import profile from './profile';
import games from './games';

router.use('/profile', profile);
router.use('/games', games);

export default router;