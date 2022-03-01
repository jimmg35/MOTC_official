import React from 'react'
import { Button } from '../../../core-ui/components/Button'
import Link from 'next/link'

export interface ILinkButtonProps {
  href: string,
  children: React.ReactNode
}

const LinkButton = ({
  href,
  children
}: ILinkButtonProps) => {
  return (
    <Button varient='flat' bbEfect><Link href={href}>{children}</Link></Button>
  )
}

export default LinkButton
