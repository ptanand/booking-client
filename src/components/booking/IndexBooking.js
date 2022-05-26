// import { name } from 'file-loader'
import React, { Component } from 'react'
import { indexBooking } from '../../api/bookings'
import { Link } from 'react-router-dom'
// import Card from './Card'

class IndexBooking extends Component {
  constructor (props) {
    super(props)

    this.state = {
      bookings: [],
      inputText: '',
      showAll: true,
      showUnchecked: false,
      showChecked: false
    }
  }

  componentDidMount () {
    const { user, msgAlert } = this.props

    indexBooking(user)
      .then((res) => this.setState({ bookings: res.data.booking }))
      .then(() => {
        msgAlert({
          heading: 'All Pledges',
          message: 'Showing all Pledges',
          variant: 'success'
        })
      })
      .catch((error) => {
        msgAlert({
          heading: 'Index fail',
          message: 'Index error: ' + error.message,
          variant: 'danger'
        })
      })
  }

  render () {
    const { bookings } = this.state

    if (bookings === null) {
      return 'Please wait...'
    }

    let bookingJSX
    if (bookings.length === 0) {
      bookingJSX = 'No tasks on your to do list. Try adding one.'
    } else {
      bookingJSX = bookings.map((booking) => (
        <li key={booking._id}>
          <Link to={`/booking/${booking._id}`}>
            {booking.name}: {booking.pledge}
          </Link>
        </li>
      ))
    }

    return (

      <div className='pledge-list'>
        <h3>Pledge List:</h3>
        <h5>To Update or Cancel your Pledge, click on your name.</h5>
        <h4 className='list'>Name / Pledge:</h4>
        <ul className='list'>{bookingJSX}</ul>
      </div>
    )
  }
}

export default IndexBooking
