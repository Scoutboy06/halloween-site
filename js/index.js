function initObserver() {
  const sections = document.querySelectorAll('#main > section');

  const observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue;

        const id = entry.target.getAttribute('id');

        document
          .querySelector('#aside a.current')
          ?.classList?.remove('current');
        document
          .querySelector(`#aside a[href="#${id}"`)
          ?.classList?.add('current');
      }
    },
    {
      // threshold: 1,
      threshold: 0,
      rootMargin: '-50%',
    }
  );

  for (const section of sections) {
    observer.observe(section);
  }
}

window.addEventListener('scroll', () => {
  const isScrolled = window.scrollY > window.innerHeight * 0.8;
  const cList = document.querySelector('#nav').classList;

  if (isScrolled) cList.add('filled');
  else cList.remove('filled');
});

window.addEventListener('load', () => {
  initObserver();
});
