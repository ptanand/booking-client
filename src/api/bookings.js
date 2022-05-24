import apiUrl from '../apiConfig'
import axios from 'axios'
// Create a new pledge:

export const createBooking = (data, user) => {
  return axios({
    method: 'POST',
    url: apiUrl + '/booking/',
    headers: {
      Authorization: `Bearer ${user.token}`
    },
    data: {
      booking: {
        name: data.name,
        date: data.date,
        pledge: data.pledge

      }
    }
  })
}
// Index the pledges:

export const indexBooking = (user) => {
  return axios({
    method: 'GET',
    url: apiUrl + '/booking/',
    headers: {
      Authorization: `Bearer ${user.token}`
    }
  })
}

// show pledge:

export const showBooking = (id, user) => {
  return axios({
    method: 'GET',
    url: apiUrl + '/booking/' + id,
    headers: {
      Authorization: `Bearer ${user.token}`
    }
  })
}
// update pledge:

export const updateBooking = (id, data, user) => {
  return axios({
    method: 'PATCH',
    url: apiUrl + '/booking/' + id,
    headers: {
      Authorization: `Bearer ${user.token}`
    },
    data: {
      booking: {
        name: data.name,
        date: data.date,
        pledge: data.pledge
      }
    }
  })
}
// delete pledge:

export const deleteBooking = (id, user) => {
  return axios({
    method: 'DELETE',
    url: apiUrl + '/booking/' + id,
    headers: {
      Authorization: `Bearer ${user.token}`
    }
  })
}
