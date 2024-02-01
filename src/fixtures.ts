import { PostData } from './types'

export const skills = [
  'React',
  'TypeScript',
  'Node',
  'CSS',
  'HTML5',
  'Deno',
  'Docker',
  'Trpc',
  'Storybook',
  'Azure',
  'Jira',
  'Python',
  'C',
  'Git',
  'Linux',
  'MongoDB',
  'Sql',
]

export const fullData: PostData = {
  first:
    "Hello, I'm a 26-year-old Full-Stack Developer currently employed at Osuuspankki, a Finnish bank, where I've gathered six months of professional experience in web development.",
  second:
    "I'm also pursuing a major in Web Technologies at Aalto University with an expected graduation in summer 2024. My focus is on contributing to impactful web projects and continuously improving my skills in this dynamic field.",
  third: 'In my leisure time, I enjoy skateboarding and playing the piano.',
  skills: skills,
  images: [
    {
      imageUrl:
        'https://files.edgestore.dev/bme1h8ehmok5a8nu/publicFiles/_public/93cd1d32-3734-4e1f-b5ba-0c0170418ee9.png',
      imageText:
        'Next Js app with T3-stack. App for student appros. Have done 90% of frontend so far.',
      projectLink: 'https://appro-app-production.up.railway.app/',
    },
    {
      imageUrl:
        'https://files.edgestore.dev/bme1h8ehmok5a8nu/publicFiles/_public/1ad837f7-628b-495a-a64d-3da2f28103b6.png',
      imageText:
        'Another Next Js app with T3-stack. This app is made for Aalto-university association(Currently down due to free database :D).',
      projectLink: 'https://www.kylankeittio.fi/',
    },
    {
      imageUrl:
        'https://files.edgestore.dev/bme1h8ehmok5a8nu/publicFiles/_public/8e7bf2a7-568f-41b3-970a-436bf6a00627.png',
      imageText: 'My first web app! For our own band',
      projectLink: 'https://vvtvofficial.fly.dev/',
    },
  ],
}
