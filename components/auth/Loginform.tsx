import React from 'react'
import Cardwrapper from './Cardwrapper'



const Loginform = () => {
  return (
    <Cardwrapper
     headerLable='welcome back.'
     backButtonLable='dont have an account'
     backbtnHref='/auth/register'
     showSocial
    >
        Loginform
    </Cardwrapper>
  )
}

export default Loginform