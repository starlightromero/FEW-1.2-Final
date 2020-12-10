import React from 'react'
import data from '../../metal.json'

const MetalMeta = props => (
  <div>
    <h3>Metal Bands 🤘</h3>
    <h3>Bands: <span className='Metal'>{data.length}</span></h3>
  </div>
)

export default MetalMeta
