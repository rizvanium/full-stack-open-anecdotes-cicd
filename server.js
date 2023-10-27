import jsonServer from 'json-server'

const db = process.env.DB || 'db.json'
const port = process.env.PORT || 3000

const server = jsonServer.create()
const router = jsonServer.router(db)
const middlewares = jsonServer.defaults({ static: './dist' })

server.use(middlewares)
server.use(router)

server.listen(port, () => {
  console.log(`server is running on port: ${port}`)
})
