import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./Section-one.css";
import Img from './Mask group.svg'

// import required modules
import { Pagination, Navigation } from "swiper";

export default function App() {
  return (
<section>
<img class="container-img_decoration" src={Img} alt='Decoracion'/>
    <h1>NOVEDADES</h1>
      <Swiper
        slidesPerView={3}
        spaceBetween={10}
        slidesPerGroup={3}
        loop={true}
        loopFillGroupWithBlank={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"


        breakpoints={{

            320: {
                slidesPerView: 1,
                spaceBetween: 20,

                },

            768: {
            slidesPerView: 2,
            spaceBetween: 40,
            },
            1024: {
                slidesPerView: 3,
                spaceBetween: 55,
                },
        }}>
        <SwiperSlide>
        <div class="content">
                    <div class="img-c">
                        <img src="./utils/img/Rectangle 94.png"/>
                    </div>
                    <div class="details">
                        <div class="name">Misión Economía</div>
                        <div class="autor">Mariana Mazzucato</div>
                    </div>
                </div>
                <div class="botton-index">
                            <a href="./pages/compras.html"></a>
                            <div><i class="fa-solid fa-heart"></i></div>
                            <i class="fa-solid fa-eye"></i>
                        </div>
        </SwiperSlide>
        <SwiperSlide>
        <div class="content">
                    <div class="img-c">
                        <img src="./utils/img/Rectangle 94.png"/>
                    </div>
                    <div class="details">
                        <div class="name">Misión Economía</div>
                        <div class="autor">Mariana Mazzucato</div>
                    </div>
                </div>
        <div class="botton-index">
                            <a href="./pages/compras.html"></a>
                            <div><i class="fa-solid fa-heart"></i></div>
                            <i class="fa-solid fa-eye"></i>
                        </div>
        </SwiperSlide>

        <SwiperSlide>
        <div class="content">
                    <div class="img-c">
                        <img src="./utils/img/Rectangle 94.png"/>
                    </div>
                    <div class="details">
                        <div class="name">Misión Economía</div>
                        <div class="autor">Mariana Mazzucato</div>
                    </div>
                </div>
        <div class="botton-index">
                            <a href="./pages/compras.html"></a>
                            <div><i class="fa-solid fa-heart"></i></div>
                            <i class="fa-solid fa-eye"></i>
                        </div>
        </SwiperSlide>
        <SwiperSlide> <div class="content">
                    <div class="img-c">
                        <img src="./utils/img/Rectangle 94.png"/>
                    </div>
                    <div class="details">
                        <div class="name">Misión Economía</div>
                        <div class="autor">Mariana Mazzucato</div>
                    </div>
                </div>
        <div class="botton-index">
                            <a href="./pages/compras.html"></a>
                            <div><i class="fa-solid fa-heart"></i></div>
                            <i class="fa-solid fa-eye"></i>
                        </div>
        </SwiperSlide>
        <SwiperSlide> <div class="content">
                    <div class="img-c">
                        <img src="./utils/img/Rectangle 94.png"/>
                    </div>
                    <div class="details">
                        <div class="name">Misión Economía</div>
                        <div class="autor">Mariana Mazzucato</div>
                    </div>
                </div>
        <div class="botton-index">
                            <a href="./pages/compras.html"></a>
                            <div><i class="fa-solid fa-heart"></i></div>
                            <i class="fa-solid fa-eye"></i>
                        </div>
        </SwiperSlide>
        <SwiperSlide> <div class="content">
                    <div class="img-c">
                        <img src="./utils/img/Rectangle 94.png"/>
                    </div>
                    <div class="details">
                        <div class="name">Misión Economía</div>
                        <div class="autor">Mariana Mazzucato</div>
                    </div>
                </div>
        <div class="botton-index">
                            <a href="./pages/compras.html"></a>
                            <div><i class="fa-solid fa-heart"></i></div>
                            <i class="fa-solid fa-eye"></i>
                        </div>
        </SwiperSlide>
      </Swiper>

</section>
  );
}
