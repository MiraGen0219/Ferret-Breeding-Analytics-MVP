import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts"

function KitSurvivalBySeasonChart({ litters }) {
    const seasons = ["Spring", "Summer", "Fall", "Winter"];


    const chartData = seasons.map((season) => {
        const littersForSeason = litters.filter((litter) => litter.season === season && typeof litter.born === "number" && typeof litter.survived === "number"); 

        const totalBorn = littersForSeason.reduce((total, litter) => total + litter.born, 0);

        const totalSurvived = littersForSeason.reduce((total, litter) => total + litter.survived, 0);

        const survivalRate = totalBorn > 0
            ? Number(((totalSurvived / totalBorn) * 100).toFixed(1)) : 0;

    

        return {
            season,
            survivalRate,
        };
    });

    return (
        <div className="card">
            <h2>Kit Survival Rate by Season</h2>

            <div style={{ width: "100%", height: 300 }}>
                <ResponsiveContainer>
                    <BarChart data={chartData}>
                        <XAxis dataKey="season" />
                        <YAxis />
                        <Tooltip />
                        <Bar dataKey="survivalRate" />
                    </BarChart>
                </ResponsiveContainer>
            </div>
        </div>
    )
}

export default KitSurvivalBySeasonChart;