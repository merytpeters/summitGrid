import { useState, useRef, useEffect } from 'react';
import '../Styles/hero.css';

function Hero() {
    const heropic = [
        {
            id: 1,
            src: "/img/hero2.png",
            alt: "Hero Image",
            title: "Welcome to SummitGrid",
            description: "Your one-stop solution for all your event needs.",
        },
        {
            id: 2,
            src: "/img/hero1.png",
            alt: "Hero Image 2",
            title: "Join us for the next big event!",
            description: "Connect with industry leaders and innovators.",
        },
        {
            id: 3,
            src: "/img/hero3.png",
            alt: "Hero Image 3",
            title: "Explore our upcoming events",
            description: "Discover new opportunities and expand your network.",
        },
    ];

    const [activeIndex, setActiveIndex] = useState(0);
    const containerRef = useRef(null);

    const handleScroll = () => {
        const index = Math.round(containerRef.current.scrollLeft / containerRef.current.offsetWidth);
        setActiveIndex(index);
    };

    useEffect(() => {
        const el = containerRef.current;
        el.addEventListener("scroll", handleScroll);
        return () => el.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div className="hero-wrapper">
            <div className="hero-container" ref={containerRef}>
                {heropic.map((pic) => (
                    <div key={pic.id} className="hero-item">
                        <img src={pic.src} alt={pic.alt} className="hero-image" />
                        <div className="hero-text">
                            <h3>{pic.title}</h3>
                            <p>{pic.description}</p>
                        </div>
                    </div>
                ))}
            </div>

            <div className="hero-dots">
                {heropic.map((_, idx) => (
                    <span
                        key={idx}
                        className={`hero-dot ${idx === activeIndex ? "active" : ""}`}
                    ></span>
                ))}
            </div>
        </div>
    );
}

export default Hero;
