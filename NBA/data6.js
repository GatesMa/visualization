var dataset1 = [
    { "name": "欧文", "position": [1, 11], "team": "骑士", "time": "9:40", "score": "2" },
    { "name": "詹姆斯", "position": [1, 9], "team": "骑士", "time": "8:51", "score": "2" },
    { "name": "詹姆斯", "position": [0.7, 9], "team": "骑士", "time": "7:43", "score": "2" },
    { "name": "格林", "position": [14, 9], "team": "勇士", "time": "6:54", "score": "2" },
    { "name": "欧文", "position": [4.3, 4.5], "team": "骑士", "time": "6:41", "score": "3" },
    { "name": "詹姆斯", "position": [1.1, 8.5], "team": "骑士", "time": "6:19", "score": "2" },
    { "name": "库里", "position": [11, 3], "team": "勇士", "time": "6:04", "score": "3" },
    { "name": "克莱汤普森", "position": [13, 11], "team": "勇士", "time": "5:21", "score": "2" },
    { "name": "JR史密斯", "position": [4.5, 5], "team": "骑士", "time": "4:58", "score": "3" },
    { "name": "理查德杰弗森", "position": [1, 1], "team": "骑士", "time": "4:40", "score": "2" },
    { "name": "欧文", "position": [1, 13], "team": "骑士", "time": "4:05", "score": "2" },
    { "name": "艾泽里", "position": [14, 10], "team": "勇士", "time": "3:53", "score": "2" },
    { "name": "TT", "position": [0.5, 8], "team": "骑士", "time": "3:17", "score": "2" },
    { "name": "詹姆斯", "position": [0.5, 7], "team": "骑士", "time": "2:44", "score": "2" },
    { "name": "莫里斯威廉姆斯", "position": [1.5, 6], "team": "骑士", "time": "1:48", "score": "2" },
    { "name": "TT", "position": [1.3, 8], "team": "骑士", "time": "0:55", "score": "2" },
    { "name": "伊戈达拉", "position": [13, 1.5], "team": "勇士", "time": "0:03", "score": "2" },
];
 
var dataset2 = [
    { "name": "欧文", "position": [3.7, 2.8], "team": "骑士", "time": "11:27", "score": "3" },
    { "name": "库里", "position": [11, 3], "team": "勇士", "time": "11:16", "score": "3" },
    { "name": "欧文", "position": [3, 5], "team": "骑士", "time": "10:24", "score": "2" },
    { "name": "库里", "position": [10.8, 6], "team": "勇士", "time": "9:39", "score": "3" },
    { "name": "TT", "position": [1.5, 8], "team": "骑士", "time": "8:43", "score": "2" },
    { "name": "巴博莎", "position": [13, 7], "team": "勇士", "time": "8:23", "score": "2" },
    { "name": "欧文", "position": [1.5, 9], "team": "骑士", "time": "7:39", "score": "2" },
    { "name": "伊戈达拉", "position": [12, 1], "team": "勇士", "time": "7:19", "score": "3" },
    { "name": "詹姆斯", "position": [3.3, 2], "team": "骑士", "time": "6:51", "score": "3" },
    { "name": "汤普森", "position": [14, 7], "team": "勇士", "time": "5:42", "score": "2" },
    { "name": "库里", "position": [10.6, 6.2], "team": "勇士", "time": "5:12", "score": "3" },
    { "name": "格林", "position": [13.8, 7.5], "team": "勇士", "time": "4:40", "score": "2" },
    { "name": "TT", "position": [1.2, 8.8], "team": "骑士", "time": "2:53", "score": "2" },
    { "name": "詹姆斯", "position": [1.1, 7], "team": "骑士", "time": "2:33", "score": "2" },
    { "name": "汤普森", "position": [12, 9], "team": "勇士", "time": "1:25", "score": "2" },
    { "name": "琼斯", "position": [2, 8], "team": "骑士", "time": "1:01", "score": "2" }
];

var dataset3 = [
    { "name": "詹姆斯", "position": [14, 8], "team": "骑士", "time": "10:55", "score": "2" },
    { "name": "JR史密斯", "position": [11.2, 12], "team": "骑士", "time": "10:00", "score": "3" },
    { "name": "库里", "position": [3, 1], "team": "勇士", "time": "09:23", "score": "3" },
    { "name": "乐福", "position": [14, 15], "team": "骑士", "time": "08:04", "score": "3" },
    { "name": "汤普森", "position": [1, 15], "team": "勇士", "time": "07:48", "score": "3" },
    { "name": "格林", "position": [1, 8.5], "team": "勇士", "time": "06:53", "score": "2" },
    { "name": "库里", "position": [1.2, 7.8], "team": "勇士", "time": "06:04", "score": "2" },
    { "name": "欧文", "position": [12, 5.5], "team": "骑士", "time": "05:38", "score": "2" },
    { "name": "艾泽里", "position": [0.8, 8.4], "team": "勇士", "time": "05:19", "score": "2" },
    { "name": "詹姆斯", "position": [14.3, 8], "team": "骑士", "time": "05:00", "score": "2" },
    { "name": "詹姆斯", "position": [14.1, 7.7], "team": "骑士", "time": "04:40", "score": "2" },
    { "name": "汤普森", "position": [1.1, 6.5], "team": "勇士", "time": "04:23", "score": "2" },
    { "name": "汤普森", "position": [2, 12], "team": "勇士", "time": "03:42", "score": "2" },
    { "name": "詹姆斯", "position": [11.2, 3], "team": "骑士", "time": "03:20", "score": "3" },
    { "name": "利文斯顿", "position": [1.1,11], "team": "勇士", "time": "02:14", "score": "2" },
    { "name": "汤普森", "position": [4.3, 3.5], "team": "勇士", "time": "01:31", "score": "3" },
    { "name": "汤普森", "position": [3.5, 13], "team": "勇士", "time": "00:48", "score": "3" },
    { "name": "汤普森", "position": [1.5, 8], "team": "勇士", "time": "00:06", "score": "2" },
];

var dataset4 = [
    { "name": "詹姆斯", "position": [13, 9], "team": "骑士", "time": "10:33", "score": "2" },
    { "name": "巴博莎", "position": [0.8, 8.8], "team": "勇士", "time": "10:03", "score": "2" },
    { "name": "库里", "position": [3.3, 13], "team": "骑勇士", "time": "9:04", "score": "3" },
    { "name": "詹姆斯", "position": [14, 8], "team": "骑士", "time": "8:22", "score": "2" },
    { "name": "巴博莎", "position": [1, 0], "team": "勇士", "time": "8:06", "score": "2" },
    { "name": "詹姆斯", "position": [12, 7], "team": "骑士", "time": "7:30", "score": "2" },
    { "name": "詹姆斯", "position": [14, 7.7], "team": "骑士", "time": "7:00", "score": "2" },
    { "name": "JR史密斯", "position": [10.5, 7], "team": "骑士", "time": "6:36", "score": "3" },
    { "name": "巴博莎", "position": [4, 3.5], "team": "勇士", "time": "6:22", "score": "3" },
    { "name": "詹姆斯", "position": [12.7, 9], "team": "骑士", "time": "5:53", "score": "2" },
    { "name": "TT", "position": [14.5, 7.9], "team": "骑士", "time": "5:17", "score": "2" },
    { "name": "库里", "position": [1.8, 7.5], "team": "勇士", "time": "5:07", "score": "2" },
    { "name": "TT", "position": [13.5, 7.5], "team": "骑士", "time": "4:43", "score": "2" },
    { "name": "JR史密斯", "position": [14, 15], "team": "骑士", "time": "3:58", "score": "3" },
    { "name": "詹姆斯", "position": [11, 12], "team": "骑士", "time": "2:59", "score": "3" },
    { "name": "JR史密斯", "position": [14.5, 7.1], "team": "骑士", "time": "2:24", "score": "2" },
    { "name": "莫里斯威廉姆斯", "position": [13.5, 12], "team": "骑士", "time": "1:49", "score": "2" },
    { "name": "麦卡杜", "position": [1.2, 8.5], "team": "勇士", "time": "1:38", "score": "2" },
    { "name": "克拉克", "position": [3.7, 3.3], "team": "勇士", "time": "1:25", "score": "3" },
    { "name": "斯贝茨", "position": [2, 14.5], "team": "勇士", "time": "1:01", "score": "3" },
    { "name": "斯贝茨", "position": [3, 14], "team": "勇士", "time": "0:33", "score": "3" },
    { "name": "德拉维多瓦", "position": [13, 3], "team": "骑士", "time": "0:14", "score": "2" },
];


var time1 = ["9:40","8:51",  "7:43", "6:54", "6:41","6:19", "6:04","5:21","4:58", "4:40","4:05","3:53","3:17","2:44","1:48","0:55","0:03"];

var time2 = ["11:27","11:16","10:24", "9:39", "8:43","8:23","7:39","7:19","6:51","5:42","5:12","4:40", "2:53","2:33","1:25","1:01"];

var time3 = ["10:55","10:00","09:23","08:04","07:48","06:53","06:04","05:38","05:19","05:00","04:40","04:23","03:42","03:20","02:14","01:31","00:48","00:06"];

var time4 = ["10:33","10:03","9:04","8:22","8:06", "7:30","7:00","6:22","5:53","5:17","5:07","4:43","3:58","2:59","2:24","1:49","1:38","1:25","1:01","0:33","0:14"];