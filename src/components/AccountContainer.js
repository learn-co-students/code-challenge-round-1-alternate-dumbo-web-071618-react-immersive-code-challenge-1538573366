import React, { Component } from 'react'
import TransactionsList from './TransactionsList'
import CategorySelector from './CategorySelector'
import {transactions} from '../transactionsData'

const URL = "https://boiling-brook-94902.herokuapp.com/transactions"

class AccountContainer extends Component {
  constructor() {
    super()
    this.state = {
      transactions: [],
      activeCategory: "All"
    }
  }

  componentDidMount() {
    fetch(URL)
    .then(resp => resp.json())
    .then(transactions => this.setState({ transactions }))
  }

  handleChange = (event) => {
    // console.log(event.target.parentNode.children[1].innerText)
    this.setState({
      activeCategory: event.target.parentNode.children[1].innerText
    })
  }

  filterTransactions = () => {
    let currentTrans = this.state.transactions
    if (this.state.activeCategory !== "All") {
      currentTrans = currentTrans.filter(trans => trans.category === this.state.activeCategory)
    }
    return currentTrans
  }

  render() {
    return (
      <div className="ui grid container">

        <CategorySelector handleChange={this.handleChange} activeCategory={this.state.activeCategory}/>

        <TransactionsList transactions={this.filterTransactions()}/>

      </div>
    )
  }
}

export default AccountContainer
