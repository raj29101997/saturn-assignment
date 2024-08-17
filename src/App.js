import React, { useState } from 'react'
import "./App.css"
import Button from 'react-bootstrap/Button';
import PropertyModal from './Modal/Modal';

const App = () => {
  const [open, setOpen] = useState(false)
  function handleOpen() {
    setOpen(true)
  }
  function handleClose() {
    setOpen(false)
  }
  return (
    <>
      <div className='App'>
        <Button onClick={handleOpen} variant="primary">
          Button
        </Button>
      </div>
      {
        open && <PropertyModal open={open} onClose={handleClose} />
      }
    </>
  )
}

export default App