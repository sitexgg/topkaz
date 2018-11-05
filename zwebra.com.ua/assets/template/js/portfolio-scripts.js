//Ajax filter
$(function() {
	var request;
	if (window.XMLHttpRequest) {
		request = new XMLHttpRequest();
	} else {
		request = new ActiveXObject("Microsoft.XMLHTTP");
	}
	request.open('GET', 'js/filterizr.json', false);
	request.onreadystatechange = function() {
		if ((request.readyState===4) && (request.status===200)) {
			var items = JSON.parse(request.responseText);
			var lastProjectsElement = '<div class="col-xs-4 col-sm-4 col-md-3 filtr-item">';
          lastProjectsElement += '<div class="img-wrapper">';
          lastProjectsElement += '<img class="img-responsive">';
          lastProjectsElement += '<a class="b-index__LastProjects_Describe">';
          lastProjectsElement += '<h3 class="b-index__LastProjects_DescribeHeader"></h3>';
          lastProjectsElement += '<p class="b-index__LastProjects_DescribeText"></p></a></div></div>';
      var FiltrLimit = 25;

      function buildLastProjectsElements() {
        for (var i = 1; i < FiltrLimit; i++) {
          $('.filtr-container').append(lastProjectsElement);
        }
      }

      function findFiltrElements() {
        for (var key in items) {
          $('.filtr-item').eq(key).find('.b-index__LastProjects_Describe').attr("href", items[key].projectSrc);
          $('.filtr-item').eq(key).find('.b-index__LastProjects_DescribeHeader').text(items[key].name);
          $('.filtr-item').eq(key).find('.b-index__LastProjects_DescribeText').text(items[key].task);
          $('.filtr-item').eq(key).data('category', items[key].projectCategory).attr('data-category', items[key].projectCategory);
          $('.filtr-item').eq(key).find('.img-responsive').attr("src", items[key].imgSrc);
          $('.filtr-item').eq(key).find('.img-responsive').attr("alt", items[key].imgAlt);
        }
      }

      buildLastProjectsElements();
      findFiltrElements();

      $(function() {
       $('.simplefilter li').click(function() {
        $('.simplefilter li').removeClass('active');
        $(this).addClass('active');
      });
     });

    }

    setTimeout(function() {
      $('.filtr-container').filterizr();
    }, 10);

  }
  request.send();
})

