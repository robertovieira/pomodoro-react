import { Cycle } from "./reducer";

export enum ActionTypes {
    'ADD_NEW_CYCLE' = 'ADD_NEW_CYCLE',
    'INTERRUPT_CURRENTY_CYCLE' = 'INTERRUPT_CURRENTY_CYCLE',
    'MARK_CURRENTY_CYCLE_FINISHED' = 'MARK_CURRENTY_CYCLE_FINISHED',
}

export function addNewCycleAction(newCycle: Cycle) {
    return {
        type: ActionTypes.ADD_NEW_CYCLE,
        payload: {
            newCycle,
        },
    }
}

export function markCurrentCycleAsFinishedAction() {
    return {
        type: ActionTypes.MARK_CURRENTY_CYCLE_FINISHED
    }
}

export function interruptCurrentyCycleAction() {
    return {
        type: ActionTypes.INTERRUPT_CURRENTY_CYCLE
    }
}