import React from 'react'
import Link from 'next/link'
import style from './index.module.scss'

export interface ILinkContentProps {
  children: React.ReactNode,
  href: string
}

const LinkContent = ({
  children,
  href
}: ILinkContentProps) => {
  return (
    <span className={style.LinkContent}>
      <Link href={href}>{children}</Link>
    </span>
  )
}

export default LinkContent
