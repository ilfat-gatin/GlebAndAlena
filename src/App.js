
import './App.css';
import Menu from "./components/Menu/Menu";
import Header from "./components/Header/Header";
import Invite from "./components/Invite/Invite";
import Programm from "./components/Progaramm/Programm";
import Questions from "./components/Questions/Questions";
import Ceremony from "./components/Ceremony/Ceremony";
import Banket from "./components/Banket/Banket";
import Footer from "./components/Footer/Footer";
import Timer from "./components/Timer/Timer";

function App() {
  return (
    <div className="App">
        <Menu />
        <Header />
        <Timer />
        <Invite />
        <Programm />
        <Questions />
        <Ceremony />
        <Banket />
        <Footer />
    </div>
  );
}

export default App;
