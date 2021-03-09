import React, { useState } from 'react'

const MemberSearch = ({ history }) => {
  const [keyword, setKeyword] = useState('')

  const submitHandler = (e) => {
    e.preventDefault()
    if (keyword.trim()) {
      history.push(`/allmembers/search/${keyword}`)
    } else {
      history.push('/allmembers')
    }
  }
  return (
    <form onSubmit={submitHandler}>
      <div className='input-group'>
        <div className='form-outline'>
          <input
            type='search'
            id='form1'
            className='form-control'
            onChange={(e) => setKeyword(e.target.value)}
          />
        </div>
        <button type='submit' className='btn btn-primary'>
          <i className='fas fa-search'></i>
        </button>
      </div>
    </form>
  )
}

export default MemberSearch
