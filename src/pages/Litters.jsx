import { useState } from "react";
import { litters } from "../data/seedData";
import LitterSizeByYearChart from "../components/LitterSizeByYearChart";
import LitterSizeBySeasonChart from "../components/LitterSizeBySeasonChart";
import KitSurvivalBySeasonChart from "../components/KitSurvivalBySeasonChart";
import KitSexRatioBySeasonChart from "../components/KitSexRatioBySeasonChart";
import LitterAverageWeightTracker from "../components/LitterAverageWeightTracker";
import IndividualKitWeightTracker from "../components/IndividualKitWeightTracker";
import LitterNotes from "../components/LitterNotes";

function Litters() {
    const [showCharts, setShowCharts] = useState(false);

    const years = [...new Set(litters.map((litter) => litter.year))].sort((a, b) => b - a);
    const [selectedYear, setSelectedYear] = useState(years[0]);
    const seasonOrder = {Spring: 1, Summer: 2, Fall: 3, Winter: 4}
    const selectedYearLitters = litters.filter((litter) => litter.year === selectedYear).sort((a, b) => seasonOrder[a.season] - seasonOrder[b.season]);

    const [selectedLitter, setSelectedLitter] = useState(null);
    const [selectedTracker, setSelectedTracker] = useState(null);

    const [selectedNotesLitter, setSelectedNotesLitter] = useState(null);

    function closeNotes() {setSelectedNotesLitter(null);}

    function closeTracker() {setSelectedLitter(null); setSelectedTracker(null)}

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
                            <button onClick={() => setSelectedNotesLitter(litter)}>Open Litter Notes</button>
                        
                      
                      {Number(litter.born) > 0 ? (  
                        <>
                            <button onClick={() => {setSelectedLitter(litter); setSelectedTracker("average");}}>Litter Avg. Weight Tracker</button>
                            <button onClick={() => {setSelectedLitter(litter); setSelectedTracker("individual");}}>Individual Kit Weight Tracker</button>
                        </>
                       ) : (
                        <p className="muted-text">No kits - weight tracking unavailable.</p>
                      )}  
                        </div>
                    ))}
                </div>

                {selectedNotesLitter && (
                    <LitterNotes litter={selectedNotesLitter} onClose={closeNotes} />
                )}
                
                {selectedLitter && selectedTracker === "average" && (
                    <LitterAverageWeightTracker litter={selectedLitter} onClose={closeTracker} />
                )}
    
                {selectedLitter && selectedTracker === "individual" && (
                    <IndividualKitWeightTracker litter={selectedLitter} onClose={closeTracker} />
                )}

            </div>
    );
}

export default Litters;