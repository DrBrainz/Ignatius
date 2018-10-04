
/**
" A Property Of Brainz Tech Inc. All Rights Reserved"
<!-- 
*Author: Edwin Asare (Dr.Brainz)
*Author URL: https://www.braintech.cf
*Author Email: brainztech08@gmail.com
*Author Email: info@brainztech.cf.com
*Copyright(c) 2018 Brainz Tech Inc. All Rights Reserved
*This is a Premium Web Hosting theme for your hosting company,you may edit it per your needs.
*Contact the author or visit our website for more premium themes for your project.

JS FILE
-This a js file to add some styles on navbar when scrolled.

**Note: Show some love for our hardwork by remaining the footer credit which link back to our website.
  Or you can use your own means to link back to website.
  *But not that footer credit must remain the same according to license agreement.*
  Thanks.

  NB: Please in this theme, we use our own pictures, texts, fonts & styles. You can add your own 
      according to your needs.
      Thanks.
**
-->
**/

$(document).ready(function () {
	// body...
	$(window).scroll(function () {
		// body...
		var scroll = $(window).scrollTop();
		if (scroll > 50) {
			$('.navbar').css('background', '#21252999');
		} else {
			$('.navbar').css('background', 'transparent');
		}
	});
});