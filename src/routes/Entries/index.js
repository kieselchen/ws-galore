import { injectReducer } from '../../store/reducers'

export default (store) => ({
  path: 'cat/:category/sub/:subcategory',

  getComponent (nextState, cb) {

    require.ensure([], (require) => {
      const Entries = require('./containers/EntriesContainer').default
      const reducer = require('./modules/entries').default

      injectReducer(store, { key: 'entries', reducer })

      cb(null, Entries)

    }, 'entries')
  }
})
