import React, { Component } from 'react'
import TransactionsList from './TransactionsList'
import CategorySelector from './CategorySelector'
import {transactions} from '../transactionsData'

class AccountContainer extends Component {
  constructor() {
    super()
    this.state = {
      transactions: transactions,
      activeCategory: ""
    }
  }

  componentDidMount(){
    fetch("https://boiling-brook-94902.herokuapp.com/transactions")
    .then(res => res.json())
    .then(transactions => this.setState({transactions: transactions}))
  }

  handleRadioChange = (category) => {
    //console.log(category);
    this.setState({activeCategory: category})
  }

  filterCategoryField = () => {
    if(this.state.activeCategory){
      if(this.state.activeCategory === "All"){
        return this.state.transactions
      }else {
        return (this.state.transactions.filter(transaction => transaction.category === this.state.activeCategory)
        )
      }
    }else{
      return this.state.transactions
    }
  }

  render() {
    //console.log(transactions)
    return (
      <div className="ui grid container">

        <CategorySelector
          activeCategory={this.state.activeCategory}
          handleRadioChange={this.handleRadioChange}/>

        <TransactionsList transactions={this.filterCategoryField()} />

      </div>
    )
  }
}

export default AccountContainer
