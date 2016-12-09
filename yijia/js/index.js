$(function(){
		
	//加载头部 head
	$('#head').load('head.html',function(){
		$.getScript('js/head.js');
	});	
	
	//加载尾部 foot
	$('#foot').load('foot.html');	
	
	
	//中间广告部分 ads
	//轮播
	var banner = {
		lis: $('#banner .ads-top ul li'),
		imgWrap: $('#banner .ads-top ul'),
		circleWrap: $('.circle-wrapper'),
		circleItem: $('.circle-item'),
		adsTop:$('.ads-top'),
		index: 0,
		timer: null,
		init: function(){
			this.addPic();			
			this.autoPlay();			
			this.circles();
			this.mouseIn();
		},
		
		//动态给最后一个位置添加第一张图片
		addPic:function(){
			//复制第一个li
			var li = $('#banner .ads-top ul li')[0].cloneNode(true);						
			this.imgWrap.append(li);	
			this.lis = $('#banner .ads-top ul li');
		},
		
		//小圆圈
		circles: function(){
			var that = this;
			//动态添加小圆圈
			var circleStr = '';
			for(var i =0;i<this.lis.length-1;i++){
				circleStr += '<span class="circle-item">'+(i+1)+'</span>';				
			}
			this.circleWrap.html(circleStr);
			this.circleItem = $('.circle-item');
			
			//给第一个小圆圈添加默认样式 hover			
			this.circleItem.eq(0).addClass('hover');									
		},
		
		
		//运动起来
		autoPlay: function(){
			var that = this;
			this.timer = setInterval(function(){
			
				//右边界处理				
				if(that.index >= that.lis.length-1){
					that.imgWrap[0].style.marginLeft = 0;
						that.index = 0;
				};
				
				
				that.index ++;
				that.index %= that.lis.length;
				that.imgWrap.animate({
					marginLeft: -1 * that.index * 720
				},1000);
				
				//小圆圈跟随运动
				that.circleRun();
			
			},3000);
			
			
		},
		
		//小圆圈运动
		circleRun:function(){
			var that = this;
			var i = this.index;
				//小圆圈跟随运动
				if(i >= this.lis.length-1){
					i = 0;
				};
				this.circleItem.eq(i).siblings().removeClass('hover');
				this.circleItem.eq(i).addClass('hover');
				
		},
		
		

		//鼠标移入小圆圈		
		mouseIn: function(){
			var that = this;
			//鼠标移入
			$('.circle-item').mouseenter(function(){
				clearInterval(that.timer);
					$(this).siblings().removeClass('hover');
					$(this).addClass('hover');
					that.index = $(this).index();
					that.imgWrap.animate({
						marginLeft: -1 * that.index * 720
					},500);
			});
			
			//鼠标离开继续自动
			$('.circle-item').mouseleave(function(){
				that.autoPlay();
			});
		}
		
				
		
		
	};
			
	banner.init();	
	
	//选项卡部分
	var tag={
		init: function(){
			$('.nav-item').mouseenter(function(){
				$(this).siblings().removeClass('current');
				$(this).addClass('current');				
				$('.tag-con-item').eq($(this).index()).siblings().removeClass('current');
				$('.tag-con-item').eq($(this).index()).addClass('current');
			});
			$('.tag-content .tag-con-item dl').hover(function(){
				$(this).addClass('hover');
			},function(){
				$(this).removeClass('hover');
			})
		}
	};
		
	tag.init();
	
	/*限时秒杀*/
	var seckill = {
		index: 0,
		init: function(){
			var that = this;
			setInterval(function(){
				
				//右边界处理				
				if(that.index >= 2){
					$('.goods')[0].style.marginLeft = 0;
						that.index = 0;
				};
				
				that.index ++;
				that.index %= 3;
				$('.goods').animate({
					marginLeft: -1 * that.index * 232
				},1000);
			},3000)
				
		
		}
	};
	seckill.init();
		
});
	
	
	
	

