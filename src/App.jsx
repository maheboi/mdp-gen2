import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React from 'react';

// Original Header & Footer
import Header from './components/Header';
import Footer from './components/Footer';

// Original Pages
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ProgramsPage from './pages/ProgramsPage';
import CampaignPage from './pages/CampaignPage';
import CoozElitePage from './pages/CoozElitePage';
import CoozFamMobecChallengePage from './pages/CoozFamMobecChallengePage';
import CoozEliteSouvenirBookletPage from './pages/CoozEliteSouvenirBookletPage';
import CoozFamCharityGolfTournamentPage from './pages/CoozFamCharityGolfTournamentPage';
import PartnersPage from './pages/PartnersPage';
import CalendarPage from './pages/CalendarPage';
import DonatePage from './pages/DonatePage';
import ContactPage from './pages/ContactPage';
import LoginPage from './pages/LoginPage';
import PressPage from './pages/PressPage';
import Survey from './pages/Survey';

// Golf Tournament Components
import GolfTournamentHeader from './components/GolfTournamentHeader';
import GolfTournamentFooter from './components/GolfTournamentFooter';
import GolfTournamentHomePage from './pages/GolfTournamentHomePage';
import GolfTournamentAboutPage from './pages/GolfTournamentAboutPage';
import GolfTournamentDonatePage from './pages/GolfTournamentDonatePage';
import GolfTournamentRegistration from './pages/GolfTournamentRegistration';

function App() {
  return (
    <Router>
      <Routes>
        {/* ====================== ORIGINAL WEBSITE ====================== */}
        <Route path="/" element={<><Header /><HomePage /><Footer /></>} />
        <Route path="/about" element={<><Header /><AboutPage /><Footer /></>} />
        <Route path="/programs" element={<><Header /><ProgramsPage /><Footer /></>} />
        <Route path="/campaigns" element={<><Header /><CampaignPage /><Footer /></>} />
        <Route path="/campaigns/cooz-elite" element={<><Header /><CoozElitePage /><Footer /></>} />
        <Route path="/campaigns/cooz-fam-mobec-challenge" element={<><Header /><CoozFamMobecChallengePage /><Footer /></>} />
        <Route path="/campaigns/souvenir-booklet" element={<><Header /><CoozEliteSouvenirBookletPage /><Footer /></>} />
        <Route path="/campaigns/charity-golf-tournament" element={<><Header /><CoozFamCharityGolfTournamentPage /><Footer /></>} />
        <Route path="/partners" element={<><Header /><PartnersPage /><Footer /></>} />
        <Route path="/calendar" element={<><Header /><CalendarPage /><Footer /></>} />
        <Route path="/donate" element={<><Header /><DonatePage /><Footer /></>} />
        <Route path="/contact" element={<><Header /><ContactPage /><Footer /></>} />
        <Route path="/login" element={<><Header /><LoginPage /><Footer /></>} />
        <Route path="/press" element={<><Header /><PressPage /><Footer /></>} />
        <Route path="/survey" element={<><Header /><Survey /><Footer /></>} />

        {/* ====================== GOLF TOURNAMENT SECTION ====================== */}
        <Route 
          path="/golftournament" 
          element={<><GolfTournamentHeader /><GolfTournamentHomePage /><GolfTournamentFooter /></>} 
        />
        <Route 
          path="/golftournament/about" 
          element={<><GolfTournamentHeader /><GolfTournamentAboutPage /><GolfTournamentFooter /></>} 
        />
        <Route 
          path="/golftournament/register" 
          element={<><GolfTournamentHeader /><GolfTournamentRegistration /><GolfTournamentFooter /></>} 
        />
        <Route 
          path="/golftournament/donate" 
          element={<><GolfTournamentHeader /><GolfTournamentDonatePage /><GolfTournamentFooter /></>} 
        />
      </Routes>
    </Router>
  );
}

export default App;