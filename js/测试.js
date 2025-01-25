// JavaScript Document

var QHSJ = new Vue({
  el: "#QHSJ", // Vue 实例挂载的元素
  data: {
    // 页面背景变换的控制，可能是背景图片或者其他样式的变化
    transform_bg: -1,

    // 两个图片的链接，分别是加入信息和二维码图片的链接
    join_src:
      "https://xuexiziliaoceshi.oss-cn-hangzhou.aliyuncs.com/img/%E5%8F%82%E4%B8%8E%E4%BF%A1%E6%81%AF%402x.png",
    erweima_src:
      "http://xuexiziliaoceshi.oss-cn-hangzhou.aliyuncs.com/img/%E4%BA%8C%E7%BB%B4%E7%A0%81.png",

    // 用户选择的拼贴诗表，保存每一行选择的情况
    ChooseLine: [
      {
        page: "",
        img: "1",
        Ifchoose: 0,
        ChooseNum: 0,
        img_width: 1,
        img_height: 1,
      },
      { page: "", img: "2", Ifchoose: 0, ChooseNum: 0 },
      { page: "", img: "3", Ifchoose: 0, ChooseNum: 0 },
      { page: "", img: "4", Ifchoose: 0, ChooseNum: 0 },
      { page: "", img: "1", Ifchoose: 0, ChooseNum: 0 },
      { page: "", img: "2", Ifchoose: 0, ChooseNum: 0 },
      { page: "", img: "3", Ifchoose: 0, ChooseNum: 0 },
      { page: "", img: "4", Ifchoose: 0, ChooseNum: 0 },
      { page: "", img: "3", Ifchoose: 0, ChooseNum: 0 },
      { page: "", img: "2", Ifchoose: 0, ChooseNum: 0 },
    ],

    // 中转的选择行列表
    ChooseLine_zhongzhuan: [],

    // 变化后的实际选择列表
    ChooseLine_chage: [],
    ChooseLineAll: [{}],

    // 选择行列表的初始值
    ChooseLineList: 1,
    qqq: 1,

    // 四个图片选择项（1-4）
    shoot: [1, 2, 3, 4],

    // 存储选择的拼贴诗图片的源地址
    Choosing: [{}],

    // 存储每个选择图片的宽高
    Choosing_width: [
      { img_width: 1, img_height: 1 },
      { img_width: 1, img_height: 1 },
      { img_width: 1, img_height: 1 },
      { img_width: 1, img_height: 1 },
      { img_width: 1, img_height: 1 },
      { img_width: 1, img_height: 1 },
      { img_width: 1, img_height: 1 },
      { img_width: 1, img_height: 1 },
    ],

    // 当前选中的拼贴诗图的数量
    Choosing_num: 0,

    // 当前选中的拼贴诗图是否显示
    Choosing_show: 0,

    // 每一页的标题内容
    pageone: "分析世界",
    pagetwo: "我爱福州八中",
    pagethree: "love",
    pagefour: "444555世界",

    // 截图的URL地址
    Screenimg: "",

    // 是否显示底部按钮
    botton_show: 0,

    // 是否为全屏
    Iffull: false,

    // 背景图片的URL地址
    pt_bg_url:
      "./img/bgs/背景1.png",

    // 页面上的内容长度
    len: 6,

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
      overyear: "班级", // 毕业届数
      user_in: "请选择年级", // 校区选择
    },

    // 毕业届数和校区选项列表
    overyear: ["毕业届数"],
    user_in: [
      "请选择年级",
      "匿名",
      "高一",
      "高二",
      "高三"
    ],
    user_in_show: false, // 控制校区选择的显示
    school: "", // 校区
    input_warnning: "请填写必填项", // 输入提示
    input_warnning_show: false, // 输入提示是否显示

    Asknumber: 1,
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

    this.gotochoose();
    this.datadragEnd(100, 109);
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
  },

  // 检测音频是否正常播放
  methods: {/*
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
    },*/

	// 随机获取背景图
    getbg() {
      var bg_num = Math.floor(Math.random() * 12 + 1); // 1-12
      this.pt_bg_url =
        "./img/bgs/背景" +
        bg_num +
        ".png";
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
      var i = this.ChooseLine_chage.length;
      console.log(i);
      if (this.ChooseLineList < i / 8) {
        this.ChooseLineList = this.ChooseLineList + 1;
      }
    },

    uplist() {
      if (this.ChooseLineList > 1) {
        this.ChooseLineList = this.ChooseLineList - 1;
      }
    },

	// 清空功能
    clean() {
      //			this.Choosing_num=0
      //			this.Choosing_show =0

      for (let i = 0; i < this.ChooseLine_chage.length; i++) {
        this.ChooseLine_chage[i].ChooseNum = 0;
        this.ChooseLine_chage[i].Ifchoose = 0;
      }
      //			console.log(this.Choosing_num)
      this.Choosing = [{}];
      this.Choosing_num = 0;
      //			console.log(this.Choosing_num)
    },

    selectover() {
      //			this.inputList.overyear = this.overyear[index]
      //			console.log(this.inputList.overyear)
      //			this.next()
    },

    choose(item, index) {
      //			console.log(item)
      var cesh = item.page;
      //			console.log(cesh)

      if (item.Ifchoose == 0) {
        //	添加数组
        if (this.Choosing_num < 6) {
          //限制选择个数
          item.Ifchoose = item.Ifchoose + 1;
          this.Choosing_show = this.Choosing_show + 1;

          this.Choosing_num = this.Choosing_num + 1;
          item.ChooseNum = this.Choosing_num;
          var newchooselist = this.Choosing.concat(cesh);
          this.Choosing = newchooselist;

          this.Choosing_width[this.Choosing_num].img_width = item.img_width;
          this.Choosing_width[this.Choosing_num].img_height = item.img_height;
          console.log(this.Choosing_width);
        }

        //弹窗提示超过数字
        else {
          //					console.log(123442525)
          if ((this.Iffull = false)) {
            this.Iffull = true;
          }
          if ((this.Iffull = true)) {
            setTimeout(() => {
              this.Iffull = false;
            }, 2000);
          }
        }
      }
      //			取消选择
      else {
        item.Ifchoose = 0;
        this.Choosing_num = this.Choosing_num - 1;

        //				for (let x=1,x<this.Choosing_num,x++){
        //					this.Choosing_width[this.Choosing_num]
        //				}

        //				获取长度
        var cancel = this.Choosing.findIndex((item) => {
          return item === cesh;
        });
        console.log(cancel);
        //				console.log(this.Choosing_num)
        this.Choosing.splice(cancel, 1);
        this.Choosing_show = this.Choosing_show - 1;

        for (let i = 0; i < this.ChooseLine_chage.length; i++) {
          if (this.ChooseLine_chage[i].ChooseNum > cancel) {
            this.ChooseLine_chage[i].ChooseNum =
              this.ChooseLine_chage[i].ChooseNum - 1;
            if (i <= 6) {
              console.log("改变钱");
              console.log(this.Choosing_width[i].img_width);
              console.log(this.Choosing_width[i + 1].img_width);
              this.Choosing_width[i].img_width =
                this.Choosing_width[i + 1].img_width;
              console.log("改变后");
              console.log(this.Choosing_width[i].img_width);
              console.log(this.Choosing_width[i + 1].img_width);
            }
          }
        }

        console.log(this.Choosing_width);
      }
    },

    doimg() {
      if (this.Choosing_num >= 4) {
		// 如果选词数量到达4行,点击后跳转下一页
        this.next();
      }
    },

    handleScreenshot() {
      this.botton_show = 1;
      var a = this.botton_show;
      console.log(a);
      this.jietu();
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
        //				  this.dataURL = dataURL
        this.Screenimg = dataURL;
        //				  const creatDom = document.createElement('a')
        //				  document.body.appendChild(creatDom)
        //				  creatDom.href = dataURL
        //				  creatDom.download = '导出淘汰案例'
        //				  creatDom.click()
      });
    },

    //
    //		mouseWheelHandle(){
    //			console.log(1111111)
    //		},
    //
    //		stopMove(){
    //  let m = function(e){e.preventDefault();};
    //  document.body.style.overflow='hidden';
    //  document.addEventListener("touchmove",m,{ passive:false });//禁止页面滑动
    //			console.log(1111111)
    //},
    //
    //

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
        // this.audioplayer();
      }

      // if (this.inputList.user_in == "匿名") {
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

    //初始化图片大小(读取图片并记录参数)
    datadragEnd(a, b) {
      for (let i = a; i <= b; i++) {
        // 创建实例对象
        let img = new Image();
        // 图片地址

        
          img.src =
            "./img/items/句" +
            (i+160) +
            "@2x.png";

        let res = {};
        var that = this;
        img.onload = function () {
          res = {
            width: img.width,
            height: img.height,
          };
          //					 console.log(res);
          //获取到图片的宽高
          that.ChooseLineAll[i].img_width = res.width / 2.2 + "px";
          that.ChooseLineAll[i].img_height = res.height / 2.2 + "px";
        };
      }
    },

    //初始化选项列表
    gotochoose() {
      for (let i = 1; i <= 109; i++) {
          var choosepage =
            "./img/items/句" +
            (i+160) +
            "@2x.png";

        var chooseitem = {
          page: choosepage,
          img: i,
          Ifchoose: 0,
          ChooseNum: 0,
          img_width: 1,
          img_height: 1,
        };
        let newchooselist = this.ChooseLineAll.concat(chooseitem);
        this.ChooseLineAll = newchooselist;
      }

      //			console.log(this.ChooseLineAll)
    },

    GoToUser() {
      if (this.input_warnning == "立即提交" && this.inputList.name != "") {
        this.getbg();
        this.next();

        for (let x = 100; x <= 109; x++) {
          //添加通用的
          let gotolist = this.ChooseLineAll[x];
          let list = this.ChooseLine_chage.concat(gotolist);
          this.ChooseLine_chage = list;
        }

        let randomlist = this.ChooseLineAll.slice(0,99);
        //					console.log(randomlist)
        randomlist.sort((a, b) => Math.random() - 0.5); //随机全部的
        for (let a = 0; a < 18; a++) {
          let gotolist = randomlist[a];
          let list = this.ChooseLine_chage.concat(gotolist);
          this.ChooseLine_chage = list;
        }
        this.ChooseLine_chage.sort((a, b) => Math.random() - 0.5); //随机全部的
      }
    },

	// 表单检查与届数生成
    Ifwarn() {
      var that = this;

      if (this.inputList.user_in == "高一") {
        this.overyear = ["班级"];
        for (let i = 17; i >= 1; i--) {
          //获取毕业届数
          let year = i + "班";
          var newoveryear = this.overyear.concat(year);
          this.overyear = newoveryear;
        }
      }

      if (this.inputList.user_in == "高二") {
        this.overyear = ["班级"];
        for (let i = 15; i >= 1; i--) {
          //获取毕业届数
          let year = i + "班";
          var newoveryear = this.overyear.concat(year);
          this.overyear = newoveryear;
        }
      }

      if (this.inputList.user_in == "高三") {
        this.overyear = ["班级"];
        for (let i = 16; i >= 1; i--) {
          //获取毕业届数
          let year = i + "班";
          var newoveryear = this.overyear.concat(year);
          this.overyear = newoveryear;
        }
      }

      if (this.inputList.user_in != "请选择年级") {
        if (this.inputList.user_in != "匿名") {
          if (this.inputList.overyear != "班级") {
            if (this.inputList.name == "") {
              this.input_warnning = "请输入昵称";
            }
            if (this.inputList.name != "") {
              this.input_warnning = "立即提交";
            }
          }
          if (this.inputList.overyear == "班级") {
            this.input_warnning = "请选择班级";
          }
        }

        if (this.inputList.user_in == "匿名") {
          this.datadragEnd(1, 109);
          if (this.inputList.name != "") {
            console.log(this.input_warnning);
            this.input_warnning = "立即提交";
          }
          if (this.inputList.name == "") {
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
  },
});
