import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import coverImg from "../../images/cover_not_found.jpg";
import "./BookDetails.css";

const BookDetails = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { book } = location.state || {};

  if (!book) {
    return <div className="book-details">No book found.</div>;
  }

  const { title, authors, categories, thumbnail, description } = book;

  return (
    <section className="book-details">
      <div className="container">
        <button
          type="button"
          className="flex flex-c back-btn"
          onClick={() => navigate(-1)}
        >
          <FaArrowLeft size={22} />
          <span className="fs-18 fw-6">Go Back</span>
        </button>

        <div className="book-details-content grid">
          <div className="book-details-img">
            <img src={thumbnail || coverImg} alt={title} />
          </div>
          <div className="book-details-info">
            <div className="book-details-item title">
              <span className="fw-6 fs-24">{title}</span>
            </div>
            <div className="book-details-item">
              <span className="fw-6">Authors: </span>
              <span>{authors.join(", ")}</span>
            </div>
            <div className="book-details-item">
              <span className="fw-6">Categories: </span>
              <span>{categories.join(", ")}</span>
            </div>
            <div className="book-details-item">
              <span className="fw-6">Description: </span>
              <span>{description}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookDetails;
