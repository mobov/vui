import Vue from 'vue'
import I18n from 'vue-i18n'
// import { Client, getUrlParam, langAdapt } from '@mobov/es-helper'
import defaultLangPkg from '@/i18n/languages/zh-CN.json'
import { langType, langAdapt } from '@mobov/es-helper/types/langUtils'
import getUrlParam from '@mobov/es-helper/getUrlParam'
Vue.use(I18n)

const locale = langAdapt(getUrlParam('locale') || navigator.language)
Client.init(locale)

const loadedLanguages: Array<langType>= ['zh-CN']

function setI18nLanguage (lang: langType) {
  i18n.locale = lang
  return lang
}

export function loadLanguage (lang: langType): Promise<langType> {
  if (i18n.locale !== lang) {
    if (!loadedLanguages.includes(lang)) {
      return import(/* webpackChunkName: "lang-[request]" */ `@/i18n/languages/${lang}.json`).then(msgs => {
        i18n.setLocaleMessage(lang, msgs.default)
        loadedLanguages.push(lang)
        return setI18nLanguage(lang)
      })
    }
    return Promise.resolve(setI18nLanguage(lang))
  }
  return Promise.resolve(lang)
}

const i18n = new I18n({
  locale,
  fallbackLocale:  'zh-CN',
  messages: {
    'zh-CN': defaultLangPkg
  }
})

export default i18n

