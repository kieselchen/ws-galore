import Immutable from 'immutable'

export const actions = {}

const ACTION_HANDLERS = {}

const { Map, List, fromJS } = Immutable

const initialState = Map(
	{categories:
		[
			{ "cid": 1,    "category": "nexusproject",  		"label": "The Nexus Project"},
			{ "cid": 2,   "category": "tfbtf",      		"label": "Tales from beyond the Fringe"},
			//{ "cid": 1,    "category": "dominions",  		"label": "Dominions"},
			//{ "cid": 2,    "category": "exiles",     		"label": "Exiles"},
			//{ "cid": 3,    "category": "eldan",  			"label": "Eldan"},
			//{ "cid": 4,    "category": "organizations",  	"label": "Organizations"},
			//{ "cid": 5,    "category": "wildlife",  		"label": "Wildlife"},
			//{ "cid": 6,    "category": "universe",  		"label": "Universe"},
			//{ "cid": 7,    "category": "classes",  			"label": "Classes"},
			//{ "cid": 8,    "category": "datacubes",  		"label": "Datacubes"},
			//{ "cid": 9,    "category": "journals",  		"label": "Journals"},
			//{ "cid": 10,   "category": "tfbtf",      		"label": "Tales from beyond the Fringe"},
			//{ "cid": 11,   "category": "species",      		"label": "Sentient Species"},
			//{ "cid": 12,   "category": "locations",			"label": "Locations"},
			//{ "cid": 13,   "category": "creatures",			"label": "Creatures"},
      //{ "cid": 14,   "category": "nexusproject",	"label": "The Nexus Project"}
		]
	}
)
export default function categoriesReducer (state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]

  return handler ? handler(state, action) : state
}
