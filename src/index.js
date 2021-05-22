import React from 'react'
import firebase from 'firebase/app'
import 'firebase/auth'
import { FirebaseAuthProvider } from '@react-firebase/auth'
import ReactDOM from 'react-dom'
import App from './App'
import * as serviceWorker from './serviceWorker'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './store'
import { ApolloProvider } from '@apollo/client/react'
import graphqlClient from './graphql-client'

const firebaseConfig = {
    apiKey: process.env.REACT_APP_APIKEY,
    authDomain: process.env.REACT_APP_AUTHDOMAIN,
    databaseURL: process.env.REACT_APP_DATABASEURL,
    projectId: process.env.REACT_APP_PROJECTID,
    storageBucket: process.env.REACT_APP_STORAGEBUCKET,
    messagingSenderId: process.env.REACT_APP_MESSAGINGSENDERID,
    appId: process.env.REACT_APP_APPID,
    measurementId: process.env.REACT_APP_MEASUREMENTID,
}

const app = (
    <ApolloProvider client={graphqlClient}>
        <FirebaseAuthProvider {...firebaseConfig} firebase={firebase}>
            <Provider store={store}>
                <BrowserRouter>
                    <App />
                </BrowserRouter>
            </Provider>
        </FirebaseAuthProvider>
    </ApolloProvider>
)

ReactDOM.render(app, document.getElementById('root'))
serviceWorker.unregister()
