/*jslint browser: true */
/*global $, jQuery, alert, console */
$(document).ready(function () {
    'use strict';
    
    
    function Slider (container) {
        this.$container = container;
        console.log("$container: " + this.$container);
        console.log('container : ' + container);
        this.init();
    }
    
    Slider.prototype.init = function () {
        console.log('init function');
        console.log('container' + this.$container.prop('class'));
    }
    
    Slider.prototype.checkItems = function () {
        
    }
    
    
    
    
    var slider1 = new Slider($('#slider-container'));
    
    var slider2 = new Slider($('.slider-content'));
    
    
    
    
    
});