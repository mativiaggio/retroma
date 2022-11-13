import "./App.css";
import { Navbar } from "./components/Navbar/Navbar";
import { Header } from "./components/Header/Header";
import { ItemListContainer } from "./components/ItemListContainer/ItemListContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ItemDetailContainer } from "./components/ItemDetail/ItemDetailContainer";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <header className="header">
                  <Header title="Retroma" imglocal="header-image.jpg" />
                </header>
                <main>
                  <ItemListContainer title="our billboard" />
                </main>
              </>
            }
          />
          <Route
            path="/movie/:id-:title"
            element={
              <>
                <ItemDetailContainer />
              </>
            }
          />
          <Route
            path="*"
            element={
              <div style={{ fontSize: `64px`, paddingTop: `54px` }}>
                <h1>Error 404</h1>
              </div>
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
