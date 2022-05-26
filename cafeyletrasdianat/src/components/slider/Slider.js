import React from "react";


import "./Slider.css";


import PhotoTwo from './pexels-jason-villanueva-851555 (4).jpg'

export default function Slider() {
  return (
<div class="slider-all">
    <input type="radio" id="1" name="img-slide" hidden/>
    <input type="radio" id="2" name="img-slide" hidden/>
    <input type="radio" id="3" name="img-slide" hidden/>
    <div class="slide">
        <div class="item-slide">
            <img src="./utils/img/Group 101.png"/>
        </div>
        <div class="item-slide">
            <img src="./utils/img/pexels-dominika-roseclay-894612.jpg"/>
        </div>
        <div class="item-slide">
            <img src="./utils/img/pexels-lisa-fotios-1485114.jpg"/>
        </div>
    </div>
    <div class="pagination">
        <label class="pagination-item" for="1">
        </label>
        <label class="pagination-item" for="2">
        </label>
        <label class="pagination-item" for="3">
        </label>
    </div>
</div>
  );
}