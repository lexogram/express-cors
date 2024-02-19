require('dotenv').config()
const PORT = process.env.PORT || 3000
const HOST = process.env.HOST

const express = require('express')
const cors = require('cors')

const corsOptions = {
  origin: (origin, callback) => {
    console.log("CORS origin:", origin);
    callback(null, true)
  }
}
const app = express()
app.use(cors(corsOptions))

app.get('/', (req, res) => {
  const {
    protocol,
    subdomains,
    hostname,
    path,
    query,
    route,
    secure,

    ip,
    ips,
    app,
    url,
    baseUrl,
    originalUrl,
  } = req
  const origin1 = req.header('Origin')
  const origin2 = req.headers.origin
  const origin3 = req.headers.referer
  const origin4 = req.get('origin')
  const remoteAddress = req.socket.remoteAddress

  const message = `<pre>
Connected to port ${HOST}:${PORT}
${Date()}

protocol:      ${protocol}
subdomains:    ${subdomains}
hostname:      ${hostname}
path:          ${path}
query:         ${JSON.stringify(query)}

route:         ${JSON.stringify(route, null, "  ")}
secure:        ${secure}

ip:            ${ip}
ips:           ${ips}
app:           ${app}
url:           ${url}
baseUrl:       ${baseUrl}
originalUrl:   ${originalUrl}

origin1:       ${origin1}
origin2:       ${origin2}
origin3:       ${origin3}
origin4:       ${origin4}
remoteAddress: ${remoteAddress}
</pre>
`
  res.send(message)
})

app.listen(PORT, () => {
  console.log(`Test server at ${HOST}:${PORT}`);
})