import custom from './custom.module.css'
import other from './other.module.css'
import outside from '@/style/outside.module.css'

export default function Home() {
    return (
      <main>
        <h1 className={custom.main}>CSS Modules with Next js</h1>
        <h2 className={other.main}>CSS Modules with Next js</h2>
        <h3 className={outside.main}>CSS Modules with Next js</h3>
        
      </main>
    )
  }