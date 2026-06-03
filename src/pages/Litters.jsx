import { useState } from "react";
import { litters } from "../data/seedData";
import LitterSizeByYearChart from "../components/LitterSizeByYearChart";
import LitterSizeBySeasonChart from "../components/LitterSizeBySeasonChart";
import KitSurvivalBySeasonChart from "../components/KitSurvivalBySeasonChart";
import KitSexRatioBySeasonChart from "../components/KitSexRatioBySeasonChart";

function Litters() {
    const [showCharts, setShowCharts] = useState(false);

    const years = [...new Set(litters.map((litter) => litter.year))].sort((a, b) => b - a);
    const [selectedYear, setSelectedYear] = useState(years[0]);
    const seasonOrder = {Spring: 1, Summer: 2, Fall: 3, Winter: 4}
    const selectedYearLitters = litters.filter((litter) => litter.year === selectedYear).sort((a, b) => seasonOrder[a.season] - seasonOrder[b.season]);

    const [selectedLitter, setSelectedLitter] = useState(null);
    const [selectedTracker, setSelectedTracker] = useState(null);

    return (
        <div className="page">
            <h1>Litters</h1>

            <button onClick={() => setShowCharts(!showCharts)}> {showCharts ? "Hide Litter Analytics" : "Show Litter Analytics"} </button>

            {showCharts && (
                <div className="dashboard-sections">

                    <LitterSizeByYearChart litters={litters} />
                    <LitterSizeBySeasonChart litters={litters} />
                    <KitSurvivalBySeasonChart litters={litters} />
                    <KitSexRatioBySeasonChart litters={litters} />
                </div>
            )}

            <h2>Litter Records</h2>

            <div className="button-row">
                {years.map((year) => (
                    <button
                        key={year}
                        onClick={() => setSelectedYear(year)}
                        className={selectedYear === year ? "active-button" : ""}>Litters {year}</button>
                    ))}
                </div>

                <h2>Litters {selectedYear}</h2>
                <div className="card-grid">
                    {selectedYearLitters.map((litter) => (
                        <div key={litter.id} className="card">
                            <h3>{litter.pairing}</h3>
                            <p>{litter.season} {litter.year}</p>
                            <p><strong>Born:</strong> {litter.born}</p>
                            <p><strong>Survived:</strong> {litter.survived}</p>

                            <button onClick={() => {setSelectedLitter(litter); setSelectedTracker("average");}}>Litter Avg. Weight Tracker</button>
                            <button onClick={() => {setSelectedLitter(litter); setSelectedTracker("individual");}}>Individual Kit Weight Tracker</button>
                        </div>
                    ))}
                </div>
                
                {selectedLitter && selectedTracker === "average" && (
                    <div className="card">
                        <h2>Litter Average Weight Tracker</h2>
                        <h3>{selectedLitter.pairing}</h3>
                        <p>{selectedLitter.season} {selectedLitter.year}</p>

                        <p>Average weight tracker will go here.</p>
                    </div>
                )}
                {selectedLitter && selectedTracker === "individual" && (
                    <div className="card">
                        <h2>Individual Kit Weight Tracker</h2>
                        <h3>{selectedLitter.pairing}</h3>
                        <p>{selectedLitter.season} {selectedLitter.year}</p>

                        <p>Individual kit weight tracker will go here.</p>
                    </div>
                )}

            </div>
    );
}

export default Litters;