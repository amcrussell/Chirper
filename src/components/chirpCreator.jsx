import { createElement, useState } from "react";
import Chirp from "./Chirp";
import { createRoot } from "react-dom/client";



const ChirpCreator = props => {

    const [username, setUsername] = useState('');
    const [text, setText] = useState('');

    let submit = (e) => {
        e.preventDefault();
        
        //gen new chirps here prob ig       not here something with arryas idk im sleep

        let card = () => {
            return(
                <>
                <Chirp user={username} message={text} className="card-text"></Chirp>
                </>
            );
        }
        const root = createRoot(document.getElementById('feed'));
        
        //document.getElementById('feed').append(createElement(Chirp, {user: {username}, message: {text}, className: 'card-text'}))
        setUsername('');
        setText('');
        root.render(card());
    }

    return (<>

        <form className="form chirpCreator" onSubmit={submit}>
            <label htmlFor="username" className="form-label">Username</label>
            <input type="text" value={username} onChange={e => setUsername(e.target.value)} id="username" name="username" className="form-control" placeholder="Username" />
            <label htmlFor="text" className="form-label">text</label>
            <input type="text" value={text} onChange={e => setText(e.target.value)} id="text" name="text" className="form-control" placeholder="text" />
            <div style={{ height: 10 + 'px' }} />
            <input type="submit" value='Chirp' className="btn btn-primary" />
        </form>

    </>);

};


export default ChirpCreator;