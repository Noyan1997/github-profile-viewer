import { useToast } from '@chakra-ui/react'
import { useRouter } from 'next/router'
import { useEffect, useRef } from 'react'
import { IUserData } from '../../../interface/global'
const useUsername = (users: IUserData) => {
  const { push } = useRouter()
  const isMountedRef = useRef<boolean>(false)
  const toast = useToast()
  useEffect(() => {
    if (users.message && !isMountedRef.current) {
      //   toast.error('There is no user with this username')
      toast({
        title: 'User not found!',
        description: 'Check username and try again',
        status: 'error',
        duration: 3000,
        isClosable: true,
      })
      // prevent to extra routing and rerendering
      isMountedRef.current = true
      push('/')
    }
  }, [])

  return {}
}
export default useUsername
