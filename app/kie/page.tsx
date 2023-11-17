import Footer from '@/components/Home/Footer'
import Header from '@/components/Home/Header'
import FileParse from '@/components/Home/Main/kie/FileParse'

const page = () => {
  return (
    <>
      <Header />
      <div className="flex flex-col flex-1 px-2 ">
        <FileParse />
      </div>
      <Footer />
    </>
  )
}

export default page
