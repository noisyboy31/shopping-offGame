import React from "react";
import { Route, Routes } from "react-router-dom";
import { Container } from "react-bootstrap";
import Purchase from "./components/Purchase";
import NavBar from "./components/NavBar";
import { ShoppingCartProvider } from "./context/ShoppingCartContext";

function App() {
  return (
    <ShoppingCartProvider>
      <NavBar />
      <Container className="mb-4">
        <Routes>
          <Route path="/" element={<Purchase />} />
        </Routes>
      </Container>
    </ShoppingCartProvider>
  );
}

export default App;
