import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { createBooking } from '../../api/bookings'

class CreateBooking extends Component {
  constructor (props) {
    super(props)

    this.state = {
      name: '',
      date: '',
      pledge: ''
    }
  }

    handleChange = (event) =>
      this.setState({
        [event.target.name]: event.target.value
      })

    // Problem here
    handleSubmit = (event) => {
      event.preventDefault()

      const { user, msgAlert, history } = this.props

      createBooking(this.state, user)
        .then(() => history.push('/booking/'))
        .then(() => {
          msgAlert({
            heading: 'Pledge created',
            message: 'Thank you for your pledge',
            variant: 'success'
          })
        })
        .catch((error) => {
          msgAlert({
            heading: 'Booking creation failed',
            message: 'Booking error: ' + error.message,
            variant: 'danger'
          })
        })
    }

    render () {
      // console.log('anand')
      return (
        <div className='row'>
          <div className='col-sm-10 col-md-8 mx-auto mt-5'></div>
          <Form onSubmit={this.handleSubmit}>
            <Form.Group controlId='name'>
              <Form.Label>Name</Form.Label>
              <Form.Control
                required
                type='text'
                name='name'
                value={this.state.name}
                placeholder='Your Name'
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
                value={this.state.pledge}
                placeholder='Your Pledge'
                onChange={this.handleChange}
              />
            </Form.Group>
            <Button className='submit' type='submit'>Submit</Button>
          </Form>
        </div>

      )
    }
}

export default withRouter(CreateBooking)
