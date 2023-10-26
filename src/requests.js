import axios from 'axios'
const port = import.meta.env.VITE_PORT
console.log('PORT:', import.meta.env.VITE_PORT)
const baseUrl = `https://localhost:${port}/anecdotes`
export const getAnecdotes = () => axios.get(baseUrl).then((res) => res.data)

export const createAnecdote = (newAnecdote) =>
  axios.post(baseUrl, newAnecdote).then((res) => res.data)

export const updateAnecdote = (request) =>
  axios.put(`${baseUrl}/${request.id}`, request).then((res) => res.data)
