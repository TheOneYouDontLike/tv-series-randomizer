const TV_SERIES_PATH = 'TV_SERIES_RANDOMIZER_SERIES'

const storage = window.localStorage

function add (series) {
  const savedSeries = storage.getItem(TV_SERIES_PATH)
  if (!savedSeries) {
    storage.setItem(TV_SERIES_PATH, JSON.stringify([series]))
    return
  }

  const seriesToSave = JSON.parse(savedSeries)
  if (seriesToSave.some(singleSeries => singleSeries.imdbID === series.imdbID)) {
    return
  }

  seriesToSave.push(series)
  storage.setItem(TV_SERIES_PATH, JSON.stringify(seriesToSave))
}

function getAll () {
  const allSeries = storage.getItem(TV_SERIES_PATH)
  if (allSeries) {
    return JSON.parse(allSeries)
  }

  return []
}

export default {add, getAll}
