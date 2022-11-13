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
          <Header title="Retroma" imglocal="header-image.jpg" />
        </header>
        <main>
          <ItemListContainer title="our billboard" />
        </main>
      </div>
    </>
  );
}

export default App;
