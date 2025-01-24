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
      "https://xuexiziliaoceshi.oss-cn-hangzhou.aliyuncs.com/img/%E8%83%8C%E6%99%AF/%E8%83%8C%E6%99%AF1.jpg",

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
      overyear: "毕业届数", // 毕业届数
      user_in: "请选择校区", // 校区选择
    },

    // 毕业届数和校区选项列表
    overyear: ["毕业届数"],
    user_in: [
      "请选择校区",
      "只是来凑热闹体验H5的啦",
      "三江口校区",
      "吉祥山校区",
    ],
    user_in_show: false, // 控制校区选择的显示
    school: "", // 校区
    input_warnning: "请填写必填项", // 输入提示
    input_warnning_show: false, // 输入提示是否显示

    //选择题题库,默认为三江口的
    AskList: [
      {
        timu1: "对“三江口的四季”",
        timu2: "印象最深的时刻：",
        xuanxiang: {
          1: "A.小路两侧花圃里盛开的桃花",
          2: "B.图书馆前飘落的美丽异木棉",
          3: "C.深秋里宿舍楼旁金黄的银杏",
          4: "D.环校小路旁的缕缕桂香",
        },
        len: 4,
        ifchoose: 0,
        num: 1,
      },
      {
        timu1: "对“三江口的妖风”",
        timu2: "感受最深的时刻：",
        xuanxiang: {
          1: "A.春天伴着“倒春寒”一起袭来的寒潮",
          2: "B.夏天在宿舍“一线抗台”",
          3: "C.秋天被”秋老虎“烘烤过的热浪",
          4: "D.冬天刮过香樟广场的呼呼冷风",
        },
        len: 4,
        ifchoose: 0,
        num: 2,
      },
      {
        timu1: "你印象最深刻的",
        timu2: "八中奔跑时刻：",
        xuanxiang: {
          1: "A.下课百米冲刺奔向食堂",
          2: "B.放学飞奔回宿舍拿手机",
          3: "C.每周五放学抢校车",
          4: "D.大课间从超市狂奔回教室",
          5: "E.体测",
        },
        len: 5,
        ifchoose: 0,
        num: 3,
      },
      {
        timu1: "你最喜欢去哪散步？",
        timu2: "",
        xuanxiang: {
          1: "A. 夜色笼罩的操场",
          2: "B. 漆黑一片的科技楼",
          3: "C.昏黄灯光下的环校小路",
          4: "D.美术教室前的长走廊",
          5: "E.教学楼的空中花园",
        },
        len: 5,
        ifchoose: 0,
        num: 4,
      },
      {
        timu1: "你最喜欢去哪自习？",
        timu2: "",
        xuanxiang: {
          1: "A.教室（最好是空的）",
          2: "B.大梦书屋（点杯喝的先）",
          3: "C.图书馆（容易被小说绊住脚步）",
          4: "D.严复学堂（好多人啊.jpg）",
        },
        len: 4,
        ifchoose: 0,
        num: 5,
      },
      {
        timu1: "你心目中食堂TOP：",
        timu2: "",
        xuanxiang: {
          1: "A.早早绝版的渔粉",
          2: "B.一楼麻辣烫的口水鸡",
          3: "C.炖罐榜首鸡蛋肉泥",
          4: "D.夜宵特辑之炒河粉",
        },
        len: 4,
        ifchoose: 0,
        num: 6,
      },
      {
        timu1: "哪一首歌",
        timu2: "会带你穿越回三江口？",
        xuanxiang: {
          1: "A.《夏令时记录》",
          2: "B.《倔强》",
          3: "C.《海阔天空（纯音乐版）》",
          4: "D.《克罗地亚狂想曲》",
          5: "E.《星茶会》",
          6: "F. 跑操bgm",
        },
        len: 6,
        ifchoose: 0,
        num: 7,
      },
      {
        timu1: "你心中独属于三江口的",
        timu2: "“学生时刻:”",
        xuanxiang: {
          1: "A.十点半熄灯的哨声",
          2: "B.段长的拉线广播",
          3: "C.每周五傍晚的堵车时刻",
          4: "D.英语听力时卡车路过的轰鸣声",
          5: "E.宿舍夜聊生管敲门时的寂静",
        },
        len: 5,
        ifchoose: 0,
        num: 8,
      },
      {
        timu1: "你每年最期待的活动：",
        timu2: "",
        xuanxiang: {
          1: "A.“把头发梳成大人模样，换上一身帅气西装”——成人礼",
          2: "B.我和我最后的倔强，握紧双手绝对不放“——喊楼”",
          3: "C.“现在向我们迎面走来的是……”——校运会",
          4: "D.“难忘今宵，难忘今宵”——狂欢节",
        },
        len: 4,
        ifchoose: 0,
        num: 9,
      },
    ],

    Asknumber: 1,

	// 吉祥山校区题库
    AskList_JXS: [
      {
        timu1: "你印象最深刻的",
        timu2: "八中奔跑时刻：",
        xuanxiang: {
          1: "A.下课百米冲刺奔向食堂",
          2: "B.广播操音乐马上就要停了而你还在教室",
          3: "C.体育课从空中操场狂奔回教室",
          4: "D.体测",
        },
        len: 4,
        ifchoose: 0,
        num: 1,
      },
      {
        timu1: "校园里治愈你的时刻：",
        timu2: "",
        xuanxiang: {
          1: "A.从东门顺台阶而上看到喷泉开着",
          2: "B.图书馆前樟树下晒太阳",
          3: "C.傍晚和好友斜坡沿走下相伴回家",
          4: "D.下午上课前广播站的播音",
        },
        len: 4,
        ifchoose: 0,
        num: 2,
      },
      {
        timu1: "哪一个地点",
        timu2: "留下了你的青春：",
        xuanxiang: {
          1: "A.青春广场上跨过成人门",
          2: "B.体艺馆里（操场上）作为新生参加入学教育",
          3: "C.坐在教学楼里听到考试终了的钟声响起",
          4: "D.樟树前留下的毕业大合照",
        },
        len: 4,
        ifchoose: 0,
        num: 3,
      },
      {
        timu1: "大课间冲进食堂",
        timu2: "你的首要目标是什么：",
        xuanxiang: {
          1: "A.一口满足的鸡腿（炸的烤的都好吃）",
          2: "B.新鲜出炉的薯条（上课偷吃必备）",
          3: "C.热气腾腾的玉米（冬日暖手宝）",
          4: "D.满满一碗的鱼丸（上大学吃不到）",
        },
        len: 4,
        ifchoose: 0,
        num: 4,
      },
      {
        timu1: "狂欢节你最期待的事：",
        timu2: "",
        xuanxiang: {
          1: "A.夜晚的班级狂欢（好热闹好好玩）",
          2: "B.下午的精彩汇演（好帅好米）",
          3: "C.热闹的跳蚤市场（别拦着我买买买）",
          4: "D.动听的十佳决赛（神仙打架啦）",
          5: "E.LED上的新年心声（看看大家又整了什么花活）",
        },
        len: 5,
        ifchoose: 0,
        num: 5,
      },
      {
        timu1: "哪一首歌",
        timu2: "会带你穿越回吉祥山？",
        xuanxiang: {
          1: "A.《Music Box Dancer》",
          2: "B.《在希望的田野上（纯音乐版）》",
          3: "C.《海阔天空（纯音乐版）》",
          4: "D.《运动员进行曲》",
        },
        len: 4,
        ifchoose: 0,
        num: 6,
      },
    ],
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
    this.datadragEnd(260, 269);
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
  methods: {
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

	// 随机获取背景图
    getbg() {
      if (this.inputList.user_in == "吉祥山校区") {
        var bg_num = Math.floor(Math.random() * 4 + 20);

        this.pt_bg_url =
          "https://xuexiziliaoceshi.oss-cn-hangzhou.aliyuncs.com/img/%E8%83%8C%E6%99%AF/%E8%83%8C%E6%99%AF" +
          bg_num +
          ".jpg" +
          "?any_string_is_ok";
        console.log(this.pt_bg_url);
      } else {
        var bg_num = Math.floor(Math.random() * 12 + 1);
        this.pt_bg_url =
          "https://xuexiziliaoceshi.oss-cn-hangzhou.aliyuncs.com/img/%E8%83%8C%E6%99%AF/%E8%83%8C%E6%99%AF" +
          bg_num +
          ".jpg" +
          "?any_string_is_ok";
        console.log(this.pt_bg_url);
      }
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
        this.audioplayer();
      }

      if (this.inputList.user_in == "只是来凑热闹体验H5的啦") {
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
      }

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

    //初始化图片大小
    datadragEnd(a, b) {
      for (let i = a; i <= b; i++) {
        // 创建实例对象
        let img = new Image();
        // 图片地址

        if (i <= 160) {
          img.src =
            "http://xuexiziliaoceshi.oss-cn-hangzhou.aliyuncs.com/img/%E9%80%89%E9%A1%B9/out_82px/%E5%8F%A5" +
            i +
            "%402x.PNG";
        } else {
          img.src =
            "http://xuexiziliaoceshi.oss-cn-hangzhou.aliyuncs.com/img/%E9%80%89%E9%A1%B9/%E5%8F%A5" +
            i +
            "%402x.png";
        }

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
      for (let i = 1; i <= 269; i++) {
        if (i <= 160) {
          var choosepage =
            "http://xuexiziliaoceshi.oss-cn-hangzhou.aliyuncs.com/img/%E9%80%89%E9%A1%B9/out_82px/%E5%8F%A5" +
            i +
            "%402x.PNG";
        } else {
          var choosepage =
            "http://xuexiziliaoceshi.oss-cn-hangzhou.aliyuncs.com/img/%E9%80%89%E9%A1%B9/%E5%8F%A5" +
            i +
            "%402x.png";
        }

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

    //选中选择题更改样式
    PutChoose(item_x, index, index_x, item) {
      var domId = "#xuanxiang_" + index + "_" + index_x;
      //			console.log(domId)
      var domName = document.querySelector(domId);
      domName.style.background = "#477cab";
      console.log(item.len);
      for (let i = 1; i < item.len + 1; i++) {
        if (i != index_x) {
          let cleanId = "#xuanxiang_" + index + "_" + i;
          let Cleanname = document.querySelector(cleanId);
          Cleanname.style.background = "none";
        }
      }

      item.ifchoose = 1;
      //			console.log(item.ifchoose)
      //判断写入什么东西
      this.ChooseLine_zhongzhuan = [];

      if (this.inputList.user_in == "三江口校区") {
        if (item.num == 1) {
          //判断题号 ，第一题
          if (index_x != 4) {
            //写入4个常规数据
            let a = 4 * index_x; //最大值
            let b = 4 * (index_x - 1) + 1; //最小值
            this.datadragEnd(b, a);
            for (let x = b; x <= a; x++) {
              let gotolist = this.ChooseLineAll[x];
              let list = this.ChooseLine_zhongzhuan.concat(gotolist);
              this.ChooseLine_zhongzhuan = list;
            }
          }
          if (index_x == 4) {
            this.datadragEnd(13, 15);
            for (let x = 13; x <= 15; x++) {
              let gotolist = this.ChooseLineAll[x];
              let list = this.ChooseLine_zhongzhuan.concat(gotolist);
              this.ChooseLine_zhongzhuan = list;
            }
          }
        }

        if (item.num == 2) {
          //，第二题
          if (index_x != 1) {
            //写入4个常规数据
            let a = 14 + 4 * index_x;
            let b = 14 + 4 * (index_x - 1) + 1;
            this.datadragEnd(b, a);
            for (let x = b; x <= a; x++) {
              let gotolist = this.ChooseLineAll[x];
              let list = this.ChooseLine_zhongzhuan.concat(gotolist);
              this.ChooseLine_zhongzhuan = list;
            }
          }
          if (index_x == 1) {
            this.datadragEnd(16, 18);
            for (let x = 16; x <= 18; x++) {
              let gotolist = this.ChooseLineAll[x];
              let list = this.ChooseLine_zhongzhuan.concat(gotolist);
              this.ChooseLine_zhongzhuan = list;
            }
          }
        }

        if (item.num == 3) {
          //，第3题
          if (index_x == 1) {
            this.datadragEnd(31, 34);
            for (let x = 31; x <= 34; x++) {
              let gotolist = this.ChooseLineAll[x];
              let list = this.ChooseLine_zhongzhuan.concat(gotolist);
              this.ChooseLine_zhongzhuan = list;
            }
          }
          if (index_x == 2) {
            this.datadragEnd(35, 37);
            for (let x = 35; x <= 37; x++) {
              let gotolist = this.ChooseLineAll[x];
              let list = this.ChooseLine_zhongzhuan.concat(gotolist);
              this.ChooseLine_zhongzhuan = list;
            }
          }
          if (index_x == 3 || index_x == 4) {
            //写入4个常规数据
            let a = 29 + 4 * index_x;
            let b = 29 + 4 * (index_x - 1) + 1;
            this.datadragEnd(b, a);
            for (let x = b; x <= a; x++) {
              let gotolist = this.ChooseLineAll[x];
              let list = this.ChooseLine_zhongzhuan.concat(gotolist);
              this.ChooseLine_zhongzhuan = list;
            }
          }
          if (index_x == 5) {
            this.datadragEnd(46, 50);
            for (let x = 46; x <= 50; x++) {
              let gotolist = this.ChooseLineAll[x];
              let list = this.ChooseLine_zhongzhuan.concat(gotolist);
              this.ChooseLine_zhongzhuan = list;
            }
          }
        }

        if (item.num == 4) {
          //，第4题
          let a = 50 + 4 * index_x;
          let b = 50 + 4 * (index_x - 1) + 1;
          this.datadragEnd(b, a);
          for (let x = b; x <= a; x++) {
            if (x == 53) {
              x = x + 1;
            }
            let gotolist = this.ChooseLineAll[x];
            let list = this.ChooseLine_zhongzhuan.concat(gotolist);
            this.ChooseLine_zhongzhuan = list;
          }
        }

        if (item.num == 5) {
          //第5题
          if (index_x == 1 || index_x == 2) {
            //写入4个常规数据
            let a = 70 + 4 * index_x;
            let b = 70 + 4 * (index_x - 1) + 1;
            this.datadragEnd(b, a);
            for (let x = b; x <= a; x++) {
              let gotolist = this.ChooseLineAll[x];
              let list = this.ChooseLine_zhongzhuan.concat(gotolist);
              this.ChooseLine_zhongzhuan = list;
            }
          }
          if (index_x == 3 || index_x == 4) {
            //写入4个常规数据
            let a = 68 + 5 * index_x;
            let b = 68 + 5 * (index_x - 1) + 1;
            this.datadragEnd(b, a);
            for (let x = b; x <= a; x++) {
              let gotolist = this.ChooseLineAll[x];
              let list = this.ChooseLine_zhongzhuan.concat(gotolist);
              this.ChooseLine_zhongzhuan = list;
            }
          }
        }

        if (item.num == 6) {
          //，第6题
          if (index_x == 2 || index_x == 3) {
            //写入4个常规数据
            let a = 87 + 4 * index_x;
            let b = 87 + 4 * (index_x - 1) + 1;
            this.datadragEnd(b, a);
            for (let x = b; x <= a; x++) {
              let gotolist = this.ChooseLineAll[x];
              let list = this.ChooseLine_zhongzhuan.concat(gotolist);
              this.ChooseLine_zhongzhuan = list;
            }
          }
          if (index_x == 1) {
            this.datadragEnd(89, 91);
            for (let x = 89; x <= 91; x++) {
              let gotolist = this.ChooseLineAll[x];
              let list = this.ChooseLine_zhongzhuan.concat(gotolist);
              this.ChooseLine_zhongzhuan = list;
            }
          }
          if (index_x == 4) {
            this.datadragEnd(100, 102);
            for (let x = 100; x <= 102; x++) {
              let gotolist = this.ChooseLineAll[x];
              let list = this.ChooseLine_zhongzhuan.concat(gotolist);
              this.ChooseLine_zhongzhuan = list;
            }
          }
        }

        if (item.num == 7) {
          //，第7题
          if (index_x <= 3) {
            //写入4个常规数据
            let a = 102 + 4 * index_x;
            let b = 102 + 4 * (index_x - 1) + 1;
            this.datadragEnd(b, a);
            for (let x = b; x <= a; x++) {
              let gotolist = this.ChooseLineAll[x];
              let list = this.ChooseLine_zhongzhuan.concat(gotolist);
              this.ChooseLine_zhongzhuan = list;
            }
          }
          if (index_x == 4) {
            this.datadragEnd(115, 117);
            for (let x = 115; x <= 117; x++) {
              let gotolist = this.ChooseLineAll[x];
              let list = this.ChooseLine_zhongzhuan.concat(gotolist);
              this.ChooseLine_zhongzhuan = list;
            }
          }
          if (index_x >= 5) {
            let a = 101 + 4 * index_x;
            let b = 101 + 4 * (index_x - 1) + 1;
            this.datadragEnd(b, a);
            for (let x = b; x <= a; x++) {
              let gotolist = this.ChooseLineAll[x];
              let list = this.ChooseLine_zhongzhuan.concat(gotolist);
              this.ChooseLine_zhongzhuan = list;
            }
          }
        }

        if (item.num == 8) {
          //，第8题
          let a = 125 + 4 * index_x;
          let b = 125 + 4 * (index_x - 1) + 1;
          this.datadragEnd(b, a);
          for (let x = b; x <= a; x++) {
            let gotolist = this.ChooseLineAll[x];
            let list = this.ChooseLine_zhongzhuan.concat(gotolist);
            this.ChooseLine_zhongzhuan = list;
          }
        }

        if (item.num == 9) {
          //第9题
          if (index_x != 4) {
            //写入4个常规数据
            let a = 145 + 4 * index_x; //最大值
            let b = 145 + 4 * (index_x - 1) + 1; //最小值
            this.datadragEnd(b, a);
            for (let x = b; x <= a; x++) {
              let gotolist = this.ChooseLineAll[x];
              let list = this.ChooseLine_zhongzhuan.concat(gotolist);
              this.ChooseLine_zhongzhuan = list;
            }
          }
          if (index_x == 4) {
            this.datadragEnd(158, 160);
            for (let x = 158; x <= 160; x++) {
              let gotolist = this.ChooseLineAll[x];
              let list = this.ChooseLine_zhongzhuan.concat(gotolist);
              this.ChooseLine_zhongzhuan = list;
            }
          }
        }
      }

      if (this.inputList.user_in == "吉祥山校区") {
        if (item.num == 1) {
          //判断题号 ，第一题
          if (index_x != 4) {
            //写入4个常规数据
            let a = 160 + 4 * index_x; //最大值
            let b = 160 + 4 * (index_x - 1) + 1; //最小值
            this.datadragEnd(b, a);
            for (let x = b; x <= a; x++) {
              let gotolist = this.ChooseLineAll[x];
              let list = this.ChooseLine_zhongzhuan.concat(gotolist);
              this.ChooseLine_zhongzhuan = list;
            }
          }
          if (index_x == 4) {
            this.datadragEnd(173, 177);
            for (let x = 173; x <= 177; x++) {
              let gotolist = this.ChooseLineAll[x];
              let list = this.ChooseLine_zhongzhuan.concat(gotolist);
              this.ChooseLine_zhongzhuan = list;
            }
          }
        }

        if (item.num == 2) {
          //第2题
          let a = 177 + 4 * index_x; //最大值
          let b = 177 + 4 * (index_x - 1) + 1; //最小值
          this.datadragEnd(b, a);
          for (let x = b; x <= a; x++) {
            let gotolist = this.ChooseLineAll[x];
            let list = this.ChooseLine_zhongzhuan.concat(gotolist);
            this.ChooseLine_zhongzhuan = list;
          }
        }

        if (item.num == 3) {
          //第3题
          let a = 193 + 4 * index_x; //最大值
          let b = 193 + 4 * (index_x - 1) + 1; //最小值
          this.datadragEnd(b, a);
          for (let x = b; x <= a; x++) {
            let gotolist = this.ChooseLineAll[x];
            let list = this.ChooseLine_zhongzhuan.concat(gotolist);
            this.ChooseLine_zhongzhuan = list;
          }
        }

        if (item.num == 4) {
          //第4题
          if (index_x <= 2) {
            //写入4个常规数据
            let a = 209 + 3 * index_x; //最大值
            let b = 209 + 3 * (index_x - 1) + 1; //最小值
            this.datadragEnd(b, a);
            for (let x = b; x <= a; x++) {
              let gotolist = this.ChooseLineAll[x];
              let list = this.ChooseLine_zhongzhuan.concat(gotolist);
              this.ChooseLine_zhongzhuan = list;
            }
          }
          if (index_x > 2) {
            //写入4个常规数据
            let a = 215 + 4 * index_x; //最大值
            let b = 215 + 4 * (index_x - 1) + 1; //最小值
            this.datadragEnd(b, a);
            for (let x = b; x <= a; x++) {
              let gotolist = this.ChooseLineAll[x];
              let list = this.ChooseLine_zhongzhuan.concat(gotolist);
              this.ChooseLine_zhongzhuan = list;
            }
          }
        }

        if (item.num == 5) {
          //第5题
          let a = 223 + 4 * index_x; //最大值
          let b = 223 + 4 * (index_x - 1) + 1; //最小值
          this.datadragEnd(b, a);
          for (let x = b; x <= a; x++) {
            let gotolist = this.ChooseLineAll[x];
            let list = this.ChooseLine_zhongzhuan.concat(gotolist);
            this.ChooseLine_zhongzhuan = list;
          }
        }

        if (item.num == 6) {
          //第6题
          let a = 243 + 4 * index_x; //最大值
          let b = 243 + 4 * (index_x - 1) + 1; //最小值
          this.datadragEnd(b, a);
          for (let x = b; x <= a; x++) {
            let gotolist = this.ChooseLineAll[x];
            let list = this.ChooseLine_zhongzhuan.concat(gotolist);
            this.ChooseLine_zhongzhuan = list;
          }
        }
      }

      console.log(this.ChooseLine_zhongzhuan);
    },

    GoToChooseList() {
      if (this.AskList[this.Asknumber - 1].ifchoose == 1) {
        let list = this.ChooseLine_chage.concat(this.ChooseLine_zhongzhuan);
        this.ChooseLine_chage = list;
        console.log("加入列表");
        console.log(this.ChooseLine_chage);
        console.log("下一题");

        if (this.inputList.user_in == "吉祥山校区") {
          if (this.Asknumber < 3) {
            this.Asknumber = this.Asknumber + 1;
          } else {
            for (let x = 260; x <= 269; x++) {
              let gotolist = this.ChooseLineAll[x];
              let list = this.ChooseLine_chage.concat(gotolist);
              this.ChooseLine_chage = list;
            }

            this.ChooseLine_chage.sort((a, b) => Math.random() - 0.5);
            console.log("开始随机");
            console.log(this.ChooseLine_chage);
            console.log("随机结束");
            this.next();
          }
        } else {
          if (this.Asknumber < 3) {
            this.Asknumber = this.Asknumber + 1;
          } else {
            for (let x = 260; x <= 269; x++) {
              let gotolist = this.ChooseLineAll[x];
              let list = this.ChooseLine_chage.concat(gotolist);
              this.ChooseLine_chage = list;
            }

            this.ChooseLine_chage.sort((a, b) => Math.random() - 0.5);
            console.log("开始随机");
            console.log(this.ChooseLine_chage);
            console.log("随机结束");
            this.next();
          }
        }
      }
    },

    GoToUser() {
      if (this.input_warnning == "立即提交" && this.inputList.name != "") {
        this.getbg();
        this.next();

        if (this.inputList.user_in == "只是来凑热闹体验H5的啦") {
          for (let x = 260; x <= 269; x++) {
            //添加通用的
            let gotolist = this.ChooseLineAll[x];
            let list = this.ChooseLine_chage.concat(gotolist);
            this.ChooseLine_chage = list;
          }

          let randomlist = this.ChooseLineAll.slice(0, 260);
          //					console.log(randomlist)
          randomlist.sort((a, b) => Math.random() - 0.5); //随机全部的
          for (let a = 0; a < 18; a++) {
            let gotolist = randomlist[a];
            let list = this.ChooseLine_chage.concat(gotolist);
            this.ChooseLine_chage = list;
          }
          this.ChooseLine_chage.sort((a, b) => Math.random() - 0.5); //随机全部的
        } else {
          if (this.inputList.user_in == "吉祥山校区") {
            this.AskList = this.AskList_JXS;
          }
          let randomlist = this.AskList;
          randomlist.sort((a, b) => Math.random() - 0.5); //随机全部的
          this.AskList = randomlist.slice(0, 4);
        }
      }
    },

	// 表单检查与届数生成
    Ifwarn() {
      var that = this;

      if (this.inputList.user_in == "三江口校区") {
        this.overyear = ["毕业届数"];
        for (let i = 2026; i >= 2016; i--) {
          //获取毕业届数
          let year = i + "届";
          var newoveryear = this.overyear.concat(year);
          this.overyear = newoveryear;
        }
      }

      if (this.inputList.user_in == "吉祥山校区") {
        this.overyear = ["毕业届数"];
        for (let i = 2026; i >= 1971; i--) {
          //获取毕业届数
          let year = i + "届";
          var newoveryear = this.overyear.concat(year);
          this.overyear = newoveryear;
        }
      }

      if (this.inputList.user_in != "请选择校区") {
        if (this.inputList.user_in != "只是来凑热闹体验H5的啦") {
          if (this.inputList.overyear != "毕业届数") {
            if (this.inputList.user_in == "吉祥山校区") {
              this.AskList = this.AskList_JXS;
            }
            if (this.inputList.name == "") {
              this.input_warnning = "请输入昵称";
            }
            if (this.inputList.name != "") {
              this.input_warnning = "立即提交";
            }
          }
          if (this.inputList.overyear == "毕业届数") {
            this.input_warnning = "请选择毕业届数";
          }
        }

        if (this.inputList.user_in == "只是来凑热闹体验H5的啦") {
          this.datadragEnd(1, 259);
          if (this.inputList.name != "") {
            console.log(this.input_warnning);
            this.input_warnning = "立即提交";
          }
          if (this.inputList.name == "") {
            this.input_warnning = "请输入昵称";
          }
        }
      }

      if (this.inputList.user_in == "请选择校区") {
        if (this.inputList.name == "") {
          this.input_warnning = "请填写必填项";
        }
        if (this.inputList.name != "") {
          this.input_warnning = "请选择校区身份";
        }
      }
    },
  },
});
