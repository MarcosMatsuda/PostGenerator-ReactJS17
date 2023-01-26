import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { v4 as uuidv4 } from 'uuid'
import { Grid } from '@material-ui/core'
import { 
  addPost, 
  fetchPosts 
} from '../store/posts/ducks'

import AddPost from "../components/AddPost"
import Post from '../components/Post'
import UpdatePostDialog from '../components/UpdatePost'

const BlogPost = () => {
  const dispatch = useDispatch()

  const posts = useSelector((state) => state.posts)

  const [state, setState] = useState({text: ''})

  const [openDialog, setOpenDialog] = useState({
    open: false,
    post: {}
  })

  const handleCloseDialog = () => {
    setOpenDialog({
      ...openDialog,
      open: false
    })
  }

  const handleOpenDialog = (post) => {
    setOpenDialog({
      open: true,
      post
    })
  }

  const handleOpenDialogPostChange = (value) => {
    setOpenDialog({
      ...openDialog,
      post: {
        ...openDialog.post,
        text: value
      }
    })
  }

  const handleAddPost = () => {
    const _id = uuidv4()

    const post = {
      id: _id,
      text: state.text
    }
    dispatch(addPost(post))

    cleanState()
  }

  const handleSavePost = () => {
    // dispatch(updatePost(openDialog.post))
    // setOpenDialog({
    //     ...openDialog,
    //     open: false
    // })
  }

  const handleDeletePost = (id) => {
    // dispatch(deletePost(id))
  }

  const cleanState = () => {
    setState({text: ''})
  }


  useEffect(() => {
    // dispatch(fetchPosts())
  }, [])

  // useEffect(() => {
  //     if (addedPost || updatedPost ||deletedPost) {
  //         dispatch(getPosts())
  //     }
  // }, [addedPost, updatedPost, deletedPost, actions])
          
  return (
    <Grid
      container
      direction="column"
      alignItems="center"
      center
    >
        <Grid item xs={12}>
          <AddPost
            state={state}
            handleAddPost={handleAddPost}
            handleStateChange={setState}
          />
          {posts.error ? (<p>{posts.error}</p>) : null}
          {posts.isLoading ? (<p>Carregando</p>) : null}
          {posts?.data && posts.data.map((post) =>
            <Post
              key={post.id}
              post={post}
              handleOpen={handleOpenDialog}
              handleDelete={handleDeletePost}
            />
          )}
        </Grid>
        <UpdatePostDialog
          openDialog={openDialog}
          handleClose={handleCloseDialog}
          handleSave={handleSavePost}
          handlePostChange={handleOpenDialogPostChange}
        />
    </Grid>
  )
}

export default BlogPost
