var bg = document.querySelector('#bg');
var menu = document.querySelector('#menu');

menu.addEventListener('click', function(){
    bg.style.transform = 'scale(.8)';
    bg.style.borderRadius = '6px';
    bg.style.boxShadow = '0 150px 45px -100px rgba(0,0,0,0.490)';
})
var tl = gsap.timeline();

tl.from('.navitem',{
    stagger: .2,
    duration: 1,
    y: 22,
    delay: 0.4,
    ease: 'Expo.easeInOut',
    opacity: 0
})
.from('.cenitem', {
    stagger: .2,
    duration: 1,
    y: 20,
    delay: 0.4,
    opacity: 0,
    ease: 'Ease.easeInOut'
})
.from('.cenhead', {
    duration: 1,
    y: 20,
    delay: 0.4,
    ease: 'Expo.easeInOut',
    opacity: 0
})
.from('.up', {
    stagger: .2,
    duration: 1,
    opacity: 0,
    y: 20,
    delay: 0.4,
    ease: 'Expo.easeInOut',
})