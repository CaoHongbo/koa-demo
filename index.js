const Koa = require('koa');
const app = new Koa();
const http = require('http');

app.use(async (ctx, next) => {
  const { request } = ctx;
  // console.dir(request.headers);
  // console.log(request.method);
  // console.log(request.length);
  // console.log(request.url);
  // console.log(request.originalUrl);
  // console.log(request.origin);
  // console.log(request.href);
  // console.log(request.path);
  // console.log(request.querystring);
  // console.log(request.search);
  // console.log(request.host);
  // console.log(request.hostname);
  // console.dir(request.URL);
  // console.dir(request.type);
  // console.log(request.charset);
  // console.log(request.query);
  // console.log(request.fresh);
  // console.log(request.stale);
  ctx.querystring += '&a=a&b=b&c=c'
  await next();
  ctx.body = ctx.request;
  console.log('hhh');
});

// app.listen(3000);
http.createServer(app.callback()).listen(3000); // 如果只有http服务器，则可以写成 app.listen(3000)

app.on('error', err => {
  console.dir(err.user);
  console.dir(err);
});

module.exports = app;
