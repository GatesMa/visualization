var qisc1=[34, 3, 1, 4,4];
var qisc2=[25, 2, 3, 9,13];
var qisc3=[11, 0, 1, 0,5];
var qisc4=[10, 0, 1, 0,7];
var qisc5=[10, 0, 0, 1,2];
var qisc6=[2, 0, 0, 0,1];
var qisc7=[3, 0, 0, 0,6];
var qisc8=[0, 0, 0, 0,1];
var qisc9=[2, 0, 0, 1,1];



var yosc1=[9, 2, 3, 4,12];
var yosc2=[14, 1, 0, 2,8];
var yosc3=[38, 2, 0, 6,5];
var yosc4=[0, 0, 1, 1,1] ;
var yosc5=[25, 1, 1, 1,4];
var yosc6=[8, 0, 0, 1,3];
var yosc7=[10, 1, 1, 7,6];
var yosc8= [2, 0, 0, 1,1];
var yosc14=[2, 0, 0, 0,3];

var qipos1=[
    [11,6.3],
    [11,6.9],
    [6.9,7],
    [7.9,7.3],
    [7,7.1],
    [5.5,7.1],
    [7.45,12.7],
    [6.9,6.4],
    [6.5,11.4],
    [7.2,6.5],
    [8.5,10.5],
    [7.5,6.95],
    [7.6,6.3],
    [7.7,7],
];//欧文
var qipos2=[
    [7.55,6.4],
    [7.3,7],
    [7.15,7.2],
    [5,14],
    [9.7,11.9],
    [7.7,6.8],
    [7.75,6.6],
    [7.2,6.6],
    [7.2,7],
    [7.25,6.2],
    [7.8,6.3],
];//詹姆斯
var qipos3=[
    [7.2,6.9],
    [4.2,7.5],
    [8.2,9],
];//乐福
var qipos4=[
    [7.25,8.3],
    [7.65,6.85],
    [7.1,9],
    [7.2,6.3],
    [4.8,5.8],
];//特里斯坦 汤普森
var qipos5=[
    [4.1,5.8],
    [5.5,14.2],
    [7.2,6.6],
];//JR史密斯
var qipos6=[
    [6,11.9],
];//香珀特
var qipos7=[
    [7.3,6.7],
];//杰弗森
var qipos8=[[]]
var qipos9=[[]]




var yopos1=[
    [7.3,6.5],
    [7.2,6.9],
];//格林
var yopos2=[
    [4.1,5.9],
    [8.7,9.5],
    [4.1,6.3],
    [5.5,14.2],
    [5,13],
];//巴恩斯
var yopos3=[
    [5,13.3],
    [7.8,15],
    [10.9,6.1],
    [9,11],
    [10,14.2],
    [4.4,10.2],
    [11,7.2],
    [7.8,6.8],
    [7.8,6.9],
    [6.9,15],
    [7,6.9],
];//库里
var yopos4=[
    [5,13.3],
    [7.8,15],
    [10.9,6.1],
    [9,11],
    [10,14.2],
    [4.4,10.2],
    [11,7.2],
    [7.8,6.8],
    [7.8,6.9],
    [6.9,15],
    [7,6.9],
];//博古特
var yopos5=[
    [4.8,12.8],
    [7.7,6.7],
    [9,14.5],
    [8.6,7.5],
    [10,12.5],
    [5,13.3],
    [8,12.8],
];//克莱 汤普森
var yopos6=[
    [8.6,11.8],
    [8,7.5],
    [6,6.5],
];//利文斯顿
var yopos7=[
    [4.3,9],
    [10.6,11.5],
    [7.3,6.85],
    [6.9,11.9],
];//伊格达拉
var yopos10=[[]]//瓦莱乔
var yopos14=[
    [7.55,6.9],
];//麦卡杜



var dataset1=[
    {"name":"巴恩斯","position":[13.7,0],"team":"勇士","time":"11:29","score":"3"},
    {"name":"欧文","position":[1.4,0],"team":"骑士","time":"11:14","score":"3"},
    {"name":"JR史密斯","position":[1.2,15],"team":"骑士","time":"10:44","score":"3"},
    {"name":"巴恩斯","position":[12.6,10.4],"team":"勇士","time":"10:27","score":"2"},
    {"name":"汤普森","position":[2.1,7.8],"team":"骑士","time":"10:03","score":"2"},
    {"name":"巴恩斯","position":[13.4,0],"team":"勇士","time":"9:54","score":"3"},
    {"name":"汤普森","position":[1.6,7.2],"team":"骑士","time":"9:38","score":"2"},
    {"name":"欧文","position":[1.6,0],"team":"骑士","time":"7:08","score":"3"},
    {"name":"克莱","position":[11.3,2],"team":"勇士","time":"6:47","score":"3"},
    {"name":"格林","position":[13.5,7.2],"team":"勇士","time":"6:21","score":"2"},
    {"name":"汤普森","position":[2.3,8.3],"team":"骑士","time":"6:03","score":"2"},
    {"name":'克莱',"position":[13.4,8],"team":"勇士","time":"5:51","score":"2"},
    {"name":'欧文',"position":[1.6,9],"team":"骑士","time":"5:01","score":"2"},
    {"name":'詹姆斯',"position":[1.45,7.1],"team":"骑士","time":"4:03","score":"2"},
    {"name":'库里',"position":[11.1,2.6],"team":"勇士","time":"3:50","score":"3"},
    {"name":'乐福',"position":[1.6,7.8],"team":"骑士","time":"3:19","score":"2"},
    {"name":'汤普森',"position":[1.4,7.8],"team":"骑士","time":"2:07","score":"2"},
    {"name":'库里',"position":[10.3,8],"team":"勇士","time":"1:48","score":"3"},
    {"name":'麦卡杜',"position":[13.3,7.6],"team":"勇士","time":"1:09","score":"2"}
];
var dataset2=[
    {"name":"香珀特","position":[3.4,10.7],"team":"骑士","time":"10:16","score":"2"},
    {"name":"克莱","position":[10.7,10.7],"team":"勇士","time":"9:52","score":"3"},
    {"name":"利文斯顿","position":[11.6,9.8],"team":"勇士","time":"8:26","score":"2"},
    {"name":"库里","position":[13.7,15],"team":"勇士","time":"7:02","score":"3"},
    {"name":"欧文","position":[1.9,6.9],"team":"骑士","time":"6:55","score":"2"},
    {"name":"JR史密斯","position":[4.3,11.9],"team":"骑士","time":"5:23","score":"3"},
    {"name":"格林","position":[13.3,7],"team":"勇士","time":"4:40","score":"2"},
    {"name":"欧文","position":[1.6,9],"team":"骑士","time":"4:31","score":"2"},
    {"name":"詹姆斯","position":[1.6,7.7],"team":"骑士","time":"4:09","score":"2"},
    {"name":"乐福","position":[1.8,14.9],"team":"骑士","time":"3:29","score":"3"},
    {"name":'伊格达拉',"position":[12,0],"team":"勇士","time":"3:10","score":"3"},
    {"name":'克莱',"position":[13.35,10.3],"team":"勇士","time":"2:24","score":"2"},
    {"name":'詹姆斯',"position":[1.8,7.9],"team":"骑士","time":"2:00","score":"2"},
    {"name":'JR史密斯',"position":[1.4,7.8],"team":"骑士","time":"1:44","score":"2"},
    {"name":'欧文',"position":[1.55,11],"team":"骑士","time":"1:07","score":"2"},
    {"name":'汤普森',"position":[1.2,12.5],"team":"骑士","time":"0:34","score":"2"},
    {"name":'库里',"position":[12,10.3],"team":"勇士","time":"0:26","score":"2"}
];
var dataset3=[
    {"name":"欧文","position":[11.2,7.2],"team":"骑士","time":"11:46","score":"2"},
    {"name":"库里","position":[4.1,3.1],"team":"勇士","time":"11:01","score":"3"},
    {"name":"詹姆斯","position":[11,2.9],"team":"骑士","time":"9:29","score":"3"},
    {"name":"欧文","position":[13.55,6.1],"team":"骑士","time":"8:51","score":"2"},
    {"name":"库里","position":[3,14.1],"team":"勇士","time":"8:37","score":"3"},
    {"name":"克莱","position":[3.2,1.5],"team":"勇士","time":"8:11","score":"3"},
    {"name":"杰弗森","position":[13.4,7.4],"team":"骑士","time":"7:47","score":"2"},
    {"name":"克莱","position":[4,12],"team":"勇士","time":"7:33","score":"3"},
    {"name":"詹姆斯","position":[11.5,11.5],"team":"骑士","time":"7:08","score":"2"},
    {"name":"欧文","position":[11.7,5.3],"team":"骑士","time":"6:35","score":"2"},
    {"name":"克莱","position":[3.8,6],"team":"勇士","time":"5:28","score":"2"},
    {"name":'伊格达拉',"position":[3,1.1],"team":"勇士","time":"4:38","score":"3"},
    {"name":'库里',"position":[1.5,0],"team":"勇士","time":"4:07","score":"3"},
    {"name":'欧文',"position":[13.5,7.1],"team":"骑士","time":"3:18","score":"2"},
    {"name":'詹姆斯',"position":[13.4,7.8],"team":"骑士","time":"2:43","score":"2"},
    {"name":'库里',"position":[1.6,7.1],"team":"勇士","time":"1:33","score":"2"},
    {"name":'伊格达拉',"position":[1.65,7.7],"team":"勇士","time":"1:00","score":"2"},
    {"name":'欧文',"position":[12.5,9.8],"team":"骑士","time":"0:39","score":"2"}
];
var dataset4=[
    {"name":"乐福","position":[12.7,8.9],"team":"骑士","time":"11:34","score":"2"},
    {"name":"詹姆斯","position":[13.5,7.9],"team":"骑士","time":"11:02","score":"2"},
    {"name":"利文斯顿","position":[2.1,6.8],"team":"勇士","time":"10:41","score":"2"},
    {"name":"詹姆斯","position":[13.45,7],"team":"骑士","time":"10:21","score":"2"},
    {"name":"巴恩斯","position":[4.2,11.5],"team":"勇士","time":"10:09","score":"3"},
    {"name":"伊格达拉","position":[3.5,9],"team":"勇士","time":"9:03","score":"2"},
    {"name":"利文斯顿","position":[1.5,10.7],"team":"勇士","time":"8:27","score":"2"},
    {"name":"库里","position":[1.7,7.1],"team":"勇士","time":"6:50","score":"2"},
    {"name":"巴恩斯","position":[3.7,12.7],"team":"勇士","time":"5:56","score":"3"},
    {"name":"欧文","position":[13.3,7.5],"team":"骑士","time":"3:44","score":"2"},
    {"name":'库里',"position":[4.7,9],"team":"勇士","time":"3:22","score":"3"},
    {"name":'欧文',"position":[13.6,7.6],"team":"骑士","time":"2:08","score":"2"},
    {"name":'库里',"position":[1.65,8],"team":"勇士","time":"0:54","score":"2"},
    {"name":'詹姆斯',"position":[13.2,7],"team":"骑士","time":"0:46","score":"2"},
    {"name":'欧文',"position":[13.25,7.8],"team":"骑士","time":"0:31","score":"2"},
    {"name":'詹姆斯',"position":[13.7,7.1],"team":"骑士","time":"0:24","score":"2"},
    {"name":'詹姆斯',"position":[13.65,8],"team":"骑士","time":"0:14","score":"2"}
];
var dataset=[];
var time1=["11:29","11:14","10:44","10:27","10:03","9:54","9:38","7:08","6:47","6:21","6:03","5:51","5:01","4:03","3:50","3:19","2:07","1:48","1:09"];
var time2=["10:16","9:52","8:26","7:02","6:55","5:23","4:40","4:31","4:09","3:29","3:10","2:24","2:00","1:44","1:07","0:34","0:26"];
var time3=["11:46","11:01","9:29","8:51","8:37","8:11","7:47","7:33","7:08","6:35","5:28","4:38","4:07","3:18","2:43","1:33","1:00","0:39"];
var time4=["11:34","11:02","10:41","10:21","10:09","9:03","8:27","6:50","5:56","3:44","3:22","2:08","0:54","0:46","0:31","0:24","0:14"];

var score1=["3-0","3-3","5-6","7-6","7-8","10-8","10-10","10-13","13-13","15-13","15-15","17-15","17-18","17-20","20-20","20-22","24-24","27-24","29-26"];
var score2=["29-30","32-30","34-32","37-33","37-35","39-39","41-40","41-42","41-44","42-47","45-47","48-47","48-49","48-51","48-53","48-55","50-55"];
var score3=["50-58","53-58","53-61","55-63","58-63","61-63","61-65","64-65","64-67","64-69","66-69","69-69","72-69","72-71","74-73","76-73","79-73","79-75"];
var score4=["79-79","79-81","81-81","81-83","84-83","86-83","88-83","90-84","93-84","93-86","96-86","96-88","98-89","98-91","102-93","102-95","108-97"];

var qieff=[[4.5,5.1,5.3,3.6],[3.6,4.3,5.4,4.4],[3.2,4.7,5.8,4.1],[4.2,4.7,5.8,5.2]]
var yoeff=[[5.5,4.9,4.7,6.4],[6.4,5.7,4.6,5.6],[6.8,5.3,4.2,5.9],[5.8,5.3,4.2,4.8]]
