Css3 动画学习

动画属性：</br>
transition 真
animation 真
transform 假
1)CSS3 动画包括 transition 和 animation 2)动画常常和 transform 属性常用

1. Transition 过渡
   property 属性
   all
   none
   class name
   duration 过渡时间
   timing-function 时间函数
   linear
   ease | ease-in | ease-out | ease-in-out | cubic-bezier 贝塞尔函数 用户可以自己定义函数入参调整动画或者过渡的帧数 用 google 控制台调整
   step-start | step-end | steps | jump-start | jump-end | jump-none | jump-both | start | end
   delay 延迟

2. Anamation 过渡
   name 动画名称
   duration
   timing-function
   delay
   iteration-count 播放次数
   direction 播放方向
   fill-mode 停止播放的状态
   paly-state 是否暂停

使用场景：跑马灯， loading，可以解决， 跳动的元素， 不存在 transition 和 display:none 何用的 bug

3. 时间函数
   step
   年终倒带，大致也是用 step 这个函数实现的；你可以这样理解 step 多用于雪碧图背景图片，例如这个雪碧图的背景一共有 10 个，step（10）就 ok 了相当于把背景图等分 10 分，然后配合背景图坐标例如我整个图片宽度是 1000 每个背景的图片大小是 100 那么就是 step10 ， 之后在@keyframes run{} 这个里面在 100%里面加 background-position-x：-1000；

4. 动画监听函数
   animationstart
   animationend
   animationiteration
   transitionend

5. 红包雨
   translate3d(tx, ty, tz) 下落效果
   animation-play-state: paused 悬停打开红包
