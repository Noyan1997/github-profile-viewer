import type { NextPage } from 'next'
import { useState } from 'react'

const Login: NextPage = () => {
  const [value, setValue] = useState<string>()
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
        <button disabled={!value} onClick={() => console.log(value)}>
          Sign in
        </button>
      </div>
    </>
  )
}

export default Login
