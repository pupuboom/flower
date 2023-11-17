'use client'
import { Timeline } from 'antd'
import { Spinner, Divider } from '@nextui-org/react'
import { useState } from 'react'
import ResShow from './ResShow'
import FileUpload from './FileUpload'
import { Separator } from '@/components/ui/separator'
import { useAppContext } from '@/components/AppContext'

const FileParse = () => {
  const {
    state: { allLoading },
    dispatch,
  } = useAppContext()

  return (
    <div className="flex flex-1">
      <div className="flex flex-col space-y-4 py-5  border-r-1 basis-1/3">
        <FileUpload />
        <Separator />
        <div className="px-16 pt-8 space-y-6">
          <span>进度</span>
          <Timeline
            pending={allLoading}
            items={[
              {
                children: 'Create a services site 2015-09-01',
              },
              {
                children: 'Solve initial network problems 2015-09-01',
              },
              {
                children: 'Technical testing 2015-09-01',
              },
            ]}
          />
        </div>
      </div>

      <div className="basis-2/3 flex flex-col px-3 pt-8">
        <ResShow />
      </div>
    </div>
  )
}

export default FileParse
