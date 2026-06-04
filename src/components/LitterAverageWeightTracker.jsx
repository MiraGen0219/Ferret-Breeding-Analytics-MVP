import { useState } from "react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

function LitterAverageWeightTracker({ litter, onClose }) {
    const [weights, setWeights] = useState(Array.from({ length: 56 }, (_, index) => ({day: index + 1, weight: "",}))
);

function handleWeightChange(day, value) {setWeights((prevWeights) => prevWeights.map((entry) => entry.day === day ? { ...entry, weight: value } : entry)
);
}

const chartData = weights.filter((entry) => entry.weight !== "").map((entry) => ({ day: entry.day, weight: Number(entry.weight),
}));

return (
    <div className="card weight-tracker-card">
        <button onClick={onClose}>Close</button>
        
        <h2>Litter Average Weight Tracker</h2>
        <h3>{litter.pairing}</h3>
        <p>{litter.season} {litter.year}</p>

        <h4>Daily Average Weights</h4>

        <div className="weight-input-grid">
            {weights.map((entry) => (
                <label key={entry.day} className="weight-input-row">
                    Day {entry.day}
                    <input
                        type="number"
                        value={entry.weight}
                        onChange={(e) => handleWeightChange(entry.day, e.target.value)}
                        placeholder="grams"
                    />
                </label>
            ))}
        </div>

        <h4>Growth Chart</h4>

        {chartData.length > 0 ? (
            <ResponsiveContainer width="100%" height={300}>
                <LineChart data={chartData} margin={{ top: 5, right: 20, left: 20, bottom: 30 }}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="day" />
                    <YAxis label={{ value: "Grams", angle: -90, position: "insideLeft", }} />
                    <Tooltip />
                    <Line type="monotone" dataKey="weight" strokeWidth={2} />
                </LineChart>
            </ResponsiveContainer>
        ) : (
            <p>No weights entered yet.</p>
        )}
    </div>
);
}

export default LitterAverageWeightTracker;