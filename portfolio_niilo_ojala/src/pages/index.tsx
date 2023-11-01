import useWindowSize from '@/components/Navbar/useWindowSize'
import Head from 'next/head'
import Image from 'next/image'

export default function Home() {
  const { width } = useWindowSize()
  return (
    <div
      className={`flex flex-${
        width > 700 ? 'row' : 'col'
      } justify-center items-center h-screen`}
    >
      <Image
        alt={width > 750 ? 'profilePic' : 'profilePicSmall'}
        width={width > 750 ? 400 : 200}
        height={width > 750 ? 800 : 200}
        src={width > 750 ? '/profilePic.jpg' : '/profilePicSmall.jpg'}
        className="scale rounded-xl shadow-2xl bg-red shadow-slate-200 m-5 max-w-400"
      />
      <div className="m-5 text-center">
        <h1 className="scale text-red pb-5">About me</h1>
        <p className="scale max-w-[400px] text-center">
          I'm 27 years old Full-Stack developer from Otaniemi. I have a half
          year of expertise from professional web development at Finnish bank
          Osuuspankki and still currently working there. I'm really passionate
          about web development!
        </p>
        <br />
        <p className="scale max-w-[400px] text-center pb-5">
          I'm studying in Aalto-university majoring Web Technologies. I'm
          planning to graduate end of summer 2024.
        </p>
        <p className="scale max-w-[400px] text-center text-yellow">
          In free time i like to skateboard and play piano.
        </p>
      </div>
    </div>
  )
}
