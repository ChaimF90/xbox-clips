import * as React from 'react';
import { GameProps } from '../interfaces';
import { Game } from '../../../interfaces/game';

const GameBox = (props: GameProps) => {

    function renderGame(game: Game) {
        const style = {
            height: 150,
            width: 150,
            float: 'left',
            marginRight: 15,
            marginBottom: 15,
            backgroundColor: 'blue',
            cursor: 'pointer'
        };
        const imageStyle = {
            height: 150,
            width: 150
        };
        return (
            <div style={style} key={game.ID}>
                <img style={imageStyle} src={game.Images[0].Url} title={game.Name} />
            </div>
        );
    }

    return (
        <div>
            {props.games.map(renderGame)}
        </div>
    );
};

export default GameBox;