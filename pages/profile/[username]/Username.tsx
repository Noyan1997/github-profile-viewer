import { Grid, GridItem } from '@chakra-ui/layout'
import type { NextPage } from 'next'
import { useRouter } from 'next/router'
import { useEffect, useRef } from 'react'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Information from '../../../domains/Profile/Information'
import Repository from '../../../domains/Profile/Repository'
import { IUserData } from '../../../interface/global'

const UserName: NextPage<{ users: IUserData }> = ({ users }) => {
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
  if (users.message) return null

  return (
    <>
      <div className="row user_profile_parrent">
        <Grid
          h="200px"
          templateRows="repeat(2, 1fr)"
          templateColumns="repeat(5, 1fr)"
          gap={4}
        >
          <GridItem rowSpan={2} colSpan={1}>
            <Information users={users} />
          </GridItem>
          <GridItem colSpan={3}>
            <Repository users={users} />
          </GridItem>
        </Grid>
      </div>
    </>
  )
}

export default UserName
