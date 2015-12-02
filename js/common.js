///////////include nav header 
$("#header_menu").html('<div class="navbar-header"><button type="button" data-target="#navbarCollapse" data-toggle="collapse" class="navbar-toggle"><span class="sr-only">Toggle navigation</span><span class="icon-bar"></span><span class="icon-bar"></span><span class="icon-bar"></span></button></div><a href="index.html" class="navbar-brand"><img src="images/logo.jpg" alt="unit" class="logo_img" /></a><div id="navbarCollapse" class="collapse navbar-collapse"><ul class="nav navbar-nav"><li><a href="" class="active_menu">Home</a></li><li><a href=""> About us </a></li><li><a href="">Solutions</a></li><li><a href="">Services</a></li><li><a href="">Clients & Partners </a></li><li><a href="">News </a></li><li><a href="">Case Study</a></li></ul></div><div class="group_language clearfix"><a href="" class="vn_lang"><img src="images/vn_language.jpg" alt="vietnamese language" /></a><a href="" class="en_lang"><img src="images/en_language.jpg" alt="english language" /></a></div>');

///////////include footer
$("footer").html('<div class="row footer_contain1 clearfix"><div class="col-lg-4 col-md-4 col-sm-12"><h1>Quick Access</h1><ul class="ft_group1"><li><a href="">About us</a></li><li><a href="">Clients & Partners</a></li><li><a href="">Solutions</a></li><li><a href="">Why choose us</a></li><li><a href="">News</a></li><li><a href="">Services</a></li><li><a href="">Careers</a></li></ul></div><div class="col-lg-3 col-md-3 col-sm-12"><ul  class="ft_group2"><li><a href="">Case Study</a></li><li><a href="">Supports</a></li><li><a href="">Sitemap</a></li><li><a href="">Career</a></li></ul></div><div class="col-lg-5 col-md-5 col-sm-12"><address class="add_first">Headquarter: 157 Nguyen Thi Thap, Tan Phu Ward , District 7, HCM City, Vietnam. - Work office: VIJA Park , 38-2-2 Tran Nao, An Loi Dong Ward, District 2, HCM City, Vietnam.</address><address class="add_second">Phone: (84-8) 37 402 388 – 37 402 908 - Fax: (84-8) 37</address><address class="add_third">Email: <a hre="mailto:someone@example.com?Subject=info@unit.com.vn" class="link_mail">info@unit.com.vn</a></address><div class="group_social clearfix"><a href=""><img src="images/tw.jpg" alt="" /></a><a href=""><img src="images/youtube.jpg" alt="" /></a><a href=""><img src="images/fb.jpg" alt="" /></a><a href=""><img src="images/in.jpg" alt="" /></a></div></div></div><div class="clearfix footer_contain2"><div class="footer_contain2_center row"><div class="col-lg-6 col-md-6 col-sm-12">Copyright © 2015 by Unit Corporation  </div><div class="col-lg-6 col-md-6 col-sm-12 alignR"><a href="http://www.unit.com.vn">www.unit.com.vn</a></div></div></div>');


////////////////fittext h1
$("h1").fitText(
 1.2, {
	minFontSize: '24px',
	maxFontSize: '40px'
}
);

////////////////fittext h2
$("h2").fitText(
 1.2, {
	minFontSize: '16px',
	maxFontSize: '22px'
}
);