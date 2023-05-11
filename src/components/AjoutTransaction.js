// import '../components/AjouterTR.css'
import React, { useState } from 'react'

function AjouterTransaction({ onAddTransaction }) {
  const [transactionDate, setTransactionDate] = useState('')
  const [amount, setAmount] = useState(0)
  const [type, setType] = useState('')

  const [description, setDescription] = useState('')

  const [newCategory, setNewCategory] = useState('')
  const [category, setCategory] = useState('')
  
  const [categories, setCategories] = useState([
    'santé',
    'éducation',
    'vêtements',
    'épargne',
    'investissements',
  ])
  //for modal
  const [showModal, setShowModal] = useState(false)
//add new category
  const handleAddCategory = () => {
    if (newCategory && !categories.includes(newCategory)) {
      const updatedCategories = [...categories, newCategory]
      setCategories(updatedCategories)
      setCategory(newCategory)
      setNewCategory('')
      setShowModal(false)
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const currentDate = new Date().toISOString().slice(0, 10)
    const newTransaction = {
      amount,
      description,
      category,
      type,
      createdAt: currentDate,
      userDate: transactionDate,
    }
    onAddTransaction(newTransaction)
    setAmount(0)
    setDescription('')
    setCategory('')
    setType('')
    setTransactionDate('')
  }

  return (
    <>
      <div className='d-flex justify-content-center'>
        <h1 className='mt-3'>Ajouter une nouvelle transaction</h1>
        <form onSubmit={handleSubmit} className='row g-3 w-50'>
          <div className='col-md-12'>
            <label htmlFor='amount' className='form-label'>
              Montant
            </label>
            <input
              id='amount'
              type='number'
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              placeholder='Montant'
              required
              min='0'
              className='form-control'
            />
          </div>
          <div className='col-md-12'>
            <label htmlFor='type' className='form-label'>
              Type
            </label>
            <select
              id='type'
              value={type}
              onChange={(e) => setType(e.target.value)}
              required
              className='form-select'>
              <option value=''>Sélectionnez un type</option>
              <option value='expense'>Dépense</option>
              <option value='income'>Revenu</option>
            </select>
          </div>

          <div className='col-md-12'>
            <label htmlFor='category' className='form-label'>
              Catégorie
            </label>
            <select
              id='category'
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              required
              className='form-select'>
              <option value=''>Sélectionnez une catégorie</option>
              {categories.map((cat) => (
                <option key={cat} value={cat}>
                  {cat}
                </option>
              ))}
            </select>
          </div>
          <div className='col-md-12'>
            <label htmlFor='description' className='form-label'>
              Description
            </label>
            <input
              id='description'
              type='text'
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder='Description'
              required
              className='form-control'
            />
          </div>
          <div className='col-md-12'>
            <label htmlFor='transactionDate' className='form-label'>
              Date
            </label>
            <input
              id='transactionDate'
              type='date'
              value={transactionDate}
              onChange={(e) => setTransactionDate(e.target.value)}
              required
              className='form-control'
            />
          </div>

          <div className='col-md-12 mt-3 d-flex justify-content-between'>
            <button type='submit' className='btn custom-btn-1 me-3'  style={{ backgroundColor: "#e74c3c", borderColor: "#e74c3c" }}>
              Ajouter transaction
            </button>
            <button
              type='button'
              className='btn custom-btn-2'
              onClick={() => setShowModal(true)}  style={{ backgroundColor: " hsla(85, 66%, 11%, 0.603)", borderColor: " hsla(85, 66%, 11%, 0.603)" }}>
              Ajouter une nouvelle catégorie
            </button>
          </div>
        </form>
      </div>

      {/* modal */}

      <div
        className={`modal`}
        style={{ display: showModal ? 'block' : 'none' }}
        tabIndex='-1'>
        <div className='modal-dialog'>
          <div className='modal-content'>
            <div className='modal-header'>
              <h5 className='modal-title'>Ajouter une nouvelle catégorie</h5>
              <button
                type='button'
                className='btn-close'
                onClick={() => setShowModal(false)}></button>
            </div>
            <div className='modal-body'>
              <input
                type='text'
                value={newCategory}
                onChange={(e) => setNewCategory(e.target.value)}
                placeholder='New category'
                className='form-control'
              />
            </div>
            <div className='modal-footer'>
              <button
                type='button'
                className='btn btn-secondary'
                onClick={() => setShowModal(false)}>
                Close
              </button>
              <button
                type='button'
                className='btn btn-primary'
                onClick={handleAddCategory}>
                Add category
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default AjouterTransaction
