export default function Card(props) {
    return (
        <div className="boxContainer">
            <div className="theBox" style={props.myStyle}>
                <h1>{props.title}</h1>
                <h2>{props.subtitle}</h2>
            </div>
            <div className="theBox" style={props.myStyle}>
                <h3>{props.desc}</h3>
            </div>
        </div>
    );
}

/*assisted by E.Yarborough*/