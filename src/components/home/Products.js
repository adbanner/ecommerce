
export default function Products() {

  return (
    <section className="products hidden-">

      {/* Card 1 */}
      <a href="/product-page/zx9-speaker">
        <div className="product-card-1 hidden-">
          <div className="image">
            <img src="./assets/home/desktop/image-speaker-zx9.png" alt=""></img>
          </div>

          <div className="product-card-info grid gap-300">
            <h2>ZX9<br />SPEAKER</h2>
            <p>Upgrade to premium speakers that are phenomenally built to deliver truly remarkable sound.</p>
            <button className="btn2 active">See Product</button>
          </div>
        </div>
      </a>

      {/* Card 2 */}
      <a href="/product-page/zx7-speaker">
        <div className="product-card-2 ">
          <div className="card-div">
            <h4>ZX7 SPEAKER</h4>
            <button className="btn2">See Product</button>
          </div>
        </div>
      </a>

      {/* Card 3 */}
      <a href="/product-page/yx1-earphones">
        <div className="product-card-3 ">
          <img alt="" className="img"></img>

          <div className="product-card-3-div ">
            <div className="card-div">
              <h4>YX1 EARPHONES</h4>
              <button className="btn2">See Product</button>
            </div>
          </div>

        </div>
      </a>
    </section>
  )
}