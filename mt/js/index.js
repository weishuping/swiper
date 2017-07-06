//纵向1
var mySwiperV1 = new Swiper ('.swiper-container-v1', {
    direction : 'vertical',
    pagination: '.swiper-pagination-v1',
    loop: false,
    observer: true, //修改swiper自己或子元素时，自动初始化swiper
    observeParents: true, //修改swiper的父元素时，自动初始化swiper
    onInit: function(swiper){
        swiperAnimateCache(swiper);
        swiperAnimate(swiper);
    },
    onSlideChangeEnd: function(swiper){
        swiperAnimate(swiper);
    }
});
//纵向2
var mySwiperV2 = new Swiper ('.swiper-container-v2', {
    direction : 'vertical',
    pagination: '.swiper-pagination-v2',
    loop: false,
    observer: true, //修改swiper自己或子元素时，自动初始化swiper
    observeParents: true, //修改swiper的父元素时，自动初始化swiper
    onInit: function(swiper){
        swiperAnimateCache(swiper);
        swiperAnimate(swiper);
    },
    onSlideChangeEnd: function(swiper){
        swiperAnimate(swiper);
    }
});
// /*横向 */纵向
var mySwiperV = new Swiper ('.swiper-container-v', {
    direction : 'vertical',
    loop: false,
    observer: true, //修改swiper自己或子元素时，自动初始化swiper
    observeParents: true, //修改swiper的父元素时，自动初始化swiper
    onInit: function(swiper){
        swiperAnimateCache(swiper);
        swiperAnimate(swiper);
    },
    onSlideChangeEnd: function(swiper){
        //滑动之后横向滑动锁住
        if(swiper.activeIndex === 1) {
            mySwiperV.lockSwipeToNext();
            $('.array-h').hide();
            //mySwiperV.lockSwipeToPrev();
        } else {
            mySwiperV.unlockSwipeToNext();
            $('.array-h').show();
        }
        swiperAnimate(swiper);
    }
});
//初始页面横向滑动锁住
// mySwiperH.lockSwipeToNext();
// mySwiperH.lockSwipeToPrev();
//初始化详情页面不可见
$('.details').hide(); 
//预制门店顾问入职数据
var s1 ='当事人招募部面熟通过；门店面试通过'
//点击1 总部员工入职
$('.map2_s1').on('click', function(e){
    mySwiperV.unlockSwipeToNext();
    mySwiperV.slideTo(2,200,true);
    
});
//点击2 门店顾问入职
$('.map2_s2').on('click', function(e){
    mySwiperV.unlockSwipeToNext();
    mySwiperV.slideTo(3,200,true);
});
//1 返回首页
$('.backHome').on('click', function(e){
    //$('#showhide').hide();
    //mySwiperV1.activeIndex = 0;
    mySwiperV.unlockSwipeToPrev();
    mySwiperV.slideTo(1,200,true);
    mySwiperV1.activeIndex = 0;
});
//2 返回首页
$('.backHome2').on('click', function(e){
    mySwiperV.unlockSwipeToPrev();
    mySwiperV.slideTo(1,200,true);
    mySwiperV2.activeIndex = 0;
});
//跳转详情页
function getDetail(obj) {
    console.log(obj);
    var s = '<p>当事人招募部面试通过；门店面试通过</p><div class="one">年龄20(含)~35(含)周岁(复职无35岁上限),以身份证为准，不符合要求无法办理入职，不接受任何形式的特批；</div>';
    $('#detail').html(s);
    $('.lists').hide();
    $('.details').show();
    //因为详情不可见
    //mySwiperV2.slideTo(2,200,true);
}
//从详情页跳转列表页面
function backList() {
    $('.lists').show();
    $('.details').hide();
}