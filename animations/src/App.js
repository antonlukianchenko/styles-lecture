import logo from "./logo.svg";
import "./App.css";
import { motion } from "framer-motion";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: {
              duration: 3,
            },
          }}
        >
          <h1>this is a test animation</h1>
        </motion.div>
      </header>
    </div>
  );
}

export default App;
