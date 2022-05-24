import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { showBooking, updateBooking, deleteBooking } from '../../api/bookings'

class UpdateBooking extends Component {
  constructor (props) {
    super(props)

    this.state = {
      name: '',
      date: '',
      pledge: ''
    }
  }

  componentDidMount () {
    const { match, user, msgAlert } = this.props
    showBooking(match.params.id, user)
      .then((res) =>
        this.setState({
          name: res.data.booking.name,
          date: res.data.booking.date,
          pledge: res.data.booking.pledge
        })
      )
      .then(() => {
        msgAlert({
          heading: 'Update',
          message: 'Update success ',
          variant: 'success'
        })
      })
      .catch(() => {
        msgAlert({
          heading: 'Update failed',
          message: 'Update Failed!',
          variant: 'danger'
        })
      })
  }

handleChange = (event) => {
  this.setState({
    [event.target.name]: event.target.value
  })
}

handleSubmit = (event) => {
  event.preventDefault()

  const { user, msgAlert, match, history } = this.props

  updateBooking(match.params.id, this.state, user)
    .then(() => history.push(`/booking/${match.params.id}`))
    .then(() => {
      msgAlert({
        heading: 'Pledge updated',
        message: 'Pledge updated!',
        variant: 'success'
      })
    })
    .catch((error) => {
      msgAlert({
        heading: 'Pledge update failed',
        message: 'Pledge Error!: ' + error.message,
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
  return (

    <div className='update-box'>
      <Form onSubmit={this.handleSubmit}>
        <Form.Group controlId='name'>
          <Form.Label>Name</Form.Label>
          <Form.Control
            required
            type='text'
            name='name'
            value={this.state.name}
            placeholder='Update Pledgers Name'
            onChange={this.handleChange}
          />
        </Form.Group>
        <Form.Group controlId='date'>
          <Form.Label>Date</Form.Label>
          <Form.Control
            required
            type='text'
            name='date'
            value={this.state.date}
            placeholder='Date: mm/dd/yyyy'
            onChange={this.handleChange}
          />
        </Form.Group>
        <Form.Group controlId='pledge'>
          <Form.Label>Pledge</Form.Label>
          <Form.Control
            required
            type='text'
            name='pledge'
            value={this.state.description}
            placeholder='Update Booking Pledge'
            onChange={this.handleChange}
          />
        </Form.Group>
        <Button className='submitBt' type='submit'>Update</Button>
      </Form>
      <>
        <Button className='delBt' onClick={this.handleDelete}>Delete</Button>
      </>
    </div>
  )
}
}

export default withRouter(UpdateBooking)
