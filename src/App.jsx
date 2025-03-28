import { useEffect, useState } from 'react'
const api_endpoint = 'http://localhost:3000/api/v1/posts'

function App() {

  useEffect(() => {
    fetchData(api_endpoint)
  }, [])

  function fetchData(url) {
    fetch(url)
      .then(res => res.json())
      .then(data => {
        console.log(data);


      })
  }

  return (
    <>
      <h1>Blog API</h1>
    </>
  )
}

export default App
