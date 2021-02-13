const offset = 100;
const scrollUp = document.querySelector('.scroll-up');
const scrollUpSvgPath = document.querySelector('.scroll-upSvgPath');
const pathLength = scrollUpSvgPath.getTotalLength();

scrollUpSvgPath.style.strokeDasharray = `${pathLength} ${pathLength}`;
scrollUpSvgPath.style.transition = 'stroke-dashoffset 20ms';

const getTop = () => window.pageYOffset || document.documentElement.scrollTop;

const updateDashoffset = () => {
  const height = document.documentElement.scrollHeight - window.innerHeight;
  const dashoffset = pathLength - (getTop() * pathLength / height)
  scrollUpSvgPath.style.strokeDashoffset = dashoffset;
};

window.addEventListener('scroll', () => {
  updateDashoffset();

  if(getTop() > offset){
    scrollUp.classList.add('scroll-up--active')
  }else{
    scrollUp.classList.remove('scroll-up--active')
  }
});

scrollUp.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});

const switchButton = document.querySelector('.switch input[type="checkbox"]')

const THEME = 'theme'
const LIGHT = 'light'
const DARK = 'dark'

window.addEventListener('load', () => {
  const theme = localStorage.getItem(THEME)

  if (theme === DARK) {
    document.documentElement.className = 'dark-theme'
    switchButton.checked = true
  } else {
    document.documentElement.className = 'light-theme'
  }
  
})

switchButton.addEventListener('change', () => {
  if (switchButton.checked) {
    document.documentElement.className = 'dark-theme'
    localStorage.setItem(THEME, DARK)
  } else {
    document.documentElement.className = 'light-theme'
    localStorage.setItem(THEME, LIGHT)
  }

})