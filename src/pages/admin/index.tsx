import React, { useEffect, useState } from 'react'
import { useSession } from 'next-auth/react'
import prisma from '../../../lib/prisma'
import { GetStaticProps } from 'next'
import { Post } from '@prisma/client'
import Router, { useRouter } from 'next/router'
import { renderSkills } from '../skills'
import useWindowSize from '@/components/Navbar/useWindowSize'
import { SingleImageDropzoneUsage } from '@/components/FileUpload'
import { PostData, ProjectInfo } from '@/types'
import { useUserContext } from '@/components/UserContext'

const formFields = [
  { name: 'first', label: 'First' },
  { name: 'second', label: 'Second' },
  { name: 'third', label: 'Third' },
  { name: 'skills', label: 'Skills' },
  { name: 'imageText', label: 'Image Text' },
  { name: 'imageUrl', label: 'Image URL' },
]

const content = (status: 'authenticated' | 'loading' | 'unauthenticated') => {
  if (status === 'loading')
    return (
      <div
        className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
        role="status"
      >
        <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
          Loading...
        </span>
      </div>
    )
  if (status === 'unauthenticated') return <div>{status}</div>
}

const Admin = () => {
  const router = useRouter()
  const {
    user: { first, second, third, skills, images },
  } = useUserContext()
  useEffect(() => {
    setPostData({ first, second, third, skills, images })
  }, [first, second, third, skills])

  const { width } = useWindowSize()
  const { data: session, status } = useSession()
  const [skill, setSkill] = useState('')
  const [dataFromDB, setDataFromDB] = useState<Partial<PostData>>()
  const [projectsInfo, setProjectsInfo] = useState<ProjectInfo[]>([])
  const [postData, setPostData] = useState<Partial<PostData>>({
    first: first,
    second: second,
    third: third,
    skills: skills,
  })

  console.log(dataFromDB)
  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const { name, value } = e.target

    setPostData((prevData) => ({
      ...prevData,
      [name]: value,
    }))
  }
  const handleSkillChange = (e: React.MouseEvent) => {
    e.preventDefault()

    setPostData((prevData) => ({
      ...prevData,
      skills: [...postData.skills, skill],
    }))
  }
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      await fetch('/api/user', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(postData),
      })
      router.push('/admin')
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <div
      style={{ justifyContent: 'flex-start' }}
      className="flex flex-col flex-start justify-center items-center w-screen h-screen"
    >
      {status === 'authenticated' && session.user ? (
        <>
          <form onSubmit={handleSubmit}>
            {formFields.map((field) => (
              <>
                {field.name !== 'skills' ? (
                  <label
                    key={field.name}
                    className="scale block mb-2 mb-[50px] mt-[50px] flex flex-col text-center "
                  >
                    <p key={field.label} className="text-yellow font-bold p-2">
                      {field.label}
                    </p>
                    <textarea
                      key={field.name}
                      name={field.name}
                      value={postData[field.name]}
                      onChange={(e) => {
                        handleChange(e)
                      }}
                      className="p-1 scale rounded-xl text-black h-[250px] w-[300px] font-roboto"
                    />
                    {/* <input
                        key={field.name}
                        className="scale border p-2 text-black"
                        type="text"
                        name={field.name}
                        value={postData[field.name]}
                        onChange={(e) => {
                          handleChange(e)
                        }}
                      /> */}
                  </label>
                ) : (
                  <>
                    <label className="scale block mb-[50px] mt-[50px] flex flex-col text-center ">
                      <input
                        className="scale rounded-xl p-4 text-black"
                        type="text"
                        name="skills"
                        value={skill}
                        onChange={(e) => {
                          e.preventDefault()
                          setSkill(e.target.value)
                        }}
                      />
                    </label>
                    <button
                      className="scale rounded-xl p-4 m-2 text-black bg-red"
                      onClick={handleSkillChange}
                    >
                      submit skill
                    </button>
                  </>
                )}
              </>
            ))}
          </form>

          <br />

          <SingleImageDropzoneUsage />

          <button
            onClick={handleSubmit}
            className="scale rounded-xl p-4 m-2 text-black bg-yellow"
            type="submit"
          >
            Submit
          </button>
          <div className="pb-5 text-center">
            Skills: <br />
            {renderSkills(dataFromDB?.skills, width)}
          </div>
        </>
      ) : (
        <>{content(status)}</>
      )}
    </div>
  )
}

export default Admin
