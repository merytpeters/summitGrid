import './App.css';
import './index.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Pages/home';
import EventDetails from './Components/eventDetails';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<div className='App'><Home /></div>} />
        <Route path="/event-details/:id" element={<EventDetails />} />
      </Routes>
    </Router>
  )

}

export default App;