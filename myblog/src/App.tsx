import React, { useState, useEffect } from 'react';
import './App.css';

interface BlogEntry {
  id: number,
  title: string
}

function App() {

  const [blogs, setBlogs] = useState<BlogEntry[]>([])
  useEffect(() => {
    fetch('http://localhost:4000/')
      .then(res => res.json())
      .then(data => setBlogs(data))
  }, [])

  return (
    <div className="App">
      <header className="App-header">
        <h1>all blogs</h1>
        {blogs && blogs.map(blog => (
          <div key={blog.id}>{blog.title}</div>
        ))}
      </header>
    </div>
  );
}

export default App;
