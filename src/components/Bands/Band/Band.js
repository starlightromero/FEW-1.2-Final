import React from 'react'
import classes from './Band.module.css'
import Like from './Like/Like'

const Band = props => {
  const { name, formed, origin, fans } = props

  let displaySplit = <Like />

  if (props.bandSplit) {
    displaySplit = (
      <p>Split: {props.bandSplit}</p>
    )
  }

  return (
    <div className={classes.Band}>
      <p>{name}</p>
      <p>Formed: {formed}</p>
      <p>{origin}</p>
      <p>Fans: {fans}</p>
      {displaySplit}
    </div>
  )
}

export default Band
