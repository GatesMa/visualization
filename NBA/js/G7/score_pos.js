var qisc1=[26, 1, 1, 1,6]
var qisc2=[27, 2, 3, 11,11]
var qisc3=[9, 2, 0, 3,14]
var qisc4=[9, 0, 2, 0,3]
var qisc5=[12, 1, 0, 2,4]
var qisc6= [6, 0, 0, 0,1]
var qisc7= [2, 1, 0, 0,9]
var qisc8=[2, 0, 0, 0,1];
var qisc9=[2, 0, 0, 1,0];
var qisc10=[0, 0, 0, 0,0];
var qisc11=[2, 0, 0, 0,0];
var qisc12=[0, 0, 1, 0,2];
var qisc13= [0, 0, 0, 0,0];

var qipos1=[[7.5,6.4],[7.8,8],[6.9,3],[5.3,4],[6.2,7],[7.5,10],[5.5,3.2],[9,12],[8,5]];
var qipos2=[[7.7, 4.3],[7.9,4.5],[6.6,4.0],[8,2.8],[8.3,4],[6,12.5],[8.5,6],[9,3]]
var qipos3=[[8.1, 3],[6.4,5],[7,3]]
var qipos4=[[7.5, 4],[5.4,3],[6.4,5]]
var qipos5=[[8.8, 3.2],[6.8,3.5],[5.5,10],[4.5,7],[6,10],[10,9]]
var qipos6=[[5.5,9]]
var qipos7=[[8.5,4]]
var qipos8=[[]]
var qipos9=[[]]
var qipos10=[[]]
var qipos11=[[]]
var qipos12=[[]]
var qipos13=[[]]


var yosc1=[32, 2, 0, 9,15];
var yosc2=[10, 1, 0, 1,2];
var yosc3=[17, 1, 1, 2,5]
var yosc5=[14, 1, 0, 2,2]
var yosc6=[8, 0, 0, 2,1]
var yosc7=[4, 2, 2, 4,9]
var yosc8=[3, 0, 0, 0,0]
var yosc9=[0, 0, 0, 1,1]
var yosc10=[1, 0, 0, 1,0];
var yosc4=[0, 0, 0, 1,1];
var yosc11=[0, 0, 0, 0,0];
var yosc12=[0, 0, 2, 0,4];
var yosc13=[0, 1, 0, 0,0];

var yopos1=[[7.5, 4], [10, 9.5],[5.5,3],[9,10],[8,10.5],[6.7,10.2],[10.3,9.1],[7.8,3.2],[7.2,12],[7.5,6.4],[7.8,8]];
var yopos2=[[5.2, 8.9],[9,12],[8,5]]
var yopos3=[[11.0, 8.33],[9,6],[9,12],[8,5],[10, 9.5]]
var yopos4=[]
var yopos5=[[9,6],[6,11],[9,12],[8,5],[7.5,6.4],[7.8,8],[6.2,7],[7.5,10]]
var yopos6=[[6,8],[6.3,3],[9.2,3.3]]
var yopos7=[[8.5,6],[9,3]]
var yopos8=[[4.2,4]]
var yopos9=[]
var yopos10=[]
var yopos11=[]
var yopos12=[]
var yopos13=[]

var dataset1=[
    {"name":"特里斯坦-汤普森","position":[13,8],"team":"骑士","time":"11:05","score":"2"},
    {"name":"勒布朗-詹姆斯","position":[13.2,8.3],"team":"骑士","time":"10:37","score":"2"},
    {"name":"德雷蒙德-格林","position":[1.5,7.5],"team":"勇士","time":"10:13","score":"2"},
    {"name":"哈里森-巴恩斯","position":[3.5,14.5],"team":"勇士","time":"09:38","score":"3"},
    {"name":"德雷蒙德-格林","position":[3.9,2.4],"team":"勇士","time":"09:06","score":"3"},
    {"name":"凯文-乐福","position":[13.2,7.5],"team":"骑士","time":"07:58","score":"2"},
    {"name":"凯里-欧文","position":[12,7.5],"team":"骑士","time":"07:07","score":"2"},
    {"name":"斯蒂芬-库里","position":[4,3],"team":"勇士","time":"06:42","score":"3"},
    {"name":"J.R.史密斯","position":[13.6,7.5],"team":"骑士","time":"06:04","score":"2"},
    {"name":"克莱-汤普森","position":[2.1,3],"team":"勇士","time":"04:50","score":"2"},
    {"name":"理查德-杰弗森","position":[13.2,8.8],"team":"骑士","time":"04:16","score":"2"},
    {"name":'J.R.史密斯',"position":[13.8,8.4],"team":"骑士","time":"03:55","score":"2"},
    {"name":"克莱-汤普森","position":[5,10],"team":"勇士","time":"03:38","score":"3"},
    {"name":"勒布朗-詹姆斯","position":[11,9],"team":"骑士","time":"03:12","score":"2"},
    {"name":'德雷蒙德-格林',"position":[1.6,6],"team":"勇士","time":"01:26","score":"2"}
];
var dataset2=[
    {"name":"肖恩-利文斯顿","position":[3.5,10],"team":"勇士","time":"11:42","score":"2"},
    {"name":"勒布朗-詹姆斯","position":[13,8.5],"team":"骑士","time":"10:33","score":"2"},
    {"name":"肖恩-利文斯顿","position":[1.8,8.5],"team":"勇士","time":"09:33","score":"2"},
    {"name":"莫里斯-威廉姆斯","position":[13.1,7.8],"team":"骑士","time":"09:10","score":"2"},
    {"name":"德雷蒙德-格林","position":[3.8,3],"team":"勇士","time":"08:49","score":"3"},
    {"name":"伊曼-香珀特","position":[11,2.5],"team":"骑士","time":"07:02","score":"3"},
    {"name": "斯蒂芬-库里","position":[2.1,7],"team":"勇士","time":"06:52","score":"2"},
    {"name":"勒布朗-詹姆斯","position":[12,8.3],"team":"骑士","time":"06:10","score":"2"},
    {"name":"德雷蒙德-格林","position":[4.7,8.3],"team":"勇士","time":"05:56","score":"3"},
    {"name":"凯里-欧文","position":[13.8,8.5],"team":"骑士","time":"04:28","score":"2"},
    {"name":"德雷蒙德-格林","position":[4.7,13.1],"team":"勇士","time":"04:09","score":"3"},
    {"name":"凯里-欧文","position":[13.5,7.2],"team":"骑士","time":"03:59","score":"2"},
    {"name":"德雷蒙德-格林","position":[4.8,6.2],"team":"勇士","time":"03:45","score":"3"},
    {"name":"勒布朗-詹姆斯","position":[13.6,8.2],"team":"骑士","time":"03:31","score":"2"},
    {"name":'德雷蒙德-格林',"position":[1.8,6.5],"team":"勇士","time":"02:27","score":"2"},
    {"name":'莱昂德罗-巴博萨',"position":[2,14.5],"team":"勇士","time":"02:08","score":"3"},
    {"name":'安德烈-伊格达拉',"position":[3,6],"team":"勇士","time":"00:51","score":"2"}
];
var dataset3=[
    {"name":"J.R.史密斯","position":[3.5,11.3],"team":"骑士","time":"11:38","score":"2"},
    {"name":"特里斯坦-汤普森","position":[2.5,6],"team":"骑士","time":"11:11","score":"2"},
    {"name":"克莱-汤普森","position":[11,12],"team":"勇士","time":"11:01","score":"3"},
    {"name":"克莱-汤普森","position":[13.5,5],"team":"勇士","time":"10:33","score":"2"},
    {"name":"J.R.史密斯","position":[4,2.5],"team":"骑士","time":"10:08","score":"3"},
    {"name":"J.R.史密斯","position":[3.5,2],"team":"骑士","time":"09:34","score":"3"},
    {"name":"凯里-欧文","position":[1.8,7],"team":"骑士","time":"08:53","score":"2"},
    {"name":"斯蒂芬-库里","position":[13.2,6.7],"team":"勇士","time":"08:21","score":"2"},
    {"name":"斯蒂芬-库里","position":[11,10.4],"team":"勇士","time":"07:40","score":"3"},
    {"name":"凯文-乐福","position":[2,7],"team":"骑士","time":"07:14","score":"2"},
    {"name":"凯文-乐福","position":[1.8,7.5],"team":"骑士","time":"06:24","score":"2"},
    {"name":"凯里-欧文","position":[1.3,6],"team":"骑士","time":"04:33","score":"2"},
    {"name":'哈里森-巴恩斯',"position":[12.9,7],"team":"勇士","time":"04:22","score":"2"},
    {"name":"凯里-欧文","position":[5.5,5],"team":"骑士","time":"04:00","score":"3"},
    {"name":"德雷蒙德-格林","position":[11,3],"team":"勇士","time":"02:30","score":"3"},
    {"name":"肖恩-利文斯顿","position":[13.3,7.5],"team":"勇士","time":"01:56","score":"2"},
    {"name":"勒布朗-詹姆斯","position":[1.3,4.6],"team":"骑士","time":"01:36","score":"2"},
    {"name":"哈里森-巴恩斯","position":[13,14.8],"team":"勇士","time":"01:19","score":"3"},
    {"name":"特里斯坦-汤普森","position":[2.7,7.5],"team":"骑士","time":"00:54","score":"2"},
    {"name": "安德烈-伊格达拉","position":[14,7.6],"team":"勇士","time":"00:04","score":"2"},
];
var dataset4=[
    {"name":"勒布朗-詹姆斯","position":[3,9],"team":"骑士","time":"11:34","score":"2"},
    {"name":"凯文-乐福","position":[2.8,8.6],"team":"骑士","time":"10:35","score":"2"},
    {"name":"凯里-欧文","position":[1.8,6.5],"team":"骑士","time":"09:05","score":"2"},
    {"name":"德雷蒙德-格林","position":[13.5,6.5],"team":"勇士","time":"08:43","score":"2"},
    {"name":"勒布朗-詹姆斯","position":[2,5.8],"team":"骑士","time":"07:15","score":"2"},
    {"name":"斯蒂芬-库里","position":[10,7],"team":"勇士","time":"06:57","score":"3"},
    {"name": "克莱-汤普森","position":[12,12.5],"team":"勇士","time":"06:18","score":"2"},
    {"name":"德雷蒙德-格林","position":[13.1,7.5],"team":"勇士","time":"05:37","score":"2"},
    {"name":"勒布朗-詹姆斯","position":[4.5,3.5],"team":"骑士","time":"04:53","score":"3"},
    {"name":"克莱-汤普森","position":[12.8,6.8],"team":"勇士","time":"04:39","score":"2"},
    {"name":"凯里-欧文","position":[4.2,12.7],"team":"骑士","time":"00:53","score":"3"},
];

var time1=["11:05","10:37","10:13","09:38","09:06","07:58","07:07","06:42","06:04","04:50","04:16","03:55","03:38","03:12","01:26"];
var time2=["11:42","10:33","09:33","09:10","08:49","07:02","06:52","06:10","05:56","04:28","04:09","03:59","03:45","03:31","02:27","02:08","00:51"];
var time3=["11:38","11:11","11:01","10:33","10:08","09:34","08:53","08:21","07:40","07:14","06:24","04:33","04:22","04:00","02:30","01:56","01:36","01:19","00:54","00:04"];
var time4=["11:34","10:35","09:05","08:43","07:15","06:57","06:18","05:37","04:53","04:39","00:53"];
var score1=["2-0","4-0","4-2","4-5","4-8","6-8","8-8","8-11","10-11","10-13","12-13","14-13","14-16","16-16","18-21 "];
var score2=["23-24","25-24","25-26","27-26","27-29","31-29","31-32","33-32","33-35","35-35","35-38","38-38","38-41","40-41", "40-44","40-47","42-49"];
var score3=["44-49","46-49","46-52","46-54","49-54","52-54","54-54","54-56","54-59","56-59","60-59","65-59","65-61","68-61","71-69","71-71","73-71","73-74","75-74","75-76"];
var score4=["77-76","79-76","81-78","81-80","83-80","83-83","83-85","83-87","89-87","89-89","93-89"];

var qieff=[[2,3,6,4],[3,5,7,9],[4,5,8,10],[5,2,3,7]]
var yoeff=[[10,9,6,8],[9,7,5,3],[8,7,4,2],[7,10,9,5]]
