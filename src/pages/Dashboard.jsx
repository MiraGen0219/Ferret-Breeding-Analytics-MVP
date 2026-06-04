import { ferrets, pairings, litters } from "../data/seedData";
import DashboardStat from "../components/DashboardStat";

function Dashboard() {
    const totalFerrets = ferrets.length;
    const totalPairings = pairings.length;
    const totalLitters = litters.length;

    const activeBreeders = ferrets.filter((ferret) => ferret.role === "Breeder" && ferret.status === "Active").length;

    const pairingsWithoutLitters = pairings.filter((pairing) => {
        const hasLitter = litters.some((litter) => litter.pairing === `${pairing.jill} x ${pairing.hob}` && litter.year === pairing.year);

        return pairing.status === "Completed" && !hasLitter;
    });

    

    return (
        <div className="page">

            <h1>Dashboard</h1>

            <div className="card-grid">
                <DashboardStat label="Total Ferrets" value={totalFerrets} />
                <DashboardStat label="Active Breeders" value={activeBreeders} />
                <DashboardStat label="Pairings" value={totalPairings} />
                <DashboardStat label="Litters" value={totalLitters} />
            </div>

            <div className="dashboard-sections">
                <div className="card">
                <h2>Expected Litters</h2>

                {pairingsWithoutLitters.length === 0 ? (
                    <p>No completed pairings currently waiting on litters.</p>
                ) : (
                    <ul className="expected-litters-list">
                        {pairingsWithoutLitters.map((pairing) => (
                            <li key={pairing.id}>
                                <strong>{pairing.jill} x {pairing.hob}</strong>
                                <br />
                                {pairing.season} {pairing.year}
                                <br />
                                Due: {pairing.dueDateStart} - {pairing.dueDateEnd}
                            </li>
                        ))}
                    </ul>
                )}
                </div>
                </div>
            </div>
    );
}

export default Dashboard;