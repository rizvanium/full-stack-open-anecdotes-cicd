import axios from 'axios'
const baseUrl = `${import.meta.env.BASE_URL}/anecdotes`

export const getAnecdotes = () => axios.get(baseUrl).then((res) => res.data)

export const createAnecdote = (newAnecdote) =>
  axios.post(baseUrl, newAnecdote).then((res) => res.data)

export const updateAnecdote = (request) =>
  axios.put(`${baseUrl}/${request.id}`, request).then((res) => res.data)
