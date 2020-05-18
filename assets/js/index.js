// animated typed heading
var typed3 = new Typed('#typed3', {
    strings: ["I'm a <strong>Developer.</strong>", "I'm a <strong>Student.</strong>", "I'm a <strong>Creator.</strong>"],
    typeSpeed: 50,
    backSpeed: 40,
    smartBackspace: true, // this is a default
    loop: true,
    backDelay: 1000,
    showCursor: false,
    onReset: (self) => {"I'm a <strong>Student.</strong>"}
  });
// flowtype aka responsive fonts
$('body').flowtype({
   minimum   : 500,
   maximum   : 1200,
   minFont   : 12,
   maxFont   : 40,
   fontRatio : 30
}); 

// fullpage
var myFullpage = new fullpage('#fullpage', {
		sectionsColor: ['#ffffff', '#ffffff', '#ffffff','#ffffff'],
        navigation: false,
	});