const express = require("express");
const app = express();
const httpProxy = require("http-proxy");
const port = 3000;

const proxy = httpProxy.createProxy();

const BASE_URL=`http://localhost:3001/render`

app.use((req, res) => {
  // Supposing hostname = a1.localhost:3000
  const hostname = req.hostname;
  const subdomain = hostname.split(".")[0];
  const resolveTo = `${BASE_URL}/${subdomain}`;
  proxy.web(req, res, { target: resolveTo, changeOrigin: true });
});

app.listen(port, () => {
  console.log(`Reverse proxy running ${port}`);
});
