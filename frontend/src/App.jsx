import { SERVER_URL } from "./constants"

function App() {

  return (
    <>
      <a
        href={SERVER_URL}
        target="_blank"
        rel="noopener"
      >
        Server
      </a>
      <a
        href={`${SERVER_URL}/echo-req`}
        target="_blank"
        rel="noopener"
      >
        Echo Request
      </a>
    </>
  )
}

export default App
