/*jslint browser: true */
/*global $, jQuery, alert, console */
$(document).ready(function () {
    'use strict';
    
    
    
    function Slider(container) {
        
        
        this.$container = $(container);
        this.$items = this.$container.find('.slider-content .item');
        this.$active = this.$container.find('slider-content .active');
        
        this.$nextItem = this.$active.next();
        this.$prevItem = this.$active.prev();
        
        this.$nextAll = this.$active.nextAll();
        this.$prevAll = this.$active.prevAll();
        
        this.$nextBtn = this.$container.find('.next');
        this.$prevBtn = this.$container.find('.prev');
        
        
        
        // binding Event
        this.$nextBtn.on('click', this.next.bind(this));
        this.$prevBtn.on('click', this.prev.bind(this));
        
        
        
        
        // initiate style for the Active and non-Active Items(prev & next)
        this.init = function () {
            this.$active.css({
                left: '0',
                opacity: '1',
                display: 'block'
            });
            
            this.$nextAll.css({
                left: '100%'
            });
            this.$prevAll.css({
                left: '-100%'
            });
        };
        
        
        // reCache the Element After we Change the Classes name in the (prev & next) Events
        this.reCache = function () {
            this.$items = this.$container.find('.slider-content .item');
            this.$active = this.$container.find('.slider-content .active');
            this.$nextItem = this.$active.next();
            this.$prevItem = this.$active.prev();
            
            this.$nextAll = this.$active.nextAll();
            this.$prevAll = this.$active.prevAll();
        };
        
        
        // to change the prevBtn and nextBtn based on the active Class position
        this.checkItems = function () {
            if (this.$items.first().hasClass('active')) {
                this.$prevBtn.css({
                    cursor: 'default',
                    'pointer-events': 'none',
                    opacity: '0.5'
                });
            } else {
                this.$prevBtn.css({
                    cursor: 'pointer',
                    'pointer-events': 'all',
                    opacity: '1'
                });
            }
            
            if (this.$items.last().hasClass('active')) {
                this.$nextBtn.css({
                    cursor: 'default',
                    'pointer-events': 'none',
                    opacity: '0.5'
                });
            } else {
                this.$nextBtn.css({
                    cursor: 'pointer',
                    'pointer-events': 'all',
                    opacity: '1'
                });
            }
            
        };
        
        // Activate them on the Page Start
        this.init();
        this.checkItems();
        
        
        // next Event Handler
        this.next = function () {
            this.$active.animate({
                left: '-100%',
                opacity: '0'
            }, 300, function () {
                this.$active.css({
                    display: 'none'
                });
                
                this.$nextItem.css({
                    display: 'block'
                });
                
                this.$active.removeClass('active')
                    .next('.item')
                    .addClass('active')
                    .animate({
                        left: '0',
                        opacity: '1'
                    }, 500);
                
                this.reCache();
                this.checkItems();
                
            });
            return false;
        };
        
        // prev Event Handler
        this.prev = function () {
            this.$active.animate({
                
                left: '100%',
                opacity: '0'
                
            }, 300, function () {
                
                this.$active.css({
                    display: 'none'
                });
                
                this.$prevItem.css({
                    display: 'block'
                });
                
                this.$active.removeClass('active')
                    .prev('.item')
                    .addClass('active')
                    .animate({
                        left: '0',
                        opacity: '1'
                    }, 500);
                
                this.reCache();
                this.checkItems();
                
            });
            return false;
        };
    }
    
    var slider1 = new Slider('#slider-container');
    
    
    (function() {
        slider1.prototype.init = function () {
            
        }
        
        
        
    }());
    
    
});

//cache DOM        
//        function createDOM(text, count) {
//            $container[count] = $(text);
//            $items[count] = $container[count].find('');
//            $active[count] = $container[count].find('.slider-content .active');
//            $nextItem[count] = $active[count].next();
//            $prevItem[count] = $active[count].prev();
//            
//            $nextAll = $active[count].nextAll(),
//            $prevAll = $active[count].prevAll(),
//
//            
//            $nextBtn = $container[count].find('.next');
//            $prevBtn = $container[count].find('.prev');
//        }
