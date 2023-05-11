import React from 'react';

function Transaction({ transaction }) {
  const { amount, description, category, type, createdAt, userDate } = transaction;
  let color, sign;
  if (type === 'expense') {
    color = 'text-danger';
    sign = 'Dépense';
  } else {
    color = 'text-success';
    sign = 'Revenu';
  }

  return (
    <tr className={color}>
      <td>{sign}</td>
      <td>{amount}</td>
      <td>{description}</td>
      <td>{category}</td>
      <td>{createdAt}</td>
      <td>{userDate}</td>
    </tr>
  );
}

export default Transaction;
