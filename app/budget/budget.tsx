import React, { useEffect } from 'react';
import { transactions } from './transactions';
import { RenderLineChart } from './components/chart';


function Budget() {

  type FormatTransaction = { name: string, date: string, value: string | number };
  const getTransactions = () => {
    const formatedTransactions = transactions.map(transaction => ({
      date: transaction.fecha,
      name: transaction.nombre,
      value: transaction.valor.toString().replace(/\./g, "").replace(/\,/g, '.')
    }));
    let results: (Omit<FormatTransaction, 'value'> & { value: number })[] = [];
    formatedTransactions.forEach((transaction) => {
      const currentTransactionIndex = results.findIndex(result => transaction.name === result.name)
      const existentTransaction = results[currentTransactionIndex]
      if (existentTransaction) {

        results[currentTransactionIndex] = {
          ...existentTransaction,
          value: Number(existentTransaction.value) + Number(transaction.value)
        }
        return;
      }
      results.push({ ...transaction, value: Number(transaction.value) });
    })
    const tracked = Object.groupBy(results, (item) => {
      const getKey = (value: number) => {
        if (value < 40000) return 'mini';
        if (value < 90000) return 'nonImportant';
        if (value > 90000) return 'important';
        return 'important'
      }
      return getKey(item.value)
    });
    console.log(tracked)
    const average = Object.fromEntries(Object.entries(tracked).map(([keyName, values]) => [keyName, values.reduce((acc, current) => current.value + acc, 0).toFixed(2)]))
    console.log(average)
  }

  useEffect(() => { getTransactions() }, [])

  return (
    <>
      <div>Budget</div>
      <RenderLineChart />
    </>
  )
}

export default Budget;