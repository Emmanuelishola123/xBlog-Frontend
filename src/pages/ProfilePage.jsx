import { Box } from '@chakra-ui/react'
import React from 'react'
import { ProfileUserInfo } from '../components'

function ProfilePage() {
  return (
    <Box width='100%'>
      <Box bgColor={'pink.500'} height='80px' />
      <Box px={{base: '0', md: '4', lg: '10vw', xl: '15vw' }}>
        <ProfileUserInfo />
      </Box>
    </Box>
  )
}

export default ProfilePage