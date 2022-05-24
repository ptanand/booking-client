import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { showBooking, deleteBooking } from '../../api/bookings'
import Button from 'react-bootstrap/Button'

class ShowBooking extends Component {
  constructor (props) {
    super(props)

    this.state = {
      booking: null
    }
  }

  componentDidMount () {
    const { match, user, msgAlert } = this.props

    showBooking(match.params.id, user)
      .then((res) => this.setState({ booking: res.data.booking }))
      .then(() => {
        msgAlert({
          heading: 'Your pledge',
          message: 'Pledges available',
          variant: 'success'
        })
      })
      .catch((error) => {
        msgAlert({
          heading: 'Show Failed',
          message: 'Error message: ' + error.message,
          variant: 'danger'
        })
      })
  }

handleDelete = () => {
  const { match, user, msgAlert, history } = this.props

  deleteBooking(match.params.id, user)
    .then(() => history.push('/bookings/'))
    .then(() => {
      msgAlert({
        heading: 'Successfully Deleted Pledge',
        message: 'Pledge Canceled',
        variant: 'success'
      })
    })
    .catch((error) => {
      msgAlert({
        heading: 'Canceled Pledge Failed',
        message: 'Error message: ' + error.message,
        variant: 'danger'
      })
    })
}

render () {
  if (this.state.booking === null) {
    return 'Please wait ...'
  }

  const { name, date, pledge, owner } = this.state.booking
  const { user, match, history } = this.props
  return (
    <div className='Show-box'>
      <h4>{name}</h4>
      <p>Date: {date}</p>
      <p>{pledge}</p>
      {user._id === owner && (
        <>
          <Button
            className='updateBt'
            onClick={() => history.push(`/bookings/${match.params.id}/update`)}>
                        Update
          </Button>
          <Button className='delBt' onClick={this.handleDelete}>
                        Delete
          </Button>
        </>
      )}
    </div>
  )
}
}

export default withRouter(ShowBooking)
