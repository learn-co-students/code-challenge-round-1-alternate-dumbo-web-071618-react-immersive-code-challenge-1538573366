import React, { Component } from 'react'
import TransactionsList from './TransactionsList'
import CategorySelector from './CategorySelector'
import {transactions} from '../transactionsData'

class AccountContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      transactions: [],
      radioSort: "All" // need to create state to track the radio button.

    }
  }

  componentDidMount() {
    fetch('https://boiling-brook-94902.herokuapp.com/transactions')
    .then(resp => resp.json())
    .then(transactions => this.setState({transactions}))
  }


  handleChange = (category) => {
    console.log(category);
    this.setState({radioSort: category})
    // originally this changed my state, i noticed when i made a last minute fix it stopped changing my state. so my below logic works but states stuck on all and i don't have the time to debug
  }

  filterTransactions = () => {
    const filtered = this.state.transactions.filter((transaction) => {
      if(transaction.category===this.state.radioSort){
        return transaction
        console.log("transaction", transaction);
      }// this closes my first if.statement
    })// this closes my const filtered
    if(this.state.radioSort==="All"){
      console.log(this.state.transactions);
      return this.state.transactions
      console.log(this.state.transactions);
    }// this closes my second if.statement
    return filtered // if the second if.statement doesn't get hit that means "All" isn't selected so i'll return the filtered array
    console.log(filtered);
  }

  render() {
    console.log()
    return (
      <div className="ui grid container">

        <CategorySelector handleChange={this.handleChange} radioSort={this.state.radioSort}/>

        <TransactionsList transactions={this.filterTransactions()}/>

      </div>
    )
  }
}

export default AccountContainer
