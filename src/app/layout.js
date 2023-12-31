"use client"
import { Montserrat } from 'next/font/google';
import './globals.css';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import { Provider } from 'react-redux';
import store  from '../../redux/store';
import { PersistGate } from 'redux-persist/integration/react';
import { persistStore } from 'redux-persist'

const montserrat = Montserrat({ subsets: ['latin'] })

const persistor = persistStore(store);

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={montserrat.className}>
        <Provider store={store}>
          <PersistGate persistor={persistor}>
            <Navbar />
            {children}
            <Footer />
          </PersistGate>
        </Provider>
      </body>
    </html>
  )
}
