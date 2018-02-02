import { Game } from '../../interfaces/game';

interface HomePageState {
    games: Array<Game>;
}

interface GameProps {
    games: Array<Game>;
}

export {
    HomePageState,
    GameProps
};