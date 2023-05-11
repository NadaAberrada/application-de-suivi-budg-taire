import React from 'react';
import Transaction from './Transaction';

function ListeTransactions({ transactions }) {
  return (
    <>
      <div className='table-responsive'>
        <table className='table'>
          <thead>
            <tr>
              <th scope='col'>Type</th>
              <th scope='col'>Montant</th>
              <th scope='col'>Description</th>
              <th scope='col'>Category</th>
              <th scope='col'>Enregister le </th>
              <th scope='col'>Date de Utilisateur</th>
            </tr>
          </thead>
          <tbody>
            {transactions.map((transaction, index) => (
              <Transaction key={index} transaction={transaction} />
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default ListeTransactions;
