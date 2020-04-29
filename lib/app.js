const App = require('koa')
const Router = require('koa-better-router')

const app = new App()

const router = Router({})

router.addRoute('GET', '/', (ctx, next) => {
    ctx.body = 'hello'
})

app.use(router.middleware())

module.exports = app
