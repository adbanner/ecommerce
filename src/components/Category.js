import { Context } from "./Context"
import { useContext } from "react"
import ProductPreview from "./category/ProductPreview"
import Categories from "../components/home/Categories";
import About from "../components/home/About";
import { useParams } from "react-router-dom";


export default function Category() {
    
  const {data} = useContext(Context)
  const {category} = useParams()
  console.log(category)
    return (
        <section className="category">
        <div className="category-header">
          <h4>{category}</h4>
        </div>
        <div className="wrapper grid gap-main">
          <div className="products-div grid">
           { data.filter(el=> el.category==category).map((obj,id)=>
            <ProductPreview key={obj.id} id={id} {...obj}/>
           )}
          
          </div>
          <Categories />
          <About />
        </div>
        <div></div>
      </section>
    )
}