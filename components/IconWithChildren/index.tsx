import React, { useState } from 'react'
import Image from 'next/image'
import style from './IconWithChildren.module.scss'
import classNames from 'classnames'

enum Size {
  'xsm', 'sm', 'md', 'lg', 'xlg', 'xxlg'
}

export interface IIconWithChildrenrops {
  imgSrc: string
  imgSrcOnHover?: string
  direction?: 'row' | 'col'
  size?: keyof typeof Size
  bgHoverInverse?: boolean
  active?: boolean
  children?: React.ReactNode
  onClick?: () => void
}

const IconWithChildren = ({
  imgSrc,
  imgSrcOnHover,
  direction = 'row',
  size = 'md',
  bgHoverInverse = false,
  active = false,
  children,
  onClick
}: IIconWithChildrenrops) => {
  const [mouseover, setmouseover] = useState(false)
  const getPixelFromSize = (size: IIconWithChildrenrops['size'] = 'md') => {
    const map: { [k in keyof typeof Size]: number} = {
      'xsm': 15, 'sm': 20, 'md': 30, 'lg': 40, 'xlg': 50, 'xxlg': 60
    }
    return map[size]
  }
  const getImgSrc = (ishover: boolean) => {
    return ishover || active ? imgSrcOnHover || imgSrc : imgSrc
  }
  return (
    <div className={classNames({
      [style.IconWithChildren]: true,
      [style[direction]]: direction,
      [style.bgHoverInverse]: bgHoverInverse,
      [style.active]: active,
      [style.grow]: mouseover
    })} onClick={() => onClick ? onClick() : ''} onMouseEnter={() => setmouseover(true)} onMouseLeave={() => setmouseover(false)}>
      <Image src={getImgSrc(mouseover)} height={getPixelFromSize(size)} width={getPixelFromSize(size)}/>
      <div className={classNames({
        [style.content]: true,
        [style[size]]: size
      })}>{children}</div>
    </div>
  )
}

export default IconWithChildren
