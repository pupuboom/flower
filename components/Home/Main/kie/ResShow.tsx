import { Tabs, Tab, Card, CardBody } from '@nextui-org/react'
import TableShow from './TableShow'
import OcrTable from './OcrTable'

const ResShow = () => {
  return (
    <Tabs aria-label="Options">
      <Tab key="music" title="OCR">
        <Card>
          <CardBody className="px-3">
            <OcrTable />
          </CardBody>
        </Card>
      </Tab>
      <Tab key="photos" title="表格" className="overflow-y-auto">
        <Card>
          <CardBody className="px-3">
            <TableShow />
          </CardBody>
        </Card>
      </Tab>
      <Tab key="videos" title="Text">
        <Card>
          <CardBody>
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
            officia deserunt mollit anim id est laborum.
          </CardBody>
        </Card>
      </Tab>
    </Tabs>
  )
}

export default ResShow
