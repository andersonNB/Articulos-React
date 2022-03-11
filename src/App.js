import logo from './assets/images/logo.svg';
import './assets/css/App.css';
import MiComponente from './components/MiComponente';
import ContenidoSide from "./components/ContenidoSide";
import RutasComponent from './Router'
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">

      <RutasComponent />



      <div className="center">
        <ContenidoSide></ContenidoSide>
      </div>
      <Footer></Footer>

      <section className="componentes">
        <MiComponente></MiComponente>
      </section>
    </div>
  );
}

export default App;
