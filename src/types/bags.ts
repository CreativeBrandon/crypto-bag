import { BaseTransaction, BaseEntities } from '@/types'

export interface Bag {
    id: number
    name: string
    coins: BaseTransaction[]
}

export interface BagEntities extends BaseEntities {
    byIds: {
        [index: string]: Bag
    }
}

export interface BagState {
    entities: BagEntities
    errors: {}
    isEditing: boolean
}
