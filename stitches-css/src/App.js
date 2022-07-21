import "./App.css";
import { globalStyles, styled } from "./theme";

const Button = styled("button", {
  bc: "$lime600",
});

function App() {
  return (
    <div className="App">
      {globalStyles()}
      <header className="App-header">
        <h1>this is an h1</h1>
        <Button>test</Button>
      </header>
    </div>
  );
}

export default App;
