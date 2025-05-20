import React, { useState } from "react";

const FILTER_OPTIONS = [
  "All", "Bootcamps", "Career Fairs", "Code Sprints", "Competitions", "Conferences", "Demos",
  "Exhibitions", "Festivals", "Fireside Chats", "Food and tech", "Free", "Gaming tournaments",
  "Hackathons", "In-person", "Investor Meetings", "Job Fairs", "Location", "Meetups",
  "Mentorship Programs", "Music and tech", "Networking", "Online", "Paid", "Panel Discussions",
  "Product Launches", "Retreats", "Roundtables", "Seminars", "Showcases", "Startup Pitches",
  "Summits", "Symposiums", "Tech Talks", "Training Sessions", "Webinars", "Women only", "Workshops"
].sort();

const LOCATION_FILTERS = [
  "New York", "San Francisco", "Los Angeles", "Chicago", "Seattle", "Austin", "Boston",
  "London", "Berlin", "Tokyo", "Remote", "Delta State", "Abuja", "Lagos", "Port Harcourt",
  "Ibadan", "Enugu", "Abia", "Akwa Ibom", "Benue", "Ekiti", "Kano", "Kaduna", "Oyo", "Online"
].sort();

function Searchbar({ onSearch }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedFilter, setSelectedFilter] = useState("All");
  const [selectedLocation, setSelectedLocation] = useState("All");
  const [showFilters, setShowFilters] = useState(false);
  const [showLocationSubmenu, setShowLocationSubmenu] = useState(false);

  const handleInputChange = (e) => {
    const value = e.target.value;
    setSearchTerm(value);
    if (onSearch) onSearch(value, selectedFilter, selectedLocation);
  };

  const handleFilterSelect = (filter) => {
    if (filter === "Location") {
      setShowLocationSubmenu(true); // Show submenu
    } else {
      setSelectedFilter(filter);
      setShowFilters(false);
      setShowLocationSubmenu(false);
      if (onSearch) onSearch(searchTerm, filter, selectedLocation);
    }
  };

  const handleLocationSelect = (location) => {
    setSelectedLocation(location);
    setSelectedFilter("Location");
    setShowFilters(false);
    setShowLocationSubmenu(false);
    if (onSearch) onSearch(searchTerm, "Location", location);
  };

  const toggleDropdown = () => {
    setShowFilters((prev) => !prev);
    setShowLocationSubmenu(false);
  };

  return (
    <div style={{
      position: "relative",
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
      alignItems: "center",
      border: "1px solid #ccc",
      borderRadius: "25px",
      padding: "8px 12px",
      width: "100%",
      maxWidth: "600px",
      margin: "0 auto",
      background: "#fff"
    }}>
      <div style={{ display: "flex", width: "100%", alignItems: "center", marginBottom: "8px" }}>
        <input
          type="text"
          placeholder="Search by keyword..."
          value={searchTerm}
          onChange={handleInputChange}
          style={{
            flex: 1,
            border: "none",
            outline: "none",
            fontSize: "1rem",
            padding: "6px"
          }}
        />
        <button onClick={toggleDropdown} style={{
          display: "flex",
          alignItems: "center",
          gap: "6px",
          background: "none",
          border: "none",
          cursor: "pointer",
          padding: "6px"
        }}>
          <img src="/img/filterIcon.png" alt="Filter" style={{ height: "20px" }} />
          <img src="/img/arrowdownicon.png" alt="Dropdown" style={{ height: "12px" }} />
        </button>
      </div>

      {showFilters && (
        <div style={{
          position: "absolute",
          top: "100%",
          right: 0,
          background: "#fff",
          border: "1px solid #ccc",
          borderRadius: "8px",
          padding: "8px",
          zIndex: 1000,
          width: "220px",
          maxHeight: "300px",
          overflowY: "auto"
        }}>
          {FILTER_OPTIONS.map((option) => (
            <div
              key={option}
              onClick={() => handleFilterSelect(option)}
              style={{
                padding: "8px 12px",
                cursor: "pointer",
                backgroundColor: selectedFilter === option ? "#f0f0f0" : "transparent",
                fontWeight: selectedFilter === option ? "bold" : "normal",
                color: selectedFilter === option ? "#000" : "black"
              }}
            >
              {option}
            </div>
          ))}
        </div>
      )}

      {showFilters && showLocationSubmenu && (
        <div style={{
          position: "absolute",
          top: "100%",
          left: 0,
          background: "#fff",
          border: "1px solid #ccc",
          borderRadius: "8px",
          padding: "8px",
          zIndex: 1001,
          width: "220px",
          maxHeight: "300px",
          overflowY: "auto",
          marginTop: "8px"
        }}>
          {LOCATION_FILTERS.map((location) => (
            <div
              key={location}
              onClick={() => handleLocationSelect(location)}
              style={{
                padding: "8px 12px",
                cursor: "pointer",
                backgroundColor: selectedLocation === location ? "#e0e0e0" : "transparent",
                color: selectedLocation === location ? "#000" : "black",
              }}
            >
              {location}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Searchbar;

