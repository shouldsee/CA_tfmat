var nodes=[ 
{id:1, value:11, label:'168530',  }, 
{id:2, value:10, label:'234066',  }, 
{id:3, value:11, label:'168658',  }, 
{id:4, value:9, label:'102994',  }, 
{id:5, value:10, label:' 37458',  }, 
{id:6, value:11, label:' 37586',  }, 
{id:7, value:12, label:' 37714',  }, 
{id:8, value:11, label:'168914',  }, 
{id:9, value:11, label:'168786',  }, 
{id:10, value:40, label:' 37842', color:'green' }, 
{id:11, value:9, label:'103250',  }, 
{id:12, value:9, label:'234322',  }, 
{id:13, value:10, label:'234194',  }, 
{id:14, value:9, label:'103122',  }, 
{id:15, value:9, label:'234450',  }, 
{id:16, value:10, label:'103378',  }, 
{id:17, value:14, label:'168432',  }, 
{id:18, value:6, label:'185331',  }, 
{id:19, value:6, label:'186354',  }, 
{id:20, value:11, label:' 37872',  }, 
{id:21, value:6, label:'185330',  }, 
{id:22, value:7, label:'168944', color:'red' }, 
{id:23, value:12, label:'168947',  }, 
{id:24, value:11, label:'168435',  }, 
{id:25, value:5, label:'184818',  }, 
{id:26, value:11, label:'168946',  }, 
{id:27, value:7, label:'185328',  }, 
{id:28, value:7, label:'168434',  }, 
{id:29, value:9, label:' 37875',  }, 
{id:30, value:12, label:'168945',  }, 
{id:31, value:11, label:' 37362',  }, 
{id:32, value:7, label:'168691',  }, 
{id:33, value:2, label:' 37360',  }, 
{id:34, value:8, label:'168179',  }, 
{id:35, value:10, label:'168178',  }, 
{id:36, value:8, label:' 37619',  }, 
{id:37, value:7, label:'168690',  }, 
{id:38, value:1, label:'186355',  }, 
{id:39, value:10, label:' 37618',  }, 
{id:40, value:8, label:' 37874',  }, 
{id:41, value:9, label:' 37107',  }, 
{id:42, value:3, label:' 37363',  }, 
{id:43, value:8, label:' 37106',  }, 
{id:44, value:2, label:'184816',  }, 
{id:45, value:1, label:'185842',  }, 
{id:46, value:1, label:'184819',  }, 
{id:47, value:3, label:'168433',  }, 
{id:48, value:1, label:'168176',  }, 
{id:49, value:6, label:'168177',  }, 
{id:50, value:1, label:' 37873',  }, 
{id:51, value:1, label:'168689',  }, 
{id:52, value:1, label:'186352',  }, 
{id:53, value:1, label:'185329',  }, 
{id:54, value:100, label:'  6152',color:'orange'}, 
];
var edges=[ 
{from:1, to:2, value: 1.213, title :' 0.064'}, 
{from:1, to:3, value: 1.066, title :' 0.021'}, 
{from:1, to:4, value: 1.175, title :' 0.054'}, 
{from:1, to:5, value: 6.473, title :' 0.623'}, 
{from:1, to:6, value: 1.042, title :' 0.014'}, 
{from:1, to:7, value: 3.073, title :' 0.374'}, 
{from:1, to:8, value: 1.053, title :' 0.017'}, 
{from:1, to:9, value: 6.389, title :' 0.618'}, 
{from:1, to:11, value: 1.117, title :' 0.037'}, 
{from:1, to:12, value: 1.114, title :' 0.036'}, 
{from:1, to:13, value: 1.043, title :' 0.014'}, 
{from:2, to:4, value: 6.558, title :' 0.627'}, 
{from:2, to:5, value: 1.176, title :' 0.054'}, 
{from:2, to:7, value: 1.130, title :' 0.041'}, 
{from:2, to:9, value: 1.117, title :' 0.037'}, 
{from:2, to:11, value: 3.211, title :' 0.389'}, 
{from:2, to:12, value: 6.314, title :' 0.614'}, 
{from:2, to:13, value: 1.035, title :' 0.012'}, 
{from:2, to:15, value: 1.052, title :' 0.017'}, 
{from:2, to:17, value: 1.047, title :' 0.015'}, 
{from:3, to:6, value: 6.577, title :' 0.628'}, 
{from:3, to:7, value: 1.038, title :' 0.012'}, 
{from:3, to:8, value: 6.148, title :' 0.605'}, 
{from:3, to:9, value: 1.057, title :' 0.018'}, 
{from:3, to:10, value: 3.087, title :' 0.376'}, 
{from:3, to:13, value: 1.227, title :' 0.068'}, 
{from:3, to:14, value: 1.181, title :' 0.055'}, 
{from:3, to:15, value: 1.137, title :' 0.043'}, 
{from:3, to:16, value: 1.087, title :' 0.028'}, 
{from:3, to:23, value: 1.041, title :' 0.013'}, 
{from:4, to:5, value: 1.196, title :' 0.060'}, 
{from:4, to:7, value: 1.127, title :' 0.040'}, 
{from:4, to:9, value: 1.123, title :' 0.039'}, 
{from:4, to:11, value: 6.529, title :' 0.625'}, 
{from:4, to:12, value: 3.163, title :' 0.384'}, 
{from:4, to:14, value: 1.066, title :' 0.021'}, 
{from:4, to:16, value: 1.057, title :' 0.018'}, 
{from:5, to:6, value: 1.049, title :' 0.016'}, 
{from:5, to:7, value: 6.615, title :' 0.630'}, 
{from:5, to:9, value: 3.103, title :' 0.377'}, 
{from:5, to:10, value: 1.039, title :' 0.013'}, 
{from:5, to:11, value: 1.114, title :' 0.036'}, 
{from:5, to:12, value: 1.123, title :' 0.039'}, 
{from:5, to:20, value: 1.043, title :' 0.014'}, 
{from:6, to:7, value: 1.046, title :' 0.015'}, 
{from:6, to:8, value: 3.119, title :' 0.379'}, 
{from:6, to:9, value: 1.035, title :' 0.011'}, 
{from:6, to:10, value: 6.254, title :' 0.611'}, 
{from:6, to:13, value: 1.182, title :' 0.056'}, 
{from:6, to:14, value: 1.194, title :' 0.059'}, 
{from:6, to:15, value: 1.101, title :' 0.032'}, 
{from:6, to:16, value: 1.128, title :' 0.040'}, 
{from:7, to:8, value: 1.035, title :' 0.012'}, 
{from:7, to:9, value: 6.064, title :' 0.601'}, 
{from:7, to:10, value: 1.062, title :' 0.020'}, 
{from:7, to:11, value: 1.148, title :' 0.046'}, 
{from:7, to:12, value: 1.174, title :' 0.054'}, 
{from:7, to:21, value: 1.038, title :' 0.012'}, 
{from:8, to:9, value: 1.069, title :' 0.022'}, 
{from:8, to:10, value: 6.664, title :' 0.632'}, 
{from:8, to:11, value: 1.040, title :' 0.013'}, 
{from:8, to:13, value: 1.131, title :' 0.041'}, 
{from:8, to:14, value: 1.104, title :' 0.033'}, 
{from:8, to:15, value: 1.198, title :' 0.060'}, 
{from:8, to:16, value: 1.123, title :' 0.039'}, 
{from:9, to:11, value: 1.187, title :' 0.057'}, 
{from:9, to:12, value: 1.181, title :' 0.056'}, 
{from:9, to:16, value: 1.046, title :' 0.015'}, 
{from:10, to:13, value: 1.125, title :' 0.039'}, 
{from:10, to:14, value: 1.116, title :' 0.037'}, 
{from:10, to:15, value: 1.151, title :' 0.047'}, 
{from:10, to:16, value: 1.180, title :' 0.055'}, 
{from:10, to:39, value: 1.046, title :' 0.015'}, 
{from:11, to:12, value: 6.346, title :' 0.616'}, 
{from:11, to:16, value: 1.076, title :' 0.024'}, 
{from:12, to:13, value: 1.050, title :' 0.016'}, 
{from:12, to:15, value: 1.066, title :' 0.021'}, 
{from:13, to:14, value: 6.483, title :' 0.623'}, 
{from:13, to:15, value: 5.426, title :' 0.564'}, 
{from:13, to:16, value: 2.953, title :' 0.361'}, 
{from:14, to:15, value: 3.010, title :' 0.367'}, 
{from:14, to:16, value: 5.476, title :' 0.567'}, 
{from:14, to:17, value: 1.036, title :' 0.012'}, 
{from:15, to:16, value: 5.913, title :' 0.592'}, 
{from:17, to:20, value: 2.051, title :' 0.239'}, 
{from:17, to:22, value: 3.584, title :' 0.426'}, 
{from:17, to:23, value: 1.055, title :' 0.018'}, 
{from:17, to:24, value: 1.068, title :' 0.022'}, 
{from:17, to:26, value: 1.048, title :' 0.016'}, 
{from:17, to:27, value: 1.140, title :' 0.044'}, 
{from:17, to:28, value: 1.066, title :' 0.021'}, 
{from:17, to:30, value: 1.367, title :' 0.104'}, 
{from:17, to:33, value: 2.584, title :' 0.316'}, 
{from:17, to:47, value: 1.569, title :' 0.150'}, 
{from:17, to:48, value: 2.141, title :' 0.254'}, 
{from:17, to:49, value: 1.058, title :' 0.019'}, 
{from:18, to:19, value: 1.075, title :' 0.024'}, 
{from:18, to:21, value: 5.266, title :' 0.554'}, 
{from:18, to:25, value: 2.589, title :' 0.317'}, 
{from:18, to:27, value: 1.136, title :' 0.042'}, 
{from:18, to:46, value: 4.365, title :' 0.491'}, 
{from:18, to:53, value: 1.145, title :' 0.045'}, 
{from:19, to:21, value: 1.065, title :' 0.021'}, 
{from:19, to:25, value: 1.069, title :' 0.022'}, 
{from:19, to:38, value: 7.737, title :' 0.682'}, 
{from:19, to:45, value: 4.742, title :' 0.519'}, 
{from:19, to:52, value: 1.255, title :' 0.076'}, 
{from:20, to:22, value: 2.609, title :' 0.320'}, 
{from:20, to:27, value: 1.138, title :' 0.043'}, 
{from:20, to:29, value: 1.042, title :' 0.014'}, 
{from:20, to:30, value: 1.175, title :' 0.054'}, 
{from:20, to:31, value: 1.037, title :' 0.012'}, 
{from:20, to:33, value: 3.753, title :' 0.441'}, 
{from:20, to:40, value: 1.036, title :' 0.012'}, 
{from:20, to:43, value: 1.036, title :' 0.012'}, 
{from:20, to:49, value: 1.090, title :' 0.029'}, 
{from:21, to:23, value: 1.036, title :' 0.012'}, 
{from:21, to:25, value: 4.298, title :' 0.486'}, 
{from:21, to:27, value: 1.144, title :' 0.045'}, 
{from:22, to:23, value: 1.064, title :' 0.021'}, 
{from:22, to:24, value: 1.039, title :' 0.013'}, 
{from:22, to:27, value: 1.123, title :' 0.039'}, 
{from:22, to:30, value: 1.590, title :' 0.155'}, 
{from:22, to:49, value: 1.063, title :' 0.020'}, 
{from:23, to:24, value: 2.411, title :' 0.293'}, 
{from:23, to:26, value: 2.655, title :' 0.325'}, 
{from:23, to:28, value: 1.474, title :' 0.129'}, 
{from:23, to:29, value: 1.253, title :' 0.075'}, 
{from:23, to:30, value: 1.067, title :' 0.022'}, 
{from:23, to:31, value: 1.053, title :' 0.017'}, 
{from:23, to:32, value: 1.078, title :' 0.025'}, 
{from:23, to:40, value: 1.085, title :' 0.027'}, 
{from:24, to:26, value: 1.516, title :' 0.139'}, 
{from:24, to:28, value: 2.503, title :' 0.306'}, 
{from:24, to:29, value: 1.081, title :' 0.026'}, 
{from:24, to:30, value: 1.047, title :' 0.015'}, 
{from:24, to:31, value: 1.080, title :' 0.026'}, 
{from:24, to:34, value: 1.063, title :' 0.020'}, 
{from:24, to:40, value: 1.047, title :' 0.015'}, 
{from:24, to:42, value: 1.256, title :' 0.076'}, 
{from:25, to:27, value: 1.127, title :' 0.040'}, 
{from:25, to:44, value: 1.153, title :' 0.048'}, 
{from:26, to:28, value: 2.084, title :' 0.245'}, 
{from:26, to:29, value: 1.053, title :' 0.017'}, 
{from:26, to:30, value: 1.047, title :' 0.015'}, 
{from:26, to:31, value: 1.074, title :' 0.024'}, 
{from:26, to:35, value: 1.049, title :' 0.016'}, 
{from:26, to:40, value: 1.278, title :' 0.082'}, 
{from:26, to:41, value: 1.036, title :' 0.012'}, 
{from:26, to:43, value: 1.046, title :' 0.015'}, 
{from:27, to:44, value: 5.277, title :' 0.554'}, 
{from:28, to:31, value: 1.295, title :' 0.086'}, 
{from:28, to:35, value: 1.089, title :' 0.029'}, 
{from:28, to:40, value: 1.043, title :' 0.014'}, 
{from:29, to:30, value: 1.034, title :' 0.011'}, 
{from:29, to:31, value: 1.357, title :' 0.102'}, 
{from:29, to:36, value: 1.071, title :' 0.023'}, 
{from:29, to:40, value: 2.293, title :' 0.277'}, 
{from:29, to:42, value: 2.288, title :' 0.276'}, 
{from:30, to:41, value: 1.034, title :' 0.011'}, 
{from:30, to:47, value: 1.525, title :' 0.141'}, 
{from:30, to:49, value: 1.040, title :' 0.013'}, 
{from:30, to:50, value: 1.676, title :' 0.172'}, 
{from:30, to:51, value: 1.334, title :' 0.096'}, 
{from:31, to:35, value: 1.034, title :' 0.011'}, 
{from:31, to:39, value: 1.035, title :' 0.011'}, 
{from:31, to:40, value: 1.977, title :' 0.227'}, 
{from:31, to:42, value: 2.144, title :' 0.254'}, 
{from:31, to:43, value: 1.113, title :' 0.036'}, 
{from:32, to:34, value: 2.290, title :' 0.276'}, 
{from:32, to:35, value: 1.300, title :' 0.087'}, 
{from:32, to:36, value: 1.345, title :' 0.099'}, 
{from:32, to:37, value: 1.993, title :' 0.230'}, 
{from:32, to:39, value: 1.089, title :' 0.028'}, 
{from:32, to:41, value: 1.078, title :' 0.025'}, 
{from:34, to:35, value: 1.901, title :' 0.214'}, 
{from:34, to:36, value: 1.078, title :' 0.025'}, 
{from:34, to:37, value: 1.290, title :' 0.085'}, 
{from:34, to:39, value: 1.035, title :' 0.011'}, 
{from:34, to:41, value: 1.311, title :' 0.090'}, 
{from:34, to:49, value: 1.045, title :' 0.015'}, 
{from:35, to:36, value: 1.054, title :' 0.017'}, 
{from:35, to:37, value: 1.942, title :' 0.221'}, 
{from:35, to:39, value: 1.077, title :' 0.025'}, 
{from:35, to:41, value: 1.065, title :' 0.021'}, 
{from:35, to:43, value: 1.331, title :' 0.095'}, 
{from:36, to:37, value: 1.099, title :' 0.031'}, 
{from:36, to:39, value: 1.808, title :' 0.197'}, 
{from:36, to:41, value: 2.197, title :' 0.262'}, 
{from:36, to:43, value: 1.207, title :' 0.063'}, 
{from:37, to:39, value: 1.351, title :' 0.100'}, 
{from:37, to:41, value: 1.040, title :' 0.013'}, 
{from:37, to:43, value: 1.046, title :' 0.015'}, 
{from:39, to:40, value: 1.061, title :' 0.020'}, 
{from:39, to:41, value: 1.229, title :' 0.069'}, 
{from:39, to:43, value: 1.825, title :' 0.200'}, 
{from:41, to:43, value: 1.662, title :' 0.169'}, 
{from:47, to:49, value: 1.338, title :' 0.097'}, 
];
var seed186355_BSatlas54node_1dense = { nodes:nodes,edges:edges};