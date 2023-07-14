export interface Restaurant {
    restaurantId: number;
    name: string;
    stations: number[];
}

export interface Station {
    stationId: number;
    restaurant: number;
    prepList: number;
    name: string;
    dishes: number[];
  }

export interface Dish {
    dishId: number;
    name: string;
    stations: number[];
    components: number[];
}

export interface Component {
    componentId: number;
    name: string;
    dishes: number[];
    tasks: number[];
}

export interface Task {
    taskId: number;
    name: string;
    component: number;
    prepList: number;
    par?: string;
}

export interface PrepList {
    prepListId: number;
    name: string;
    isStriped: boolean;
    notes: string;
    tasks: number[];
}

export interface Checklist {
    checklistId: number;
    station: string;
    equipment: number[];
}

export interface Equipment {
    equipmentId: number;
    name: string;
    checklist: number[];
}