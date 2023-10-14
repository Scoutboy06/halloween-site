window.addEventListener('scroll', () => {
  const isScrolled = window.scrollY > window.innerHeight * 0.8;
  const cList = document.querySelector('#nav').classList;

  if (isScrolled) cList.add('filled');
  else cList.remove('filled');
});
