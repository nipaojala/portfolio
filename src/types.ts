export interface PostData {
  first: string
  second: string
  third: string
  skills: string[]
  imageText: string[]
  imageUrl: string[]
  [key: string]: string | string[] | undefined // Index signature
}
