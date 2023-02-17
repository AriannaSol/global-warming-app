import { useContext } from 'react'
import Card from '../components/homeCards/Card'
import Navbar from '../components/navbar/Navbar'
import { LightModeContext } from '../context/LightModeContext'
import cx from 'classnames'
function Home() {
  const { lightMode } = useContext(LightModeContext)

  const containerClass = cx({
    Container: true,
    lightmode: lightMode,
  })

  return (
    <main className={containerClass}>
      <div className="h-screen overflow-auto">
        <Navbar />
        <section className="py-8 px-0">
          <Card />
        </section>
      </div>
    </main>
  )
}
export default Home
