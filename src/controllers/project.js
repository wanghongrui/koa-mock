const Mock = require('mockjs')
const Random = Mock.Random

class ProjectController {
  static async get (ctx) {
    const arr = []
    for (let i = 0; i < 50; i++) {
      let obj = {
        name: Random.cname(),
        coordinates: [Random.float(119, 121), Random.float(27, 29)],
        desc: Random.cparagraph()
      }
      arr.push(obj)
    }
    ctx.body = arr
  }
}

module.exports = ProjectController