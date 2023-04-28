import type { AppProps } from 'next/app'
import { globalStyles } from '@/styles/globa'
import Link from 'next/link'

import logoImg from '../assets/Logo.svg'
import { Container, Header } from '@/styles/pages/app'

import Image from 'next/image'

globalStyles()

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Container>
      <Header>
        <Link href={'/'}>
          <Image src={logoImg} alt="" />
        </Link>
      </Header>

      <Component {...pageProps} />
    </Container>
  )
}
export default MyApp
