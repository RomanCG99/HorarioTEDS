import '../styles/globals.css'
import client from '../config/apollo';
import { ApolloProvider } from '@apollo/client';

const MyApp = ({ Component, pageProps }) => {
  console.log('Desde _app.js')
  return (
    <ApolloProvider client={client}>
      <Component {...pageProps} />
    </ApolloProvider>
  )
}
export default MyApp;