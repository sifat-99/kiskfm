'use client'
import { ListItem, Typography } from '@material-tailwind/react'
import { signOut } from 'next-auth/react'
import React from 'react'

const Logout = () => {
  return (
    
    <div onClick={() => signOut()}
    className="" href=""
    ><Typography
    as="a"
    href="about"
    variant="small"
    color="blue-gray"
    className="font-bold"
  >
    <ListItem className="flex items-center gap-2 py-2 pr-4"> Logout </ListItem>
  </Typography></div>
  )
}

export default Logout