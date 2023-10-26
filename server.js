import jsonServer from 'json-server'
import cors from 'cors'

const server = jsonServer.create('./dist')
const router = jsonServer.router('db.json')
const middlewares = jsonServer.defaults({ static: './dist' })
const port = process.env.PORT || 3000

server.use(cors())
server.use(middlewares)
server.use(router)

server.listen(port, () => {
  console.log(`server is running on port: ${port}`)
})
