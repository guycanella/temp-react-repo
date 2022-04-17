export const loadPosts = async () => {
  const postsResp = fetch("https://jsonplaceholder.typicode.com/posts")
  const photosResp = fetch("https://jsonplaceholder.typicode.com/photos")

  const [posts, photos] = await Promise.all([postsResp, photosResp])

  const postsJson = await posts.json()
  const photosJson = await photos.json()

  const postsAndPhotos = postsJson.map((post, idx) => {
    return {
      ...post,
      cover: photosJson[idx].url,
      coverTitle: photosJson[idx].title,
    }
  })

	return postsAndPhotos
}
