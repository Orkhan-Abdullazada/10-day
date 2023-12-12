import React from 'react'

function Header() {
  return (
    <div className='Header__middle'> 
    <div className="img">
        
       <img src="https://public-assets.envato-static.com/assets/logos/envato_market-dde916a48af7413e54aa058fe7ae6856752fca799da4bec355f00aea904bfa19.svg" alt="" />
    </div>
    <div className="middle">
        <ul>
            <li>
                <a href="">Forums</a>
            </li>
            <li>
                <a href="">Start Selling</a>
            </li>
            <li>
                <a href="">Our Products</a>
            </li>
        </ul>
     
    </div>
       <i class="fa-solid fa-cart-shopping"></i>
        <ul>
            <li>
                <a href="">Sign in</a>
            </li>
        </ul>
    </div>
  )
}

export default Header