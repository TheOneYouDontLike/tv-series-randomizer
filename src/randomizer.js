export function getRandomEpisode (episodesList, watchedEpisodes) {
  const availableEpisodes = episodesList.filter(episode => watchedEpisodes.indexOf(Number(episode.Episode)) < 0)

  const randomNumber = Math.floor(Math.random() * (availableEpisodes.length - 2)) + 1

  return availableEpisodes[randomNumber]
}
