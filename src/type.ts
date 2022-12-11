export interface ArtWork {
  title: string
  category: string
  price: number
  imageUrl: string
  artistShort: Artist
  dimensions: DimensionArtwork
  description: string
  creationYear: number;
  subjects: string[]
  styles: string[]
  mediums: string[]
  materials: string[]
  otherArtworkImages: string[];
}

export interface Artist {
  name: string
  country: string
  countryCode: string
  fullname: string
}
export interface DimensionArtwork {
  depth: number
  height: number
  width: number
}
