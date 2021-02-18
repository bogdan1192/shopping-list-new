export interface ListModel {
    id: number
    name: string
    numberOfProductsAlreadyBought: number
    totalNumberOfProducts: number
    products: ProductModel[]
}

export interface ProductModel{
    id: number
    name: string
    quantity: number
    imageUrl: string
    description: string
    alreadyBought: boolean
}