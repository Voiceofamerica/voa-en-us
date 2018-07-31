
import * as React from 'react'
import { push } from 'react-router-redux'
import store from 'redux-store'
import toggleCircumventionDrawer from 'redux-store/actions/toggleCircumventionDrawer'
import * as moment from 'moment'

import { setAnalyticsOptions } from '@voiceofamerica/voa-shared/helpers/analyticsBindings'
import { setDirection } from '@voiceofamerica/voa-shared/helpers/textDirectionHelper'

import { Audience } from 'helpers/graphql-types'

setAnalyticsOptions({
  language: 'english',
  languageService: 'english',
  propertyName: 'voa english news app',
  propertyId: '341',
  rsidAccount: 'bbgvoa.english.streaming.app',
  reportSuite: 'bbgvoa.english.streaming.app',
})
setDirection('ltr')

export const graphqlAudience = Audience.enus

moment.locale('en-us')

export const articleLabels = {
  updatedOn: (date: string) => `Updated: ${date}`,
  relatedContent: 'Related',
  shareMessage: 'Check out this story',
  galleryLoading: 'Gallery loading...',
}

export const categorySettingsLabels = {
  header: 'Reorder Categories',
  myCategories: 'My Categories',
  allCategories: 'All Categories',
  dragAndDrop: 'Drag Your Categories Here',
  headlinesFirst: 'Headlines listed first (can\'t be changed)',
  cancel: 'Cancel',
}

export const circumventionDrawerLabels = {
  enabledContent: (
    <div>
      <p>
       Your connection to VOA is private and anonymous.
      </p>
      <p>
        <a href='#' onClick={() => {
          store.dispatch(push('/settings'))
          store.dispatch(toggleCircumventionDrawer({ open: false }))
        }}>You can change this in Settings</a>.
      </p>
    </div>
  ),
  disabledContent: (
    <div>
      <p>
        Private proxy is off.
      </p>
      <p>
        <a href='#' onClick={() => {
          store.dispatch(push('/settings'))
          store.dispatch(toggleCircumventionDrawer({ open: false }))
        }}>You can change this in Settings</a>.
      </p>
    </div>
  ),
}

export const editorsChoiceLabels = {
  header: 'Editor\'s Picks',
}

export const errorBoundaryLabels = {
  error: 'An error occurred.',
  retry: 'Retry',
}

export const favoritesSettingsLabels = {
  header: 'Favorites',
  removeAll: 'Delete All',
}

export const homeLabels = {
  headlines: 'Headlines',
  search: 'Search',
  manage: '+',
}

export const introLabels = {
  content: 'Thank you for downloading the VOA news app.  We hope you find it useful and easy to use.  Please send us feedback to help us improve the app.',
  continue: 'Continue',
}

const hilight: React.CSSProperties = {
  color: '#0162B1',
}

export const mediaPlayerLabels = {
  empty: (
    <div>
      <p>
        This is VoA's <span style={hilight}>multimedia</span> player. When you play audio or video content, it will play here.
      </p>
      <p>
        You can continue to navigate the app without stopping the <span style={hilight}>multimedia</span> by closing the drawer.
      </p>
      <p>
        Use the round <span style={hilight}>multimedia</span> button at the bottom of the screen to open this screen again.
      </p>
      <p>
        You can also start and stop the <span style={hilight}>multimedia</span> by pressing the button at the bottom while this screen is open.
      </p>
    </div>
  ),
  loading: 'Loading media...',
}

export const mediaSettingsLabels = {
  normalSpeed: '1x',
  halfAgainSpeed: '1.5x',
  doubleSpeed: '2x',
  chooseSpeed: 'Media playback speed',
}

export const programsScreenLabels = {
  videos: 'Video',
  audio: 'Audio',
  empty: 'No content',
}

export const psiphonLoadingLabels = {
  bold: 'Please be patient.',
  text: 'This may take a few minutes while we gather the best information for you.',
}

export const pullToRefreshLabels = {
  pull: 'Swipe down to refresh',
  release: 'Release to refresh',
}

export const searchLabels = {
  header: 'Search Results',
  back: 'Back',
  all: 'All',
  query: 'Search',
  empty: 'Your search didn\'t return any results.  Please try again with different key words.',
}

export const settingsLabels = {
  header: 'Settings',
  panic: 'Reset app',
  sendToFriends: 'Share app with a friend',
  sendFeedback: 'Send us feedback',
  aboutVoa: 'Voice of America (VOA) is the largest U.S. international broadcaster, providing news and information in more than 40 languages to an estimated weekly audience of 236.8 million people. VOA produces content for digital, television, and radio platforms. It is easily accessed via your mobile phone and on social media. It is also distributed by satellite, cable, FM and MW, and is carried on a network of approximately 3,000 affiliate stations.',
  feedbackEmail: 'voanews@voanews.com',
  feedbackSubject: encodeURIComponent('Feedback from VOA app user'),
  feedbackBody: encodeURIComponent(''),
  shareMessage: 'Check out this app',
  psiphon: 'Secure proxy',
  psiphonOn: 'On',
  psiphonOff: 'Off',
  takeEffectOnRestart: 'You must restart the app for your changes to take effect.',
  okay: 'Okay',
}

export const textSettingsLabels = {
  textSize: 'Article text size',
  normalSize: '1x',
  largeSize: '1.5x',
  hugeSize: '2x',
}
