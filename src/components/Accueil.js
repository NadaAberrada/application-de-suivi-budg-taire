import React, { useState, useEffect } from 'react'
import ListTransaction from './ListeTransaction'
import AjoutTransaction from './AjoutTransaction'

function Accueil() {
  const [transactions, setTransactions] = useState([])

  const [totalBalance, settotalBalance] = useState(0)
  const [lastMonthExpenses, setlastMonthExpenses] = useState(0)
  const [lastMonthEarnings, setlastMonthEarnings] = useState(0)

  const addTransaction = (transaction) => {
    setTransactions([...transactions, transaction])
  }

  useEffect(() => {
    let totalBalance = 0
    let totalExpenses = 0
    let totalEarnings = 0

    transactions.forEach((transaction) => {
      const amount = parseFloat(transaction.amount)

      if (transaction.type === 'expense') {
        totalExpenses += amount
        totalBalance -= amount
      } else {
        totalEarnings += amount
        totalBalance += amount
      }
    })

    settotalBalance(totalBalance)
    setlastMonthExpenses(totalExpenses)
    setlastMonthEarnings(totalEarnings)
  }, [transactions])

  return (
    <div className='container'>
      {/* <h1 className='my-4 text-center mb-5 mt-5'>Suivi du budget</h1> */}
      <div className='row mb-5 mt-5'>
        <div className='col-md-4 mb-3'>
          <div className='card text-white bg-dark rounded-5 shadow'>
            <div className='card-body'>
              <h5 className='card-title'>Total Monatnt</h5>
              <p className='card-text display-4'>{totalBalance}</p>
            </div>
          </div>
        </div>
        <div className='col-md-4 mb-3'>
          <div className='card text-dark bg-danger rounded-5 shadow'>
            <div className='card-body'>
              <h5 className='card-title'>Les Dépense </h5>
              <p className='card-text display-4'>{lastMonthExpenses}</p>
            </div>
          </div>
        </div>
        <div className='col-md-4 mb-3'>
          <div className='card text-dark bg-info rounded-5 shadow'>
            <div className='card-body'>
              <h5 className='card-title'>Les Revenu</h5>
              <p className='card-text display-4'>{lastMonthEarnings}</p>
            </div>
          </div>
        </div>
      </div>

      <div className='row mb-4 mt-5'>
        <div className='col-md-12'>
          <div className='card shadow-sm'>
            <div className='card-body'>
              <AjoutTransaction onAddTransaction={addTransaction} />
            </div>
          </div>
        </div>
      </div>

      <div className='row'>
        <div className='col-md-12'>
          <ListTransaction transactions={transactions} />
        </div>
      </div>
    </div>
  )
}

export default Accueil
