import React, { Component } from "react"

import { loadPosts } from "../../../utils/loadPosts"

import "./style.css"
import Posts from "../../Posts"
import LoadButton from "../../LoadButton"
import SearchInput from "../../SearchInput"

class Home extends Component {
  state = {
    posts: [],
    allPosts: [],
    page: 0,
    postsPerPage: 10,
    searchValue: '',
  }

  async componentDidMount() {
    await this.loading()
  }

  loading = async () => {
    const { page, postsPerPage } = this.state
    const postsAndPhotos = await loadPosts()

    this.setState({
      posts: postsAndPhotos.slice(page, postsPerPage),
      allPosts: postsAndPhotos,
    })
  }

  loadMorePosts = () => {
    const { page, postsPerPage, allPosts, posts } = this.state

    const nextPage = page + postsPerPage
    const nextPosts = allPosts.slice(nextPage, nextPage + postsPerPage)
    posts.push(...nextPosts)

    this.setState({ posts, page: nextPage })
  }

  handleChange = (e) => {
    const { value } = e.target
    this.setState({ searchValue: value })
  }

  render() {
    const { posts, page, postsPerPage, allPosts, searchValue } = this.state
    const noMorePosts = page + postsPerPage >= allPosts.length

    const filteredPosts = searchValue ? (
      allPosts.filter((post) => {
        return post.title.toLowerCase().includes(searchValue.toLowerCase())
      })
    ) : posts

    return (
      <section className="container">
        {!!searchValue && (
          <>
            <h1>Search value: {searchValue}</h1><br /><br />
          </>
        )}
        
        <SearchInput onchange={this.handleChange} searching={searchValue} />

        {filteredPosts.length 
          ? <Posts posts={filteredPosts} /> 
          : <p>Não existem posts</p>
        }
        
        {!searchValue && (
          <LoadButton
            text="Load more posts"
            onclick={this.loadMorePosts}
            disabled={noMorePosts}
          />
        )}
      </section>
    )
  }
}

export default Home
