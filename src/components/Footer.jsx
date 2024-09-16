import { Logo, ArrowRight, GooglePlay, Apple } from '../utils/icons.util';

export default function Footer() {
  return (
    <div className="footer">
      <div className="container">
        <div className="clicon">
          <div className="logo">
            <Logo />
            <span>CLICON</span>
          </div>
          <div className="contactinfo">
            <div className="phonenumber">
              <label htmlFor="">Customer Supports:</label>
              <div><a href="tel:+6295550129" style={{textDecoration: "none", color: "#FFF"}}>(629) 555-0129</a></div>
            </div>
            <div className='address'>4517 Washington Ave. Manchester, Kentucky 39495</div>
            <div className="email"><a href="mailto:" style={{textDecoration: "none", color: "#FFF"}}>info@kinbo.com</a></div>
          </div>
        </div>
        <div className="topcategory">
          <label htmlFor="">Top Category</label>
          <ul>
            <li><a href="">Computer & Laptop</a></li>
            <li><a href="">SmartPhone       </a></li>
            <li><a href="">Headphone        </a></li>
            <li><a href="">Accessories      </a></li>
            <li><a href="">Camera & Photo   </a></li>
            <li><a href="">TV & Homes       </a></li>
            <li>
              <a href="">
                <span>Browse All Product</span>
                <ArrowRight />
              </a>
            </li>
          </ul>
        </div>
        <div className="quicklinks">
          <label htmlFor="">Quick links</label>
          <ul>
            <li><a href="">Shop Product </a></li>
            <li><a href="">Shoping Cart </a></li>
            <li><a href="">Wishlist     </a></li>
            <li><a href="">Compare      </a></li>
            <li><a href="">Track Order  </a></li>
            <li><a href="">Customer Help</a></li>
            <li><a href="">About Us     </a></li>
          </ul>
        </div>
        <div className="downloadapp">
          <label htmlFor="">Download APP</label>
          <div className="links">
            <a href="" style={{textDecoration: "none"}}>
              <div className="mobileapp">
                <GooglePlay />
                <div className="info">
                  <label htmlFor="">Get it now</label>
                  <span>Google Play</span>
                </div>
              </div>
            </a>
            <a href="" style={{textDecoration: "none"}}>
              <div className="mobileapp">
                <Apple />
                <div className="info">
                  <label htmlFor="">Get it now</label>
                  <span>App Store</span>
                </div>
              </div>
            </a>
          </div>
        </div>
        <div className="populartag">
          <label htmlFor="">Popular Tag</label>
          <div className="tag">
            <a href="">Game         </a>
            <a href="">iPhone       </a>
            <a href="">TV           </a>
            <a href="">Asus Laptops </a>
            <a href="">Macbook      </a>
            <a href="">SSD          </a>
            <a href="">Graphics Card</a>
            <a href="">Power Bank   </a>
            <a href="">Smart TV     </a>
            <a href="">Speaker      </a>
            <a href="">Tablet       </a>
            <a href="">Microwave    </a>
            <a href="">Samsung      </a>
          </div>
        </div>
      </div>
      <div className="copyright">
        <p>Kinbo - eCommerce Template © 2021. Design by Templatecookie</p>
      </div>
    </div>
  );
}