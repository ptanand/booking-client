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
    .then(() => history.push('/booking/'))
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
    <div className='your-pledge'>
      <h3>Name: {name}</h3>
      <h5>Pledged Date: {date}</h5>
      <h3>You Pledged {pledge}</h3>
      {user._id === owner && (
        <>
          <div>
            <h5>To Update or Delete your Pledge, click below</h5>
            <h3>OR</h3>
            <h5>To see All Pledges click above Show Pledges</h5>
            <Button
              className='upBt'onClick={() =>
                history.push(`/booking/${match.params.id}/update`)}>Update</Button>
            <Button className='delBt' onClick={this.handleDelete}>Delete</Button>
          </div>
        </>
      )}
    </div>
  )
}
}

export default withRouter(ShowBooking)
