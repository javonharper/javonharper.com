import React from 'react'
import { Box } from 'jsxstyle'

const Text = ({ children, ...props }) => (
  <Box color='black' letterSpacing='0.02rem' fontWeight="500" lineHeight='1.5rem' {...props}>
    {children}
  </Box>
)

export default Text
