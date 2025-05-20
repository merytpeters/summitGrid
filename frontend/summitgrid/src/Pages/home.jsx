import GlobalHeader from "../Components/globalheader";
import '../Styles/home.css';
import Hero from "../Components/hero";
import EventCard from "../Components/eventCard";
import EventType from "../Components/eventType";
import Searchbar from "../Components/searchbar";
import Footer from "../Components/footer";
import { useState, useRef } from "react";

function Home () {
  const [searchTerm, setSearchTerm] = useState("");
const [selectedFilter, setSelectedFilter] = useState("All");

const eventSectionRef = useRef(null);

const handleSearch = (term, filter, location) => {
  setSearchTerm(term);
  setSelectedFilter(filter);

  if (eventSectionRef.current) {
    eventSectionRef.current.scrollIntoView({ behavior: "smooth" });
  }

  if (filter === "Location" && location) {
    const elementId = `location-${location.toLowerCase().replace(/\s+/g, '-')}`;
    const target = document.getElementById(elementId);
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }
};

  return (
    <div className="page-container">
        <img className="logo-image" src="/img/SGlogo.png" alt="Logo" />
        <div className="searchbar">
          <Searchbar onSearch={handleSearch} />
        </div>
        <div className="header">
            <GlobalHeader isMobileMenu />
        </div>
        <div className="hero">
            <Hero />
        </div>
        <div className="event-type">
          <EventType onFilterSelect={handleSearch}/>
        </div>
        <div className="event-card" ref={eventSectionRef}>
            <EventCard searchTerm={searchTerm} selectedFilter={selectedFilter} />
        </div>
        <div className="footer">
            <Footer />
        </div>
    </div>
  );
}
export default Home;