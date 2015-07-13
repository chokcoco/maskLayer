/*
 * @description 遮罩层组件，使用maskLayer.show()一键显示，maskLayer.hide()关闭
 * @author Coco
 * @2015-06-08
 *
 */

(function(){

	var maskLayer = {
		//创建遮罩层
		createLayer:function(){
			var layerDiv = '<div class="widget-mask-layer"></div>';	
			$('body').append(layerDiv);
			$('.widget-mask-layer').css({
				position: 'fixed',
				_position:'absolute',
				'z-index':'1000',
				top: '0',
				left:'0',
				right:'0',
				bottom:'0',
				width:'100%',
				height:'100%',
				'background-color':'#000',
				filter: 'alpha(opacity=50)',
                opacity: '.5',
                display:'none'
			});
		},
		//传入要显示的层，会自动显示遮罩层并且将显示层垂直居中
		show:function(elemSelector){
			var layer = $('.widget-mask-layer');
			layer.show();
			elemSelector.show();
			elemSelector.css({
				position: 'fixed',
				_position:'absolute',
				margin:'auto',
				top:'0',
				left:'0',
				right:'0',
				bottom:'0',
				'z-index':'1001'
			});
		},
		//关闭遮罩层和显示层
		hide:function(elemSelector){
			var layer = $('.widget-mask-layer');

			layer.hide();

			elemSelector.hide();
		},
		init:function(){
			this.createLayer();
		}
	}

	maskLayer.init();
	//定义全局变量
	window.maskLayer = maskLayer;
})();