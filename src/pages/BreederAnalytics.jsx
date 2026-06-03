import { useState } from "react";
import { ferrets, litters } from "../data/seedData";
import BreederRankingTable from "../components/BreederRankingTable";

function BreederAnalytics() {
    const [selectedRanking, setSelectedRanking] = useState("jills");

    const breeders = ferrets.filter((ferret) => ferret.role === "Breeder");

    const breederStats = breeders.map((ferret) => {
        const breederLitters = litters.filter((litter) => litter.pairing.includes(ferret.name));

        const litterCount = breederLitters.length;
        const kitsBorn = breederLitters.reduce((total, litter) => total + litter.born, 0);
        const kitsSurvived = breederLitters.reduce((total, litter) => total + litter.survived, 0);
        const averageLitterSize = litterCount > 0 ? Number((kitsBorn / litterCount).toFixed(1)) : 0;
        const survivalRate = kitsBorn > 0 ? ((kitsSurvived / kitsBorn) * 100).toFixed(1) : 0;

        return {
            id: ferret.id,
            name: ferret.name,
            sex: ferret.sex,
            litters: litterCount,
            kitsBorn, 
            kitsSurvived, 
            averageLitterSize,
            survivalRate,
        };
    });

    const jillRankings = breederStats.filter((breeder) => breeder.sex === "Jill").sort((a, b) => b.kitsBorn - a.kitsBorn);
    const hobRankings = breederStats.filter((breeder) => breeder.sex === "Hob").sort((a, b) => b.kitsBorn - a.kitsBorn);

    return (
        <div className="page">
            <h1>Breeder Analytics</h1>

            <div className="button-row">
                <button onClick={() => setSelectedRanking("jills")}>Jill Rankings</button>
                <button onClick={() => setSelectedRanking("hobs")}>Hob Rankings</button>
            </div>

            {selectedRanking === "jills" && (<BreederRankingTable title ="Jill Performance Rankings" breeders={jillRankings} />
            )}
            {selectedRanking === "hobs" && (<BreederRankingTable title ="Hob Performance Rankings" breeders={hobRankings} />
            )}
        </div>
    );
}


export default BreederAnalytics;