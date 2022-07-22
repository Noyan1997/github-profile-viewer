import { Box } from '@chakra-ui/layout'
import { Input } from '@chakra-ui/react'
import GitHubIcon from '@mui/icons-material/GitHub'
import type { NextPage } from 'next'
import { useRouter } from 'next/router'
import { useState } from 'react'

const Login: NextPage = () => {
  const [value, setValue] = useState<string>('kevwil')
  const { push } = useRouter()

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
          <Input placeholder="password" disabled />
          <button disabled={!value} onClick={() => push(`/profile/${value}`)}>
            Sign in
          </button>
        </Box>
      </div>
    </>
  )
}

export default Login
