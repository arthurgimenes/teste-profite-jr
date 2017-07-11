$('.slide_destaque .slide-wrap').cycle({
    speed: 600,
    manualSpeed: 100,
    fx: 'fadeout',
    manualFx: 'fadeout',
    slides: 'picture',
    prev: '.sd-arrow_prev',
    next: '.sd-arrow_next',
    pager: '.sd-pager'
});

$('.slide_produtos .slide-wrap').cycle({
    speed: 600,
    manualSpeed: 100,
    fx: 'fadeout',
    manualFx: 'fadeout',
    slides: '.sp-wrap_produtos',
    prev: '.sp-arrow_prev',
    next: '.sp-arrow_next',
    pager: '.sp-pager'
});
