export interface Printer {
    id?: number
    name?: string
    status?: string
    networkAddress?: string
    description?: string
    paperCount?: number
    type?: string
}

export interface AppState {
    printers: Printer[]
}
