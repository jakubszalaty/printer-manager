import { Action } from '@ngrx/store'
import { Printer } from '../../types'

export enum PrintersActionTypes {
    ADD = '[Printers] Add',
    CREATE = '[Printers] Create',
    UPDATE = '[Printers] Update',
    DELETE = '[Printers] Delete',
}

export class Add implements Action {
    readonly type = PrintersActionTypes.ADD
    constructor(public payload: Printer[]) {}
}

export class Create implements Action {
    readonly type = PrintersActionTypes.CREATE
    constructor(public payload: Printer) {}
}

export class Update implements Action {
    readonly type = PrintersActionTypes.UPDATE
    constructor(public payload: Printer) {}
}

export class Delete implements Action {
    readonly type = PrintersActionTypes.DELETE
    constructor(public payload: Printer) {}
}

export type PrintersActionsUnion = Add | Create | Update | Delete
