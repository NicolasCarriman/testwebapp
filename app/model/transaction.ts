
export interface RawTransaction {
    transaction_id: number,
    transaction_description: string;
    transcation_date: string;
    transaction_value: number;
}

export interface Transaction {
    date: string,
    description: string,
    id: number,
    ammount: number,
    edit: boolean
}