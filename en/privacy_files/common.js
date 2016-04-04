$(document).ready(function(){

	//スムーズスクロール
	$('a[href^=#]').click(function() {
		var speed = 500;
		var href= $(this).attr("href");
		var target = $(href == "#" || href == "" ? 'html' : href);
		var position = target.offset().top;
		$($.browser.safari ? 'body' : 'html').animate({scrollTop:position}, speed, 'swing');
			return false;
	});

	function externalLinks() {
	if (!document.getElementsByTagName) return;
		var anchors = document.getElementsByTagName("a");
		for (var i=0; i<anchors.length; i++) {
			var anchor = anchors[i];
			if (anchor.getAttribute("href") && ((anchor.getAttribute("rel") == "external nofollow") || (anchor.getAttribute("rel") == "nofollow external") || (anchor.getAttribute("rel") == "external"))) {
				anchor.target = "_blank";
			}
		}
	}
	externalLinks();

});

function writeHeaderTop(rootDir){

	$.ajax({
		url: rootDir + "header_top.html", 
		cache: false,
		async: false, 
		success: function(html){

			html = html.replace(/\{\$root\}/g, rootDir);
			document.write(html);
		}
	});
}

function writeHeader(rootDir){

	$.ajax({
		url: rootDir + "header.html", 
		cache: false,
		async: false, 
		success: function(html){

			html = html.replace(/\{\$root\}/g, rootDir);
			document.write(html);
		}
	});
}

function writeHeaderTopNew(rootDir){

	$.ajax({
		url: rootDir + "header_top_new.html", 
		cache: false,
		async: false, 
		success: function(html){

			html = html.replace(/\{\$root\}/g, rootDir);
			document.write(html);
		}
	});
}

function writeHeaderNew(rootDir){

	$.ajax({
		url: rootDir + "header_new.html", 
		cache: false,
		async: false, 
		success: function(html){

			html = html.replace(/\{\$root\}/g, rootDir);
			document.write(html);
		}
	});
}

function writeHeaderF(rootDir){

	$.ajax({
		url: rootDir + "header_fujitsu.html", 
		cache: false,
		async: false, 
		success: function(html){

			html = html.replace(/\{\$root\}/g, rootDir);
			document.write(html);
		}
	});
}
function writeFooter(rootDir){

	$.ajax({
		url: rootDir + "footer.html", 
		cache: false,
		async: false, 
		success: function(html){

			html = html.replace(/\{\$root\}/g, rootDir);
			document.write(html);
		}
	});
}

