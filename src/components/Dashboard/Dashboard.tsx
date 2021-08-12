import React from "react";

import "./Dashboard.css";

const Dashboard: React.FC = () => {
    const columns = ["balance", "left in spending", "left of bills", "net worth"];

    const getColumns = columns.map((title, key) => {
        return (
            <article key={key}>
                {title}
            </article>
        );
    });

    return (
        <header className="dashboard">
            {getColumns}
        </header>
    )
};

export default Dashboard;
