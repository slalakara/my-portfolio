import adviceGeneratorApp from "@/app/img/adviceGeneratorApp.png"
import agecalc from "@/app/img/ageCalc.png"
import tipCalc from "@/app/img/tipCalc.png"
import helpSupport from "@/app/img/helpSupport.png"
import dinerestaurant from "@/app/img/dine-restaurant-ekrangor.png"
import singlePage from "@/app/img/single-page-design-ekrangor.png"
import news from "@/app/img/news.png"
import Typemaster from "@/app/img/typemaster.png"
import CoffeeRoasters from "@/app/img/coffeeRoasters.png"
import Saas from "@/app/img/saas-1.png"
import BlogPage from "@/app/img/blog-page-ekrangor.png"
import Stiller from "@/app/img/stiller-ekrangoruntusu.png"
import ArticlePrewiev from "@/app/img/article-prewiev.png"
import BlogPrewiev from "@/app/img/blog-prewiev-card-ekrgor.png"
import FaqsAccordion from "@/app/img/faqs-accordion-ekrangor.png"
import HeroShop from "@/app/img/hero-shop-ekrangor.png"
import OrderSummary from "@/app/img/order-summary-ekrangor.png"
import HeroSaas from "@/app/img/hero-saas-ekrangor.png"
import LandingPage from "@/app/img/landingPage.png"
import Image from "next/image"

export default function Project() {
  return(
    <div class="projects-container">
      <ul className="projects-list">
        <li>
          <a href="https://advice-generator-app-five-rose.vercel.app/">
            <Image src={adviceGeneratorApp} width={327} height={230} />
            <h4>Advice Generator App</h4>
          </a>
        </li>
        <li>
          <a href="https://age-calculator-phi-weld.vercel.app/">
            <Image src={agecalc} width={327} height={230} />
            <h4>Age Calculator</h4>
          </a>
        </li>
        <li>
          <a href="https://tip-calculator-liard-tau.vercel.app/">
            <Image src={tipCalc} width={327} height={230} />
            <h4>Tip Calculator</h4>
          </a>
        </li>
        <li>
          <a href="https://help-support-phi.vercel.app/">
            <Image src={helpSupport} width={327} height={230} />
            <h4>Help Support</h4>
          </a>
        </li>
        <li>
          <a href="https://landing-page-red-kappa.vercel.app/">
            <Image src={LandingPage} width={327} height={230} />
            <h4>Landing Page</h4>
          </a>
        </li>
        <li>
          <a href="https://dine-restaurant-six.vercel.app/">
            <Image src={dinerestaurant} width={327} height={230} />
            <h4>Dine Restaurant</h4>
          </a>
        </li>
        <li>
          <a href="https://single-page-portfolio-ebon.vercel.app/">
            <Image src={singlePage} width={327} height={230} />
            <h4>Single Page Design</h4>
          </a>
        </li>
        <li>
          <a href="https://news-seven-rosy.vercel.app/">
            <Image src={news} width={327} height={230} />
            <h4>News</h4>
          </a>
        </li>
        <li>
          <a href="https://typemaster-nu.vercel.app/">
            <Image src={Typemaster} width={327} height={230} />
            <h4>Typemaster</h4>
          </a>
        </li>
        <li>
          <a href="https://coffee-roasters-three.vercel.app/">
            <Image src={CoffeeRoasters} width={327} height={230} />
            <h4>Coffee Roasters</h4>
          </a>
        </li>
        <li>
          <a href="https://saas-lime-one.vercel.app/">
            <Image src={Saas} width={327} height={230} />
            <h4>Saas</h4>
          </a>
        </li>
        <li>
          <a href="https://blog-page-blond.vercel.app/">
            <Image src={BlogPage} width={327} height={230} />
            <h4>Blog Page</h4>
          </a>
        </li>
        <li>
          <a href="https://stiller-sila-karas-projects.vercel.app/">
            <Image src={Stiller} width={327} height={230} />
            <h4>Stiller</h4>
          </a>
        </li>
        <li>
          <a href="https://blog-prewiev.vercel.app/">
            <Image src={BlogPrewiev} width={327} height={230} />
            <h4>Blog Prewiev</h4>
          </a>
        </li>
        <li>
          <a href="https://article-prewiev-six.vercel.app/">
            <Image src={ArticlePrewiev} width={327} height={230} />
            <h4>Article Prewiev</h4>
          </a>
        </li>
        <li>
          <a href="https://blog-prewiev.vercel.app/">
            <Image src={FaqsAccordion} width={327} height={230} />
            <h4>Faqs Accordion</h4>
          </a>
        </li>
        <li>
          <a href="https://hero-shop-pi.vercel.app/">
            <Image src={HeroShop} width={327} height={230} />
            <h4>Hero Shop</h4>
          </a>
        </li>
        <li>
          <a href="https://order-summary-tan-zeta.vercel.app/">
            <Image src={OrderSummary} width={327} height={230} />
            <h4>Order Summary</h4>
          </a>
        </li>
        <li>
          <a href="https://hero-saas-ijaw.vercel.app/">
            <Image src={HeroSaas} width={327} height={230} />
            <h4>Hero Saas</h4>
          </a>
        </li>
      </ul>
    </div>
  )
}