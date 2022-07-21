import type { NextPage } from 'next'
import { useRouter } from 'next/router'
import { useState } from 'react'

const Login: NextPage = () => {
  const [value, setValue] = useState<string>('kevwil')
  const { push } = useRouter()

  return (
    <>
      <div>
        <input
          onChange={(e) => setValue(e.target.value)}
          value={value}
          type="text"
          placeholder="User name"
        />
        <input disabled type="password" placeholder="password" />
        <button disabled={!value} onClick={() => push(`/profile/${value}`)}>
          Sign in
        </button>
      </div>
    </>
  )
}

export default Login
