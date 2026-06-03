function DashboardStat({ label, value }) {
    return (
        <div className="dashboard-stat card">
            <p>{label}</p>
            <h2>{value}</h2>
        </div>
    );
}

export default DashboardStat;