function StatsCard({ icon, title, count }) {
  return (
    <div className="card">
      <div className="icon">{icon}</div>

      <h2>{count}</h2>

      <p>{title}</p>
    </div>
  );
}

export default StatsCard;