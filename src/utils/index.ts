import * as types from '@/types'

export const objFromArray = (array: any[]): types.ByIds => {
    return array.reduce((accumulator: any, current: { id: number }) => {
        accumulator[current.id] = current
        return accumulator
    }, {})
}

export const isNumeric = (value: string, regex: RegExp = /^[0-9]*$/): boolean => {
    const regex2 = /^[0-9\.]*$/
    if (regex.test(value)) return true
    return false
}
