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
        <h3 className={`scale text-red pb-3`}>These i have used</h3>
        <div className="flex flex-row pb-3">
          {renderSkills(skills.left)}
          {renderSkills(skills.right)}
        </div>
        <p className={`scale`}>
          At Osuuspankki, I have learned how write clean and reusable code
        </p>
        <p className={`scale text-yellow pt-3 pb-3`}>
          ...and ofcourse how to solve a problem!
        </p>
        <p className={`scale`}>Eager to apply these skills professionally.</p>
      </div>
    </div>
  )
}
