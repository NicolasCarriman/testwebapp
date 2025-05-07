import type { RawTransaction, Transaction } from "~/model/transaction";

export const formatNumericValue = (val: string): string => {
    const currentValue = val.replace(/[.]/g, ',')
    const numericValue = currentValue.replace(/[^0-9,.-]/g, '');
    const rawFormat = numericValue.replace(/\./g, '');
    const localFormat = rawFormat.replace(/\B(?=(\d{3})+(?!\d))/g, '.');
    return localFormat || ' ';
};

const formatRawDate = (date: string) => {
    const [currentDate ] = date.split('T');
    const [ year,month,day] = currentDate.split('-');
    return `${day}/${month}/${year}`;
}

export const formatTransaction = (transaction: RawTransaction): Transaction => ({
    date: new Date(formatRawDate(transaction.transcation_date)).toLocaleString(),
    description: transaction.transaction_description,
    id: transaction.transaction_id,
    ammount: transaction.transaction_value,
    edit: false
})

export const formatDate = (date: string) => {
    const [day,month] = date.split("/") as string[]
    const today = new Date();
    const currentMonth = { 'ABR': '04', 'MAY': '05'}[month];
    if (!currentMonth) throw  new Error("Error, on tryng to detect correct month");
    return `${today.getFullYear()}-${currentMonth}-${day}`
}