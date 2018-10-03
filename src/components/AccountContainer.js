import React, { Component } from 'react'
import TransactionsList from './TransactionsList'
import CategorySelector from './CategorySelector'

class AccountContainer extends Component {
  constructor() {
    super()
    this.state={
      transactions: [],
      activeCategory: "All"
    }
  }

  componentDidMount() {
    fetch('https://boiling-brook-94902.herokuapp.com/transactions')
    .then( r => r.json())
    .then(data => {
      this.setState({transactions: data})
    })
  }

  filterTransactions = () => {
    if(this.state.activeCategory !== "All"){
      return this.state.transactions.filter(transaction =>{
        return transaction.category === this.state.activeCategory
      })
    }else {
    return this.state.transactions
    }
  }

  handleChange = (e) => {
    this.setState({activeCategory: e.target.value})
  }

  render() {
    return (
      <div className="ui grid container">

        <CategorySelector handleChange={this.handleChange} activeCategory={this.state.activeCategory} />

        <TransactionsList transactions={this.filterTransactions()}  />

      </div>
    )
  }
}

export default AccountContainer
