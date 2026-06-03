import { useState } from "react";
import { ferrets, pairings, litters } from "../data/seedData";
import FerretCard from "../components/FerretCard";
import FerretDetail from "../components/FerretDetail";


function Ferrets() {
    const [searchTerm, setSearchTerm] = useState("");
    const [statusFilter, setStatusFilter] = useState("All");
    const [selectedFerret, setSelectedFerret] = useState(null);

    const filteredFerrets = ferrets.filter((ferret) => {
        const matchesSearch = ferret.name
            .toLowerCase()
            .includes(searchTerm.toLowerCase());

        const matchesStatus = 
            statusFilter === "All" || ferret.status === statusFilter;


        return matchesSearch && matchesStatus;
    });

    return (
        <div className="page">
            <h1>Ferrets</h1>
            
            <div className="filters">
                <input
                    type="text"
                    placeholder="Search ferrets..."
                    value={searchTerm}
                    onChange={(event) => setSearchTerm(event.target.value)}
                />

                <select
                    value={statusFilter}
                    onChange={(event) => setStatusFilter(event.target.value)}
                >
                    <option value="All">All Statuses</option>
                    <option value="Active">Active</option>
                    <option value="Retired">Retired</option>
                    <option value="Inactive">Inactive</option>
                    <option value="Rehomed">Rehomed</option>
                    <option value="Deceased">Deceased</option>
                </select>
            </div>

            <div className="card-grid">
                {filteredFerrets.map((ferret) => (
                    <FerretCard
                        key={ferret.id}
                        ferret={ferret}
                        onClick={() => setSelectedFerret(ferret)}
                    />
                ))}
            </div>

            {selectedFerret && (
                <FerretDetail
                    ferret={selectedFerret}
                    pairings={pairings}
                    litters={litters}
                    onClose={() => setSelectedFerret(null)}
                />
            )}


        </div>
    );
}

export default Ferrets;