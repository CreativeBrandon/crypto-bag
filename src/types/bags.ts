import { Entities } from '@/types'

export interface Bag {
    id: number
    name: string
    coins: number[]
}

export interface BagState {
    entities: Entities
    errors: {}
}
