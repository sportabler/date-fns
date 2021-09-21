var formatDistanceLocale = {
  lessThanXSeconds: {
    one: 'minna en 1 sek.',
    other: 'minna en {{count}} sekúndur'
  },

  xSeconds: {
    one: '1 sek.',
    other: '{{count}} sek.'
  },

  halfAMinute: 'hálfa mín.',

  lessThanXMinutes: {
    one: 'minna en 1 mín.',
    other: 'minna en {{count}} mín.'
  },

  xMinutes: {
    one: '1 mín.',
    other: '{{count}} mín'
  },

  aboutXHours: {
    one: 'u.þ.b. 1 klst',
    other: 'eftir u.þ.b. {{count}} klst'
  },

  xHours: {
    one: '1 klst.',
    other: '{{count}} klst.'
  },

  xDays: {
    one: '1 dag',
    other: '{{count}} daga'
  },

  aboutXWeeks: {
    one: 'um viku',
    other: '{{count}} vikur'
  },

  xWeeks: {
    one: '1 viku',
    other: '{{count}} vikur'
  },

  aboutXMonths: {
    one: 'u.þ.b. 1 mán.',
    other: 'u.þ.b. {{count}} mán.'
  },

  xMonths: {
    one: '1 mán.',
    other: '{{count}} mán.'
  },

  aboutXYears: {
    one: 'u.þ.b. 1 ár',
    other: 'u.þ.b. {{count}} ár'
  },

  xYears: {
    one: '1 ár',
    other: '{{count}} ár'
  },

  overXYears: {
    one: 'meira en 1 ár',
    other: 'meira en {{count}} ár'
  },

  almostXYears: {
    one: 'næstum 1 ár',
    other: 'næstum {{count}} ár'
  }
}

export default function formatDistance(token, count, options) {
  options = options || {}

  var result
  if (typeof formatDistanceLocale[token] === 'string') {
    result = formatDistanceLocale[token]
  } else if (count === 1) {
    result = formatDistanceLocale[token].one
  } else {
    result = formatDistanceLocale[token].other.replace('{{count}}', count)
  }

  if (options.addSuffix) {
    if (options.comparison > 0) {
      return 'í ' + result
    } else {
      return result + ' síðan'
    }
  }

  return result
}
