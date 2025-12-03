import React from 'react'
import Button from './Button'

function ButtonList() {
    const buttonArr=["All","Most Played","Cricket","Trending","Most Watched","Football","Sports","Movies", "Hindi Series"]
  return (
    <div>
      <Button info={buttonArr}/>
    </div>
  )
}

export default ButtonList
