import { useEffect, useState } from 'react';
import './style.css';

const Carousel = () => {
  const pics = [
    'url(spring-1.jpg)',
    'url(summer-1.jpg)',
    'url(autumn-1.jpg)',
    'url(winter-1.jpg)',
    'url(aurora-1.jpg)',
    'url(spring-2.jpg)',
    'url(summer-2.jpg)',
    'url(autumn-2.jpg)',
    'url(winter-2.jpg)',
    'url(aurora-2.jpg)',
  ];

  const [mainIndex, setMainIndex] = useState({
    main: 0,
    second: 1,
    third: 2,
    fourth: 3,
    fifth: 4,
    sixth: 5,
    seventh: 6,
    eighth: 7,
    ninth: 8,
    tenth: 9
});

  const setIndex = (prev) => (prev < pics.length - 1) ? prev + 1 : 0;

  useEffect(() => {
    const indexInterval = setInterval(() => {
      setMainIndex((prev) => ({
        main: setIndex(prev.main),
        second: setIndex(prev.second),
        third: setIndex(prev.third),
        fourth: setIndex(prev.fourth),
        fifth: setIndex(prev.fifth),
        sixth: setIndex(prev.sixth),
        seventh: setIndex(prev.seventh),
        eighth: setIndex(prev.eighth),
        ninth: setIndex(prev.ninth),
        tenth: setIndex(prev.tenth),
      }))
    }, 5000);

    return () => clearInterval(indexInterval);
  })

  return (
    <section id="photo-grid">
      <div id="main" className="photo-grid-area" style={{ backgroundImage: pics[mainIndex.main] }}></div>
      <div id="second" className="photo-grid-area" style={{ backgroundImage: pics[mainIndex.second] }}></div>
      <div id="third" className="photo-grid-area" style={{ backgroundImage: pics[mainIndex.third] }}></div>
      <div id="fourth" className="photo-grid-area" style={{ backgroundImage: pics[mainIndex.fourth] }}></div>
      <div id="fifth" className="photo-grid-area" style={{ backgroundImage: pics[mainIndex.fifth] }}></div>
      <div id="sixth" className="photo-grid-area" style={{ backgroundImage: pics[mainIndex.sixth] }}></div>
      <div id="seventh" className="photo-grid-area" style={{ backgroundImage: pics[mainIndex.seventh] }}></div>
      <div id="eighth" className="photo-grid-area" style={{ backgroundImage: pics[mainIndex.eighth] }}></div>
      <div id="ninth" className="photo-grid-area" style={{ backgroundImage: pics[mainIndex.ninth] }}></div>
      <div id="tenth" className="photo-grid-area" style={{ backgroundImage: pics[mainIndex.tenth] }} ></div>
    </section>
  )
};

export default Carousel;