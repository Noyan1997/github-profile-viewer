import { Box } from '@chakra-ui/layout'
import { Button, Input } from '@chakra-ui/react'
import GitHubIcon from '@mui/icons-material/GitHub'
import type { NextPage } from 'next'
import { useRouter } from 'next/router'
import { useCallback, useState } from 'react'

const Login: NextPage = () => {
  const [value, setValue] = useState<string>('kevwil')
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false)
  const { push } = useRouter()
  const onSubmit = useCallback(() => {
    setIsSubmitting(true)
    push(`/profile/${value}`)
  }, [value, setIsSubmitting])
  return (
    <>
      <div className="login_page_parrent column w-100 j-center a-center ">
        <GitHubIcon />
        <span>Sign in to GitHub</span>
        <Box className="column">
          <Input
            placeholder="User name"
            type="text"
            onChange={(e: any) => setValue(e.target.value)}
            value={value}
          />
          <Button
            isLoading={isSubmitting}
            loadingText="Fetching Profile"
            disabled={!value || isSubmitting}
            onClick={onSubmit}
            colorScheme="whatsapp"
          >
            Sign In
          </Button>
        </Box>
      </div>
    </>
  )
}

export default Login
