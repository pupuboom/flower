'use client'

import { useAppContext } from '@/components/AppContext'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { ActionType } from '@/reducer/AppReducer'
import { useState } from 'react'

const FileUpload = () => {
  const [file, setFile] = useState<any>()
  const {
    state: { ocrTableLoading },
    dispatch,
  } = useAppContext()

  const handleFileChange = (e: any) => {
    setFile(e.target.files[0])
  }

  const handleUpload = async () => {
    dispatch({ type: ActionType.UPDATE, field: 'allLoading', value: true })
    dispatch({ type: ActionType.UPDATE, field: 'ocrTableLoading', value: true })
    const formData = new FormData()
    console.log('file:', file)
    formData.append('file', file)

    try {
      const response = await fetch('http://127.0.0.1:5000/api/ocr', {
        method: 'POST',
        body: formData,
      })

      if (response.ok) {
        console.log('File uploaded successfully!')
        const { res } = await response.json()
        console.log(res)
        if (res.length > 0) {
          dispatch({ type: ActionType.UPDATE, field: 'ocrRes', value: res[0] })
        }
      } else {
        console.error('File upload failed.')
      }
    } catch (error) {
      console.error('Error during file upload:', error)
    }
    dispatch({
      type: ActionType.UPDATE,
      field: 'ocrTableLoading',
      value: false,
    })
  }
  return (
    <div className="w-full">
      <div className="flex space-x-2 justify-start px-5 py-3">
        <Input type="file" onChange={handleFileChange} />
        <Button
          onClick={handleUpload}
          variant={'secondary'}
          className="hover:bg-gray-200">
          提交
        </Button>
      </div>
    </div>
  )
}

export default FileUpload
