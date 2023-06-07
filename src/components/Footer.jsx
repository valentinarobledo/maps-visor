import React from 'react'
import { Icon } from '@iconify/react'

const Footer = () => {
  return (
    <div className='footer text-center py-2'>
        <a href="https://github.com/valentinarobledo" target='_blank'>
            <Icon icon="mdi:github"></Icon>
            <span className='ms-1'>valentinarobledo</span> 
        </a>
    </div>
  )
}

export default Footer