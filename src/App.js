
import './App.css';
import { useState } from "react";
import Menu from "./components/Menu/Menu";
import Header from "./components/Header/Header";
import Invite from "./components/Invite/Invite";
import Programm from "./components/Progaramm/Programm";
import Questions from "./components/Questions/Questions";
import Banket from "./components/Banket/Banket";
import Footer from "./components/Footer/Footer";
import Timer from "./components/Timer/Timer";

function App() {
    const [loading, setLoading] = useState(true)

    window.onload = function () {
        setLoading(false)
    }

    const rootStyles = {
        height: '100vh',
        display: 'flex',
        justifyContent: "center",
        alignItems: "center"
    }

    return (
      <div className="Root" style={loading ? rootStyles : undefined}>
      { loading ? <div className="loader"></div> :
        <div className="App">
            <Menu />
            <Header />
            <Timer />
            <Invite />
            <Programm />
            <Questions />
            <Banket />
            <Footer />
        </div>
      }
      </div>
  );
}

export default App;
