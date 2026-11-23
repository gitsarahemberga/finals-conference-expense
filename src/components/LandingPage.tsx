interface LandingPageProps {
  onStart: () => void;
}

export default function LandingPage({ onStart }: LandingPageProps) {
  return (
    <div className="landing-page">
      <div className="landing-overlay"></div>
      <div className="landing-content">
        <h1 className="main-title">Conference Expense Planner</h1>
        <p className="subtitle">Plan your next major event with us!</p>
        <button className="get-started-btn" onClick={onStart}>Get Started</button>
        
        <div className="about-section">
          <h3>Welcome to BudgetEase Solutions</h3>
          <p>Welcome to BudgetEase Solutions, your trusted partner in simplifying budget management and financial planning.</p>
          <p>With a commitment to efficiency and innovation, we empower individuals and businesses to take control of their finances.</p>
          <p>At BudgetEase, our mission is to make budgeting effortless and accessible for everyone.</p>
        </div>
      </div>
    </div>
  );
}
