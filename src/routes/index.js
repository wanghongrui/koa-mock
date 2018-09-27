const Router = require('koa-router')
const controllers = require('./../controllers')

const router = new Router()

router.prefix('/api')
router
  .get('/projects', controllers.project.get)

module.exports = router
