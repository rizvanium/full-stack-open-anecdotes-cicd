import jsonServer from 'json-server'
jsonServer.defaults({
  static: './dist',
})
const server = jsonServer.create('./dist')
const router = jsonServer.router('db.json')
const middlewares = jsonServer.defaults({ static: './dist' })
const port = process.env.PORT || 3000

server.use(middlewares)
server.use(router)

server.listen(port)
