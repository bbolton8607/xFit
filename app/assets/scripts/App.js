import '../styles/styles.css'
import 'lazysizes'
import MobileMenu from './modules/MobileMenu'
import RevealOnScroll from './modules/RevealOnScroll'
import ScrollToTopBtn from './modules/ScrollToTopBtn'
import StickyHeader from './modules/StickyHeader'
import Parallax from './modules/Parallax'

new RevealOnScroll(document.querySelectorAll(".features__content"), 75)
new RevealOnScroll(document.querySelectorAll(".testimonials__content--card"), 75)
new RevealOnScroll(document.querySelectorAll(".membership__image"), 80)
new RevealOnScroll(document.querySelectorAll(".testimonials__footer--img--logo"), 60)

let mobileMenu = new MobileMenu();
let stickyHeader = new StickyHeader();
let scrollToTopBtn = new ScrollToTopBtn();
let parallax = new Parallax();

if (module.hot) {
    module.hot.accept()
}