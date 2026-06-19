function Dashboard() {
  return (
    <div className="dashboard">

      <div className="card">
        <h1>🧳</h1>
        <h2>245</h2>
        <p>Total Bags</p>
      </div>

      <div className="card">
        <h1>✈️</h1>
        <h2>102</h2>
        <p>In Transit</p>
      </div>

      <div className="card">
        <h1>✅</h1>
        <h2>143</h2>
        <p>Delivered</p>
      </div>

      <div className="card">
        <h1>⚠️</h1>
        <h2>5</h2>
        <p>Delayed Bags</p>
      </div>

    </div>
  );
}

export default Dashboard;