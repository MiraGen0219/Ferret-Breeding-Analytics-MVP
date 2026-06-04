import { useState } from "react";

function LitterNotes({ litter, onClose }) {
  const [notes, setNotes] = useState({
    pregnancy: litter.pregnancyNotes || "",
    birth: litter.birthNotes || "",
    postpartum: litter.postpartumNotes || "",
    general: litter.generalNotes || ""
  });

  function handleNoteChange(noteType, value) {
    setNotes((prevNotes) => ({
      ...prevNotes,
      [noteType]: value
    }));
  }

  return (
    <div className="card litter-notes-card">
      <button onClick={onClose}>Close</button>

      <h2>Litter Notes</h2>
      <h3>{litter.pairing}</h3>
      <p>
        {litter.season} {litter.year}
      </p>

      <label className="note-field">
        Pregnancy Behavior Notes
        <textarea
          value={notes.pregnancy}
          onChange={(e) => handleNoteChange("pregnancy", e.target.value)}
          placeholder="Jill behavior, appetite, nesting, temperament changes..."
        />
      </label>

      <label className="note-field">
        Birth Notes
        <textarea
          value={notes.birth}
          onChange={(e) => handleNoteChange("birth", e.target.value)}
          placeholder="Labor timing, delivery observations, kit condition..."
        />
      </label>

      <label className="note-field">
        Postpartum Notes
        <textarea
          value={notes.postpartum}
          onChange={(e) => handleNoteChange("postpartum", e.target.value)}
          placeholder="Nursing, maternal care, kit warmth, jill recovery..."
        />
      </label>

      <label className="note-field">
        General Litter Observations
        <textarea
          value={notes.general}
          onChange={(e) => handleNoteChange("general", e.target.value)}
          placeholder="Growth, temperament, color development, concerns..."
        />
      </label>
    </div>
  );
}

export default LitterNotes;