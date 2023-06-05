import "./product.css"
const Product = (custom) => {
    function Click (){
        return (
            alert(`Product ${custom.productName} dengan harga ${custom.productPrice} merupakan produk dengan kualitas terbaik`
            )      
        )
      }

    return (
        <div className="bungkus" onClick={Click}>
            <div className="produk">
            <img src={custom.urlImage} alt="" className="image"/>
            <p>{custom.id}</p>
            <p>{custom.productName}</p>
            <h2>{custom.productPrice}</h2>
            </div>
        </div>
      
    )
  }


  
  export default Product