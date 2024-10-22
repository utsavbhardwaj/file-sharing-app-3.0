'use client'

import React, { useState } from 'react'
import Image from 'next/image'

const TwitterIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="#1DA1F2"
  >
    <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
  </svg>
)

export default function DeveloperSection() {
  const [copied, setCopied] = useState(false)
  const repoUrl = 'https://github.com/utsavbhardwaj/File-sharing-app'

  const copyToClipboard = () => {
    navigator.clipboard.writeText(repoUrl).then(() => {
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    })
  }

  return (
    <div className="bg-gradient-to-br from-gray-900 to-black text-white min-h-screen flex flex-col items-center justify-center px-4 py-8 sm:p-8">
      <h2 className="text-3xl sm:text-4xl font-bold mb-8 sm:mb-12 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600 text-center">
        A Word from the Developer
      </h2>
      <div className="w-full max-w-4xl">
        <div className="bg-white rounded-xl overflow-hidden shadow-2xl">
          <div className="p-4 sm:p-6 flex flex-col sm:flex-row">
            <div className="mb-4 sm:mb-0 sm:mr-4 flex-shrink-0 flex justify-center">
              <Image
                src="/utsav pfp.jpeg"
                alt="Utsav Bhardwaj"
                width={80}
                height={80}
                className="w-20 h-20 rounded-full object-cover border-2 border-gray-300"
              />
            </div>
            <div className="flex-grow">
              <div className="flex items-center mb-2 justify-center sm:justify-start">
                <span className="font-bold text-gray-900 mr-2">Utsav Bhardwaj</span>
                <span className="text-gray-500">@i_utsav</span>
                <TwitterIcon />
              </div>
              <p className="text-gray-800 text-base sm:text-lg mb-4">
                This application was crafted during my summer training of the second year of BTech. The journey of creating this file-sharing application has been both challenging and rewarding, pushing me to apply theoretical knowledge to practical scenarios. I also encourage fellow developers to contribute to this project to bring more features and possibilities, helping it grow and improve even further.
              </p>
              <div className="text-gray-500 text-sm">4:20 PM · Sep 26, 2024</div>
            </div>
          </div>
        </div>
        <div className="bg-gray-800 p-4 sm:p-6 rounded-lg mt-6 shadow-lg">
          <h3 className="text-xl font-semibold mb-4 text-blue-400">GitHub Repository</h3>
          <div className="bg-black rounded-lg p-3 sm:p-4 font-mono text-sm flex flex-col sm:flex-row justify-between items-center overflow-x-auto">
            <span className="text-green-400 mb-2 sm:mb-0 text-center sm:text-left w-full sm:w-auto">
              $ git clone {repoUrl}
            </span>
            <button
              onClick={copyToClipboard}
              className="w-full sm:w-auto mt-2 sm:mt-0 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded transition-colors duration-300"
            >
              {copied ? 'Copied!' : 'Copy'}
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}