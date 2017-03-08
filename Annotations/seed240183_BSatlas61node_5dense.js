var nodes=[ 
{id:1, value:9, label:' 11071', color:'red' }, 
{id:2, value:11, label:' 10559', color:'red' }, 
{id:3, value:8, label:' 11583', color:'red' }, 
{id:4, value:18, label:' 77631',  }, 
{id:5, value:17, label:' 76863',  }, 
{id:6, value:14, label:' 77374',  }, 
{id:7, value:6, label:'109358',  }, 
{id:8, value:6, label:'109359',  }, 
{id:9, value:4, label:'108846',  }, 
{id:10, value:4, label:'108847',  }, 
{id:11, value:4, label:'109094',  }, 
{id:12, value:4, label:'240422',  }, 
{id:13, value:3, label:'240166',  }, 
{id:14, value:4, label:'108591',  }, 
{id:15, value:4, label:'109102',  }, 
{id:16, value:3, label:'108590',  }, 
{id:17, value:4, label:'109103',  }, 
{id:18, value:3, label:' 77375',  }, 
{id:19, value:3, label:'109350',  }, 
{id:20, value:13, label:' 75838',  }, 
{id:21, value:9, label:' 77119',  }, 
{id:22, value:4, label:'206887',  }, 
{id:23, value:4, label:'207143',  }, 
{id:24, value:6, label:'108839',  }, 
{id:25, value:6, label:'240167',  }, 
{id:26, value:5, label:'108583',  }, 
{id:27, value:4, label:'239655',  }, 
{id:28, value:4, label:'239911',  }, 
{id:29, value:4, label:'109351',  }, 
{id:30, value:3, label:' 75815',  }, 
{id:31, value:4, label:'240423',  }, 
{id:32, value:4, label:'109095',  }, 
{id:33, value:2, label:' 76071',  }, 
{id:34, value:9, label:' 76350',  }, 
{id:35, value:9, label:' 74302',  }, 
{id:36, value:9, label:' 76094',  }, 
{id:37, value:1, label:' 81215', color:'red' }, 
{id:38, value:7, label:' 76606',  }, 
{id:39, value:11, label:' 77118',  }, 
{id:40, value:10, label:' 76351',  }, 
{id:41, value:6, label:' 76095',  }, 
{id:42, value:6, label:' 76607',  }, 
{id:43, value:3, label:' 76862',  }, 
{id:44, value:4, label:'101167',  }, 
{id:45, value:3, label:'100911',  }, 
{id:46, value:3, label:'100878',  }, 
{id:47, value:1, label:'101134',  }, 
{id:48, value:4, label:'100655',  }, 
{id:49, value:2, label:' 68927', color:'red' }, 
{id:50, value:5, label:' 76078',  }, 
{id:51, value:34, label:'101166', color:'green' }, 
{id:52, value:5, label:' 76334',  }, 
{id:53, value:2, label:'100399',  }, 
{id:54, value:2, label:' 77630',  }, 
{id:55, value:3, label:'100910',  }, 
{id:56, value:2, label:' 75839',  }, 
{id:57, value:2, label:' 76590',  }, 
{id:58, value:2, label:' 75822',  }, 
{id:59, value:1, label:' 73790',  }, 
{id:60, value:1, label:'100398',  }, 
{id:61, value:100, label:'  6152',color:'orange'}, 
];
var edges=[ 
{from:1, to:2, value:14.510, title :' 0.892'}, 
{from:1, to:3, value:10.585, title :' 0.786'}, 
{from:1, to:4, value: 1.428, title :' 0.119'}, 
{from:1, to:5, value: 1.319, title :' 0.092'}, 
{from:1, to:6, value: 1.225, title :' 0.068'}, 
{from:1, to:20, value: 1.232, title :' 0.070'}, 
{from:1, to:35, value: 1.164, title :' 0.051'}, 
{from:1, to:37, value: 2.095, title :' 0.246'}, 
{from:1, to:39, value: 1.108, title :' 0.034'}, 
{from:2, to:4, value: 1.454, title :' 0.125'}, 
{from:2, to:5, value: 1.335, title :' 0.096'}, 
{from:2, to:6, value: 1.237, title :' 0.071'}, 
{from:2, to:20, value: 1.194, title :' 0.059'}, 
{from:2, to:21, value: 1.183, title :' 0.056'}, 
{from:2, to:34, value: 1.233, title :' 0.070'}, 
{from:2, to:35, value: 1.187, title :' 0.057'}, 
{from:2, to:38, value: 1.122, title :' 0.038'}, 
{from:2, to:39, value: 1.080, title :' 0.026'}, 
{from:2, to:40, value: 1.218, title :' 0.066'}, 
{from:3, to:4, value: 1.385, title :' 0.109'}, 
{from:3, to:5, value: 1.362, title :' 0.103'}, 
{from:3, to:6, value: 1.249, title :' 0.074'}, 
{from:3, to:20, value: 1.212, title :' 0.064'}, 
{from:3, to:35, value: 1.211, title :' 0.064'}, 
{from:3, to:39, value: 1.067, title :' 0.022'}, 
{from:3, to:49, value: 1.301, title :' 0.088'}, 
{from:4, to:5, value: 1.243, title :' 0.073'}, 
{from:4, to:6, value: 1.139, title :' 0.043'}, 
{from:4, to:18, value: 1.675, title :' 0.172'}, 
{from:4, to:20, value: 1.036, title :' 0.012'}, 
{from:4, to:21, value: 1.729, title :' 0.183'}, 
{from:4, to:26, value: 1.036, title :' 0.012'}, 
{from:4, to:34, value: 1.076, title :' 0.024'}, 
{from:4, to:35, value: 1.064, title :' 0.021'}, 
{from:4, to:38, value: 1.037, title :' 0.012'}, 
{from:4, to:39, value: 1.097, title :' 0.031'}, 
{from:4, to:40, value: 1.080, title :' 0.026'}, 
{from:4, to:42, value: 1.038, title :' 0.012'}, 
{from:4, to:49, value: 1.049, title :' 0.016'}, 
{from:4, to:50, value: 1.052, title :' 0.017'}, 
{from:4, to:54, value: 1.153, title :' 0.048'}, 
{from:5, to:6, value: 1.124, title :' 0.039'}, 
{from:5, to:18, value: 2.002, title :' 0.231'}, 
{from:5, to:20, value: 1.042, title :' 0.014'}, 
{from:5, to:21, value: 1.191, title :' 0.058'}, 
{from:5, to:34, value: 1.074, title :' 0.024'}, 
{from:5, to:35, value: 1.039, title :' 0.013'}, 
{from:5, to:36, value: 1.040, title :' 0.013'}, 
{from:5, to:38, value: 1.040, title :' 0.013'}, 
{from:5, to:39, value: 1.059, title :' 0.019'}, 
{from:5, to:40, value: 1.075, title :' 0.024'}, 
{from:5, to:43, value: 1.199, title :' 0.060'}, 
{from:5, to:52, value: 1.045, title :' 0.015'}, 
{from:5, to:56, value: 1.056, title :' 0.018'}, 
{from:6, to:18, value: 1.201, title :' 0.061'}, 
{from:6, to:20, value: 1.044, title :' 0.014'}, 
{from:6, to:21, value: 1.059, title :' 0.019'}, 
{from:6, to:36, value: 1.042, title :' 0.014'}, 
{from:6, to:38, value: 1.060, title :' 0.020'}, 
{from:6, to:39, value: 1.054, title :' 0.017'}, 
{from:6, to:40, value: 1.038, title :' 0.013'}, 
{from:6, to:43, value: 1.572, title :' 0.151'}, 
{from:6, to:54, value: 1.115, title :' 0.036'}, 
{from:7, to:8, value: 2.187, title :' 0.261'}, 
{from:7, to:9, value: 1.894, title :' 0.213'}, 
{from:7, to:10, value: 1.178, title :' 0.055'}, 
{from:7, to:15, value: 1.043, title :' 0.014'}, 
{from:7, to:23, value: 1.040, title :' 0.013'}, 
{from:7, to:30, value: 1.038, title :' 0.012'}, 
{from:8, to:9, value: 1.163, title :' 0.050'}, 
{from:8, to:10, value: 1.766, title :' 0.190'}, 
{from:8, to:17, value: 1.052, title :' 0.017'}, 
{from:8, to:25, value: 1.040, title :' 0.013'}, 
{from:8, to:44, value: 1.042, title :' 0.014'}, 
{from:9, to:10, value: 2.157, title :' 0.256'}, 
{from:9, to:23, value: 1.034, title :' 0.011'}, 
{from:10, to:14, value: 1.049, title :' 0.016'}, 
{from:11, to:12, value: 1.168, title :' 0.052'}, 
{from:11, to:13, value: 1.764, title :' 0.189'}, 
{from:11, to:19, value: 2.083, title :' 0.245'}, 
{from:11, to:22, value: 1.035, title :' 0.012'}, 
{from:12, to:13, value: 2.186, title :' 0.261'}, 
{from:12, to:19, value: 1.677, title :' 0.172'}, 
{from:12, to:31, value: 1.035, title :' 0.012'}, 
{from:13, to:19, value: 1.130, title :' 0.041'}, 
{from:14, to:15, value: 1.147, title :' 0.046'}, 
{from:14, to:16, value: 2.022, title :' 0.235'}, 
{from:14, to:17, value: 1.748, title :' 0.186'}, 
{from:15, to:16, value: 1.770, title :' 0.190'}, 
{from:15, to:17, value: 1.944, title :' 0.222'}, 
{from:16, to:17, value: 1.128, title :' 0.040'}, 
{from:20, to:21, value: 1.078, title :' 0.025'}, 
{from:20, to:34, value: 1.295, title :' 0.086'}, 
{from:20, to:39, value: 1.045, title :' 0.015'}, 
{from:20, to:40, value: 1.041, title :' 0.013'}, 
{from:20, to:41, value: 1.045, title :' 0.015'}, 
{from:20, to:56, value: 1.113, title :' 0.036'}, 
{from:20, to:59, value: 1.053, title :' 0.017'}, 
{from:21, to:34, value: 1.037, title :' 0.012'}, 
{from:21, to:36, value: 1.050, title :' 0.016'}, 
{from:21, to:39, value: 1.108, title :' 0.034'}, 
{from:21, to:50, value: 1.052, title :' 0.017'}, 
{from:22, to:23, value: 2.769, title :' 0.339'}, 
{from:22, to:30, value: 1.079, title :' 0.025'}, 
{from:22, to:36, value: 1.040, title :' 0.013'}, 
{from:23, to:33, value: 1.068, title :' 0.022'}, 
{from:24, to:25, value: 1.041, title :' 0.014'}, 
{from:24, to:26, value: 2.108, title :' 0.249'}, 
{from:24, to:27, value: 1.045, title :' 0.015'}, 
{from:24, to:28, value: 1.242, title :' 0.072'}, 
{from:24, to:29, value: 1.056, title :' 0.018'}, 
{from:24, to:52, value: 1.057, title :' 0.018'}, 
{from:25, to:27, value: 1.040, title :' 0.013'}, 
{from:25, to:29, value: 1.081, title :' 0.026'}, 
{from:25, to:31, value: 2.153, title :' 0.256'}, 
{from:25, to:32, value: 1.157, title :' 0.049'}, 
{from:26, to:27, value: 1.261, title :' 0.077'}, 
{from:26, to:28, value: 1.046, title :' 0.015'}, 
{from:26, to:32, value: 1.037, title :' 0.012'}, 
{from:27, to:28, value: 2.148, title :' 0.255'}, 
{from:28, to:42, value: 1.039, title :' 0.013'}, 
{from:29, to:31, value: 1.172, title :' 0.053'}, 
{from:29, to:32, value: 2.090, title :' 0.246'}, 
{from:30, to:33, value: 2.429, title :' 0.296'}, 
{from:31, to:32, value: 1.035, title :' 0.012'}, 
{from:34, to:35, value: 1.038, title :' 0.012'}, 
{from:34, to:38, value: 1.050, title :' 0.016'}, 
{from:34, to:40, value: 1.088, title :' 0.028'}, 
{from:34, to:41, value: 1.040, title :' 0.013'}, 
{from:35, to:39, value: 1.039, title :' 0.013'}, 
{from:35, to:40, value: 1.036, title :' 0.012'}, 
{from:35, to:41, value: 1.036, title :' 0.012'}, 
{from:36, to:38, value: 1.422, title :' 0.117'}, 
{from:36, to:41, value: 1.097, title :' 0.031'}, 
{from:36, to:46, value: 1.041, title :' 0.013'}, 
{from:36, to:48, value: 1.053, title :' 0.017'}, 
{from:36, to:50, value: 1.044, title :' 0.014'}, 
{from:38, to:42, value: 1.081, title :' 0.026'}, 
{from:39, to:43, value: 1.041, title :' 0.013'}, 
{from:39, to:48, value: 1.041, title :' 0.013'}, 
{from:40, to:41, value: 1.056, title :' 0.018'}, 
{from:40, to:42, value: 1.080, title :' 0.026'}, 
{from:40, to:51, value: 1.036, title :' 0.012'}, 
{from:41, to:42, value: 1.540, title :' 0.144'}, 
{from:42, to:55, value: 1.036, title :' 0.012'}, 
{from:44, to:45, value: 1.670, title :' 0.171'}, 
{from:44, to:48, value: 1.054, title :' 0.017'}, 
{from:44, to:51, value: 1.040, title :' 0.013'}, 
{from:45, to:52, value: 1.040, title :' 0.013'}, 
{from:45, to:53, value: 1.079, title :' 0.025'}, 
{from:46, to:47, value: 1.420, title :' 0.117'}, 
{from:46, to:51, value: 1.039, title :' 0.013'}, 
{from:48, to:53, value: 1.205, title :' 0.062'}, 
{from:50, to:57, value: 1.086, title :' 0.028'}, 
{from:50, to:58, value: 1.053, title :' 0.017'}, 
{from:51, to:55, value: 1.172, title :' 0.053'}, 
{from:52, to:57, value: 1.060, title :' 0.020'}, 
{from:52, to:58, value: 1.073, title :' 0.024'}, 
{from:55, to:60, value: 1.049, title :' 0.016'}, 
];
var seed240183_BSatlas61node_5dense = { nodes:nodes,edges:edges};