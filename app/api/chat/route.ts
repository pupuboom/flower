import { NextRequest, NextResponse } from 'next/server'
import { ChatBaiduWenxin } from 'langchain/chat_models/baiduwenxin'
import { HumanMessage } from 'langchain/schema'

export async function POST(request: NextRequest) {
  const { message } = await request.json()

  // Default model is ERNIE-Bot-turbo
  const ernieTurbo = new ChatBaiduWenxin({
    baiduApiKey: process.env.wenxin_api_key, // In Node.js defaults to process.env.BAIDU_API_KEY
    baiduSecretKey: process.env.wenxin_api_secret, // In Node.js defaults to process.env.BAIDU_SECRET_KEY
  })

  const messages = [new HumanMessage(message)]

  let res = await ernieTurbo.call(messages)
  return NextResponse.json({ resp: res })
}
