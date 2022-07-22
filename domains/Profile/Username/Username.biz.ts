import { useRouter } from 'next/router'
import { useEffect, useRef } from 'react'
import { toast } from 'react-toastify'
import { IUserData } from '../../../interface/global'
const useUsername = (users: IUserData) => {
  const { push } = useRouter()
  const isMountedRef = useRef<boolean>(false)

  useEffect(() => {
    if (users.message && !isMountedRef.current) {
      toast.error('There is no user with this username')
      // prevent to extra routing and rerendering
      isMountedRef.current = true
      push('/')
    }
  }, [])

  return {}
}
export default useUsername
