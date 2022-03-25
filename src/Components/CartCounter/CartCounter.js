import React, { useState } from 'react'
import Button from '../ReUsables/Button'

const CartCounter = () => {
    const [counterValue, setCounterValue] = useState(1);
  return (
    <>
        <Button>
            -
        </Button>
        <div> {counterValue} </div>
        <Button>
            +
        </Button>
    </>
  )
}

export default CartCounter