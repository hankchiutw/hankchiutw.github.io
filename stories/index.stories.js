import { document, console } from 'global'
import { storiesOf } from '@storybook/html'
import '../src/components/profile-card.js'
import resumeJSON from '../src/resume.json'

storiesOf('Basic', module)
  .add('profile-card', () => {
    console.log('resumeJSON:', resumeJSON)
    return `<profile-card resumejson='${JSON.stringify(resumeJSON)}'></profile-card>`
  })
