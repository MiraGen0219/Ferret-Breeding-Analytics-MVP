function BreederRankingTable({ title, breeders }) {
    return (
        <div className="card">
            <h2>{title}</h2>

            <table className="ranking-table">
                <thead>
                    <tr>
                        <th>Rank</th>
                        <th>Breeder</th>
                        <th>Litters</th>
                        <th>Kits Born</th>
                        <th>Kits Survived</th>
                        <th>Survival Rate</th>
                    </tr>
                </thead>

                <tbody>
                    {breeders.map((breeder, index) => (
                        <tr key={breeder.id}>
                            <td>{index +1}</td>
                            <td>{breeder.name}</td>
                            <td>{breeder.litters}</td>
                            <td>{breeder.kitsBorn}</td>
                            <td>{breeder.kitsSurvived}</td>
                            <td>{breeder.survivalRate}%</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default BreederRankingTable;