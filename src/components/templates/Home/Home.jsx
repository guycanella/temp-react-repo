import React, { useCallback, useEffect, useState } from "react"

import { loadPosts } from "../../../utils/loadPosts"

import "./style.css"
import Posts from "../../Posts"
import LoadButton from "../../LoadButton"
import SearchInput from "../../SearchInput"

const Home = () => {
  const [posts, setPosts] = useState([])
  const [allPosts, setAllPosts] = useState([])
  const [page, setPage] = useState(0)
  const [postsPerPage] = useState(10)
  const [searchValue, setSearchValue] = useState("")

  const noMorePosts = page + postsPerPage >= allPosts.length

  const filteredPosts = searchValue
    ? allPosts.filter((post) => {
        return post.title.toLowerCase().includes(searchValue.toLowerCase())
      })
    : posts

  const loading = useCallback(async (page, postsPerPage) => {
    const postsAndPhotos = await loadPosts()

    setPosts(postsAndPhotos.slice(page, postsPerPage))
    setAllPosts(postsAndPhotos)
  }, [])

  useEffect(() => {
    loading(0, postsPerPage)
  }, [loading, postsPerPage])

  const loadMorePosts = () => {
    const nextPage = page + postsPerPage
    const nextPosts = allPosts.slice(nextPage, nextPage + postsPerPage)
    posts.push(...nextPosts)

    setPosts(posts)
    setPage(nextPage)
  }

  const handleChange = (e) => {
    const { value } = e.target
    setSearchValue(value)
  }

  return (
    <section className="container">
      {!!searchValue && (
        <>
          <h1>Search value: {searchValue}</h1>
          <br />
          <br />
        </>
      )}

      <SearchInput onchange={handleChange} searching={searchValue} />

      {filteredPosts.length ? (
        <Posts posts={filteredPosts} />
      ) : (
        <p>Não existem posts</p>
      )}

      {!searchValue && (
        <LoadButton
          text="Load more posts"
          onclick={loadMorePosts}
          disabled={noMorePosts}
        />
      )}
    </section>
  )
}

export default Home
