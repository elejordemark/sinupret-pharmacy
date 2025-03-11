var timeEvents = {};
var eventToEnd = null;
var historyPageStep = 0;

$( window ).on( "load", function() {
    trackPageChange(getCurrentPage());
    // var arrowLeft = document.getElementById('ArrowLeft');
    // var arrowRight = document.getElementById('ArrowRight');
    // if (getCurrentPage() == 1 || getCurrentPage() == 2){
    //     arrowLeft.classList.add('display-none');
    //     arrowRight.classList.add('display-none');
    // }
    // else{
    //     arrowLeft.classList.remove('display-none');
    //     arrowRight.classList.remove('display-none');
    // }
    
    // var imageid = $.mobile.activePage[0].id;
    // var imgsrc = $('#'+imageid).children('img').map(function () {
    //     return $(this).attr('src')
    // }).get()
    // var imgsrc = $('#' + imageid+ ' img');
    // console.log('imgsrd', imgsrc)
    // img.src = "your_image_url.gif" + "?a=" + Math.random();
    $(document).on( "pagechange", function( event ) {
        trackPageChange(getCurrentPage());
        console.log(getCurrentPage() + ' is current');
       
        //var totalPages = 30;
        //console.log(currentPage);

        
        $(document).on( "pagechange", function( event ) {
            trackPageChange(getCurrentPage());
            // if (getCurrentPage() == 1 || getCurrentPage() == 2 || getCurrentPage() == 15 || getCurrentPage() == 16 || getCurrentPage() == 17 || getCurrentPage() == 18 || getCurrentPage() == 19){
            //     arrowLeft.classList.add('display-none');
            //     arrowRight.classList.add('display-none');
            // }
            // else if (getCurrentPage() == 6 || getCurrentPage() == 7 || getCurrentPage() == 8 || getCurrentPage() == 9){
            //     arrowRight.classList.remove('display-none');
            //     arrowLeft.classList.remove('display-none');
            // }
            
            // if (getCurrentPage() == 3 || getCurrentPage() == 5 || getCurrentPage() == 9 || getCurrentPage() == 11 || getCurrentPage() == 13 ){
            //     arrowLeft.classList.add('display-none');
            //     arrowRight.classList.remove('display-none');
            // }
            // else if (getCurrentPage() == 4 || getCurrentPage() == 10 || getCurrentPage() == 12 || getCurrentPage() == 11 || getCurrentPage() == 14 ){
            //     arrowRight.classList.add('display-none');
            //     arrowLeft.classList.remove('display-none');
            // }

        });

    });
    $(document).on( "click", "#page2-cta1", function( event ){
        event.preventDefault(); event.stopPropagation();
        trackPageChange("20");
        historyPageStep = getCurrentPage();
        clearAnimPage()
        goToPage(3);
    });
    $(document).on( "click", "#page2-cta2", function( event ){
        event.preventDefault(); event.stopPropagation();
        trackPageChange("21");
        historyPageStep = getCurrentPage();
        clearAnimPage()
        goToPage(5);
    });
    $(document).on( "click", "#page2-cta3", function( event ){
        event.preventDefault(); event.stopPropagation();
        trackPageChange("22");
        historyPageStep = getCurrentPage();
        clearAnimPage()
        goToPage(11);
    });
    $(document).on( "click", "#page2-cta4", function( event ){
        event.preventDefault(); event.stopPropagation();
        trackPageChange("23");
        historyPageStep = getCurrentPage();
        clearAnimPage()
        goToPage(13);
    });
    $(document).on( "click", "#page2-cta5", function( event ){
        event.preventDefault(); event.stopPropagation();
        trackPageChange("24");
        historyPageStep = getCurrentPage();
        clearAnimPage()
        goToPage(15);
    });
    $(document).on( "click", "#page2-cta6", function( event ){
        event.preventDefault(); event.stopPropagation();
        trackPageChange("25");
        historyPageStep = getCurrentPage();
        clearAnimPage()
        goToPage(16);
    });
});
function clearAnimPage(){
    var pageAnimClear = [page1AnimClear,page2AnimClear,page3AnimClear,page4AnimClear,page5AnimClear,page6AnimClear,page7AnimClear,page8AnimClear,page9AnimClear,page10AnimClear,page11AnimClear, page12AnimClear, page13AnimClear, page14AnimClear, page15AnimClear, page16AnimClear, page17AnimClear]
    var cPage = getCurrentPage();
    console.log(cPage);
    if(pageAnimClear[cPage-1]){
        pageAnimClear[cPage-1]();
    }
}
function goToIndex(){
    historyPageStep = getCurrentPage();
    console.log('history page = ' + getCurrentPage());
    var pageAnimClear = [page1AnimClear,page2AnimClear,page3AnimClear,page4AnimClear,page5AnimClear,page6AnimClear,page7AnimClear,page8AnimClear,page9AnimClear,page10AnimClear,page11AnimClear, page12AnimClear, page13AnimClear, page14AnimClear, page15AnimClear, page16AnimClear, page17AnimClear]
    if(pageAnimClear[historyPageStep-1]){
        pageAnimClear[historyPageStep-1]();
    }
    trackPageChange("1");
    goToPage(1);
}
function goToReference(){
    historyPageStep = getCurrentPage();
    console.log('history page = ' + getCurrentPage());
    var pageAnimClear = [page1AnimClear,page2AnimClear,page3AnimClear,page4AnimClear,page5AnimClear,page6AnimClear,page7AnimClear,page8AnimClear,page9AnimClear,page10AnimClear,page11AnimClear, page12AnimClear, page13AnimClear, page14AnimClear]
    if(pageAnimClear[historyPageStep-1]){
        pageAnimClear[historyPageStep-1]();
    }
    trackPageChange("4");
    goToPage(4);
}
function goToSmPC(){
    historyPageStep = getCurrentPage();
    console.log('history page = ' + getCurrentPage());
    var pageAnimClear = [page1AnimClear,page2AnimClear,page3AnimClear,page4AnimClear,page5AnimClear,page6AnimClear,page7AnimClear,page8AnimClear,page9AnimClear,page10AnimClear,page11AnimClear, page12AnimClear, page13AnimClear, page14AnimClear]
    if(pageAnimClear[historyPageStep-1]){
        pageAnimClear[historyPageStep-1]();
    }
    trackPageChange("4");
    goToPage(4);
}
$(document).on( "click", ".sidebar .tree li span img", function( event ){
    event.preventDefault(); event.stopPropagation();
    historyPageStep = getCurrentPage();
    console.log('history page = ' + getCurrentPage());
    var pageAnimClear = [page1AnimClear,page2AnimClear,page3AnimClear,page4AnimClear,page5AnimClear,page6AnimClear,page7AnimClear,page8AnimClear,page9AnimClear,page10AnimClear,page11AnimClear, page12AnimClear, page13AnimClear, page14AnimClear, page15AnimClear, page16AnimClear, page17AnimClear]
    if(pageAnimClear[historyPageStep-1]){
        pageAnimClear[historyPageStep-1]();
    }
    var targetvalue = $(this).attr('target');
    console.log('thumbnail clicked! ' + targetvalue);
    trackPageChange(targetvalue);
    goToPage(targetvalue);
});
$(document).on('swipeleft', '.ui-page', function(event){    
    if(event.handled !== true) {    
        if ($.mobile.activePage[0].dataset.next) {
            // var pageAnim = [page1Animation, page2Animation, page3Animation, page4Animation, page5Animation, page6Animation, page7Animation, page8Animation, page9Animation, page10Animation, page11Animation, page12Animation, page13Animation, page14Animation, page15Animation, page16Animation, page17Animation]
            var pageAnimClear = [page1AnimClear,page2AnimClear,page3AnimClear,page4AnimClear,page5AnimClear,page6AnimClear,page7AnimClear,page8AnimClear,page9AnimClear,page10AnimClear,page11AnimClear, page12AnimClear, page13AnimClear, page14AnimClear, page15AnimClear, page16AnimClear, page17AnimClear]
            var cPage = getCurrentPage();
            console.log(cPage);
            if(pageAnimClear[cPage-1]){
                pageAnimClear[cPage-1]();
            }
            // if(pageAnim[cPage]){
            //     pageAnim[cPage]();
            // }
            var nextpage = $.mobile.activePage[0].dataset.next;
            console.log(getCurrentPage());
            goToPage(nextpage);
        }
        else{
            var nextpage = $.mobile.activePage.next('[data-role="page"]');
            if (nextpage.length > 0  && nextpage[0].id !== 'page8'&& nextpage[0].id !== 'page12' && nextpage[0].id !== 'page14' && nextpage[0].id !== 'page16' && nextpage[0].id !== 'page18' && nextpage[0].id !== 'page19' && nextpage[0].id !== 'page22' && nextpage[0].id !== 'page25' && nextpage[0].id !== 'page26'/*  && nextpage[0].id !== 'page2' */) {
                // $.mobile.changePage(nextpage, {transition: "slide", reverse: false}, true, true);
            }
            event.handled = true;
        }
    }
    return false;         
});
$(document).on('click', '#ArrowRight', function(event){    
    if(event.handled !== true) {    
        if ($.mobile.activePage[0].dataset.next) {
            // var pageAnim = [page1Animation, page2Animation, page3Animation, page4Animation, page5Animation, page6Animation, page7Animation, page8Animation, page9Animation, page10Animation, page11Animation, page12Animation, page13Animation, page14Animation, page15Animation, page16Animation, page17Animation]
            var pageAnimClear = [page1AnimClear,page2AnimClear,page3AnimClear,page4AnimClear,page5AnimClear,page6AnimClear,page7AnimClear,page8AnimClear,page9AnimClear,page10AnimClear,page11AnimClear, page12AnimClear, page13AnimClear, page14AnimClear, page15AnimClear, page16AnimClear, page17AnimClear]
            var cPage = getCurrentPage();
            console.log(cPage);
            if(pageAnimClear[cPage-1]){
                pageAnimClear[cPage-1]();
            }
            // if(pageAnim[cPage]){
            //     pageAnim[cPage]();
            // }
            var nextpage = $.mobile.activePage[0].dataset.next;
            console.log(getCurrentPage());
            goToPage(nextpage);
        }
        else{
            var nextpage = $.mobile.activePage.next('[data-role="page"]');
            if (nextpage.length > 0  && nextpage[0].id !== 'page8'&& nextpage[0].id !== 'page12' && nextpage[0].id !== 'page14' && nextpage[0].id !== 'page16' && nextpage[0].id !== 'page18' && nextpage[0].id !== 'page19' && nextpage[0].id !== 'page22' && nextpage[0].id !== 'page25' && nextpage[0].id !== 'page26'/*  && nextpage[0].id !== 'page2' */) {
                // $.mobile.changePage(nextpage, {transition: "slide", reverse: false}, true, true);
            }
            event.handled = true;
        }
    }
    return false;         
});


$(document).on('click', 'img[src="assets/img/global/ArrowRight.png"], img[src="assets/img/global/ArrowRight.png"]', function(event){    
    if(event.handled !== true) {    
        if ($.mobile.activePage[0].dataset.next) {
            var nextpage = $.mobile.activePage[0].dataset.next;
            // console.log("notavaliable");
            goToPage(nextpage);
        }
        else{
            var nextpage = $.mobile.activePage.next('[data-role="page"]');
            if (nextpage.length > 0  && nextpage[0].id !== 'page8'&& nextpage[0].id !== 'page12' && nextpage[0].id !== 'page14' && nextpage[0].id !== 'page16' && nextpage[0].id !== 'page18' && nextpage[0].id !== 'page19' && nextpage[0].id !== 'page22' && nextpage[0].id !== 'page25' && nextpage[0].id !== 'page26'/*  && nextpage[0].id !== 'page2' */) {
                // $.mobile.changePage(nextpage, {transition: "slide", reverse: false}, true, true);
            }
            event.handled = true;
        }
    }
    return false;         
});



$(document).on('swiperight', '.ui-page', function(event){     
    if(event.handled !== true) { 
        if ($.mobile.activePage[0].dataset.prev) {
            
            var pageAnimClear = [page1AnimClear,page2AnimClear,page3AnimClear,page4AnimClear,page5AnimClear,page6AnimClear,page7AnimClear,page8AnimClear,page9AnimClear,page10AnimClear,page11AnimClear, page12AnimClear, page13AnimClear, page14AnimClear, page15AnimClear, page16AnimClear, page17AnimClear]
            var cPage = getCurrentPage()-1;
            if(pageAnimClear[cPage]){
                pageAnimClear[cPage]();
            }
            var prevpage = $.mobile.activePage[0].dataset.prev;
            console.log(getCurrentPage());
            goToPage(prevpage);
        }
        else{
            var prevpage = $(this).prev('[data-role="page"]');
            if (prevpage.length > 0   && prevpage[0].id !== "page11" && prevpage[0].id !== "page13" && prevpage[0].id !== "page15" && prevpage[0].id !== "page17" && prevpage[0].id !== "page18" && prevpage[0].id !== "page21" && prevpage[0].id !== "page25" && prevpage[0].id !== "page24" /* && prevpage[0].id !== "page4" */) {
                 $.mobile.changePage(prevpage, {transition: "slide", reverse: true}, true, true);
            }
             event.handled = true;
        }
    }
    return false;            
});
$(document).on('click', '#ArrowLeft', function(event){     
    if(event.handled !== true) { 
        if ($.mobile.activePage[0].dataset.prev) {
            var pageAnimClear = [page1AnimClear,page2AnimClear,page3AnimClear,page4AnimClear,page5AnimClear,page6AnimClear,page7AnimClear,page8AnimClear,page9AnimClear,page10AnimClear,page11AnimClear, page12AnimClear, page13AnimClear, page14AnimClear, page15AnimClear, page16AnimClear, page17AnimClear]
            var cPage = getCurrentPage()-1;
            if(pageAnimClear[cPage]){
                pageAnimClear[cPage]();
            }
            var prevpage = $.mobile.activePage[0].dataset.prev;
            console.log(getCurrentPage());
            goToPage(prevpage);
        }
        else{
            var prevpage = $(this).prev('[data-role="page"]');
            if (prevpage.length > 0   && prevpage[0].id !== "page11" && prevpage[0].id !== "page13" && prevpage[0].id !== "page15" && prevpage[0].id !== "page17" && prevpage[0].id !== "page18" && prevpage[0].id !== "page21" && prevpage[0].id !== "page25" && prevpage[0].id !== "page24" /* && prevpage[0].id !== "page4" */) {
                 $.mobile.changePage(prevpage, {transition: "slide", reverse: true}, true, true);
            }
             event.handled = true;
        }
    }
    return false;            
});

$(document).on('click','img[src="assets/img/page22/Close.png"]', function(event){
    if(getCurrentPage() == 18 || getCurrentPage() == 19 || getCurrentPage() == 20 || getCurrentPage() == 21 || getCurrentPage() == 22){
        if(historyPageStep == 18 || historyPageStep == 19 || historyPageStep == 20 || historyPageStep == 21 || historyPageStep == 22 ){
            goToPage(1);
        }else{
            goToPage(historyPageStep);
        }
        console.log(historyPageStep);
    }
});

$(document).on('click', 'img[src="assets/img/global/ArrowLeft.png"], img[src="assets/img/global/ArrowLeft.png"]', function(event){   
    console.log('clicked');
    if(event.handled !== true) { 
        if ($.mobile.activePage[0].dataset.prev) {
            var prevpage = $.mobile.activePage[0].dataset.prev;
            goToPage(prevpage);
        }
        else{
            var prevpage = $(this).prev('[data-role="page"]');
            if (prevpage.length > 0   && prevpage[0].id !== "page11" && prevpage[0].id !== "page13" && prevpage[0].id !== "page15" && prevpage[0].id !== "page17" && prevpage[0].id !== "page18" && prevpage[0].id !== "page21" && prevpage[0].id !== "page25" && prevpage[0].id !== "page24" /* && prevpage[0].id !== "page4" */) {
                 $.mobile.changePage(prevpage, {transition: "slide", reverse: true}, true, true);
            }
             event.handled = true;
        }
    }
    return false;            
});


var pagedescription = [
    "Cover page",
    "Summary of Key Benefits",
    "Dosage & Administration",
    "Abridged Product Information"
];
function trackPageChange(currentPage) {
    if (eventToEnd != null) {
        const currentAttributeEventId = getDataEventIdFromPage(eventToEnd);
        endVisitEvent(currentAttributeEventId);
    }
    const activeAttributeEventId = getDataEventIdFromPage(currentPage);
    callVisitEvent(activeAttributeEventId, pagedescription[currentPage - 1]);
    eventToEnd = activeAttributeEventId;
}

function trackEventClick(element, eventDescription) {
    const eventId = element.getAttribute('data-md-event-id');
    callVisitEvent(eventId, eventDescription);
}

function callVisitEvent(eventId, eventDescription) {
    visitEvent(eventId, eventDescription, null, true);
}

function visitEvent(event, eventDescription, attribute, cron) {
    try {
        Tracking.startEvent(event, eventDescription, attribute, cron).then(
        function (idEvent) {
            timeEvents[event] = idEvent;
            console.log('Visited ' + event);
        },
        function (err) {
            console.error(err);
        }
        );
    } catch(err) {
        console.error(err);
    }
}

function endVisitEvent(pageId) {
    if (pageId != null && timeEvents[pageId] != null) {
        try {
            var eventId = timeEvents[pageId];
            Tracking.endEvent(eventId).then(
                function () {
                    console.log('Ended time event for page '  + pageId);
                    delete timeEvents[pageId];
                },
                function (err) {
                    console.error(err);
                }
            );
        } catch(err) {
            console.error(err);
        }
    }
}

function setMandatoryEvents(events) {
    try {
        Tracking.setMandatoryEvents(events).then(
        function () {
            console.log('Setted ' + events);
        },
        function (err) {
            console.error(err);
        } 
        );
    } catch(err) {
        console.error(err);
    }
}

function getDataEventIdFromPage(page) {
    if(page != null) {
        if(typeof page === 'string') {
            return page;
        }
        return page[0].attributes["data-md-event-id"].value;
    }
}

function goToPage(page) {
    if (Number(getCurrentPage()) <= page) {
        var pageAnim = [page1Animation, page2Animation, page3Animation, page4Animation, page5Animation, page6Animation, page7Animation, page8Animation, page9Animation, page10Animation, page11Animation, page12Animation, page13Animation, page14Animation, page15Animation, page16Animation, page17Animation]
        var cPage = page-1;
        if(pageAnim[cPage]){
            pageAnim[cPage]();
        }
        $.mobile.changePage('#page' + page, {transition: "slide", reverse: false}, true, true);
    } else {
        var pageAnim = [page1Animation, page2Animation, page3Animation, page4Animation, page5Animation, page6Animation, page7Animation, page8Animation, page9Animation, page10Animation, page11Animation, page12Animation, page13Animation, page14Animation, page15Animation, page16Animation, page17Animation]
        var cPage = page-1;
        if(pageAnim[cPage]){
            pageAnim[cPage]();
        }
        $.mobile.changePage('#page' + page, {transition: "slide", reverse: true}, true, true);
    }
}

function getCurrentPage() {
    return $.mobile.activePage[0].id.split("page")[1];
}
