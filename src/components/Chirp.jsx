


const Chirp = props => {

    return (<>

            <div className="card-body border">
                <div className="chirpBody">
                    <h4 className="chirpHeader" style={{ marginBottom: 1 + 'em' }}>@{props.user}</h4>
                    <p className="chirpBody">{props.message}</p>
                    <p><small className="opacity-75">© 2023</small></p>
                </div>
            </div>

        </>);

}


export default Chirp;