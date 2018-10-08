'use strict';

var CORE = {
    init: function init() {

        this.realTabOperation();
    },
    // GNB indicator
    topMenuIndicator: function topMenuIndicator() {
        $('nav a.here').addClass('on');
    },

    // TAB plug
    realTabOperation: function realTabOperation() {
        $('.tabsets.real-tab a').on('click', function () {
            var tabIndex = $(this).data('tabContent');
            $(this).siblings().removeClass('on');
            $(this).addClass('on');
        });
    }

    // after loaded execute
};window.onload = function () {
    CORE.init();

    // apply AOS plugin
    AOS.init({
        easing: 'ease-out-back',
        duration: 1000
    });
};