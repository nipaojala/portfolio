import useWindowSize from '@/components/Navbar/useWindowSize'
import { useUserContext } from '@/components/UserContext'
import Image from 'next/image'

export default function Home() {
  const { width } = useWindowSize()
  const {
    user: { first, second, third },
  } = useUserContext()
  return (
    <div
      className={`flex flex-${
        width > 700 ? 'row' : 'col'
      } justify-center items-center h-screen`}
    >
      <Image
        style={{ transform: width > 750 ? 'scale(0.9)' : undefined }}
        alt={width > 750 ? 'profilePic' : 'profilePicSmall'}
        width={width > 750 ? 350 : 180}
        height={width > 750 ? 650 : 180}
        src={width > 750 ? '/profilePic.jpg' : '/profilePicSmall.jpg'}
        className="scale rounded-xl shadow-2xl bg-red shadow-slate-200 m-5 max-w-400 mb-2"
      />
      <div className="m-5 text-center">
        <h1 className="scale text-red pb-5">About me</h1>
        <h2 className="scale max-w-[400px] text-center">{first}</h2>
        <br />
        <h2 className="scale max-w-[400px] text-center pb-5">{second}</h2>
        <h2 className="scale max-w-[400px] text-center text-yellow">{third}</h2>
      </div>
    </div>
  )
}
