import { useLocation, useNavigate } from 'react-router-dom';
import { FaMapMarkedAlt, FaCalendarAlt, FaClock, FaExternalLinkAlt, FaArrowLeft, FaShareAlt } from 'react-icons/fa';
import '../Styles/eventdetails.css';

function EventDetails() {
    const location = useLocation();
    const navigate = useNavigate();
    const { event } = location.state;

    const handleShare = () => {
        if (navigator.share) {
            navigator.share({
                title: event.title,
                text: event.description,
                url: window.location.href,
            }).catch((error) => console.error('Error sharing:', error));
        } else {
            alert('Sharing is not supported in this browser.');
        }
    };

    return (
        <div className="event-details-container">
            <button className="back-button" onClick={() => navigate(-1)}>
                <FaArrowLeft /> Back
            </button>
            <div className="event-details-content">
                <img src={event.src} alt={event.alt} className="event-details-image" />
                <div className="event-details-text">
                    <h2>{event.title}</h2>
                    <p className="event-description">{event.description}</p>
                    <div className="event-info">
                        <p><strong><FaCalendarAlt /> Date:</strong> {event.date}</p>
                        <p><strong><FaClock /> Time:</strong> {event.time}</p>
                        <p><strong><FaMapMarkedAlt /> Location:</strong> {event.location}</p>
                        <p><strong>Status:</strong> {event.status ? event.status : `Paid ${event.price ?? 'N/A'}`}</p>
                        {event.statusComment && (
                            <p><strong>Status Comment:</strong> {event.statusComment}</p>
                        )}
                    </div>
                    <div className="event-about">
                        <h3>About the Event</h3>
                        <p>{event.about}</p>
                    </div>
                    <div className="event-organizer">
                        <h3>Organizer</h3>
                        <p>{event.organizer}</p>
                    </div>
                    {event.website && (
                        <div className="event-website">
                            <h3>Website</h3>
                            <p>
                                <a href={event.website} target="_blank" rel="noopener noreferrer">
                                    {event.website} <FaExternalLinkAlt />
                                </a>
                            </p>
                        </div>
                    )}
                </div>
                <div className="event-actions">
                    <button className="register-button">Register for Event</button>
                    <button className="share-button" onClick={handleShare}>
                        <FaShareAlt /> Share Event
                    </button>
                </div>
                <div className="event-tags">
                    <h4>Tags</h4>
                    <div className="tags-container">
                        {event.tags.map((tag, index) => (
                            <span key={index} className="tag-bubble">{tag}</span>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default EventDetails;