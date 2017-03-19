var nodes=[ 
{id:1, value:4, label:'  4565',  }, 
{id:2, value:3, label:'200917',  }, 
{id:3, value:3, label:'135381',  }, 
{id:4, value:3, label:' 69845',  }, 
{id:5, value:3, label:' 70101',  }, 
{id:6, value:3, label:'201173',  }, 
{id:7, value:2, label:'135637',  }, 
{id:8, value:3, label:'  4309',  }, 
{id:9, value:3, label:' 86993',  }, 
{id:10, value:3, label:'217809',  }, 
{id:11, value:3, label:'218065',  }, 
{id:12, value:4, label:'217297',  }, 
{id:13, value:3, label:' 86225',  }, 
{id:14, value:3, label:' 86481',  }, 
{id:15, value:2, label:' 86737',  }, 
{id:16, value:4, label:'217553',  }, 
{id:17, value:8, label:'218837',  }, 
{id:18, value:11, label:'217301',  }, 
{id:19, value:5, label:' 87765',  }, 
{id:20, value:40, label:'217300', color:'green' }, 
{id:21, value:8, label:'217813',  }, 
{id:22, value:9, label:'217812',  }, 
{id:23, value:8, label:'217556',  }, 
{id:24, value:9, label:' 86485',  }, 
{id:25, value:7, label:' 88021',  }, 
{id:26, value:9, label:' 86741',  }, 
{id:27, value:9, label:' 86229',  }, 
{id:28, value:7, label:'152276',  }, 
{id:29, value:7, label:' 86484',  }, 
{id:30, value:8, label:' 86740',  }, 
{id:31, value:6, label:'151764',  }, 
{id:32, value:8, label:' 86997',  }, 
{id:33, value:8, label:'218069',  }, 
{id:34, value:6, label:' 20948',  }, 
{id:35, value:7, label:' 86228',  }, 
{id:36, value:7, label:'217557',  }, 
{id:37, value:7, label:' 21460',  }, 
{id:38, value:7, label:' 20692',  }, 
{id:39, value:7, label:' 86996',  }, 
{id:40, value:6, label:' 87764',  }, 
{id:41, value:7, label:' 21204',  }, 
{id:42, value:7, label:' 20693',  }, 
{id:43, value:6, label:'218068',  }, 
{id:44, value:6, label:' 21205',  }, 
{id:45, value:5, label:'152277',  }, 
{id:46, value:6, label:' 21461',  }, 
{id:47, value:5, label:'152532',  }, 
{id:48, value:2, label:'152020',  }, 
{id:49, value:2, label:'152533',  }, 
{id:50, value:2, label:'217169',  }, 
{id:51, value:2, label:'151765',  }, 
{id:52, value:1, label:' 86097',  }, 
{id:53, value:1, label:' 88020',  }, 
{id:54, value:1, label:'218836',  }, 
{id:55, value:2, label:' 87253',  }, 
{id:56, value:2, label:' 20949',  }, 
{id:57, value:1, label:' 87509',  }, 
{id:58, value:1, label:'218325',  }, 
{id:59, value:1, label:' 87252',  }, 
{id:60, value:1, label:'219093',  }, 
{id:61, value:100, label:'  6152',color:'orange'}, 
];
var edges=[ 
{from:1, to:3, value: 1.862, title :' 0.207'}, 
{from:1, to:7, value: 5.026, title :' 0.538'}, 
{from:1, to:8, value: 3.153, title :' 0.383'}, 
{from:1, to:40, value: 1.035, title :' 0.012'}, 
{from:2, to:4, value: 4.608, title :' 0.509'}, 
{from:2, to:5, value: 1.795, title :' 0.195'}, 
{from:2, to:6, value: 3.395, title :' 0.407'}, 
{from:3, to:7, value: 3.150, title :' 0.382'}, 
{from:3, to:8, value: 4.635, title :' 0.511'}, 
{from:4, to:5, value: 3.344, title :' 0.402'}, 
{from:4, to:6, value: 1.723, title :' 0.181'}, 
{from:5, to:6, value: 4.379, title :' 0.492'}, 
{from:8, to:17, value: 1.036, title :' 0.012'}, 
{from:9, to:10, value: 1.590, title :' 0.155'}, 
{from:9, to:11, value: 2.562, title :' 0.314'}, 
{from:9, to:15, value: 3.618, title :' 0.429'}, 
{from:10, to:11, value: 3.589, title :' 0.426'}, 
{from:10, to:15, value: 2.531, title :' 0.310'}, 
{from:11, to:22, value: 1.042, title :' 0.014'}, 
{from:12, to:13, value: 1.939, title :' 0.221'}, 
{from:12, to:14, value: 1.339, title :' 0.097'}, 
{from:12, to:16, value: 3.396, title :' 0.408'}, 
{from:12, to:50, value: 1.067, title :' 0.022'}, 
{from:13, to:14, value: 3.634, title :' 0.430'}, 
{from:13, to:16, value: 1.326, title :' 0.094'}, 
{from:14, to:16, value: 1.885, title :' 0.211'}, 
{from:16, to:38, value: 1.036, title :' 0.012'}, 
{from:17, to:19, value: 1.300, title :' 0.087'}, 
{from:17, to:25, value: 1.035, title :' 0.011'}, 
{from:17, to:40, value: 1.037, title :' 0.012'}, 
{from:17, to:47, value: 1.039, title :' 0.013'}, 
{from:17, to:54, value: 1.938, title :' 0.221'}, 
{from:17, to:58, value: 1.560, title :' 0.148'}, 
{from:17, to:60, value: 1.203, title :' 0.062'}, 
{from:18, to:20, value: 1.408, title :' 0.114'}, 
{from:18, to:21, value: 1.300, title :' 0.087'}, 
{from:18, to:22, value: 1.078, title :' 0.025'}, 
{from:18, to:23, value: 1.057, title :' 0.018'}, 
{from:18, to:24, value: 1.047, title :' 0.015'}, 
{from:18, to:26, value: 1.053, title :' 0.017'}, 
{from:18, to:27, value: 1.594, title :' 0.155'}, 
{from:18, to:32, value: 1.037, title :' 0.012'}, 
{from:18, to:33, value: 1.040, title :' 0.013'}, 
{from:18, to:35, value: 1.049, title :' 0.016'}, 
{from:18, to:36, value: 1.287, title :' 0.084'}, 
{from:19, to:25, value: 1.233, title :' 0.070'}, 
{from:19, to:26, value: 1.034, title :' 0.011'}, 
{from:19, to:40, value: 1.961, title :' 0.225'}, 
{from:19, to:55, value: 1.614, title :' 0.160'}, 
{from:20, to:21, value: 1.057, title :' 0.019'}, 
{from:20, to:22, value: 1.294, title :' 0.086'}, 
{from:20, to:23, value: 1.265, title :' 0.078'}, 
{from:20, to:24, value: 1.042, title :' 0.014'}, 
{from:20, to:27, value: 1.049, title :' 0.016'}, 
{from:20, to:29, value: 1.057, title :' 0.019'}, 
{from:20, to:30, value: 1.070, title :' 0.023'}, 
{from:20, to:35, value: 1.641, title :' 0.165'}, 
{from:20, to:43, value: 1.049, title :' 0.016'}, 
{from:21, to:22, value: 1.493, title :' 0.134'}, 
{from:21, to:26, value: 1.704, title :' 0.178'}, 
{from:21, to:30, value: 1.077, title :' 0.025'}, 
{from:21, to:32, value: 1.044, title :' 0.014'}, 
{from:21, to:33, value: 1.207, title :' 0.063'}, 
{from:21, to:36, value: 1.037, title :' 0.012'}, 
{from:22, to:26, value: 1.068, title :' 0.022'}, 
{from:22, to:30, value: 1.659, title :' 0.169'}, 
{from:22, to:39, value: 1.045, title :' 0.015'}, 
{from:22, to:43, value: 1.173, title :' 0.053'}, 
{from:22, to:44, value: 1.035, title :' 0.012'}, 
{from:23, to:24, value: 1.060, title :' 0.019'}, 
{from:23, to:29, value: 1.669, title :' 0.171'}, 
{from:23, to:35, value: 1.043, title :' 0.014'}, 
{from:23, to:36, value: 1.465, title :' 0.127'}, 
{from:23, to:39, value: 1.038, title :' 0.012'}, 
{from:23, to:43, value: 1.288, title :' 0.084'}, 
{from:24, to:26, value: 1.039, title :' 0.013'}, 
{from:24, to:27, value: 1.294, title :' 0.086'}, 
{from:24, to:29, value: 1.464, title :' 0.127'}, 
{from:24, to:32, value: 1.317, title :' 0.092'}, 
{from:24, to:35, value: 1.051, title :' 0.016'}, 
{from:24, to:36, value: 1.504, title :' 0.136'}, 
{from:25, to:30, value: 1.037, title :' 0.012'}, 
{from:25, to:33, value: 1.038, title :' 0.013'}, 
{from:25, to:40, value: 1.062, title :' 0.020'}, 
{from:25, to:53, value: 1.980, title :' 0.228'}, 
{from:25, to:57, value: 1.634, title :' 0.164'}, 
{from:26, to:27, value: 1.230, title :' 0.069'}, 
{from:26, to:30, value: 1.416, title :' 0.116'}, 
{from:26, to:32, value: 1.210, title :' 0.064'}, 
{from:26, to:33, value: 1.069, title :' 0.022'}, 
{from:27, to:29, value: 1.056, title :' 0.018'}, 
{from:27, to:30, value: 1.044, title :' 0.014'}, 
{from:27, to:32, value: 1.051, title :' 0.017'}, 
{from:27, to:35, value: 1.432, title :' 0.120'}, 
{from:27, to:36, value: 1.050, title :' 0.016'}, 
{from:28, to:31, value: 1.131, title :' 0.041'}, 
{from:28, to:37, value: 1.080, title :' 0.026'}, 
{from:28, to:38, value: 1.042, title :' 0.014'}, 
{from:28, to:41, value: 1.845, title :' 0.204'}, 
{from:28, to:44, value: 1.049, title :' 0.016'}, 
{from:28, to:45, value: 1.304, title :' 0.088'}, 
{from:28, to:47, value: 1.431, title :' 0.120'}, 
{from:29, to:35, value: 1.270, title :' 0.080'}, 
{from:29, to:36, value: 1.054, title :' 0.017'}, 
{from:29, to:39, value: 1.252, title :' 0.075'}, 
{from:30, to:35, value: 1.256, title :' 0.076'}, 
{from:30, to:39, value: 1.241, title :' 0.072'}, 
{from:31, to:34, value: 1.089, title :' 0.029'}, 
{from:31, to:38, value: 1.931, title :' 0.219'}, 
{from:31, to:42, value: 1.041, title :' 0.014'}, 
{from:31, to:48, value: 1.514, title :' 0.138'}, 
{from:31, to:51, value: 1.210, title :' 0.064'}, 
{from:32, to:33, value: 1.563, title :' 0.149'}, 
{from:32, to:39, value: 1.446, title :' 0.123'}, 
{from:32, to:43, value: 1.073, title :' 0.023'}, 
{from:33, to:36, value: 1.322, title :' 0.093'}, 
{from:33, to:39, value: 1.080, title :' 0.026'}, 
{from:33, to:43, value: 1.412, title :' 0.115'}, 
{from:34, to:37, value: 1.123, title :' 0.039'}, 
{from:34, to:38, value: 1.518, title :' 0.139'}, 
{from:34, to:42, value: 1.041, title :' 0.013'}, 
{from:34, to:48, value: 1.911, title :' 0.216'}, 
{from:34, to:56, value: 1.184, title :' 0.056'}, 
{from:37, to:38, value: 1.035, title :' 0.012'}, 
{from:37, to:41, value: 1.399, title :' 0.112'}, 
{from:37, to:42, value: 1.038, title :' 0.012'}, 
{from:37, to:46, value: 1.241, title :' 0.072'}, 
{from:37, to:47, value: 1.827, title :' 0.201'}, 
{from:38, to:41, value: 1.077, title :' 0.025'}, 
{from:38, to:42, value: 1.137, title :' 0.043'}, 
{from:39, to:43, value: 1.518, title :' 0.139'}, 
{from:40, to:55, value: 1.127, title :' 0.040'}, 
{from:40, to:59, value: 1.550, title :' 0.146'}, 
{from:41, to:44, value: 1.182, title :' 0.056'}, 
{from:41, to:45, value: 1.062, title :' 0.020'}, 
{from:41, to:46, value: 1.053, title :' 0.017'}, 
{from:41, to:47, value: 1.063, title :' 0.020'}, 
{from:42, to:44, value: 1.154, title :' 0.048'}, 
{from:42, to:51, value: 1.746, title :' 0.186'}, 
{from:42, to:56, value: 1.481, title :' 0.131'}, 
{from:44, to:45, value: 1.658, title :' 0.169'}, 
{from:44, to:46, value: 1.421, title :' 0.117'}, 
{from:45, to:46, value: 1.089, title :' 0.029'}, 
{from:45, to:49, value: 1.393, title :' 0.111'}, 
{from:46, to:47, value: 1.052, title :' 0.017'}, 
{from:46, to:49, value: 1.599, title :' 0.157'}, 
{from:50, to:52, value: 2.010, title :' 0.233'}, 
];
var seed218838_BSatlas61node_0dense = { nodes:nodes,edges:edges};