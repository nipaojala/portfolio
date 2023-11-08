import useWindowSize from '@/components/Navbar/useWindowSize'
import { useUserContext } from '@/components/UserContext'
import { sliceStringArray } from '@/components/utils'
import React from 'react'
const skills = {
  left: [
    'React',
    'TypeScript',
    'Node',
    'CSS',
    'HTML5',
    'Deno',
    'Docker',
    'Trpc',
    'Storybook',
  ],
  right: [
    'Azure',
    'Jira',
    'CSS',
    'Python',
    'C',
    'Git',
    'Linux',
    'MongoDB',
    'Sql',
  ],
}

export function renderSkills(list: string[] | undefined, width: number) {
  return (
    <ul className="m-5 text-center">
      {list?.map((skill) => (
        <li
          key={skill}
          className={`scale hover:text-yellow text-[${
            width > 700 ? '25px' : '10px'
          }]`}
        >
          <p>{skill}</p>
        </li>
      ))}
    </ul>
  )
}

export default function Skills() {
  const { width } = useWindowSize()
  const {
    user: { skills },
  } = useUserContext()
  const { left, right } = sliceStringArray(skills)
  return (
    <div className="flex flex-col justify-center items-center w-screen h-screen">
      <div className="flex flex-col justify-center items-center w-[50vw] text-center">
        <h3 className={`scale text-red pb-3`}>These i have used</h3>
        <div className="flex flex-row pb-3">
          {renderSkills(left, width)}
          {renderSkills(right, width)}
        </div>
        <p className={`scale`}>
          At Osuuspankki, I've learned how to write clean and reusable code
        </p>
        <p className={`scale text-yellow pt-3 pb-3`}>
          ...and ofcourse how to solve a problem!
        </p>
        <p className={`scale`}>
          I'm eager to apply these skills professionally.
        </p>
      </div>
    </div>
  )
}
