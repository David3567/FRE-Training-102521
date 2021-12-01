import { Imagelinks } from "./imagelinks";

export interface VolumeInfo {
    title: string
    authors: string[]
    publisher: string
    publishedDate: string
    description: string
    pageCount: number
    printType: string
    categories: string[]
    maturityRating: string
    allowAnonLogging: boolean
    contentVersion: string
    imageLinks: Imagelinks
    language: string
    previewLink: string
    infoLink: string
    canonicalVolumeLink: string
}
