import React from 'react'

const NxtWatchContext = React.createContext({
  isDarkTheme: false,
  toggleDark: () => {},
  selectedRoute: '',
  changeSelectedRoute: () => {},
})

export default NxtWatchContext
