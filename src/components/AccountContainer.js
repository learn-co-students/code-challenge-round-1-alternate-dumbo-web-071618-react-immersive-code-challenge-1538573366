import React, { Component } from 'react'
import TransactionsList from './TransactionsList'
import CategorySelector from './CategorySelector'
import {transactions} from '../transactionsData'

class AccountContainer extends Component {
  constructor() {
    super()
    this.state = {
      banks: [],
      filterBy: "All"
    }
  }

  componentDidMount() {
    fetch(" https://boiling-brook-94902.herokuapp.com/transactions")
      .then(res=> res.json())
      .then(allBanks => {
        return this.setState({banks: allBanks})
      })
  }

  handleChange = (category) => {
    this.setState({filterBy: category}, this.filterChange)
  }

  filterChange = () => {
    if (this.state.filterBy === "All"){
      return this.state.banks
    } else {
      let filteredArray = this.state.banks.filter(bank => {
        return bank.category === this.state.filterBy
      })
      return filteredArray
    }
  }

  render() {
    console.log(transactions)
    return (
      <div className="ui grid container">

        <CategorySelector
          checked={this.state.filterBy} handleChange={this.handleChange}/>

        <TransactionsList banks={this.filterChange()}/>

      </div>
    )
  }
}

export default AccountContainer
