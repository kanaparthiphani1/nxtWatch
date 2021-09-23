import React from 'react'

const NxtWatchContext = React.createContext({
  isDarkTheme: false,
  toggleDark: () => {},
})

export default NxtWatchContext
