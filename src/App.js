import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

let styles = {
    margin: 'auto',
    width: '500px'
  };
  
function App() {
  return (
<div style={styles}>
<Carousel>
<div>
  <img src="https://www.eatright.org/-/media/eatrightimages/health/lifestyle/travel/quickguidetofoodsafetywhiletravelingintheus.jpg" alt="traveling"/>
  <p className='legend'>Traveling</p>
</div>
<div>
<img src="https://res.klook.com/image/upload/fl_lossy.progressive,q_65/c_fill,w_480,h_384/cities/jrfyzvgzvhs1iylduuhj.jpg" alt="Hong Kong" />
<p className="legend">Hong Kong</p>
</div>
<div>
<img src="https://res.klook.com/image/upload/fl_lossy.progressive,q_65/c_fill,w_480,h_384/cities/c1cklkyp6ms02tougufx.webp" alt="Singapore"/>
<p className="legend">Singapore</p>
</div>
<div>
<img src="https://res.klook.com/image/upload/fl_lossy.progressive,q_65/c_fill,w_480,h_384/cities/e8fnw35p6zgusq218foj.webp" alt="Japan"/>
<p className="legend">Japan</p>
</div>
<div>
<img src="https://cdn.vox-cdn.com/thumbor/a_SzooZY7KwcXMMwOaZdtI4Srs8=/0x0:1920x1080/1320x743/filters:focal(807x387:1113x693):format(webp)/cdn.vox-cdn.com/uploads/chorus_image/image/68510166/jbareham_201201_ecl1050_goty_2020_top_50_02.0.jpg" alt="Smash"/>
<p className="legend">Gaming</p>
</div>
<div>
  <img src="https://i.pcmag.com/imagery/articles/06LiQJzDE1OdJcUdbgqwz1X-29.1569484004.fit_lim.size_1600x900.gif" alt="pc bulding"/>
  <p className='legend'>Pc building</p>
</div>

<div>
  <img src="https://www.netgear.com/media/NPG_microsite_banner_XR500_tcm148-116690.jpg" alt="Chating" />
  <p className='legend'>Chating</p>
</div>

</Carousel>
</div>
  );
}

export default App;
 