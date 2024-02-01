export interface PostData {
  first: string
  second: string
  third: string
  skills: string[]
  images: ProjectInfo[]
  [key: string]: string | string[] | ProjectInfo[] | undefined // Index signature
}

export interface ProjectInfo {
  imageUrl: string
  imageText: string
  projectLink: string
}
