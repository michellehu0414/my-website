import '../scss/postup.scss';
import '../components/AutoplayVideo/autoplay-video';
// import '../components/Carousel/carousel';
import '../components/ScrollButton/scroll-button';
import '../components/Scrollable/scrollable';
// src/js/postup.js
import { initializeAccordion } from '../components/ProjectAccordion/ProjectAccordion';

// Initialize accordion functionality
initializeAccordion();

// import '../components/SwipeableCarouselPostUp/SwipeableCarouselPostUp';
import '../components/Tabs/tabs';

// postup.js
function initializePostUpPage() {
    // Your code to initialize the post up page goes here
    console.log("Post Up Page Initialized!");
}

initializePostUpPage();

import BackToTopButton from '../components/BackToTopButton/BackToTopButton';
import ProgressBar from '../components/ProjectProgressBar/ProjectProgressBar';
import NavBar from '../components/NavBar/NavBar';
import NavBarBackground from '../components/NavBarBackground/NavBarBackground';

document.addEventListener('DOMContentLoaded', () => {
    BackToTopButton();
    ProgressBar();
    NavBar();
    NavBarBackground();
});