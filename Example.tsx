import React from 'react'
import { StyleSheet, Text } from 'react-native'
import { defaultTheme } from './src/default'
import { ThemeProvider } from './src/ThemeContext'
import { useStyling } from './src/useStyling'

function Box({ sx, ...props }: React.PropsWithChildren<{ sx: object }>) {
  const styling = useStyling()
  const styles = StyleSheet.create({ box: styling(sx) })
  return <Text style={styles.box} {...props} />
}

export default function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Box
        sx={{
          width: '2/5',
          m: 4,
          color: { xs: 'blue', md: 'blue', lg: 'red' },
          fontSize: { xs: 12, lg: '13rpx' },
        }}
      >
        Open up App.tsx to start working on your app!
      </Box>
      <Box sx={{ px: 4, color: 'red', fontSize: '12rpx' }}>
        Open up App.tsx to start working on your app!
      </Box>
    </ThemeProvider>
  )
}
