function getRandomEpisode (episodesList, watchedEpisodes) {
  const availableEpisodes = episodesList.filter(episode => watchedEpisodes.indexOf(episode.Episode) < 0)

  const randomNumber = Math.floor(Math.random() * (availableEpisodes.length - 2)) + 1

  return availableEpisodes[randomNumber]
}

function getRandomSeason (totalSeasons) {
  return Math.floor(Math.random() * (totalSeasons - 2)) + 1
}

module.exports = {getRandomEpisode, getRandomSeason}
