/* ============================================================
 * bootstrap-portfilter.js for Bootstrap v2.3.1
 * https://github.com/geedmo/portfilter
 * ============================================================
 * Copyright 2012 Twitter, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * ============================================================
 * 
 * jQuery (Very) Lightweight Portfolio Filter for Bootstrap
 * 
 * Author: Geedmo (http://geedmo.com)
 * Version: 1.0
 * Usage:
 *   For handlers
 * 	   <tag data-toggle="portfilter" data-target="targetname">...
 *   For items
 * 	   <tag data-tag="targetname">...
 * ============================================================ */

!function ($) {

  "use strict"; // jshint ;_;
	
  var pluginName = 'portfilter';

 /* PUBLIC CLASS DEFINITION
  * ============================== */

  var PortFilter = function (element) {
    
    this.$element = $(element)
    this.stuff 	  = $('[data-tag]');
    this.target   = this.$element.data('target') || '';

  }

  PortFilter.prototype.filter = function (params) {
    var items = [],
    	target = this.target;
    this.stuff
        .fadeOut('fast').promise().done(function(){
            $(this).each(function(){
                if($(this).data('tag') == target || target == 'all') 
                    items.push(this);
            });
            $(items).show()
        });  
  }


 /* PLUGIN DEFINITION
  * ======================== */

  var old = $.fn[pluginName]

  $.fn[pluginName] = function (option) {
    return this.each(function () {
      var $this = $(this)
        , data = $this.data(pluginName);
      
      if(!data) $this.data(pluginName, (data = new PortFilter(this)))
      
      if (option == 'filter') data.filter()
    })
  }
  
  // DEFAULTS
  $.fn[pluginName].defaults = {}
  
  // CONSTRUCTOR CONVENTION 
  $.fn[pluginName].Constructor = PortFilter;


 /* PORTFILTER NO CONFLICT
  * ================== */

  $.fn[pluginName].noConflict = function () {
    $.fn[pluginName] = old
    return this
  }

 /* PORTFILTER DATA-API
  * =============== */

  $(document).on('click.portfilter.data-api', '[data-toggle^=portfilter]', function (e) {
		$(this).portfilter('filter')
  })

}(window.jQuery);
