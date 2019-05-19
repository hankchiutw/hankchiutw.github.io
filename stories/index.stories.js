import { document, console } from 'global'
import { storiesOf } from '@storybook/html'
import '../src/components/profile-card.js'
import resumeJSON from '../assets/resume.json'

storiesOf('Basic', module).add('profile-card', () => {
  console.log('resumeJSON:', resumeJSON)
  return `
  <profile-card
    imgurl='assets/portrait.jpg'
    resumejson='${JSON.stringify(resumeJSON)}'
  ></profile-card>
  `
})
