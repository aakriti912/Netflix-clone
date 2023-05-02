import React from "react";
import Homescreen from "./Components/Homescreen/Homescreen";


// import { Counter } from "./features/counter/Counter";
import "./App.css";

function App() {
  return (
    <div className="app">
      {/* <Router>
        <Routes>
          <Route exact path="/" component={<Homescreen/>}/>
        
  
        </Routes>
      </Router> */}
      <Homescreen />
    </div>
  );
}

export default App;
