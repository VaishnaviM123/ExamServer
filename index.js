const jsonServer = require('json-server')

const bookServer = jsonServer.create()

const cors = require('cors')
bookServer.use(cors())

const mw = jsonServer.defaults()
bookServer.use(mw)

const router = jsonServer.router('db.json')
bookServer.use(router)

const PORT=5000
bookServer.listen(PORT,()=>{console.log(`video server started at ${PORT}`)})