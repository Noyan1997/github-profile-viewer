import { useRouter } from 'next/router'
import { useCallback, useState } from 'react'

const useLogin = () => {
  const [value, setValue] = useState<string>('')
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false)
  const { push } = useRouter()
  const onSubmit = useCallback(() => {
    setIsSubmitting(true)
    push(`/profile/${value}`)
  }, [value, setIsSubmitting])
  return { setValue, value, isSubmitting, onSubmit }
}
export default useLogin
