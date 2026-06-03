import { litters } from "../data/seedData";
import LitterSizeByYearChart from "../components/LitterSizeByYearChart";
import LitterSizeBySeasonChart from "../components/LitterSizeBySeasonChart";
import KitSurvivalBySeasonChart from "../components/KitSurvivalBySeasonChart";
import KitSexRatioBySeasonChart from "../components/KitSexRatioBySeasonChart";

function Litters() {
    return (
        <div className="page">
            <h1>Litters</h1>
            <p>Litter records will go here.</p>

            <h3>Litter Analytics</h3>
            <LitterSizeByYearChart litters={litters} />
            <LitterSizeBySeasonChart litters={litters} />
            <KitSurvivalBySeasonChart litters={litters} />
            <KitSexRatioBySeasonChart litters={litters} />
        </div>

    );
}

export default Litters;