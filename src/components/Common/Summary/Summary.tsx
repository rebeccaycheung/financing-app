import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit } from '@fortawesome/free-solid-svg-icons'

import "./Summary.css";

interface Row {
    name: string;
    amount: number;
};

const Summary: React.FC<{rows: Row[], title: string}> = ({ rows, title }) => {
    const getRows = rows.map((account, index) => {
        return (
            <article key={index}>
                <div>
                    {account.name} 
                </div>
                <div>
                    ${account.amount}
                    <span className="edit-icon">
                        <FontAwesomeIcon icon={faEdit} />
                    </span>
                </div>
            </article>
        );
    });

    return (
        <header>
            <h1>
                {title}
            </h1>
            <div className="summary">
                {getRows}
            </div>
        </header>
    )
};

export default Summary;
