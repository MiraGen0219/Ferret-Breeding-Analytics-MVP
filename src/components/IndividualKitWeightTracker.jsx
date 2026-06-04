import { useState } from "react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

function IndividualKitWeightTracker({ litter, onClose }) {
  const startingKitCount = litter.born || 1;

  const [kits, setKits] = useState(
    Array.from({ length: startingKitCount }, (_, index) => ({
      id: index + 1,
      name: `Kit ${index + 1}`,
      status: "Alive",
      weights: Array.from({ length: 56 }, (_, dayIndex) => ({
        day: dayIndex + 1,
        weight: "",
      })),
    }))
  );

  function handleWeightChange(kitId, day, value) {
    setKits((prevKits) =>
      prevKits.map((kit) =>
        kit.id === kitId
          ? {
              ...kit,
              weights: kit.weights.map((entry) =>
                entry.day === day ? { ...entry, weight: value } : entry
              ),
            }
          : kit
      )
    );
  }

  function handleKitNameChange(kitId, value) {
    setKits((prevKits) =>
      prevKits.map((kit) =>
        kit.id === kitId ? { ...kit, name: value } : kit
      )
    );
  }

  function handleStatusChange(kitId, value) {
    setKits((prevKits) =>
      prevKits.map((kit) =>
        kit.id === kitId ? { ...kit, status: value } : kit
      )
    );
  }

  const chartData = Array.from({ length: 56 }, (_, index) => {
    const day = index + 1;
    const dayEntry = { day };

    kits.forEach((kit) => {
      const weightForDay = kit.weights.find((entry) => entry.day === day);

      if (weightForDay && weightForDay.weight !== "") {
        dayEntry[kit.name] = Number(weightForDay.weight);
      }
    });

    return dayEntry;
  });

  return (
    <div className="card weight-tracker-card">
      <button onClick={onClose}>Close</button>

      <h2>Individual Kit Weight Tracker</h2>
      <h3>{litter.pairing}</h3>
      <p>
        {litter.season} {litter.year}
      </p>

      <h4>Kit Weight Entries</h4>

      {kits.map((kit) => (
        <div key={kit.id} className="kit-weight-section">
          <div className="kit-header-row">
            <input
              type="text"
              value={kit.name}
              onChange={(e) => handleKitNameChange(kit.id, e.target.value)}
            />

            <select
              value={kit.status}
              onChange={(e) => handleStatusChange(kit.id, e.target.value)}
            >
              <option value="Alive">Alive</option>
              <option value="Deceased">Deceased</option>
            </select>
          </div>

          <div className="weight-input-grid">
            {kit.weights.map((entry) => (
              <label key={entry.day} className="weight-input-row">
                Day {entry.day}
                <input
                  type="number"
                  value={entry.weight}
                  onChange={(e) =>
                    handleWeightChange(kit.id, entry.day, e.target.value)
                  }
                  placeholder="grams"
                  disabled={kit.status === "Deceased"}
                />
              </label>
            ))}
          </div>
        </div>
      ))}

      <h4>Individual Growth Chart</h4>

      <ResponsiveContainer width="100%" height={350}>
        <LineChart
          data={chartData}
          margin={{ top: 5, right: 20, left: 20, bottom: 20 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="day" />
          <YAxis />
          <Tooltip />

          {kits.map((kit) => (
            <Line
              key={kit.id}
              type="monotone"
              dataKey={kit.name}
              strokeWidth={2}
              connectNulls
            />
          ))}
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

export default IndividualKitWeightTracker;