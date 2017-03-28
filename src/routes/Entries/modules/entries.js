
import Immutable from 'immutable'
const { Map, List, fromJS, OrderedMap } = Immutable
export const actions = {
  requestEntries,
  receivedEntries,
  getEntries
}

const ACTION_HANDLERS = {}

export function requestEntries() {
    return {
        type: requestEntries
    }
}

export function receivedEntries(entries) {
    return {
        type: receivedEntries,
        entries: entries
    }
}

export function getEntries(category,subcategory) {
    return function (dispatch) {
        dispatch(requestEntries())

        var superagent = require('superagent')
        var entries = Map();
        var path = location.protocol+'//'+location.hostname+( location.pathname.startsWith("/ws-galore") ? "/ws-galore" : (location.hostname != 'localhost' || location.hostname == 'galore.wildstar.de' ? '' : '/galore-db'))+'/'+category+'/'+subcategory+'.json';

        superagent.get(path)
        .send()
        .end(function(error, response) {
            entries = JSON.parse(response.text)
            dispatch(receivedEntries(entries))
        });

    }
}

const initialState = Map({})

export default function entriesReducer (state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type.name]

  if (action.entries) {
    return action.entries
  }

  return handler ? handler(state, action) : state
}
