// import all types from types.ts

// create mock data for each type
 const mockRestaurants= [
    {
        restaurantId: 1,
        name: 'Block Restaurant',
        stations: [1, 2, 3, 4],
    },
]

 const mockStations = [
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

const mockPrepLists = [

  {
    prepListId: 1,
    name: 'Pantry',
    isStriped: false,
    notes: 'Pantry Prep List',
    tasks:[]
  },
  {
    prepListId: 2,
    name: 'Sautee',
    isStriped: false,
    notes: 'Sautee Prep List',
    tasks:[]
  },
  {
    prepListId: 3,
    name: 'Flat Top',
    isStriped: false,
    notes: 'Flat Top Prep List',
    tasks:[]
  },
  {
    prepListId: 4,
    name: 'Next Door',
    isStriped: false,
    notes: 'Next Door Prep List',
    tasks:[]
  },
  {
    prepListId: 5,
    name: 'Prep 1',
    isStriped: false,
    notes: 'Prep 1 Prep List',
    tasks:[]
  },
];

 const mockDishes = [
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

 const mockComponents = [
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
        tasks: [ 3201,  3202],
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
    { componentId: 45, name: 'Chicken Breast', dishes: [ 9 ], tasks: [ 4401, 4402 ] },
    {
      componentId: 46,
      name: 'Smashed Potato',
      dishes: [ 9 ],
      tasks: [ 4501, 4502 ]
    },
    {
      componentId: 47,
      name: 'Potato Salad Dressing',
      dishes: [ 9 ],
      tasks: [ 4601, 4602 ]
    },
    {
      componentId: 48,
      name: 'Grilled Squash',
      dishes: [ 9 ],
      tasks: [ 4701 ]
    },
    { componentId: 49, name: 'Garnish', dishes: [ 9 ], tasks: [ 4801 ] },
    {
      componentId: 50,
      name: 'Burger Patty',
      dishes: [ 10 ],
      tasks: [ 4901 ]
    },
    {
      componentId: 51,
      name: 'Brioche Bun',
      dishes: [ 10 ],
      tasks: [ 5001 ]
    },
    { componentId: 52, name: 'Lettuce', dishes: [ 10 ], tasks: [ 5101 ] },
    { componentId: 53, name: 'Cheese', dishes: [ 10 ], tasks: [ 5201 ] },
    {
      componentId: 54,
      name: 'Burger Sauce',
      dishes: [ 10 ],
      tasks: [ 5301, 5302 ]
    },
    { componentId: 55, name: 'Fries', dishes: [ 11 ], tasks: [ 5401 ] },
    { componentId: 56, name: 'Salt', dishes: [ 11 ], tasks: [ 5501 ] },
    { componentId: 57, name: 'Pepper', dishes: [ 11 ], tasks: [ 5601 ] },
    { componentId: 58, name: 'Parsley', dishes: [ 11 ], tasks: [ 5701 ] },
    { componentId: 59, name: 'Garlic', dishes: [ 11 ], tasks: [ 5801 ] },
    {
      componentId: 60,
      name: 'Parmesan',
      dishes: [ 11 ],
      tasks: [ 5901 ]
    },
    {
      componentId: 61,
      name: 'Truffle Oil',
      dishes: [ 11 ],
      tasks: [ 6001 ]
    },
    { componentId: 62, name: 'Wings', dishes: [ 12 ], tasks: [ 6101 ] },
    {
      componentId: 63,
      name: 'Buffalo Sauce',
      dishes: [ 12 ],
      tasks: [ 6201, 6202 ]
    },
    {
      componentId: 64,
      name: 'Blue Cheese',
      dishes: [ 12 ],
      tasks: [ 6301 ]
    },
    { componentId: 65, name: 'Celery', dishes: [ 12 ], tasks: [ 6401 ] }
];

 const mockTasks = [
    {
      taskId: 1,
      name: 'Wash Romaine',
      component: 'Romaine',
      prepList: 'Pantry'
    },
    {
      taskId: 2,
      name: 'Cut Romaine',
      component: 'Romaine',
      prepList: 'Pantry'
    },
    {
      taskId: 101,
      name: 'Make Green Goddess',
      component: 'Green Goddess',
      prepList: 'Pantry'
    },
    {
      taskId: 102,
      name: 'Stock Green Goddess',
      component: 'Green Goddess',
      prepList: 'Pantry'
    },
    {
      taskId: 201,
      name: 'Stock Bleu Cheese',
      component: 'Bleu Cheese',
      prepList: 'Pantry'
    },
    {
      taskId: 301,
      name: 'Make Bacon Lardons',
      component: 'Bacon Lardons',
      prepList: 'Pantry'
    },
    {
      taskId: 302,
      name: 'Stock Bacon Lardons',
      component: 'Bacon Lardons',
      prepList: 'Pantry'
    },
    {
      taskId: 401,
      name: 'Make Pickled Red Onion',
      component: 'Pickled Red Onion',
      prepList: 'Pantry'
    },
    {
      taskId: 402,
      name: 'Stock Pickled Red Onion',
      component: 'Pickled Red Onion',
      prepList: 'Pantry'
    },
    {
      taskId: 501,
      name: 'Cut Watermelon',
      component: 'Watermelon',
      prepList: 'Pantry'
    },
    { taskId: 601, name: 'Stock Feta', component: 'Feta', prepList: 'Pantry' },
    { taskId: 701, name: 'Stock Mint', component: 'Mint', prepList: 'Pantry' },
    {
      taskId: 801,
      name: 'Stock Balsamic',
      component: 'Balsamic',
      prepList: 'Pantry'
    },
    {
      taskId: 901,
      name: 'Stock Olive Oil',
      component: 'Olive Oil',
      prepList: 'Pantry'
    },
    {
      taskId: 1001,
      name: 'Portion Pork Belly',
      component: 'Pork Belly',
      prepList: 'Pantry'
    },
    {
      taskId: 1101,
      name: 'Stock Soy Sauce',
      component: 'Soy Sauce',
      prepList: 'Pantry'
    },
    {
      taskId: 1201,
      name: 'Stock Brown Sugar',
      component: 'Brown Sugar',
      prepList: 'Pantry'
    },
    {
      taskId: 1301,
      name: 'Stock Garlic',
      component: 'Garlic',
      prepList: 'Pantry'
    },
    {
      taskId: 1401,
      name: 'Stock Ginger',
      component: 'Ginger',
      prepList: 'Pantry'
    },
    {
      taskId: 1501,
      name: 'Stock Scallion',
      component: 'Scallion',
      prepList: 'Pantry'
    },
    {
      taskId: 1601,
      name: 'Stock Cilantro',
      component: 'Cilantro',
      prepList: 'Pantry'
    },
    {
      taskId: 1701,
      name: 'Stock Lime',
      component: 'Lime',
      prepList: 'Pantry'
    },
    {
      taskId: 1801,
      name: 'Portion Corn Pasta',
      component: 'Corn Pasta',
      prepList: 'Sautee'
    },
    {
      taskId: 1901,
      name: 'Stock Corn',
      component: 'Corn',
      prepList: 'Sautee'
    },
    {
      taskId: 2001,
      name: 'Make Gnocci',
      component: 'Potato Gnocci',
      prepList: 'Sautee'
    },
    {
      taskId: 2002,
      name: 'Stock Gnocci',
      component: 'Potato Gnocci',
      prepList: 'Sautee'
    },
    {
      taskId: 2101,
      name: 'Portion Shorty',
      component: 'Shorty',
      prepList: 'Sautee'
    },
    {
      taskId: 2102,
      name: 'Braise Shorty',
      component: 'Shorty',
      prepList: 'Sautee'
    },
    {
      taskId: 2201,
      name: 'Stock Cream',
      component: 'Cream',
      prepList: 'Sautee'
    },
    {
      taskId: 2301,
      name: 'Stock Beef Jus',
      component: 'Beef Jus',
      prepList: 'Sautee'
    },
    {
      taskId: 2401,
      name: 'Make Pickled Shallot',
      component: 'Pickled Shallot',
      prepList: 'Sautee'
    },
    {
      taskId: 2402,
      name: 'Stock Pickled Shallot',
      component: 'Pickled Shallot',
      prepList: 'Sautee'
    },
    {
      taskId: 2501,
      name: 'Stock Creme Fraiche',
      component: 'Creme Fraiche',
      prepList: 'Sautee'
    },
    {
      taskId: 2502,
      name: 'Make Creme Fraiche',
      component: 'Creme Fraiche',
      prepList: 'Sautee'
    },
    {
      taskId: 2601,
      name: 'Kill Trout',
      component: 'Trout',
      prepList: 'Sautee'
    },
    {
      taskId: 2602,
      name: 'Butch Trout',
      component: 'Trout',
      prepList: 'Sautee'
    },
    {
      taskId: 2603,
      name: 'Stock Trout',
      component: 'Trout',
      prepList: 'Sautee'
    },
    {
      taskId: 2701,
      name: 'Stock Cauliflower',
      component: 'Cauliflower',
      prepList: 'Sautee'
    },
    {
      taskId: 2801,
      name: 'Stock Caper',
      component: 'Caper',
      prepList: 'Sautee'
    },
    {
      taskId: 2901,
      name: 'Stock Brown Butter',
      component: 'Brown Butter',
      prepList: 'Sautee'
    },
    {
      taskId: 3001,
      name: 'Stock Lemon',
      component: 'Lemon',
      prepList: 'Sautee'
    },
    {
      taskId: 3101,
      name: 'Stock Parsley',
      component: 'Parsley',
      prepList: 'Sautee'
    },
    {
      taskId: 3201,
      name: 'Portion Pork Loin',
      component: 'Pork Loin',
      prepList: 'Flat Top'
    },
    {
      taskId: 3202,
      name: 'Stock Pork Loin',
      component: 'Pork Loin',
      prepList: 'Flat Top'
    },
    {
      taskId: 3301,
      name: 'Stock Peach Glaze',
      component: 'Peach Glaze',
      prepList: 'Flat Top'
    },
    {
      taskId: 3401,
      name: 'Stock Grilled Peaches',
      component: 'Grilled Peaches',
      prepList: 'Flat Top'
    },
    {
      taskId: 3501,
      name: 'Stock Polenta',
      component: 'Polenta',
      prepList: 'Flat Top'
    },
    {
      taskId: 3601,
      name: 'Stock Chow Chow',
      component: 'Chow Chow',
      prepList: 'Flat Top'
    },
    {
      taskId: 3701,
      name: 'Stock Garnish',
      component: 'Garnish',
      prepList: 'Flat Top'
    },
    {
      taskId: 3801,
      name: 'Portion Hangar Steak',
      component: 'Hangar Steak',
      prepList: 'Flat Top'
    },
    {
      taskId: 3802,
      name: 'Stock Hangar Steak',
      component: 'Hangar Steak',
      prepList: 'Flat Top'
    },
    {
      taskId: 3901,
      name: 'Stock Chimichurri',
      component: 'Chimichurri',
      prepList: 'Flat Top'
    },
    {
      taskId: 4001,
      name: 'Stock Fingerling Potato',
      component: 'Fingerling Potato',
      prepList: 'Flat Top'
    },
    {
      taskId: 4101,
      name: 'Stock Cherry Tomato',
      component: 'Cherry Tomato',
      prepList: 'Flat Top'
    },
    {
      taskId: 4201,
      name: 'Stock Arugula',
      component: 'Arugula',
      prepList: 'Flat Top'
    },
    {
      taskId: 4301,
      name: 'Stock Garnish',
      component: 'Garnish',
      prepList: 'Flat Top'
    },
    {
      taskId: 4401,
      name: 'Sues Vide Chicken Breast',
      component: 'Chicken Breast',
      prepList: 'Flat Top'
    },
    {
      taskId: 4402,
      name: 'Stock Chicken Breast',
      component: 'Chicken Breast',
      prepList: 'Flat Top'
    },
    {
      taskId: 4501,
      name: 'Boil Fingerlings',
      component: 'Smashed Potato',
      prepList: 'Flat Top'
    },
    {
      taskId: 4502,
      name: 'Stock Smashed Potato',
      component: 'Smashed Potato',
      prepList: 'Flat Top'
    },
    {
      taskId: 4601,
      name: 'Make Potato Salad Dressing',
      component: 'Potato Salad Dressing',
      prepList: 'Flat Top'
    },
    {
      taskId: 4602,
      name: 'Stock Potato Salad Dressing',
      component: 'Potato Salad Dressing',
      prepList: 'Flat Top'
    },
    {
      taskId: 4701,
      name: 'Grill Squash',
      component: 'Grilled Squash',
      prepList: 'Flat Top'
    },
    {
      taskId: 4801,
      name: 'Stock Garnish',
      component: 'Garnish',
      prepList: 'Flat Top'
    },
    {
      taskId: 4901,
      name: 'Stock Burger Patty',
      component: 'Burger Patty',
      prepList: 'Next Door'
    },
    {
      taskId: 5001,
      name: 'Stock Brioche Bun',
      component: 'Brioche Bun',
      prepList: 'Next Door'
    },
    {
      taskId: 5101,
      name: 'Stock Lettuce',
      component: 'Lettuce',
      prepList: 'Next Door'
    },
    {
      taskId: 5201,
      name: 'Stock Cheese',
      component: 'Cheese',
      prepList: 'Next Door'
    },
    {
      taskId: 5301,
      name: 'Make Burger Sauce',
      component: 'Burger Sauce',
      prepList: 'Next Door'
    },
    {
      taskId: 5302,
      name: 'Stock Burger Sauce',
      component: 'Burger Sauce',
      prepList: 'Next Door'
    },
    {
      taskId: 5401,
      name: 'Stock Fries',
      component: 'Fries',
      prepList: 'Next Door'
    },
    {
      taskId: 5501,
      name: 'Stock Salt',
      component: 'Salt',
      prepList: 'Next Door'
    },
    {
      taskId: 5601,
      name: 'Stock Pepper',
      component: 'Pepper',
      prepList: 'Next Door'
    },
    {
      taskId: 5701,
      name: 'Stock Parsley',
      component: 'Parsley',
      prepList: 'Next Door'
    },
    {
      taskId: 5801,
      name: 'Stock Garlic',
      component: 'Garlic',
      prepList: 'Next Door'
    },
    {
      taskId: 5901,
      name: 'Stock Parmesan',
      component: 'Parmesan',
      prepList: 'Next Door'
    },
    {
      taskId: 6001,
      name: 'Stock Truffle Oil',
      component: 'Truffle Oil',
      prepList: 'Next Door'
    },
    {
      taskId: 6101,
      name: 'Stock Wings',
      component: 'Wings',
      prepList: 'Next Door'
    },
    {
      taskId: 6201,
      name: 'Make Buffalo Sauce',
      component: 'Buffalo Sauce',
      prepList: 'Next Door'
    },
    {
      taskId: 6202,
      name: 'Stock Buffalo Sauce',
      component: 'Buffalo Sauce',
      prepList: 'Next Door'
    },
    {
      taskId: 6301,
      name: 'Crumble Blue Cheese',
      component: 'Blue Cheese',
      prepList: 'Next Door'
    },
    {
      taskId: 6401,
      name: 'Stock Celery',
      component: 'Celery',
      prepList: 'Next Door'
    }
  ];


  const replaceComponentAndPrepListNamesWithIds = (tasks) => {
    const newTasks = tasks.map(task => {
      const component = mockComponents.find(component => component.name === task.component);
      const prepList = mockPrepLists.find(prepList => prepList.name === task.prepList);
      return {
        ...task,
        component: component.componentId,
        prepList: prepList.prepListId
      };
    });
    return newTasks;
  }

  console.log(replaceComponentAndPrepListNamesWithIds(mockTasks));