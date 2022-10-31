import "./App.css";
import { Navbar } from "./components/Navbar/Navbar";
import { Header } from "./components/Header/Header";

function App() {
  return (
    <>
      <div className="App">
        <Navbar />
        <header className="header">
          <Header title="Loombar" imglocal="header-image.jpg" />
        </header>
      </div>
    </>
  );
}

export default App;
