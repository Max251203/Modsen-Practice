import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "@pages/Home";
import BookDetails from "@pages/BookDetails/BookDetails";
import BookList from "@components/BookList/BookList";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route index element={<BookList />} />
          <Route path="book/:id" element={<BookDetails />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
