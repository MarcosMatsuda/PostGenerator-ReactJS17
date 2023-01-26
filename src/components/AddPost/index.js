import React from 'react'
import { 
    Button,
    TextField 
} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles({
    root: {
        width: 400,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center'
    }
})

const AddPost = ({ 
    handleAddPost, 
    handleStateChange,
    state
}) => {
    const classes = useStyles()

    return (
        <div className={classes.root}>
            <TextField
                fullWidth
                value={state.text || ''}
                onChange={(e) => handleStateChange({
                    ...state,
                    text: e.target.value
                })} 
            />
            <Button
                disabled={state.text === ''}
                onClick={handleAddPost}
            >
                Adiciona Post
            </Button>
        </div>
    )
}

export default AddPost
