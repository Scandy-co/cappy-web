import React from 'react'
import Link from 'gatsby-link'
import Cappy3DViewer from '../components/Cappy/Cappy3DViewer'

const ShowCappy = () => (
  <div>
    <h1>Hi Cappy Friends</h1>
    <p>Here is a random awesome Cappy!</p>
    <p>Now download CappyAR and make your own ...</p>
    <Cappy3DViewer />
    <Link to="/">Go home</Link>
  </div>
)

export default ShowCappy
