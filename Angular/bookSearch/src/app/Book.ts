export interface Book {
  kind:string,
  totalItems:number,
  items:[]
}

interface ImageLink{
  small_thumbnail:string,
  thumbnail:string
}

export interface Book {
  imageLink: ImageLink,
  title:string,
  authors:Array<string>,
  publisher:string,
  published_date:string,
  description:string

}