import { injectReducer } from '../../store/reducers'

export default (store) => ({
  path: 'cat/:category',

  getComponent (nextState, cb) {
    require.ensure([], (require) => {
      const Subcategories = require('./containers/SubcategoriesContainer').default
      const reducer = require('./modules/subcategories').default

      injectReducer(store, { key: 'subcategories', reducer })

      cb(null, Subcategories)

    }, 'subcategories')
  }
})
