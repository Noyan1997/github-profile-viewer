import { Box } from '@chakra-ui/layout'
import { Button, Input } from '@chakra-ui/react'
import type { NextPage } from 'next'
import { Helmet } from 'react-helmet'
import { FaGithub } from 'react-icons/fa'
import { FormattedMessage, useIntl } from 'react-intl'
import useLogin from './Login.biz'
import loginMsg from './Login.messages'

const Login: NextPage = () => {
  const { isSubmitting, onSubmit, setValue, value } = useLogin()
  const { formatMessage } = useIntl()
  return (
    <>
      <Helmet>
        <title>{formatMessage(loginMsg.login)}</title>
      </Helmet>
      <div className="login_page_parrent column w-100 j-center a-center ">
        <Box className="login_box">
          <FaGithub size="4em" />
          <span>
            <FormattedMessage {...loginMsg.login} />
          </span>
          <Box className="column">
            <Input
              placeholder="User name"
              type="text"
              onChange={(e) => setValue(e.target.value)}
              value={value}
            />
            <Button
              isLoading={isSubmitting}
              loadingText={formatMessage(loginMsg.fetchingProfile)}
              disabled={!value || isSubmitting}
              onClick={onSubmit}
              colorScheme="whatsapp"
            >
              <FormattedMessage {...loginMsg.submitButton} />
            </Button>
          </Box>
        </Box>
      </div>
    </>
  )
}

export default Login
