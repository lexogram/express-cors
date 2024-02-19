require('dotenv').config()
const PORT = process.env.PORT || 3000

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
    originalUrl,
  } = req
  const origin1 = req.header('Origin')
  const origin2 = req.headers.origin
  const remoteAddress = req.socket.remoteAddress

  const message = `<pre>
Connected to port ${PORT}
${Date()}

protocol:      ${protocol}
subdomains:    ${subdomains}
hostname:      ${hostname}
path:          ${path}
originalUrl:   ${originalUrl}

origin1:       ${origin1}
origin2:       ${origin2}
remoteAddress: ${remoteAddress}
</pre>
`
  res.send(message)
})

app.listen(PORT, () => {
  console.log(`Test server at http://192.168.0.10:${PORT}`);
})