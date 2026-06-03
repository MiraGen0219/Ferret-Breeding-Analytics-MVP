function BreederAnalyticsCard({ name, sex, litters, kitsBorn, kitsSurvived, averageLitterSize, survivalRate }) {
  return (
    <div className="card">
      <h2>{name}</h2>

      <p><strong>{sex === "Jill" ? "Litters Produced" : "Litters Sired"}:</strong>{" "} {litters}</p>
      <p><strong>Kits Born:</strong> {kitsBorn}</p>
      <p><strong>Kits Survived:</strong> {kitsSurvived}</p>
      <p><strong>Average Litter Size:</strong> {averageLitterSize}</p>
      <p><strong>Survival Rate:</strong> {survivalRate}%</p>
      
    </div>

    
  );
}

export default BreederAnalyticsCard;