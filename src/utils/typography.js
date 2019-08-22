import Typography from "typography"
import theme from "typography-theme-fairy-gates"
import CodePlugin from 'typography-plugin-code'

theme.baseFontSize = '16px'
theme.baseLineHeight = 1.2
theme.scaleRatio = 1.6
theme.googleFonts = [
    {
        name: 'Lato',
        styles: ['300']
    },
    {
      name: 'Lora',
      styles: ['400', '400i', '700', '700i'],
    }
]
theme.headerFontFamily = ['Lato', 'sans-serif']
theme.bodyFontFamily = ['Lora', 'serif']
theme.headerWeight = '300'
theme.headerColor = 'slate'
theme.plugins = [new CodePlugin()]

const typography = new Typography(theme)

export default typography
export const rhythm = typography.rhythm