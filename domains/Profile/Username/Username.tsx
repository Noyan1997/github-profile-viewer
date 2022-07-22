import { Grid, GridItem } from '@chakra-ui/layout'
import type { NextPage } from 'next'
import { Helmet } from 'react-helmet'
import { useIntl } from 'react-intl'
import 'react-toastify/dist/ReactToastify.css'
import { IUserData } from '../../../interface/global'
import Information from '../Information'
import Repository from '../Repository'
import useUsername from './Username.biz'
import usernameMessages from './Username.message'
const UserName: NextPage<{ users: IUserData }> = ({ users }) => {
  useUsername(users)
  const { formatMessage } = useIntl()
  if (users.message) return null
  return (
    <>
      <Helmet>
        <title>
          {formatMessage(usernameMessages.title, { username: users.login })}
        </title>
      </Helmet>
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
