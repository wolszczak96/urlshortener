import Head from 'next/head'
import { AppProps } from 'next/app'
import {
  AppBar,
  CssBaseline,
  StylesProvider,
  Toolbar,
  Typography,
} from '@material-ui/core'

const App = ({ Component, pageProps }: AppProps) => (
  <>
    <Head>
      <title>Url shortener</title>
    </Head>
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6">Url shortener</Typography>
      </Toolbar>
    </AppBar>
    <StylesProvider injectFirst>
      <CssBaseline />
      <Component {...pageProps} />
    </StylesProvider>
  </>
)

export default App
