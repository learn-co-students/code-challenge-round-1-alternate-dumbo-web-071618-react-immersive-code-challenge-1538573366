import React from 'react'

const CategoryField = (props) => {

  const { category, checked, handleRadioChange } = props
  //console.log(category);

  return (
    <div className=" four wide field">
      <div className="ui radio checkbox">

        <input
          type="radio"
          name="category"
          onChange={() => handleRadioChange(category)}
          checked={ checked }
        />
        <label>{ category }</label>

      </div>
    </div>
  )
}

export default CategoryField
