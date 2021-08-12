import React from "react";

import "./Summary.css";

interface Row {
    name: string;
    amount: number;
};

const Summary: React.FC<{rows: Row[]}> = ({ rows }) => {
    const getRows = rows.map((account, index) => {
        return (
            <article key={index}>
                <div>
                    {account.name} 
                </div>
                <div>
                    ${account.amount}
                </div>
            </article>
        );
    });

    return (
        <header className="summary">
            {getRows}
        </header>
    )
};

export default Summary;
