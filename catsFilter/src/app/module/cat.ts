export interface ICat{
  id: String,
  url: String,
  width: String,
  height: String,
  breeds?: [],

}

export interface ICategory{
  id: string,
  name: string
}

export interface IBreed{
  id: string,
  name: string,
  image: ICat,
  temperament: string
}
