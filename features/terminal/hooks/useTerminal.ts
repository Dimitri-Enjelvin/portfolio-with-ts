import { useContext } from 'react'
import { TerminalContext } from '@contexts/TerminalContext'

export default function useTerminal() {

    return useContext(TerminalContext)

}