        ScrollReveal({
            // reset:true,
            distance : '100px',
            opacity: 0,
            duration: 1500,
            delay:400,
            easing: 'cubic-bezier(0.5, 0, 0, 1)',

        });

        // learn now session scroll

        ScrollReveal().reveal('nav ul,.sponsor-title',{delay:500 , origin : 'top',interval : 100,distance:'50px'}); 
        ScrollReveal().reveal('.title-1,.title-2,.title-3,.learn-desc,.btn-learn-now',{ delay : 500 , origin : 'left',interval : 200});
        ScrollReveal().reveal('.img-learn,.session-popular .title',{delay : 700 , origin : 'bottom',distance : '50px'});
        ScrollReveal().reveal('.btn-auth,.session-popular .swiper',{delay : 600 , origin : 'right',mobile:false});
        ScrollReveal().reveal('.navbar-brand ,.session-title,.img-certificate',{delay : 700 , origin : 'left'});
        ScrollReveal().reveal('.site-div',{delay : 500 , origin : 'bottom'})
        ScrollReveal().reveal('.session-info .bg-secondary,.copyright-text-1,.copyright-text-2',{delay : 800 , origin : 'bottom',distance:'50px'});
        ScrollReveal().reveal('.category-box',{delay : 600 , origin:'top',interval:100,});
        ScrollReveal().reveal('.review-box,.certificate-title,.certificate-text,.btn-enroll',{delay : 700 , origin:'right',interval:100,mobile:false});
        ScrollReveal().reveal('.sponsor-container',{delay:500 , distance:'20px', opacity: 0,interval : 100}); 

        ScrollReveal().reveal('.btn-auth,.session-popular .swiper',{delay : 600 , origin : 'bottom',distance:'50px',desktop:false});
        ScrollReveal().reveal('.review-box,.certificate-box',{delay : 700 , origin:'bottom',distance:'50px',interval:100,desktop:false});

        ; 

    