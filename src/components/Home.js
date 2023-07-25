import Hero from "../components/home/Hero"
import Categories from "../components/home/Categories";
import Products from "../components/home/Products";
import About from "../components/home/About";


export default function Home() {

  return (
    <>
      <Hero />
      <div className="wrapper grid gap-main">
        <Categories />
        <Products />
        <About />
      </div>
    </>
  )
}