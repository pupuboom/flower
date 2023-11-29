import { NextRequest, NextResponse } from 'next/server'
import { ChatBaiduWenxin } from 'langchain/chat_models/baiduwenxin'
import { HumanMessage } from 'langchain/schema'
import { StringOutputParser } from 'langchain/schema/output_parser'
import { sleep } from '@/lib/utils'

const parser = new StringOutputParser()

export async function POST(request: NextRequest) {
  const { message } = await request.json()
  const encoder = new TextEncoder()

  // Default model is ERNIE-Bot-turbo
  const ernieTurbo = new ChatBaiduWenxin({
    baiduApiKey: process.env.wenxin_api_key, // In Node.js defaults to process.env.BAIDU_API_KEY
    baiduSecretKey: process.env.wenxin_api_secret, // In Node.js defaults to process.env.BAIDU_SECRET_KEY
    cache: true,
  })

  const messages = [new HumanMessage(message)]
  const stream = new ReadableStream({
    async start(controller) {
      // let res = await ernieTurbo.call(messages, {
      //   callbacks: [
      //     {
      //       handleLLMNewToken(token: string) {
      //         controller.enqueue(encoder.encode(token))
      //       },
      //     },
      //   ],
      // })
      const st = await ernieTurbo.pipe(parser).stream(messages)
      for await (let chunk of st) {
        for (let i = 0; i < chunk.length; i++) {
          await sleep(50)
          controller.enqueue(encoder.encode(chunk[i]))
        }
        // console.log('chunk', chunk)
      }
      controller.close()
    },
  })
  return new Response(stream)
}
