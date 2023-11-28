export interface Message {
  chatId: string
  role: 'user' | 'assistant'
  content: string
}
