

// Import Roboto font from next/font/google
import { Roboto } from 'next/font/google'

// Call Roboto at the module scope and assign it to a constant
const roboto = Roboto({
  weight: "100",
  subsets: ['latin'],
  display: 'swap',
})

// Define the Home component
export default function Home() {
  return (
    <main>
      <h1>Font Optimization in Nextjs</h1>
      {/* <h1 style={{fontFamily:'Roboto',fontWeight:100}}>Font with Link Tag in Nextjs</h1> */}
      <h1 className={roboto.className}>Font with Next js font feature</h1>
    </main>
  )
}
