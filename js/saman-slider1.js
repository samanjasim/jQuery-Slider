/*jslint browser: true */
/*global $, jQuery, alert, console */
$(document).ready(function () {
    'use strict';
    
    var slider = (function () {
        
        //cache DOM
        var $container = $('#slider-container'),
            $items = $container.find('.slider-content .item'),
            $active = $container.find('.slider-content .active'),
            $nextItem = $active.next(),
            $prevItem = $active.prev(),
            
            $nextAll = $active.nextAll(),
            $prevAll = $active.prevAll(),
            
            $nextBtn = $('#slider-container .next'),
            $prevBtn = $('#slider-container .prev');
        
        // binding Event
        $nextBtn.on('click', next);
        $prevBtn.on('click', prev);
        
        
        function setContainer(text) {
            
        }
        
        // initiate style for the Active and non-Active Items(prev & next)
        function init() {
            $active.css({
                left: '0',
                opacity: '1',
                display: 'block'
            });
            
            $nextAll.css({
                left: '100%'
            });
            $prevAll.css({
                left: '-100%'
            });
        }
        
        
        // reCache the Element After we Change the Classes name in the (prev & next) Events
        function reCache() {
            $items = $('#slider-container .slider-content .item');
            $active = $('#slider-container .slider-content .active');
            $nextItem = $active.next();
            $prevItem = $active.prev();
            
            $nextAll = $active.nextAll();
            $prevAll = $active.prevAll();
        }
        
        
        // to change the prevBtn and nextBtn based on the active Class position
        function checkItems() {
            if ($items.first().hasClass('active')) {
                $prevBtn.css({
                    cursor: 'default',
                    'pointer-events': 'none',
                    opacity: '0.5'
                });
            } else {
                $prevBtn.css({
                    cursor: 'pointer',
                    'pointer-events': 'all',
                    opacity: '1'
                });
            }
            
            if ($items.last().hasClass('active')) {
                $nextBtn.css({
                    cursor: 'default',
                    'pointer-events': 'none',
                    opacity: '0.5'
                });
            } else {
                $nextBtn.css({
                    cursor: 'pointer',
                    'pointer-events': 'all',
                    opacity: '1'
                });
            }
            
        }
        
        // Activate them on the Page Start
        init();
        checkItems();
        
        
        // next Event Handler
        function next() {
            $active.animate({
                left: '-100%',
                opacity: '0'
            }, 300, function () {
                $active.css({
                    display: 'none'
                });
                
                $nextItem.css({
                    display: 'block'
                });
                
                $active.removeClass('active')
                    .next('.item')
                    .addClass('active')
                    .animate({
                        left: '0',
                        opacity: '1'
                    }, 500);
                
                reCache();
                checkItems();
                
            });
            return false;
        }
        
        // prev Event Handler
        function prev() {
            $active.animate({
                
                left: '100%',
                opacity: '0'
                
            }, 300, function () {
                
                $active.css({
                    display: 'none'
                });
                
                $prevItem.css({
                    display: 'block'
                });
                
                $active.removeClass('active')
                    .prev('.item')
                    .addClass('active')
                    .animate({
                        left: '0',
                        opacity: '1'
                    }, 500);
                
                reCache();
                checkItems();
                
            });
            return false;
        }
        
        return {
            
        }
        
    }());
    
    
    
});
