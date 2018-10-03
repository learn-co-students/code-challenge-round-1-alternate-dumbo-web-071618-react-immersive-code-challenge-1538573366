import React, { Component } from 'react'
import TransactionsList from './TransactionsList'
import CategorySelector from './CategorySelector'
import {transactions} from '../transactionsData'

class AccountContainer extends Component {
  constructor(props) {
    super(props)
    this.state = { transactionsArray: [],
                  radioSelect: "All"

    }
  }

  componentDidMount(){

    fetch('https://boiling-brook-94902.herokuapp.com/transactions')
    .then(res => res.json())
    .then(transactions => {
      this.setState({transactionsArray: transactions})
    })



  }

  handleChange = (category) => {

    console.log(category)

    this.setState({radioSelect: category})

  }

  displayTransactions = () => {


    if(this.state.radioSelect !== "All"){


      return this.state.transactionsArray.filter((transaction) => {

        return  transaction.category === this.state.radioSelect

  })}else{
    return this.state.transactionsArray
  }

  }

  render() {
    console.log(this.state)
    return (
      <div className="ui grid container">

        <CategorySelector handleChange={this.handleChange} radioSelect={this.state.radioSelect}/>

        <TransactionsList  transactionArray={this.displayTransactions()}/>

      </div>
    )
  }
}

export default AccountContainer
