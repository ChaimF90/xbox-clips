interface Game {
    Name: string;
    ReducedDescription: string;
    TitleId: number;
    Images: Array<Image>;
    ID: string;
}

interface Image {
    Url: string;
}

export {
    Game
};