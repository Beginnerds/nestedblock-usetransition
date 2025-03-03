import React, { useTransition } from 'react'
import { Button } from './ui/button'

interface TabButtonProps {
    action:()=>void,
    children:React.ReactNode,
    isActive:boolean
}

const TabButton = ({action,children,isActive}:TabButtonProps) => {

const [isPending,startTransition] = useTransition()

const performAction = () => {
    startTransition(action)
}

  return (
    <Button className={`cursor-pointer ${isPending ? 'animate-pulse duration-300 ' : ''}`} onClick={performAction} size={'lg'} variant={isActive ? 'secondary' : 'default'}>{children}</Button>
  )
}

export default TabButton