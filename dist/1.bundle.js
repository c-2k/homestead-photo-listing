(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{45:function(e,t,n){"use strict";n.r(t);var r=n(0),o=n.n(r),l=function(e){var t=e.image,n=e.description,r=e.length,a=e.current;return o.a.createElement("div",{className:"slide"},o.a.createElement("img",{src:t,className:"slidePhoto",alt:n}),o.a.createElement("div",{className:"description"},a+=1,"/",r,": ",n))},i=function(e){return o.a.createElement("button",{className:"leftBtn",onClick:e.goToPrevSlide},o.a.createElement("svg",{viewBox:"0 0 18 18"},o.a.createElement("path",{d:"m13.7 16.29a1 1 0 1 1 -1.42 1.41l-8-8a1 1 0 0 1 0-1.41l8-8a1 1 0 1 1 1.42 1.41l-7.29 7.29z","fill-rule":"evenodd"}),o.a.createElement("path",{d:"m13.7 16.29a1 1 0 1 1 -1.42 1.41l-8-8a1 1 0 0 1 0-1.41l8-8a1 1 0 1 1 1.42 1.41l-7.29 7.29z","fill-rule":"evenodd"})))},s=function(e){return o.a.createElement("button",{className:"rightBtn",onClick:e.goToNextSlide},o.a.createElement("svg",{viewBox:"0 0 18 18"},o.a.createElement("path",{d:"m4.29 1.71a1 1 0 1 1 1.42-1.41l8 8a1 1 0 0 1 0 1.41l-8 8a1 1 0 1 1 -1.42-1.41l7.29-7.29z","fill-rule":"evenodd"}),o.a.createElement("path",{d:"m4.29 1.71a1 1 0 1 1 1.42-1.41l8 8a1 1 0 0 1 0 1.41l-8 8a1 1 0 1 1 -1.42-1.41l7.29-7.29z","fill-rule":"evenodd"})))};function c(e){return(c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function u(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function d(e){return(d=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function f(e,t){return(f=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function p(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var a=function(e){function a(e){var t,n,r;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),n=this,(t=!(r=d(a).call(this,e))||"object"!==c(r)&&"function"!=typeof r?p(n):r).state={images:t.props.photos,currentIndex:t.props.index||0,translateValue:(t.props.index*=-640)||0},t.goToPrevSlide=t.goToPrevSlide.bind(p(p(t))),t.goToNextSlide=t.goToNextSlide.bind(p(p(t))),t.slideWidth=t.slideWidth.bind(p(p(t))),t}var t,n,r;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&f(e,t)}(a,o.a.Component),t=a,(n=[{key:"goToPrevSlide",value:function(){var t=this;0!==this.state.currentIndex&&this.setState(function(e){return{currentIndex:e.currentIndex-1,translateValue:e.translateValue+t.slideWidth()}})}},{key:"goToNextSlide",value:function(){var t=this;if(this.state.currentIndex===this.state.images.length-1)return this.setState({currentIndex:0,translateValue:0});this.setState(function(e){return{currentIndex:e.currentIndex+1,translateValue:e.translateValue+-t.slideWidth()}})}},{key:"slideWidth",value:function(){return document.querySelector(".slide").clientWidth}},{key:"render",value:function(){var r=this;if(this.state.images)return o.a.createElement("div",null,o.a.createElement("div",{className:"backSlider"},o.a.createElement("button",{onClick:function(){return r.props.view("gallery")},className:"slider-button"},"X")),o.a.createElement("div",{className:"slider"},o.a.createElement("div",{className:"slider-wrapper",style:{transform:"translateX(".concat(this.state.translateValue,"px)"),transition:"transform ease-out 0s"},onClick:this.goToNextSlide},this.props.photos.map(function(e,t,n){return o.a.createElement(l,{key:t,image:e.url,description:e.description,length:r.props.photos.length,current:r.state.currentIndex})}))),o.a.createElement("div",null,o.a.createElement(i,{goToPrevSlide:this.goToPrevSlide}),o.a.createElement(s,{goToNextSlide:this.goToNextSlide})));o.a.createElement("div",null,"Loading on photoView...")}}])&&u(t.prototype,n),r&&u(t,r),a}();t.default=a}}]);