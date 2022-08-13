import React from 'react'

const Navbar = () => {
  return (
    <div className='d-flex align-items-center justify-content-between p-4  z-index-n1'>
<h1 className='text-danger fw-bold '>MYFLIX</h1>
<div>
    <button className='text-light  btn btn-dark'>Sign in</button>

    <button className='bg-danger px-8  mx-4 py-2 btn  rounded cursor-pointer text-light'> Sign in</button>
</div>
    </div>
  )
}

export default Navbar