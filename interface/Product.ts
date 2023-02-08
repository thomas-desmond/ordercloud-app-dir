export interface PriceBreaks {
    Price: number
}

export interface PriceSchedule {
    PriceBreaks: PriceBreaks
}

export interface ImageArray {
    url: string
}

export interface XP {
    Images: ImageArray[]
    PriceCurrency: string
}

export interface Product {
    ID: string
    Name: string
    Description: string
    PriceSchedule: PriceSchedule
    xp: XP
}

export interface ProductList {
        Items: Product[]
}