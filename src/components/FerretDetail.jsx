function FerretDetail({ ferret, pairings, litters, onClose }) {
  const ferretPairings = pairings.filter(
    (pairing) => pairing.jill === ferret.name || pairing.hob === ferret.name
  );

  const ferretLitters = litters.filter((litter) =>
    litter.pairing.includes(ferret.name)
  );

  const litterCount = ferretLitters.length;

  const kitsBorn = ferretLitters.reduce(
    (total, litter) => total + litter.born,
    0
  );

  const kitsSurvived = ferretLitters.reduce(
    (total, litter) => total + litter.survived,
    0
  );

  const averageLitterSize =
    litterCount > 0 ? (kitsBorn / litterCount).toFixed(1) : 0;

  const survivalRate =
    kitsBorn > 0 ? ((kitsSurvived / kitsBorn) * 100).toFixed(1) : 0;

  return (
    <div className="card ferret-detail">
      <button onClick={onClose}>Close</button>

      {ferret.photo && ferret.photo.trim() !== "" ? (
        <img src={ferret.photo} alt={ferret.name} className="ferret-photo" />
      ) : (
        <div className="photo-placeholder">No Photo Available</div>
      )}

      <h2>{ferret.name}</h2>

      <p><strong>Sex:</strong> {ferret.sex}</p>
      <p><strong>Birth Date:</strong> {ferret.birthDate}</p>
      <p><strong>Size:</strong> {ferret.size}</p>
      <p><strong>Color:</strong> {ferret.color}</p>
      <p><strong>Pattern:</strong> {ferret.pattern}</p>
      <p><strong>Role:</strong> {ferret.role}</p>
      <p><strong>Status:</strong> {ferret.status}</p>

      <h3>Breeding Stats</h3>
      <p><strong>Litters:</strong> {litterCount}</p>
      <p><strong>Kits Born:</strong> {kitsBorn}</p>
      <p><strong>Kits Survived:</strong> {kitsSurvived}</p>
      <p><strong>Average Litter Size:</strong> {averageLitterSize}</p>
      <p><strong>Survival Rate:</strong> {survivalRate}%</p>

      <h3>Pairings</h3>
      {ferretPairings.length > 0 ? (
        <ul>
          {ferretPairings.map((pairing) => (
            <li key={pairing.id}>
              {pairing.season} {pairing.year} - {pairing.jill} x {pairing.hob}
            </li>
          ))}
        </ul>
      ) : (
        <p>No pairings recorded.</p>
      )}

      <h3>Litters</h3>
      {ferretLitters.length > 0 ? (
        <ul>
          {ferretLitters.map((litter) => (
            <li key={litter.id}>
              {litter.season} {litter.year} - Born: {litter.born} | Survived:{" "}
              {litter.survived}
            </li>
          ))}
        </ul>
      ) : (
        <p>No litters recorded.</p>
      )}

      <h3>Notes</h3>
      <p>{ferret.notes || "No notes recorded."}</p>
    </div>
  );
}

export default FerretDetail;