import Image from 'next/image'
import useWindowSize from '../components/utils/useWindowSize'

export default function Home() {
  const { width } = useWindowSize()
  return (
    <div
      className={`flex flex-${
        width > 700 ? 'row' : 'col'
      } justify-center items-center`}
      style={{ height: '100dvh' }}
    >
      <Image
        style={{ transform: width > 750 ? 'scale(0.9)' : undefined }}
        alt={width > 750 ? 'profilePic' : 'profilePicSmall'}
        width={width > 750 ? 350 : 180}
        height={width > 750 ? 650 : 180}
        src={width > 750 ? '/profilePic.jpg' : '/profilePicSmall.jpg'}
        className={`scale rounded-xl shadow-2xl bg-red shadow-slate-200 m-5 max-w-400 mb-2`}
        placeholder="blur"
        blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP8/wcAAwAB/axPR/0AAAAASUVORK5CYII="
      />
      <div className="m-5 text-center">
        <h1 className={`scale text-red pb-5`}>About me</h1>
        <h2 className={`scale max-w-[400px] text-center`}>
          Hello, I'm a 26-year-old Full-Stack Developer currently employed at
          Osuuspankki, a Finnish bank, where I've gathered a year of
          professional experience in web development.
        </h2>
        <br />
        <h2 className={`scale max-w-[400px] text-center pb-5`}>
          I'm also pursuing a major in Web Technologies at Aalto University with
          an expected graduation in summer 2024. My focus is on contributing to
          impactful web projects and continuously improving my skills in this
          dynamic field.
        </h2>
        <h2 className={`scale max-w-[400px] text-center text-yellow`}>
          In my leisure time, I enjoy skateboarding and playing the piano.
        </h2>
      </div>
    </div>
  )
}
