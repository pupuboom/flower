import Footer from '@/components/Home/Footer'
import Header from '@/components/Home/Header'
import Main from '@/components/Home/Main'

export default function Home() {
  return (
    <div className="h-full w-full flex flex-col min-h-[100vh]">
      <Header />
      <Main />
      <Footer />
    </div>
  )
}
