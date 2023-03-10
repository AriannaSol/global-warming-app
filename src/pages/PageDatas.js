import { useParams, useLoaderData, Await } from 'react-router-dom'
import { useContext, Suspense } from 'react'
import Chart from '../components/charts/Chart'
import Navbar from '../components/navbar/Navbar'
import { LightModeContext } from '../context/LightModeContext'
import cx from 'classnames'
import ThreeDots from '../components/content-loader/ThreeDots'
import { Helmet } from 'react-helmet'

function PageData() {
  const { pathName } = useParams()

  const { lightMode } = useContext(LightModeContext)
  const [chartData, title, desc] = useLoaderData()

  const containerClass = cx({
    Container: true,
    lightmode: lightMode,
  })

  return (
    <div className={containerClass}>
      <Navbar />
      <div className="flex flex-col items-center justify-center xs:max-h-[55rem]">
        <Helmet className="flex items-center justify-center">
          <title className="text-h1-white py-16 text-center text-3xl font-bold">
            {title}
          </title>
          <meta name="description" content={title} />
        </Helmet>
        <div className="py-0 px-10">{desc}</div>
        <Suspense
          fallback={
            <div className="relative w-full h-screen xs:h-64 flex justify-center">
              <ThreeDots />
            </div>
          }
        >
          <Await resolve={chartData}>
            {(chartData) => {
              const respData =
                chartData.co2 ||
                chartData.nitrous ||
                chartData.methane ||
                chartData.arcticData ||
                chartData.result
              const xAxisData = respData.map((i) => i.year || i.date || i.time)
              const yAxisData = respData.map(
                (i) => i.cycle || i.average || i.extent || i.station
              )
              const chartDatas = xAxisData.map((stringaAnno, indice) => {
                return {
                  name: stringaAnno,
                  value: yAxisData[indice],
                }
              })
              return (
                <div className="relative w-full h-screen">
                  <div className="absolute top-0 left-8 right-8 bottom-8 xs:right-0 xs:left-0">
                    <Chart chartDatas={chartDatas} pathName={pathName} />
                  </div>
                </div>
              )
            }}
          </Await>
        </Suspense>
      </div>
    </div>
  )
}

export default PageData
