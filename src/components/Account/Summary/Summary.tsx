import React from "react";

import "./Summary.css";

const Summary: React.FC = () => {
    const rows = [
        {
            name: "account1",
            amount: 123
        },
        {
            name: "account2",
            amount: 12345
        },
        {
            name: "account3",
            amount: 12345
        }
    ];

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
