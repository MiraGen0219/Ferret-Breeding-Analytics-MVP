import { ferrets, litters } from "../data/seedData";
import BreederAnalyticsCard from "../components/BreederAnalyticsCard";
import LitterSizeByYearChart from "../components/LitterSizeByYearChart";
import LitterSizeBySeasonChart from "../components/LitterSizeBySeasonChart";
import KitSurvivalBySeasonChart from "../components/KitSurvivalBySeasonChart";
import KitSexRatioBySeasonChart from "../components/KitSexRatioBySeasonChart";

// CREATE BREEDER STATS:
function BreederAnalytics() {
    const breeders = ferrets.filter((ferret) => ferret.role === "Breeder");

    const breederStats = breeders.map((breeder) => {
        const breederLitters = litters.filter((litter) =>
            litter.pairing.includes(breeder.name)
        );

        const litterCount = breederLitters.length;

        const kitsBorn = breederLitters.reduce(
            (total, litter) => total + litter.born,
            0
        );

        const kitsSurvived = breederLitters.reduce(
            (total, litter) => total + litter.survived,
            0
        );

        const littersWithKnownBorn = breederLitters.filter(
            (litter) => typeof litter.born === "number"
        );

        const totalBorn = littersWithKnownBorn.reduce(
            (total, litter) => total + litter.born,
            0
        );

        const averageLitterSize =
            littersWithKnownBorn.length > 0
                ? Number((totalBorn / littersWithKnownBorn.length).toFixed(1))
                : 0;

        const survivalRate =
            kitsBorn > 0
                ? ((kitsSurvived / kitsBorn) * 100).toFixed(1)
                : 0;

        return {
            id: breeder.id,
            name: breeder.name,
            sex: breeder.sex,
            litters: litterCount,
            kitsBorn,
            kitsSurvived,
            averageLitterSize,
            survivalRate,
        };
    });

    // SORT BREEDER STATS:
    breederStats.sort((a, b) => b.kitsBorn - a.kitsBorn);

    // DISPLAY BREEDER STATS:
    return (
        <div className="page">
            <h1>Breeder Analytics</h1>

            <div className="card-grid">
                {breederStats.map((breeder) => (
                    <BreederAnalyticsCard
                        key={breeder.id}
                        name={breeder.name}
                        sex={breeder.sex}
                        litters={breeder.litters}
                        kitsBorn={breeder.kitsBorn}
                        kitsSurvived={breeder.kitsSurvived}
                        averageLitterSize={breeder.averageLitterSize}
                        survivalRate={breeder.survivalRate}
                    />
                ))}
            </div>

            <LitterSizeByYearChart litters={litters} />

            <LitterSizeBySeasonChart litters={litters} />

            <KitSurvivalBySeasonChart litters={litters} />

            <KitSexRatioBySeasonChart litters={litters} />
        </div>
    );
}

export default BreederAnalytics;