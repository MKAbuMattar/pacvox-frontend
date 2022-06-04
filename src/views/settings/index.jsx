import React, { Fragment, useState, useEffect } from 'react'
import { Tabs } from 'react-tabs'

import Navbar from '../../components/navbar'

import RandomBackground from '../../components/randombackground'
import Loader from '../../components/loader'
import MeatDecorator from '../../components/meatdecorator'

import Edit from './edit'
import Name from './edit/name'
import Username from './edit/username'
import Email from './edit/email'
import Password from './edit/password'

import { BiRename } from 'react-icons/bi'
import { FaUserEdit } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'
import { RiLockPasswordFill } from 'react-icons/ri'

import {
  SettingsContainer,
  SettingsBox,
  TabListCounter,
  TabCounter,
  TabPanelCounter,
} from './style'

import { useIsUserLoginHome } from '../../hooks/useUserLogin'

const Settings = (props) => {
  const { getcurrentUser, isGetcurrentUserLoading } = useIsUserLoginHome()

  const [currentUser, setCurrentUser] = useState(undefined)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    if (!isGetcurrentUserLoading) {
      setCurrentUser(getcurrentUser)
      setIsLoading(false)
    }
  }, [isGetcurrentUserLoading])

  return (
    <Fragment>
      <MeatDecorator
        title={props.meta.title}
        description={props.meta.description}
        keywords={props.meta.keywords}
        canonical={props.meta.canonical}
        imageSecureUrl={props.meta.imageSecureUrl}
        image={props.meta.image}
        imageAlt={props.meta.imageAlt}
        imageWidth={props.meta.imageWidth}
        imageHeight={props.meta.imageHeight}
        imageType={props.meta.imageType}
      />
      <RandomBackground />
      {isLoading ? (
        <Fragment>
          <Loader />
        </Fragment>
      ) : (
        <Fragment>
          <Navbar user={currentUser} />
          <SettingsContainer>
            <SettingsBox>
              <Tabs>
                <TabListCounter>
                  <TabCounter>
                    <BiRename />
                    Edit Name
                  </TabCounter>
                  <TabCounter>
                    <FaUserEdit />
                    Edit Username
                  </TabCounter>
                  <TabCounter>
                    <MdEmail />
                    Edit Email
                  </TabCounter>
                  <TabCounter>
                    <RiLockPasswordFill />
                    Edit Password
                  </TabCounter>
                </TabListCounter>

                <TabPanelCounter>
                  <Edit>
                    <Name title="Edit Name" icon={<BiRename />} />
                  </Edit>
                </TabPanelCounter>
                <TabPanelCounter>
                  <Edit>
                    <Username title="Edit Username" icon={<FaUserEdit />} />
                  </Edit>
                </TabPanelCounter>
                <TabPanelCounter>
                  <Edit>
                    <Email title="Edit Email" icon={<MdEmail />} />
                  </Edit>
                </TabPanelCounter>
                <TabPanelCounter>
                  <Edit>
                    <Password
                      title="Edit Password"
                      icon={<RiLockPasswordFill />}
                    />
                  </Edit>
                </TabPanelCounter>
              </Tabs>
            </SettingsBox>
          </SettingsContainer>
        </Fragment>
      )}
    </Fragment>
  )
}

export default Settings
