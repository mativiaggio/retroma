import "./App.css";
import { Navbar } from "./components/Navbar/Navbar";
import { Header } from "./components/Header/Header";
import { Footer } from "./components/Footer/Footer";
import { ItemListContainer } from "./components/ItemListContainer/ItemListContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ItemDetailContainer } from "./components/ItemDetail/ItemDetailContainer";
import { CartContextProvider } from "./context/cartContext";
import { Cart } from "./components/Navbar/Cart/Cart";
import SuccessBuy from "./components/SuccessBuy/SuccessBuy";

function App() {
  return (
    <>
      <CartContextProvider>
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
                  <Footer title="Retroma" copyright="© all rights reserved" />
                </>
              }
            />
            <Route
              path="/movies/"
              element={
                <main>
                  <ItemListContainer
                    title="our billboard"
                    imgpath="assets/movies"
                  />
                </main>
              }
            />
            <Route
              path="/cart/"
              element={
                <>
                  <Cart title="Welcome to your cart!" />
                  <Footer title="Retroma" copyright="© all rights reserved" />
                </>
              }
            />
            <Route
              path="/movies/category/:idCategory"
              element={
                <main>
                  <ItemListContainer
                    title="our billboard"
                    imgpath="../../assets/movies"
                  />
                </main>
              }
            />
            <Route
              path="/movies/billboard/:id-:title"
              element={
                <>
                  <ItemDetailContainer />
                </>
              }
            />
            <Route
              path="/successful-purchase/:idOrder"
              element={<SuccessBuy />}
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
      </CartContextProvider>
    </>
  );
}

export default App;
