export interface Printer {
    id?: number
    name?: string
    status?: string[]
    networkAddress?: string
    description?: string
    paperCount?: number
    type?: 'ink-jet' | 'laser'
}
