import useWindowSize from '@/components/Navbar/useWindowSize'
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

export default function Skills() {
  const { width } = useWindowSize()
  function renderSkills(list: string[]) {
    return (
      <ul className="m-5 text-center">
        {list.map((skill) => (
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
  return (
    <div className="flex flex-col justify-center items-center w-screen h-screen">
      <div className="flex flex-col justify-center items-center w-[50vw] text-center">
        <h1 className="scale text-red pb-5">These i have used</h1>
        <div className="flex flex-row pb-10">
          {renderSkills(skills.left)}
          {renderSkills(skills.right)}
        </div>
        <p className={`scale text-[${width > 700 ? '25px' : '20px'}]`}>
          At Osuuspankki i have learned good coding practises and keeping my
          code reusable and clean.
        </p>
        <p
          className={`scale text-yellow text-[${
            width > 700 ? '25px' : '20px'
          }]`}
        >
          ...and most importantly how to solve a problem!
        </p>
      </div>
    </div>
  )
}
