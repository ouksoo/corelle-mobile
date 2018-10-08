let CORE = {
    init : function() {
        
        this.realTabOperation();
    },
    // GNB indicator
    topMenuIndicator : function() {
        $('nav a.here').addClass('on');
    },

    // TAB plug
    realTabOperation : function() {
        $('.tabsets.real-tab a').on('click', function() {
            let tabIndex =  $(this).data('tabContent');
            $(this).siblings().removeClass('on');            
            $(this).addClass('on');
        });
    },
}


// after loaded execute
window.onload = function() {
    CORE.init();

    // apply AOS plugin
    AOS.init({
        easing: 'ease-out-back',
        duration: 1000
    }); 
};
