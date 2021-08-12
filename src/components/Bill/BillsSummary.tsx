import React from "react";

import Summary from "../Common/Summary/Summary";

const BillsSummary: React.FC = () => {
    const bills = [
        {
            name: "bill1",
            amount: 123
        },
        {
            name: "bill2",
            amount: 12345
        },
        {
            name: "bill3",
            amount: 12345
        }
    ];

    return (
        <Summary rows={bills} />
    )
};

export default BillsSummary;
