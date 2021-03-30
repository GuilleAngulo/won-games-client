import { create } from '@storybook/theming'
import theme from '../src/styles/theme'
import logo from '../public/img/logo-won-games.svg'

export default create({
  base: 'light',
  colorPrimary: theme.colors.primary,
  colorSecondary: theme.colors.secondary,

  brandTitle: 'Won Games',
  brandUrl: 'https://won-games.com.br',
  brandImage: logo
})
