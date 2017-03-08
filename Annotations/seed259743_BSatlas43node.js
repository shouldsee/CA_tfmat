var nodes=[ 
{id:1, value:9, label:'194207',  }, 
{id:2, value:14, label:'189596',  }, 
{id:3, value:13, label:'189087',  }, 
{id:4, value:11, label:'189598',  }, 
{id:5, value:12, label:'189086',  }, 
{id:6, value:11, label:'188574',  }, 
{id:7, value:43, label:'190109', color:'green' }, 
{id:8, value:12, label:'189597',  }, 
{id:9, value:10, label:'190110',  }, 
{id:10, value:12, label:'189599',  }, 
{id:11, value:11, label:'188575',  }, 
{id:12, value:11, label:'190108',  }, 
{id:13, value:10, label:'190111',  }, 
{id:14, value:12, label:'188573',  }, 
{id:15, value:11, label:'189084',  }, 
{id:16, value:11, label:'189085',  }, 
{id:17, value:11, label:'188572',  }, 
{id:18, value:10, label:'196254',  }, 
{id:19, value:5, label:'194206',  }, 
{id:20, value:7, label:'193694',  }, 
{id:21, value:9, label:'194204',  }, 
{id:22, value:4, label:' 59037',  }, 
{id:23, value:5, label:' 58524',  }, 
{id:24, value:4, label:' 58525',  }, 
{id:25, value:4, label:' 59036',  }, 
{id:26, value:4, label:' 59039',  }, 
{id:27, value:2, label:' 58527',  }, 
{id:28, value:1, label:'193695',  }, 
{id:29, value:1, label:'193692',  }, 
{id:30, value:1, label:'195742',  }, 
{id:31, value:1, label:'196255',  }, 
{id:32, value:6, label:'194078', color:'red' }, 
{id:33, value:4, label:' 58526',  }, 
{id:34, value:5, label:'193182',  }, 
{id:35, value:1, label:' 59038',  }, 
{id:36, value:1, label:'259742', color:'red' }, 
{id:37, value:4, label:'194190', color:'red' }, 
{id:38, value:1, label:'196252',  }, 
{id:39, value:1, label:'194205',  }, 
{id:40, value:1, label:'195230',  }, 
{id:41, value:1, label:'192670',  }, 
{id:42, value:1, label:'193180',  }, 
{id:43, value:100, label:'  6152',color:'orange'}, 
];
var edges=[ 
{from:1, to:18, value: 1.050, title :' 0.016'}, 
{from:1, to:19, value: 7.384, title :' 0.666'}, 
{from:1, to:20, value: 4.449, title :' 0.498'}, 
{from:1, to:21, value: 1.539, title :' 0.144'}, 
{from:1, to:28, value: 8.534, title :' 0.715'}, 
{from:1, to:32, value: 1.149, title :' 0.046'}, 
{from:1, to:34, value: 1.241, title :' 0.072'}, 
{from:1, to:37, value: 1.073, title :' 0.023'}, 
{from:1, to:39, value: 1.535, title :' 0.143'}, 
{from:2, to:3, value: 1.041, title :' 0.014'}, 
{from:2, to:4, value: 1.203, title :' 0.062'}, 
{from:2, to:5, value: 1.049, title :' 0.016'}, 
{from:2, to:7, value: 3.282, title :' 0.396'}, 
{from:2, to:8, value: 5.637, title :' 0.576'}, 
{from:2, to:9, value: 1.182, title :' 0.056'}, 
{from:2, to:10, value: 1.183, title :' 0.056'}, 
{from:2, to:12, value: 6.914, title :' 0.645'}, 
{from:2, to:13, value: 1.177, title :' 0.054'}, 
{from:2, to:14, value: 1.093, title :' 0.030'}, 
{from:2, to:15, value: 1.067, title :' 0.022'}, 
{from:2, to:16, value: 1.036, title :' 0.012'}, 
{from:2, to:17, value: 1.087, title :' 0.028'}, 
{from:2, to:23, value: 1.039, title :' 0.013'}, 
{from:3, to:4, value: 1.049, title :' 0.016'}, 
{from:3, to:5, value: 6.438, title :' 0.621'}, 
{from:3, to:6, value: 3.520, title :' 0.419'}, 
{from:3, to:8, value: 1.035, title :' 0.012'}, 
{from:3, to:9, value: 1.044, title :' 0.014'}, 
{from:3, to:10, value: 1.052, title :' 0.017'}, 
{from:3, to:11, value: 7.118, title :' 0.654'}, 
{from:3, to:13, value: 1.077, title :' 0.025'}, 
{from:3, to:14, value: 1.110, title :' 0.035'}, 
{from:3, to:15, value: 1.163, title :' 0.050'}, 
{from:3, to:16, value: 1.176, title :' 0.054'}, 
{from:3, to:17, value: 1.123, title :' 0.039'}, 
{from:4, to:5, value: 1.079, title :' 0.025'}, 
{from:4, to:6, value: 1.103, title :' 0.033'}, 
{from:4, to:7, value: 1.163, title :' 0.050'}, 
{from:4, to:8, value: 1.181, title :' 0.055'}, 
{from:4, to:9, value: 7.404, title :' 0.667'}, 
{from:4, to:10, value: 5.780, title :' 0.585'}, 
{from:4, to:11, value: 1.062, title :' 0.020'}, 
{from:4, to:12, value: 1.147, title :' 0.046'}, 
{from:4, to:13, value: 3.342, title :' 0.402'}, 
{from:5, to:6, value: 6.947, title :' 0.646'}, 
{from:5, to:9, value: 1.084, title :' 0.027'}, 
{from:5, to:10, value: 1.049, title :' 0.016'}, 
{from:5, to:11, value: 3.368, title :' 0.405'}, 
{from:5, to:13, value: 1.048, title :' 0.016'}, 
{from:5, to:14, value: 1.116, title :' 0.037'}, 
{from:5, to:15, value: 1.203, title :' 0.062'}, 
{from:5, to:16, value: 1.160, title :' 0.050'}, 
{from:5, to:17, value: 1.116, title :' 0.037'}, 
{from:6, to:7, value: 1.044, title :' 0.014'}, 
{from:6, to:9, value: 1.081, title :' 0.026'}, 
{from:6, to:10, value: 1.061, title :' 0.020'}, 
{from:6, to:11, value: 6.205, title :' 0.608'}, 
{from:6, to:14, value: 1.149, title :' 0.046'}, 
{from:6, to:15, value: 1.150, title :' 0.047'}, 
{from:6, to:16, value: 1.122, title :' 0.038'}, 
{from:6, to:17, value: 1.184, title :' 0.056'}, 
{from:7, to:8, value: 7.159, title :' 0.656'}, 
{from:7, to:9, value: 1.164, title :' 0.051'}, 
{from:7, to:10, value: 1.134, title :' 0.042'}, 
{from:7, to:11, value: 1.039, title :' 0.013'}, 
{from:7, to:12, value: 5.666, title :' 0.578'}, 
{from:7, to:13, value: 1.169, title :' 0.052'}, 
{from:7, to:14, value: 1.093, title :' 0.030'}, 
{from:7, to:15, value: 1.067, title :' 0.022'}, 
{from:7, to:16, value: 1.093, title :' 0.030'}, 
{from:7, to:17, value: 1.043, title :' 0.014'}, 
{from:8, to:9, value: 1.140, title :' 0.044'}, 
{from:8, to:10, value: 1.184, title :' 0.056'}, 
{from:8, to:12, value: 3.230, title :' 0.391'}, 
{from:8, to:13, value: 1.146, title :' 0.045'}, 
{from:8, to:14, value: 1.106, title :' 0.034'}, 
{from:8, to:15, value: 1.058, title :' 0.019'}, 
{from:8, to:16, value: 1.075, title :' 0.024'}, 
{from:8, to:17, value: 1.080, title :' 0.026'}, 
{from:9, to:10, value: 3.370, title :' 0.405'}, 
{from:9, to:12, value: 1.194, title :' 0.059'}, 
{from:9, to:13, value: 5.817, title :' 0.587'}, 
{from:10, to:11, value: 1.092, title :' 0.029'}, 
{from:10, to:12, value: 1.137, title :' 0.043'}, 
{from:10, to:13, value: 7.016, title :' 0.649'}, 
{from:10, to:14, value: 1.039, title :' 0.013'}, 
{from:11, to:13, value: 1.039, title :' 0.013'}, 
{from:11, to:14, value: 1.168, title :' 0.052'}, 
{from:11, to:15, value: 1.105, title :' 0.033'}, 
{from:11, to:16, value: 1.119, title :' 0.038'}, 
{from:11, to:17, value: 1.143, title :' 0.045'}, 
{from:12, to:13, value: 1.163, title :' 0.050'}, 
{from:12, to:14, value: 1.065, title :' 0.021'}, 
{from:12, to:15, value: 1.100, title :' 0.032'}, 
{from:12, to:16, value: 1.073, title :' 0.024'}, 
{from:12, to:17, value: 1.065, title :' 0.021'}, 
{from:14, to:15, value: 3.119, title :' 0.379'}, 
{from:14, to:16, value: 6.341, title :' 0.616'}, 
{from:14, to:17, value: 5.921, title :' 0.593'}, 
{from:15, to:16, value: 5.974, title :' 0.596'}, 
{from:15, to:17, value: 6.371, title :' 0.617'}, 
{from:16, to:17, value: 3.154, title :' 0.383'}, 
{from:18, to:19, value: 1.036, title :' 0.012'}, 
{from:18, to:20, value: 1.057, title :' 0.019'}, 
{from:18, to:21, value: 1.038, title :' 0.012'}, 
{from:18, to:30, value: 7.947, title :' 0.691'}, 
{from:18, to:31, value: 6.147, title :' 0.605'}, 
{from:18, to:32, value: 1.130, title :' 0.041'}, 
{from:18, to:37, value: 1.054, title :' 0.018'}, 
{from:18, to:38, value: 1.603, title :' 0.157'}, 
{from:18, to:40, value: 1.370, title :' 0.105'}, 
{from:19, to:20, value: 8.546, title :' 0.715'}, 
{from:19, to:21, value: 1.589, title :' 0.154'}, 
{from:19, to:34, value: 1.309, title :' 0.090'}, 
{from:20, to:21, value: 1.432, title :' 0.120'}, 
{from:20, to:32, value: 1.179, title :' 0.055'}, 
{from:20, to:34, value: 1.281, title :' 0.082'}, 
{from:20, to:41, value: 1.340, title :' 0.097'}, 
{from:21, to:29, value: 8.415, title :' 0.710'}, 
{from:21, to:32, value: 1.176, title :' 0.054'}, 
{from:21, to:34, value: 1.105, title :' 0.033'}, 
{from:21, to:37, value: 1.037, title :' 0.012'}, 
{from:21, to:42, value: 1.268, title :' 0.079'}, 
{from:22, to:23, value: 1.803, title :' 0.196'}, 
{from:22, to:24, value: 6.484, title :' 0.623'}, 
{from:22, to:25, value: 2.488, title :' 0.304'}, 
{from:22, to:26, value: 1.039, title :' 0.013'}, 
{from:23, to:24, value: 2.441, title :' 0.298'}, 
{from:23, to:25, value: 6.192, title :' 0.608'}, 
{from:23, to:33, value: 1.047, title :' 0.015'}, 
{from:24, to:25, value: 1.778, title :' 0.192'}, 
{from:24, to:33, value: 1.045, title :' 0.015'}, 
{from:25, to:34, value: 1.041, title :' 0.013'}, 
{from:26, to:27, value: 6.281, title :' 0.613'}, 
{from:26, to:33, value: 1.716, title :' 0.180'}, 
{from:26, to:35, value: 2.236, title :' 0.268'}, 
{from:27, to:33, value: 2.261, title :' 0.272'}, 
{from:32, to:36, value: 2.103, title :' 0.248'}, 
{from:32, to:37, value: 1.474, title :' 0.129'}, 
];
var seed259743_BSatlas43node = { nodes:nodes,edges:edges};