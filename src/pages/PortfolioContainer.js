import React, { useState } from "react";
import Navbar from "../components/Navbar";
import About from "./About";
import Projects from "../components/Projects/Projects";
import Resume from "./Resume";
import Contact from "./Contact";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "./Styles/Main.css";

export default function PortfolioContainer() {
  // Sets default page to "About"
  const [currentPage, setCurrentPage] = useState("About");

  // When on a page, returns corresponding page
  const renderPage = () => {
    if (currentPage === "About") {
      return <About />;
    }
    if (currentPage === "Projects") {
      return <Projects />;
    }
    if (currentPage === "Resume") {
      return <Resume />;
    }

    return <Contact />;
  };

  // Changes state of currentPage to the page selected from Navbar then returns the value
  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>
      <Header />
      <Navbar currentPage={currentPage} handlePageChange={handlePageChange} />
      {renderPage()}
      <Footer />
    </div>
  );
}
