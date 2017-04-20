var _ = require('koa-route');
var Koa = require('koa');
var app = new Koa();
var json='{a:2}';
app.use(_.get('/uuu', async (ctx) => {
    ctx.body=json;
}));

app.listen(2000);