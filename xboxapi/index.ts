import axios from 'axios';
const baseURL = "https://xboxapi.com/v2";

const config = {
    headers: {
        "X-AUTH": process.env.API_KEY
    }
}

function getXUID(gamertag: string) {
    return axios.get(`${baseURL}/xuid/${gamertag}`, config);
}

function getClipsById(id: string) {
    return axios.get(`${baseURL}/${id}/game-clips`, config);
}

function getLatestGames() {
    return axios.get(`${baseURL}/latest-xboxone-games`, config);
}

function getClipsByGame(gameId: string) {
    return axios.get(`${baseURL}/game-clips/${gameId}`, config);
}

export {
    getXUID,
    getClipsById,
    getLatestGames,
    getClipsByGame
}