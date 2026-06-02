import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts"

function LitterSizeBySeasonChart({ litters }) {
    const seasons = ["Spring", "Summer", "Fall", "Winter"];


    const chartData = seasons.map((season) => {
        const littersForSeason = litters.filter((litter) => litter.season === season && typeof litter.born === "number"); 

        const totalBorn = littersForSeason.reduce(
            (total, litter) => total + litter.born, 0
        );

        const averageLitterSize = 
            littersForSeason.length > 0
                ? Number((totalBorn / littersForSeason.length).toFixed(1))
                : 0;

        return {
            season,
            averageLitterSize,
        };
    });

    return (
        <div className="card">
            <h2>Litter Size by Season</h2>

            <div style={{ width: "100%", height: 300 }}>
                <ResponsiveContainer>
                    <BarChart data={chartData}>
                        <XAxis dataKey="season" />
                        <YAxis />
                        <Tooltip />
                        <Bar dataKey="averageLitterSize" />
                    </BarChart>
                </ResponsiveContainer>
            </div>
        </div>
    )
}

export default LitterSizeBySeasonChart;