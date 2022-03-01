import Link from 'next/link'
import React from 'react'
import LinkContent from '../../../components/LinkContent'
import style from './index.module.scss'
import classNames from 'classnames'

export interface IAboutCardProps {
  title: string
  links: Array<{
    name: string,
    to: string
  }>
  className?: string
  noWrap?: boolean
}

const AboutCard = ({
  title,
  links,
  className,
  noWrap = false
}: IAboutCardProps) => {
  return (
    <div className={style.AboutCard + ` ${className}`}>
      <span className={style.title}>{title}</span>
      <div className={classNames({
        [style.content]: true,
        [style.noWrap]: noWrap
      })}>
        {
          links.map((link, index) => (
            <LinkContent key={index} href={link.to}>{link.name}</LinkContent>
          ))
        }
      </div>
    </div>
  )
}

export default AboutCard
