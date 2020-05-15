var dataset1 = [
    { "name": "伊戈达拉", "position": [1, 5], "team": "勇士", "time": "11:24", "score": "2" },
    { "name": "欧文", "position": [10.5, 9], "team": "骑士", "time": "11:08", "score": "3" },
    { "name": "库里", "position": [2.5, 14.5], "team": "勇士", "time": "10:25", "score": "3" },
    { "name": "克莱汤普森", "position": [2.5, 8.5], "team": "勇士", "time": "9:05", "score": "2" },
    { "name": "伊戈达拉", "position": [1.5, 6], "team": "勇士", "time": "8:36", "score": "2" },
    { "name": "欧文", "position": [14, 9], "team": "骑士", "time": "07:57", "score": "2" },
    { "name": "克莱汤普森", "position": [3.5, 12.5], "team": "勇士", "time": "7:43", "score": "3" },
    { "name": "詹姆斯", "position": [11, 4], "team": "骑士", "time": "7:27", "score": "3" },
    { "name": "JR史密斯", "position": [14.5, 8.5], "team": "骑士", "time": "6:54", "score": "2" },
    { "name": "库里", "position": [2.5, 1], "team": "勇士", "time": "6:35", "score": "3" },
    { "name": "欧文", "position": [13.5, 4.5], "team": "骑士", "time": "6:06", "score": "2" },
    { "name": "伊戈达拉", "position": [1.1, 5.1], "team": "勇士", "time": "5:45", "score": "2" },
    { "name": "JR史密斯", "position": [13, 9], "team": "骑士", "time": "5:15", "score": "2" },
    { "name": "克莱汤普森", "position": [2.8, 14], "team": "勇士", "time": "4:52", "score": "3" },
    { "name": "JR史密斯", "position": [14, 15], "team": "骑士", "time": "4:35", "score": "3" },
    { "name": "詹姆斯", "position": [10.5, 8.5], "team": "骑士", "time": "4:07", "score": "3" },
    { "name": "巴博莎", "position": [1, 0], "team": "勇士", "time": "3:34", "score": "3" },
    { "name": "詹姆斯", "position": [13.5, 8.5], "team": "骑士", "time": "2:50", "score": "2" },
    { "name": "库里", "position": [3, 6], "team": "勇士", "time": "2:21", "score": "2" },
    { "name": "利文斯顿", "position": [2.4, 10], "team": "勇士", "time": "0:10", "score": "2" },
    { "name": "詹姆斯", "position": [11.5, 8], "team": "骑士", "time": "0:03", "score": "2" }
];
 
var dataset2 = [
    { "name": "理查德杰佛森", "position": [14, 8], "team": "骑士", "time": "11:45", "score": "2" },
    { "name": "理查德杰佛森", "position": [13.5, 7.5], "team": "骑士", "time": "11:17", "score": "2" },
    { "name": "欧文", "position": [11, 4], "team": "骑士", "time": "10:48", "score": "3" },
    { "name": "克莱汤普森", "position": [2.5, 11], "team": "勇士", "time": "10:29", "score": "2" },
    { "name": "欧文", "position": [12.5, 11], "team": "骑士", "time": "10:13", "score": "2" },
    { "name": "利文斯顿", "position": [1, 8], "team": "勇士", "time": "9:24", "score": "2" },
    { "name": "欧文", "position": [12, 6], "team": "骑士", "time": "9:15", "score": "2" },
    { "name": "克莱汤普森", "position": [3.4, 13], "team": "勇士", "time": "8:22", "score": "3" },
    { "name": "欧文", "position": [13, 12.5], "team": "骑士", "time": "7:35", "score": "2" },
    { "name": "克莱汤普森", "position": [4, 12], "team": "勇士", "time": "7:14", "score": "3" },
    { "name": "詹姆斯", "position": [14, 7], "team": "骑士", "time": "6:51", "score": "2" },
    { "name": "詹姆斯", "position": [14.2, 7.2], "team": "骑士", "time": "6:14", "score": "2" },
    { "name": "克莱汤普森", "position": [4.5, 9], "team": "勇士", "time": "5:47", "score": "3" },
    { "name": "香波特", "position": [13.7, 7.7], "team": "骑士", "time": "5:27", "score": "2" },
    { "name": "詹姆斯", "position": [13, 3], "team": "骑士", "time": "4:52", "score": "2" },
    { "name": "乐福", "position": [14, 12], "team": "骑士", "time": "3:58", "score": "2" },
    { "name": "欧文", "position": [13.7, 6.7], "team": "骑士", "time": "3:45", "score": "2" },
    { "name": "伊戈达拉", "position": [0.8, 7.7], "team": "勇士", "time": "3:28", "score": "2" },
    { "name": "克莱汤普森", "position": [2, 14.5], "team": "勇士", "time": "2:50", "score": "3" },
    { "name": "詹姆斯", "position": [13, 11.5], "team": "骑士", "time": "2:24", "score": "2" },
    { "name": "巴恩斯", "position": [1.4, 15], "team": "勇士", "time": "2:03", "score": "3" },
    { "name": "詹姆斯", "position": [14.5, 8.2], "team": "骑士", "time": "1:46", "score": "2" },
    { "name": "库里", "position": [4, 3], "team": "勇士", "time": "1:32", "score": "3" },
    { "name": "詹姆斯", "position": [14.7, 8.3], "team": "骑士", "time": "1:17", "score": "2" }
];

var dataset3 = [
    { "name": "欧文", "position": [1, 8], "team": "骑士", "time": "11:42", "score": "2" },
    { "name": "库里", "position": [11, 12], "team": "勇士", "time": "11:29", "score": "3" },
    { "name": "詹姆斯", "position": [4.5, 10.5], "team": "骑士", "time": "11:04", "score": "3" },
    { "name": "欧文", "position": [2, 10], "team": "骑士", "time": "9:31", "score": "2" },
    { "name": "詹姆斯", "position": [0.8, 7.7], "team": "骑士", "time": "8:07", "score": "2" },
    { "name": "欧文", "position": [3.8, 3.5], "team": "骑士", "time": "7:45", "score": "3" },
    { "name": "克莱汤普森", "position": [14, 8], "team": "勇士", "time": "7:30", "score": "2" },
    { "name": "詹姆斯", "position": [1.2, 7.3], "team": "骑士", "time": "6:11", "score": "2" },
    { "name": "利文斯顿", "position": [14, 11], "team": "勇士", "time": "5:51", "score": "2" },
    { "name": "欧文", "position": [3.5, 2.5], "team": "骑士", "time": "5:42", "score": "3" },
    { "name": "TT", "position": [0.9, 8.2], "team": "骑士", "time": "5:05", "score": "2" },
    { "name": "理查德杰弗森", "position": [1.5, 7.5], "team": "骑士", "time": "4:15", "score": "2" },
    { "name": "艾泽里", "position": [13.8, 8.3], "team": "勇士", "time": "3:53", "score": "2" },
    { "name": "伊戈达拉", "position": [10.5, 6], "team": "勇士", "time": "3:28", "score": "3" },
    { "name": "詹姆斯", "position": [4, 4], "team": "骑士", "time": "3:04", "score": "3" },
    { "name": "克莱汤普森", "position": [13, 9], "team": "勇士", "time": "2:45", "score": "2" },
    { "name": "理查德杰弗森", "position": [2, 9], "team": "骑士", "time": "1:48", "score": "2" },
    { "name": "巴恩斯", "position": [13.7, 7.7], "team": "勇士", "time": "0:49", "score": "2" }
];


var dataset4 = [
    { "name": "库里", "position": [11, 11], "team": "勇士", "time": "11:40", "score": "3" },
    { "name": "欧文", "position": [2, 11], "team": "骑士", "time": "11:22", "score": "2" },
    { "name": "詹姆斯", "position": [2.8, 12], "team": "骑士", "time": "10:26", "score": "2" },
    { "name": "伊戈达拉", "position": [12, 5], "team": "勇士", "time": "10:08", "score": "2" },
    { "name": "香波特", "position": [1, 7], "team": "骑士", "time": "9:14", "score": "2" },
    { "name": "库里", "position": [14, 8], "team": "勇士", "time": "8:58", "score": "2" },
    { "name": "欧文", "position": [1.5, 7], "team": "骑士", "time": "7:30", "score": "2" },
    { "name": "克莱汤普森", "position": [13.5, 7.5], "team": "勇士", "time": "7:10", "score": "2" },
    { "name": "库里", "position": [11.5, 8], "team": "勇士", "time": "6:39", "score": "2" },
    { "name": "欧文", "position": [1, 6], "team": "骑士", "time": "6:20", "score": "2" },
    { "name": "欧文", "position": [2.5, 6], "team": "骑士", "time": "5:50", "score": "2" },
    { "name": "欧文", "position": [3, 14], "team": "骑士", "time": "5:33", "score": "3" },
    { "name": "詹姆斯", "position": [3, 8], "team": "骑士", "time": "3:22", "score": "2" }
];


var time1 = ["11:24", "11:08", "10:25", "9:05", "08:36", "07:57", "07:43", "07:27", "06:54", "06:35", "06:06", "05:45", "05:15", "04:52", "04:35", "04:07", "03:34", "02:50", "02:21", "00:10", "00:03"];

var time2 = ["11:45", "11:17", "10:48", "10:29", "10:13", "09:24", "09:15", "08:22", "07:35", "07:14", "06:51", "06:14", "05:47", "05:27", "04:52", "03:58", "03:45", "03:28", "02:50", "02:24", "02:03", "01:46", "01:32", "01:17"];

var time3 = ["11:42", "11:29", "11:04", "9:31", "8:07", "7:45", "7:30", "6:11", "5:51", "5:42", "5:05", "4:15", "3:53", "3:28", "3:04", "2:45", "1:48", "0:49"];

var time4 = ["11:40", "11:22", "10:26", "10:08", "9:14", "8:58", "7:30", "7:10", "6:39", "6:20", "5:50", "5:33", "3:22"];

