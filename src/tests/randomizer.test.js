import expect from 'expect'
import {getRandomEpisode} from '../randomizer'

function onlyUnique (value, index, self) {
  return self.indexOf(value) === index
}

describe('randomizer', () => {
  it('should randomize seasons', () => {
    const episodes = require('./episodesList')

    const watchedEpisodes = [2, 3]

    const uniqeTitles = [
      getRandomEpisode(episodes, watchedEpisodes).Title,
      getRandomEpisode(episodes, watchedEpisodes).Title,
      getRandomEpisode(episodes, watchedEpisodes).Title,
    ]

    expect(uniqeTitles.filter(onlyUnique).length).toBeGreaterThan(1)
  })
})
