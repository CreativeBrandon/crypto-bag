export const cryptoIcon = (icon: string, type: string = 'color') => {
  const iconPath = require(`@creativebrandon/cryptocurrency-icons/svg/${type}/${icon.toLowerCase()}.svg`)
  if (iconPath) return iconPath
  return null
}

export default {
  methods: {
    cryptoIcon
  }
}
