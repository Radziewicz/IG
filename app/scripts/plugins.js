const nav = document.querySelector('nav');

function changeClassOnScroll(element) {
  // if(this.scrollY <= 100) nav.className = 'nav'; else nav.className = 'nav nav--scrolled';
  // you could write if-else in with terenary operators 
  // read more:
  // https://www.thoughtco.com/javascript-by-example-use-of-the-ternary-operator-2037394
  nav.className = (this.scrollY <= 100)
    ? 'nav'
    : 'nav nav--scrolled';
}

