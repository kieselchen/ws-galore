import Immutable from 'immutable'

export const actions = {}

const ACTION_HANDLERS = {}
const { Map, List, fromJS } = Immutable
const initialState = Map(
	{subcategories:
		[
			{ "sid": 1,  "category": "nexusproject", "subcategory": "phasezero", "label": "Phase Zero"},
      { "sid": 2,  "category": "nexusproject", "subcategory": "phaseone", "label": "Phase One"},
      { "sid": 3,  "category": "nexusproject", "subcategory": "phasetwo", "label": "Phase Two"},
      { "sid": 4,  "category": "nexusproject", "subcategory": "phasethree", "label": "Phase Three"},
      { "sid": 5,  "category": "nexusproject", "subcategory": "phasefour", "label": "Phase Four"},
      { "sid": 26,  "category": "tfbtf", "subcategory": "testloyalty", "label": "A Test of Loyalty"},
      { "sid": 27,  "category": "tfbtf", "subcategory": "zinmikros", "label": "Artemis Zin and the Fiery Mountains of Mikros"},
      { "sid": 28,  "category": "tfbtf", "subcategory": "particledestabilizer", "label": "Revenge is a Particle Destabilizer"},
      { "sid": 29,  "category": "tfbtf", "subcategory": "gatheringstorm", "label": "A Gathering Storm"},
      { "sid": 31,  "category": "tfbtf", "subcategory": "vigilantstar", "label": "Rise of the Vigilant Star"}
			/*{ "sid": 1,  "category": "dominions", "subcategory": "cassian", "label": "Cassians"},
      { "sid": 2,  "category": "dominions", "subcategory": "chua", "label": "Chua"},
      { "sid": 3,  "category": "dominions", "subcategory": "draken", "label": "Draken"},
      { "sid": 4,  "category": "dominions", "subcategory": "mechari", "label": "Mechari"},
      { "sid": 5,  "category": "exiles", "subcategory": "humans", "label": "Humans"},
      { "sid": 6,  "category": "exiles", "subcategory": "aurin", "label": "Aurin"},
      { "sid": 7,  "category": "exiles", "subcategory": "granok", "label": "Granok"},
      { "sid": 8,  "category": "exiles", "subcategory": "mordesh", "label": "Mordesh"},
      { "sid": 9,  "category": "datacubes", "subcategory": "jariel", "label": "Jariel, Archon"},
      { "sid": 10,  "category": "datacubes", "subcategory": "aviel", "label": "Aviel: Order of the Weavers"},
      { "sid": 11,  "category": "datacubes", "subcategory": "bathior", "label": "Bathior: Order of the Evokers"},
      { "sid": 12,  "category": "datacubes", "subcategory": "elyona", "label": "Elyona: Order of the Evokers"},
      { "sid": 13,  "category": "datacubes", "subcategory": "ionis", "label": "Ionis, Watchers"},
      { "sid": 14,  "category": "datacubes", "subcategory": "koral", "label": "Koral, Shapers"},
      { "sid": 15,  "category": "datacubes", "subcategory": "nazrek", "label": "Nazrek, Progenitors"},
      { "sid": 16,  "category": "datacubes", "subcategory": "nuriam", "label": "Nuriam, Progenitors"},
      { "sid": 17,  "category": "datacubes", "subcategory": "ohmna", "label": "Ohmna, Progenitors"},
      { "sid": 18,  "category": "datacubes", "subcategory": "vorion", "label": "Vorion"},
      { "sid": 19,  "category": "datacubes", "subcategory": "xarophet", "label": "Xarophet"},
      { "sid": 20,  "category": "datacubes", "subcategory": "yuria", "label": "Yuria"},
      { "sid": 21,  "category": "datacubes", "subcategory": "zarkonis", "label": "Zarkonis"},
      { "sid": 22,  "category": "datacubes", "subcategory": "drusera", "label": "Drusera"},
      { "sid": 24,  "category": "datacubes", "subcategory": "tresayne", "label": "Tresayne Toria"},
      { "sid": 25,  "category": "tfbtf", "subcategory": "destinyawaits", "label": "Destiny Awaits!"},
      { "sid": 26,  "category": "tfbtf", "subcategory": "testloyalty", "label": "A Test of Loyalty"},
      { "sid": 27,  "category": "tfbtf", "subcategory": "zinmikros", "label": "Artemis Zin and the Fiery Mountains of Mikros"},
      { "sid": 28,  "category": "tfbtf", "subcategory": "particledestabilizer", "label": "Revenge is a Particle Destabilizer"},
      { "sid": 29,  "category": "tfbtf", "subcategory": "gatheringstorm", "label": "A Gathering Storm"},
      { "sid": 30,  "category": "tfbtf", "subcategory": "corrigandoon", "label": "Corrigan Doon and the Star of Dominus"},
      { "sid": 31,  "category": "tfbtf", "subcategory": "vigilantstar", "label": "Rise of the Vigilant Star"},
      { "sid": 32,  "category": "tfbtf", "subcategory": "freebotcode", "label": "Preceptor Alpha in “The Freebot Code!”"},
      { "sid": 33,  "category": "tfbtf", "subcategory": "risevindicator", "label": "Rise of the Vindicator"},
      { "sid": 34,  "category": "tfbtf", "subcategory": "pricedefeat", "label": "The Price of Defeat"},
      { "sid": 35,  "category": "tfbtf", "subcategory": "adventureawaits", "label": "Adventure Awaits!"},
      { "sid": 36,  "category": "tfbtf", "subcategory": "deadeyeduel", "label": "A Duel for Deadeye"},
      { "sid": 37,  "category": "tfbtf", "subcategory": "bellebirthday", "label": "Happy Birthday, Belle Walker"},
      { "sid": 38,  "category": "tfbtf", "subcategory": "kainvengeance", "label": "The Vengeance of Kain"},
      { "sid": 39,  "category": "tfbtf", "subcategory": "reapersattack", "label": "Attack of the Planet Reapers!"},
      { "sid": 40,  "category": "tfbtf", "subcategory": "lostplanet", "label": "Perils of the Lost Planet"},
      { "sid": 41,  "category": "tfbtf", "subcategory": "lazarindeadend", "label": "Victor Lazarin’s Dead End"},
      { "sid": 42,  "category": "tfbtf", "subcategory": "walkerpellvalley", "label": "Dorian Walker and the Lost Valley of the Pell"},
      { "sid": 43,  "category": "tfbtf", "subcategory": "gnoxmercenaries", "label": "Durek Stonebreaker and the Mercenaries of Gnox"},
      { "sid": 45,  "category": "tfbtf", "subcategory": "karacommand", "label": "Kara Takes Command!"},
      { "sid": 46,  "category": "tfbtf", "subcategory": "traitorsgamble", "label": "A Traitor’s Gamble"},
      { "sid": 47,  "category": "tfbtf", "subcategory": "subject33", "label": "Subject 33"},
      { "sid": 48,  "category": "tfbtf", "subcategory": "dakbuun", "label": "The Temple of Dak-Buun"},
      { "sid": 49,  "category": "tfbtf", "subcategory": "widowsweb", "label": "The Widow’s Web"},
      { "sid": 50,  "category": "tfbtf", "subcategory": "fragmentation", "label": "Fragmentation"},
      { "sid": 51,  "category": "tfbtf", "subcategory": "intolight", "label": "Into the Light"},
      { "sid": 52,  "category": "tfbtf", "subcategory": "perfectstrike", "label": "A Perfect Strike"},
      { "sid": 53,  "category": "tfbtf", "subcategory": "maidenstale", "label": " The Maiden’s Tale"},
      { "sid": 54,  "category": "tfbtf", "subcategory": "protostardifference", "label": "Phineas T. Rotostar in “The Protostar Difference!”"},
      { "sid": 55,  "category": "tfbtf", "subcategory": "thepit", "label": "The Pit"},
      { "sid": 56,  "category": "tfbtf", "subcategory": "cleanupcrew", "label": "Cleanup Crew"},
      { "sid": 57,  "category": "tfbtf", "subcategory": "quarantine", "label": " Quarantine"},
      { "sid": 58,  "category": "species", "subcategory": "pell", "label": "Pell"},
      { "sid": 59,  "category": "species", "subcategory": "osun", "label": "Osun"},
      { "sid": 60,  "category": "species", "subcategory": "falkrin", "label": "Falkrin"},
      { "sid": 62,  "category": "eldan", "subcategory": "projects", "label": "Projects & Experiments"},
      { "sid": 63,  "category": "eldan", "subcategory": "technology", "label": "Technology"},
      { "sid": 64,  "category": "creatures", "subcategory": "terminites", "label": "Terminites"},
      { "sid": 65,  "category": "locations", "subcategory": "auroria", "label": "Auroria"},
      { "sid": 66,  "category": "locations", "subcategory": "celestion", "label": "Celestion"},
      { "sid": 67,  "category": "locations", "subcategory": "deradune", "label": "Deradune"},
      { "sid": 68,  "category": "locations", "subcategory": "ellevar", "label": "Ellevar"},
      { "sid": 69,  "category": "locations", "subcategory": "whitevale", "label": "Whitevale"},
      { "sid": 70,  "category": "eldan", "subcategory": "caretaker", "label": "The Caretaker"},
      { "sid": 71,  "category": "species", "subcategory": "moodies", "label": "Moodies"}*/
		]
	}
)
export default function categoriesReducer (state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]

  return handler ? handler(state, action) : state
}
