export interface books_interface{
    kind:string,
    totalItems:number,
    items:[]
}

interface ImageLink{
    small_thumbnail:string,
    thumbnail:string
}

export interface book_interface{
    imageLink: ImageLink,
    title:string,
    authors:Array<string>,
    publisher:string,
    published_date:string,
    description:string

}