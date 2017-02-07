function createEcharts(type,dom,data){
    var option;
    var rader = echarts.init(document.getElementById("box"));
    switch(type){
        case 'Gauge' :
            option = {
                    tooltip : {
                        formatter: "{a} <br/>{c} {b}"
                    },
                    toolbox: {
                        show: true,
                        feature: {
                            restore: {show: true},
                            saveAsImage: {show: true}
                        }
                    },
                    series : [
                        {
                            name: '速度',
                            type: 'gauge',
                            z: 3,
                            min: 0,
                            max: data.内圈最大值,
                            splitNumber: 11,
                            radius: '50%',
                            axisLine: {            // 坐标轴线
                            
                                lineStyle: {       // 属性lineStyle控制线条样式
                                    width: 10
                                }
                            },
                            axisTick: {            // 坐标轴小标记
                                length: 15,        // 属性length控制线长
                                lineStyle: {       // 属性lineStyle控制线条样式
                                    color: 'auto'
                                }
                            },
                            splitLine: {           // 分隔线
                                length: 20,         // 属性length控制线长
                                lineStyle: {       // 属性lineStyle（详见lineStyle）控制线条样式
                                    color: 'auto'
                                }
                            },
                            title : {
                                textStyle: {       // 其余属性默认使用全局文本样式，详见TEXTSTYLE
                                    fontWeight: 'bolder',
                                    fontSize: 20,
                                    fontStyle: 'italic'
                                }
                            },
                         
                            detail : {
                                textStyle: {       // 其余属性默认使用全局文本样式，详见TEXTSTYLE
                                    fontWeight: 'bolder'
                                },
                                offsetCenter: [0, '100%']
                            },
                            data:[{value: data.内圈比例, name: data.内圈标题}]
                        },
                        {
                            name: '速度',
                            type: 'gauge',
                            z: 3,
                            min: 0,
                            max: data.外圈最大值,
                            splitNumber: 11,
                            radius: '80%',
                            axisLine: {            // 坐标轴线
                                lineStyle: {       // 属性lineStyle控制线条样式
                                    width: 10
                                }
                            },
                            axisTick: {            // 坐标轴小标记
                                length: 15,        // 属性length控制线长
                                lineStyle: {       // 属性lineStyle控制线条样式
                                    color: 'auto'
                                }
                            },
                            splitLine: {           // 分隔线
                                length: 10,         // 属性length控制线长
                                lineStyle: {       // 属性lineStyle（详见lineStyle）控制线条样式
                                    color: 'auto'
                                }
                            },
                            title : {
                                textStyle: {       // 其余属性默认使用全局文本样式，详见TEXTSTYLE
                                    fontWeight: 'bolder',
                                    fontSize: 20,
                                    fontStyle: 'italic'
                                }
                            },
                            detail : {
                                textStyle: {       // 其余属性默认使用全局文本样式，详见TEXTSTYLE
                                    fontWeight: 'bolder'
                                }
                            
                            },
                            data:[{value: data.外圈比例}]
                        }
                    ]
                };
            break;
        case 'pie-nset' :
            option = {
                    tooltip: {
                        trigger: 'item',
                        formatter: "{a} <br/>{b}: {c} ({d}%)"
                    },
                    legend: {
                        // orient: 'vertical',
                        // x: 'left',
                        // data:['直达','营销广告','搜索引擎','邮件营销','联盟广告','视频广告','百度','谷歌','必应','其他']
                    },
                    series: [
                        {
                            name:data.标题,
                            type:'pie',
                            selectedMode: 'single',
                            radius: [0, '36%'],

                            label: {
                                normal: {
                                    position: 'inner'
                                }
                            },
                            labelLine: {
                                normal: {
                                    show: false
                                }
                            },
                            data:[
                                {value:data.内圆数据1, name:data.内圆内容1, selected:false},
                                {value:data.内圆数据2, name:data.内圆内容2}
                            ]
                        },
                        {
                            name:data.标题,
                            type:'pie',
                            radius: ['40%', '55%'],
                            data:[
                                {value:data.中环数据1, name:data.中环内容1},
                                {value:data.中环数据1, name:data.中环内容2}
                            ],
                            itemStyle : {  
                               
                            },
                        },
                        {
                            name:'',
                            type:'pie',
                            radius: ['60%', '75%'],

                            data:[
                                {value:data.外环数据1, name:data.中环内容1},
                                {value:data.外环数据2, name:data.中环内容2}
                            ]
                        }
                    ]
                };
            break;
        case 'radar' :
            option = {
                    color:['orange','purple','green'],  
                    //这样series里每一个data会到color数组里取一个颜色（按顺序），取到头时再从头循环。
                    title : {               //标题
                        text: '',
                        subtext: ''
                    },
                    tooltip : {             //提示框
                        show:true,
                        trigger: 'item'
                    },
                    legend: {               //图例
                        orient : 'vertical',
                        x : 'left',
                        y : 'bottom',
                        data:['历史月均','本月情况','上月情况']
                    },
                    toolbox: {              //工具箱
                        show : false,
                        feature : {
                            mark : {show: true},
                            dataView : {show: true, readOnly: false},
                            restore : {show: true},
                            saveAsImage : {show: true}
                        }
                    },
                    polar : [           //应该是设置最大值的地方，最大值待设置
                       {
                           name:{
                               show: true,
                               formatter: null,
                               textStyle: {
                                 //设置颜色，貌似不支持多颜色
                                 //color:'#FF0000',
                                 fontSize:20,
                                 fontWeight:'bold'
                               }
                           },
                           indicator : [
                               { text: '采', max: data.采最大值},
                               { text: '宣', max: data.宣最大值},
                               { text: '办', max: data.办最大值},
                               { text: '处', max: data.处最大值},
                               { text: '访', max: data.访最大值},
                               { text: '巡', max: data.巡最大值}
                            ]
                        }
                    ],
                    calculable : false,     //是否启用拖拽重计算特性
                    series : [
                        {
                            name: '雷达图',
                            type: 'radar',
                            data : [
                                {
                                    value : [data.历史采, data.历史宣, data.历史办, data.历史处, data.历史访, data.历史巡],
                                    name : '历史月均',
                                    itemStyle: {
                                        normal:{
                                            areaStyle: {
                                                type: 'default',
                                            }
                                        }
                                    },
                                },
                                {
                                    value : [data.本月采, data.本月宣, data.本月办, data.本月处, data.本月访, data.本月巡],
                                    name : '本月情况'
                                },
                                {
                                    value : [data.上月采, data.上月宣, data.上月办, data.上月处, data.上月访, data.上月巡],
                                    name : '上月情况'
                                }
                            ]
                        }
                    ]
                };
            break;
        case 'line' :
            option = {
                title : {
                    text: data.标题,
                    subtext: data.小标题,
                    x:'center'
                },
                color:['blue'],
                tooltip : {
                    trigger: 'axis'
                },
                toolbox: {
                    show : false,
                    feature : {
                        mark : {show: true},
                        dataView : {show: true, readOnly: false},
                        magicType : {show: true, type: ['line', 'bar']},
                        restore : {show: true},
                        saveAsImage : {show: true}
                    }
                },
                calculable : true,
                xAxis : [
                    {
                        type : 'category',
                        boundaryGap : false,
                        data : ['一月','二月','三月','四月','五月','六月','七月','八月','九月','十月','十一月','十二月']
                    }
                ],
                yAxis : [
                    {
                        type : 'value',
                        axisLabel : {
                            formatter: '{value}'
                        }
                    }
                ],
                series : [
                    {
                        name:'日交易量',
                        type:'line',
                        data:[data.日交易量1,data.日交易量2,data.日交易量3,data.日交易量4,data.日交易量5,data.日交易量6,data.日交易量7,data.日交易量8,data.日交易量9,data.日交易量10,data.日交易量11,data.日交易量12],
                       // markPoint : {
                      //     data : [
                       //         {type : 'max', name: '最大值'},
                        //        {type : 'min', name: '最小值'}
                        //    ]
                       // },
                        // markLine : {
                        //     data : [
                        //         {type : 'average', name: '平均值'}
                        //     ]
                        // }
                    }
                ]};
            break;
        case 'Histogram' :



        default:
            console.log("无此图表");
    }
    
    rader.setOption(option);

}
