import * as types from '@/types'

export const objFromArray = (array: any[]): types.ByIds => {
    return array.reduce((accumulator: any, current: { id: number }) => {
        accumulator[current.id] = current
        return accumulator
    }, {})
}
