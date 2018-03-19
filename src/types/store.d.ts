import { BagState, CoinState } from "@/types"

export interface RootState {
    bags: BagState
    coins: CoinState
    ui: any
}
