import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AppProvider } from "./context";
import "./index.css";
import Home from "./pages/Home/Home";
import BookList from "./components/BookList/BookList";
import BookDetails from "./components/BookDetails/BookDetails";

export default function App() {
  return (
    <AppProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}>
            <Route path="/" element={<BookList />} />
            <Route path="/book/:id" element={<BookDetails />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </AppProvider>
  );
}
