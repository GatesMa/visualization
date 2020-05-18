var qisc1=[26, 3, 0, 4,3];
var qisc2=[23, 2, 0, 9,12];
var qisc3=[17, 1, 0, 2,13];
var qisc4=[10, 0, 1, 0,12];
var qisc5=[3, 0, 1, 1,1];
var qisc6=[3, 0, 0, 0,1];
var qisc7= [3, 0, 0, 0,2];
var qisc9=[2, 0, 0, 1,0];


var yosc1=[16, 4, 1, 7,11];
var yosc2=[13, 1, 0, 2,1];
var yosc3=[11, 0, 0, 6,5];
var yosc4=[10, 0, 0, 2,3];
var yosc5=[9, 0, 2, 2,5];
var yosc6=[20, 1, 0, 3,4];
var yosc7=[12, 1, 1, 6,7];
var yosc8= [11, 0, 0, 0,1];
var yosc9=[2, 1, 0, 0,3];


var qipos1=[[8, 8], [7.8, 8.4],[4.5,12],[8,7],[7.5,7.2]];//欧文
var qipos2=[[7.4,7],[7.5,8],[7.6,7.5],[8,6.2],[7.3,7],[10,13.5]];//詹姆斯
var qipos3=[[10.8,6],[7.4,10.5],[9,6],[10.2,12.4],[9.9,7]];//乐福
var qipos4=[[7.7,6],[7.7,7]];//汤普森
var qipos5=[[10.5,10.5]];//史密斯
var qipos6=[[10.8,6.2]];//香伯特
var qipos7=[[7,7.5]];//杰弗森
var qipos9=[[7.5,9]];//德拉维多瓦


var yopos1=[[7.5,15],[6,11],[6,15],[7,7],[7.5,6.9]];//格林
var yopos2=[[7.3,8.9],[7.5,8],[7.6,8.2],[6.5,13],[7,7],[7.5,7]];//巴恩斯
var yopos3=[[10.2,12],[10.4,11.6],[7,6.1],[10,13.5]];//库里
var yopos4=[[7,8.5],[7.2,8.1],[7,9],[8,6.5],[7,6.5]];//博古特
var yopos5=[[7.5,9],[7,6.5],[8,7],[10.5,10.5]];//克莱-汤普森
var yopos6=[[6.2,10],[9.7,9],[8.1,9],[6.8,10],[7.2,6.3],[6.5,10],[8.1,11],[7.3,12.2]];//利文斯顿
var yopos7=[[7.6,7],[4,6],[10.5,14],[7.9,7.9]];//伊格达拉
var yopos8=[[8.5,6.5],[7,7.4],[4.8,6],[6,12],[8,9]];//巴博萨
var yopos9=[[8,9]];//艾泽里

var dataset1=[
    {"name":"凯文-乐福","position":[13.5,15],"team":"骑士","time":"11:24","score":"3"},
    {"name":"安德鲁-博古特","position":[1.9,8],"team":"勇士","time":"10:57","score":"2"},
    {"name":"哈里森-巴恩斯","position":[2.1,7.8],"team":"勇士","time":"10:14","score":"3"},
    {"name":"勒布朗-詹姆斯","position":[13.5,7],"team":"骑士","time":"9:59","score":"2"},
    {"name":"哈里森-巴恩斯","position":[2,7.6],"team":"勇士","time":"9:13","score":"2"},
    {"name":"哈里森-巴恩斯","position":[2.1,7.5],"team":"勇士","time":"8:47","score":"2"},
    {"name":"凯文-乐福","position":[12,7],"team":"骑士","time":"8:22","score":"2"},
    {"name":"安德鲁-博古特","position":[1.8,7.4],"team":"勇士","time":"8:07","score":"2"},
    {"name":"斯蒂芬-库里","position":[4.2,2.8],"team":"勇士","time":"7:28","score":"3"},
    {"name":"勒布朗-詹姆斯","position":[13.2,7.1],"team":"骑士","time":"7:08","score":"2"},
    {"name":"安德鲁-博古特","position":[2.5,8],"team":"勇士","time":"6:47","score":"2"},
    {"name":"凯里-欧文","position":[13.2,8.9],"team":"骑士","time":"6:22","score":"2"},
    {"name":"特里斯坦-汤普森","position":[13.5,7.4],"team":"骑士","time":"5:54","score":"2"},
    {"name":"费斯图斯-艾泽里","position":[2.5,7],"team":"勇士","time":"5:12","score":"2"},
    {"name":"德雷蒙德-格林","position":[4.7,7],"team":"勇士","time":"4:34","score":"3"},
    {"name":"勒布朗-詹姆斯","position":[13.3,7.5],"team":"骑士","time":"4:10","score":"2"},
    {"name":"斯蒂芬-库里","position":[4,2.3],"team":"勇士","time":"3:52","score":"3"},
    {"name":"勒布朗-詹姆斯","position":[13.7,8],"team":"骑士","time":"2:18","score":"2"},
    {"name":"肖恩-利文斯顿","position":[3,10],"team":"勇士","time":"1:48","score":"2"},
    {"name":"伊曼-香伯特","position":[13.2,15],"team":"骑士","time":"1:27","score":"3"},
    {"name":"凯里-欧文","position":[13,8.7],"team":"骑士","time":"0:54","score":"2"},
    {"name":"肖恩-利文斯顿","position":[2.5,3],"team":"勇士","time":"0:12","score":"2"}
];
var dataset2=[
    {"name":"莱昂德罗-巴博萨","position":[1.5,4.6],"team":"勇士","time":"10:55","score":"2"},
    {"name":"马修-德拉维多瓦","position":[13,7],"team":"骑士","time":"10:35","score":"2"},
    {"name":"肖恩-利文斯顿","position":[2.5,5],"team":"勇士","time":"10:23","score":"2"},
    {"name":"凯文-乐福","position":[13.5,10.5],"team":"骑士","time":"9:59","score":"2"},
    {"name":"德雷蒙德-格林","position":[3.2,10],"team":"勇士","time":"9:44","score":"2"},
    //6
    {"name":"莱昂德罗-巴博萨","position":[2,7.5],"team":"勇士","time":"9:07","score":"2"},
    {"name":"莱昂德罗-巴博萨","position":[1.5,15],"team":"勇士","time":"8:13","score":"3"},
    //9
    {"name":"克莱-汤普森","position":[2.4,7],"team":"勇士","time":"7:11","score":"2"},
    {"name":"克莱-汤普森","position":[1.8,8],"team":"勇士","time":"6:22","score":2},
    //12
    {"name":"特里斯坦-汤普森","position":[13,7],"team":"骑士","time":"5:41","score":"2"},
    {"name":"安德烈-伊格达拉","position":[2.2,7],"team":"勇士","time":"5:18","score":"2"},
    //15
    {"name":"凯里-欧文","position":[11,2.8],"team":"骑士","time":"4:25","score":"3"},
    {"name":"哈里森-巴恩斯","position":[4,10],"team":"勇士","time":"4:01","score":"2"},
    //18
    {"name":"安德鲁-博古特","position":[2,6.4],"team":"勇士","time":"2:51","score":"2"},
    {"name":"凯文-乐福","position":[11.5,12.5],"team":"骑士","time":"2:27","score":"3"},
    //21
    {"name":"德雷蒙德-格林","position":[4.5,12],"team":"勇士","time":"0:43","score":"3"}
];
var dataset3=[
    {"name":"勒布朗-詹姆斯","position":[3.2,6.2],"team":"骑士","time":"10:46","score":"2"},
    {"name":"安德鲁-博古特","position":[13.2,6],"team":"勇士","time":"10:31","score":"2"},
    {"name":"德雷蒙德-格林","position":[13,6.2],"team":"勇士","time":"9:57","score":"2"},
    {"name":"凯里-欧文","position":[2,10.5],"team":"骑士","time":"9:40","score":"2"},
    {"name":"凯里-欧文","position":[1.5,6],"team":"骑士","time":"8:33","score":"2"},

    {"name":"特里斯坦-汤普森","position":[2.2,7],"team":"骑士","time":"8:04","score":"2"},
    {"name":"安德烈-伊格达拉","position":[12.8,0],"team":"勇士","time":"7:39","score":"3"},
    {"name":"勒布朗-詹姆斯","position":[4,12.2],"team":"骑士","time":"6:58","score":"3"},
    {"name":"克莱-汤普森","position":[13.2,8.8],"team":"勇士","time":"6:31","score":"2"},
    //12
    {"name":"特里斯坦-汤普森","position":[1.7,7],"team":"骑士","time":"5:29","score":"2"},
    {"name":"凯文-乐福","position":[1.5,6.8],"team":"骑士","time":"4:36","score":"2"},
    {"name":"凯文-乐福","position":[1.8,9],"team":"骑士","time":"3:57","score":"2"},
    {"name":"德雷蒙德-格林","position":[13.1,7],"team":"勇士","time":"3:42","score":"2"},
    {"name":"特里斯坦-汤普森","position":[1.8,8],"team":"骑士","time":"3:18","score":"2"},
    //17
    {"name":"肖恩-利文斯顿","position":[12,6.1],"team":"勇士","time":"2:58","score":"2"},
    {"name":"勒布朗-詹姆斯","position":[1.9,7.2],"team":"骑士","time":"2:12","score":"2"},
    {"name":"肖恩-利文斯顿","position":[13.2,6.4],"team":"勇士","time":"1:27","score":"2"},
    {"name":"斯蒂芬-库里","position":[13.5,6.3],"team":"勇士","time":"0:55","score":"2"},
    {"name":"安德烈-伊格达拉","position":[11.1,12.9],"team":"勇士","time":"0:27","score":"3"}
];

var dataset4=[
    {"name":"巴博萨","position":[11.5,3],"team":"勇士","time":"11:11","score":"2"},
    {"name":"利文斯顿","position":[11.8,5],"team":"勇士","time":"10:51","score":"2"},
    {"name":"巴博萨","position":[12.5,9.1],"team":"勇士","time":"10:11","score":"2"},
    {"name":"凯里-欧文","position":[1.6,7],"team":"骑士","time":"10:00","score":"2"},
    {"name":"利文斯顿","position":[11.6,9],"team":"勇士","time":"9:43","score":"2"},

    {"name":"乐福","position":[2,1.2],"team":"骑士","time":"9:24","score":"2"},
    {"name":"巴恩斯","position":[13.1,7],"team":"勇士","time":"9:06","score":"2"},
    {"name":"利文斯顿","position":[11.2,7.2],"team":"勇士","time":"8:35","score":"2"},
    {"name":"詹姆斯","position":[1.5,7.5],"team":"骑士","time":"8:23","score":"2"},
    {"name":"巴恩斯","position":[13,7.2],"team":"勇士","time":"7:35","score":"2"},
    {"name":"凯里-欧文","position":[1.7,7.3],"team":"骑士","time":"7:10","score":"2"},
    //14
    {"name":"伊格达拉","position":[13.3,7.4],"team":"勇士","time":"5:44","score":"2"},
    {"name":"杰弗森","position":[1.8,7.6],"team":"骑士","time":"5:29","score":"3"},
    {"name":"史密斯","position":[3.5,1.3],"team":"骑士","time":"4:43","score":"3"},
    {"name":"詹姆斯","position":[4.4,3.4],"team":"骑士","time":"3:45","score":"3"},
    //20
    {"name":"库里","position":[10.7,12],"team":"勇士","time":"2:54","score":"3"},
    {"name":"克莱-汤普森","position":[11.5,13.7],"team":"勇士","time":"2:25","score":"3"}
];


var score1=["3-0","3-2","3-5","5-5","5-7","7-9","9-9","9-11","9-14","11-14","11-16","13-16","15-16","15-18","15-21","17-21","17-24","19-24","19-26","22-26","24-26","24-28"];
var score2=["24-30","26-30","26-32","28-32","28-34","28-36","28-39","29-41","29-43","32-43","32-45","36-45","36-47","38-49","41-49","43-52"];
var score3=["45-52","45-54","45-56","47-56","50-56","52-56","52-59","55-59","55-61","59-63","62-63","64-63","64-63","64-65","66-65","66-67","68-67","68-69","68-71","68-74"];
var score4=["68-78","68-80","68-82","70-82","70-84","72-84","72-86","72-88","74-88","74-90","76-90","76-96","79-96","82-96","85-96","87-101","89-104"];

var time1=["11:24","10:57","10:14","9:59","9:13","8:47","8:22","8:07","7:28","7:08","6:47","6:22","5:54","5:12","4:34","4:10","3:52","2:18","1:48","1:27","0:54","0:12"];
var time2=["10:55","10:35","10:23","9:59","9:44","9:07","8:13","7:11","6:22","5:41","5:18","4:25","4:01","2:51","2:27","0:43"];
var time3=["10:46","10:31","9:57","9:40","8:33","8:04","7:39","6:58","6:31","5:29","4:36","3:57","3:42","3:18","2:58","2:12","1:27","0:55","0:27"];
var time4=["11:11","10:51","10:11","10:00","9:43","9:24","9:06","8:35","8:23","7:35","7:10","5:44","5:29","4:43","3:45","2:54","2:25"];

var qieff=[[3,6,5,4],[2.5,8.3,6.3,9.1],[4.4,3.7,2.6,5.5],[3.1,2.8,4.2,1.8]]
var yoeff=[[7,4,5,6],[7.5,1.7,3.7,0.9],[5.6,6.3,7.4,4.5],[6.9,7.2,5.8,8.2]]
