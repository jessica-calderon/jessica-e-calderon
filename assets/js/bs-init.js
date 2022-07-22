
if (window.innerWidth < 768) {
	[].slice.call(document.querySelectorAll('[data-bss-disabled-mobile]')).forEach(function (elem) {
		elem.classList.remove('animated');
		elem.removeAttribute('data-bss-hover-animate');
		elem.removeAttribute('data-aos');
	});
}

document.addEventListener('DOMContentLoaded', function() {
	AOS.init();

	var hoverAnimationTriggerList = [].slice.call(document.querySelectorAll('[data-bss-hover-animate]'));
	var hoverAnimationList = hoverAnimationTriggerList.forEach(function (hoverAnimationEl) {
		hoverAnimationEl.addEventListener('mouseenter', function(e){ e.target.classList.add('animated', e.target.dataset.bssHoverAnimate) });
		hoverAnimationEl.addEventListener('mouseleave', function(e){ e.target.classList.remove('animated', e.target.dataset.bssHoverAnimate) });
	});
}, false);
// tech stack sphere logic using tagCloud
// tech stack array
const myTags = [
    'HTML', 'CSS', 'JavaScript',
    'jQuery', 'Bulma CSS', 'Bootstrap',
    'Node.js', 'Express.js', 'npm',
    'Jest', 'GitHub', 'Heroku', 'git', 'Adobe Illustrator',
     'MySQL', 'Sequelize',
     'Adobe Photoshop'
];
// declare tagcloud function for id techSpere
// with tech stack array
var tagCloud = TagCloud('#techSphere', myTags,{

  // radius in px
  radius: 150,

  // animation speed
  // slow, normal, fast
  maxSpeed: 'fast',
  initSpeed: 'fast',

  // 0 = top
  // 90 = left
  // 135 = right-bottom
  direction: 135,

  // interact with cursor move on mouse out
  keep: true

}); 
var colors = ['#34A853', '#FBBC05', '#4285F4', '#7FBC00', 'FFBA01', '01A6F0'];
// pick and set text to random color from colors array on reload
var random_color = colors[Math.floor(Math.random() * colors.length)];
document.querySelector('#techSphere').style.color = random_color;