//var extend = require('util')._extend;
/**
* create a tool to generate lightbox view
* @constructor
* @version 0.0.1
*/
module.id='lightbox';
var control_panel=require('spa_tools/control_panel.js');

// css require
require('./lightbox.scss');
/**
* set DOM of lightbox, as a initial process of this module
* @param {Object} dom - DOM in document
*/
module.exports.set_dom = function(dom){
	var self=this;
	this.doms = {body:dom};
	this.doms.body.classList.add('lightbox');
	['inner','cp','box'].map(function(v){
		self.doms[v]=document.createElement('div');
	});
	this.doms.inner.appendChild(this.doms.cp);
	this.doms.inner.appendChild(this.doms.box);
	this.doms.body.appendChild(this.doms.inner);
	this.add_event();
}
module.exports.cp_render = function(){
	var self = this;
	this.cp = new control_panel(this.doms.cp,{
		dot_tmpl:'<i class="fa fa-window-close" style="color:red" title="Back" name="rm"></i>',
		event_types:['click']
	});
	this.cp.e_reg.events.click = {
		'[name=rm]':function(e){self.hide();}
	}
}
/**
* initial event binding in lightbox, including back by click gray border
*/
module.exports.add_event = function(){
	var self=this;
	// add click border function
	this.doms.body.addEventListener('click',function(e){
		if(e.target==self.doms.body){
			self.doms.body.classList.remove('active');
		}
	});
	this.cp_render();
}
/**
* show the lightbox by a callback or a fix content in lightbox
* @param {Function} render_han - render the div_inner by ref
*/
module.exports.show = function(render_han){
	// check dom available
	if(!this.doms){
		var dom = document.createElement('div');
		document.body.appendChild(dom);
		this.set_dom(dom);
	}
	this.doms.body.classList.add('active');
	// check key if available for remove different data
	if(render_han){
		if(render_han.nodeType==1){
			// a DOM
			this.doms.box.innerHTML = '';
			this.doms.box.appendChild(render_han);
		}else{
			// function
			render_han(this.doms.box);
		}
	}
	return this;
}
module.exports.hide = function(){
	this.doms.body.classList.remove('active');
}
