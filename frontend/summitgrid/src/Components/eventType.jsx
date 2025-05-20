import '../Styles/eventtype.css';

function EventType({onFilterSelect}) {
    const eventTypes = [
        {
            id: 1,
            label: "Summits",
            src: "/img/Summits.png",
            alt: "Summits Image"
        },
        {
            id: 2,
            label: "Conferences",
            src: "/img/Conferences.png",
            alt: "Conferences Image"
        },
        {
            id: 3,
            label: "Women only",
            src: "/img/Women.png",
            alt: "Women Image"
        },
        {
            id: 4,
            label: "Music and tech",
            src: "/img/musicntech.png",
            alt: "MusicnTech Image"
        },
        {
            id: 5,
            label: "Hackathons",
            src: "/img/hackathons.png",
            alt: "Hackathon Image"
        },
        {
            id: 6,
            label: "Gaming tournaments",
            src: "/img/gamingtournaments.png",
            alt: "Gaming Image"
        },
        {
            id: 7,
            label: "Food and tech",
            src: "/img/foodntech.png",
            alt: "FoodnTech Image"
        },
        {
            id: 8,
            label: "Webinars",
            src: "/img/Webinars.png",
            alt: "Webinars Image"
        },
    ];

    const handleClick = (label) => {
        onFilterSelect(label, label);
    };

    return (
        <div className="event-type-container">
            {eventTypes.map(event => (
                <div key={event.id} className="event-type-item" onClick={() => handleClick(event.label)} style={{ cursor: 'pointer' }}>
                    <img src={event.src} alt={event.alt} />
                    <p className='event-type-link'>{event.label}</p>
                </div>
            ))}
        </div>
    );
}

export default EventType;