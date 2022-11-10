import "./App.css";
import { Navbar } from "./components/Navbar/Navbar";
import { Header } from "./components/Header/Header";
import { ItemListContainer } from "./components/ItemListContainer/ItemListContainer";

function App() {
  return (
    <>
      <div className="App">
        <Navbar />
        <header className="header">
          <Header title="Loombar" imglocal="header-image.jpg" />
        </header>
        <main>
          <ItemListContainer title="nuestros productos" />
        </main>
      </div>
    </>
  );
}

export default App;
