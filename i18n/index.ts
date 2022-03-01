import { useRouter } from 'next/router'
import { i18n } from '../next.config'

export enum LocaleEnum {
  zhcn = 'zh-cn',
  enus = 'en-US',
}

export type I18nJSON<T> = {
  [k in LocaleEnum]: T
}

const useI18n = <T>(i18nJSON: I18nJSON<T>) => {
  const validLocales = i18n?.locales
  const { locale } = useRouter()
  const fixedLocal = validLocales?.find(e => e === locale) || i18n?.defaultLocale as string
  const targetJSON = i18nJSON[fixedLocal as LocaleEnum]
  return targetJSON
}

export default useI18n
