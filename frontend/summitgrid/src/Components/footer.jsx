import '../Styles/footer.css';

function Footer() {
    return (
      <footer className="footer">
        <div className="footer-content">
          <div className="useSummitGrid">
            <h4><a href="/">Use SummitGrid</a></h4>
            <ul>
              <li><a href="/">Create Event</a></li>
              <li><a href="/">Pricing</a></li>
              <li><a href="/">Community Guidelines</a></li>
              <li><a href="/">FAQs</a></li>
            </ul>
          </div>
  
          <div className="findEvents">
            <h4><a href="/">Tech Events</a></h4>
            <ul>
              <li><a href="/">Industry</a></li>
              <li><a href="/">Events by location</a></li>
            </ul>
          </div>
  
          <div className="contactUs">
            <h4><a href="/">Connect with us</a></h4>
            <ul>
              <li><a href="/">Contact support</a></li>
              <li><a href="/">LinkedIn</a></li>
              <li><a href="/">Instagram</a></li>
              <li><a href="/">TikTok</a></li>
            </ul>
          </div>
        </div>
      </footer>
    );
}
  
export default Footer;  