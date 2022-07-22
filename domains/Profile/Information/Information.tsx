import { Avatar } from '@chakra-ui/avatar'
import { Button } from '@chakra-ui/button'
import { Wrap, WrapItem } from '@chakra-ui/layout'
import type { NextPage } from 'next'
import { BsFillPeopleFill, BsLink45Deg } from 'react-icons/bs'
import { MdLocationOn } from 'react-icons/md'
import { FormattedMessage } from 'react-intl'
import { IInformation } from '../../../interface/global'
import informMessage from './Information.message'

const Information: NextPage<IInformation> = ({ users }) => {
  return (
    <>
      <div className="info_patternt column">
        <Wrap>
          <WrapItem>
            <Avatar
              size="2xl"
              name={users.name || users.login}
              src={users.avatar_url}
            />
          </WrapItem>
        </Wrap>
        {users.name && <span> {users.name}</span>}
        <span>{users.login}</span>
        <Button colorScheme="gray">
          <FormattedMessage {...informMessage.followButton} />
        </Button>

        <div>{users.bio && <span>{users.bio}</span>}</div>

        <div className="followers a-center">
          <BsFillPeopleFill className="icon" />
          <FormattedMessage
            {...informMessage.follower}
            values={{
              followerCount: <span>{users.followers}</span>,
            }}
          />
          &nbsp;
          <BsFillPeopleFill className="icon" />
          <FormattedMessage
            {...informMessage.following}
            values={{ followingCount: <span>{users.following}</span> }}
          />
        </div>

        {users.location && (
          <span className="a-center">
            <MdLocationOn className="icon" />
            {users.location}
          </span>
        )}
        {users.blog && (
          <a className="a-center" target="_blank" href={users.blog}>
            <BsLink45Deg className="icon" /> {users.blog}
          </a>
        )}
      </div>
    </>
  )
}

export default Information
