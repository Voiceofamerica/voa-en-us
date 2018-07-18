
import {
  type as setPsiphonEnabledType,
  SetPsiphonEnabledAction,
} from '../actions/setPsiphonEnabled'

import {
  type as setCategoryOrderType,
  SetCategoryAction,
} from '../actions/setCategoryOrder'

import {
  type as setMediaPlaybackRateType,
  SetMediaPlaybackRateAction,
} from '../actions/setMediaPlaybackRate'

import {
  type as toggleDailyNotificationType,
  ToggleDailyNotificationAction,
} from '../actions/toggleDailyNotification'

import {
  type as setTextSizeType,
  SetTextSizeAction,
} from '../actions/setTextSize'

import { ActorMap, buildReducer } from '../actorMap'
import AppSettings from 'types/AppSettings'

const actors: ActorMap<AppSettings> = {
  [setPsiphonEnabledType]: (prev, { psiphonEnabled }: SetPsiphonEnabledAction) => ({
    ...prev,
    psiphonEnabled,
  }),
  [setCategoryOrderType]: (prev, { categories }: SetCategoryAction) => ({
    ...prev,
    categories,
  }),
  [setMediaPlaybackRateType]: (prev, { mediaPlaybackRate }: SetMediaPlaybackRateAction) => ({
    ...prev,
    mediaPlaybackRate,
  }),
  [toggleDailyNotificationType]: (prev, { on: dailyNotificationOn = !prev.dailyNotificationOn }: ToggleDailyNotificationAction) => ({
    ...prev,
    dailyNotificationOn,
  }),
  [setTextSizeType]: (prev, { textSize }: SetTextSizeAction) => ({
    ...prev,
    textSize,
  }),
}

/*
US - https://www.voanews.com/p/5750.html
US Politics - https://www.voanews.com/p/5612.html
Africa - https://www.voanews.com/p/5749.html
East Asia - https://www.voanews.com/p/5751.html
South & Central Asia - https://www.voanews.com/p/6842.html
Europe - https://www.voanews.com/p/5753.html
Middle East - https://www.voanews.com/p/5752.html
Tech - https://www.voanews.com/p/6289.html
Science & Health - https://www.voanews.com/p/6290.html
*/

export const INITIAL_STATE: AppSettings = {
  categories: [
    {
      id: 594,
      name: 'News',
    },
    {
      id: 599,
      name: 'USA',
    },
    {
      id: 4720,
      name: 'US Politics',
    },
    {
      id: 621,
      name: 'Silicon Valley & Technology',
    },
    {
      id: 605,
      name: 'Economy',
    },
    {
      id: 607,
      name: 'Science & Health',
    },
    {
      id: 602,
      name: 'Arts & Entertainment',
    },
    {
      id: 3413,
      name: 'Day in Photos',
    },
    {
      id: 611,
      name: 'Europe',
    },
    {
      id: 616,
      name: 'Americas',
    },
  ],
  mediaPlaybackRate: 1,
  dailyNotificationOn: true,
  psiphonEnabled: true,
  textSize: 1,
}

export default buildReducer(INITIAL_STATE, actors)
