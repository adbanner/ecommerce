
import { useEffect, useState } from "react";

// Header
import Header from "./components/home/Header";
import MobMenu from "./components/home/MobMenu"

// Pages
import Home from "./components/Home"
import Category from "./components/Category"
import ProductPage from "./components/ProductPage";
import Checkout from "./components/Checkout"
import OrderConfirmation from "./components/checkout/OrderConfirmation";

//Footer
import Footer from "./components/home/Footer";
import Cart from "./components/home/Cart"

// Components
import ClickEvents from "./components/ClickEvents"
import { Context } from "./components/Context";
import jsonData from "./data.json"
import { Route, Routes} from "react-router-dom";



function App() {
  const root = "/"
  const [page, setPage] = useState("home")
  const [category, setCategory] = useState("headphones")
  const [product, setProduct] = useState("yx1-earphones")

  const [cart, setCart] = useState(JSON.parse(localStorage.getItem("cart")) || [])
  const [data, setData] = useState((jsonData))
  const [, updateState] = useState()



  useEffect(() => {
    window.addEventListener('popstate', getUrl);
    getUrl()

  }, [])


  // Get url 
  const getUrl = () => {
    let url = window.location.href.split("/")
    if (url[1]) {
      url = url[1].split("/")
    }
    else {
      url = ["home"]
      return;
    }
    console.log(url)
    // Check page
    if (url[0] == "home") {
      setPage(url[0])
    }
    if (url[0] === "checkout" && cart.length) {
      setPage(url[0])
    } else {
      setPage("home")
    }
    if (url[0] === "category") {
      setPage(url[0])
      setCategory(url[1])
    }
    if (url[0] === "product-page") {
      setPage(url[0])
      setProduct(url[1])
    }
  }

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart))
  }, [cart])



  // Add item to cart
  const addToCart = (id, count) => {
    let obj

    // Get item index from data by ID
    let itemId = cart.findIndex((el) => el.id === id)
    if (itemId >= 0) {
      obj = cart[itemId]
      obj.count += count
      console.log(obj.count)

    } else {
      obj = data.find((el) => el.id === id)

      // Add to cart object
      cart.push({
        "id": obj.id,
        "slug": obj.slug,
        "name": obj.name,
        "image": obj.image.mobile,
        "price": obj.price,
        "count": count
      })
    }
    updateState(Math.random())
    localStorage.setItem("cart", JSON.stringify(cart))
  }

  useEffect(() => {
    //addToCart(3, 1)
  }, [])





  return (

    <Context.Provider value={{ updateState, data, page, setPage, category, setCategory, product, setProduct, cart, setCart, addToCart }}>

      <div className="App">



        <ClickEvents />
        <div className="contentWrapper">
          <Header />
        </div>
        {/* <Nav /> */}
        <MobMenu />
        <Cart />
        <OrderConfirmation />
        <div data-fader className="active- hidden-"></div>
        <main data-main>

          <Routes>

              <Route exact path="/" element={<Home />}></Route>
              <Route path="/home" element={<Home />} ></Route>
              <Route path="/category/:category" element={<Category />}></Route>
              <Route exact path="/product-page/:product" element={<ProductPage />}></Route>
              <Route path="/checkout" element={<Checkout />}></Route>
          </Routes>
        </main>

        <Footer />
      </div>
    </Context.Provider>


  );
}

export default App;
