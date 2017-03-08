var nodes=[ 
{id:1, value:10, label:'225003',  }, 
{id:2, value:8, label:'224491',  }, 
{id:3, value:8, label:'225002',  }, 
{id:4, value:8, label:'224488',  }, 
{id:5, value:8, label:'225001',  }, 
{id:6, value:8, label:'224489',  }, 
{id:7, value:8, label:'225000',  }, 
{id:8, value:8, label:'224490',  }, 
{id:9, value:9, label:'223467',  }, 
{id:10, value:9, label:'223466',  }, 
{id:11, value:8, label:'223979',  }, 
{id:12, value:8, label:'223978',  }, 
{id:13, value:7, label:'206853',  }, 
{id:14, value:9, label:'223464',  }, 
{id:15, value:8, label:'223465',  }, 
{id:16, value:37, label:'223977', color:'green' }, 
{id:17, value:8, label:'223976',  }, 
{id:18, value:7, label:' 75781',  }, 
{id:19, value:7, label:'207109',  }, 
{id:20, value:9, label:' 25668',  }, 
{id:21, value:7, label:' 76037',  }, 
{id:22, value:9, label:'156740',  }, 
{id:23, value:10, label:'156996',  }, 
{id:24, value:7, label:'141573',  }, 
{id:25, value:8, label:' 25924',  }, 
{id:26, value:7, label:' 10245',  }, 
{id:27, value:37, label:'141317', color:'green' }, 
{id:28, value:7, label:' 10501',  }, 
{id:29, value:38, label:'222276', color:'green' }, 
{id:30, value:7, label:' 91460',  }, 
{id:31, value:9, label:' 25796',  }, 
{id:32, value:7, label:'222532',  }, 
{id:33, value:7, label:' 91204',  }, 
{id:34, value:6, label:'157124',  }, 
{id:35, value:9, label:' 26052',  }, 
{id:36, value:5, label:'156868',  }, 
{id:37, value:7, label:'222404',  }, 
{id:38, value:5, label:'222660',  }, 
{id:39, value:6, label:' 91588',  }, 
{id:40, value:4, label:' 91332',  }, 
{id:41, value:3, label:'106643',  }, 
{id:42, value:3, label:'237971',  }, 
{id:43, value:3, label:'237715',  }, 
{id:44, value:33, label:'106899', color:'green' }, 
{id:45, value:31, label:' 31206', color:'green' }, 
{id:46, value:1, label:' 31718',  }, 
{id:47, value:4, label:' 25766',  }, 
{id:48, value:4, label:'157094',  }, 
{id:49, value:4, label:'156838',  }, 
{id:50, value:4, label:' 26022',  }, 
{id:51, value:3, label:'157606',  }, 
{id:52, value:3, label:'157350',  }, 
{id:53, value:3, label:' 26278',  }, 
{id:54, value:33, label:' 26534', color:'green' }, 
{id:55, value:2, label:'201517',  }, 
{id:56, value:1, label:'201261',  }, 
{id:57, value:1, label:' 70445',  }, 
{id:58, value:100, label:'  6152',color:'orange'}, 
];
var edges=[ 
{from:1, to:2, value: 8.057, title :' 0.696'}, 
{from:1, to:3, value: 9.781, title :' 0.760'}, 
{from:1, to:4, value: 1.327, title :' 0.094'}, 
{from:1, to:5, value: 1.373, title :' 0.106'}, 
{from:1, to:6, value: 1.380, title :' 0.107'}, 
{from:1, to:7, value: 1.398, title :' 0.112'}, 
{from:1, to:8, value: 4.455, title :' 0.498'}, 
{from:1, to:9, value: 1.094, title :' 0.030'}, 
{from:1, to:11, value: 1.108, title :' 0.034'}, 
{from:1, to:12, value: 1.099, title :' 0.032'}, 
{from:2, to:3, value: 5.285, title :' 0.555'}, 
{from:2, to:4, value: 1.396, title :' 0.111'}, 
{from:2, to:5, value: 1.342, title :' 0.098'}, 
{from:2, to:6, value: 1.397, title :' 0.112'}, 
{from:2, to:7, value: 1.302, title :' 0.088'}, 
{from:2, to:8, value: 9.419, title :' 0.748'}, 
{from:2, to:10, value: 1.104, title :' 0.033'}, 
{from:3, to:4, value: 1.378, title :' 0.107'}, 
{from:3, to:5, value: 1.410, title :' 0.115'}, 
{from:3, to:6, value: 1.386, title :' 0.109'}, 
{from:3, to:7, value: 1.406, title :' 0.113'}, 
{from:3, to:8, value: 7.069, title :' 0.652'}, 
{from:3, to:9, value: 1.082, title :' 0.026'}, 
{from:4, to:5, value: 4.779, title :' 0.521'}, 
{from:4, to:6, value: 8.657, title :' 0.719'}, 
{from:4, to:7, value: 7.423, title :' 0.668'}, 
{from:4, to:8, value: 1.352, title :' 0.100'}, 
{from:4, to:14, value: 1.109, title :' 0.035'}, 
{from:5, to:6, value: 6.857, title :' 0.642'}, 
{from:5, to:7, value: 8.713, title :' 0.722'}, 
{from:5, to:8, value: 1.288, title :' 0.084'}, 
{from:5, to:17, value: 1.074, title :' 0.024'}, 
{from:6, to:7, value: 4.325, title :' 0.488'}, 
{from:6, to:8, value: 1.356, title :' 0.102'}, 
{from:6, to:15, value: 1.099, title :' 0.031'}, 
{from:7, to:8, value: 1.255, title :' 0.076'}, 
{from:7, to:14, value: 1.098, title :' 0.031'}, 
{from:8, to:10, value: 1.082, title :' 0.026'}, 
{from:9, to:10, value: 8.916, title :' 0.729'}, 
{from:9, to:11, value: 6.482, title :' 0.623'}, 
{from:9, to:12, value: 4.275, title :' 0.484'}, 
{from:9, to:14, value: 1.374, title :' 0.106'}, 
{from:9, to:15, value: 1.374, title :' 0.106'}, 
{from:9, to:16, value: 1.266, title :' 0.078'}, 
{from:9, to:17, value: 1.283, title :' 0.083'}, 
{from:10, to:11, value: 4.094, title :' 0.470'}, 
{from:10, to:12, value: 6.868, title :' 0.642'}, 
{from:10, to:14, value: 1.308, title :' 0.089'}, 
{from:10, to:15, value: 1.330, title :' 0.095'}, 
{from:10, to:16, value: 1.234, title :' 0.070'}, 
{from:10, to:17, value: 1.215, title :' 0.065'}, 
{from:11, to:12, value: 8.181, title :' 0.701'}, 
{from:11, to:14, value: 1.265, title :' 0.078'}, 
{from:11, to:15, value: 1.308, title :' 0.090'}, 
{from:11, to:16, value: 1.393, title :' 0.110'}, 
{from:11, to:17, value: 1.399, title :' 0.112'}, 
{from:12, to:14, value: 1.246, title :' 0.073'}, 
{from:12, to:15, value: 1.120, title :' 0.038'}, 
{from:12, to:16, value: 1.235, title :' 0.070'}, 
{from:12, to:17, value: 1.260, title :' 0.077'}, 
{from:13, to:18, value: 8.079, title :' 0.696'}, 
{from:13, to:19, value: 6.847, title :' 0.641'}, 
{from:13, to:21, value: 3.529, title :' 0.420'}, 
{from:13, to:24, value: 1.231, title :' 0.069'}, 
{from:13, to:26, value: 1.301, title :' 0.088'}, 
{from:13, to:27, value: 1.298, title :' 0.087'}, 
{from:13, to:28, value: 1.237, title :' 0.071'}, 
{from:14, to:15, value: 6.143, title :' 0.605'}, 
{from:14, to:16, value: 3.482, title :' 0.416'}, 
{from:14, to:17, value: 5.873, title :' 0.590'}, 
{from:15, to:16, value: 6.660, title :' 0.632'}, 
{from:15, to:17, value: 3.474, title :' 0.415'}, 
{from:16, to:17, value: 6.450, title :' 0.621'}, 
{from:18, to:19, value: 3.742, title :' 0.440'}, 
{from:18, to:21, value: 6.369, title :' 0.617'}, 
{from:18, to:24, value: 1.153, title :' 0.048'}, 
{from:18, to:26, value: 1.142, title :' 0.044'}, 
{from:18, to:27, value: 1.144, title :' 0.045'}, 
{from:18, to:28, value: 1.171, title :' 0.053'}, 
{from:19, to:21, value: 7.195, title :' 0.658'}, 
{from:19, to:24, value: 1.194, title :' 0.059'}, 
{from:19, to:26, value: 1.108, title :' 0.034'}, 
{from:19, to:27, value: 1.142, title :' 0.044'}, 
{from:19, to:28, value: 1.183, title :' 0.056'}, 
{from:20, to:22, value: 6.372, title :' 0.617'}, 
{from:20, to:23, value: 3.440, title :' 0.412'}, 
{from:20, to:25, value: 8.153, title :' 0.699'}, 
{from:20, to:29, value: 1.122, title :' 0.039'}, 
{from:20, to:30, value: 1.109, title :' 0.035'}, 
{from:20, to:31, value: 1.086, title :' 0.027'}, 
{from:20, to:32, value: 1.106, title :' 0.034'}, 
{from:20, to:33, value: 1.094, title :' 0.030'}, 
{from:20, to:35, value: 1.098, title :' 0.031'}, 
{from:21, to:24, value: 1.204, title :' 0.062'}, 
{from:21, to:26, value: 1.147, title :' 0.046'}, 
{from:21, to:27, value: 1.140, title :' 0.044'}, 
{from:21, to:28, value: 1.236, title :' 0.071'}, 
{from:22, to:23, value: 7.114, title :' 0.654'}, 
{from:22, to:25, value: 3.308, title :' 0.399'}, 
{from:22, to:29, value: 1.186, title :' 0.057'}, 
{from:22, to:30, value: 1.112, title :' 0.035'}, 
{from:22, to:32, value: 1.119, title :' 0.037'}, 
{from:22, to:33, value: 1.157, title :' 0.049'}, 
{from:22, to:34, value: 1.106, title :' 0.034'}, 
{from:22, to:36, value: 1.082, title :' 0.026'}, 
{from:23, to:25, value: 5.667, title :' 0.578'}, 
{from:23, to:29, value: 1.097, title :' 0.031'}, 
{from:23, to:30, value: 1.152, title :' 0.047'}, 
{from:23, to:31, value: 1.083, title :' 0.027'}, 
{from:23, to:32, value: 1.122, title :' 0.038'}, 
{from:23, to:33, value: 1.082, title :' 0.026'}, 
{from:23, to:34, value: 1.134, title :' 0.042'}, 
{from:23, to:35, value: 1.076, title :' 0.024'}, 
{from:24, to:26, value: 3.301, title :' 0.398'}, 
{from:24, to:27, value: 6.361, title :' 0.617'}, 
{from:24, to:28, value: 6.041, title :' 0.599'}, 
{from:25, to:29, value: 1.089, title :' 0.029'}, 
{from:25, to:30, value: 1.157, title :' 0.049'}, 
{from:25, to:31, value: 1.091, title :' 0.029'}, 
{from:25, to:33, value: 1.085, title :' 0.027'}, 
{from:25, to:35, value: 1.120, title :' 0.038'}, 
{from:26, to:27, value: 6.261, title :' 0.611'}, 
{from:26, to:28, value: 5.975, title :' 0.596'}, 
{from:27, to:28, value: 2.920, title :' 0.357'}, 
{from:29, to:30, value: 2.944, title :' 0.360'}, 
{from:29, to:32, value: 6.548, title :' 0.626'}, 
{from:29, to:33, value: 5.267, title :' 0.554'}, 
{from:29, to:37, value: 1.076, title :' 0.025'}, 
{from:30, to:32, value: 5.283, title :' 0.555'}, 
{from:30, to:33, value: 5.942, title :' 0.594'}, 
{from:31, to:34, value: 2.908, title :' 0.356'}, 
{from:31, to:35, value: 6.263, title :' 0.612'}, 
{from:31, to:36, value: 4.929, title :' 0.532'}, 
{from:31, to:37, value: 1.125, title :' 0.039'}, 
{from:31, to:39, value: 1.082, title :' 0.026'}, 
{from:31, to:40, value: 1.075, title :' 0.024'}, 
{from:32, to:33, value: 2.865, title :' 0.351'}, 
{from:32, to:38, value: 1.096, title :' 0.030'}, 
{from:34, to:35, value: 4.660, title :' 0.513'}, 
{from:34, to:36, value: 6.607, title :' 0.629'}, 
{from:34, to:39, value: 1.094, title :' 0.030'}, 
{from:35, to:36, value: 2.374, title :' 0.288'}, 
{from:35, to:37, value: 1.076, title :' 0.024'}, 
{from:35, to:38, value: 1.111, title :' 0.035'}, 
{from:35, to:39, value: 1.080, title :' 0.026'}, 
{from:36, to:37, value: 1.143, title :' 0.044'}, 
{from:37, to:38, value: 4.851, title :' 0.526'}, 
{from:37, to:39, value: 2.094, title :' 0.246'}, 
{from:37, to:40, value: 3.702, title :' 0.436'}, 
{from:38, to:39, value: 3.698, title :' 0.436'}, 
{from:38, to:40, value: 2.228, title :' 0.267'}, 
{from:39, to:40, value: 4.673, title :' 0.514'}, 
{from:41, to:42, value: 1.208, title :' 0.063'}, 
{from:41, to:43, value: 1.317, title :' 0.092'}, 
{from:41, to:44, value: 5.928, title :' 0.593'}, 
{from:42, to:43, value: 5.926, title :' 0.593'}, 
{from:42, to:44, value: 1.304, title :' 0.088'}, 
{from:43, to:44, value: 1.176, title :' 0.054'}, 
{from:45, to:46, value: 3.579, title :' 0.425'}, 
{from:47, to:48, value: 1.114, title :' 0.036'}, 
{from:47, to:49, value: 1.436, title :' 0.121'}, 
{from:47, to:50, value: 1.917, title :' 0.217'}, 
{from:47, to:53, value: 1.102, title :' 0.032'}, 
{from:48, to:49, value: 1.952, title :' 0.223'}, 
{from:48, to:50, value: 1.352, title :' 0.100'}, 
{from:48, to:51, value: 1.136, title :' 0.043'}, 
{from:49, to:50, value: 1.074, title :' 0.024'}, 
{from:49, to:52, value: 1.104, title :' 0.033'}, 
{from:50, to:54, value: 1.075, title :' 0.024'}, 
{from:51, to:52, value: 2.000, title :' 0.231'}, 
{from:51, to:54, value: 1.210, title :' 0.064'}, 
{from:52, to:53, value: 1.241, title :' 0.072'}, 
{from:53, to:54, value: 1.972, title :' 0.226'}, 
{from:55, to:56, value: 1.472, title :' 0.129'}, 
{from:55, to:57, value: 1.456, title :' 0.125'}, 
];
var seq0batch256_sub67_BSatlas58node = { nodes:nodes,edges:edges};