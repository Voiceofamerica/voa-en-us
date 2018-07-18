
import * as React from 'react'
import { RouteComponentProps } from 'react-router'
import TopNav, { TopNavItem, StaticItem } from '@voiceofamerica/voa-shared/components/TopNav'
import ThemeProvider from '@voiceofamerica/voa-shared/components/ThemeProvider'

import analytics, { AnalyticsProps } from '@voiceofamerica/voa-shared/helpers/analyticsHelper'
import ErrorBoundary from 'components/ErrorBoundary'
import Category from 'types/Category'
import { programsScreenLabels } from 'labels'

import TopNavTheme from './TopNavTheme'
import Params from './Params'
import VideoPrograms from './VideoPrograms'
import AudioPrograms from './AudioPrograms'
import { programsScreen, programTypeNav, typeItem, active } from './ProgramsScreen.scss'

type ProgramType = 'audio' | 'video'

const VIDEO: ProgramType = 'video'
const AUDIO: ProgramType = 'audio'
const DEFAULT = VIDEO

/*
Africa 54 - https://www.voanews.com/z/3589
Border Crossings - https://www.voanews.com/z/3649
People in America - https://www.voanews.com/z/5211
Straight Talk Africa - https://www.voanews.com/z/1434
VOA Connect - https://www.voanews.com/z/5302
Plugged in With Greta Van Susteren - https://www.voanews.com/z/5382
*/

const VIDEO_ZONES: Category[] = [
  {
    id: 0,
    name: 'All Programs',
  },
  {
    id: 3589,
    name: 'Africa 54',
  },
  {
    id: 3649,
    name: 'Border Crossings',
  },
  {
    id: 5211,
    name: 'People in America',
  },
  {
    id: 1434,
    name: 'Straight Talk Africa',
  },
  {
    id: 5302,
    name: 'VOA Connect',
  },
  {
    id: 5382,
    name: 'Plugged in With Greta Van Susteren',
  },
]

/*
Africa News Tonight - https://www.voanews.com/z/1438
American Café - https://www.voanews.com/z/1440
Border Crossings - https://www.voanews.com/z/1441
Daybreak Africa - https://www.voanews.com/z/1445
Encounter - https://www.voanews.com/z/1447
The Game Room - https://www.voanews.com/z/4883
Health Chat - https://www.voanews.com/z/1449
International Edition - https://www.voanews.com/z/1451
Issues in the News - https://www.voanews.com/z/1452
Let's Talk - https://www.voanews.com/z/4074
Music Time in Africa - https://www.voanews.com/z/1456
Nightline Africa - https://www.voanews.com/z/1457
Press Conference USA - https://www.voanews.com/z/1458
Reporters' Roundtable - https://www.voanews.com/z/1460
Sonny Side of Sports - https://www.voanews.com/z/1463
Straight Talk Africa [simulcast] - https://www.voanews.com/z/1464
South Sudan In Focus - https://www.voanews.com/z/1465
Up Front - https://www.voanews.com/z/146
VOA Asia - https://www.voanews.com/z/5082
VOA Newscasts - https://www.voanews.com/z/1469
*/

const AUDIO_ZONES: Category[] = [
  {
    id: 0,
    name: 'All Programs',
  },
  {
    id: 1438,
    name: 'Africa News Tonight',
  },
  {
    id: 1440,
    name: 'American Café',
  },
  {
    id: 1441,
    name: 'Border Crossings',
  },
  {
    id: 1445,
    name: 'Daybreak Africa',
  },
  {
    id: 1447,
    name: 'Encounter',
  },
  {
    id: 4883,
    name: 'The Game Room',
  },
  {
    id: 1449,
    name: 'Health Chat',
  },
  {
    id: 1451,
    name: 'International Edition',
  },
  {
    id: 1452,
    name: 'Issues in the News',
  },
  {
    id: 4074,
    name: 'Let\'s Talk',
  },
  {
    id: 1456,
    name: 'Music Time in Africa',
  },
  {
    id: 1457,
    name: 'Nightline Africa',
  },
  {
    id: 1458,
    name: 'Press Conference USA',
  },
  {
    id: 1460,
    name: 'Reporters\' Roundtable',
  },
  {
    id: 1463,
    name: 'Sonny Side of Sports',
  },
  {
    id: 1464,
    name: 'Straight Talk Africa [simulcast]',
  },
  {
    id: 1465,
    name: 'South Sudan In Focus',
  },
  {
    id: 146,
    name: 'Up Front',
  },
  {
    id: 5082,
    name: 'VOA Asia',
  },
  {
    id: 1469,
    name: 'VOA Newscasts',
  },
]

interface Props extends RouteComponentProps<Params>, AnalyticsProps {
}

class ProgramsScreen extends React.Component<Props> {
  setProgramType = (programType: ProgramType) => {
    const { history, match } = this.props
    const { zone } = match.params

    if (zone) {
      history.replace(`/programs/${programType}/${zone}`)
    } else {
      history.replace(`/programs/${programType}`)
    }
  }

  setZoneId = (zoneId: number) => {
    const { history, match } = this.props
    const { type = DEFAULT } = match.params
    history.replace(`/programs/${type}/${zoneId}`)
  }

  renderPrograms () {
    const { history, match } = this.props
    const { type = DEFAULT } = match.params
    if (type === VIDEO) {
      return <VideoPrograms history={history} zoneId={this.getZoneId()} />
    } else if (type === AUDIO) {
      return <AudioPrograms history={history} zoneId={this.getZoneId()} />
    } else {
      throw new Error(`Invalid programType ${type}`)
    }
  }

  renderProgramTypes () {
    const { type = DEFAULT } = this.props.match.params

    return (
      <div className={programTypeNav}>
        <div className={type === VIDEO ? `${typeItem} ${active}` : typeItem} onClick={() => this.setProgramType(VIDEO)}>
          {programsScreenLabels.videos}
        </div>
        <div className={type === AUDIO ? `${typeItem} ${active}` : typeItem} onClick={() => this.setProgramType(AUDIO)}>
          {programsScreenLabels.audio}
        </div>
      </div>
    )
  }

  render () {
    return (
      <div className={programsScreen}>
        {this.renderTopNav()}
        <ErrorBoundary>
          {this.renderPrograms()}
        </ErrorBoundary>
        {this.renderProgramTypes()}
      </div>
    )
  }

  private getZoneId = () => {
    const { zone = 0 } = this.props.match.params
    return typeof zone === 'number' ? zone : parseInt(zone, 10)
  }

  private renderTopNav () {
    const { type = DEFAULT } = this.props.match.params

    if (type === VIDEO) {
      return this.renderTopNavFromItems(VIDEO_ZONES)
    } else if (type === AUDIO) {
      return this.renderTopNavFromItems(AUDIO_ZONES)
    } else {
      throw new Error(`Unrecognized program type ${type}`)
    }
  }

  private renderTopNavFromItems (items: Category[]) {
    const zoneId = this.getZoneId()

    return (
      <ThemeProvider value={TopNavTheme}>
        <TopNav flex>
          <StaticItem />
          {
            items.map(({ id, name }) => {
              const selected = zoneId === id

              return (
                <TopNavItem
                  key={id}
                  selected={selected}
                  onClick={() => this.setZoneId(id)}
                >
                  {name}
                </TopNavItem>
              )
            })
          }
          <TopNavItem />
        </TopNav>
      </ThemeProvider>
    )
  }
}

const withAnalytics = analytics<Props>({
  state: 'Programs',
  title: 'Programs',
})

export default withAnalytics(ProgramsScreen)
