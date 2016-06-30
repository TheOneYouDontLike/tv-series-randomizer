import expect from 'expect'
import randomizer from '../randomizer'
const getRandomEpisode = randomizer.getRandomEpisode
const getRandomSeason = randomizer.getRandomSeason

function onlyUnique (value, index, self) {
  return self.indexOf(value) === index
}

describe('randomizer', () => {
  it('should randomize seasons', () => {
    const episodes = require('./episodesList')

    const watchedEpisodes = ['2', '3']

    const uniqeTitles = [
      getRandomEpisode(episodes, watchedEpisodes).Title,
      getRandomEpisode(episodes, watchedEpisodes).Title,
      getRandomEpisode(episodes, watchedEpisodes).Title,
    ].filter(onlyUnique)

    expect(uniqeTitles.length).toBeGreaterThan(1)
  })

  it('should randomize seasons', () => {
    const totalSeasons = 7

    const uniqueSeasons = [
      getRandomSeason(totalSeasons),
      getRandomSeason(totalSeasons),
      getRandomSeason(totalSeasons),
      getRandomSeason(totalSeasons),
    ].filter(onlyUnique)

    expect(uniqueSeasons.length).toBeGreaterThan(1)
  })
})
