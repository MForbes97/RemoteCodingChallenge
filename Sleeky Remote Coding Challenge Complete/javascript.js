function myMap() {
    var loc = {
        lat:54.963891, lng:-1.605772
    };
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 16, center: loc
    });
    var marker = new google.maps.Marker({
        position: loc, map: map
    });
}

function faq1() {

    var a = document.getElementById('faq1');
    var b = document.getElementById('faqlist1');
    var list = document.getElementsByClassName('faqlist-show');
    var list2 = document.getElementsByClassName('faqlist-down');

    if (a.className === 'faqlist-show' && b.className === 'faqlist-down') {
        a.className = 'faqlist-hide';
        b.className = 'faqlist-arrow';
    } else { 

        for (var i in list) {
            if (list.hasOwnProperty(i)) {
                list[i].className = 'faqlist-hide'
            }
        }

        for (var i in list2) {
            if (list2.hasOwnProperty(i)) {
                list2[i].className = 'faqlist-arrow'
            }
        }
        a.className = 'faqlist-show';
        b.className = 'faqlist-down';
    }

}

function faq2() {    

    var a = document.getElementById('faq2');
    var b = document.getElementById('faqlist2');
    var list = document.getElementsByClassName('faqlist-show');
    var list2 = document.getElementsByClassName('faqlist-down');

    if (a.className === 'faqlist-show' && b.className === 'faqlist-down') {
        a.className = 'faqlist-hide';
        b.className = 'faqlist-arrow';
    } else { 

        for (var i in list) {
            if (list.hasOwnProperty(i)) {
                list[i].className = 'faqlist-hide'
            }
        }

        for (var i in list2) {
            if (list2.hasOwnProperty(i)) {
                list2[i].className = 'faqlist-arrow'
            }
        }
        a.className = 'faqlist-show';
        b.className = 'faqlist-down';
    }
}

function faq3() {
    
    var a = document.getElementById('faq3');
    var b = document.getElementById('faqlist3');
    var list = document.getElementsByClassName('faqlist-show');
    var list2 = document.getElementsByClassName('faqlist-down');

    if (a.className === 'faqlist-show' && b.className === 'faqlist-down') {
        a.className = 'faqlist-hide';
        b.className = 'faqlist-arrow';
    } else { 

        for (var i in list) {
            if (list.hasOwnProperty(i)) {
                list[i].className = 'faqlist-hide'
            }
        }

        for (var i in list2) {
            if (list2.hasOwnProperty(i)) {
                list2[i].className = 'faqlist-arrow'
            }
        }
        a.className = 'faqlist-show';
        b.className = 'faqlist-down';
    }
}

function faq4() {
    
    var a = document.getElementById('faq4');
    var b = document.getElementById('faqlist4');
    var list = document.getElementsByClassName('faqlist-show');
    var list2 = document.getElementsByClassName('faqlist-down');

    if (a.className === 'faqlist-show' && b.className === 'faqlist-down') {
        a.className = 'faqlist-hide';
        b.className = 'faqlist-arrow';
    } else { 

        for (var i in list) {
            if (list.hasOwnProperty(i)) {
                list[i].className = 'faqlist-hide'
            }
        }

        for (var i in list2) {
            if (list2.hasOwnProperty(i)) {
                list2[i].className = 'faqlist-arrow'
            }
        }
        a.className = 'faqlist-show';
        b.className = 'faqlist-down';
    }
}

function faq5() {
   
    var a = document.getElementById('faq5');
    var b = document.getElementById('faqlist5');
    var list = document.getElementsByClassName('faqlist-show');
    var list2 = document.getElementsByClassName('faqlist-down');

    if (a.className === 'faqlist-show' && b.className === 'faqlist-down') {
        a.className = 'faqlist-hide';
        b.className = 'faqlist-arrow';
    } else { 

        for (var i in list) {
            if (list.hasOwnProperty(i)) {
                list[i].className = 'faqlist-hide'
            }
        }

        for (var i in list2) {
            if (list2.hasOwnProperty(i)) {
                list2[i].className = 'faqlist-arrow'
            }
        }
        a.className = 'faqlist-show';
        b.className = 'faqlist-down';
    }
}

function faq6() {
    
    var a = document.getElementById('faq6');
    var b = document.getElementById('faqlist6');
    var list = document.getElementsByClassName('faqlist-show');
    var list2 = document.getElementsByClassName('faqlist-down');

    if (a.className === 'faqlist-show' && b.className === 'faqlist-down') {
        a.className = 'faqlist-hide';
        b.className = 'faqlist-arrow';
    } else { 

        for (var i in list) {
            if (list.hasOwnProperty(i)) {
                list[i].className = 'faqlist-hide'
            }
        }

        for (var i in list2) {
            if (list2.hasOwnProperty(i)) {
                list2[i].className = 'faqlist-arrow'
            }
        }
        a.className = 'faqlist-show';
        b.className = 'faqlist-down';
    }
}

function faq7() {
   
    var a = document.getElementById('faq7');
    var b = document.getElementById('faqlist7');
    var list = document.getElementsByClassName('faqlist-show');
    var list2 = document.getElementsByClassName('faqlist-down');

    if (a.className === 'faqlist-show' && b.className === 'faqlist-down') {
        a.className = 'faqlist-hide';
        b.className = 'faqlist-arrow';
    } else { 

        for (var i in list) {
            if (list.hasOwnProperty(i)) {
                list[i].className = 'faqlist-hide'
            }
        }

        for (var i in list2) {
            if (list2.hasOwnProperty(i)) {
                list2[i].className = 'faqlist-arrow'
            }
        }
        a.className = 'faqlist-show';
        b.className = 'faqlist-down';
    }
}

function faq8() {
    
    var a = document.getElementById('faq8');
    var b = document.getElementById('faqlist8');
    var list = document.getElementsByClassName('faqlist-show');
    var list2 = document.getElementsByClassName('faqlist-down');

    if (a.className === 'faqlist-show' && b.className === 'faqlist-down') {
        a.className = 'faqlist-hide';
        b.className = 'faqlist-arrow';
    } else { 

        for (var i in list) {
            if (list.hasOwnProperty(i)) {
                list[i].className = 'faqlist-hide'
            }
        }

        for (var i in list2) {
            if (list2.hasOwnProperty(i)) {
                list2[i].className = 'faqlist-arrow'
            }
        }
        a.className = 'faqlist-show';
        b.className = 'faqlist-down';
    }
}

function faq9() {

    var a = document.getElementById('faq9');
    var b = document.getElementById('last-elem');
    var list = document.getElementsByClassName('faqlist-show');
    var list2 = document.getElementsByClassName('faqlist-down');

    if (a.className === 'faqlist-show' && b.className === 'faqlist-down') {
        a.className = 'faqlist-hide';
        b.className = 'faqlist-arrow';
    } else { 

        for (var i in list) {
            if (list.hasOwnProperty(i)) {
                list[i].className = 'faqlist-hide'
            }
        }

        for (var i in list2) {
            if (list2.hasOwnProperty(i)) {
                list2[i].className = 'faqlist-arrow'
            }
        }
        a.className = 'faqlist-show';
        b.className = 'faqlist-down';
    }
}

function scrolldown() {

    document.getElementById('scrollup').style.display = 'inline-block';
    document.getElementById('scrolldown').style.display = 'none';
    document.getElementById('image-top').style.display = 'none';
    document.getElementById('image-bottom').style.display = 'inline-block';
    document.getElementById('row').style.marginTop = '40px';

}

function scrollup() {

    document.getElementById('scrollup').style.display = 'none';
    document.getElementById('scrolldown').style.display = 'inline-block';
    document.getElementById('image-top').style.display = 'inline-block';
    document.getElementById('image-bottom').style.display = 'none';
    document.getElementById('row').style.marginTop = '0px';

}

function mousebutton() {
    if (
        $('#b1:hover').length != 0) {
        document.getElementById('b1').style.filter = 'invert(100%)';
    }
    if (
        $('#b2:hover').length != 0) {
        document.getElementById('b2').style.filter = 'invert(100%)';
    }
    if (
        $('#b3:hover').length != 0) {
        document.getElementById('b3').style.filter = 'invert(100%)';
    }
    if (
        $('#b4:hover').length != 0) {
        document.getElementById('b4').style.filter = 'invert(100%)';
    }
    if (
        $('#b5:hover').length != 0) {
        document.getElementById('b5').style.filter = 'invert(100%)';
    }
}

function normalbutton() {

    document.getElementById('b1').style.filter = 'invert(0%)';
    document.getElementById('b2').style.filter = 'invert(0%)';
    document.getElementById('b3').style.filter = 'invert(0%)';
    document.getElementById('b4').style.filter = 'invert(0%)';
    document.getElementById('b5').style.filter = 'invert(0%)';

}