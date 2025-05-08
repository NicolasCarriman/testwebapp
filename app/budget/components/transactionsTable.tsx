import type { Transaction } from '../../model/transaction'
import { formatNumericValue } from '~/utils/format';
import { BiSolidPencil } from 'react-icons/bi';
import ButtonComponent from '~/components/button';
import { IoSaveOutline } from 'react-icons/io5';
import { Suspense, use, useState } from 'react';

interface Props {
    data: Promise<Transaction[]>;
    result: number | undefined;
    onSave: () => void;
}

function TransactionsTable({ data, result, onSave }: Props) {
    const [transactions, setTransactions] = useState(use(data));

    const sortTransactions = (key: keyof Transaction) => setTransactions(oldTransactions => [...oldTransactions].sort((transactionA, transactionB) => {
        if (transactionA[key] instanceof Date) return transactionB[key] > transactionA[key] ? 1 : -1;
        if (!isNaN(Number(transactionA[key]))) return Number(transactionB[key]) - Number(transactionA[key]);
        if (transactionB[key] < transactionA[key]) return 1;
        return - 1;
    }))

    return (
        <table className='w-full'>
            <thead>
                <tr className='font-medium top-0 sticky'>
                    <th className='font-medium bg-white p-3 cursor-pointer' onClick={() => sortTransactions('date')}>
                        <div >
                            Fecha
                        </div>
                    </th>
                    <th className='font-medium bg-white cursor-pointer' onClick={() => sortTransactions('description')} >Descripción</th>
                    <th className='font-medium bg-white p-3 cursor-pointer' onClick={() => sortTransactions('ammount')}>
                        <div >
                            Costo
                        </div>
                    </th>
                </tr>
            </thead>
            <tbody>
                {
                    transactions.map(transaction => (
                        <tr className='font-[400] text-left text-gray-700' key={transaction.id} >
                            <td className='py-2 pl-10'>
                                <div className='border-b border-b-gray-300'>
                                    {transaction.date.toLocaleDateString()}
                                </div>
                            </td>
                            <td>
                                <div className='border-b border-b-gray-300'>
                                    {transaction.description}
                                </div>
                            </td>
                            <td className=' max-w-[12rem] w-[12rem]'>
                                <div className='border-b  flex flex-row justify-between border-b-gray-300 pr-10'>
                                    {
                                        transaction.edit ?
                                            <input className='relative w-[12rem]' type='number' name={`${transaction.id}`} defaultValue={transaction.ammount}></input>
                                            :
                                            <>
                                                {formatNumericValue(transaction.ammount.toString())}
                                                <BiSolidPencil className='cursor-pointer' />
                                            </>
                                    }
                                </div>
                            </td>
                        </tr>
                    ))
                }
            </tbody >
            <tfoot>
                <tr className='bottom-0  sticky bg-white'>
                    <td className='p-4 bg-gray-50/40' >Total :</td>
                    <td className=' bg-gray-50/40'>{result ? formatNumericValue(result.toString()) : "cargando"}</td>
                    <td>
                        <div className='flex justify-center items-center'>
                            <ButtonComponent onClick={onSave} icon={<IoSaveOutline />}>Guardar</ButtonComponent>
                        </div>
                    </td>
                </tr>
            </tfoot>
        </table >
    )
}

export default TransactionsTable;