import React, { useState, useContext} from 'react';
import { GlobalContext } from '../Context/GloabalState';

export default function AddTransactions() {
  const [text, setText] = useState('');
  const [amount, setAmount] = useState('');
  const [transactionType, setTransactionType] = useState('Select'); // Add state for transaction type
  const { addTransaction } = useContext(GlobalContext);

  const onSubmit = (e) => {
    e.preventDefault();
    const newTransaction = {
      id: Math.floor(Math.random() * 100000000),
      text,
      amount: (transactionType === 'expense' ? -1 : 1) * parseFloat(amount), // Multiply amount by -1 for expenses
    };

    addTransaction(newTransaction);
    setText('');
    setAmount('');
    setTransactionType('Select');
  };

  return (
    <div>
      <h3>Add new transaction</h3>
      <form onSubmit={onSubmit}>
        <div className="form-control">
          <label>Text</label>
          <input
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Enter text..."
          />
        </div>
        <div className="form-control">
        <label>Transaction Type</label><br />
          <select className='SelectOptions' value={transactionType} onChange={(e) => setTransactionType(e.target.value)}>
            <option className='Opt' value="Select" disabled>Select</option>
            <option className='Opt' value="income">Income</option>
            <option className='Opt' value="expense">Expense</option>
          </select>
        </div>
        <div className="form-control">
          <label>Amount</label>
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="Enter amount..."
          />
        </div>
        <button className="btn">Add transaction</button>
      </form>
    </div>
  );
}
