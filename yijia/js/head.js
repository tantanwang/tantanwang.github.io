$(function(){
	//菜单
	var tab = {
		firstTab: $('.fag li dl'),
		allsort:$('.allsort'),
		sortItem:$('.sort-item'),
		subarea:$('.subarea'),
		init: function(){
			//让所有的二级菜单消失
			this.allsort.hide();
			//让第一个显示
			$('.show').show();
			//当点击一级菜单时，切换二级菜单
			this.firstTab.click(function(){			
				$(this).parents('li').siblings().find('.allsort').hide();
				$(this).find('.allsort').show();
				
			});
			//让三级菜单隐藏
			this.subarea.hide();
			//点击二级菜单时，三级菜单显示
			this.sortItem.mouseenter(function(){
				$(this).siblings().find('.subarea').hide();
				$(this).find('.subarea').show();
			});
			this.sortItem.mouseleave(function(){
				$('.subarea').hide();
			});
		}
	};
	
	tab.init();
	
	
	
});
