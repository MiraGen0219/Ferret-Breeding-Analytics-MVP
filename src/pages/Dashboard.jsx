import { ferrets, pairings, litters } from "../data/seedData";
import DashboardStat from "../components/DashboardStat";

function Dashboard() {
    const totalFerrets = ferrets.length;
    const totalPairings = pairings.length;
    const totalLitters = litters.length;


    const activeFerrets = ferrets.filter(
        (ferret) => ferret.status === "Active").length;

    const retiredFerrets = ferrets.filter(
        (ferret) => ferret.status === "Retired").length;

    const inactiveFerrets = ferrets.filter(
        (ferret) => ferret.status === "Inactive").length;

    const rehomedFerrets = ferrets.filter(
        (ferret) => ferret.status === "Rehomed").length;

    const deceasedFerrets = ferrets.filter(
        (ferret) => ferret.status === "Deceased").length;

    const totalKitsBorn = litters.reduce((total, litter) => total + litter.born, 0);
    const totalKitsSurvived = litters.reduce((total, litter) => total + litter.survived, 0);

    const averageLitterSize = totalLitters > 0 
        ? (totalKitsBorn / totalLitters).toFixed(1)
        : 0;
    const survivalRate = totalKitsBorn > 0
        ? ((totalKitsSurvived / totalKitsBorn) * 100).toFixed(1)
        : 0;
    
    

    return (
        <div className="page">
            <h1>Dashboard</h1>

        <div className="card-grid">
            <DashboardStat
                title="Total Ferrets"
                value={totalFerrets}
            />

            <DashboardStat
                title="Active Breeders"
                value={activeFerrets}
            />

            <DashboardStat
                title="Inactive Breeders"
                value={inactiveFerrets}
            />

            <DashboardStat
                title="Retired Breeders"
                value={retiredFerrets}
            />

            <DashboardStat
                title="Rehomed Ferrets"
                value={rehomedFerrets}
            />

            <DashboardStat
                title="Deceased Ferrets"
                value={deceasedFerrets}
            />

            <DashboardStat
                title="Total Pairings"
                value={totalPairings}
            />

            <DashboardStat
                title="Total Litters"
                value={totalLitters}
            />

            <DashboardStat
                title="Total Kits Born"
                value={totalKitsBorn}
            />

            <DashboardStat
                title="Total Kits Survived"
                value={totalKitsSurvived}
            />

            <DashboardStat
                title="Average Litter Size"
                value={averageLitterSize}
            />

            <DashboardStat
                title="Survival Rate"
                value={`${survivalRate}%`}
            />

        </div>
        </div>
    );
}

export default Dashboard;