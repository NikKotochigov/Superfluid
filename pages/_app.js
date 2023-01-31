// import { CacheProvider } from '@emotion/react';
import { ThemeProvider } from '@mui/material'
import Layout from '../src/components/layout/Layout'
import { theme } from '../src/theme'
// import { createEmotionCache } from '../utils/create-emotion-cache';

// const clientSideEmotionCache = createEmotionCache();

const MyApp = ({ Component, 
  // emotionCache = clientSideEmotionCache, 
pageProps }) => (
  <>
<ThemeProvider theme={theme}>
  {/* <CacheProvider value={emotionCache}> */}
  <Layout>
<Component {...pageProps} />
  </Layout>
{/* </CacheProvider> */}
  </ThemeProvider>
  
  </>
  )

export default MyApp
