import React, { Children } from 'react'
import { Button } from '@mui/material'

export const CommonButton = ({children,color,disabled,size,variant,sx}:any) => {
  return (
   <Button 
   color={color}
   disabled={disabled}
   size={size}
   variant={variant}
   sx={sx}
   >
    {children}
   </Button>
  )
}

export default CommonButton;