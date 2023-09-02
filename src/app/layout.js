"use client"
import './globals.css';
import { Inter } from 'next/font/google';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import { Provider } from 'react-redux';
import {store} from '../../redux/store';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Nike',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <Provider store={store}>
      <html lang="en">
        <body className={inter.className}>
            <Navbar />
              {children}
            <Footer />
        </body>
      </html>
    </Provider>
  )
}
