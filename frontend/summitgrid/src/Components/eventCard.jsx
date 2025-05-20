import '../Styles/eventcard.css';
import { useNavigate } from 'react-router-dom';
import { FaMapMarkerAlt, FaClock, FaCalendarAlt } from 'react-icons/fa';

function EventCard({ searchTerm, selectedFilter }) {
    const navigate = useNavigate();

    const eventCard = [
        {
            id: 1,
            src: "/img/event1.png",
            alt: "Event Card",
            title: "Javascript Summit",
            description: "Discuss all things javascript",
            date: "13th May 2025",
            time: "03:30pm - 06:00pm",
            location: "Lagos, Nigeria",
            status: "Free",
            statusComment: "",
            about: "A summit to discuss the latest trends in JavaScript.",
            tags: ["JavaScript", "Web Development", "Programming", "Summits"],
            price: "Free",
            organizer: "Tech Nigeria",
            website: "https://techng.com"
        },
        {
            id: 2,
            src: "/img/event2.png",
            alt: "Event Card",
            title: "Python Summit",
            description: "Slither through everything python",
            date: "13th May 2025",
            time: "03:30pm - 06:00pm",
            location: "Online",
            status: "Free",
            statusComment: "",
            about: "An online summit for Python enthusiasts.",
            tags: ["Python", "Data Science", "AI"],
            price: "Free",
            organizer: "Python Community",
            website: ""
        },
        {
            id: 3,
            src: "/img/event3.png",
            alt: "Event Card",
            title: "Naija Tech and Food Disco",
            description: "Network and party",
            date: "13th May 2025",
            time: "03:30pm - 06:00pm",
            location: "Delta State, Nigeria",
            status: "Paid",
            statusComment: "Tickets available",
            about: "A tech and food networking event with a disco twist.",
            tags: ["Networking", "Food", "Tech"],
            price: "$20",
            organizer: "Naija Tech",
            website: "https://naijatech.com"
        },
        {
            id: 4,
            src: "/img/event4.png",
            alt: "Event Card",
            title: "Music and Tech Fest",
            description: "Where music meets technology",
            date: "20th June 2025",
            time: "05:00pm - 11:00pm",
            location: "Abuja, Nigeria",
            status: "Paid",
            statusComment: "Limited tickets available",
            about: "An exciting event exploring the intersection of music and technology.",
            tags: ["Music", "Technology", "Innovation", "Festivals"],
            price: "$50",
            organizer: "MusicTech Nigeria",
            website: "https://musictechnigeria.com"
        },
        {
            id: 5,
            src: "/img/event5.png",
            alt: "Event Card",
            title: "AI and Robotics Expo",
            description: "Explore the future of AI and robotics",
            date: "15th July 2025",
            time: "10:00am - 04:00pm",
            location: "Lagos, Nigeria",
            status: "Paid",
            statusComment: "Early bird tickets available",
            about: "An expo showcasing the latest advancements in AI and robotics.",
            tags: ["AI", "Robotics", "Technology", "Expo"],
            price: "$30",
            organizer: "AI Robotics Nigeria",
            website: "https://airoboticsnigeria.com"
        },
        {
            id: 6,
            src: "/img/event6.png",
            alt: "Event Card",
            title: "Cloud Computing Conference",
            description: "Dive into the world of cloud technologies",
            date: "10th August 2025",
            time: "09:00am - 05:00pm",
            location: "Kano, Nigeria",
            status: "Paid",
            statusComment: "Register now",
            about: "A conference dedicated to exploring cloud computing and its applications.",
            tags: ["Cloud", "Technology", "Innovation", "Conference"],
            price: "$40",
            organizer: "Cloud Nigeria",
            website: "https://cloudnigeria.com"
        },
    ];

    const handleGetTicket = (event) => {
        navigate(`/event-details/${event.id}`, { state: { event } });
    };

    // Filter logic
    const filteredEvents = eventCard.filter((event) => {
        const search = searchTerm?.toLowerCase();
    
        const matchesSearch = search
            ? (
                event.tags.some(tag => tag.toLowerCase().includes(search)) ||
                event.location.toLowerCase().includes(search)
              )
            : true;
    
        const matchesFilter =
            selectedFilter === "All" ||
            (selectedFilter === "Location" && event.location.toLowerCase().includes(search)) ||
            event.tags.includes(selectedFilter);
    
        return matchesSearch && matchesFilter;
    });
    

    return (
        <div className="eventcard-container">
            {filteredEvents.length > 0 ? (
                filteredEvents.map((ecard) => (
                    <div key={ecard.id} className="eventcard" id={`location-${ecard.location.toLowerCase().replace(/\s+/g, '-')}`}>
                        <img src={ecard.src} alt={ecard.alt} className="eventcard-image" />
                        <div className="eventcard-text">
                            <h4>{ecard.title}</h4>
                            <h5>{ecard.description}</h5>
                            <p><FaMapMarkerAlt /> {ecard.location}</p>
                            <p><FaCalendarAlt /> {ecard.date} | <FaClock /> {ecard.time}</p>
                            <p>{ecard.status}</p>
                            <p>{ecard.statusComment}</p>
                            <button onClick={() => handleGetTicket(ecard)} className="get-ticket-button">
                                Get Ticket
                            </button>
                        </div>
                    </div>
                ))
            ) : (
                <p className="no-results">No events match your search.</p>
            )}
        </div>
    );
}

export default EventCard;

