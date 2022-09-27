import Card from "./Card.js"
import './Card.css'
const cardOne = 4;
const colors = ['maroon', 'gray', 'orange', 'red'];
function App() {
  return ([...Array(cardOne)].map((e, i) => <Card
    key={i}
    title = {"Top Secret" + (i + 1)}
    subtitle = {"Middle Secret" + (i + 1)}
    desc = {"Bottom Secret" + (i + 1) + "!"}
    myStyle = {{backgroundColor: colors[i], width: '250px'}}
    />)
  );
}

export default App;

/*assisted by E.Yarborough*/
