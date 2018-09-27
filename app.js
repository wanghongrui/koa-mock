const Koa = require('koa')
const cors = require('koa-cors')

const router = require('./src/routes')

const app = new Koa()

app.use(cors())
  .use(router.routes())
  .use(router.allowedMethods())
  
 
app.listen(3000,()=>{
    console.log('success on port 3000')
})
