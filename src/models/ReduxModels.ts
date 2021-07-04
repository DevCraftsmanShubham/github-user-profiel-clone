interface Action {
    type: string;
    payload: any;
}

interface TabState {
    selectedTab: number;
}


export type { 
    Action,
    TabState
}