import { types } from 'react-bricks/rsc'

import HeroUnit from './custom/MyHeroUnit'
import Pokemon from './custom/Pokemon'
// import RegisterBrick from './custom/RegisterBrick/RegisterBrick'
import reactBricksUITheme from './react-bricks-ui'
import Thumbnail from './custom/Thumbnail'
import FileCatalogDownload from './custom/FileCatalogDownload'
import Gallery from './custom/Gallery'

const bricks: types.Theme[] = [
  reactBricksUITheme, // React Bricks UI
  {
    themeName: 'Default',
    categories: [
      {
        categoryName: 'Custom bricks',
        bricks: [HeroUnit, Pokemon, Gallery, Thumbnail, FileCatalogDownload], // Custom Bricks
      },
    ],
  },
]

// const bricks = [HeroUnit]

export default bricks
