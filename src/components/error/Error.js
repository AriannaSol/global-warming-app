import React from 'react'
import { Link } from 'react-router-dom'

const Error = () => {
  return (
    <section>
      <div className="flex justify-center">
        <p className="text-3xl p-16 font-semibold text-gray-300">
          Ooops! It's a dead end
        </p>
      </div>
      <div className="flex justify-center">
        <button className="mt-5 font-bold bg-zinc-100 text-xl p-3 rounded cursor-pointer border-stone-400 hover:bg-gray-400 transition duration-1000">
          <Link to="/" className="no-underline text-gray-900 hover:underline">
            Back home
          </Link>
        </button>
      </div>
    </section>
  )
}

export default Error
