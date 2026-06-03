function FerretCard ({ ferret, onClick }) {
    return (
        <div className="ferret-card" onClick={onClick}>
            <h3>{ferret.name}</h3>

            <p><strong>Sex:</strong> {ferret.sex}</p>
            <p><strong>Size:</strong> {ferret.size}</p>
            <p><strong>Color:</strong> {ferret.color}</p>
            <p><strong>Pattern:</strong> {ferret.pattern}</p>
            <p><strong>Status:</strong> {ferret.status}</p>
        </div>
    );
}

export default FerretCard;