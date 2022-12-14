import React from 'react'

type Props = {}

function NFTDropPage({}: Props) {
  return (
    <div className="h-screen flex flex-col lg:grid lg:grid-cols-10">
      {/* Left Side */}
      <div className="bg-gradient-to-br from-cyan-500 to-rose-400 lg:col-span-4">
        <div className="flex flex-col items-center justify-center py-2 lg:min-h-screen">
          <div className="bg-gradient-to-br from-yellow-400 to-purple-600 p-3 rounded-xl">
            <img
              src="https://links.papareact.com/8sg"
              alt=""
              className="w-44 rounded-xl object-cover lg:h-96 lg:w-72"
            />
          </div>
          <div className="p-5 text-center space-y-2">
            <h1 className="text-4xl font-bold text-white">PAPAFAM APES</h1>
            <h2 className="text-xl text-gray-300">
              A collection of niggers who live and work as slaves
            </h2>
          </div>
        </div>
      </div>
      {/* Right Side */}
      <div className="flex flex-1 flex-col p-12 lg:col-span-6">
        {/* Header */}
        <header className="flex items-center justify-between">
          <h1 className="w-52 cursor-pointer text-xl font-extralight sm:w-80">
            The{' '}
            <span className="font-extrabold underline decoration-pink-600/50">
              Monkey
            </span>{' '}
            NFT Market Place
          </h1>
          <button className="rounded-full bg-rose-400 text-white px-4 py-2 text-xs font-bold lg:px-5 lg:py-3 lg:text-base">
            Sign In
          </button>
        </header>
        <hr className="my-2 border" />
        {/* Content */}
        <div className="mt-10 flex flex-1 flex-col items-center space-y-6 text-center lg:space-y-0 lg:justify-center">
          <img
            src="https://links.papareact.com/bdy"
            alt=""
            className="w-80 object-cover pb-10 lg:h-40"
          />
          <h1 className="text-3xl font-bold lg:text-5xl lg:font-extrabold">
            THE APE CODING CLUB
          </h1>
          <p className="pt-2 text-xl text-green-500">13 / 21 NFT's claimed</p>
        </div>
        {/* Mint Button */}
        <button className="h-16 mt-10 bg-red-600 w-full text-white rounded-full">
          Mint NFT (0.01 ETH)
        </button>
      </div>
    </div>
  )
}

export default NFTDropPage
