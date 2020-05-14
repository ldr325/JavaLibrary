var rellax = new Rellax('.rellax');

let choreographer = new Choreographer(config);
choreographer.runAnimationsAt(position);

let choreographer = new Choreographer({
  animations: [
    {
      range: [-1, 1000],
      selector: '#box',
      type: 'scale',
      style: 'opacity',
      from: 0,
      to: 1
    }
  ]
})

window.addEventListener('scroll', () => {
  choreographer.runAnimationsAt(window.pageYOffset)
})
