import { Router } from 'express';
const router = Router();
import { getXUID, getClipsById } from '../xboxapi';

router.get('/xuid/:gamertag', async (req, res) => {
    try {
        let response = await getXUID(req.params.gamertag);
        res.status(200).json(response.data);
    } catch (e) {
        console.log(e);
    }
});

router.get('/clips/:xuid', async (req, res) => {
    try {
        let response = await getClipsById(req.params.xuid);
        res.status(200).json(response.data);
    } catch (e) {
        console.log(e);
    }
});

export default router;