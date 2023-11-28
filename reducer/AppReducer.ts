import { Message } from '@/type/chat'

export type State = {
  ocrRes: []
  ocrTableLoading: boolean
  allLoading: boolean
  isChat: boolean
  navHidden: boolean
  messageList: Message[]
}

export enum ActionType {
  UPDATE = 'UPDATE',
  ADD_MESSAGE = 'ADD_MESSAGE',
}

type UpdateAction = {
  type: ActionType.UPDATE
  field: string
  value: any
}

type MessageAction = {
  type: ActionType.ADD_MESSAGE
  messageInput: Message
}

export const initState: State = {
  ocrRes: [],
  ocrTableLoading: false,
  allLoading: false,
  isChat: false,
  navHidden: false,
  messageList: [],
}

export type Action = UpdateAction | MessageAction

export function reducer(state: State, action: Action) {
  switch (action.type) {
    case ActionType.UPDATE:
      return { ...state, [action.field]: action.value }
    case ActionType.ADD_MESSAGE:
      const messageList = state.messageList.concat([action.messageInput])
      return { ...state, messageList }
    default:
      throw new Error()
  }
}
