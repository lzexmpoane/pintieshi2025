// JavaScript Document

var QHSJ = new Vue({
  el: "#app", // Vue 实例挂载的元素
  data: {
    // 页面背景变换的控制，可能是背景图片或者其他样式的变化
    transform_bg: -1,

    // 选择行列表的初始值
    choosePage: 0,

    // 截图的URL地址
    Screenimg: "",

    // 是否显示底部按钮
    botton_show: 0,

    // 是否为全屏
    Iffull: false,

    // 背景图片的URL地址
    pt_bg_url:
      "./img/bgs/bg1.jpg",

    // 页面上的内容长度
    len: 5,

    // 屏幕的宽度和高度
    screenWidth: document.body.clientWidth, // 屏幕宽度
    screenHeight: document.body.clientHeight, // 屏幕高度

    // 页面元素定位的动态计算（例如警告框和截图的位置）
    warnning_top: 3.4 * document.documentElement.clientHeight + "px", // 警告定位
    Screenimg_top: 4 * document.documentElement.clientHeight + "px", // 输出截图定位
    windowHeight: document.documentElement.clientHeight + "px", // 窗口高度
    windowWidth: document.documentElement.clientWidth + "px", // 窗口宽度
    choose_botton_top: 3.8 * document.documentElement.clientHeight + "px", // 选择按钮位置
    shupai_top: 3.25 * document.documentElement.clientHeight + "px", // 树牌位置
    under_top: 5 * document.documentElement.clientHeight - 100 + "px", // 下部元素位置
    under_top_real: 6 * document.documentElement.clientHeight - 100 + "px", // 真实的下部元素位置
    save_top: 5 * document.documentElement.clientHeight - 50 + "px", // 保存按钮位置
    real_bg_top: 5 * document.documentElement.clientHeight + "px", // 真实背景位置
    noreal_bg_top: 4 * document.documentElement.clientHeight + "px", // 非真实背景位置

    // 用于全屏功能控制
    fullpage: {
      current: 1, // 当前页面编号
      isScrolling: false, // 防止页面快速滚动
      deltaY: 0, // 鼠标滚轮的垂直滚动量，用来判断滚动方向
    },

    // 记录触摸屏操作的初始时间和坐标
    startTime: undefined,
    startX: undefined, // 触摸的初始X坐标
    startY: undefined, // 触摸的初始Y坐标

    // 用户信息（例如姓名、所在地点、届数等）
    inputList: {
      name: "", // 用户的名字
      place: "", // 用户的地点
      overyear: "请选择班级", // 毕业届数
      user_in: "请选择年级", // 校区选择
    },

    // 毕业届数和校区选项列表
    overyear: ["不显示班级"],
    user_in: [
      "不显示年级",
      "高一",
      "高二",
      "高三"
    ],
    user_in_show: false, // 控制校区选择的显示
    school: "", // 校区
    input_warnning: "请填写必填项", // 输入提示
    input_warnning_show: false, // 输入提示是否显示

    chooseList: [],
    chooseBgsList: [],
    chooseBgStyle: {
      width: this.windowWidth, 
      height: this.windowHeight,
      "background-image": `url(./img/choosebgs/bg1.jpg)`,
    },
    poemList: [
      {items:[], len: 0},
      {items:[], len: 0},
      {items:[], len: 0},
      {items:[], len: 0},
      {items:[], len: 0},
      {items:[], len: 0},
      {items:[], len: 0},
      {items:[], len: 0}
    ],
    currentLine: 0,
    isPoemed: false,
  },

  // 挂载时加载必要数据
  mounted() {
    //			console.log(this.abg)
    window.screenWidth = document.body.clientWidth;
    window.screenHeight = document.body.clientHeight;
    this.screenWidth = window.screenWidth;
    this.screenHeight = window.screenHeight;

    //    console.log(window.screenWidth);
    //    console.log(window.screenHeight);
    //    console.log(this.screenWidth);
    //    console.log(this.screenHeight);

    //		for (let i = 2026; i>=1971;i--) {    //获取毕业届数
    //					let year = i+"届"
    //					var newoveryear = this.overyear.concat(year)
    //					this.overyear= newoveryear
    //		};
    //

    // this.gotochoose();
    // this.datadragEnd(1, 109);
    this.createStrList();
    //		console.log(this.ChooseLine_chage)
  },

  beforeUpdate() {
    if (this.fullpage.current == 2) {
      this.Ifwarn();
      console.log(this.input_warnning);
    }

    if (this.fullpage.current == 3) {
      //			this.transformBg()
    }

    if (this.fullpage.current == 3) {
      this.isPoemed = !!(this.poemList.reduce((prev, curr)=>(isNaN(prev) ? prev.len+curr.len: prev+curr.len)))
      this.chooseBgStyle = {
        width: this.windowWidth, 
        height: this.windowHeight,
        "background-image": `url(./img/choosebgs/bg${this.chooseBgsList[this.choosePage]+1}.jpg)`,
      }
    }
  },

  // 检测音频是否正常播放
  methods: {
    choose(item, page, line, index){
      if (this.poemList[this.currentLine].len + item.len > 8){
        // 弹窗提醒
        if ((this.Iffull = false)) {
          this.Iffull = true;
        }
        if ((this.Iffull = true)) {
          setTimeout(() => {
            this.Iffull = false;
          }, 2000);
        }
        return;
      }
      
      this.chooseList[page][line][index].chosen.push(this.poemList[this.currentLine].items.length)
      
      /**
       * poemList
       * @param items List
       * @param len Number
       */
      this.poemList[this.currentLine].len += item.len;
      this.poemList[this.currentLine].items.push(item);
      console.log(this.poemList);
    },

    createStrList(){
      let pageTempList = [] // 页表
      let tempList = []; // 总表
      let rowTempList = []; // 行表
      let rowLen = 0;
      let colLen = 0;
      for (let p = 0; p < item.length; p++){
        for (let i = 0; i < item[p].length; i++){
          rowLen += item[p][i].len;
          if (rowLen > 8){
            pageTempList.push(rowTempList)
            rowLen = 0;
            rowTempList = [];
            // console.log("row",rowTempList);
            colLen++;
            if (colLen >= 8){
              tempList.push(pageTempList);
              this.chooseBgsList.push(p);
              // console.log(pageTempList)
              pageTempList = [];
              colLen = 0;
            }
            i--;
            continue;
          }

          const itembg = Math.floor(Math.random()*3+1);
          item[p][i].style = {};
          // item[p][i].class[`col-xs-${item[p][i].len}`] = true;
          // item[p][i].class[`col-sm-${item[p][i].len}`] = true;
          // item[p][i].class[`col-md-${item[p][i].len}`] = true;
          // item[p][i].class[`col-lg-${item[p][i].len}`] = true;
          item[p][i].style["width"] = item[p][i].len*10 + '%';
          item[p][i].style["background-image"] = `url(./img/itembg/b${item[p][i].len}_${itembg}.png)`;
          item[p][i].chosen = [];

          /**
           * item 
           * @param str String
           * @param len Number
           * @param class Dict
           * @param style Dict
           * @param chosen List
           */
          rowTempList.push(item[p][i])
        }
        pageTempList.push(rowTempList);
        rowTempList = []
        rowLen = 0;

        tempList.push(pageTempList);
        this.chooseBgsList.push(p);
        pageTempList = [];
        colLen = 0;
      }

      console.log(tempList) // page line item 三层

      this.chooseList = tempList;
    },

    audioplayer() {
      //					console.log("play")
      var audio = document.getElementById("audios");
      function audioAutoPlay(audio) {
        play = function () {
          audio.play();
          document.removeEventListener("touchstart", play, false);
        };

        audio.play();
        document.addEventListener(
          "WeixinJSBridgeReady",
          function () {
            play();
          },
          false
        );

        document.addEventListener(
          "YixinJSBridgeReady",
          function () {
            play();
          },
          false
        );

        document.addEventListener("touchstart", play, false);
      }

      //每隔2秒检测是否播放音乐,播放则停止定时器
      let t = setInterval(() => {
        if (audio.paused === false) {
          console.log("停止定时器");
          clearInterval(t);
        } else {
          console.log("执行定时器");
          audioAutoPlay(audio);
        }
      }, 2000);
    },

    // 表单检查与届数生成
    Ifwarn() {
      var that = this;

      this.overyear = ["不显示班级"];
      if (this.inputList.user_in == "高一") {
        for (let i = 17; i >= 1; i--) {
          //获取毕业届数
          let year = i + "班";
          var newoveryear = this.overyear.concat(year);
          this.overyear = newoveryear;
        }
      }

      if (this.inputList.user_in == "高二") {
        for (let i = 15; i >= 1; i--) {
          //获取毕业届数
          let year = i + "班";
          var newoveryear = this.overyear.concat(year);
          this.overyear = newoveryear;
        }
      }

      if (this.inputList.user_in == "高三") {
        for (let i = 16; i >= 1; i--) {
          //获取毕业届数
          let year = i + "班";
          var newoveryear = this.overyear.concat(year);
          this.overyear = newoveryear;
        }
      }

      if (this.inputList.user_in != "请选择年级") {
        if (this.inputList.user_in != "不显示年级") {
          if (this.inputList.overyear != "班级") {
            if (this.inputList.name == "") {
              this.input_warnning = "请输入昵称";
            }
            if (this.inputList.name != "") {
              this.input_warnning = "立即提交";
            }
          }else{
            this.input_warnning = "请选择班级";
          }
        }else{
          if (this.inputList.name != "") {
            console.log(this.input_warnning);
            this.input_warnning = "立即提交";
          }else{
            this.input_warnning = "请输入昵称";
          }
        }
      }

      if (this.inputList.user_in == "请选择年级") {
        if (this.inputList.name == "") {
          this.input_warnning = "请填写必填项";
        }
        if (this.inputList.name != "") {
          this.input_warnning = "请选择年级班级";
        }
      }
    },

	// 随机获取背景图
    getbg() {
      var bg_num = Math.floor(Math.random() * 14 + 1); // 1-12
      this.pt_bg_url = `./img/bgs/bg${bg_num}.jpg`;
      console.log(this.pt_bg_url);
    },

	// 自适应背景大小
    transformBg() {
      var tra = document.getElementById("real_bg").offsetWidth;
      this.transform_bg = document.body.clientWidth - tra + "px";
      console.log(tra);
      console.log(document.body.clientWidth);
      console.log(this.transform_bg);

      //			let trasformer = this.$refs["fullPageContainer"];
      let trasformer = document.getElementById("real_bg");
      //			trasformer.style.transform = `translateX(${this.transform_bg})`
    },

	// 拼贴诗选词翻页功能
    downlist() {
      if (this.choosePage < this.chooseList.length-1) {
        this.choosePage = this.choosePage + 1;
      }
    },

    uplist() {
      if (this.choosePage > 0) {
        this.choosePage = this.choosePage - 1;
      }
    },

	// 清空功能
    clean() {
      this.poemList[this.currentLine].items = [];
      this.poemList[this.currentLine].len = 0;
    },

    selectover() {
      //			this.inputList.overyear = this.overyear[index]
      //			console.log(this.inputList.overyear)
      //			this.next()
    },

    doimg() {
      if (this.isPoemed) {
        this.next();
      }
    },

    handleScreenshot() {
      this.botton_show = 1;
      this.jietu();
      var a = this.botton_show;
      console.log(a);
      
    },

    //		截图方法
    jietu() {
      console.log(123333);
      const ref = this.$refs.faultTree; // 截图区域
      html2canvas(ref, {
        backgroundColor: null,
        allowTaint: true,
        useCORS: true,
      }).then((canvas) => {
        const dataURL = canvas.toDataURL("image/png");
        this.Screenimg = dataURL;
      });
    },

    // 滚动事件
    move(index) {
      this.fullpage.isScrolling = true; // 为了防止滚动多页，需要通过一个变量来控制是否滚动
      this.directToMove(index); //执行滚动
      setTimeout(() => {
        //这里的动画是1s执行完，使用setTimeout延迟1s后解锁
        this.fullpage.isScrolling = false;
      }, 1010);
    },
    // 执行滚动
    directToMove(index) {
      let height = this.$refs["fullPage"].clientHeight; //获取屏幕的宽度
      let scrollPage = this.$refs["fullPageContainer"]; // 获取执行tarnsform的元素
      let scrollHeight; // 计算滚动的告诉，是往上滚还往下滚
      scrollHeight = -(index - 1) * height + "px";
      scrollPage.style.transform = `translateY(${scrollHeight})`;
      this.fullpage.current = index;
    },

    // 往下切换
    next() {
      if (this.fullpage.current == 1) {
        // 如果当前页面编号+1 小于总个数，则可以执行向下滑动
        this.audioplayer();
      }

      // if (this.inputList.user_in == "不显示年级") {
        this.len = 5; // 页面的个数
        this.warnning_top =
          (this.len - 2.6) * document.documentElement.clientHeight + "px"; //警告定位
        this.Screenimg_top =
          (this.len - 2) * document.documentElement.clientHeight + "px"; //输出截图定位
        this.choose_botton_top =
          (this.len - 2.2) * document.documentElement.clientHeight + "px";
        this.under_top =
          (this.len - 1) * document.documentElement.clientHeight - 100 + "px";
        this.under_top_real =
          this.len * document.documentElement.clientHeight - 100 + "px";
        this.shupai_top =
          (this.len - 2.75) * document.documentElement.clientHeight + "px";
        this.save_top =
          (this.len - 1) * document.documentElement.clientHeight - 50 + "px";
        this.real_bg_top =
          (this.len - 1) * document.documentElement.clientHeight + "px";
        this.noreal_bg_top =
          (this.len - 2) * document.documentElement.clientHeight + "px";
      // }

      if (this.fullpage.current + 1 <= this.len) {
        // 如果当前页面编号+1 小于总个数，则可以执行向下滑动
        this.fullpage.current += 1; // 页面+1
        this.move(this.fullpage.current); // 执行切换
      }
    },
    // 往上切换
    pre() {
      if (this.fullpage.current - 1 > 0) {
        // 如果当前页面编号-1 大于0，则可以执行向下滑动
        this.fullpage.current -= 1; // 页面+1
        this.move(this.fullpage.current); // 执行切换
      }
    },
    // 清除触摸事件
    handleTouchmove(event) {
      event.preventDefault();
    },
    //手指按下屏幕
    handleTouchstart(event) {
      this.startTime = Date.now();
      this.startX = event.changedTouches[0].clientX;
      this.startY = event.changedTouches[0].clientY;
    },
    //手指离开屏幕
    handleTouchend(event) {
      const endTime = Date.now();
      const endX = event.changedTouches[0].clientX;
      const endY = event.changedTouches[0].clientY;
      //判断按下的时长
      if (endTime - this.startTime > 2000) {
        return;
      }
      //滑动的方向
      let direction = "";
      //先判断用户滑动的距离，是否合法，合法:判断滑动的方向 注意 距离要加上绝对值
      if (Math.abs(endY - this.startY) > 10) {
        //滑动方向
        direction = endY - this.startY > 0 ? "down" : "up";
      } else {
        return;
      }
      //用户做了合法的滑动操作
      // console.log('方向'+direction)
      if (direction === "up") {
        this.next();
      }
      if (direction === "down") {
        this.pre();
      }
    },

    // 监听鼠标监听
    mouseWheelHandle(event) {
      // 添加冒泡阻止
      let evt = event || window.event;
      if (evt.stopPropagation) {
        evt.stopPropagation();
      } else {
        evt.returnValue = false;
      }
      if (this.fullpage.isScrolling) {
        // 判断是否可以滚动
        return false;
      }
      let e = event.originalEvent || event;
      this.fullpage.deltaY = e.deltaY || e.detail; // Firefox使用detail
      if (this.fullpage.deltaY > 0) {
        this.next();
      } else if (this.fullpage.deltaY < 0) {
        this.pre();
      }
    },

    GoToUser() {
      if (this.input_warnning == "立即提交" && this.inputList.name != "") {
        this.getbg();
        this.next();
      }
    },
  },
});
