d=document;w=window;c=console;

const options = {
  root: null, // it is the viewport, that's the default
  threshold: .8, // that's the default
  rootMargin: "32px 100px -40px 100px" // that's the default
};

const observer2 = new IntersectionObserver(function(entries, observer2){
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      c.log(entry.target)
      entry.target.classList.remove('alt')
      c.log("activate!");
      observer2.unobserve(entry.target);
    }
  })
}, options);

// observer.observe(detector);
d.querySelectorAll('.moveManagerPantallas').forEach(e => {
  observer2.observe(e);
})
