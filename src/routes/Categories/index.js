import { injectReducer } from '../../store/reducers'

export default (store) => ({
  getComponent (nextState, cb) {
    require.ensure([], (require) => {
      const Categories = require('./containers/CategoriesContainer').default
      const reducer = require('./modules/categories').default

      injectReducer(store, { key: 'categories', reducer })

      cb(null, Categories)

    }, 'categories')
  }
})
