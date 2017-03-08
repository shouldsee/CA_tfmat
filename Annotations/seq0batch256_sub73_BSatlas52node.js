var nodes=[ 
{id:1, value:35, label:' 36399',  }, 
{id:2, value:31, label:' 36799',  }, 
{id:3, value:27, label:' 36527',  }, 
{id:4, value:24, label:' 36783',  }, 
{id:5, value:5, label:'111421',  }, 
{id:6, value:6, label:'111420',  }, 
{id:7, value:7, label:'111423',  }, 
{id:8, value:6, label:'110909',  }, 
{id:9, value:5, label:'110910',  }, 
{id:10, value:5, label:'111422',  }, 
{id:11, value:34, label:'110911', color:'green' }, 
{id:12, value:4, label:'110908',  }, 
{id:13, value:10, label:' 36159',  }, 
{id:14, value:16, label:' 36015',  }, 
{id:15, value:10, label:' 36415',  }, 
{id:16, value:6, label:' 36655',  }, 
{id:17, value:8, label:' 36671',  }, 
{id:18, value:8, label:' 35903',  }, 
{id:19, value:14, label:' 36271',  }, 
{id:20, value:14, label:' 36143',  }, 
{id:21, value:6, label:'  3375',  }, 
{id:22, value:7, label:'  3391',  }, 
{id:23, value:3, label:' 36287',  }, 
{id:24, value:7, label:' 36158',  }, 
{id:25, value:4, label:'  3247',  }, 
{id:26, value:7, label:' 40255',  }, 
{id:27, value:5, label:'  3503',  }, 
{id:28, value:6, label:' 35887',  }, 
{id:29, value:3, label:'  4015',  }, 
{id:30, value:4, label:' 35902',  }, 
{id:31, value:6, label:' 36127',  }, 
{id:32, value:4, label:' 36670',  }, 
{id:33, value:5, label:' 36239',  }, 
{id:34, value:6, label:' 36111',  }, 
{id:35, value:6, label:' 44351',  }, 
{id:36, value:5, label:' 40239',  }, 
{id:37, value:4, label:' 35983',  }, 
{id:38, value:33, label:' 36414', color:'green' }, 
{id:39, value:2, label:'  3759',  }, 
{id:40, value:3, label:' 36751',  }, 
{id:41, value:4, label:' 40111',  }, 
{id:42, value:3, label:' 36798',  }, 
{id:43, value:2, label:' 36495',  }, 
{id:44, value:2, label:' 40623',  }, 
{id:45, value:3, label:' 40879',  }, 
{id:46, value:1, label:'  4031',  }, 
{id:47, value:1, label:' 36767',  }, 
{id:48, value:2, label:' 36543',  }, 
{id:49, value:1, label:' 40895',  }, 
{id:50, value:1, label:'170135',  }, 
{id:51, value:31, label:'170391', color:'green' }, 
{id:52, value:100, label:'  6152',color:'orange'}, 
];
var edges=[ 
{from:1, to:2, value: 1.128, title :' 0.040'}, 
{from:1, to:3, value: 1.240, title :' 0.072'}, 
{from:1, to:4, value: 1.239, title :' 0.072'}, 
{from:1, to:13, value: 1.193, title :' 0.059'}, 
{from:1, to:14, value: 1.153, title :' 0.047'}, 
{from:1, to:15, value: 1.278, title :' 0.082'}, 
{from:1, to:16, value: 4.184, title :' 0.477'}, 
{from:1, to:17, value: 1.230, title :' 0.069'}, 
{from:1, to:18, value: 1.203, title :' 0.062'}, 
{from:1, to:19, value: 1.149, title :' 0.046'}, 
{from:1, to:20, value: 1.386, title :' 0.109'}, 
{from:1, to:21, value: 1.520, title :' 0.140'}, 
{from:1, to:22, value: 1.406, title :' 0.114'}, 
{from:1, to:23, value: 1.095, title :' 0.030'}, 
{from:1, to:25, value: 1.549, title :' 0.146'}, 
{from:1, to:26, value: 1.458, title :' 0.126'}, 
{from:1, to:27, value: 1.446, title :' 0.123'}, 
{from:1, to:28, value: 1.523, title :' 0.140'}, 
{from:1, to:29, value: 1.541, title :' 0.144'}, 
{from:1, to:31, value: 1.318, title :' 0.092'}, 
{from:1, to:33, value: 1.386, title :' 0.109'}, 
{from:1, to:34, value: 1.302, title :' 0.088'}, 
{from:1, to:35, value: 1.230, title :' 0.069'}, 
{from:1, to:36, value: 1.326, title :' 0.094'}, 
{from:1, to:37, value: 1.314, title :' 0.091'}, 
{from:1, to:39, value: 1.480, title :' 0.131'}, 
{from:1, to:40, value: 1.294, title :' 0.086'}, 
{from:1, to:41, value: 1.253, title :' 0.075'}, 
{from:1, to:43, value: 1.235, title :' 0.070'}, 
{from:1, to:44, value: 1.240, title :' 0.072'}, 
{from:1, to:45, value: 1.122, title :' 0.038'}, 
{from:1, to:46, value: 1.430, title :' 0.119'}, 
{from:1, to:47, value: 1.346, title :' 0.099'}, 
{from:1, to:48, value: 1.116, title :' 0.037'}, 
{from:1, to:49, value: 1.250, title :' 0.074'}, 
{from:2, to:3, value: 1.079, title :' 0.025'}, 
{from:2, to:4, value: 1.085, title :' 0.027'}, 
{from:2, to:13, value: 1.397, title :' 0.112'}, 
{from:2, to:14, value: 1.087, title :' 0.028'}, 
{from:2, to:15, value: 1.486, title :' 0.132'}, 
{from:2, to:16, value: 1.150, title :' 0.047'}, 
{from:2, to:17, value: 1.505, title :' 0.136'}, 
{from:2, to:18, value: 1.412, title :' 0.115'}, 
{from:2, to:20, value: 1.077, title :' 0.025'}, 
{from:2, to:21, value: 1.356, title :' 0.102'}, 
{from:2, to:22, value: 1.272, title :' 0.080'}, 
{from:2, to:23, value: 3.282, title :' 0.396'}, 
{from:2, to:25, value: 1.441, title :' 0.122'}, 
{from:2, to:26, value: 1.260, title :' 0.077'}, 
{from:2, to:27, value: 1.317, title :' 0.092'}, 
{from:2, to:28, value: 1.125, title :' 0.039'}, 
{from:2, to:29, value: 1.330, title :' 0.095'}, 
{from:2, to:31, value: 1.243, title :' 0.073'}, 
{from:2, to:33, value: 1.195, title :' 0.059'}, 
{from:2, to:34, value: 1.183, title :' 0.056'}, 
{from:2, to:35, value: 1.280, title :' 0.082'}, 
{from:2, to:36, value: 1.136, title :' 0.043'}, 
{from:2, to:37, value: 1.143, title :' 0.045'}, 
{from:2, to:39, value: 1.339, title :' 0.097'}, 
{from:2, to:40, value: 1.228, title :' 0.069'}, 
{from:2, to:41, value: 1.150, title :' 0.046'}, 
{from:2, to:42, value: 1.189, title :' 0.058'}, 
{from:2, to:43, value: 1.190, title :' 0.058'}, 
{from:2, to:44, value: 1.165, title :' 0.051'}, 
{from:2, to:45, value: 1.085, title :' 0.027'}, 
{from:3, to:4, value: 3.679, title :' 0.434'}, 
{from:3, to:13, value: 1.128, title :' 0.040'}, 
{from:3, to:14, value: 1.330, title :' 0.095'}, 
{from:3, to:15, value: 1.119, title :' 0.038'}, 
{from:3, to:16, value: 1.286, title :' 0.084'}, 
{from:3, to:17, value: 1.160, title :' 0.050'}, 
{from:3, to:18, value: 1.115, title :' 0.036'}, 
{from:3, to:19, value: 1.183, title :' 0.056'}, 
{from:3, to:20, value: 1.124, title :' 0.039'}, 
{from:3, to:21, value: 1.327, title :' 0.094'}, 
{from:3, to:22, value: 1.256, title :' 0.076'}, 
{from:3, to:25, value: 1.365, title :' 0.104'}, 
{from:3, to:26, value: 1.200, title :' 0.061'}, 
{from:3, to:27, value: 1.244, title :' 0.073'}, 
{from:3, to:28, value: 1.199, title :' 0.061'}, 
{from:3, to:29, value: 1.392, title :' 0.110'}, 
{from:3, to:31, value: 1.132, title :' 0.041'}, 
{from:3, to:33, value: 1.199, title :' 0.060'}, 
{from:3, to:34, value: 1.179, title :' 0.055'}, 
{from:3, to:35, value: 1.117, title :' 0.037'}, 
{from:3, to:36, value: 1.181, title :' 0.056'}, 
{from:3, to:37, value: 1.158, title :' 0.049'}, 
{from:3, to:40, value: 1.170, title :' 0.052'}, 
{from:3, to:41, value: 1.119, title :' 0.038'}, 
{from:3, to:45, value: 1.181, title :' 0.056'}, 
{from:4, to:13, value: 1.098, title :' 0.031'}, 
{from:4, to:14, value: 1.241, title :' 0.072'}, 
{from:4, to:15, value: 1.109, title :' 0.034'}, 
{from:4, to:16, value: 1.322, title :' 0.093'}, 
{from:4, to:17, value: 1.134, title :' 0.042'}, 
{from:4, to:18, value: 1.144, title :' 0.045'}, 
{from:4, to:19, value: 1.198, title :' 0.060'}, 
{from:4, to:20, value: 1.177, title :' 0.054'}, 
{from:4, to:21, value: 1.254, title :' 0.076'}, 
{from:4, to:22, value: 1.257, title :' 0.076'}, 
{from:4, to:25, value: 1.276, title :' 0.081'}, 
{from:4, to:26, value: 1.186, title :' 0.057'}, 
{from:4, to:27, value: 1.257, title :' 0.076'}, 
{from:4, to:28, value: 1.171, title :' 0.053'}, 
{from:4, to:31, value: 1.151, title :' 0.047'}, 
{from:4, to:33, value: 1.198, title :' 0.060'}, 
{from:4, to:34, value: 1.139, title :' 0.043'}, 
{from:4, to:35, value: 1.161, title :' 0.050'}, 
{from:4, to:36, value: 1.169, title :' 0.052'}, 
{from:4, to:37, value: 1.231, title :' 0.069'}, 
{from:4, to:41, value: 1.129, title :' 0.041'}, 
{from:5, to:6, value: 5.039, title :' 0.539'}, 
{from:5, to:7, value: 1.121, title :' 0.038'}, 
{from:5, to:8, value: 6.010, title :' 0.598'}, 
{from:5, to:10, value: 1.084, title :' 0.027'}, 
{from:5, to:12, value: 2.598, title :' 0.318'}, 
{from:6, to:7, value: 1.100, title :' 0.032'}, 
{from:6, to:8, value: 2.629, title :' 0.322'}, 
{from:6, to:9, value: 1.077, title :' 0.025'}, 
{from:6, to:10, value: 1.099, title :' 0.031'}, 
{from:6, to:12, value: 5.496, title :' 0.568'}, 
{from:7, to:8, value: 1.087, title :' 0.028'}, 
{from:7, to:9, value: 2.459, title :' 0.300'}, 
{from:7, to:10, value: 4.682, title :' 0.515'}, 
{from:7, to:11, value: 5.416, title :' 0.563'}, 
{from:7, to:12, value: 1.084, title :' 0.027'}, 
{from:8, to:9, value: 1.090, title :' 0.029'}, 
{from:8, to:11, value: 1.091, title :' 0.029'}, 
{from:8, to:12, value: 4.090, title :' 0.470'}, 
{from:9, to:10, value: 5.362, title :' 0.560'}, 
{from:9, to:11, value: 4.978, title :' 0.535'}, 
{from:10, to:11, value: 2.472, title :' 0.302'}, 
{from:13, to:15, value: 2.359, title :' 0.286'}, 
{from:13, to:17, value: 2.981, title :' 0.364'}, 
{from:13, to:18, value: 2.727, title :' 0.334'}, 
{from:13, to:20, value: 1.082, title :' 0.026'}, 
{from:13, to:24, value: 1.184, title :' 0.056'}, 
{from:13, to:38, value: 1.136, title :' 0.042'}, 
{from:14, to:16, value: 1.153, title :' 0.048'}, 
{from:14, to:19, value: 1.701, title :' 0.177'}, 
{from:14, to:20, value: 1.108, title :' 0.034'}, 
{from:14, to:21, value: 1.143, title :' 0.045'}, 
{from:14, to:22, value: 1.118, title :' 0.037'}, 
{from:14, to:26, value: 1.078, title :' 0.025'}, 
{from:14, to:27, value: 1.160, title :' 0.049'}, 
{from:14, to:28, value: 1.163, title :' 0.050'}, 
{from:14, to:31, value: 1.095, title :' 0.030'}, 
{from:14, to:33, value: 1.110, title :' 0.035'}, 
{from:14, to:34, value: 1.135, title :' 0.042'}, 
{from:14, to:35, value: 1.096, title :' 0.031'}, 
{from:15, to:19, value: 1.121, title :' 0.038'}, 
{from:15, to:20, value: 1.141, title :' 0.044'}, 
{from:15, to:24, value: 1.143, title :' 0.044'}, 
{from:15, to:30, value: 1.193, title :' 0.059'}, 
{from:15, to:32, value: 1.251, title :' 0.075'}, 
{from:16, to:19, value: 1.117, title :' 0.037'}, 
{from:17, to:19, value: 1.088, title :' 0.028'}, 
{from:17, to:20, value: 1.174, title :' 0.054'}, 
{from:17, to:24, value: 1.114, title :' 0.036'}, 
{from:18, to:20, value: 1.076, title :' 0.025'}, 
{from:18, to:24, value: 1.130, title :' 0.041'}, 
{from:18, to:32, value: 1.155, title :' 0.048'}, 
{from:19, to:20, value: 1.105, title :' 0.033'}, 
{from:19, to:21, value: 1.168, title :' 0.052'}, 
{from:19, to:22, value: 1.110, title :' 0.035'}, 
{from:19, to:26, value: 1.073, title :' 0.024'}, 
{from:19, to:28, value: 1.115, title :' 0.036'}, 
{from:19, to:34, value: 1.090, title :' 0.029'}, 
{from:19, to:36, value: 1.078, title :' 0.025'}, 
{from:20, to:22, value: 1.208, title :' 0.063'}, 
{from:20, to:26, value: 1.224, title :' 0.067'}, 
{from:20, to:31, value: 1.155, title :' 0.048'}, 
{from:20, to:35, value: 1.132, title :' 0.041'}, 
{from:23, to:42, value: 1.152, title :' 0.047'}, 
{from:24, to:30, value: 1.244, title :' 0.073'}, 
{from:24, to:32, value: 1.621, title :' 0.161'}, 
{from:24, to:38, value: 1.153, title :' 0.048'}, 
{from:30, to:32, value: 1.140, title :' 0.044'}, 
{from:30, to:38, value: 1.627, title :' 0.162'}, 
{from:42, to:48, value: 1.131, title :' 0.041'}, 
{from:50, to:51, value: 1.182, title :' 0.056'}, 
];
var seq0batch256_sub73_BSatlas52node = { nodes:nodes,edges:edges};