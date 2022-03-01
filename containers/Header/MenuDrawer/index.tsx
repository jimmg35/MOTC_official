import classNames from 'classnames'
import React from 'react'
import useI18n from '../../../i18n'
import Divider from '../../../components/Divider'
import style from './index.module.scss'

export interface IMenuDrawerProps {
  hide: boolean
  onClose: () => void
  children: React.ReactNode
}

const LangMap = {
  'en-US': {
    title: 'menu'
  },
  'zh-cn': {
    title: '菜單'
  }
}

const MenuDrawer = ({
  hide,
  onClose,
  children
}: IMenuDrawerProps) => {
  const lang = useI18n(LangMap)
  return (
    <div className={classNames({
      [style.MenuDrawer]: true,
      [style.hide]: hide
    })}>
      <div className={style.blocker}></div>
      <div className={style.header}>
        <div>{lang.title}</div>
        <span onClick={() => onClose()}>✕</span>
      </div>
      <Divider/>
      {children}
    </div>
  )
}

export default MenuDrawer
