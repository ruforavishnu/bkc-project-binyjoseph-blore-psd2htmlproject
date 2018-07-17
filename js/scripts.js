

var $totalImages = 4;
var $imageIndex = 0;

var $imageUrlsArray = [
				'imgs/BKC4.jpg',
				'imgs/BKC1.jpg',
				'imgs/BKC3.jpg',
				'imgs/BKC2.jpg'
];


var $imageHeadingsArray = [
		"Consulting",
		"BIO Pharmaceuticals",
		"Executive Coaching",
		"Regulations"
];




function runSlideShow()
{
	console.log('run slideshow invoked');

	setInterval(changeSlide,3000);
}

function changeSlide()
{
	$imageIndex++;
	if($imageIndex % $totalImages == 0)
	{
		$imageIndex = 0;
	}
	//console.log('change slide fn invoked, imageIndex:'+$imageIndex+', imageUrls value:'+$imageUrlsArray[$imageIndex]);
	
	$str = "url('"+ $imageUrlsArray[$imageIndex] +"')";
	//console.log($str);
	
	$('.slider-display-widget').css("background-image", $str);
	$('.slider-header-title-word').text($imageHeadingsArray[$imageIndex]);

}



	$(document).ready(function()
	{

		runSlideShow();

		
		var $total_testimonials = 5;
		var $index = 0;
		var $testimonials_content = 
		 [
		 	"M/s Baikunje Consultancy, a Bangalore-based firm, evaluated the parameters required for implementing the Good Distribution Practices for Ibn Sina Pharmacy LLC, Muscat, Sultanate of Oman. The professional services offered by Baikunje Consultancy enabled the GDP system implementation at our end. Their ‘hands-on efforts’ are appreciated. We wish them the very best!!",
		 	"At Sovereign Pharma Pvt Ltd (SRPL), quality system, data integrity and reliability, policy, procedure developmentand implementation were supported by the Baikunje Consultancy.We also utilised their service for SAP system validation compliance in accordance with GAMP-5. This has helped us upgrade our pharmaceutical quality system in compliance with regulatory expectations. We are very happy with their services, which we have used multiple times. SPPL Team thanks them for continued support in a highly professional manner.With Regards," ,
		 	"For our clinical study in India, Umesh (Baikunje Consultancy) monitored it for GCP compliance and submitted a well-written report. We are very pleased with his professionalism and the alacrity with which he did the work. Thanks, Umesh. It was great to be associated with you.",
		 	"I had an opportunity to work with Umesh Baikunje for one of the Stemade projects wherein he consulted us on GMP requirement and compliance for dental stem cell banking. His technical expertise and vast experience in this field was of immense help in this project. Wish him all the best in this endeavour and would surely look forward to working with him in the future too!!!",
		 	"We collaborated with Baikunje Consultancy to design and deliver training workshops for GxP training requirements. Mr. Umesh Baikunje’s vast experience and practical examples brought the training session to life. We look forward to work in future projects."
		 ];

		 var $testimonials_footer =
		 [
		 	"P.S.Ramesh Prakash, General Manager, Ibn Sina Pharmacy LLC, Sultanate of Oman",
		 	"Mr. Piyush V. Desai and team, Director-Operations, M/sSovereign Pharma Pvt. Ltd., Nani Daman, India",
		 	"Dr. Salim Shah, President Sarfez Pharmaceuticals, Vienna, USA",
		 	"Rajashri Mokashi, Chief Operating Officer, Stemade Biotech Pvt. Ltd, Mumbai",
		 	"BiOZEEN"
		 ];

		 //MS Soverigne Pharma pvt ltd. in one lin

		 function showNextTestimonial()
		 {
		 	$index+=1

			if($index == 5)
			{
				$index = 0;
			}	

			$(".testimonial-content").animate({	'opacity': 0 }, 1000, function(){
				$(".testimonial-content").text($testimonials_content[$index]);
			}).animate({'opacity':1}, 1000 );

			$(".testimonial-footer").animate({	'opacity': 0 }, 1000, function(){
				$(".testimonial-footer").text($testimonials_footer[$index]);
			}).animate({'opacity':1}, 1000 );			

		 }


		
		

		 function showPreviousTestimonial()
		 {
		 	$index-=1

			if($index == -1)
			{
				$index = $total_testimonials-1;// -1 for offset as arrary begins at 0 and ends at n-1
			}	

			$(".testimonial-content").animate({	'opacity': 0 }, 1000, function(){
				$(".testimonial-content").text($testimonials_content[$index]);
			}).animate({'opacity':1}, 1000 );

			$(".testimonial-footer").animate({	'opacity': 0 }, 1000, function(){
				$(".testimonial-footer").text($testimonials_footer[$index]);
			}).animate({'opacity':1}, 1000 );			

		 }


		$("#testimonial-next-button").click(function()
		{
			showNextTestimonial();
		});

		$("#testimonial-prev-button").click(function()
		{
			showPreviousTestimonial();
		});
		


		
	});

//every 5 seconds a function should be called

//that function will invoke change testimonial content and testimonial footer


