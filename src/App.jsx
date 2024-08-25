import Footer from "./components/Footer"
import Header from "./components/Header"
// import Quotes from "./components/Home/Quotes"
import MainContent from "./components/Content/MainContent"

export default function App() {
  return <div className="bg-base-300 ">
    <Header />

    {/* <Quotes /> */}
    <MainContent />

    <Footer />
  </div>
}