window.fbAsyncInit = function() {
	FB.init({
        // appId       : '169565983252208',///dev
        appId       : '461557020624035',///prod
		status     : true,
		cookie     : true,
		xfbml      : true
	});
	FB.Canvas.setSize({ width:810, height:1200});
};

(function(d){
   var js, id = 'facebook-jssdk', ref = d.getElementsByTagName('script')[0];
   if (d.getElementById(id)) {return;}
   js = d.createElement('script'); js.id = id; js.async = true;
   js.src = "//connect.facebook.net/en_US/all.js";
   ref.parentNode.insertBefore(js, ref);
}(document));

// var urlHome='http://localhost/samsung_lavadoraswobble_web/'//local
// var urlHome='http://samsung-microondas-landing.development.phantasia.pe'//dev
var urlHome='http://cheffsamsung.samsung-peru.com'//prod
	//console.log(urlHome);


function compartirPagina(n){
	//console.log(urlHome);
	FB.ui({
		method: 'feed',
		name: 'El secreto de tu sazón y sabor.',
		link: urlHome,
		picture: urlHome+'/assets/face/site.png',
		caption: 'Samsung',
		description:'Prepara exquisitas comidas y postres con la línea de horno microondas Samsung. ¡Conócelas tú también aquí!'
	},function(response) {
			if (response && response.post_id) {
				_gaq.push(['_trackEvent', 'samsung-landingmicroondas','home','compartir']);

			} else {
				//alert('Post was not published.');
			} 
	});
}

function compartirCello(n){
	FB.ui({
		method: 'feed',
		name: 'La estrella en la cocina.',
		link: urlHome+'/#cello',
		picture: urlHome+'/assets/face/cello.jpg',
		caption: 'Samsung',
		description:'Cello, el horno microondas que hace de todo: hornea, dora, cocina, rostiza, recalienta y descongela. ¡Conócela aquí!'
	},function(response) {
			if (response && response.post_id) {
				_gaq.push(['_trackEvent', 'samsung-landingmicroondas','cello','compartir']);

			} else {
				//alert('Post was not published.');
			} 
	});
}

function compartir_0(n){
	//console.log(urlHome);
	FB.ui({
		method: 'feed',
		name: 'Un horno elegante y sofisticado.',
		link: urlHome+'/#familia-MG402MADXBB',
		picture: urlHome+'/assets/face/microonda_0.jpg',
		caption: 'Samsung',
		description:'Con la línea de hornos microondas Mirror con dorador deslumbrarás a todos preparando los mejores platillos. ¡Conócela tú también!'
	},function(response) {
			if (response && response.post_id) {
				_gaq.push(['_trackEvent', 'samsung-landingmicroondas','familia/modelo1','compartir']);

			} else {
				//alert('Post was not published.');
			}
	});
}

function compartir_1a(n){
	FB.ui({
		method: 'feed',
		name: 'El microondas que todos quieren.',
		link: urlHome+'/#familia-AGE1103TST',
		picture: urlHome+'/assets/face/microonda_1.jpg',
		caption: 'Samsung',
		description:'Con la línea de hornos microondas Big Plus con dorador harás de tus platos favoritos un manjar delicioso. ¡Conócela tú también!'
	},function(response) {
			if (response && response.post_id) {
				_gaq.push(['_trackEvent', 'samsung-landingmicroondas','familia/modelo2','compartir']);

			} else {
				//alert('Post was not published.');
			}
	});
}

function compartir_1b(n){
	FB.ui({
		method: 'feed',
		name: 'El microondas que todos quieren.',
		link: urlHome+'/#familia-AGE1103TW',
		picture: urlHome+'/assets/face/microonda_1b_.jpg',
		caption: 'Samsung',
		description:'Con la línea de hornos microondas Big Plus con dorador harás de tus platos favoritos un manjar delicioso. ¡Conócela tú también!'
	},function(response) {
			if (response && response.post_id) {
				_gaq.push(['_trackEvent', 'samsung-landingmicroondas','familia/modelo2','compartir']);

			} else {
				//alert('Post was not published.');
			}
	});
}

function compartir_2(n){
	FB.ui({
		method: 'feed',
		name: 'El lujo hecho microondas.',
		link: urlHome+'/#familia-MS402MADXBB',
		picture: urlHome+'/assets/face/microonda_2.jpg',
		caption: 'Samsung',
		description:'Con la línea de hornos microondas Mirror tus comidas y postres tendrán una sazón y sabor especial. ¡Conócela tú también!'
	},function(response) {
			if (response && response.post_id) {
				_gaq.push(['_trackEvent', 'samsung-landingmicroondas','familia/modelo3','compartir']);

			} else {
				//alert('Post was not published.');
			}
	});
}

function compartir_3a(n){
	FB.ui({
		method: 'feed',
		name: 'Cocinar será todo un placer.',
		link: urlHome+'/#familia-AME1113TST',
		picture: urlHome+'/assets/face/microonda_3.jpg',
		caption: 'Samsung',
		description:'Con la línea de hornos microondas Big Plus prepararás tus comidas de manera rápida y sencilla dándole un sabor especial. ¡Conócela tú también!'
	},function(response) {
			if (response && response.post_id) {
				_gaq.push(['_trackEvent', 'samsung-landingmicroondas','familia/modelo4','compartir']);

			} else {
				//alert('Post was not published.');
			}
	});
}

function compartir_3b(n){
	FB.ui({
		method: 'feed',
		name: 'Cocinar será todo un placer.',
		link: urlHome+'/#familia-AME1113TW',
		picture: urlHome+'/assets/face/microonda_3b_.jpg',
		caption: 'Samsung',
		description:'Con la línea de hornos microondas Big Plus prepararás tus comidas de manera rápida y sencilla dándole un sabor especial. ¡Conócela tú también!'
	},function(response) {
			if (response && response.post_id) {
				_gaq.push(['_trackEvent', 'samsung-landingmicroondas','familia/modelo4','compartir']);

			} else {
				//alert('Post was not published.');
			}
	});
}

function compartir_4(n){
	FB.ui({
		method: 'feed',
		name: 'Elegancia a otro nivel.',
		link: urlHome+'/#familia-AME83M',
		picture: urlHome+'/assets/face/microonda_4.jpg',
		caption: 'Samsung',
		description:'Con la línea de hornos microondas Marimba te lucirás preparando los mejores y deliciosos platos. ¡Conócela tú también!'
	},function(response) {
			if (response && response.post_id) {
				_gaq.push(['_trackEvent', 'samsung-landingmicroondas','familia/modelo5','compartir']);

			} else {
				//alert('Post was not published.');
			}
	});
}

function compartir_5(n){
	FB.ui({
		method: 'feed',
		name: 'Tu ayudante N°1 en la cocina.',
		link: urlHome+'/#familia-AMW831K',
		picture: urlHome+'/assets/face/microonda_5.jpg',
		caption: 'Samsung',
		description:'Con la línea de hornos microondas Soft cautivarás el paladar de todos tus invitados preparando exquisitos platos. ¡Conócela tú también!'
	},function(response) {
			if (response && response.post_id) {
				_gaq.push(['_trackEvent', 'samsung-landingmicroondas','familia/modelo6','compartir']);

			} else {
				//alert('Post was not published.');
			}
	});
}
