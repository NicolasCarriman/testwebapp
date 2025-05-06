import React, { useEffect, useRef, useState, type FormEvent } from 'react';
import { currentTransactions } from './data/transactions';
import TransactionsTable from './components/transactionsTable';
import type { Transaction } from '../model/transaction';
import { transactionService } from '~/services/transaction';
import { formatTransaction } from '~/utils/format';
import { useAlert } from '~/hooks/useAlert';

function Expenses() {
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const { alerts, showMessage } = useAlert(1200);
  const totalExpenses = transactions.reduce((acc, current) => acc + current.ammount, 0);
  const formRef = useRef<HTMLFormElement>(null);
  const editValue = (id: Transaction['id']) => setTransactions(prev => prev.map(item => id === item.id ? { ...item, edit: true } : item))

  const orderByKey = (key: keyof Transaction) => setTransactions(prev => prev.slice().sort((transactionA, transactionB) => {
    if (!isNaN(Number(transactionA[key]))) return Number(transactionB[key]) - Number(transactionA[key]);
    if (transactionB[key] < transactionA[key]) return 1;
    return - 1;
  }));

  async function getTransactions() {
    try {
      const results = await transactionService.get();
      console.log(results)
      if (results.error) throw new Error(results.message);
      setTransactions(results.data.map(transaction => formatTransaction(transaction)));
      showMessage('success', results.message);
    } catch (e: any) {
      showMessage('error', e.message);
    }
  }

  const saveFormData = (e: FormEvent) => {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    console.log(Object.fromEntries(formData))
  }

  useEffect(() => {
    getTransactions()
  }, [])

  return (
    <div className='flex flex-col justify-center items-center h-[100dvh]'>
      <div className='h-[80dvh] overflow-y-auto flex flex-col items-start justify-start border border-gray-300 rounded-2xl  w-[40vw]'>
        <h3 className='text-gray-800 text-2xl font-medium text-start p-4'>Transacciones</h3>
        <form ref={formRef} className='overflow-y-auto w-full' onSubmit={saveFormData}>
          <TransactionsTable
            data={transactions}
            order={orderByKey}
            result={totalExpenses}
            edit={editValue}
            onSave={() => formRef.current && formRef.current.requestSubmit()} />
        </form>
      </div>
    </div>
  )
}

export default Expenses;
