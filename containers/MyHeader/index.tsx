import React from 'react'
import useI18n from '../../i18n'
import style from './index.module.scss'
import { Button } from '@mui/material'

const LangMap = {
  'en-US': {
    title: 'MOTC2.0 - 移動空品物聯網',
    signBtn: '登入'
  },
  'zh-cn': {
    title: 'MOTC2.0 - 移動空品物聯網',
    signBtn: '登入'
  }
}

const Header = () => {
  const lang = useI18n(LangMap)
  const redirectToSystem = () => {
    location.href = "http://140.122.82.98:84"
  }
  return (
    <div className={style.headerRoot}>
      <p className={style.logo}>{lang.title}</p>
      <Button
        variant="outlined"
        className={style.signBtn}
        onClick={redirectToSystem}
      >{lang.signBtn}</Button>
    </div>
  )
}

export default Header
