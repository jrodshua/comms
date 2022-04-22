import Header from "./layout/Header";
import Announcements from "./components/announcements/Announcements";

import "./styles/reset.css";
import "./styles/header.css";
import "./styles/announce.css";

function App() {
  return (
    <div className="comms-app">
      <Header />
      <Announcements />
    </div>
  );
}

export default App;
