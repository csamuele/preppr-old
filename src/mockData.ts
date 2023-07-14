// import all types from types.ts
import { Restaurant, Station, Dish, Component, Task, Checklist, Equipment, PrepList } from './types';

// create mock data for each type
export const mockRestaurants: Restaurant[] = [
  {
    restaurantId: 1,
    name: 'Block Restaurant',
    stations: [1, 2, 3, 4],
  },
]

export const mockStations: Station[] = [
  {
    stationId: 1,
    restaurant: 1,
    prepList: 1,
    name: 'Pantry',
    dishes: [1, 2, 3],

  },
  {
    stationId: 2,
    restaurant: 1,
    prepList: 2,
    name: 'Sautee',
    dishes: [4, 5, 6],
  },
  {
    stationId: 3,
    restaurant: 1,
    prepList: 3,
    name: 'Flat Top',
    dishes: [7, 8, 9],
  },
  {
    stationId: 4,
    restaurant: 1,
    prepList: 4,
    name: 'Next Door',
    dishes: [10, 11, 12, 1],
  },
]

export const mockDishes: Dish[] = [
  {
    dishId: 1,
    name: 'Block Wedge',
    stations: [1, 4],
    components: [1, 2, 3, 4, 5],
  },
  {
    dishId: 2,
    name: 'Watermelon Salad',
    stations: [1],
    components: [6, 7, 8, 9, 10],
  },
  {
    dishId: 3,
    name: 'Pork Belly',
    stations: [1],
    components: [11, 12, 13, 14, 15, 16, 17, 18],
  },
  {
    dishId: 4,
    name: 'Corn Pasta',
    stations: [2],
    components: [19, 20],
  },
  {
    dishId: 5,
    name: 'Potato Gnocci',
    stations: [2],
    components: [21, 22, 23, 24, 25, 26],
  },
  {
    dishId: 6,
    name: 'Trout',
    stations: [2],
    components: [27, 28, 29, 30, 31, 32],
  },
  {
    dishId: 7,
    name: 'Pork Loin',
    stations: [3],
    components: [33, 34, 35, 36, 37, 38],
  },
  {
    dishId: 8,
    name: 'Hangar Steak',
    stations: [3],
    components: [39, 40, 41, 42, 43, 44],
  },
  {
    dishId: 9,
    name: 'Chicken Breast',
    stations: [3],
    components: [45, 46, 47, 48, 49],
  },
  {
    dishId: 10,
    name: 'Burger',
    stations: [4],
    components: [50, 51, 52, 53, 54],
  },
  {
    dishId: 11,
    name: 'Fries',
    stations: [4],
    components: [55, 56, 57, 58, 59, 60, 61],
  },
  {
    dishId: 12,
    name: 'Wings',
    stations: [4],
    components: [62, 63, 64, 65],
  },
]

export const mockComponents: Component[] = [
  {
    componentId: 1,
    name: 'Romaine',
    dishes: [1],
    tasks: [1, 2],
  },
  {
    componentId: 2,
    name: 'Green Goddess',
    dishes: [1],
    tasks: [101, 102],
  },
  {
    componentId: 3,
    name: 'Bleu Cheese',
    dishes: [1],
    tasks: [201],
  },
  {
    componentId: 4,
    name: 'Bacon Lardons',
    dishes: [1, 4],
    tasks: [301, 302],
  },
  {
    componentId: 5,
    name: 'Pickled Red Onion',
    dishes: [1],
    tasks: [401, 402],
  },
  {
    componentId: 6,
    name: 'Watermelon',
    dishes: [2],
    tasks: [501, 502],
  },
  {
    componentId: 7,
    name: 'Feta',
    dishes: [2],
    tasks: [601],
  },
  {
    componentId: 8,
    name: 'Mint',
    dishes: [2],
    tasks: [701],
  },
  {
    componentId: 9,
    name: 'Balsamic',
    dishes: [2],
    tasks: [801],
  },
  {
    componentId: 10,
    name: 'Olive Oil',
    dishes: [2],
    tasks: [901],
  },
  {
    componentId: 11,
    name: 'Pork Belly',
    dishes: [3],
    tasks: [1001],
  },
  {
    componentId: 12,
    name: 'Soy Sauce',
    dishes: [3],
    tasks: [1101],
  },
  {
    componentId: 13,
    name: 'Brown Sugar',
    dishes: [3],
    tasks: [1201],
  },
  {
    componentId: 14,
    name: 'Garlic',
    dishes: [3],
    tasks: [1301],
  },
  {
    componentId: 15,
    name: 'Ginger',
    dishes: [3],
    tasks: [1401],
  },
  {
    componentId: 16,
    name: 'Scallion',
    dishes: [3],
    tasks: [1501],
  },
  {
    componentId: 17,
    name: 'Cilantro',
    dishes: [3],
    tasks: [1601],
  },
  {
    componentId: 18,
    name: 'Lime',
    dishes: [3],
    tasks: [1701],
  },
  {
    componentId: 19,
    name: 'Corn Pasta',
    dishes: [4],
    tasks: [1801],
  },
  {
    componentId: 20,
    name: 'Corn',
    dishes: [4],
    tasks: [1901],
  },
  {
    componentId: 21,
    name: 'Potato Gnocci',
    dishes: [5],
    tasks: [2001, 2002],
  },
  {
    componentId: 22,
    name: 'Shorty',
    dishes: [5],
    tasks: [2101, 2102],
  },
  {
    componentId: 23,
    name: 'Cream',
    dishes: [5],
    tasks: [2201],
  },
  {
    componentId: 24,
    name: 'Beef Jus',
    dishes: [5],
    tasks: [2301],
  },
  {
    componentId: 25,
    name: 'Pickled Shallot',
    dishes: [5],
    tasks: [2401, 2402],
  },
  {
    componentId: 26,
    name: 'Creme Fraiche',
    dishes: [5],
    tasks: [2501, 2501],
  },
  //Components for Trout components: [6, 'Cauliflower', 'Caper', 'Brown Butter', 'Lemon', 'Parsley',],

  {
    componentId: 27,
    name: 'Trout',
    dishes: [6],
    tasks: [2601, 2602, 2603],
  },
  {
    componentId: 28,
    name: 'Cauliflower',
    dishes: [6],
    tasks: [2701],
  },
  {
    componentId: 29,
    name: 'Caper',
    dishes: [6],
    tasks: [2801],
  },
  {

    componentId: 30,
    name: 'Brown Butter',
    dishes: [6],
    tasks: [2901],
  },
  {
    componentId: 31,
    name: 'Lemon',
    dishes: [6],
    tasks: [3001],
  },
  {
    componentId: 32,
    name: 'Parsley',
    dishes: [6],
    tasks: [3101],
  },
  //components for Pork Loin  components: [7, 'Peack Glaze', 'Grilled Peaches', 'Polenta', 'Chow Chow', 'Garnish',],
  {
    componentId: 33,
    name: 'Pork Loin',
    dishes: [7],
    tasks: [3201, 3202],
  },
  {
    componentId: 34,
    name: 'Peach Glaze',
    dishes: [7],
    tasks: [3301],
  },
  {
    componentId: 35,
    name: 'Grilled Peaches',
    dishes: [7],
    tasks: [3401],
  },
  {
    componentId: 36,
    name: 'Polenta',
    dishes: [7],
    tasks: [3501],
  },
  {
    componentId: 37,
    name: 'Chow Chow',
    dishes: [7],
    tasks: [3601],
  },
  {
    componentId: 38,
    name: 'Garnish',
    dishes: [7],
    tasks: [3701],
  },
  //components for Hangar Steak components: [8, 'Chimichurri', 'Fingerling Potato', 'Cherry Tomato', 'Arugula', 'Garnish',],
  {
    componentId: 39,
    name: 'Hangar Steak',
    dishes: [8],

    tasks: [3801, 3802],
  },
  {
    componentId: 40,
    name: 'Chimichurri',
    dishes: [8],
    tasks: [3901],
  },
  {
    componentId: 41,
    name: 'Fingerling Potato',
    dishes: [8],
    tasks: [4001],
  },
  {
    componentId: 42,
    name: 'Cherry Tomato',
    dishes: [8],
    tasks: [4101],
  },
  {
    componentId: 43,
    name: 'Arugula',
    dishes: [8],
    tasks: [4201],
  },
  {
    componentId: 44,
    name: 'Garnish',
    dishes: [8],
    tasks: [4301],
  },
  //components for Chicken Breast components: [9, 'Smashed Potato', 'Potato Salad Dressing', 'Grilled Squash', 'Garnish',],
  { componentId: 45, name: 'Chicken Breast', dishes: [9], tasks: [4401, 4402] },
  {
    componentId: 46,
    name: 'Smashed Potato',
    dishes: [9],
    tasks: [4501, 4502]
  },
  {
    componentId: 47,
    name: 'Potato Salad Dressing',
    dishes: [9],
    tasks: [4601, 4602]
  },
  {
    componentId: 48,
    name: 'Grilled Squash',
    dishes: [9],
    tasks: [4701]
  },
  { componentId: 49, name: 'Garnish', dishes: [9], tasks: [4801] },
  {
    componentId: 50,
    name: 'Burger Patty',
    dishes: [10],
    tasks: [4901]
  },
  {
    componentId: 51,
    name: 'Brioche Bun',
    dishes: [10],
    tasks: [5001]
  },
  { componentId: 52, name: 'Lettuce', dishes: [10], tasks: [5101] },
  { componentId: 53, name: 'Cheese', dishes: [10], tasks: [5201] },
  {
    componentId: 54,
    name: 'Burger Sauce',
    dishes: [10],
    tasks: [5301, 5302]
  },
  { componentId: 55, name: 'Fries', dishes: [11], tasks: [5401] },
  { componentId: 56, name: 'Salt', dishes: [11], tasks: [5501] },
  { componentId: 57, name: 'Pepper', dishes: [11], tasks: [5601] },
  { componentId: 58, name: 'Parsley', dishes: [11], tasks: [5701] },
  { componentId: 59, name: 'Garlic', dishes: [11], tasks: [5801] },
  {
    componentId: 60,
    name: 'Parmesan',
    dishes: [11],
    tasks: [5901]
  },
  {
    componentId: 61,
    name: 'Truffle Oil',
    dishes: [11],
    tasks: [6001]
  },
  { componentId: 62, name: 'Wings', dishes: [12], tasks: [6101] },
  {
    componentId: 63,
    name: 'Buffalo Sauce',
    dishes: [12],
    tasks: [6201, 6202]
  },
  {
    componentId: 64,
    name: 'Blue Cheese',
    dishes: [12],
    tasks: [6301]
  },
  { componentId: 65, name: 'Celery', dishes: [12], tasks: [6401] }
];
export const mockPrepLists: PrepList[] = [

  {
    prepListId: 1,
    name: 'Pantry',
    isStriped: false,
    notes: 'Pantry Prep List',
    tasks: []
  },
  {
    prepListId: 2,
    name: 'Sautee',
    isStriped: false,
    notes: 'Sautee Prep List',
    tasks: []
  },
  {
    prepListId: 3,
    name: 'Flat Top',
    isStriped: false,
    notes: 'Flat Top Prep List',
    tasks: []
  },
  {
    prepListId: 4,
    name: 'Next Door',
    isStriped: false,
    notes: 'Next Door Prep List',
    tasks: []
  },
  {
    prepListId: 5,
    name: 'Prep 1',
    isStriped: false,
    notes: 'Prep 1 Prep List',
    tasks: []
  },
];
export const mockTasks: Task[] = [
  {
    taskId: 1,
    name: 'Wash Romaine',
    component: 1,
    prepList: 1,
    par: '3 units'
  },
  {
    taskId: 2,
    name: 'Cut Romaine',
    component: 1,
    prepList: 1,
    par: ''
  },
  {
    taskId: 101,
    name: 'Make Green Goddess',
    component: 2,
    prepList: 1,
    par: '3 units'
  },
  {
    taskId: 102,
    name: 'Stock Green Goddess',
    component: 2,
    prepList: 1,
    par: '7 units'
  },
  {
    taskId: 201,
    name: 'Stock Bleu Cheese',
    component: 3,
    prepList: 1,
    par: '1 unit'
  },
  {
    taskId: 301,
    name: 'Make Bacon Lardons',
    component: 4,
    prepList: 1,
    par: '9 units'
  },
  {
    taskId: 302,
    name: 'Stock Bacon Lardons',
    component: 4,
    prepList: 1,
    par: '4 units'
  },
  {
    taskId: 401,
    name: 'Make Pickled Red Onion',
    component: 5,
    prepList: 1,
    par: '8 units'
  },
  {
    taskId: 402,
    name: 'Stock Pickled Red Onion',
    component: 5,
    prepList: 1,
    par: '3 units'
  },
  {
    taskId: 501,
    name: 'Cut Watermelon',
    component: 6,
    prepList: 1,
    par: '8 units'
  },
  {
    taskId: 601,
    name: 'Stock Feta',
    component: 7,
    prepList: 1,
    par: ''
  },
  {
    taskId: 701,
    name: 'Stock Mint',
    component: 8,
    prepList: 1,
    par: '9 units'
  },
  {
    taskId: 801,
    name: 'Stock Balsamic',
    component: 9,
    prepList: 1,
    par: '3 units'
  },
  {
    taskId: 901,
    name: 'Stock Olive Oil',
    component: 10,
    prepList: 1,
    par: '4 units'
  },
  {
    taskId: 1001,
    name: 'Portion Pork Belly',
    component: 11,
    prepList: 1,
    par: '6 units'
  },
  {
    taskId: 1101,
    name: 'Stock Soy Sauce',
    component: 12,
    prepList: 1,
    par: ''
  },
  {
    taskId: 1201,
    name: 'Stock Brown Sugar',
    component: 13,
    prepList: 1,
    par: '1 unit'
  },
  {
    taskId: 1301,
    name: 'Stock Garlic',
    component: 14,
    prepList: 1,
    par: ''
  },
  {
    taskId: 1401,
    name: 'Stock Ginger',
    component: 15,
    prepList: 1,
    par: '2 units'
  },
  {
    taskId: 1501,
    name: 'Stock Scallion',
    component: 16,
    prepList: 1,
    par: '6 units'
  },
  {
    taskId: 1601,
    name: 'Stock Cilantro',
    component: 17,
    prepList: 1,
    par: ''
  },
  {
    taskId: 1701,
    name: 'Stock Lime',
    component: 18,
    prepList: 1,
    par: '6 units'
  },
  {
    taskId: 1801,
    name: 'Portion Corn Pasta',
    component: 19,
    prepList: 2,
    par: '6 units'
  },
  {
    taskId: 1901,
    name: 'Stock Corn',
    component: 20,
    prepList: 2,
    par: '8 units'
  },
  {
    taskId: 2001,
    name: 'Make Gnocci',
    component: 21,
    prepList: 2,
    par: '7 units'
  },
  {
    taskId: 2002,
    name: 'Stock Gnocci',
    component: 21,
    prepList: 2,
    par: '7 units'
  },
  {
    taskId: 2101,
    name: 'Portion Shorty',
    component: 22,
    prepList: 2,
    par: '7 units'
  },
  {
    taskId: 2102,
    name: 'Braise Shorty',
    component: 22,
    prepList: 2,
    par: '4 units'
  },
  {
    taskId: 2201,
    name: 'Stock Cream',
    component: 23,
    prepList: 2,
    par: '1 unit'
  },
  {
    taskId: 2301,
    name: 'Stock Beef Jus',
    component: 24,
    prepList: 2,
    par: '2 units'
  },
  {
    taskId: 2401,
    name: 'Make Pickled Shallot',
    component: 25,
    prepList: 2,
    par: ''
  },
  {
    taskId: 2402,
    name: 'Stock Pickled Shallot',
    component: 25,
    prepList: 2,
    par: '3 units'
  },
  {
    taskId: 2501,
    name: 'Stock Creme Fraiche',
    component: 26,
    prepList: 2,
    par: ''
  },
  {
    taskId: 2502,
    name: 'Make Creme Fraiche',
    component: 26,
    prepList: 2,
    par: '6 units'
  },
  {
    taskId: 2601,
    name: 'Kill Trout',
    component: 27,
    prepList: 2,
    par: '9 units'
  },
  {
    taskId: 2602,
    name: 'Butch Trout',
    component: 27,
    prepList: 2,
    par: ''
  },
  {
    taskId: 2603,
    name: 'Stock Trout',
    component: 27,
    prepList: 2,
    par: '9 units'
  },
  {
    taskId: 2701,
    name: 'Stock Cauliflower',
    component: 28,
    prepList: 2,
    par: '2 units'
  },
  {
    taskId: 2801,
    name: 'Stock Caper',
    component: 29,
    prepList: 2,
    par: ''
  },
  {
    taskId: 2901,
    name: 'Stock Brown Butter',
    component: 30,
    prepList: 2,
    par: '7 units'
  },
  {
    taskId: 3001,
    name: 'Stock Lemon',
    component: 31,
    prepList: 2,
    par: '9 units'
  },
  {
    taskId: 3101,
    name: 'Stock Parsley',
    component: 32,
    prepList: 2,
    par: '3 units'
  },
  {
    taskId: 3201,
    name: 'Portion Pork Loin',
    component: 33,
    prepList: 3,
    par: '4 units'
  },
  {
    taskId: 3202,
    name: 'Stock Pork Loin',
    component: 33,
    prepList: 3,
    par: '1 unit'
  },
  {
    taskId: 3301,
    name: 'Stock Peach Glaze',
    component: 34,
    prepList: 3,
    par: ''
  },
  {
    taskId: 3401,
    name: 'Stock Grilled Peaches',
    component: 35,
    prepList: 3,
    par: '2 units'
  },
  {
    taskId: 3501,
    name: 'Stock Polenta',
    component: 36,
    prepList: 3,
    par: '5 units'
  },
  {
    taskId: 3601,
    name: 'Stock Chow Chow',
    component: 37,
    prepList: 3,
    par: '4 units'
  },
  {
    taskId: 3701,
    name: 'Stock Garnish',
    component: 38,
    prepList: 3,
    par: '4 units'
  },
  {
    taskId: 3801,
    name: 'Portion Hangar Steak',
    component: 39,
    prepList: 3,
    par: '3 units'
  },
  {
    taskId: 3802,
    name: 'Stock Hangar Steak',
    component: 39,
    prepList: 3,
    par: '7 units'
  },
  {
    taskId: 3901,
    name: 'Stock Chimichurri',
    component: 40,
    prepList: 3,
    par: '8 units'
  },
  {
    taskId: 4001,
    name: 'Stock Fingerling Potato',
    component: 41,
    prepList: 3,
    par: '9 units'
  },
  {
    taskId: 4101,
    name: 'Stock Cherry Tomato',
    component: 42,
    prepList: 3,
    par: ''
  },
  {
    taskId: 4201,
    name: 'Stock Arugula',
    component: 43,
    prepList: 3,
    par: '1 unit'
  },
  {
    taskId: 4301,
    name: 'Stock Garnish',
    component: 38,
    prepList: 3,
    par: '2 units'
  },
  {
    taskId: 4401,
    name: 'Sues Vide Chicken Breast',
    component: 45,
    prepList: 3,
    par: '2 units'
  },
  {
    taskId: 4402,
    name: 'Stock Chicken Breast',
    component: 45,
    prepList: 3,
    par: '9 units'
  },
  {
    taskId: 4501,
    name: 'Boil Fingerlings',
    component: 46,
    prepList: 3,
    par: ''
  },
  {
    taskId: 4502,
    name: 'Stock Smashed Potato',
    component: 46,
    prepList: 3,
    par: '6 units'
  },
  {
    taskId: 4601,
    name: 'Make Potato Salad Dressing',
    component: 47,
    prepList: 3,
    par: '1 unit'
  },
  {
    taskId: 4602,
    name: 'Stock Potato Salad Dressing',
    component: 47,
    prepList: 3,
    par: '1 unit'
  },
  {
    taskId: 4701,
    name: 'Grill Squash',
    component: 48,
    prepList: 3,
    par: '9 units'
  },
  {
    taskId: 4801,
    name: 'Stock Garnish',
    component: 38,
    prepList: 3,
    par: ''
  },
  {
    taskId: 4901,
    name: 'Stock Burger Patty',
    component: 50,
    prepList: 4,
    par: '6 units'
  },
  {
    taskId: 5001,
    name: 'Stock Brioche Bun',
    component: 51,
    prepList: 4,
    par: '8 units'
  },
  {
    taskId: 5101,
    name: 'Stock Lettuce',
    component: 52,
    prepList: 4,
    par: '2 units'
  },
  {
    taskId: 5201,
    name: 'Stock Cheese',
    component: 53,
    prepList: 4,
    par: '9 units'
  },
  {
    taskId: 5301,
    name: 'Make Burger Sauce',
    component: 54,
    prepList: 4,
    par: '4 units'
  },
  {
    taskId: 5302,
    name: 'Stock Burger Sauce',
    component: 54,
    prepList: 4,
    par: '1 unit'
  },
  {
    taskId: 5401,
    name: 'Stock Fries',
    component: 55,
    prepList: 4,
    par: '7 units'
  },
  {
    taskId: 5501,
    name: 'Stock Salt',
    component: 56,
    prepList: 4,
    par: '7 units'
  },
  {
    taskId: 5601,
    name: 'Stock Pepper',
    component: 57,
    prepList: 4,
    par: '2 units'
  },
  {
    taskId: 5701,
    name: 'Stock Parsley',
    component: 32,
    prepList: 4,
    par: ''
  },
  {
    taskId: 5801,
    name: 'Stock Garlic',
    component: 14,
    prepList: 4,
    par: '5 units'
  },
  {
    taskId: 5901,
    name: 'Stock Parmesan',
    component: 60,
    prepList: 4,
    par: '6 units'
  },
  {
    taskId: 6001,
    name: 'Stock Truffle Oil',
    component: 61,
    prepList: 4,
    par: '4 units'
  },
  {
    taskId: 6101,
    name: 'Stock Wings',
    component: 62,
    prepList: 4,
    par: '3 units'
  },
  {
    taskId: 6201,
    name: 'Make Buffalo Sauce',
    component: 63,
    prepList: 4,
    par: '9 units'
  },
  {
    taskId: 6202,
    name: 'Stock Buffalo Sauce',
    component: 63,
    prepList: 4,
    par: '4 units'
  },
  {
    taskId: 6301,
    name: 'Crumble Blue Cheese',
    component: 64,
    prepList: 4,
    par: ''
  },
  {
    taskId: 6401,
    name: 'Stock Celery',
    component: 65,
    prepList: 4,
    par: '2 units'
  }
];