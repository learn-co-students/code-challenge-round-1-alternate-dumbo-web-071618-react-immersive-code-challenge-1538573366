import React, { Component } from 'react'
import TransactionsList from './TransactionsList'
import CategorySelector from './CategorySelector'
import {transactions} from '../transactionsData'

class AccountContainer extends Component {
  
  constructor() {
    super()
    this.state = {
      transactions: [],
      activeCategory: "All"
    }
  }

  componentDidMount() {
    fetch("https://boiling-brook-94902.herokuapp.com/transactions")
    .then(resp => resp.json)
    .then(transactions => this.setState({transactions: transactions}))
  }

  handleChange = (category) => {
    this.setState({activeCategory: category})
  }

  chosenTransaction = () => {
    let tempTransaction = [...transactions]
    console.log("hey", tempTransaction)
    if(this.state.activeCategory === "All"){
      return tempTransaction
    }else{
      return tempTransaction.filter( transaction => transaction.category === this.state.activeCategory)
    }
  }

  render() {
    // console.log(tempTransaction)
    return (
      <div className="ui grid container">

        <CategorySelector handleChange={this.handleChange} activeCategory={this.state.activeCategory}/>

        <TransactionsList transactions={this.chosenTransaction()} />

      </div>
    )
  }
}

export default AccountContainer
