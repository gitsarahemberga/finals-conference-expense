import { useState } from 'react';
import { Provider } from 'react-redux';
import { store } from './store';
import Navbar from './components/Navbar';
import LandingPage from './components/LandingPage';
import VenueSelection from './components/VenueSelection';
import AddonsSelection from './components/AddonsSelection';
import MealSelection from './components/MealSelection';
import DetailsModal from './components/DetailsModal';
import './App.css';

function AppContent() {
  const [started, setStarted] = useState(false);
  const [activeTab, setActiveTab] = useState('Venue');
  const [showModal, setShowModal] = useState(false);

  if (!started) {
    return <LandingPage onStart={() => setStarted(true)} />;
  }

  return (
    <div className="app">
      <Navbar
        activeTab={activeTab}
        onTabChange={setActiveTab}
        onShowDetails={() => setShowModal(true)}
      />
      
      <main className="main-content">
        {activeTab === 'Venue' && <VenueSelection />}
        {activeTab === 'Add-ons' && <AddonsSelection />}
        {activeTab === 'Meals' && <MealSelection />}
      </main>

      <DetailsModal isOpen={showModal} onClose={() => setShowModal(false)} />
    </div>
  );
}

export default function App() {
  return (
    <Provider store={store}>
      <AppContent />
    </Provider>
  );
}

