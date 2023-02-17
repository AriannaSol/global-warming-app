import React from 'react'
import { Outlet, useNavigation } from 'react-router-dom'
import { ClipLoader } from 'react-spinners'

function RootLayout() {
  const { state } = useNavigation()
  if (state === 'loading') {
    return (
      <div className="flex justify-center mt-20">
        <ClipLoader size={150} color={'white'} />
      </div>
    )
  }
  return (
    <>
      <Outlet />
    </>
  )
}

export default RootLayout
