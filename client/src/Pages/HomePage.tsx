import * as React from 'react';
import { HomePageState } from '../interfaces';
import axios from 'axios';
import GameBox from '../components/Game';

class MainContainer extends React.Component<any, HomePageState> {
    constructor(props: any) {
        super(props);
        this.state = {
            games: [
                {
                    ID: '',
                    ReducedDescription: '',
                    Name: '',
                    TitleId: 0,
                    Images: [
                        {
                            Url: ''
                        }
                    ]
                }
            ]
        };
    }

    async componentDidMount() {
        let response = await axios.get('/api/games');
        this.setState({ games: response.data });
    }

    render() {
        return (
            <GameBox games={this.state.games} />
        );
    }
}

export default MainContainer;