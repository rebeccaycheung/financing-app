import React from "react";

import DonutChart from "./DonutChart";

const Spending: React.FC = () => {
    return (
        <section>
            <h1>Spending</h1>
            <div className="grey-background">
                <DonutChart />
            </div>
        </section>
    )
};

export default Spending;
