export type State = {
  ocrRes: []
  ocrTableLoading: boolean
  allLoading: boolean
}

export enum ActionType {
  UPDATE = 'UPDATE',
}

type UpdateAction = {
  type: ActionType.UPDATE
  field: string
  value: any
}

export const initState: State = {
  ocrRes: [],
  ocrTableLoading: false,
  allLoading: false,
}

export type Action = UpdateAction

export function reducer(state: State, action: Action) {
  switch (action.type) {
    case ActionType.UPDATE:
      return { ...state, [action.field]: action.value }
    default:
      throw new Error()
  }
}
