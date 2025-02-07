// Styling
// http://localhost:3000/isolated/exercise/05.js

import * as React from 'react'
import '../box-styles.css'

// 🐨 add a className prop to each div and apply the correct class names
// based on the text content
// 💰 Here are the available class names: box, box--large, box--medium, box--small
// 💰 each of the elements should have the "box" className applied

// 🐨 add a style prop to each div so their background color
// matches what the text says it should be
// 🐨 also use the style prop to make the font italic
// 💰 Here are available style attributes: backgroundColor, fontStyle

const Box = ({children, className, style}) => (
  <div className={`box ${className}`} style={{fontStyle: 'italic', ...style}}>
    {children}
  </div>
)

const BoxWithSizeProp = ({children, className = '', size, style}) => {
  const sizeProp = size ? `box--${size}` : ''

  return (
    <div
      className={`box ${className} ${sizeProp}`}
      style={{fontStyle: 'italic', ...style}}
    >
      {children}
    </div>
  )
}

const smallBox = (
  <div
    className="box box--small"
    style={{backgroundColor: 'lightblue', fontStyle: 'italic'}}
  >
    small lightblue box
  </div>
)
const mediumBox = (
  <div
    className="box box--medium"
    style={{backgroundColor: 'pink', fontStyle: 'italic'}}
  >
    medium pink box
  </div>
)
const largeBox = (
  <div
    className="box box--large"
    style={{backgroundColor: 'orange', fontStyle: 'italic'}}
  >
    large orange box
  </div>
)

function App() {
  return (
    <div>
      <Box className="box--small" style={{backgroundColor: 'lightblue'}}>
        small lightblue box
      </Box>
      <Box className="box--medium" style={{backgroundColor: 'pink'}}>
        medium pink box
      </Box>
      <Box className="box--large" style={{backgroundColor: 'orange'}}>
        large orange box
      </Box>

      <hr />

      <BoxWithSizeProp size="small" style={{backgroundColor: 'lightblue'}}>
        small lightblue box
      </BoxWithSizeProp>
      <BoxWithSizeProp size="medium" style={{backgroundColor: 'pink'}}>
        medium pink box
      </BoxWithSizeProp>
      <BoxWithSizeProp size="large" style={{backgroundColor: 'orange'}}>
        large orange box
      </BoxWithSizeProp>
    </div>
  )
}

export default App
