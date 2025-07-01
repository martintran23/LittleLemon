function CallToAction() {
  const navigate = useNavigate();

  const handleBookingClick = () => {
    navigate('/booking');
  };

  return (
    <section className="call-to-action">
      <div className="cta-text">
        <h1>Little Lemon</h1>
        <h2>Chicago</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipiscing elit.</p>
        <button onClick={handleBookingClick}>Book A Table</button>
      </div>
      <div className="cta-image">
        <img src="/hero.jpg" alt="Little Lemon restaurant" />
      </div>
    </section>
  );
}
