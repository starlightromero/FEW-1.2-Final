import React, { useState } from 'react'
import classes from './Like.module.css'
import Button from './Button/Button'
import { ReactComponent as Rock } from '../../../../assets/icons/rock.svg'
import { ReactComponent as ThumbDown } from '../../../../assets/icons/thumb-down.svg'

const Like = props => {
  const [likeCount, setLikeCount] = useState(0)

  const dislikeHandler = () => {
    if (likeCount > 0) {
      setLikeCount(likeCount - 1)
    }
  }

  const likeHandler = () => setLikeCount(likeCount + 1)

  return (
    <div className={classes.Like}>
      <Button clicked={dislikeHandler}><ThumbDown /></Button>
      <p>{ likeCount }</p>
      <Button clicked={likeHandler}><Rock /></Button>
    </div>
  )
}

export default Like
