document.addEventListener('DOMContentLoaded', () => {
    let controller = new ScrollMagic.Controller();

    let timeline = new TimelineMax();
    timeline
    .to('#sexto', 6, {
        y: -700
    })
    .to('#quinto', 6, {
        y: -500
    }, '-=6')
    .to('#cuarto', 6, {
        y: -400
    }, '-=6')
    .to('#tercero', 6, {
        y: -300
    }, '-=6')
    .to('#segundo', 6, {
        y: -200
    }, '-=6')
    .to('#primero', 6, {
        y: -100
    }, '-=6')
    .to('.content, .blur', 6, {
        top: '0%'
    }, '-=6')
    .to('.title, nav, .footer-wrapper', 6, {
      y: -600,
    }, '-=6')
    .from ('.one', 3,{
      top: '40px',
      autoAlpha: 0
    }, '-=4')
    .from ('.two', 3,{
      top: '40px',
      autoAlpha: 0
    }, '-=3.8')
    .from ('.three', 3,{
      top: '40px',
      autoAlpha: 0
    }, '-=3.6')
    .from ('.four', 3,{
      top: '40px',
      autoAlpha: 0
    }, '-=3.4')
    .from('.text', 3,{
      y:60,
      autoAlpha: 0
    }, '-=4')
    
    let scene = new ScrollMagic.Scene({
        triggerElement: 'section',
        duration: '200%',
        triggerHook: 0
    })
    .setTween(timeline)
    .setPin('section')
    .addTo(controller);
})
