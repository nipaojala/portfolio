import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html>
      <Head />
      <body style={{ minHeight: '100dvh' }} className="bg-blue">
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
