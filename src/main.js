 import { gsap, Linear } from 'gsap'
 import ScrollTrigger from 'gsap/ScrollTrigger'

 gsap.registerPlugin(ScrollTrigger)
 
 const main = () => {
    const timeline = gsap.timeline({
        scrollTrigger: {
            trigger: '.scene',
            start: 'top top',
            end: '+=400%',
            scrub: true,
            pin: true,
            anticipatePin: 1,
        }
    })
    
    gsap.defaults({
        ease: Linear.easeNone
    })
    
    gsap.set('.headline', { rotate: 40, scale: 8.5, transformOrigin: '50% 50%'})
    timeline.to('.headline', { scale: 1, rotate: 0, duration: 64, transformOrigin: '50% 50%' })
    
    timeline.to('.text', {
        textShadow: [
            '0px 0px 5px var(--text-shadow-color)',
            '0px 0px 10px var(--text-shadow-color)',
            '0px 0px 10px var(--text-shadow-color)',
            '0px 0px 10px var(--text-shadow-color)',
            '0px 0px 12px var(--text-shadow-color)',
            '0px 0px 24px var(--text-shadow-color)',
            '0px 0px 36px var(--text-shadow-color)',
            '0px 0px 42px var(--text-shadow-color)'
        ],
        duration: 16 
    }, '>16')
    timeline.to('.text', { 
        textShadow: [
            '0px 0px 0px var(--text-shadow-color)',
            '0px 0px 0px var(--text-shadow-color)',
            '0px 0px 0px var(--text-shadow-color)',
            '0px 0px 0px var(--text-shadow-color)', 
            '0px 0px 0px var(--text-shadow-color)', 
            '0px 0px 0px var(--text-shadow-color)', 
            '0px 0px 0px var(--text-shadow-color)', 
            '0px 0px 0px var(--text-shadow-color)'
        ],
        duration: 16
    }, '>')
    timeline.to('.text', { textShadow: 'none' }, '>')
    
    timeline.addLabel('shadowEnd', '>16')
    
    gsap.set('.curtain', { clipPath: 'polygon(0 50%, 100% 50%, 100% 50%, 0 50%)' })
    gsap.set('.curtain .left', { clipPath: 'polygon(0 0, 0 0, 0 100%, 0 100%)' })
    gsap.set('.curtain .right', { clipPath: 'polygon(100% 0, 100% 0, 100% 100%, 100% 100%)' })
    
    timeline.to('.curtain', {
        duration: 32,
        clipPath: 'polygon(0 0%, 100% 0%, 100% 100%, 0 100%)',
    }, 'shadowEnd')
    
    timeline.to('.curtain .left', {
        duration: 8,
        clipPath: 'polygon(0 0, 50% 0, 50% 100%, 0% 100%)',
    }, 'shadowEnd')
    
    timeline.to('.curtain .right', {
        duration: 8,
        clipPath: 'polygon(50% 0, 100% 0, 100% 100%, 50% 100%)',
    }, 'shadowEnd')
    
    timeline.to('.top', { y: '-100%', duration: 32 }, 'shadowEnd')
    timeline.to('.bottom', { y: '100%', duration: 32 }, 'shadowEnd')
    timeline.to('.top > p', { y: '70%' }, 'shadowEnd')
    timeline.to('.bottom > p', { y: '-45%' }, 'shadowEnd')
    timeline.to('.top',  { scale: 6.0, transformOrigin: '50% 100%', duration: 32 }, 'shadowEnd')
    timeline.to('.bottom',  { scale: 6.0, transformOrigin: '50% 0%', duration: 32 }, 'shadowEnd')
    
    timeline.to(null,  { duration: 2 }, '>')
    
    //timeline.to('.grid',  { rotateZ: -15, transformOrigin: '50% 50%', duration: timeline.duration()}, 0)
    
}

document.addEventListener('DOMContentLoaded', main)
