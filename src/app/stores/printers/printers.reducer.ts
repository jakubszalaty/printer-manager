// counter.ts
import { Action, State } from '@ngrx/store'
import { Printer } from '../../types'

import { PrintersActionTypes, PrintersActionsUnion } from './printers.actions'

export function printersReducer(state: Printer[] = [], action: PrintersActionsUnion) {
    switch (action.type) {
        case PrintersActionTypes.ADD:
            return action.payload

        case PrintersActionTypes.CREATE:
            return [...state, action.payload]

        case PrintersActionTypes.UPDATE:
            return state.map((item) => {
                return item.id === action.payload.id ? Object.assign({}, item, action.payload) : item
            })

        case PrintersActionTypes.DELETE:
            return state.filter((item) => {
                return item.id !== action.payload.id
            })

        default:
            return state
    }
}
