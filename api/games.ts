import { Router } from 'express';
const router = Router();
import { getClipsByGame, getLatestGames } from '../xboxapi';

router.get('/', async (req, res) => {
    try {
        let response = await getLatestGames();
        res.status(200).json(response.data);
    } catch (e) {
        console.log(e);
    }
});

router.get('/:gameid', async (req, res) => {
    try {
        let response = await getClipsByGame(req.params.gameid);
        res.status(200).json(response.data);
    } catch (e) {
        console.log(e);
    }
});

export default router;