import React from 'react'
import { useRouter } from 'next/router'

const LanguageSelect = () => {
  const router = useRouter()
  return (
    <select onChange={e => router.push(`${router.asPath}`, `${router.asPath}`, { locale: e.target.value })} value={router.locale}>
      <option value='en-US'>English</option>
      <option value='zh-cn'>簡中</option>
    </select> 
  )
}

export default LanguageSelect
