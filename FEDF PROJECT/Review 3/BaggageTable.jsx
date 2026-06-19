function BaggageTable({ baggage }) {
  return (
    <div className="table-container">

      <h2>Recent Baggage Records</h2>

      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Passenger</th>
            <th>Flight</th>
            <th>Status</th>
          </tr>
        </thead>

        <tbody>
          {baggage.map((bag) => (
            <tr key={bag.id}>
              <td>{bag.id}</td>
              <td>{bag.passenger}</td>
              <td>{bag.flight}</td>
              <td>{bag.status}</td>
            </tr>
          ))}
        </tbody>
      </table>

    </div>
  );
}

export default BaggageTable;