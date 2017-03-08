var nodes=[ 
{id:1, value:26, label:'10143', color:'red' }, 
{id:2, value:32, label:'49055',  }, 
{id:3, value:23, label:'44959',  }, 
{id:4, value:29, label:'44991',  }, 
{id:5, value:26, label:'34703',  }, 
{id:6, value:11, label:'12191', color:'red' }, 
{id:7, value:10, label:'10015', color:'red' }, 
{id:8, value:9, label:' 9887', color:'red' }, 
{id:9, value:15, label:'44831', color:'red' }, 
{id:10, value:9, label:' 9631', color:'red' }, 
{id:11, value:15, label:'44703', color:'red' }, 
{id:12, value:19, label:'42767',  }, 
{id:13, value:19, label:'42527',  }, 
{id:14, value:13, label:'44447', color:'red' }, 
{id:15, value:10, label:'10127', color:'red' }, 
{id:16, value:20, label:'42639',  }, 
{id:17, value:19, label:'44943',  }, 
{id:18, value:19, label:'43935',  }, 
{id:19, value:12, label:'42783',  }, 
{id:20, value:19, label:'45023',  }, 
{id:21, value:6, label:'36767', color:'red' }, 
{id:22, value:11, label:'42895',  }, 
{id:23, value:16, label:'42271',  }, 
{id:24, value:2, label:'42511',  }, 
{id:25, value:10, label:'47007', color:'red' }, 
{id:26, value:2, label:'46879', color:'red' }, 
{id:27, value:13, label:'42911',  }, 
{id:28, value:6, label:'34591', color:'red' }, 
{id:29, value:13, label:'42655',  }, 
{id:30, value:1, label:'34575',  }, 
{id:31, value:1, label:'48031',  }, 
{id:32, value:12, label:'42143',  }, 
{id:33, value:8, label:'42399',  }, 
{id:34, value:10, label:'61343',  }, 
{id:35, value:1, label:'49087',  }, 
{id:36, value:1, label:'49119',  }, 
{id:37, value:8, label:'42782',  }, 
{id:38, value:7, label:'44958',  }, 
{id:39, value:1, label:'36751',  }, 
{id:40, value:3, label:'41631',  }, 
{id:41, value:3, label:'41630',  }, 
{id:42, value:3, label:'42398',  }, 
{id:43, value:33, label:'42910', color:'green' }, 
{id:44, value:3, label:'42142',  }, 
{id:45, value:3, label:'42654',  }, 
{id:46, value:5, label:'42383',  }, 
{id:47, value:1, label:'44815',  }, 
{id:48, value:2, label:'41118',  }, 
{id:49, value:1, label:'41119',  }, 
{id:50, value:1, label:'42015',  }, 
{id:51, value:1, label:'43967',  }, 
{id:52, value:1, label:'44687',  }, 
{id:53, value:1, label:'42255',  }, 
{id:54, value:1, label:'49039',  }, 
{id:55, value:1, label:'42526',  }, 
{id:56, value:1, label:'34447',  }, 
{id:57, value:1, label:'42270',  }, 
{id:58, value:1, label:'45055',  }, 
{id:59, value:100, label:' 6152',color:'orange'}, 
];
var edges=[ 
{from:1, to:2, value: 2.360, title :' 0.286'}, 
{from:1, to:3, value: 1.917, title :' 0.217'}, 
{from:1, to:4, value: 1.444, title :' 0.123'}, 
{from:1, to:5, value: 1.403, title :' 0.113'}, 
{from:1, to:6, value: 7.095, title :' 0.653'}, 
{from:1, to:7, value: 8.669, title :' 0.720'}, 
{from:1, to:8, value:15.857, title :' 0.921'}, 
{from:1, to:9, value: 2.656, title :' 0.326'}, 
{from:1, to:10, value:13.187, title :' 0.860'}, 
{from:1, to:12, value: 1.162, title :' 0.050'}, 
{from:1, to:13, value: 1.488, title :' 0.133'}, 
{from:1, to:15, value: 3.270, title :' 0.395'}, 
{from:1, to:16, value: 1.074, title :' 0.024'}, 
{from:1, to:17, value: 1.255, title :' 0.076'}, 
{from:1, to:18, value: 1.181, title :' 0.055'}, 
{from:1, to:19, value: 1.354, title :' 0.101'}, 
{from:1, to:20, value: 1.162, title :' 0.050'}, 
{from:1, to:22, value: 1.080, title :' 0.026'}, 
{from:1, to:23, value: 1.177, title :' 0.054'}, 
{from:1, to:25, value: 1.462, title :' 0.127'}, 
{from:1, to:27, value: 1.122, title :' 0.038'}, 
{from:1, to:28, value: 1.603, title :' 0.157'}, 
{from:1, to:32, value: 1.111, title :' 0.035'}, 
{from:1, to:34, value: 1.060, title :' 0.020'}, 
{from:1, to:37, value: 1.073, title :' 0.024'}, 
{from:1, to:46, value: 1.064, title :' 0.021'}, 
{from:2, to:3, value: 1.739, title :' 0.184'}, 
{from:2, to:4, value: 1.432, title :' 0.120'}, 
{from:2, to:5, value: 1.288, title :' 0.084'}, 
{from:2, to:6, value: 2.704, title :' 0.332'}, 
{from:2, to:7, value: 2.056, title :' 0.240'}, 
{from:2, to:8, value: 2.204, title :' 0.263'}, 
{from:2, to:9, value: 2.016, title :' 0.234'}, 
{from:2, to:10, value: 2.255, title :' 0.271'}, 
{from:2, to:11, value: 1.753, title :' 0.187'}, 
{from:2, to:12, value: 1.100, title :' 0.032'}, 
{from:2, to:13, value: 1.238, title :' 0.071'}, 
{from:2, to:14, value: 1.453, title :' 0.124'}, 
{from:2, to:15, value: 1.442, title :' 0.122'}, 
{from:2, to:16, value: 1.089, title :' 0.028'}, 
{from:2, to:17, value: 1.159, title :' 0.049'}, 
{from:2, to:18, value: 1.101, title :' 0.032'}, 
{from:2, to:19, value: 1.178, title :' 0.055'}, 
{from:2, to:20, value: 1.078, title :' 0.025'}, 
{from:2, to:21, value: 1.617, title :' 0.160'}, 
{from:2, to:22, value: 1.093, title :' 0.030'}, 
{from:2, to:23, value: 1.084, title :' 0.027'}, 
{from:2, to:25, value: 1.435, title :' 0.120'}, 
{from:2, to:26, value: 2.039, title :' 0.237'}, 
{from:2, to:27, value: 1.064, title :' 0.021'}, 
{from:2, to:28, value: 1.403, title :' 0.113'}, 
{from:2, to:29, value: 1.056, title :' 0.018'}, 
{from:2, to:31, value: 2.695, title :' 0.330'}, 
{from:2, to:32, value: 1.035, title :' 0.012'}, 
{from:2, to:35, value: 1.912, title :' 0.216'}, 
{from:2, to:36, value: 1.809, title :' 0.198'}, 
{from:2, to:54, value: 1.113, title :' 0.036'}, 
{from:3, to:4, value: 1.295, title :' 0.086'}, 
{from:3, to:5, value: 1.190, title :' 0.058'}, 
{from:3, to:9, value: 2.406, title :' 0.293'}, 
{from:3, to:11, value: 3.098, title :' 0.377'}, 
{from:3, to:12, value: 1.055, title :' 0.018'}, 
{from:3, to:13, value: 1.187, title :' 0.057'}, 
{from:3, to:14, value: 2.875, title :' 0.352'}, 
{from:3, to:16, value: 1.060, title :' 0.019'}, 
{from:3, to:17, value: 1.213, title :' 0.064'}, 
{from:3, to:18, value: 1.204, title :' 0.062'}, 
{from:3, to:19, value: 1.166, title :' 0.051'}, 
{from:3, to:20, value: 1.145, title :' 0.045'}, 
{from:3, to:22, value: 1.055, title :' 0.018'}, 
{from:3, to:23, value: 1.117, title :' 0.037'}, 
{from:3, to:27, value: 1.089, title :' 0.028'}, 
{from:3, to:29, value: 1.078, title :' 0.025'}, 
{from:3, to:32, value: 1.043, title :' 0.014'}, 
{from:3, to:33, value: 1.042, title :' 0.014'}, 
{from:3, to:34, value: 1.041, title :' 0.013'}, 
{from:3, to:37, value: 1.051, title :' 0.016'}, 
{from:3, to:38, value: 1.089, title :' 0.029'}, 
{from:4, to:5, value: 1.161, title :' 0.050'}, 
{from:4, to:6, value: 1.577, title :' 0.152'}, 
{from:4, to:7, value: 1.522, title :' 0.140'}, 
{from:4, to:8, value: 1.566, title :' 0.150'}, 
{from:4, to:9, value: 1.553, title :' 0.147'}, 
{from:4, to:10, value: 1.536, title :' 0.143'}, 
{from:4, to:11, value: 1.355, title :' 0.101'}, 
{from:4, to:12, value: 1.062, title :' 0.020'}, 
{from:4, to:13, value: 1.130, title :' 0.041'}, 
{from:4, to:14, value: 1.283, title :' 0.083'}, 
{from:4, to:15, value: 1.300, title :' 0.087'}, 
{from:4, to:16, value: 1.053, title :' 0.017'}, 
{from:4, to:17, value: 1.228, title :' 0.069'}, 
{from:4, to:18, value: 1.068, title :' 0.022'}, 
{from:4, to:19, value: 1.128, title :' 0.040'}, 
{from:4, to:20, value: 1.083, title :' 0.027'}, 
{from:4, to:21, value: 1.398, title :' 0.112'}, 
{from:4, to:22, value: 1.097, title :' 0.031'}, 
{from:4, to:23, value: 1.056, title :' 0.018'}, 
{from:4, to:25, value: 1.127, title :' 0.040'}, 
{from:4, to:27, value: 1.061, title :' 0.020'}, 
{from:4, to:28, value: 1.232, title :' 0.069'}, 
{from:4, to:29, value: 1.045, title :' 0.015'}, 
{from:4, to:32, value: 1.051, title :' 0.016'}, 
{from:4, to:33, value: 1.050, title :' 0.016'}, 
{from:4, to:51, value: 1.165, title :' 0.051'}, 
{from:5, to:6, value: 1.389, title :' 0.109'}, 
{from:5, to:7, value: 1.390, title :' 0.110'}, 
{from:5, to:8, value: 1.329, title :' 0.095'}, 
{from:5, to:9, value: 1.267, title :' 0.079'}, 
{from:5, to:10, value: 1.325, title :' 0.094'}, 
{from:5, to:11, value: 1.175, title :' 0.054'}, 
{from:5, to:12, value: 1.128, title :' 0.040'}, 
{from:5, to:13, value: 1.059, title :' 0.019'}, 
{from:5, to:14, value: 1.200, title :' 0.061'}, 
{from:5, to:15, value: 1.410, title :' 0.115'}, 
{from:5, to:16, value: 1.045, title :' 0.015'}, 
{from:5, to:17, value: 1.110, title :' 0.035'}, 
{from:5, to:18, value: 1.065, title :' 0.021'}, 
{from:5, to:19, value: 1.066, title :' 0.021'}, 
{from:5, to:20, value: 1.050, title :' 0.016'}, 
{from:5, to:23, value: 1.043, title :' 0.014'}, 
{from:5, to:25, value: 1.119, title :' 0.038'}, 
{from:5, to:27, value: 1.074, title :' 0.024'}, 
{from:5, to:28, value: 1.184, title :' 0.056'}, 
{from:5, to:29, value: 1.067, title :' 0.022'}, 
{from:5, to:30, value: 2.979, title :' 0.364'}, 
{from:5, to:39, value: 1.696, title :' 0.176'}, 
{from:6, to:16, value: 1.124, title :' 0.039'}, 
{from:6, to:18, value: 1.138, title :' 0.043'}, 
{from:6, to:20, value: 1.155, title :' 0.048'}, 
{from:6, to:21, value: 2.254, title :' 0.271'}, 
{from:6, to:34, value: 1.081, title :' 0.026'}, 
{from:6, to:38, value: 1.034, title :' 0.011'}, 
{from:6, to:46, value: 1.061, title :' 0.020'}, 
{from:7, to:16, value: 1.100, title :' 0.032'}, 
{from:7, to:18, value: 1.151, title :' 0.047'}, 
{from:7, to:20, value: 1.228, title :' 0.068'}, 
{from:7, to:26, value: 1.988, title :' 0.229'}, 
{from:7, to:34, value: 1.084, title :' 0.027'}, 
{from:7, to:38, value: 1.059, title :' 0.019'}, 
{from:8, to:16, value: 1.069, title :' 0.022'}, 
{from:8, to:18, value: 1.178, title :' 0.055'}, 
{from:8, to:20, value: 1.163, title :' 0.050'}, 
{from:8, to:34, value: 1.100, title :' 0.032'}, 
{from:8, to:37, value: 1.071, title :' 0.023'}, 
{from:9, to:12, value: 1.197, title :' 0.060'}, 
{from:9, to:13, value: 1.317, title :' 0.092'}, 
{from:9, to:16, value: 1.078, title :' 0.025'}, 
{from:9, to:17, value: 1.231, title :' 0.069'}, 
{from:9, to:18, value: 1.190, title :' 0.058'}, 
{from:9, to:20, value: 1.202, title :' 0.061'}, 
{from:9, to:23, value: 1.137, title :' 0.043'}, 
{from:9, to:32, value: 1.072, title :' 0.023'}, 
{from:9, to:34, value: 1.049, title :' 0.016'}, 
{from:9, to:38, value: 1.071, title :' 0.023'}, 
{from:10, to:16, value: 1.088, title :' 0.028'}, 
{from:10, to:18, value: 1.142, title :' 0.044'}, 
{from:10, to:20, value: 1.166, title :' 0.051'}, 
{from:10, to:34, value: 1.073, title :' 0.024'}, 
{from:10, to:48, value: 1.036, title :' 0.012'}, 
{from:11, to:12, value: 1.150, title :' 0.047'}, 
{from:11, to:13, value: 1.209, title :' 0.063'}, 
{from:11, to:16, value: 1.049, title :' 0.016'}, 
{from:11, to:17, value: 1.255, title :' 0.076'}, 
{from:11, to:18, value: 1.199, title :' 0.060'}, 
{from:11, to:20, value: 1.148, title :' 0.046'}, 
{from:11, to:23, value: 1.080, title :' 0.026'}, 
{from:11, to:32, value: 1.060, title :' 0.020'}, 
{from:11, to:34, value: 1.059, title :' 0.019'}, 
{from:11, to:37, value: 1.066, title :' 0.021'}, 
{from:11, to:38, value: 1.160, title :' 0.049'}, 
{from:12, to:13, value: 1.055, title :' 0.018'}, 
{from:12, to:14, value: 1.116, title :' 0.036'}, 
{from:12, to:16, value: 1.131, title :' 0.041'}, 
{from:12, to:17, value: 1.147, title :' 0.046'}, 
{from:12, to:22, value: 1.123, title :' 0.039'}, 
{from:12, to:23, value: 1.078, title :' 0.025'}, 
{from:12, to:24, value: 3.808, title :' 0.446'}, 
{from:12, to:25, value: 1.044, title :' 0.014'}, 
{from:12, to:41, value: 1.037, title :' 0.012'}, 
{from:12, to:46, value: 1.063, title :' 0.020'}, 
{from:12, to:47, value: 1.288, title :' 0.084'}, 
{from:12, to:53, value: 1.120, title :' 0.038'}, 
{from:13, to:14, value: 1.163, title :' 0.050'}, 
{from:13, to:17, value: 1.129, title :' 0.040'}, 
{from:13, to:18, value: 1.067, title :' 0.022'}, 
{from:13, to:19, value: 1.944, title :' 0.222'}, 
{from:13, to:20, value: 1.037, title :' 0.012'}, 
{from:13, to:23, value: 1.124, title :' 0.039'}, 
{from:13, to:25, value: 1.105, title :' 0.033'}, 
{from:13, to:27, value: 1.080, title :' 0.026'}, 
{from:13, to:29, value: 1.097, title :' 0.031'}, 
{from:13, to:33, value: 1.038, title :' 0.013'}, 
{from:13, to:37, value: 1.067, title :' 0.021'}, 
{from:14, to:16, value: 1.066, title :' 0.021'}, 
{from:14, to:17, value: 1.130, title :' 0.041'}, 
{from:14, to:18, value: 1.147, title :' 0.046'}, 
{from:14, to:20, value: 1.061, title :' 0.020'}, 
{from:14, to:23, value: 1.052, title :' 0.017'}, 
{from:14, to:32, value: 1.057, title :' 0.019'}, 
{from:14, to:38, value: 1.106, title :' 0.034'}, 
{from:15, to:16, value: 1.102, title :' 0.032'}, 
{from:15, to:18, value: 1.091, title :' 0.029'}, 
{from:15, to:20, value: 1.160, title :' 0.050'}, 
{from:15, to:34, value: 1.111, title :' 0.035'}, 
{from:15, to:38, value: 1.053, title :' 0.017'}, 
{from:15, to:46, value: 1.048, title :' 0.016'}, 
{from:16, to:17, value: 1.155, title :' 0.048'}, 
{from:16, to:21, value: 1.043, title :' 0.014'}, 
{from:16, to:22, value: 2.894, title :' 0.354'}, 
{from:16, to:24, value: 1.127, title :' 0.040'}, 
{from:16, to:52, value: 1.123, title :' 0.039'}, 
{from:16, to:56, value: 1.068, title :' 0.022'}, 
{from:17, to:19, value: 1.090, title :' 0.029'}, 
{from:17, to:20, value: 1.099, title :' 0.031'}, 
{from:17, to:22, value: 1.090, title :' 0.029'}, 
{from:17, to:23, value: 1.076, title :' 0.025'}, 
{from:17, to:25, value: 1.130, title :' 0.041'}, 
{from:17, to:27, value: 1.039, title :' 0.013'}, 
{from:17, to:29, value: 1.067, title :' 0.022'}, 
{from:17, to:32, value: 1.055, title :' 0.018'}, 
{from:18, to:21, value: 1.117, title :' 0.037'}, 
{from:18, to:22, value: 1.035, title :' 0.012'}, 
{from:18, to:25, value: 1.076, title :' 0.024'}, 
{from:18, to:28, value: 1.041, title :' 0.013'}, 
{from:18, to:33, value: 1.037, title :' 0.012'}, 
{from:19, to:23, value: 1.258, title :' 0.076'}, 
{from:19, to:27, value: 1.080, title :' 0.026'}, 
{from:19, to:29, value: 1.068, title :' 0.022'}, 
{from:19, to:33, value: 1.048, title :' 0.016'}, 
{from:19, to:37, value: 1.102, title :' 0.032'}, 
{from:20, to:21, value: 1.064, title :' 0.021'}, 
{from:20, to:28, value: 1.070, title :' 0.022'}, 
{from:20, to:29, value: 1.050, title :' 0.016'}, 
{from:20, to:58, value: 1.055, title :' 0.018'}, 
{from:22, to:23, value: 1.035, title :' 0.012'}, 
{from:22, to:27, value: 1.055, title :' 0.018'}, 
{from:22, to:29, value: 1.035, title :' 0.012'}, 
{from:23, to:25, value: 1.083, title :' 0.027'}, 
{from:23, to:29, value: 1.036, title :' 0.012'}, 
{from:23, to:50, value: 1.179, title :' 0.055'}, 
{from:25, to:46, value: 1.043, title :' 0.014'}, 
{from:27, to:29, value: 1.368, title :' 0.105'}, 
{from:27, to:32, value: 1.055, title :' 0.018'}, 
{from:27, to:33, value: 1.318, title :' 0.092'}, 
{from:27, to:43, value: 1.091, title :' 0.029'}, 
{from:29, to:32, value: 1.233, title :' 0.070'}, 
{from:29, to:45, value: 1.077, title :' 0.025'}, 
{from:32, to:33, value: 1.125, title :' 0.039'}, 
{from:32, to:44, value: 1.130, title :' 0.041'}, 
{from:33, to:42, value: 1.175, title :' 0.054'}, 
{from:34, to:40, value: 1.049, title :' 0.016'}, 
{from:37, to:55, value: 1.089, title :' 0.028'}, 
{from:37, to:57, value: 1.061, title :' 0.020'}, 
{from:40, to:41, value: 1.264, title :' 0.078'}, 
{from:40, to:49, value: 1.248, title :' 0.074'}, 
{from:41, to:48, value: 1.239, title :' 0.071'}, 
{from:42, to:43, value: 1.257, title :' 0.076'}, 
{from:42, to:44, value: 1.055, title :' 0.018'}, 
{from:43, to:45, value: 1.058, title :' 0.019'}, 
{from:44, to:45, value: 1.208, title :' 0.063'}, 
];
var seed61344_BSatlas59node_13dense = { nodes:nodes,edges:edges};