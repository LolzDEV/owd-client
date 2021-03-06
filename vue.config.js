const path = require('path')
const VuetifyLoaderPlugin = require('vuetify-loader/lib/plugin')

module.exports = {
  pwa: {
    name: process.env.VUE_APP_NAME,
    themeColor: process.env.VUE_APP_THEME,
    msTileColor: process.env.VUE_APP_THEME,
    manifestOptions: {
      background_color: process.env.VUE_APP_THEME
    },
    iconPaths: {
      favicon32: 'img/icons/favicon-32x32.png',
      favicon16: 'img/icons/favicon-16x16.png',
      appleTouchIcon: 'img/icons/apple-touch-icon-152x152.png',
      maskIcon: 'img/icons/safari-pinned-tab.svg',
      msTileImage: 'img/icons/msapplication-icon-144x144.png'
    }
  },

  indexPath: 'index.html',
  outputDir: 'dist',

  devServer: {
    disableHostCheck: true,
    host: '0.0.0.0',
    port: 3000
  },

  configureWebpack: {
    plugins: [
      // vuetify dynamic components loader
      // https://vuetifyjs.com/en/customization/a-la-carte/
      new VuetifyLoaderPlugin({
        /**
         * This function will be called for every tag used in each vue component
         * It should return an array, the first element will be inserted into the
         * components array, the second should be a corresponding import
         *
         * originalTag - the tag as it was originally used in the template
         * kebabTag    - the tag normalised to kebab-case
         * camelTag    - the tag normalised to PascalCase
         * path        - a relative path to the current .vue file
         * component   - a parsed representation of the current component
         */
        match (originalTag, { kebabTag, camelTag }) {
          if (kebabTag.startsWith('core-')) {
            return [camelTag, `import ${camelTag} from '@/components/core/${camelTag.substring(4)}.vue'`]
          }
        }
      })
    ],
    resolve: {
      alias: {
        '~': path.resolve(__dirname, 'src')
      }
    }
  }
}
