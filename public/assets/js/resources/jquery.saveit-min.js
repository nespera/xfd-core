(function($){$.fn.saveit=function(options){var defaults={key:'data',def:'null',errorfunc:function(){alert("Sorry, your browser doesn't support local storage.");}},settings=$.extend({},defaults,options);this.each(function(){var $this=$(this);if($this.val()){var html=$this.val();}else if($this.html()){var html=$this.html();}else{var html=settings.def;}
if(localStorage){if(html){localStorage.setItem(settings.key,html);}}else{return settings.errorfunc(settings.errorparams);}});return this;}

$.fn.loadit=function(options){var defaults={key:'data',errorfunc:function(){alert("Sorry, your browser doesn't support local storage");},html:true},settings=$.extend({},defaults,options);this.each(function(){var $this=$(this);if(localStorage){var data=localStorage.getItem(settings.key);if(data){if(settings.html){if($this.is('textarea')||$this.is('input')){$this.val(data);}else{$this.html(data);}}else{$this.text(data);}}else{return false;}}else{return settings.errorfunc(settings.errorparams);}});return this;}

$.fn.deleteit=function(options){var defaults={key:'data'},settings=$.extend({},defaults,options);localStorage.removeItem(key);return this;}})(jQuery);
