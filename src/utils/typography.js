import Typography from 'typography'
import theme from 'typography-theme-fairy-gates'

theme.googleFonts = [
  {
    name: 'Open Sans',
    styles: [
      '300',
    ],
  },
  {
    name: 'Sorts Mill Goudy',
    styles: [
      '400'
    ],
  },
]

theme.baseFontSize = '18px'
theme.scaleRatio = 2
theme.headerFontFamily = ['Open Sans', 'sans-serif']
theme.bodyFontFamily = ['Sorts Mill Goudy', 'serif']

const typography = new Typography(theme)

// Hot reload typography in development.
if (process.env.NODE_ENV !== `production`) {
  typography.injectStyles()
}

export default typography
export const rhythm = typography.rhythm
export const scale = typography.scale