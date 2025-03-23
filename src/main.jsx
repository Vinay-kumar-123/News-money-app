import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Auth0Provider } from '@auth0/auth0-react';
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <Auth0Provider
    domain="dev-h5qsobp66ms3mypv.us.auth0.com"
    clientId="16UjA6FoobYIRgNOxqpHMEsAJGbNuYtn"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  >
  <StrictMode>
   <App />
  </StrictMode>
    
  </Auth0Provider>,
)
