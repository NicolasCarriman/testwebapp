import type { RawTransaction, Transaction } from "~/model/transaction";
import { fetchData } from "~/utils/fetch";

const transactionServer = 'http://127.0.0.1:2200/budget/transactions';

const get = async () => {
    try {
        const result = await fetchData<RawTransaction[]>(transactionServer, 'GET');
        console.log("sese")
        console.log(result)
        return result;
    } catch (e: any) {
        throw new Error(e.message)
    }
}

const getById = async (id: string) => {
    try {
        const result = await fetchData<RawTransaction[]>(`${transactionServer}/${id}`, 'GET');
        return result;
    } catch (e: any) {
        throw new Error(e.message)
    }
}

const post = async (data: Transaction[]) => {
    try {
        const result = await fetchData<RawTransaction[]>(`${transactionServer}`, 'GET', data)
        return result;
    } catch (e: any) {
        throw new Error(e.message)
    }
}

export const transactionService = {
    get,
    getById,
    post
}