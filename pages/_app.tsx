import React, { Suspense, useEffect } from 'react'

import type { AppProps } from 'next/app'

import 'bootstrap/dist/css/bootstrap.min.css'

import '../styles/main.scss'
import '../styles/index-four.scss'
import AOS from 'aos'
import 'aos/dist/aos.css'

export default function App ({ Component, pageProps }: AppProps) {
  useEffect(() => {
    AOS.init()
  }, [])

  return (
    <Suspense>
      <Component {...pageProps} />
    </Suspense>
  )
}
