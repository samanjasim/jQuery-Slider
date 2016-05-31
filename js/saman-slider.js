/*jslint browser: true */
/*global $, jQuery, alert, console */
(function (global, $) {
    'use strict';
    var Slider = function (container) {
        return new Slider.create(container);
    };
    
    Slider.prototype = {
        
        run: function () {
            this._createDOM();
            this._bindingEvents();
            this._checkItems();
        },
        
        _createDOM: function () {
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
        },
        
        _bindingEvents: function () {
            this.$nextBtn.on('click', this._next.bind(this));
            this.$prevBtn.on('click', this._prev.bind(this));
        },
        
        _reCache: function () {
            this.$items = this.$container.find('.slider-content .item');
            this.$active = this.$container.find('.slider-content .active');
            
            this.$nextItem = this.$active.next();
            this.$prevItem = this.$active.prev();
            
            this.$nextAll = this.$active.nextAll();
            this.$prevAll = this.$active.prevAll();
        },
        
        _checkItems: function () {
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
        },
        
        _next: function () {
            
            var self = this;
            
            self.$active.animate({
                left: '-100%',
                opacity: '0'
            }, 300, function () {
                self.$active.css({
                    display: 'none'
                });
                
                self.$nextItem.css({
                    display: 'block'
                });
                
                self.$active.removeClass('active')
                    .next('.item')
                    .addClass('active')
                    .animate({
                        left: '0',
                        opacity: '1'
                    }, 500);
                
                self._reCache();
                self._checkItems();
                
            });
            return false;
        },
        
        _prev: function () {
            var self = this;
            self.$active.animate({
                
                left: '100%',
                opacity: '0'
                
            }, 300, function () {
                
                self.$active.css({
                    display: 'none'
                });
                
                self.$prevItem.css({
                    display: 'block'
                });
                
                self.$active.removeClass('active')
                    .prev('.item')
                    .addClass('active')
                    .animate({
                        left: '0',
                        opacity: '1'
                    }, 500);
                
                self._reCache();
                self._checkItems();
                
            });
            return false;
        }
        
         
    };
    
    
    
    Slider.create = function (container) {
        var self = this;
        
        self.$container = container;
        self.$items = self.$container.find('.slider-content .item');
        self.$active = self.$container.find('.slider-content .active');
        
        self.$nextItem = self.$active.next();
        self.$prevItem = self.$active.prev();
        
        self.$nextAll = self.$active.nextAll();
        self.$prevAll = self.$active.prevAll();
        
        self.$nextBtn = self.$container.find('.next');
        self.$prevBtn = self.$container.find('.prev');
        
    };
    
    Slider.create.prototype = Slider.prototype;
    
    global.Slider = global.S$ = Slider;
    
}(window, jQuery));