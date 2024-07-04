import { defaultTheme } from '@vuepress/theme-default'
import { defineUserConfig } from 'vuepress/cli'
import { webpackBundler } from '@vuepress/bundler-webpack'
import { zhNavbar, enNavbar } from './navbar/switch.js' // 移除多余的逗号
import {zhSidebar,enSidebar,} from './sidebar/switch.js'
// favicon.ico
export default defineUserConfig({
  head: [['link', { rel: 'icon', href: 'favicon.ico' }]],
  lang: 'zh-CN',
  base: '/min/',
  title: 'TuTOU123com',
  description: 'My  blog',

  locales: {
    '/': {
      selectLanguageName: '简体中文',
      description: '繁星似海 熠熠生辉',
    },
    '/en/': {
      selectLanguageName: 'English',
      title: 'Comet documents',
      description: 'my book',
    },
  },
  // 配置主题
  // themeConfig: {
  //   logo: 'https://vuejs.press/images/hero.png',
  //   repo: 'leaderrSong/me',
  //   locales: {
  //     '/': {
  //       selectLanguageName: '简体中文',
  //       selectLanguageText: '选择语言',
  //       navbar: zhNavbar,
  //       sidebar:zhSidebar,
  //       notFound:['没找到','网页走丢了'],
  //       backToHome:'返回首页'
  //     },
  //     '/en/': { // 注意这里的代码块结束应该对应
  // }

  theme: defaultTheme({
    logo: 'https://vuejs.press/images/hero.png',
    repo: 'leaderrSong/min',
    locales: {
      '/': {
        selectLanguageName: '简体中文',
        selectLanguageText: '选择语言',
        navbar: zhNavbar,
        sidebar:zhSidebar,
        notFound:['没找到','网页走丢了'],
        backToHome:'返回首页'
      },
      '/en/': { // 注意这里的代码块结束应该对应 '{' 开始，确保左右括号对齐
        selectLanguageName: 'English',
        selectLanguageText: 'Select Language',
        navbar: enNavbar,
        sidebar:zhSidebar,
        notFound:['没找到','网页走丢了'],
        backToHome:'返回首页'

      },
    },
  }),




  // 如果 webpackBundler 需要在配置中使用，请在此处添加相应的配置
  bundler: webpackBundler({})
})