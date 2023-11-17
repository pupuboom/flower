import { useAppContext } from '@/components/AppContext'
import { Table } from 'antd'
import type { ColumnsType } from 'antd/es/table'
import type { TableRowSelection } from 'antd/es/table/interface'
import { useMemo, useState } from 'react'

interface DataType {
  key: React.Key
  text: string
  believe: number
  area: string
}

const columns: ColumnsType<DataType> = [
  {
    title: '文本',
    dataIndex: 'text',
  },
  {
    title: '置信度',
    dataIndex: 'believe',
  },
  {
    title: '坐标',
    dataIndex: 'area',
  },
]

const OcrTable = () => {
  const [selectedRowKeys, setSelectedRowKeys] = useState<React.Key[]>([])
  const {
    state: { ocrRes, ocrTableLoading },
  } = useAppContext()

  const data = useMemo(() => {
    const data: DataType[] = []
    console.log(ocrRes)
    for (let i = 0; i < ocrRes.length; i++) {
      data.push({
        key: i,
        text: ocrRes[i][1][0],
        believe: ocrRes[i][1][1],
        area: `[[${ocrRes[i][0][0][0]}, ${ocrRes[i][0][0][1]}], [${ocrRes[i][0][1][0]}, ${ocrRes[i][0][1][1]}], [${ocrRes[i][0][2][0]}, ${ocrRes[i][0][2][1]}], [${ocrRes[i][0][3][0]}, ${ocrRes[i][0][3][1]}]]`,
      })
    }
    return data
  }, [ocrRes])

  const onSelectChange = (newSelectedRowKeys: React.Key[]) => {
    console.log('selectedRowKeys changed: ', newSelectedRowKeys)
    setSelectedRowKeys(newSelectedRowKeys)
  }

  const rowSelection: TableRowSelection<DataType> = {
    selectedRowKeys,
    onChange: onSelectChange,
    selections: [
      Table.SELECTION_ALL,
      Table.SELECTION_INVERT,
      Table.SELECTION_NONE,
      {
        key: 'odd',
        text: 'Select Odd Row',
        onSelect: (changeableRowKeys) => {
          let newSelectedRowKeys = []
          newSelectedRowKeys = changeableRowKeys.filter((_, index) => {
            if (index % 2 !== 0) {
              return false
            }
            return true
          })
          setSelectedRowKeys(newSelectedRowKeys)
        },
      },
      {
        key: 'even',
        text: 'Select Even Row',
        onSelect: (changeableRowKeys) => {
          let newSelectedRowKeys = []
          newSelectedRowKeys = changeableRowKeys.filter((_, index) => {
            if (index % 2 !== 0) {
              return true
            }
            return false
          })
          setSelectedRowKeys(newSelectedRowKeys)
        },
      },
    ],
  }
  return (
    <Table
      rowSelection={rowSelection}
      columns={columns}
      dataSource={data}
      scroll={{ y: 240 }}
      loading={ocrTableLoading}
    />
  )
}

export default OcrTable
