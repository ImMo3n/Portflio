<h2>Toggle Switch</h2>

<label class="switch">
  <input type="checkbox">
  <span class="slider"></span>
</label>

<label class="switch">
  <input type="checkbox" checked>
  <span class="slider"></span>
</label>

<label class="switch">
  <input type="checkbox">
  <span class="slider-red"></span>
</label>

<label class="switch">
  <input type="checkbox" checked>
  <span class="slider-red"></span>
</label>

<label class="switch">
  <input type="checkbox">
  <span class="slider-yellow"></span>
</label>

<label class="switch">
  <input type="checkbox" checked>
  <span class="slider-yellow"></span>
</label>

<label class="switch">
  <input type="checkbox">
  <span class="slider-green"></span>
</label>

<label class="switch">
  <input type="checkbox" checked>
  <span class="slider-green"></span>
</label>

<label class="switch">
  <input type="checkbox">
  <span class="slider-pink-purple"></span>
</label>

<label class="switch">
  <input type="checkbox" checked>
  <span class="slider-pink-purple"></span>
</label>

<label class="switch">
  <input type="checkbox">
  <span class="slider-orange"></span>
</label>

<label class="switch">
  <input type="checkbox" checked>
  <span class="slider-orange"></span>
</label>

<hr>

<label class="switch">
  <input type="checkbox">
  <span class="slider round"></span>
</label>

<label class="switch">
  <input type="checkbox" checked>
  <span class="slider round"></span>
</label>

<label class="switch">
  <input type="checkbox">
  <span class="slider-red round"></span>
</label>

<label class="switch red">
  <input type="checkbox" checked>
  <span class="slider-red round"></span>
</label>

<label class="switch">
  <input type="checkbox">
  <span class="slider-yellow round"></span>
</label>

<label class="switch red">
  <input type="checkbox" checked>
  <span class="slider-yellow round"></span>
</label>

<label class="switch">
  <input type="checkbox">
  <span class="slider-green round"></span>
</label>

<label class="switch">
  <input type="checkbox" checked>
  <span class="slider-green round"></span>
</label>

<label class="switch">
  <input type="checkbox">
  <span class="slider-pink-purple round"></span>
</label>

<label class="switch">
  <input type="checkbox" checked>
  <span class="slider-pink-purple round"></span>
</label>

<label class="switch">
  <input type="checkbox">
  <span class="slider-orange round"></span>
</label>

<label class="switch">
  <input type="checkbox" checked>
  <span class="slider-orange round"></span>
</label>


{/*  */}

.switch {
  position: relative;
  display: inline-block;
  width: 60px;
  height: 34px;
}

.switch input {display:none;}

.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  -webkit-transition: .4s;
  transition: .4s;
}

.slider:before {
  position: absolute;
  content: "";
  height: 26px;
  width: 26px;
  left: 4px;
  bottom: 4px;
  background-color: white;
  -webkit-transition: .4s;
  transition: .4s;
}

input:checked + .slider {
  background-color: #2196F3;
}

input:focus + .slider {
  box-shadow: 0 0 1px #2196F3;
}

input:checked + .slider:before {
  -webkit-transform: translateX(26px);
  -ms-transform: translateX(26px);
  transform: translateX(26px);
}

/* Rounded sliders */
.slider.round {
  border-radius: 34px;
}

.slider.round:before {
  border-radius: 50%;}
  
  /*red color
  -------------------------------
  */
  .slider-red {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #FE8176;
  -webkit-transition: .4s;
  transition: .4s;
}

.slider-red:before {
  position: absolute;
  content: "";
  height: 26px;
  width: 26px;
  left: 4px;
  bottom: 4px;
  background-color: white;
  -webkit-transition: .4s;
  transition: .4s;
}

input:checked + .slider-red {
  background-color: #FE2712;
}

input:focus + .slider-red {
  box-shadow: 0 0 1px #FE2712;
}

input:checked + .slider-red:before {
  -webkit-transform: translateX(26px);
  -ms-transform: translateX(26px);
  transform: translateX(26px);
}

/* Rounded sliders */
.slider-red.round {
  border-radius: 34px;
}

.slider-red.round:before {
  border-radius: 50%;
}

/*yellow
--------------------------------
*/

.slider-yellow {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #FDE281;
  -webkit-transition: .4s;
  transition: .4s;
}

.slider-yellow:before {
  position: absolute;
  content: "";
  height: 26px;
  width: 26px;
  left: 4px;
  bottom: 4px;
  background-color: white;
  -webkit-transition: .4s;
  transition: .4s;
}

input:checked + .slider-yellow {
  background-color: #FCCB1A;
}

input:focus + .slider-yellow {
  box-shadow: 0 0 1px #FCCB1A;
}

input:checked + .slider-yellow:before {
  -webkit-transform: translateX(26px);
  -ms-transform: translateX(26px);
  transform: translateX(26px);
}

/* Rounded sliders */
.slider-yellow.round {
  border-radius: 34px;
}

.slider-yellow.round:before {
  border-radius: 50%;
}

/*green
-----------------------------------
*/
.slider-green {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #9BD770;
  -webkit-transition: .4s;
  transition: .4s;
}

.slider-green:before {
  position: absolute;
  content: "";
  height: 26px;
  width: 26px;
  left: 4px;
  bottom: 4px;
  background-color: white;
  -webkit-transition: .4s;
  transition: .4s;
}

input:checked + .slider-green {
  background-color: #66B032;
}

input:focus + .slider-green {
  box-shadow: 0 0 1px #66B032;
}

input:checked + .slider-green:before {
  -webkit-transform: translateX(26px);
  -ms-transform: translateX(26px);
  transform: translateX(26px);
}

/* Rounded sliders */
.slider-green.round {
  border-radius: 34px;
}

.slider-green.round:before {
  border-radius: 50%;
}

/*pink-purple
----------------------------------
*/
.slider-pink-purple {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #EC6988;
  -webkit-transition: .4s;
  transition: .4s;
}

.slider-pink-purple:before {
  position: absolute;
  content: "";
  height: 26px;
  width: 26px;
  left: 4px;
  bottom: 4px;
  background-color: white;
  -webkit-transition: .4s;
  transition: .4s;
}

input:checked + .slider-pink-purple {
  background-color: #AE0D7A;
}

input:focus + .slider-pink-purple {
  box-shadow: 0 0 1px #AE0D7A;
}

input:checked + .slider-pink-purple:before {
  -webkit-transform: translateX(26px);
  -ms-transform: translateX(26px);
  transform: translateX(26px);
}

/* Rounded sliders */
.slider-pink-purple.round {
  border-radius: 34px;
}

.slider-pink-purple.round:before {
  border-radius: 50%;
}

/*orange
-------------------------
*/
.slider-orange {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #FEAB6D;
  -webkit-transition: .4s;
  transition: .4s;
}

.slider-orange:before {
  position: absolute;
  content: "";
  height: 26px;
  width: 26px;
  left: 4px;
  bottom: 4px;
  background-color: white;
  -webkit-transition: .4s;
  transition: .4s;
}

input:checked + .slider-orange {
  background-color: #FC7307;
}

input:focus + .slider-orange {
  box-shadow: 0 0 1px #FC7307;
}

input:checked + .slider-orange:before {
  -webkit-transform: translateX(26px);
  -ms-transform: translateX(26px);
  transform: translateX(26px);
}

/* Rounded sliders */
.slider-orange.round {
  border-radius: 34px;
}

.slider-orange.round:before {
  border-radius: 50%;
}