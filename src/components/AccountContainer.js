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


    if(this.state.radioSelect != "All"){


      return this.state.transactionsArray.filter((transaction) => {

        return  transaction.type === this.state.radioSelect

  })}


    return this.state.transactionsArray.map((transaction) => {
      return <TransactionsList  transaction={transaction}/>
    })

  }

  render() {
    console.log(this.state)
    return (
      <div className="ui grid container">

        <CategorySelector handleChange={this.handleChange}/>

        {this.displayTransactions()}

      </div>
    )
  }
}

export default AccountContainer
