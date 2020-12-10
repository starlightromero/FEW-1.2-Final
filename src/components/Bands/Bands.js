import React from 'react'
import classes from './Bands.module.css'
import Band from './Band/Band'
import data from '../../metal.json'

const Bands = props => {
  let bandList = data.map(band => {
    let bandSplit = null
    if (band.split !== '-') {
      bandSplit = band.split
    }
    return (
      <Band
        key={band.band_name}
        name={band.band_name}
        formed={band.formed}
        origin={band.origin}
        fans={band.fans}
        bandSplit={bandSplit} />
    )
  })

  if (props.searchInput) {
    bandList = bandList.filter(band => band.props.name.toLowerCase().includes(props.searchInput.toLowerCase()))
  }

  return (
    <div className={classes.Bands}>
      {bandList}
    </div>
  )
}

export default Bands
