import React, { useState } from 'react'
import { func } from 'prop-types'
import { v4 as uuidv4 } from 'uuid'
import {
  Button,
  TextField
} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles({
  addPost: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center'
  }
})

const AddPost = ({ onAddPost }) => {
  const classes = useStyles()

  const [text, setText] = useState('')

  const handleStateChange = (text) => {
    setText(prevstate => ({
      ...prevstate,
      text
    }))
  }

  return (
        <div className={classes.addPost}>
            <TextField onChange={(e) => handleStateChange(e.target.value)} />
            <Button
                disabled={text === ''}
                onClick={(e) => onAddPost(e.target.value, uuidv4())}
            >
                Adiciona Post
            </Button>
        </div>
  )
}

AddPost.propTypes = {
  onAddPost: func.isRequired
}

export default AddPost
