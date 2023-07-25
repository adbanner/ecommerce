
import { Context } from "./Context"
import { useContext, useEffect, useState } from "react"
import ProductPreviewDetail from "./category/ProductPreviewDetail";
import Categories from "../components/home/Categories";
import About from "../components/home/About";

import GoBackBtn from "./buttons/GoBackBtn"
import {useParams} from "react-router-dom"


export default function ProductPage() {
  const { data} = useContext(Context)
  const {product} = useParams()
  return (
    <div className="wrapper grid gap-main">
      <div className="grid gap-400">

        <GoBackBtn/>
        <div className="products-div grid">
          {data.filter(el => el.slug == product).map((obj, id) =>
            <ProductPreviewDetail key={obj.id} id={id} {...obj} />
          )}
        </div>
      </div>
      <Categories />
      <About />
    </div>
  )
}