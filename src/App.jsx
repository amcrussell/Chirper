import { useState } from "react";
import Chirp from "./components/Chirp";
import ChirpCreator from "./components/chirpCreator";


const App = () => {


    const [newCard, setNewCard] = useState([]);
    
    console.log(newCard);

    let genCard = (e) => {

        setNewCard([...newCard, e]);

    }

    return (<>

        <div style={{ height: 2 + "em" }} />
        <div className="row">

            <div className="col-1"></div>

            <div className="col-4" style={{ marginRight: 4 + "em" }}>
                <div className="card" style={{ width: 20 + "em" }} >
                    <div className="card-body">
                        <ChirpCreator newCard={genCard}>

                        </ChirpCreator>
                    </div>
                </div>
            </div>

            <div className="col">
                <div id="feed" className="card ">
                    <Chirp user='someone' message='Hello' className="card-text"></Chirp>
                    <Chirp user='second guy' message='Hi' className="card-text"></Chirp>
                    <Chirp user='third guy' message='Bye' className="card-text"></Chirp>
                    {newCard}
                </div>
            </div>

            <div className="col-1"></div>

        </div>

    </>);
};

export default App;