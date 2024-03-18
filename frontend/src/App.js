import "./App.css";
import Homepage from "./Pages/HomePage";
import Chatpage from "./Pages/ChatPage";
import { Routes, Route } from "react-router-dom";

function App() {
  return (

    <div className="App">
      {/* <Router> */}
        <Routes>
          <Route exact path="/" element={<Homepage/>} />
          <Route exact path="/chats" element={<Chatpage/>} />
        </Routes>
      {/* </Router> */}
    </div>

  );
}

export default App;
