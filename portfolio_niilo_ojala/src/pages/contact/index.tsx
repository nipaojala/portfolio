import React from 'react'
import { AiOutlineGithub, AiOutlineLinkedin } from 'react-icons/ai'

const Button: React.FC<{
  children: React.ReactNode
  url: string
}> = ({ children, url }) => {
  return (
    <button
      onClick={(e) => window.open(url)}
      className="scale transition-transform transform active:scale-95 text-[50px] hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30 transition-transform transform active:scale-95"
    >
      {children}
    </button>
  )
}

export default function Contact() {
  return (
    <div className="flex flex-col justify-center items-center w-screen h-screen">
      <h1 className="scale text-red p-10">Contact me!</h1>
      <div className="flex flex-row">
        <Button url="https://www.linkedin.com/in/niilo-ojala-7ba5a3151/">
          <AiOutlineLinkedin />
        </Button>

        <p className="scale text-[25px] pl-4 pr-4 text-yellow">or</p>
        <p className="scale text-[25px]">nipa.ojala(ät)gmail.com</p>
      </div>
      <div className="flex flex-row p-5">
        <p className="scale text-[25px] pr-4">Check my work here:</p>
        <Button url="https://github.com/nipaojala/">
          <AiOutlineGithub />
        </Button>
      </div>
    </div>
  )
}
