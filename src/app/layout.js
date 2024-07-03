import './globals.css';


// import {Inter} from 'next/font/google';
// const inter = Inter({subsets: ['latin']})
 
export const metadata = {
  title: 'Create Next.js',
  description: 'Generated create by Next.js',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
    {/* <head>
    <link rel="preconnect" href="https://fonts.googleapis.com"/>
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;1,400&display=swap" rel="stylesheet" />
    </head> */}
      <body>{children}</body>
    </html>
  )
}
