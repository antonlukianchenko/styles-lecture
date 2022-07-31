import { globalStyles } from "./theme";
import Accordion from "./comp/Accordion";

function App() {
  return (
    <div className="App">
      {globalStyles()}
      <header className="App-header">
        <Accordion header="open me">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque beatae
          consequatur facere ipsum iste neque non quaerat quibusdam rem
          voluptatem!
        </Accordion>
      </header>
    </div>
  );
}

export default App;
