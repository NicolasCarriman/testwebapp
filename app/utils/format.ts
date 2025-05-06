import type { RawTransaction, Transaction } from "~/model/transaction";

export const formatNumericValue = (val: string): string => {
    const currentValue = val.replace(/[.]/g, ',')
    const numericValue = currentValue.replace(/[^0-9,.-]/g, '');
    const rawFormat = numericValue.replace(/\./g, '');
    const localFormat = rawFormat.replace(/\B(?=(\d{3})+(?!\d))/g, '.');
    return localFormat || ' ';
};

export const formatTransaction = (transaction: RawTransaction): Transaction => ({
    date: transaction.transcation_date,
    description: transaction.transaction_description,
    id: transaction.transaction_id,
    ammount: transaction.transaction_value,
    edit: false
})