interface NavbarProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
  onShowDetails: () => void;
}

export default function Navbar({ activeTab, onTabChange, onShowDetails }: NavbarProps) {
  return (
    <nav className="navbar">
      <h1 className="logo">Conference Expense Planner</h1>

      <div style={{ display: 'flex', alignItems: 'center' }}>
        <div className="nav-tabs">
          {['Venue', 'Add-ons', 'Meals'].map((tab) => (
            <button
              key={tab}
              className={`nav-btn ${activeTab === tab ? 'active' : ''}`}
              onClick={() => onTabChange(tab)}
            >
              {tab}
            </button>
          ))}
        </div>
        <button className="details-btn" onClick={onShowDetails}>
          Show Details
        </button>
      </div>
    </nav>
  );
}
