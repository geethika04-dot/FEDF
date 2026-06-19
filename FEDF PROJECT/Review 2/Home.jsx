import { useState } from "react";

function Home() {
  const [bagId, setBagId] = useState("");
  const [result, setResult] = useState(null);

  const baggageData = [
    {
      id: "BG101",
      passenger: "Rahul",
      flight: "AI202",
      status: "Checked In",
      location: "Hyderabad Airport",
    },
    {
      id: "BG102",
      passenger: "Priya",
      flight: "AI310",
      status: "In Transit",
      location: "Mumbai Airport",
    },
    {
      id: "BG103",
      passenger: "David",
      flight: "AI415",
      status: "Delivered",
      location: "Delhi Airport",
    },
    {
      id: "BG104",
    passenger: "Dhruv",
    flight: "AI416",
    status: "Not Checked In",
    location: "Chennai Airport",
    
  }
];

  const handleTrack = () => {
    const bag = baggageData.find(
      (item) =>
        item.id.toLowerCase() === bagId.toLowerCase()
    );

    if (bag) {
      setResult(bag);
    } else {
      setResult("notfound");
    }
  };

  return (
    <>
      <nav className="navbar">
        <h2>✈️ SkyBag</h2>
      </nav>

      <div className="hero">
        <h1>Welcome to SkyBag</h1>
        <p>Smart Airline Baggage Tracking</p>
      </div>

      <div className="dashboard">
        <div className="card">
          <h2>245</h2>
          <p>Total Bags</p>
        </div>

        <div className="card">
          <h2>102</h2>
          <p>In Transit</p>
        </div>

        <div className="card">
          <h2>143</h2>
          <p>Delivered</p>
        </div>
      </div>

      <div className="track-section">
        <input
          type="text"
          placeholder="Enter ID (BG101)"
          value={bagId}
          onChange={(e) => setBagId(e.target.value)}
        />

        <button onClick={handleTrack}>
          Track
        </button>
      </div>

      {result && result !== "notfound" && (
        <div className="result-card">
          <h3>Baggage Details</h3>

          <p>
            <strong>ID:</strong> {result.id}
          </p>

          <p>
            <strong>Passenger:</strong>{" "}
            {result.passenger}
          </p>

          <p>
            <strong>Flight:</strong> {result.flight}
          </p>

          <p>
            <strong>Status:</strong> {result.status}
          </p>

          <p>
            <strong>Location:</strong>{" "}
            {result.location}
          </p>
        </div>
      )}

      {result === "notfound" && (
        <div className="not-found">
          Baggage ID Not Found
        </div>
      )}
    </>
  );
}

export default Home;