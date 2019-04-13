$(document).ready(function(){

			var banner = sessionStorage.getItem('banner_popup');
			if (banner != "1")
			{
				abre_banner();
				sessionStorage.setItem('banner_popup', "1");
			}
		});

		function fecha_banner_timeout() {
			setTimeout(function(){
				fecha_banner()
			}, 10000);
		}

		function abre_banner() {
				var banner_obj = document.getElementById('banner_popup');

				banner_obj.style.left = '';
				banner_obj.style.top = '';

				banner_obj.style.display = '';

				fecha_banner_timeout();
		}

		function fecha_banner() {
			var banner_obj = document.getElementById('banner_popup');
			banner_obj.style.display = 'none';
		}