
export interface RawTransaction {
    transaction_id: number,
    transaction_description: string;
    transaction_date: string;
    transaction_value: number;
}

export interface Transaction {
    date: Date,
    description: string,
    id: number,
    ammount: number,
    edit: boolean
}