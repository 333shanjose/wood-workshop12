import React,{useEffect,useState}from 'react'
import { FaPhoneAlt,FaFacebookF,FaGooglePlusG,FaLinkedinIn,FaTwitter,FaRegEnvelope,FaSearch,FaBabyCarriage} from "react-icons/fa";
import axios from 'axios'
function Header2() {
  
    
const [scrollPosition, setScrollPosition] = useState(0);
const[products,setProducts]=useState([])
const[totale,setTotale]=useState('')

const handleScroll = () => {
  const position = window.pageYOffset;                           
  setScrollPosition(position);
}
  useEffect(() => {
    axios.get('http://localhost:4002/cart-pages').then((res)=>{
        setProducts(res.data.cart)
        console.log(products)
        
      })
      axios.get('http://localhost:4002/totals').then((res)=>{
        console.log(res)
        setTotale(res.data)
    })
      window.addEventListener("scroll", handleScroll);
      return () => {
        window.removeEventListener("scroll", handleScroll);
      }
  })
return (
  <div>
     <header class={`rows header navbar-static-top slideIn affix-top animated ${scrollPosition > 50 ? "fadeInDown affix animated" : ""}`} id="main_navbar">
  <div class="containers">
      <div class="rows m0 social-info">
          <ul class="social-icon">
              <li><a href="#"><FaFacebookF /></a></li>
              <li><a href="#"><FaTwitter/></a></li>
              <li><a href="#"><FaGooglePlusG/></a></li>
              <li><a href="#"><FaLinkedinIn/></a></li>
              <li class="tel"><a href="tel:+1234567890"><FaPhoneAlt/> + (123) 456 7890 </a></li>
              <li class="email"><a href="#"><FaRegEnvelope/> info@woodworkshop</a></li>
          </ul>
      </div>
  </div>
 <div class="logo_part">
      <div class="logo">
          <a href="/" class="brand_logo">
              <img src="images/header/logo.png" alt="logo image"/>
          </a>
      </div>
  </div>
  <div class="main-menu">
      <nav class="navbar navbar-default">
          <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#main_nav" aria-expanded="false">
              <span class="sr-only">Toggle navigation</span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
          </button>
          <div class="menu rows m0">                
              <ul class="nav navbar-nav navbar-right visible-sm">
                  <li class="dropdown">
                      <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false"><i class="icon icon-Search"></i></a>
                      <ul class="dropdown-menu">
                          <li>
                              <form action="#" method="get" class="search-form">
                                  <input type="search" class="form-control" placeholder="Type and Enter"/>
                              </form>
                          </li>
                      </ul>
                  </li>
                  <li class="dropdown">
                      <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">
                      <i class="icon icon-ShoppingCart"></i></a>
                      <ul class="dropdown-menu cart-box ">
                          <li class="cart-header">
                              <h4>You have 2 Items In Your Cart.</h4>
                          </li>
                          <li class="cart-content">
                              <div class="img-box">
                                  <img src="images/header/cart.jpg" alt="Awesome Image"/>
                              </div>
                              <div class="content">
                                  <a href="product"><h5>BATTERY SCREWDRIVER</h5></a>
                                  <div class="rating">
                                      <i class="fa fa-star"></i>
                                      <i class="fa fa-star"></i>
                                      <i class="fa fa-star"></i>
                                      <i class="fa fa-star"></i>
                                      <i class="fa fa-star-o"></i>
                                  </div>
                                  <ul class="price">
                                      <li><span class="or-price">$39.99</span></li>
                                      <li><span class="sale-price">$24.5</span></li>
                                  </ul>
                              </div>
                          </li>
                          <li class="cart-content">
                              <div class="img-box">
                                  <img src="images/header/cart.jpg" alt="Awesome Image"/>
                              </div>
                              <div class="content">
                                  <a href="product"><h5>BATTERY SCREWDRIVER</h5></a>
                                  <div class="rating">
                                      <i class="fa fa-star"></i>
                                      <i class="fa fa-star"></i>
                                      <i class="fa fa-star"></i>
                                      <i class="fa fa-star"></i>
                                      <i class="fa fa-star-o"></i>
                                  </div>
                                  <ul class="price">
                                      <li><span class="or-price">$39.99</span></li>
                                      <li><span class="sale-price">$24.5</span></li>
                                  </ul>
                              </div>
                          </li>
                          <li class="cart-footer">
                              <div class="total-price">
                                  <h4>Total price: <span>$73.5</span></h4>
                              </div>
                              <div class="checkout-box submit">
                                  <a class="" href="#">Checkout <i class="fa fa-shopping-cart"></i></a>
                              </div>
                          </li>
                      </ul>
                  </li>
              </ul>
              <div class="collapse navbar-collapse" id="main_nav">
                  <ul class="nav navbar-nav">
                      <li class="dropdown">
                          <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Home</a>
                          <ul class="dropdown-menu">
                              <li><a href="/">Home Default</a></li>
                              <li><a href="/landingpage">landing page</a></li>
                          </ul>
                      </li>
                      <li className="active"><a href="/about">About Us</a></li>
                      <li class="dropdown">
                          <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">services</a>
                          <ul class="dropdown-menu">
                              <li><a href="/services">services</a></li>
                              <li><a href="/services-2">services 2</a></li>
                          </ul>
                      </li>
                      
                      
                      <li class="dropdown">
                          <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Shop</a>
                          <ul class="dropdown-menu">
                              <li><a href="/shop">Shop</a></li>
                              <li><a href="/cart">Cart Page</a></li>
                              <li><a href="/checkout">Checkout</a></li>
                          </ul>
                      </li>
                      <li><a href="/contact">contact us</a></li>
                  </ul>
                  <ul class="nav navbar-nav navbar-right hidden-xs hidden-sm">
                      <li class="dropdown">
                          <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false"><i class="icon icon-Search"></i></a>
                          <ul class="dropdown-menu">
                              <li>
                                  <form action="#" method="get" class="search-form">
                                      <input type="search" class="form-control" placeholder="Type and Enter"/>
                                  </form>
                              </li>
                          </ul>
                      </li>
                      <li class="dropdown">
                          <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">
                          <i class="icon icon-ShoppingCart"></i></a>
                          <ul class="dropdown-menu cart-box ">
                              <li class="cart-header">
                                  <h4>You have 3 Items In Your Cart.</h4>
                              </li>
                              {products.map((p)=>{
                                   return (

                              <li class="cart-content">
                                  <div class="img-box">
                                      <img src={"images/"+p.product.filename} alt="Awesome Image"/>
                                  </div>
                                  <div class="content">
                                      <a href="product"><h5>BATTERY SCREWDRIVER</h5></a>
                                      <div class="rating">
                                          <i class="fa fa-star"></i>
                                          <i class="fa fa-star"></i>
                                          <i class="fa fa-star"></i>
                                          <i class="fa fa-star"></i>
                                          <i class="fa fa-star-o"></i>
                                      </div>
                                      <ul class="price">
                                          <li><span class="or-price">${p.product.price}</span></li>
                                      </ul>
                                  </div>
                              </li>
                               )
                            })}
                              
                              
                              <li class="cart-footer">
                                  <div class="total-price">
                                      <h4>Total : <span>{totale}</span></h4>
                                  </div>
                                  <div class="checkout-box submit">
                                      <a class="" href="/checkout">Checkout <i class="fa fa-shopping-cart"></i></a>
                                  </div>
                              </li>
                          </ul>
                      </li>
                  </ul>
              </div>
          </div>
      </nav>
  </div>
</header>
  </div>
    
  )
}

export default Header2