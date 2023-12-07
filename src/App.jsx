import { useState } from "react";
import Chirp from "./components/Chirp";
import ChirpCreator from "./components/chirpCreator";


const App = () => {


    const [newCard, setNewCard] = useState([['someone', 'hello'], ['second guy', 'hi'], ['third guy', 'buy']]);
    const feed = [];
    let genCard = (e) => {

        setNewCard([...newCard, e]);

    }

    newCard.forEach(e => {
        feed.push(<Chirp key={feed.length} user={e[0]} message={e[1]} className="card-text" ></Chirp>);

    })

    return (<>

        <div style={{ height: 2 + "em" }} />
        <div className="row">

            <div className="col-1"></div>

            <div className="col-4" style={{ marginRight: 4 + "em" }}>
                <div className="card" style={{ width: 20 + "em" }} >
                    <div className="card-body">
                        <ChirpCreator newCardData={genCard}>

                        </ChirpCreator>
                    </div>
                </div>
            </div>

            <div className="col">
                <div className="card ">
                    {feed}
                </div>
            </div>

            <div className="col-1"></div>

        </div>

    </>);
};

export default App;