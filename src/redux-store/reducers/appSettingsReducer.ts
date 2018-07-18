
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
US - https://www.voanews.com/z/599
US Politics - https://www.voanews.com/z/4720
Africa - https://www.voanews.com/z/612
East Asia - https://www.voanews.com/z/600
South & Central Asia - https://www.voanews.com/z/5452
Europe - https://www.voanews.com/z/611
Middle East - https://www.voanews.com/z/598
Tech - https://www.voanews.com/z/621
Science & Health - https://www.voanews.com/z/607
*/

export const INITIAL_STATE: AppSettings = {
  categories: [
    {
      id: 599,
      name: 'USA',
    },
    {
      id: 4720,
      name: 'US Politics',
    },
    {
      id: 612,
      name: 'Africa',
    },
    {
      id: 600,
      name: 'East Asia',
    },
    {
      id: 5452,
      name: 'South & Central Asia',
    },
    {
      id: 611,
      name: 'Europe',
    },
    {
      id: 598,
      name: 'Middle East',
    },
    {
      id: 621,
      name: 'Silicon Valley & Technology',
    },
    {
      id: 607,
      name: 'Science & Health',
    },
  ],
  mediaPlaybackRate: 1,
  dailyNotificationOn: true,
  psiphonEnabled: true,
  textSize: 1,
}

export default buildReducer(INITIAL_STATE, actors)
