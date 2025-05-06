import type { Transaction } from '../../model/transaction'
import { formatNumericValue } from '~/utils/format';
import { BiSolidPencil } from 'react-icons/bi';
import ButtonComponent from '~/components/button';
import { IoSaveOutline } from 'react-icons/io5';
import { Suspense } from 'react';

interface Props {
    data: Transaction[];
    result: number;
    order: (key: keyof Transaction) => void;
    edit: (id: Transaction['id']) => void;
    onSave: () => void;
}

function TransactionsTable({ data, order, edit, result, onSave }: Props) {

    const orderByDescription = () => order('description');
    const orderByDate = () => order('date');
    const orderByAmount = () => order('ammount');

    return (
        <Suspense fallback={<div>...Cargandoo pues</div>}>
            <table className='w-full'>
                <thead>
                    <tr className='font-medium top-0 sticky'>
                        <th className='font-medium bg-white p-3'>
                            <div onClick={orderByDate}>
                                Fecha
                            </div>
                        </th>
                        <th className='font-medium bg-white' onClick={orderByDescription}>Descripción</th>
                        <th className='font-medium bg-white p-3'>
                            <div onClick={orderByAmount}>
                                Costo
                            </div>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data.map(transaction => (
                            <tr className='font-[400] text-left text-gray-700' key={transaction.id} >
                                <td className='py-2 pl-10'>
                                    <div className='border-b border-b-gray-300'>
                                        {transaction.date}
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
                                                    <BiSolidPencil onClick={() => edit(transaction.id)} className='cursor-pointer' />
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
                        <td className=' bg-gray-50/40'>{formatNumericValue(result.toString())}</td>
                        <td>
                            <div className='flex justify-center items-center'>
                                <ButtonComponent onClick={onSave} icon={<IoSaveOutline />}>Guardar</ButtonComponent>
                            </div>
                        </td>
                    </tr>
                </tfoot>
            </table >
        </Suspense>
    )
}

export default TransactionsTable