'use client'

import { useState } from 'react'
import { useEdgeStore } from '../../lib/edgestore'
import { SingleImageDropzone } from './SingleImageDropzone'
import Image from 'next/image'
import useWindowSize from './Navbar/useWindowSize'

export function SingleImageDropzoneUsage() {
  const { width } = useWindowSize()
  const [file, setFile] = useState<File>()
  const { edgestore } = useEdgeStore()
  const [moi, setMoi] = useState('')
  return (
    <div>
      <SingleImageDropzone
        width={200}
        height={200}
        value={file}
        onChange={(file) => {
          setFile(file)
        }}
      />
      <button
        onClick={async () => {
          if (file) {
            const res = await edgestore.publicFiles.upload({
              file,
              onProgressChange: (progress) => {
                // you can use this to show a progress bar
                console.log(progress)
              },
            })
            // you can run some server action or api here
            // to add the necessary data to your database
            setMoi(res.url)
            console.log(res)
          }
        }}
      >
        Upload
      </button>
      <Image
        style={{ transform: width > 750 ? 'scale(0.9)' : undefined }}
        alt={width > 750 ? 'profilePic' : 'profilePicSmall'}
        width={width > 750 ? 350 : 180}
        height={width > 750 ? 650 : 180}
        src={moi}
        className="scale rounded-xl shadow-2xl bg-red shadow-slate-200 m-5 max-w-400 mb-2"
      />
      {moi}
    </div>
  )
}
