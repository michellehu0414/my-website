import '../scss/about.scss';

// import '../components/NavBar/NavBar';
import '../components/FaqAccordion/FaqAccordion';
import '../components/ToolboxSwiper/ToolboxSwiper';
import '../components/Scrollable/scrollable';
import '../components/ScrollButton/scroll-button';

import NavBar from '../components/NavBar/NavBar';
import BackToTopButton from '../components/BackToTopButton/BackToTopButton';
import Footer from '../components/Footer/Footer';
import ProgressBar from '../components/ProjectProgressBar/ProjectProgressBar';

document.addEventListener('DOMContentLoaded', () => {
    BackToTopButton();
    Footer();
    NavBar();
    ProgressBar();
});
