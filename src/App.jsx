import { useEffect, useState } from 'react'
const api_endpoint = 'http://localhost:3000'
const post_endpoint = '/api/v1/posts'

function App() {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    fetchData(api_endpoint + post_endpoint)
  }, [])

  function fetchData(url) {
    fetch(url)
      .then(res => res.json())
      .then(data => {
        console.log(data);
        setPosts(data)

      })
  }

  return (
    <>
      <h1 className='text-center my-3'>Blog API</h1>
      <section className='posts'>
        <div className="container">
          <table className='table table-striped'>
            <thead>
              <tr>
                <th scope='col'>#</th>
                <th scope='col'>Product</th>
                <th scope='col'>Image</th>
                <th scope='col'>Content</th>
              </tr>
            </thead>
            <tbody>
              {
                posts.map((post, index) => (
                  <tr key={`post - ${index + 1}`}>
                    <th scope='row'>{index + 1}</th>
                    <td>{post.title}</td>
                    <td>
                      {console.log(api_endpoint + post.image)
                      }
                      <img src={api_endpoint + post.image} alt={post.title} />
                    </td>
                    <td>{post.content}</td>
                  </tr>
                ))
              }
            </tbody>
          </table>
        </div>
      </section>

    </>
  )
}

export default App
