
var SunBurstColors=['#EA9647','#F39800','#C23531','#AC0027','#7D0000'];
var SunBurstbgcolor = '#f1e5d1';

var AuReviewG1_1 = [
    {
        name: '骑士',
        value: 21,
        itemStyle: {
            color: SunBurstColors[4]
        },
        children: [{
            name: '夸骑士',
            value: 8,
            children: [{
                name: '名词',
                value: 2,
                children: [{
                    name: '骑士'
                }, {
                    name: '詹姆斯'
                }]
            },{
                name: '形容词',
                value:2,
                children: [{
                    name: '解气'
                }, {
                    name: '霸气'
                }]
            },{
                name: '动词',
                value:4,
                children: [{
                    name: '加油'
                }, {
                    name: '打爆'
                }, {
                    name: '激活'
                },{
                    name: '觉醒'
                }]
            }]
        }, {
            name: '骂骑士',
            value: 13,
            children: [{
                name: '名词',
                children: [{
                    name: '雷霆'
                },{
                    name: '队友'
                },{
                    name: '亚军'
                },{
                    name: '档次'
                }]
            },{
                name: '形容词',
                children: [{
                    name: '真弱'
                },{
                    name: '太软'
                },{
                    name: '可怕'
                },{
                    name: '可惜'
                },{
                    name: '很差'
                }]
            },{
                name: '动词',
                children: [{
                    name: '吊打'
                },{
                    name: '防守'
                },{
                    name: '打穿'
                },{
                    name: '视而不见'
                }]
            }]
        }]
    },
    {
        name: '勇士',
        value: 10,
        itemStyle: {
            color: SunBurstColors[3]
        },
        children: [{
            name: '夸勇士',
            value :7,
            children: [{
                name: '名词',
                children: [{
                    name: '神球'
                },{
                    name:'勇士'
                },{
                    name:'总冠军'
                }]
            },{
                name: '形容词',
                children: [{
                    name: '轻松'
                },{
                    name:'强劲'
                }]
            },{
                name: '动词',
                children: [{
                    name: '飞起来'
                },{
                    name:'开花'
                }]
            }]
        }, {
            name: '骂勇士',
            value: 3,
            children: [{
                name: '名词',
                children: [{
                    name: '格林'
                }]
            },{
                name:'形容词',
                children:[{
                    name:'太脏'
                },{
                    name:'过分'
                }]
            }]
        }]
    },
    {
        name:'裁判',
        value: 15,
        itemStyle: {
            color: SunBurstColors[2]
        },
        children: [{
            name: '夸裁判',
            value: 2,
            children: [{
                name: '形容词',
                children: [{
                    name: '公正'
                },{
                    name: '没问题'
                }]
            }]
        }, {
            name: '骂裁判',
            value: 13,
            children: [{
                name: '名词',
                children: [{
                    name: '哨子'
                }, {
                    name: '格林'
                },{
                    name:'反应'
                },{
                    name:'柯凡'
                },{
                    name:'三次'
                },{
                    name:'垃圾'
                }]
            },{
                name: '形容词',
                children: [{
                    name: '太黑'
                }, {
                    name: '太假'
                },{
                    name:'落后'
                },{
                    name:'明显'
                }]
            },{
                name: '动词',
                children: [{
                    name: '赛钱'
                }, {
                    name: '不吹'
                },{
                    name: '犯规'
                }]
            }]
        }]
    },
    {
        name:'中立',
        value: 7,
        itemStyle: {
            color: SunBurstColors[1]
        },
        children: [{
            name: '中立',
            value:7,
            children: [{
                name: '名词',
                children: [{
                    name: '雷霆'
                }, {
                    name: '差距'
                }]
            },{
                name: '形容词',
                children: [{
                    name: '安静'
                }, {
                    name: '还可以'
                }]
            },{
                name: '动词',
                children: [{
                    name: '想念'
                }, {
                    name: '看球'
                },{
                    name: '打球'
                }]
            }]
        }]
    }]
var AuReviewG1_2=[
    {
        name: '骑士',
        value: 16,
        itemStyle: {
            color: SunBurstColors[4]
        },
        children: [{
            name: '夸骑士',
            value: 5,
            children: [{
                name: '名词',

                children: [{
                    name: '骑士'
                }, {
                    name: '詹姆斯'
                }]
            },{
                name: '动词',

                children: [{
                    name: '加油'
                }, {
                    name: '扛住'
                }, {
                    name: '发飙'
                }]
            }]
        }, {
            name: '骂骑士',
            value: 11,
            children: [{
                name: '名词',
                children: [{
                    name: '雷霆'
                },{
                    name: '球员'
                },{
                    name: '摆设'
                },{
                    name: '骑士'
                }]
            },{
                name: '形容词',
                children: [{
                    name: '烂'
                },{
                    name: '可怕'
                },{
                    name: '丢人'
                },{
                    name: '真差'
                }]
            },{
                name: '动词',
                children: [{
                    name: '回防'
                },{
                    name: '防守'
                },{
                    name: '传球'
                }]
            }]
        }]
    },
    {
        name: '勇士',
        value: 5,
        itemStyle: {
            color: SunBurstColors[3]
        },
        children: [{
            name: '夸勇士',
            value :3,
            children: [{
                name: '名词',
                children: [{
                    name: '助攻'
                },{
                    name:'勇士'
                },{
                    name:'冠军'
                }]
            }]
        }, {
            name: '骂勇士',
            value: 2,
            children: [{
                name: '名词',
                children: [{
                    name: '格林'
                },{
                    name: '黑哨'
                }]
            }]
        }]
    },
    {
        name:'裁判',
        value: 10,
        itemStyle: {
            color: SunBurstColors[2]
        },
        children: [{
            name: '夸裁判',
            value: 1,
            children: [{
                name: '形容词',
                children: [{
                    name: '公正'
                }]
            }]
        }, {
            name: '骂裁判',
            value: 9,
            children: [{
                name: '名词',
                children: [{
                    name: '哨子'
                }, {
                    name: '格林'
                },{
                    name:'裁判'
                },{
                    name:'亲儿子'
                }]
            },{
                name: '形容词',
                children: [{
                    name: '恶心'
                },{
                    name: '可怜'
                },{
                    name:'明显'
                }]
            },{
                name: '动词',
                children: [{
                    name: '不吹'
                },{
                    name: '犯规'
                }]
            }]
        }]
    },
    {
        name:'中立',
        value: 12,
        itemStyle: {
            color: SunBurstColors[1]
        },
        children: [{
            name: '中立',
            value:12,
            children: [{
                name: '名词',
                children: [{
                    name: '雷霆'
                }, {
                    name: '差距'
                },{
                    name: '詹姆斯'
                },{
                    name: '历史'
                },{
                    name: '勇士'
                }]
            },{
                name: '形容词',
                children: [{
                    name: '精彩'
                }, {
                    name: '问题不大'
                },{
                    name:'激烈'
                }]
            },{
                name: '动词',
                children: [{
                    name: '应对'
                }, {
                    name: '防守'
                },{
                    name: '舒服'
                },{
                    name:'依靠'
                }]
            }]
        }]
    }]
var AuReviewG1_3=[
    {
        name: '骑士',
        value: 23,
        itemStyle: {
            color: SunBurstColors[4]
        },
        children: [{
            name: '夸骑士',
            value: 3,
            children: [{
                name: '名词',

                children: [{
                    name: '骑士'
                }, {
                    name: '詹姆斯'
                },{
                    name:'差距'
                }]
            }]
        }, {
            name: '骂骑士',
            value: 20,
            children: [{
                name: '名词',
                children: [{
                    name: '德拉'
                },{
                    name: '疯狗'
                },{
                    name: '捣蛋'
                },{
                    name: '笑话'
                },{
                    name:'垃圾'
                },{
                    name:'局势'
                },{
                    name:'替补'
                },{
                    name:'level'
                },{
                    name:'克里夫兰'
                },{
                    name:'硬伤'
                },{
                    name:'雷霆'
                }]
            },{
                name: '形容词',
                children: [{
                    name: '烂'
                },{
                    name: '渣'
                },{
                    name: '惨不忍睹'
                },{
                    name: '真脏'
                },{
                    name:'健康'
                }]
            },{
                name: '动词',
                children: [{
                    name: '改变'
                },{
                    name: '防守'
                },{
                    name: '开除'
                },{
                    name:'受伤'
                }]
            }]
        }]
    },
    {
        name: '勇士',
        value: 6,
        itemStyle: {
            color: SunBurstColors[3]
        },
        children: [{
            name: '夸勇士',
            value :5,
            children: [{
                name: '名词',
                children: [{
                    name: '实力'
                },{
                    name:'勇士'
                },{
                    name:'冠军'
                }]
            },{
                name: '动词',
                children: [{
                    name: '称霸'
                },{
                    name:'开花'
                }]
            }]
        }, {
            name: '骂勇士',
            value: 1,
            children: [{
                name: '名词',
                children: [{
                    name: '垃圾'
                }]
            }]
        }]
    },
    {
        name:'裁判',
        value: 3,
        itemStyle: {
            color: SunBurstColors[2]
        },
        children: [{
            name: '骂裁判',
            value: 3,
            children: [{
                name: '名词',
                children: [{
                    name: '亲爹哨'
                }, {
                    name: '罚球'
                },{
                    name:'主场哨'
                }]
            }]
        }]
    },
    {
        name:'中立',
        value: 13,
        itemStyle: {
            color: SunBurstColors[1]
        },
        children: [{
            name: '中立',
            value:13,
            children: [{
                name: '名词',
                children: [{
                    name: '雷霆'
                }, {
                    name: '差距'
                },{
                    name: '詹姆斯'
                },{
                    name: '档次'
                },{
                    name: '段子'
                }]
            },{
                name: '形容词',
                children: [{
                    name: '最强'
                }, {
                    name: '普通'
                },{
                    name:'在所难免'
                }]
            },{
                name: '动词',
                children: [{
                    name: '捣蛋'
                }, {
                    name: '加油'
                },{
                    name: '舒服'
                },{
                    name:'哭了'
                },{
                    name:'击败'
                }]
            }]
        }]
    }]
var AuReviewG1_4=[
    {
        name: '骑士',
        value: 24,
        itemStyle: {
            color: SunBurstColors[4]
        },
        children: [{
            name: '夸骑士',
            value: 9,
            children: [{
                name: '名词',
                children: [{
                    name: '骑士'
                }, {
                    name: '詹姆斯'
                },{
                    name:'冠军'
                },{
                    name:'梦想'
                }]
            },{
                name:'形容词',
                children:[{
                    name:'辉煌'
                },{
                    name:'认真'
                }]
            },{
                name:'动词',
                children:[{
                    name:'爱你'
                },{
                    name:'支持'
                },{
                    name:'相信'
                }]
            }]
        }, {
            name: '骂骑士',
            value: 15,
            children: [{
                name: '名词',
                children: [{
                    name: '棉花'
                },{
                    name: '雷霆'
                },{
                    name: '总决赛'
                },{
                    name: '骑士'
                },{
                    name:'欧文'
                },{
                    name:'天赋'
                },{
                    name:'团队'
                },{
                    name:'水平'
                },{
                    name:'湖人'
                },{
                    name:'三巨头'
                },{
                    name:'bug'
                }]
            },{
                name: '形容词',
                children: [{
                    name: '太蠢'
                },{
                    name: '痛苦'
                }]
            },{
                name: '动词',
                children: [{
                    name: '报仇'
                },{
                    name: '回家'
                }]
            }]
        }]
    },
    {
        name: '勇士',
        value: 8,
        itemStyle: {
            color: SunBurstColors[3]
        },
        children: [{
            name: '夸勇士',
            value :8,
            children: [{
                name: '名词',
                children: [{
                    name: '机会'
                },{
                    name:'勇士'
                },{
                    name:'替补'
                }]
            },{
                name:'形容词',
                children:[{
                    name:'稳定'
                },{
                    name:'好棒'
                }]
            },{
                name: '动词',
                children: [{
                    name: '加油'
                },{
                    name:'赞'
                },{
                    name:'卫冕'
                }]
            }]
        }]
    },
    /*{
            name:'裁判',
            value: 3,
            itemStyle: {
                color: SunBurstColors[2]
            },
            children: [{
                name: '骂裁判',
                value: 3,
               children: [{
                    name: '名词',
                    children: [{
                        name: '亲爹哨'
                    }, {
                        name: '罚球'
                    },{
                        name:'主场哨'
                    }]
                }]
            }]
        },*/
    {
        name:'中立',
        value: 25,
        itemStyle: {
            color: SunBurstColors[1]
        },
        children: [{
            name: '中立',
            value:25,
            children: [{
                name: '名词',
                children: [{
                    name: '勇士'
                }, {
                    name: '阵容'
                },{
                    name: '詹姆斯'
                },{
                    name: '中锋'
                },{
                    name: '得分'
                },{
                    name: '骑士'
                }, {
                    name: '潜力'
                },{
                    name: '雷霆'
                },{
                    name: '总决赛'
                },{
                    name: '概率'
                }]
            },{
                name: '形容词',
                children: [{
                    name: '客观'
                }, {
                    name: '太顺'
                },{
                    name:'太牛'
                },{
                    name: '难看'
                }, {
                    name: '势均力敌'
                },{
                    name:'太菜'
                },{
                    name:'正常'
                }]
            },{
                name: '动词',
                children: [{
                    name: '心疼'
                }, {
                    name: '评论'
                },{
                    name: '挡住'
                },{
                    name:'夺冠'
                },{
                    name:'结束'
                },{
                    name:'对决'
                },{
                    name:'取消'
                },{
                    name:'横扫'}]
            }]
        }]
    }]
var AuReviewG2_1=[
    {
        name: '骑士',
        value: 9,
        itemStyle: {
            color: SunBurstColors[4]
        },
        children: [{
            name: '夸骑士',
            value: 2,
            children: [{
                name: '名词',
                children: [{
                    name: '希望'
                }, {
                    name: '詹姆斯'
                }]
            }/*,{
            name:'形容词',
            children:[{
                name:'辉煌'
            },{
                name:'认真'
            }]
        },{
            name:'动词',
            children:[{
                name:'爱你'
            },{
                name:'支持'
            },{
                name:'相信'
            }]
        }*/]
        }, {
            name: '骂骑士',
            value: 7,
            children: [{
                name: '名词',
                children: [{
                    name: '詹姆斯'
                },{
                    name: '克利夫兰'
                },{
                    name: '骑士'
                }]
            },{
                name: '形容词',
                children: [{
                    name: '不行'
                },{
                    name: '冰清玉洁'
                },{
                    name:'干净'
                }]
            },{
                name: '动词',
                children: [{
                    name: '领先'
                }]
            }]
        }]
    },
    {
        name: '勇士',
        value: 15,
        itemStyle: {
            color: SunBurstColors[3]
        },
        children: [{
            name: '夸勇士',
            value :5,
            children: [{
                name: '名词',
                children: [{
                    name: '库里'
                },{
                    name:'勇士'
                },{
                    name:'篮板'
                }]
            },{
                name:'形容词',
                children:[{
                    name:'全面'
                },{
                    name:'好棒'
                }]
            }]
        },{
            name: '骂勇士',
            value :10,
            children: [{
                name: '名词',
                children: [{
                    name: '套路'
                },{
                    name:'勇士'
                },{
                    name:'状态'
                },{
                    name:'2分'
                }]
            },{
                name:'形容词',
                children:[{
                    name:'真诚'
                },{
                    name:'随意'
                }]
            },{
                name: '动词',
                children: [{
                    name: '梦游'
                },{
                    name:'失误'
                },{
                    name:'浪'
                },{
                    name:'落后'
                }]
            }]
        }]
    },
    {
        name:'裁判',
        value: 3,
        itemStyle: {
            color: SunBurstColors[2]
        },
        children: [{
            name: '夸裁判',
            value: 1,
            children: [{
                name: '名词',
                children: [{
                    name: '主场哨'
                }]
            }]
        },{
            name: '骂裁判',
            value: 2,
            children: [{
                name: '名词',
                children: [{
                    name: '干爹哨'
                }, {
                    name: '犯规'
                }]
            }]
        }]
    },
    {
        name:'中立',
        value: 8,
        itemStyle: {
            color: SunBurstColors[1]
        },
        children: [{
            name: '中立',
            value:8,
            children: [{
                name: '名词',
                children: [{
                    name: '勇士'
                }, {
                    name: '体能'
                },{
                    name: '詹姆斯'
                },{
                    name: '差距'
                }]
            },{
                name: '形容词',
                children: [{
                    name: '太松'
                }, {
                    name: '厉害'
                }]
            },{
                name: '动词',
                children: [{
                    name: '担忧'
                }, {
                    name: '爆发'
                }]
            }]
        }]
    }]
var AuReviewG2_2=[
    {
        name: '骑士',
        value: 35,
        itemStyle: {
            color: SunBurstColors[4]
        },
        children: [{
            name: '夸骑士',
            value: 3,
            children: [{
                name: '名词',
                children: [{
                    name: '希望'
                }, {
                    name: '詹姆斯'
                },{
                    name:'团队'
                }]
            }/*,{
            name:'形容词',
            children:[{
                name:'辉煌'
            },{
                name:'认真'
            }]
        },{
            name:'动词',
            children:[{
                name:'爱你'
            },{
                name:'支持'
            },{
                name:'相信'
            }]
        }*/]
        }, {
            name: '骂骑士',
            value: 32,
            children: [{
                name: '名词',
                children: [{
                    name: '欧文'
                },{
                    name: '乐福'
                },{
                    name: '骑士'
                },{
                    name: '篮板'
                },{
                    name: '血性'
                },{
                    name: '纪录'
                },{
                    name: '差距'
                },{
                    name: '热火'
                },{
                    name: '单核'
                },{
                    name: '亚军'
                },{
                    name: '鸡肋'
                },{
                    name: '詹姆斯'
                },{
                    name: 'JR'
                },{
                    name:'垃圾'
                },{
                    name:'国足'
                },{
                    name:'九分'
                },{
                    name:'大腿'
                }]
            },{
                name: '形容词',
                children: [{
                    name: '强硬'
                },{
                    name: '累'
                },{
                    name:'菜'
                },{
                    name: '可怕'
                },{
                    name: '软'
                },{
                    name:'low'
                }]
            },{
                name: '动词',
                children: [{
                    name: '振作'
                },{
                    name: '梦游'
                },{
                    name: '打爆'
                },{
                    name:'回家'
                },{
                    name: '被虐'
                },{
                    name: '输了'
                },{
                    name:'逗我'
                },{
                    name:'解体'
                },{
                    name:'冒充'
                }]
            }]
        }]
    },
    {
        name: '勇士',
        value: 10,
        itemStyle: {
            color: SunBurstColors[3]
        },
        children: [{
            name: '夸勇士',
            value :8,
            children: [{
                name: '名词',
                children: [{
                    name: '钢板'
                },{
                    name:'勇士'
                },{
                    name:'整体'
                }]
            },{
                name:'形容词',
                children:[{
                    name:'必胜'
                },{
                    name:'真强'
                }]
            },{
                name:'动词',
                children:[{
                    name:'打爆'
                },{
                    name:'横扫'
                },{
                    name:'击溃'
                }]
            }]
        },{
            name: '骂勇士',
            value :2,
            children: [{
                name: '名词',
                children: [{
                    name: '金肘勇士'
                },{
                    name:'3分钟'
                }]
            }/*,{
            name:'形容词',
            children:[{
                name:'真诚'
            },{
                name:'随意'
            }]
        },{
            name: '动词',
            children: [{
                name: '梦游'
            },{
                name:'失误'
            },{
                name:'浪'
            },{
                name:'落后'
            }]
        }*/]
        }]
    },
    {
        name:'裁判',
        value: 2,
        itemStyle: {
            color: SunBurstColors[2]
        },
        children: [/*{
        name: '夸裁判',
        value: 1,
       children: [{
            name: '名词',
            children: [{
                name: '主场哨'
            }]
        }]
    },*/{
            name: '骂裁判',
            value: 2,
            children: [{
                name: '名词',
                children: [{
                    name: '肘子'
                }, {
                    name: '犯规'
                }]
            }]
        }]
    },
    {
        name:'中立',
        value: 18,
        itemStyle: {
            color: SunBurstColors[1]
        },
        children: [{
            name: '中立',
            value:18,
            children: [{
                name: '名词',
                children: [{
                    name: '雷霆'
                }, {
                    name: '马刺'
                },{
                    name: '詹姆斯'
                },{
                    name: '欧文'
                },{
                    name: '错误'
                }, {
                    name: '单核'
                },{
                    name: '水花三巨头'
                },{
                    name: '替补'
                },{
                    name: '总决赛'
                }, {
                    name: '常规赛'
                },{
                    name: '球迷'
                },{
                    name: '欧文'
                },{
                    name:'实话'
                }]
            },{
                name: '形容词',
                children: [{
                    name: '无聊'
                }, {
                    name: '太水'
                }]
            },{
                name: '动词',
                children: [{
                    name: '心疼'
                }, {
                    name: '虐打'
                },{
                    name:'遏制'
                }]
            }]
        }]
    }]
var AuReviewG2_3=[
    {
        name: '骑士',
        value: 39,
        itemStyle: {
            color: SunBurstColors[4]
        },
        children: [{
            name: '夸骑士',
            value: 1,
            children: [{
                name: '动词',
                children: [{
                    name: '加油'
                }]
            }/*,{
            name:'形容词',
            children:[{
                name:'辉煌'
            },{
                name:'认真'
            }]
        },{
            name:'动词',
            children:[{
                name:'爱你'
            },{
                name:'支持'
            },{
                name:'相信'
            }]
        }*/]
        }, {
            name: '骂骑士',
            value: 38,
            children: [{
                name: '名词',
                children: [{
                    name: '欧文'
                },{
                    name: '乐福'
                },{
                    name: '骑士'
                },{
                    name: '篮板'
                },{
                    name: '药丸'
                },{
                    name: '首发'
                },{
                    name: '差距'
                },{
                    name: '硬仗'
                },{
                    name: '单核'
                },{
                    name: '亚军'
                },{
                    name: '鸡肋'
                },{
                    name: '詹姆斯'
                },{
                    name: 'JR'
                },{
                    name:'垃圾'
                },{
                    name:'国足'
                },{
                    name:'九分'
                },{
                    name:'大腿'
                },{
                    name:'毒药'
                },{
                    name:'去年'
                }]
            },{
                name: '形容词',
                children: [{
                    name: '强硬'
                },{
                    name: '累'
                },{
                    name:'菜'
                },{
                    name: '可怕'
                },{
                    name: '软'
                },{
                    name:'low'
                },{
                    name:'伪强'
                },{
                    name:'太坑'
                }]
            },{
                name: '动词',
                children: [{
                    name: '振作'
                },{
                    name: '梦游'
                },{
                    name: '打爆'
                },{
                    name:'回家'
                },{
                    name: '被虐'
                },{
                    name: '抠脚'
                },{
                    name:'逗我'
                },{
                    name:'解体'
                },{
                    name:'冒充'
                },{
                    name:'放弃'
                },{
                    name:'发泄'
                }]
            }]
        }]
    },
    {
        name: '勇士',
        value: 4,
        itemStyle: {
            color: SunBurstColors[3]
        },
        children: [{
            name: '夸勇士',
            value :3,
            children: [{
                name: '名词',
                children: [{
                    name: '悬念'
                },{
                    name:'勇士'
                },{
                    name:'冠军'
                }]
            }]
        },{
            name: '骂勇士',
            value :1,
            children: [{
                name: '名词',
                children: [{
                    name: '库里'
                }]
            }/*,{
            name:'形容词',
            children:[{
                name:'真诚'
            },{
                name:'随意'
            }]
        },{
            name: '动词',
            children: [{
                name: '梦游'
            },{
                name:'失误'
            },{
                name:'浪'
            },{
                name:'落后'
            }]
        }*/]
        }]
    },
    {
        name:'中立',
        value: 14,
        itemStyle: {
            color: SunBurstColors[1]
        },
        children: [{
            name: '中立',
            value:14,
            children: [{
                name: '名词',
                children: [{
                    name: '雷霆'
                }, {
                    name: '詹姆斯'
                },{
                    name: '欧文'
                },{
                    name: '错误'
                }, {
                    name: '单核'
                },{
                    name: '水花三巨头'
                },{
                    name: 'mvp'
                },{
                    name: '总决赛'
                }, {
                    name: '常规赛'
                }]
            },{
                name: '形容词',
                children: [{
                    name: '无聊'
                }, {
                    name: '难看'
                }]
            },{
                name: '动词',
                children: [{
                    name: '心疼'
                }, {
                    name: '虐淘汰'
                },{
                    name:'默哀'
                }]
            }]
        }]
    }
]
var AuReviewG2_4=[
    {
        name: '骑士',
        value: 19,
        itemStyle: {
            color: SunBurstColors[4]
        },
        children: [{
            name: '夸骑士',
            value: 3,
            children: [{
                name: '名词',

                children: [{
                    name: '骑士'
                }, {
                    name: '詹姆斯'
                },{
                    name:'家乡'
                }]
            }]
        }, {
            name: '骂骑士',
            value: 16,
            children: [{
                name: '名词',
                children: [{
                    name: '雷霆'
                },{
                    name: '队友'
                },{
                    name: '笑话'
                },{
                    name: '水货'
                },{
                    name:'詹姆斯'
                },{
                    name:'乐福'
                },{
                    name:'欧文'
                }]
            },{
                name: '形容词',
                children: [{
                    name: '真弱'
                },{
                    name: '太软'
                },{
                    name: '可怕'
                },{
                    name: '可惜'
                },{
                    name: '很差'
                }]
            },{
                name: '动词',
                children: [{
                    name: '吊打'
                },{
                    name: '防守'
                },{
                    name: '回家'
                },{
                    name: '掩护'
                }]
            }]
        }]
    },
    {
        name: '勇士',
        value: 4,
        itemStyle: {
            color: SunBurstColors[3]
        },
        children: [{
            name: '夸勇士',
            value: 4,
            children: [{
                name: '名词',
                children: [{
                    name: '对手'
                },{
                    name:'勇士'
                },{
                    name:'总冠军'
                },{
                    name:'2-0'
                }]
            }]
        }]
    },
    {
        name:'中立',
        value: 19,
        itemStyle: {
            color: SunBurstColors[1]
        },
        children: [{
            name: '中立',
            value:19,
            children: [{
                name: '名词',
                children: [{
                    name: '雷霆'
                }, {
                    name: '差距'
                },{
                    name: '勇士'
                }, {
                    name: '西部'
                },{
                    name: '友谊赛'
                }, {
                    name: '总决赛'
                },{
                    name:'状态'
                },{
                    name:'亚军'
                },{
                    name:'悬念'
                }]
            },{
                name: '形容词',
                children: [{
                    name: '顺风顺水'
                }, {
                    name: '漫不经心'
                }]
            },{
                name: '动词',
                children: [{
                    name: '想念'
                }, {
                    name: '看球'
                },{
                    name: '打球'
                },{
                    name: '碾压'
                }, {
                    name: '横扫'
                },{
                    name: '坑死'
                },{
                    name:'怀念'
                },{
                    name:'侮辱'
                }]
            }]
        }]
    }
]
var AuReviewG3_1=[
    {
        name: '骑士',
        value: 17,
        itemStyle: {
            color: SunBurstColors[4]
        },
        children: [{
            name: '夸骑士',
            value: 15,
            children: [{
                name: '名词',

                children: [{
                    name: '骑士'
                }, {
                    name: '詹姆斯'
                },{
                    name:'欧文'
                },{
                    name:'主场'
                }]
            },{
                name: '形容词',

                children: [{
                    name: '勇猛'
                }, {
                    name: '牛逼'
                },{
                    name:'疯了'
                },{
                    name:'厉害'
                }]
            },{
                name: '动词',

                children: [{
                    name: '翻盘'
                }, {
                    name: '跳起来'
                },{
                    name:'爆炸'
                },{
                    name:'回来'
                },{
                    name:'赢球'
                },{
                    name:'发飙'
                },{
                    name:'加油'
                }]
            }]
        }, {
            name: '骂骑士',
            value: 2,
            children: [{
                name: '名词',
                children: [{
                    name: '垃圾'
                },{
                    name: '骑士'
                }]
            }]
        }]
    },
    {
        name: '勇士',
        value: 10,
        itemStyle: {
            color: SunBurstColors[3]
        },
        children: [{
            name: '夸勇士',
            value: 4,
            children: [{
                name: '名词',
                children: [{
                    name: '错觉'
                },{
                    name:'勇士'
                },{
                    name:'2-0'
                }]
            },{
                name:'动词',
                children:[{
                    name:'追分'
                }]
            }]
        },{
            name: '骂勇士',
            value: 6,
            children: [{
                name: '名词',
                children: [{
                    name: '水花'
                },{
                    name:'勇士'
                },{
                    name:'总冠军'
                },{
                    name:'库里'
                }]
            },{
                name: '形容词',
                children: [{
                    name: '差劲'
                },{
                    name:'失常'
                }]
            }]
        }]
    },
    {
        name:'裁判',
        value: 7,
        itemStyle: {
            color: SunBurstColors[2]
        },
        children: [{
            name: '骂裁判',

            children: [{
                name: '名词',
                children: [{
                    name: '干爹哨子'
                }, {
                    name: '犯规'
                },{
                    name:'判罚'
                },{
                    name:'勇士'
                }]
            },{
                name:'形容词',
                children:[{
                    name:'脏'
                },{
                    name:'偏'
                },{
                    name:'差'
                }]
            }]
        }]
    },
    {
        name:'中立',
        value: 5,
        itemStyle: {
            color: SunBurstColors[1]
        },
        children: [{
            name: '中立',
            value:5,
            children: [{
                name: '名词',
                children: [{
                    name: '骑士'
                }, {
                    name: '乐福'
                },{
                    name: '局势'
                }, {
                    name: '输赢'
                },{
                    name: '库里'
                }]
            }]
        }]
    }
]
var AuReviewG3_2=[
    {
        name: '骑士',
        value: 14,
        itemStyle: {
            color: SunBurstColors[4]
        },
        children: [{
            name: '夸骑士',
            value: 7,
            children: [{
                name: '名词',

                children: [{
                    name: '骑士'
                }, {
                    name: '詹姆斯'
                },{
                    name:'欧文'
                },{
                    name:'JR'
                }]
            },{
                name: '形容词',

                children: [{
                    name: '漂亮'
                }, {
                    name: '牛逼'
                },{
                    name:'很帅'
                }]
            }]
        }, {
            name: '骂骑士',
            value: 7,
            children: [{
                name: '名词',
                children: [{
                    name: '詹姆斯'
                },{
                    name: '库里'
                },{
                    name:'突破'
                },{
                    name:'投篮'
                },{
                    name:'命中率'
                }]
            },{
                name:'形容词',
                children:[{
                    name:'太次'
                },{
                    name:'差'
                }]
            }]
        }]
    },
    {
        name: '勇士',
        value: 16,
        itemStyle: {
            color: SunBurstColors[3]
        },
        children: [{
            name: '夸勇士',
            value: 4,
            children: [{
                name: '名词',
                children: [{
                    name: '致命一击'
                },{
                    name:'勇士'
                },{
                    name:'胜利'
                }]
            },{
                name:'动词',
                children:[{
                    name:'绝杀'
                }]
            }]
        },{
            name: '骂勇士',
            value: 12,
            children: [{
                name: '名词',
                children: [{
                    name: '水花'
                },{
                    name:'勇士'
                },{
                    name:'mvp'
                },{
                    name:'库里'
                },{
                    name: '核心'
                },{
                    name:'毒瘤'
                },{
                    name:'状态'
                },{
                    name:'2分'
                }]
            },{
                name: '形容词',
                children: [{
                    name: '差劲'
                },{
                    name:'失常'
                }]
            },{
                name:'动词',
                children:[{
                    name:'严防'
                },{
                    name:'失误'
                }]
            }]
        }]
    },
    {
        name:'裁判',
        value: 4,
        itemStyle: {
            color: SunBurstColors[2]
        },
        children: [{
            name: '骂裁判',

            children: [{
                name: '名词',
                children: [{
                    name: '主场哨'
                }, {
                    name: '犯规'
                },{
                    name:'判罚'
                },{
                    name:'勇士'
                }]
            }]
        }]
    },
    {
        name:'中立',
        value: 6,
        itemStyle: {
            color: SunBurstColors[1]
        },
        children: [{
            name: '中立',
            value:6,
            children: [{
                name: '名词',
                children: [{
                    name: '笑话'
                }, {
                    name: '球星'
                },{
                    name: '双方'
                }]
            },{
                name:'形容词',
                children:[{
                    name:'难看'
                },{
                    name:'超烂'
                },{
                    name:'低迷'
                }]
            }]
        }]
    }
]
var AuReviewG3_3=[
    {
        name: '骑士',
        value: 11,
        itemStyle: {
            color: SunBurstColors[4]
        },
        children: [{
            name: '夸骑士',

            children: [{
                name: '名词',

                children: [{
                    name: '职业生涯'
                }, {
                    name: '詹姆斯'
                },{
                    name:'扣篮'
                },{
                    name:'JR'
                },{
                    name:'欧文'
                },{
                    name:'第一'
                }]
            },{
                name: '形容词',

                children: [ {
                    name: '牛逼'
                },{
                    name:'帅哭'
                }]
            },{
                name: '动词',

                children: [{
                    name: '尊重'
                }, {
                    name: '扑腾'
                },{
                    name:'横扫'
                }]
            }]
        }]
    },
    {
        name: '勇士',
        value: 14,
        itemStyle: {
            color: SunBurstColors[3]
        },
        children: [{
            name: '夸勇士',
            value: 3,
            children: [{
                name: '名词',
                children: [{
                    name: '手感'
                },{
                    name:'勇士'
                },{
                    name:'单核'
                }]
            }]
        },{
            name: '骂勇士',
            value: 11,
            children: [{
                name: '名词',
                children: [{
                    name: '乐福'
                },{
                    name:'勇士'
                },{
                    name:'格林'
                },{
                    name:'态度'
                },{
                    name: '库里'
                },{
                    name:'状态'
                }]
            },{
                name: '形容词',
                children: [{
                    name: '差劲'
                },{
                    name:'失常'
                },{
                    name:'666'
                }]
            },{
                name:'动词',
                children:[{
                    name:'依赖'
                },{
                    name:'梦游'
                }]
            }]
        }]
    },
    {
        name:'中立',
        value: 11,
        itemStyle: {
            color: SunBurstColors[1]
        },
        children: [{
            name: '中立',
            value:11,
            children: [{
                name: '名词',
                children: [{
                    name: '笑话'
                }, {
                    name: '球星'
                },{
                    name: '乐福'
                },{
                    name: '总决赛'
                }, {
                    name: '联盟'
                },{
                    name: '双方'
                },{
                    name:'手感'

                }]
            },{
                name:'形容词',
                children:[{
                    name:'索然无味'
                },{
                    name:'超烂'
                },{
                    name:'低迷'
                },{
                    name:'滑'
                }]
            }]
        }]
    }
]
var AuReviewG3_4=[
    {
        name: '骑士',
        value: 18,
        itemStyle: {
            color: SunBurstColors[4]
        },
        children: [{
            name: '夸骑士',

            children: [{
                name: '名词',

                children: [{
                    name: '顺风球'
                }, {
                    name: '詹姆斯'
                },{
                    name:'扣篮'
                },{
                    name:'JR'
                },{
                    name:'欧文'
                },{
                    name:'第一'
                },{
                    name:'总冠军'
                }]
            },{
                name: '形容词',

                children: [ {
                    name: '牛逼'
                },{
                    name:'帅哭'
                },{
                    name:'太赞'
                },{
                    name:'恐怖'
                },{
                    name:'认真'
                }]
            },{
                name: '动词',

                children: [{
                    name: '尊重'
                }, {
                    name: '扑腾'
                },{
                    name:'横扫'
                },{
                    name:'稳扎稳打'
                },{
                    name:'爆扣'
                },{
                    name:'进攻'
                }]
            }]
        }]
    },
    {
        name: '勇士',
        value: 16,
        itemStyle: {
            color: SunBurstColors[3]
        },
        children: [{
            name: '夸勇士',
            value: 7,
            children: [{
                name: '名词',
                children: [{
                    name: '手感'
                },{
                    name:'勇士'
                },{
                    name:'汤普森'
                },{
                    name:'客场'
                }]
            },{
                name:'动词',
                children:[{
                    name:'加油'
                },{
                    name:'支持'
                },{
                    name:'夺冠'
                }]
            }]
        },{
            name: '骂勇士',
            value: 9,
            children: [{
                name: '名词',
                children: [{
                    name: '乐福'
                },{
                    name:'勇士'
                },{
                    name:'格林'
                },{
                    name:'水花兄弟'
                },{
                    name: '库里'
                }]
            },{
                name: '形容词',
                children: [{
                    name: '差劲'
                },{
                    name:'失望'
                }]
            },{
                name:'动词',
                children:[{
                    name:'依赖'
                },{
                    name:'反超'
                }]
            }]
        }]
    },
    {
        name:'中立',
        value: 16,
        itemStyle: {
            color: SunBurstColors[1]
        },
        children: [{
            name: '中立',
            value:16,
            children: [{
                name: '名词',
                children: [{
                    name: '机会'
                }, {
                    name: '巨星'
                },{
                    name: '乐福'
                },{
                    name: '总决赛'
                }, {
                    name: '联盟'
                }]
            },{
                name:'形容词',
                children:[{
                    name:'索然无味'
                },{
                    name:'超烂'
                },{
                    name:'低迷'
                },{
                    name:'无聊'
                },{
                    name:'没意思'
                },{
                    name:'放水'
                },{
                    name:'安排'
                },{
                    name:'依赖'
                },{
                    name:'防守'
                },{
                    name:'夺冠'
                },{
                    name:'退役'
                }]
            }]
        }]
    }
]
var AuReviewG4_1=[
    {
        name: '骑士',
        value:6,
        itemStyle: {
            color: SunBurstColors[4]
        },
        children: [{
            name: '夸骑士',
            value:4,
            children: [{
                name: '名词',
                children: [{
                    name: '顺风球'
                }, {
                    name: '詹姆斯'
                }]
            },{
                name: '形容词',
                children: [ {
                    name: '流畅'
                },{
                    name:'帅哭'
                }]
            }]
        },{
            name:'骂骑士',
            value:2,
            children:[{
                name:'名词',
                children:[{
                    name:'脑震荡'
                },{
                    name:'库里'
                }]
            }]
        }]
    },
    {
        name: '勇士',
        value: 13,
        itemStyle: {
            color: SunBurstColors[3]
        },
        children: [{
            name: '夸勇士',
            value: 13,
            children: [{
                name: '名词',
                children: [{
                    name: '水花兄弟'
                },{
                    name:'勇士'
                },{
                    name:'篮板'
                },{
                    name:'客场'
                },{
                    name:'比分'
                },{
                    name:'汤普森'
                }]
            },{
                name:'形容词',
                children:[{
                    name:'认真'
                },{
                    name:'焦灼'
                }]
            },{
                name:'动词',
                children:[{
                    name:'加油'
                },{
                    name:'控制'
                },{
                    name:'夺冠'
                },{
                    name:'跑位'
                },{
                    name:'犯规'
                }]
            }]
        }]
    },
    {
        name:'裁判',
        value:12,
        itemStyle: {
            color: SunBurstColors[2]
        },
        children:[{
            name:'骂裁判',
            value:12,
            children:[{
                name:'名词',
                children:[{
                    name:'亲爹哨'
                },{
                    name:'格林'
                },{
                    name:'勇士'
                },{
                    name:'主场哨'
                },{
                    name:'裁判'
                },{
                    name:'亲儿子'
                }]
            },{
                name:'形容词',
                children:[{
                    name:'太黑'
                },{
                    name:'太能吹'
                },{
                    name:'不公平'
                },{
                    name:'明显'
                }]
            },{
                name:'动词',
                children:[{
                    name:'打败'
                },{
                    name:'犯规'
                }]
            }]
        }]

    },
    {
        name:'中立',
        value: 12,
        itemStyle: {
            color: SunBurstColors[1]
        },
        children: [{
            name: '中立',
            value:12,
            children: [{
                name: '名词',
                children: [{
                    name: '机会'
                }, {
                    name: '巨星'
                },{
                    name: '乐福'
                },{
                    name: '总决赛'
                }, {
                    name: '联盟'
                }]
            },{
                name:'形容词',
                children:[{
                    name:'没意思'
                },{
                    name:'放水'
                },{
                    name:'安排'
                },{
                    name:'依赖'
                },{
                    name:'防守'
                },{
                    name:'夺冠'
                },{
                    name:'退役'
                }]
            }]
        }]
    }]
var AuReviewG4_2=[
    {
        name: '骑士',
        value:6,
        itemStyle: {
            color: SunBurstColors[4]
        },
        children: [{
            name: '夸骑士',
            value:6,
            children: [{
                name: '名词',
                children: [{
                    name: '欧文'
                }, {
                    name: '詹皇'
                },{
                    name:'气势'
                },{
                    name:'乐福'
                },{
                    name:'骑士'
                },{
                    name:'盖帽'
                }]
            }]
        }]
    },
    {
        name: '勇士',
        value: 8,
        itemStyle: {
            color: SunBurstColors[3]
        },
        children: [{
            name: '夸勇士',
            value: 6,
            children: [{
                name: '名词',
                children: [{
                    name: '水花兄弟'
                },{
                    name:'勇士'
                },{
                    name:'篮板'
                }]
            },{
                name:'动词',
                children:[{
                    name:'加油'
                },{
                    name:'胜利'
                },{
                    name:'开挂'
                }]
            }]
        },{
            name:'骂勇士',
            value:2,
            children:[{
                name:'名词',
                children:[{
                    name:'空气'
                },{
                    name:'防守'
                }]
            }]
        }]
    },
    {
        name:'裁判',
        value:35,
        itemStyle: {
            color: SunBurstColors[2]
        },
        children:[{
            name:'骂裁判',
            value:35,
            children:[{
                name:'名词',
                children:[{
                    name:'亲爹哨'
                },{
                    name:'格林'
                },{
                    name:'勇士'
                },{
                    name:'主场哨'
                },{
                    name:'裁判'
                },{
                    name:'亲儿子'
                },{
                    name:'主场优势'
                },{
                    name:'垃圾'
                },{
                    name:'智障'
                },{
                    name:'黑哨'
                },{
                    name:'骑士'
                },{
                    name:'联盟'
                },{
                    name:'冠军'
                },{
                    name:'2-4'
                },{
                    name:'三分'
                },{
                    name:'球迷'
                },{
                    name:'实话'
                },{
                    name:'干儿子'
                },{
                    name:'客场'
                },{
                    name:'詹姆斯'
                }]
            },{
                name:'形容词',
                children:[{
                    name:'太黑'
                },{
                    name:'太能吹'
                },{
                    name:'不公平'
                },{
                    name:'明显'
                },{
                    name:'太水'
                },{
                    name:'牛逼'
                },{
                    name:'太偏'
                },{
                    name:'热闹'
                }]
            },{
                name:'动词',
                children:[{
                    name:'打败'
                },{
                    name:'犯规'
                },{
                    name:'要命'
                },{
                    name:'吹死'
                },{
                    name:'保送'
                },{
                    name:'被黑'
                },{
                    name:'领先'
                }]
            }]
        }]

    },
    {
        name:'中立',
        value: 10,
        itemStyle: {
            color: SunBurstColors[1]
        },
        children: [{
            name: '中立',
            value:10,
            children: [{
                name: '名词',
                children: [{
                    name: '总决赛'
                }, {
                    name: '双方'
                },{
                    name:'高潮'
                }]
            },{
                name:'动词',
                children:[{
                    name:'放水'
                },{
                    name:'安排'
                },{
                    name:'依赖'
                },{
                    name:'防守'
                },{
                    name:'夺冠'
                },{
                    name:'退役'
                },{
                    name:'漏判'
                }]
            }]
        }]
    }]
var AuReviewG4_3=[
    {
        name: '骑士',
        value:21,
        itemStyle: {
            color: SunBurstColors[4]
        },
        children: [{
            name: '夸骑士',
            value:5,
            children: [{
                name: '名词',
                children: [{
                    name: '欧文'
                }, {
                    name: '詹皇'
                },{
                    name:'主场神'
                },{
                    name:'冠军'
                },{
                    name:'骑士'
                }]
            }]
        },{
            name: '骂骑士',
            value:16,
            children: [{
                name: '名词',
                children: [{
                    name: '欧文'
                }, {
                    name: '詹姆斯'
                },{
                    name:'黑洞'
                },{
                    name:'乐福'
                },{
                    name:'防守'
                },{
                    name:'赛季'
                },{
                    name:'脑残'
                },{
                    name:'总决赛'
                },{
                    name:'溃败'
                }]
            },{
                name:'形容词',
                children:[{
                    name:'失望'
                },{
                    name:'硬气'
                },{
                    name:'强硬'
                },{
                    name:'真废'
                }]
            },{
                name:'动词',
                children:[{
                    name:'犯规'
                },{
                    name:'罚球'
                },{
                    name:'要挂'
                }]
            }]
        }]
    },
    {
        name: '勇士',
        value: 4,
        itemStyle: {
            color: SunBurstColors[3]
        },
        children: [{
            name: '夸勇士',
            value: 2,
            children: [{
                name:'动词',
                children:[{
                    name:'加油'
                },{
                    name:'胜利'
                }]
            }]
        },{
            name:'骂勇士',
            value:2,
            children:[{
                name:'名词',
                children:[{
                    name:'软蛋'
                },{
                    name:'勇士'
                }]
            }]
        }]
    },
    {
        name:'裁判',
        value:10,
        itemStyle: {
            color: SunBurstColors[2]
        },
        children:[{
            name:'骂裁判',
            value:10,
            children:[{
                name:'名词',
                children:[{
                    name:'亲爹哨'
                },{
                    name:'格林'
                },{
                    name:'勇士'
                },{
                    name:'主场哨'
                }]
            },{
                name:'形容词',
                children:[{
                    name:'太黑'
                },{
                    name:'太能吹'
                },{
                    name:'不公平'
                }]
            },{
                name:'动词',
                children:[{
                    name:'犯规'
                },{
                    name:'被黑'
                },{
                    name:'领先'
                }]
            }]
        }]

    },
    {
        name:'中立',
        value: 6,
        itemStyle: {
            color: SunBurstColors[1]
        },
        children: [{
            name: '中立',
            value:6,
            children: [{
                name: '名词',
                children: [{
                    name: '总决赛'
                }, {
                    name: '双方'
                },{
                    name:'影帝'
                }]
            },{
                name:'动词',
                children:[{
                    name:'对飚'
                },{
                    name:'反超'
                },{
                    name:'依赖'
                }]
            }]
        }]
    }]
var AuReviewG4_4=[
    {
        name: '骑士',
        value:31,
        itemStyle: {
            color: SunBurstColors[4]
        },
        children: [{
            name: '夸骑士',
            value:7,
            children: [{
                name: '名词',
                children: [{
                    name: '欧文'
                }, {
                    name: '詹姆斯'
                },{
                    name:'巨星'
                }]
            },{
                name: '动词',
                children: [{
                    name: '心疼'
                }, {
                    name: '期待'
                },{
                    name:'投篮'
                },{
                    name:'翻盘'
                }]
            }]
        },{
            name: '骂骑士',
            value:24,
            children: [{
                name: '名词',
                children: [{
                    name: '欧文'
                }, {
                    name: '詹姆斯'
                },{
                    name:'黑洞'
                },{
                    name:'乐福'
                },{
                    name:'防守'
                },{
                    name:'赛季'
                },{
                    name:'脑残'
                },{
                    name:'总决赛'
                },{
                    name:'溃败'
                },{
                    name:'总亚军'
                },{
                    name:'人品'
                },{
                    name:'勒布朗'
                }]
            },{
                name:'形容词',
                children:[{
                    name:'失望'
                },{
                    name:'硬气'
                },{
                    name:'强硬'
                },{
                    name:'真废'
                },{
                    name:'很脏'
                }]
            },{
                name:'动词',
                children:[{
                    name:'犯规'
                },{
                    name:'罚球'
                },{
                    name:'要挂'
                },{
                    name:'再见'
                },{
                    name:'急眼'
                },{
                    name:'传球'
                },{
                    name:'拉扯'
                }]
            }]
        }]
    },
    {
        name: '勇士',
        value: 7,
        itemStyle: {
            color: SunBurstColors[3]
        },
        children: [{
            name: '夸勇士',
            value: 7,
            children: [{
                name:'名词',
                children:[{
                    name:'总冠军'
                },{
                    name:'勇士'
                },{
                    name:'团队'
                },{
                    name:'战术'
                }]
            },{
                name:'动词',
                children:[{
                    name:'加油'
                },{
                    name:'胜利'
                },{
                    name:'感谢'
                }]
            }]
        }]
    },

    {
        name:'中立',
        value: 14,
        itemStyle: {
            color: SunBurstColors[1]
        },
        children: [{
            name: '中立',
            value:14,
            children: [{
                name: '名词',
                children: [{
                    name: '总决赛'
                }, {
                    name: '双方'
                },{
                    name:'影帝'
                },{
                    name: '詹姆斯'
                }, {
                    name: '偶像'
                },{
                    name:'欧文'
                },{
                    name: '库里'
                },{
                    name:'勇士'
                }]
            },{
                name:'动词',
                children:[{
                    name:'输'
                },{
                    name:'弥补'
                },{
                    name:'依赖'
                },{
                    name:'尽力'
                },{
                    name:'摔倒'
                },{
                    name:'拉倒'
                }]
            }]
        }]
    }]
var AuReviewG5_1=[
    {
        name: '骑士',
        value:17,
        itemStyle: {
            color: SunBurstColors[4]
        },
        children: [{
            name: '夸骑士',
            value:10,
            children: [{
                name: '名词',
                children: [{
                    name: '欧文'
                }, {
                    name: '詹姆斯'
                },{
                    name:'巨星'
                },{
                    name:'骑士'
                }]
            },{
                name: '动词',
                children: [{
                    name: '加油'
                }, {
                    name: '期待'
                },{
                    name:'点赞'
                },{
                    name:'翻盘'
                },{
                    name: '攻'
                }, {
                    name: '防守'
                }]
            }]
        },{
            name: '骂骑士',
            value:7,
            children: [{
                name: '名词',
                children: [{
                    name: '骑士'
                }, {
                    name: '水花兄弟'
                },{
                    name:'肘击王'
                }]
            },{
                name:'动词',
                children:[{
                    name:'刷数据'
                },{
                    name:'失误'
                },{
                    name:'崩盘'
                },{
                    name:'防守'
                }]
            }]
        }]
    },
    {
        name: '勇士',
        value: 9,
        itemStyle: {
            color: SunBurstColors[3]
        },
        children: [{
            name: '夸勇士',
            value: 7,
            children: [{
                name:'名词',
                children:[{
                    name:'总冠军'
                },{
                    name:'勇士'
                },{
                    name:'库里'
                },{
                    name:'克利夫兰'
                }]
            },{
                name:'动词',
                children:[{
                    name:'加油'
                },{
                    name:'胜利'
                },{
                    name:'感谢'
                }]
            }]

        },{
            name:'骂勇士',
            value:2,
            children:[{
                name:'动词',
                children:[{
                    name:'擦地板'
                },{
                    name:'碰瓷'
                }]
            }]
        }]
    },
    {
        name:'裁判',
        value:4,
        itemStyle: {
            color: SunBurstColors[2]
        },
        children:[{
            name:'骂裁判',
            value:4,
            children:[{
                name:'名词',
                children:[{
                    name:'判罚尺度'
                },{
                    name:'裁判'
                },{
                    name:'勇士'
                },{
                    name:'主场哨'
                }]
            }]
        }]

    },
    {
        name:'中立',
        value: 15,
        itemStyle: {
            color: SunBurstColors[1]
        },
        children: [{
            name: '中立',
            value:15,
            children: [{
                name: '名词',
                children: [{
                    name: '总决赛'
                }, {
                    name: '杀伤力'
                },{
                    name:'激战'
                },{
                    name: '詹姆斯'
                }, {
                    name: '嘘声'
                },{
                    name:'欧文'
                },{
                    name: '库里'
                },{
                    name:'观赏性'
                },{
                    name:'雷霆'
                }]
            },{
                name:'动词',
                children:[{
                    name:'摸球'
                },{
                    name:'换防'
                },{
                    name:'替补'
                },{
                    name:'传球'
                },{
                    name:'心疼'
                },{
                    name:'拼命'
                }]
            }]
        }]
    }]
var AuReviewG5_2=[
    {
        name: '骑士',
        value:24,
        itemStyle: {
            color: SunBurstColors[4]
        },
        children: [{
            name: '夸骑士',
            value:19,
            children: [{
                name: '名词',
                children: [{
                    name: '欧文'
                }, {
                    name: '詹姆斯'
                },{
                    name:'巨星'
                },{
                    name:'骑士'
                },{
                    name: '大腿'
                }, {
                    name: '汤普森'
                },{
                    name:'马刺'
                },{
                    name:'能量'
                }]
            },{
                name: '形容词',
                children: [{
                    name: '超赞'
                }, {
                    name: '精彩'
                },{
                    name:'太爽'
                },{
                    name:'翻盘'
                },{
                    name: '很棒'
                }]
            },{
                name: '动词',
                children: [{
                    name: '加油'
                }, {
                    name: '期待'
                },{
                    name:'点赞'
                },{
                    name:'翻盘'
                },{
                    name: '打脸'
                }, {
                    name: '防守'
                }]
            }]
        },{
            name: '骂骑士',
            value:5,
            children: [{
                name: '名词',
                children: [{
                    name: '乐福'
                }, {
                    name: '累赘'
                }]
            },{
                name:'动词',
                children:[{
                    name:'掉身价'
                },{
                    name:'单打'
                },{
                    name:'废了'
                }]
            }]
        }]
    },
    {
        name: '勇士',
        value: 7,
        itemStyle: {
            color: SunBurstColors[3]
        },
        children: [{
            name: '夸勇士',
            value: 5,
            children: [{
                name:'名词',
                children:[{
                    name:'赢面'
                },{
                    name:'勇士'
                },{
                    name:'库里'
                }]
            },{
                name:'动词',
                children:[{
                    name:'加油'
                },{
                    name:'结束'
                }]
            }]

        },{
            name:'骂勇士',
            value:2,
            children:[{
                name:'名词',
                children:[{
                    name:'瓦莱乔'
                },{
                    name:'笑话'
                }]
            }]
        }]
    },

    {
        name:'中立',
        value: 23,
        itemStyle: {
            color: SunBurstColors[1]
        },
        children: [{
            name: '中立',
            value:23,
            children: [{
                name: '名词',
                children: [{
                    name: '总决赛'
                }, {
                    name: '杀伤力'
                },{
                    name:'激战'
                },{
                    name: '詹姆斯'
                }, {
                    name: '嘘声'
                },{
                    name:'欧文'
                },{
                    name: '库里'
                },{
                    name:'观赏性'
                },{
                    name:'雷霆'
                },{
                    name:'高潮'
                },{
                    name:'三分'
                },{
                    name:'杀气'
                }]
            },{
                name:'形容词',
                children:[{
                    name:'好看'
                },{
                    name:'精彩'
                },{
                    name:'太累'
                },{
                    name:'厉害'
                }]
            },{
                name:'动词',
                children:[{
                    name:'摸球'
                },{
                    name:'换防'
                },{
                    name:'替补'
                },{
                    name:'传球'
                },{
                    name:'心疼'
                },{
                    name:'拼命'
                },{
                    name:'打败'
                }]
            }]
        }]
    }]
var AuReviewG5_3=[
    {
        name: '骑士',
        value:16,
        itemStyle: {
            color: SunBurstColors[4]
        },
        children: [{
            name: '夸骑士',
            value:13,
            children: [{
                name: '名词',
                children: [{
                    name: '欧文'
                }, {
                    name: '詹姆斯'
                },{
                    name:'高潮'
                },{
                    name:'神级表现'
                },{
                    name: '大腿'
                }]
            },{
                name: '形容词',
                children: [{
                    name: '最帅'
                }, {
                    name: '精彩'
                },{
                    name:'太爽'
                },{
                    name:'威武'
                },{
                    name: '很棒'
                }]
            },{
                name: '动词',
                children: [{
                    name: '加油'
                }, {
                    name: '路转粉'
                },{
                    name:'翻盘'
                }]
            }]
        },{
            name: '骂骑士',
            value:3,
            children: [{
                name: '名词',
                children: [{
                    name: '乐福'
                }]
            },{
                name:'动词',
                children:[{
                    name:'慎用'
                },{
                    name:'失误'
                }]
            }]
        }]
    },
    {
        name: '勇士',
        value: 10,
        itemStyle: {
            color: SunBurstColors[3]
        },
        children: [{
            name: '夸勇士',
            value: 4,
            children: [{
                name:'名词',
                children:[{
                    name:'冠军'
                },{
                    name:'勇士'
                }]
            },{
                name:'动词',
                children:[{
                    name:'加油'
                },{
                    name:'相信'
                }]
            }]

        },{
            name:'骂勇士',
            value:6,
            children:[{
                name:'名词',
                children:[{
                    name:'瓦莱乔'
                },{
                    name:'笑话'
                }]
            },{
                name:'动词',
                children:[{
                    name:'禁赛'
                },{
                    name:'依赖'
                },{
                    name:'受伤'
                },{
                    name:'心疼'
                }]
            }]
        }]
    },
    {
        name:'裁判',
        value:15,
        itemStyle: {
            color: SunBurstColors[2]
        },
        children:[{
            name:'骂裁判',
            value:15,
            children:[{
                name:'名词',
                children:[{
                    name:'亲爹哨'
                },{
                    name:'格林'
                },{
                    name:'勇士'
                },{
                    name:'主场哨'
                },{
                    name:'裁判'
                },{
                    name:'亲儿子'
                },{
                    name:'主场优势'
                },{
                    name:'垃圾'
                },{
                    name:'智障'
                },{
                    name:'黑哨'
                }]
            },{
                name:'形容词',
                children:[{
                    name:'太黑'
                },{
                    name:'不公平'
                },{
                    name:'明显'
                }]
            },{
                name:'动词',
                children:[{
                    name:'打败'
                },{
                    name:'犯规'
                }]
            }]
        }]

    },
    {
        name:'中立',
        value: 6,
        itemStyle: {
            color: SunBurstColors[1]
        },
        children: [{
            name: '中立',
            value:6,
            children: [{
                name: '名词',
                children: [{
                    name: '总决赛'
                }, {
                    name: '博古特'
                },{
                    name:'格林'
                },{
                    name:'球迷'
                }]
            },{
                name:'动词',
                children:[{
                    name:'散场'
                },{
                    name:'换防'
                }]
            }]
        }]
    }]
var AuReviewG5_4=[
    {
        name: '骑士',
        value:32,
        itemStyle: {
            color: SunBurstColors[4]
        },
        children: [{
            name: '夸骑士',
            value:32,
            children: [{
                name: '名词',
                children: [{
                    name: '欧文'
                }, {
                    name: '詹姆斯'
                },{
                    name:'高潮'
                },{
                    name:'神级表现'
                },{
                    name: '大腿'
                },{
                    name: '瓦莱乔'
                }, {
                    name: '三巨头'
                },{
                    name:'压力'
                },{
                    name:'冠军'
                },{
                    name: '观赏性'
                },{
                    name:'克利夫兰'
                },{
                    name:'全世界'
                }]
            },{
                name: '形容词',
                children: [{
                    name: '最帅'
                }, {
                    name: '精彩'
                },{
                    name:'太爽'
                },{
                    name:'威武'
                },{
                    name: '很棒'
                },{
                    name: '棒棒哒'
                }, {
                    name: '无敌'
                },{
                    name:'牛逼'
                },{
                    name:'很拼'
                },{
                    name: '努力'
                }]
            },{
                name: '动词',
                children: [{
                    name: '加油'
                }, {
                    name: '路转粉'
                },{
                    name:'翻盘'
                },{
                    name: '掉眼泪'
                }, {
                    name: '佩服'
                },{
                    name:'尊重'
                },{
                    name:'对抗'
                },{
                    name:'热泪盈眶'
                },{
                    name:'夺冠'
                },{
                    name:'合砍'
                }]
            }]
        }]
    },
    {
        name: '勇士',
        value: 16,
        itemStyle: {
            color: SunBurstColors[3]
        },
        children: [{
            name: '夸勇士',
            value: 5,
            children: [{
                name:'名词',
                children:[{
                    name:'冠军'
                },{
                    name:'勇士'
                }]
            },{
                name:'动词',
                children:[{
                    name:'加油'
                },{
                    name:'支持'
                },{
                    name:'爆发'
                }]
            }]

        },{
            name:'骂勇士',
            value:11,
            children:[{
                name:'名词',
                children:[{
                    name:'瓦莱乔'
                },{
                    name:'笑话'
                },{
                    name:'表演'
                }]
            },{
                name:'形容词',
                children:[{
                    name:'难看'
                },{
                    name:'太水'
                },{
                    name:'失望'
                }]
            },{
                name:'动词',
                children:[{
                    name:'吹嘘'
                },{
                    name:'投篮'
                },{
                    name:'趟'
                },{
                    name:'心疼'
                },{
                    name:'换下'
                }]
            }]
        }]
    },

    {
        name:'中立',
        value: 11,
        itemStyle: {
            color: SunBurstColors[1]
        },
        children: [{
            name: '中立',
            value:11,
            children: [{
                name: '名词',
                children: [{
                    name: '总决赛'
                }, {
                    name: '勇士'
                },{
                    name:'詹姆斯'
                },{
                    name:'球迷'
                },{
                    name:'第二名'
                }]
            },{
                name:'形容词',
                children:[{
                    name:'精彩'
                },{
                    name:'很棒'
                },{
                    name:'厉害'
                }]
            },{
                name:'动词',
                children:[{
                    name:'散场'
                },{
                    name:'换防'
                },{
                    name:'不吹不黑'
                }]
            }]
        }]
    }]
var AuReviewG6_1=[
    {
        name: '骑士',
        value:11,
        itemStyle: {
            color: SunBurstColors[4]
        },
        children: [{
            name: '夸骑士',
            value:11,
            children: [{
                name: '名词',
                children: [{
                    name: '欧文'
                }, {
                    name: '詹姆斯'
                },{
                    name:'球迷'
                },{
                    name: '冠军'
                }]
            },{
                name: '形容词',
                children: [{
                    name: '解气'
                }, {
                    name: '真稳'
                }]
            },{
                name: '动词',
                children: [{
                    name: '加油'
                }, {
                    name: '报仇'
                },{
                    name: '赢了'
                }, {
                    name: '大胜'
                },{
                    name:'发威'
                }]
            }]
        }]
    },
    {
        name: '勇士',
        value: 22,
        itemStyle: {
            color: SunBurstColors[3]
        },
        children: [{
            name: '夸勇士',
            value: 5,
            children: [{
                name:'名词',
                children:[{
                    name:'冠军'
                },{
                    name:'勇士'
                }]
            },{
                name:'动词',
                children:[{
                    name:'加油'
                },{
                    name:'支持'
                },{
                    name:'爆发'
                }]
            }]

        },{
            name:'骂勇士',
            value:17,
            children:[{
                name:'名词',
                children:[{
                    name:'勇士'
                },{
                    name:'笑话'
                },{
                    name:'表演'
                },{
                    name:'格林'
                },{
                    name:'巴恩斯'
                }]
            },{
                name:'形容词',
                children:[{
                    name:'难看'
                },{
                    name:'太水'
                },{
                    name:'失望'
                }]
            },{
                name:'动词',
                children:[{
                    name:'头疼'
                },{
                    name:'投篮'
                },{
                    name:'趟'
                },{
                    name:'心疼'
                },{
                    name:'换下'
                },{
                    name:'下班'
                },{
                    name:'死亡'
                },{
                    name:'落后'
                },{
                    name:'怪别人'
                }]
            }]
        }]
    },
    {
        name:'裁判',
        value:7,
        itemStyle: {
            color: SunBurstColors[2]
        },
        children:[{
            name:'骂裁判',
            value:7,
            children:[{
                name:'名词',
                children:[{
                    name:'亲爹哨'
                },{
                    name:'格林'
                },{
                    name:'勇士'
                },{
                    name:'主场哨'
                }]
            },{
                name:'动词',
                children:[{
                    name:'犯规'
                },{
                    name:'被黑'
                },{
                    name:'领先'
                }]
            }]
        }]

    },
    {
        name:'中立',
        value: 17,
        itemStyle: {
            color: SunBurstColors[1]
        },
        children: [{
            name: '中立',
            value:17,
            children: [{
                name: '名词',
                children: [{
                    name: '总决赛'
                }, {
                    name: '勇士'
                },{
                    name:'詹姆斯'
                },{
                    name:'球迷'
                },{
                    name:'抢七'
                },{
                    name: '内线'
                }, {
                    name: '联盟'
                },{
                    name:'骑士'
                },{
                    name:'总冠军'
                },{
                    name:'MVP'
                },{
                    name:'死亡五小'
                }]
            },{
                name:'形容词',
                children:[{
                    name:'精彩'
                },{
                    name:'很棒'
                },{
                    name:'厉害'
                }]
            },{
                name:'动词',
                children:[{
                    name:'散场'
                },{
                    name:'换防'
                },{
                    name:'不吹不黑'
                }]
            }]
        }]
    }]
var AuReviewG6_2=[
    {
        name: '骑士',
        value:20,
        itemStyle: {
            color: SunBurstColors[4]
        },
        children: [{
            name: '夸骑士',
            value:18,
            children: [{
                name: '名词',
                children: [{
                    name: '欧文'
                }, {
                    name: '詹姆斯'
                },{
                    name:'球迷'
                },{
                    name: '冠军'
                },{
                    name:'抢七'
                },{
                    name: '库里'
                }, {
                    name: 'MVP'
                },{
                    name:'联盟'
                },{
                    name: '荣誉'
                },{
                    name:'骑士'
                }]
            },{
                name: '形容词',
                children: [{
                    name: '太帅'
                }, {
                    name: '真稳'
                },{
                    name: '强硬'
                }, {
                    name: '最强'
                }]
            },{
                name: '动词',
                children: [{
                    name: '加油'
                }, {
                    name: '报仇'
                },{
                    name: '赢了'
                }, {
                    name: '大胜'
                }]
            }]
        },{
            name:'骂骑士',
            value:2,
            children:[{
                name:'形容词',
                children:[{
                    name:'肮脏'
                },{
                    name:'恶心'
                }]
            }]
        }]
    },
    {
        name: '勇士',
        value: 19,
        itemStyle: {
            color: SunBurstColors[3]
        },
        children: [{
            name: '夸勇士',
            value: 6,
            children: [{
                name:'名词',
                children:[{
                    name:'三分'
                },{
                    name:'勇士'
                },{
                    name:'冠军'
                }]
            },{
                name:'动词',
                children:[{
                    name:'加油'
                },{
                    name:'支持'
                },{
                    name:'努力'
                }]
            }]

        },{
            name:'骂勇士',
            value:13,
            children:[{
                name:'名词',
                children:[{
                    name:'勇士'
                },{
                    name:'笑话'
                },{
                    name:'死亡五小'
                },{
                    name:'汤普森'
                },{
                    name:'巴恩斯'
                }]
            },{
                name:'形容词',
                children:[{
                    name:'渣'
                },{
                    name:'懵'
                },{
                    name:'失望'
                }]
            },{
                name:'动词',
                children:[{
                    name:'头疼'
                },{
                    name:'投篮'
                },{
                    name:'倒'
                },{
                    name:'心疼'
                },{
                    name:'换下'
                }]
            }]
        }]
    },
    {
        name:'裁判',
        value:4,
        itemStyle: {
            color: SunBurstColors[2]
        },
        children:[{
            name:'骂裁判',
            value:4,
            children:[{
                name:'名词',
                children:[{
                    name:'亲爹哨'
                },{
                    name:'狗'
                },{
                    name:'勇士'
                },{
                    name:'儿子'
                }]
            }]
        }]

    },
    {
        name:'中立',
        value: 8,
        itemStyle: {
            color: SunBurstColors[1]
        },
        children: [{
            name: '中立',
            value:8,
            children: [{
                name: '名词',
                children: [{
                    name: '总决赛'
                }, {
                    name: '勇士'
                },{
                    name:'詹姆斯'
                },{
                    name:'抢七'
                },{
                    name:'骑士'
                },{
                    name:'死亡五小'
                }]
            },{
                name:'形容词',
                children:[{
                    name:'流畅'
                },{
                    name:'精彩'
                }]
            }]
        }]
    }]
var AuReviewG6_3=[
    {
        name: '骑士',
        value:11,
        itemStyle: {
            color: SunBurstColors[4]
        },
        children: [{
            name: '夸骑士',
            value:8,
            children: [{
                name: '名词',
                children: [{
                    name: '欧文'
                }, {
                    name: '詹姆斯'
                },{
                    name:'客场'
                },{
                    name: '总冠军'
                },{
                    name:'抢七'
                }]
            },{
                name: '动词',
                children: [{
                    name: '加油'
                }, {
                    name: '稳住'
                },{
                    name: '锁定'
                }]
            }]
        },{
            name:'骂骑士',
            value:3,
            children:[{
                name:'名词',
                children:[{
                    name:'乐福'
                },{
                    name:'三分'
                },{
                    name:'防守'
                }]
            }]
        }]
    },
    {
        name: '勇士',
        value: 29,
        itemStyle: {
            color: SunBurstColors[3]
        },
        children: [{
            name: '夸勇士',
            value: 27,
            children: [{
                name:'名词',
                children:[{
                    name:'比分'
                },{
                    name:'勇士'
                },{
                    name:'冠军'
                },{
                    name:'汤神'
                },{
                    name:'水花'
                },{
                    name:'大心脏'
                },{
                    name:'逆境'
                },{
                    name:'汤普森'
                },{
                    name:'第四节'
                },{
                    name:'FMVP'
                },{
                    name:'骑士'
                },{
                    name:'能力'
                }]
            },{
                name:'形容词',
                children:[{
                    name:'厉害'
                },{
                    name:'牛逼'
                },{
                    name:'最稳'
                },{
                    name:'太强'
                },{
                    name:'爽'
                },{
                    name:'嚣张'
                },{
                    name:'真横'
                }]
            },{
                name:'动词',
                children:[{
                    name:'加油'
                },{
                    name:'支持'
                },{
                    name:'努力'
                },{
                    name:'降临'
                },{
                    name:'追分'
                },{
                    name:'力挽狂澜'
                },{
                    name:'着急'
                },{
                    name:'回来'
                }]
            }]

        },{
            name:'骂勇士',
            value:2,
            children:[{
                name:'名词',
                children:[{
                    name:'笑话'
                },{
                    name:'死亡五小'
                }]
            }]
        }]
    },
    {
        name:'裁判',
        value:2,
        itemStyle: {
            color: SunBurstColors[2]
        },
        children:[{
            name:'骂裁判',
            value:2,
            children:[{
                name:'名词',
                children:[{
                    name:'亲爹哨'
                },{
                    name:'裁判'
                }]
            }]
        }]

    },
    {
        name:'中立',
        value: 12,
        itemStyle: {
            color: SunBurstColors[1]
        },
        children: [{
            name: '中立',
            value:12,
            children: [{
                name: '名词',
                children: [{
                    name: '总决赛'
                }, {
                    name: '勇士'
                },{
                    name:'詹姆斯'
                },{
                    name:'抢七'
                },{
                    name:'骑士'
                },{
                    name:'死亡五小'
                },{
                    name:'汤普森'
                },{
                    name:'逆境'
                },{
                    name:'悬念'
                }]
            },{
                name:'形容词',
                children:[{
                    name:'流畅'
                },{
                    name:'精彩'
                },{
                    name:'牛逼'
                }]
            }]
        }]
    }]
var AuReviewG6_4=[
    {
        name: '骑士',
        value:32,
        itemStyle: {
            color: SunBurstColors[4]
        },
        children: [{
            name: '夸骑士',
            value:32,
            children: [{
                name: '名词',
                children: [{
                    name: '欧文'
                }, {
                    name: '詹姆斯'
                },{
                    name:'高潮'
                },{
                    name:'神级表现'
                },{
                    name: '大腿'
                },{
                    name: '瓦莱乔'
                }, {
                    name: '三巨头'
                },{
                    name:'压力'
                },{
                    name:'冠军'
                },{
                    name: '观赏性'
                },{
                    name:'克利夫兰'
                },{
                    name:'全世界'
                }]
            },{
                name: '形容词',
                children: [{
                    name: '最帅'
                }, {
                    name: '精彩'
                },{
                    name:'太爽'
                },{
                    name:'威武'
                },{
                    name: '很棒'
                },{
                    name: '棒棒哒'
                }, {
                    name: '无敌'
                },{
                    name:'牛逼'
                },{
                    name:'很拼'
                },{
                    name: '努力'
                }]
            },{
                name: '动词',
                children: [{
                    name: '加油'
                }, {
                    name: '路转粉'
                },{
                    name:'翻盘'
                },{
                    name: '掉眼泪'
                }, {
                    name: '佩服'
                },{
                    name:'尊重'
                },{
                    name:'对抗'
                },{
                    name:'热泪盈眶'
                },{
                    name:'夺冠'
                },{
                    name:'合砍'
                }]
            }]
        }]
    },
    {
        name: '勇士',
        value: 12,
        itemStyle: {
            color: SunBurstColors[3]
        },
        children: [{
            name: '夸勇士',
            value: 8,
            children: [{
                name:'名词',
                children:[{
                    name:'比分'
                },{
                    name:'勇士'
                },{
                    name:'水花'
                },{
                    name:'骑士'
                }]
            },{
                name:'动词',
                children:[{
                    name:'加油'
                },{
                    name:'支持'
                },{
                    name:'努力'
                },{
                    name:'追分'
                }]
            }]

        },{
            name:'骂勇士',
            value:4,
            children:[{
                name:'名词',
                children:[{
                    name:'笑话'
                },{
                    name:'死亡五小'
                },{
                    name:'抢断'
                },{
                    name:'自信心'
                }]
            }]
        }]
    },
    {
        name:'中立',
        value: 9,
        itemStyle: {
            color: SunBurstColors[1]
        },
        children: [{
            name: '中立',
            value:9,
            children: [{
                name: '名词',
                children: [{
                    name: '总决赛'
                }, {
                    name: '勇士'
                },{
                    name:'詹姆斯'
                },{
                    name:'抢七'
                },{
                    name:'骑士'
                },{
                    name:'死亡五小'
                }]
            },{
                name:'形容词',
                children:[{
                    name:'流畅'
                },{
                    name:'精彩'
                },{
                    name:'牛逼'
                }]
            }]
        }]
    }]
var AuReviewG7_1=[
    {
        name: '骑士',
        value:20,
        itemStyle: {
            color: SunBurstColors[4]
        },
        children: [{
            name: '夸骑士',
            value:18,
            children: [{
                name: '名词',
                children: [{
                    name: '欧文'
                }, {
                    name: '詹姆斯'
                },{
                    name: '三巨头'
                },{
                    name:'压力'
                },{
                    name:'冠军'
                },{
                    name: '观赏性'
                }]
            },{
                name: '形容词',
                children: [{
                    name: '最帅'
                },{
                    name:'威武'
                },{
                    name: '很棒'
                },{
                    name: '棒棒哒'
                }, {
                    name: '无敌'
                },{
                    name:'牛逼'
                }]
            },{
                name: '动词',
                children: [{
                    name: '加油'
                }, {
                    name: '路转粉'
                },{
                    name:'翻盘'
                },{
                    name:'尊重'
                },{
                    name:'热泪盈眶'
                },{
                    name:'夺冠'
                }]
            }]
        },{
            name:'骂骑士',
            value:2,
            children:[{
                name:'动词',
                children:[{
                    name:'梦游'
                },{
                    name:'犯规'
                }]
            }]
        }]
    },
    {
        name: '勇士',
        value: 20,
        itemStyle: {
            color: SunBurstColors[3]
        },
        children: [{
            name: '夸勇士',
            value: 8,
            children: [{
                name:'名词',
                children:[{
                    name:'比分'
                },{
                    name:'勇士'
                },{
                    name:'水花'
                },{
                    name:'骑士'
                }]
            },{
                name:'动词',
                children:[{
                    name:'加油'
                },{
                    name:'支持'
                },{
                    name:'努力'
                },{
                    name:'追分'
                }]
            }]

        },{
            name:'骂勇士',
            value:12,
            children:[{
                name:'名词',
                children:[{
                    name:'笑话'
                },{
                    name:'死亡五小'
                },{
                    name:'抢断'
                },{
                    name:'自信心'
                },{
                    name:'三分'
                },{
                    name:'汤普森'
                },{
                    name:'库里'
                },{
                    name:'瓦莱乔'
                }]
            },{
                name:'动词',
                children:[{
                    name:'倒'
                },{
                    name:'演'
                },{
                    name:'激怒'
                },{
                    name:'犯规'
                }]
            }]
        }]
    },
    {
        name:'裁判',
        value:2,
        itemStyle: {
            color: SunBurstColors[2]
        },
        children:[{
            name:'骂裁判',
            value:2,
            children:[{
                name:'名词',
                children:[{
                    name:'亲爹哨'
                },{
                    name:'主场哨'
                }]
            }]
        }]

    },
    {
        name:'中立',
        value: 8,
        itemStyle: {
            color: SunBurstColors[1]
        },
        children: [{
            name: '中立',
            value:8,
            children: [{
                name: '名词',
                children: [{
                    name: '总决赛'
                }, {
                    name: '勇士'
                },{
                    name:'詹姆斯'
                },{
                    name:'抢七'
                },{
                    name:'骑士'
                },{
                    name:'死亡五小'
                }]
            },{
                name:'形容词',
                children:[{
                    name:'精彩'
                },{
                    name:'牛逼'
                }]
            }]
        }]
    }]
var AuReviewG7_2=[
    {
        name: '骑士',
        value:16,
        itemStyle: {
            color: SunBurstColors[4]
        },
        children: [{
            name: '夸骑士',
            value:6,
            children: [{
                name: '名词',
                children: [{
                    name: '欧文'
                }, {
                    name: '詹姆斯'
                },{
                    name: '三巨头'
                }]
            },{
                name: '形容词',
                children: [{
                    name: '最帅'
                },{
                    name: '无敌'
                },{
                    name:'牛逼'
                }]
            }]
        },{
            name:'骂骑士',
            value:10,
            children:[{
                name:'名词',
                children:[{
                    name:'詹姆斯'
                },{
                    name:'手感'
                },{
                    name:'骑士'
                }]
            },{
                name:'形容词',
                children:[{
                    name:'半斤八两'
                },{
                    name:'畏手畏脚'
                },{
                    name:'积极'
                }]
            },{
                name:'动词',
                children:[{
                    name:'梦游'
                },{
                    name:'犯规'
                },{
                    name:'失误'
                },{
                    name:'传球'
                }]
            }]
        }]
    },
    {
        name: '勇士',
        value: 11,
        itemStyle: {
            color: SunBurstColors[3]
        },
        children: [{
            name: '夸勇士',
            value: 8,
            children: [{
                name:'名词',
                children:[{
                    name:'比分'
                },{
                    name:'勇士'
                },{
                    name:'水花'
                },{
                    name:'骑士'
                }]
            },{
                name:'动词',
                children:[{
                    name:'加油'
                },{
                    name:'支持'
                },{
                    name:'努力'
                },{
                    name:'追分'
                }]
            }]

        },{
            name:'骂勇士',
            value:3,
            children:[{
                name:'名词',
                children:[{
                    name:'辣鸡'
                },{
                    name:'库里'
                },{
                    name:'水花'
                }]
            }]
        }]
    },
    {
        name:'裁判',
        value:17,
        itemStyle: {
            color: SunBurstColors[2]
        },
        children:[{
            name:'骂裁判',
            value:17,
            children:[{
                name:'名词',
                children:[{
                    name:'亲爹哨'
                },{
                    name:'主场哨'
                },{
                    name:'裁判'
                },{
                    name:'亲儿子'
                },{
                    name:'主场优势'
                },{
                    name:'垃圾'
                },{
                    name:'智障'
                },{
                    name:'黑哨'
                },{
                    name:'哨子'
                },{
                    name:'优势'
                }]
            },{
                name:'形容词',
                children:[{
                    name:'太黑'
                },{
                    name:'不公平'
                },{
                    name:'明显'
                }]
            },{
                name:'动词',
                children:[{
                    name:'打败'
                },{
                    name:'犯规'
                },{
                    name:'领先'
                },{
                    name:'吹哨'
                }]
            }]
        }]

    },
    {
        name:'中立',
        value: 9,
        itemStyle: {
            color: SunBurstColors[1]
        },
        children: [{
            name: '中立',
            value:9,
            children: [{
                name: '名词',
                children: [{
                    name: '总决赛'
                }, {
                    name: '勇士'
                },{
                    name:'詹姆斯'
                },{
                    name:'抢七'
                },{
                    name:'骑士'
                },{
                    name:'死亡五小'
                }]
            },{
                name:'形容词',
                children:[{
                    name:'精彩'
                },{
                    name:'牛逼'
                },{
                    name:'流畅'
                }]
            }]
        }]
    }]
var AuReviewG7_3=[
    {
        name: '骑士',
        value:23,
        itemStyle: {
            color: SunBurstColors[4]
        },
        children: [{
            name: '夸骑士',
            value:16,
            children: [{
                name: '名词',
                children: [{
                    name: '欧文'
                }, {
                    name: '詹姆斯'
                },{
                    name: '三巨头'
                },{
                    name:'压力'
                },{
                    name:'冠军'
                }]
            },{
                name: '形容词',
                children: [{
                    name: '最帅'
                },{
                    name:'威武'
                },{
                    name: '很棒'
                },{
                    name: '无敌'
                },{
                    name:'牛逼'
                }]
            },{
                name: '动词',
                children: [{
                    name: '加油'
                }, {
                    name: '路转粉'
                },{
                    name:'翻盘'
                },{
                    name:'尊重'
                },{
                    name:'热泪盈眶'
                },{
                    name:'夺冠'
                }]
            }]
        },{
            name:'骂骑士',
            value:7,
            children:[{
                name:'名词',
                children:[{
                    name:'詹姆斯'
                },{
                    name:'手感'
                },{
                    name:'骑士'
                }]
            },{
                name:'动词',
                children:[{
                    name:'梦游'
                },{
                    name:'犯规'
                },{
                    name:'失误'
                },{
                    name:'传球'
                }]
            }]
        }]
    },
    {
        name: '勇士',
        value: 8,
        itemStyle: {
            color: SunBurstColors[3]
        },
        children: [{
            name: '夸勇士',
            value: 6,
            children: [{
                name:'名词',
                children:[{
                    name:'比分'
                },{
                    name:'勇士'
                }]
            },{
                name:'动词',
                children:[{
                    name:'加油'
                },{
                    name:'支持'
                },{
                    name:'努力'
                },{
                    name:'追分'
                }]
            }]

        },{
            name:'骂勇士',
            value:2,
            children:[{
                name:'名词',
                children:[{
                    name:'库里'
                },{
                    name:'水花'
                }]
            }]
        }]
    },
    {
        name:'裁判',
        value:6,
        itemStyle: {
            color: SunBurstColors[2]
        },
        children:[{
            name:'骂裁判',
            value:6,
            children:[{
                name:'名词',
                children:[{
                    name:'亲爹哨'
                },{
                    name:'主场哨'
                },{
                    name:'裁判'
                },{
                    name:'黑哨'
                },{
                    name:'哨子'
                },{
                    name:'优势'
                }]
            }]
        }]

    },
    {
        name:'中立',
        value: 13,
        itemStyle: {
            color: SunBurstColors[1]
        },
        children: [{
            name: '中立',
            value:13,
            children: [{
                name: '名词',
                children: [{
                    name: '总决赛'
                }, {
                    name: '勇士'
                },{
                    name:'詹姆斯'
                },{
                    name:'抢七'
                },{
                    name:'骑士'
                },{
                    name:'死亡五小'
                },{
                    name:'历史'
                }]
            },{
                name:'形容词',
                children:[{
                    name:'精彩'
                },{
                    name:'牛逼'
                },{
                    name:'流畅'
                }]
            },{
                name:'动词',
                children:[{
                    name:'创造'
                },{
                    name:'牛逼'
                },{
                    name:'流畅'
                }]
            }]
        }]
    }]
var AuReviewG7_4=[
    {
        name: '骑士',
        value:27,
        itemStyle: {
            color: SunBurstColors[4]
        },
        children: [{
            name: '夸骑士',
            value:27,
            children: [{
                name: '名词',
                children: [{
                    name: '欧文'
                }, {
                    name: '詹姆斯'
                },{
                    name: '三巨头'
                },{
                    name:'压力'
                },{
                    name:'冠军'
                },{
                    name: '三巨头'
                },{
                    name:'压力'
                },{
                    name:'冠军'
                },{
                    name: '观赏性'
                },{
                    name:'克利夫兰'
                },{
                    name:'全世界'
                }]
            },{
                name: '形容词',
                children: [{
                    name: '最帅'
                }, {
                    name: '精彩'
                },{
                    name:'太爽'
                },{
                    name:'威武'
                },{
                    name: '很棒'
                },{
                    name: '棒棒哒'
                }, {
                    name: '无敌'
                },{
                    name:'牛逼'
                },{
                    name:'很拼'
                },{
                    name: '努力'
                }]
            },{
                name: '动词',
                children: [{
                    name: '加油'
                }, {
                    name: '路转粉'
                },{
                    name:'翻盘'
                },{
                    name:'尊重'
                },{
                    name:'热泪盈眶'
                },{
                    name:'夺冠'
                }]
            }]
        }]
    },
    {
        name: '勇士',
        value: 7,
        itemStyle: {
            color: SunBurstColors[3]
        },
        children: [{
            name: '夸勇士',
            value: 4,
            children: [{
                name:'动词',
                children:[{
                    name:'加油'
                },{
                    name:'支持'
                },{
                    name:'努力'
                },{
                    name:'追分'
                }]
            }]

        },{
            name:'骂勇士',
            value:3,
            children:[{
                name:'名词',
                children:[{
                    name:'库里'
                },{
                    name:'水花'
                },{
                    name:'比分'
                }]
            }]
        }]
    },
    {
        name:'中立',
        value: 13,
        itemStyle: {
            color: SunBurstColors[1]
        },
        children: [{
            name: '中立',
            value:13,
            children: [{
                name: '名词',
                children: [{
                    name: '总决赛'
                }, {
                    name: '勇士'
                },{
                    name:'詹姆斯'
                },{
                    name:'抢七'
                },{
                    name:'骑士'
                },{
                    name:'死亡五小'
                },{
                    name:'历史'
                }]
            },{
                name:'形容词',
                children:[{
                    name:'精彩'
                },{
                    name:'牛逼'
                },{
                    name:'流畅'
                }]
            },{
                name:'动词',
                children:[{
                    name:'创造'
                },{
                    name:'牛逼'
                },{
                    name:'流畅'
                }]
            }]
        }]
    }]