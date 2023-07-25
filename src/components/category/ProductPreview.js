
export default function (props) {

    return (

        <a href={"/product-page/"+props.slug}>
            <div className="product-preview">
                <img src={props.categoryImage.mobile} alt={props.name}></img>

                <div className={"container grid gap-200 " + `${(props.id + 1) % 2 ? "product-preview-reverse" : ''}`}  >
                    {props.new ? <span>NEW PRODUCT</span> : false}
                    <h4>{props.name}</h4>
                    <p>{props.description}
                    </p>
                    <button data-product-btn={props.slug} className="btn1 btn" >See Product</button>
                </div>
            </div>
        </a>
    )
}
