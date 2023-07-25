
export default function Categories() {
    
    return (
        <section className="categories hidden-">

        <div data-menu="category"  data-category="headphones" className="category-card">
          <img src="./assets/shared/desktop/image-category-thumbnail-headphones.png" alt=""></img>

          <p>HEADPHONES</p>
          <button className="btn3">
            Shop<span className="arrow-icon"></span>
          </button>
        </div>

        <div data-menu="category"  data-category="speakers" className="category-card">
          <img src="./assets/shared/desktop/image-category-thumbnail-speakers.png" alt=""></img>

          <p>SPEAKERS</p>
          <button className="btn3">
            Shop<span className="arrow-icon"></span>
          </button>
        </div>
        

        <div data-menu="category" data-category="earphones" className="category-card">
          <img src="./assets/shared/desktop/image-category-thumbnail-earphones.png" alt=""></img>

          <p>EARPHONES</p>
          <button className="btn3">
            Shop<span className="arrow-icon"></span>
          </button>
        </div>

      </section>
    )
}