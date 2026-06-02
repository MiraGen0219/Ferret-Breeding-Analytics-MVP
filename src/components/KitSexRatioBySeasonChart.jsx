import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts"

function KitSexRatioBySeasonChart({ litters }) {
    const seasons = ["Spring", "Summer", "Fall", "Winter"];


    const chartData = seasons.map((season) => {
        const littersForSeason = litters.filter((litter) => litter.season === season && typeof litter.jills === "number" && typeof litter.hobs === "number"); 

        const totalJills = littersForSeason.reduce((total, litter) => total + litter.jills, 0);

        const totalHobs = littersForSeason.reduce((total, litter) => total + litter.hobs, 0); 

    

        return {
            season,
            jills: totalJills,
            hobs: totalHobs,
        };
    });

    return (
        <div className="card">
            <h2>Kit Sex Ratio by Season</h2>

            <div style={{ width: "100%", height: 300 }}>
                <ResponsiveContainer>
                    <BarChart data={chartData}>
                        <XAxis dataKey="season" />
                        <YAxis />
                        <Tooltip />

                        <Bar dataKey="jills" stackId="a" />
                        <Bar dataKey="hobs" stackId="a" />
                    </BarChart>
                </ResponsiveContainer>
            </div>
        </div>
    )
}

export default KitSexRatioBySeasonChart;