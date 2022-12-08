const SecondsConverter = (seconds: number) => {
  const hours = Math.floor(seconds / 3600)
  const minutes = Math.floor((seconds - hours * 3600) / 60)
  const secondsLeft = seconds - hours * 3600 - minutes * 60

  const result = [minutes.toString().padStart(2, '0'), secondsLeft.toString().padStart(2, '0')].join(':')

  return result
}

export default SecondsConverter
