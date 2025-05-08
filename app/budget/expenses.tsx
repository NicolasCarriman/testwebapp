import React, { Suspense, useEffect, useRef, useState, type FormEvent } from 'react';
import TransactionsTable from './components/transactionsTable';
import type { Transaction } from '../model/transaction';
import { transactionService } from '~/services/transaction';
import { formatTransaction } from '~/utils/format';
import { useAlert } from '~/hooks/useAlert';
import Alerts from '~/components/alerts';

async function getTransactions() {
  try {
    const results = await transactionService.get();
    if (results.error) throw new Error(results.message);
    return results.data.map(transaction => formatTransaction(transaction));
  } catch (e: any) {
    throw new Error(e.message)
  }
}

function Expenses() {
  const { alerts, showMessage } = useAlert(1200);
  const formRef = useRef<HTMLFormElement>(null);
  const transactionState = getTransactions();

  const saveFormData = async (e: FormEvent) => {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    const editedTransactions = Object.fromEntries(formData.entries());
    console.log(editedTransactions)
  }

  return (
    <div className='flex flex-col justify-center items-center h-[100dvh]'>
      <div className='h-[80dvh] overflow-y-auto flex flex-col items-start justify-start border border-gray-300 rounded-2xl  w-[40vw]'>
        <h3 className='text-gray-800 text-2xl font-medium text-start p-4'>Transacciones</h3>
        <form ref={formRef} className='overflow-y-auto w-full' onSubmit={saveFormData}>
          <Suspense
            fallback={<p>..Cargando</p>}
          >
            {
              transactionState ?
                <TransactionsTable
                  data={transactionState}
                  result={0}
                  onSave={() => formRef.current && formRef.current.requestSubmit()} />
                : null
            }
          </Suspense>
        </form>
      </div>
      <Alerts alerts={alerts} />
    </div>
  )
}

export default Expenses;
