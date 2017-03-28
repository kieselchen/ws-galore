import CoreLayout from '../layouts/CoreLayout/CoreLayout'
import CategoriesRoute from './Categories'
import SubcategoriesRoute from './Subcategories'
import EntriesRoute from './Entries'

export const createRoutes = (store) => ({
  path: '/',
  component: CoreLayout,
  indexRoute: CategoriesRoute(store),
  childRoutes: [
    SubcategoriesRoute(store),
    EntriesRoute(store)
  ]
})

export default createRoutes
