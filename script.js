(() => {
  const eachPageList = document.querySelectorAll('div.eachPage');
  let flag = false;
  eachPageList.forEach((eachPage) => {
    if (flag) {
      eachPage.style.display = 'none';
    } else {
      eachPage.style.display = 'flex';
    }
    flag = true;
  });
  // console.log(
  //   'Height:' + document.querySelector('.carouselContainer').offsetHeight
  // );
  // let compHeight = getComputedStyle(
  //   document.querySelector('.carouselContainer')
  // ).height;
  // console.log(compHeight);
  setTimeout(() => {
    document
      .querySelector('.leftIcon')
      .style.setProperty(
        'top',
        `${parseInt(
          document.querySelector('.carouselContainer').offsetHeight / 2
        )}px`
      );
    document
      .querySelector('.rightIcon')
      .style.setProperty(
        'top',
        `${parseInt(
          document.querySelector('.carouselContainer').offsetHeight / 2
        )}px`
      );
  }, 100);
})();

document.querySelector('.leftIcon').addEventListener('click', (e) => {
  e.preventDefault();
  let currentSlide;
  const eachPageList = document.querySelectorAll('div.eachPage');
  eachPageList.forEach((eachPage, idx) => {
    if (eachPage.style.display == 'flex') {
      currentSlide = idx;
    }
  });
  eachPageList.forEach((eachPage, idx, allPage) => {
    if (currentSlide == idx) {
      eachPage.style.display = 'none';
    } else if (currentSlide == 0) {
      allPage[allPage.length - 1].style.display = 'flex';
    } else {
      allPage[currentSlide - 1].style.display = 'flex';
    }
  });
  e.stopPropagation();
});

document.querySelector('.rightIcon').addEventListener('click', (e) => {
  e.preventDefault();
  let currentSlide;
  const eachPageList = document.querySelectorAll('div.eachPage');
  eachPageList.forEach((eachPage, idx) => {
    if (eachPage.style.display == 'flex') {
      currentSlide = idx;
    }
  });
  eachPageList.forEach((eachPage, idx, allPage) => {
    if (currentSlide == idx) {
      eachPage.style.display = 'none';
    } else if (currentSlide == allPage.length - 1) {
      allPage[0].style.display = 'flex';
    } else {
      allPage[currentSlide + 1].style.display = 'flex';
    }
  });
  e.stopPropagation();
});

window.addEventListener('resize', (e) => {
  document
    .querySelector('.leftIcon')
    .style.setProperty(
      'top',
      `${parseInt(
        document.querySelector('.carouselContainer').offsetHeight / 2
      )}px`
    );
  document
    .querySelector('.rightIcon')
    .style.setProperty(
      'top',
      `${parseInt(
        document.querySelector('.carouselContainer').offsetHeight / 2
      )}px`
    );
});
// document.querySelector('.carouselContainer').addEventListener('resize', () => {
//   console.log(window.innerHeight);
//   console.log(window.innerWidth);
// });
