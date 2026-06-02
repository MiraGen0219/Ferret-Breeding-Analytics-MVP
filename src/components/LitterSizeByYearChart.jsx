import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts"

function LitterSizeByYearChart({ litters }) {
    const years = [...new Set(litters.map((litter) => litter.year))]
        .sort((a, b) => a - b);

    const chartData = years.map((year) => {
        const littersForYear = litters.filter((litter) => litter.year === year); 

        const totalBorn = littersForYear.reduce(
            (total, litter) => total + litter.born, 0
        );

        const averageLitterSize = 
            littersForYear.length > 0
                ? Number((totalBorn / littersForYear.length).toFixed(1))
                : 0;

        return {
            year,
            averageLitterSize,
        };
    });

    return (
        <div className="card">
            <h2>Litter Size by Year</h2>

            <div style={{ width: "100%", height: 300 }}>
                <ResponsiveContainer>
                    <BarChart data={chartData}>
                        <XAxis dataKey="year" />
                        <YAxis />
                        <Tooltip />
                        <Bar dataKey="averageLitterSize" />
                    </BarChart>
                </ResponsiveContainer>
            </div>
        </div>
    )
}

export default LitterSizeByYearChart;