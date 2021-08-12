import React from "react";

import Summary from "../Common/Summary/Summary";

const AccountsSummary: React.FC = () => {
    const accounts = [
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

    return (
        <Summary rows={accounts} />
    )
};

export default AccountsSummary;
