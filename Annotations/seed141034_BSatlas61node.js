var nodes=[ 
{id:1, value:12, label:'140712',  }, 
{id:2, value:11, label:'  9384',  }, 
{id:3, value:9, label:'  9640',  }, 
{id:4, value:13, label:'139752',  }, 
{id:5, value:2, label:'140456',  }, 
{id:6, value:15, label:'140776',  }, 
{id:7, value:13, label:'  9704',  }, 
{id:8, value:10, label:'  8680',  }, 
{id:9, value:11, label:'  9448',  }, 
{id:10, value:9, label:'140520',  }, 
{id:11, value:13, label:' 74984',  }, 
{id:12, value:5, label:'  9960',  }, 
{id:13, value:6, label:'141288',  }, 
{id:14, value:12, label:'206312',  }, 
{id:15, value:5, label:'141032',  }, 
{id:16, value:35, label:' 10216', color:'green' }, 
{id:17, value:9, label:'  9512',  }, 
{id:18, value:12, label:' 75240',  }, 
{id:19, value:5, label:' 75752',  }, 
{id:20, value:4, label:'141033',  }, 
{id:21, value:5, label:' 75496',  }, 
{id:22, value:7, label:'  8424',  }, 
{id:23, value:12, label:'  9192',  }, 
{id:24, value:3, label:'206056',  }, 
{id:25, value:2, label:'141289',  }, 
{id:26, value:8, label:'  9320',  }, 
{id:27, value:7, label:'  8552',  }, 
{id:28, value:3, label:' 75497',  }, 
{id:29, value:1, label:'  9256',  }, 
{id:30, value:5, label:'206568',  }, 
{id:31, value:1, label:'140392',  }, 
{id:32, value:2, label:' 10217',  }, 
{id:33, value:1, label:'  8296',  }, 
{id:34, value:12, label:' 41448',  }, 
{id:35, value:2, label:'206824',  }, 
{id:36, value:1, label:'  8936',  }, 
{id:37, value:1, label:'  9961',  }, 
{id:38, value:2, label:'206569',  }, 
{id:39, value:1, label:'139496',  }, 
{id:40, value:6, label:' 75176',  }, 
{id:41, value:8, label:' 74216',  }, 
{id:42, value:1, label:' 75753',  }, 
{id:43, value:1, label:' 41192',  }, 
{id:44, value:9, label:' 42408',  }, 
{id:45, value:1, label:'106984',  }, 
{id:46, value:1, label:' 41960',  }, 
{id:47, value:1, label:' 75048',  }, 
{id:48, value:1, label:' 73960',  }, 
{id:49, value:1, label:'206248',  }, 
{id:50, value:1, label:'205288',  }, 
{id:51, value:1, label:' 74728',  }, 
{id:52, value:1, label:' 74920',  }, 
{id:53, value:1, label:' 74088',  }, 
{id:54, value:1, label:'140584',  }, 
{id:55, value:1, label:'  9064',  }, 
{id:56, value:1, label:'107944',  }, 
{id:57, value:1, label:'140264',  }, 
{id:58, value:1, label:'172520',  }, 
{id:59, value:1, label:' 74856',  }, 
{id:60, value:1, label:'  9576',  }, 
{id:61, value:100, label:'  6152',color:'orange'}, 
];
var edges=[ 
{from:1, to:2, value: 3.415, title :' 0.409'}, 
{from:1, to:3, value: 7.973, title :' 0.692'}, 
{from:1, to:5, value: 5.596, title :' 0.574'}, 
{from:1, to:8, value: 1.041, title :' 0.013'}, 
{from:1, to:9, value: 1.036, title :' 0.012'}, 
{from:1, to:11, value: 1.038, title :' 0.012'}, 
{from:1, to:17, value: 1.166, title :' 0.051'}, 
{from:1, to:40, value: 1.226, title :' 0.068'}, 
{from:1, to:41, value: 1.037, title :' 0.012'}, 
{from:1, to:44, value: 1.053, title :' 0.017'}, 
{from:1, to:49, value: 1.236, title :' 0.071'}, 
{from:1, to:54, value: 1.147, title :' 0.046'}, 
{from:2, to:3, value: 5.759, title :' 0.584'}, 
{from:2, to:5, value: 7.936, title :' 0.690'}, 
{from:2, to:6, value: 1.050, title :' 0.016'}, 
{from:2, to:7, value: 1.040, title :' 0.013'}, 
{from:2, to:16, value: 1.038, title :' 0.013'}, 
{from:2, to:17, value: 1.120, title :' 0.038'}, 
{from:2, to:18, value: 1.042, title :' 0.014'}, 
{from:2, to:40, value: 1.123, title :' 0.039'}, 
{from:2, to:44, value: 1.060, title :' 0.019'}, 
{from:2, to:52, value: 1.203, title :' 0.062'}, 
{from:3, to:4, value: 1.048, title :' 0.016'}, 
{from:3, to:6, value: 1.042, title :' 0.014'}, 
{from:3, to:7, value: 1.052, title :' 0.017'}, 
{from:3, to:8, value: 1.057, title :' 0.019'}, 
{from:3, to:17, value: 1.134, title :' 0.042'}, 
{from:3, to:40, value: 1.240, title :' 0.072'}, 
{from:3, to:44, value: 1.041, title :' 0.013'}, 
{from:4, to:8, value: 6.059, title :' 0.601'}, 
{from:4, to:14, value: 1.035, title :' 0.011'}, 
{from:4, to:22, value: 2.078, title :' 0.244'}, 
{from:4, to:23, value: 1.084, title :' 0.027'}, 
{from:4, to:27, value: 1.041, title :' 0.013'}, 
{from:4, to:34, value: 1.050, title :' 0.016'}, 
{from:4, to:39, value: 2.836, title :' 0.347'}, 
{from:4, to:41, value: 1.202, title :' 0.061'}, 
{from:4, to:44, value: 1.034, title :' 0.011'}, 
{from:4, to:50, value: 1.213, title :' 0.064'}, 
{from:4, to:57, value: 1.084, title :' 0.027'}, 
{from:4, to:58, value: 1.082, title :' 0.026'}, 
{from:6, to:7, value: 3.968, title :' 0.459'}, 
{from:6, to:8, value: 1.040, title :' 0.013'}, 
{from:6, to:9, value: 1.711, title :' 0.179'}, 
{from:6, to:10, value: 2.587, title :' 0.317'}, 
{from:6, to:11, value: 1.065, title :' 0.021'}, 
{from:6, to:13, value: 1.064, title :' 0.021'}, 
{from:6, to:14, value: 1.054, title :' 0.017'}, 
{from:6, to:15, value: 1.040, title :' 0.013'}, 
{from:6, to:18, value: 1.060, title :' 0.020'}, 
{from:6, to:23, value: 1.076, title :' 0.024'}, 
{from:6, to:26, value: 1.036, title :' 0.012'}, 
{from:6, to:27, value: 1.035, title :' 0.012'}, 
{from:6, to:44, value: 1.036, title :' 0.012'}, 
{from:7, to:9, value: 2.769, title :' 0.340'}, 
{from:7, to:10, value: 1.684, title :' 0.174'}, 
{from:7, to:11, value: 1.036, title :' 0.012'}, 
{from:7, to:12, value: 1.037, title :' 0.012'}, 
{from:7, to:14, value: 1.055, title :' 0.018'}, 
{from:7, to:16, value: 1.052, title :' 0.017'}, 
{from:7, to:18, value: 1.083, title :' 0.026'}, 
{from:7, to:23, value: 1.061, title :' 0.020'}, 
{from:7, to:26, value: 1.074, title :' 0.024'}, 
{from:7, to:34, value: 1.050, title :' 0.016'}, 
{from:8, to:17, value: 1.039, title :' 0.013'}, 
{from:8, to:22, value: 2.876, title :' 0.352'}, 
{from:8, to:23, value: 1.098, title :' 0.031'}, 
{from:8, to:27, value: 1.052, title :' 0.017'}, 
{from:8, to:34, value: 1.063, title :' 0.020'}, 
{from:8, to:41, value: 1.188, title :' 0.057'}, 
{from:9, to:10, value: 4.088, title :' 0.469'}, 
{from:9, to:11, value: 1.061, title :' 0.020'}, 
{from:9, to:12, value: 1.065, title :' 0.021'}, 
{from:9, to:13, value: 1.043, title :' 0.014'}, 
{from:9, to:14, value: 1.048, title :' 0.016'}, 
{from:9, to:18, value: 1.044, title :' 0.014'}, 
{from:9, to:26, value: 1.066, title :' 0.021'}, 
{from:9, to:34, value: 1.045, title :' 0.015'}, 
{from:10, to:11, value: 1.053, title :' 0.017'}, 
{from:10, to:14, value: 1.053, title :' 0.017'}, 
{from:10, to:18, value: 1.036, title :' 0.012'}, 
{from:10, to:24, value: 1.081, title :' 0.026'}, 
{from:10, to:26, value: 1.050, title :' 0.016'}, 
{from:10, to:41, value: 1.043, title :' 0.014'}, 
{from:11, to:14, value: 1.462, title :' 0.127'}, 
{from:11, to:17, value: 1.036, title :' 0.012'}, 
{from:11, to:18, value: 2.302, title :' 0.278'}, 
{from:11, to:21, value: 1.057, title :' 0.019'}, 
{from:11, to:22, value: 1.034, title :' 0.011'}, 
{from:11, to:23, value: 1.066, title :' 0.021'}, 
{from:11, to:24, value: 3.755, title :' 0.441'}, 
{from:11, to:40, value: 1.044, title :' 0.014'}, 
{from:12, to:13, value: 1.582, title :' 0.153'}, 
{from:12, to:15, value: 4.015, title :' 0.463'}, 
{from:12, to:16, value: 2.623, title :' 0.321'}, 
{from:13, to:15, value: 2.628, title :' 0.322'}, 
{from:13, to:16, value: 3.838, title :' 0.448'}, 
{from:13, to:27, value: 1.034, title :' 0.011'}, 
{from:14, to:18, value: 3.765, title :' 0.442'}, 
{from:14, to:19, value: 1.044, title :' 0.014'}, 
{from:14, to:24, value: 2.049, title :' 0.239'}, 
{from:14, to:30, value: 1.034, title :' 0.011'}, 
{from:14, to:34, value: 1.045, title :' 0.015'}, 
{from:14, to:35, value: 1.109, title :' 0.034'}, 
{from:15, to:16, value: 1.568, title :' 0.150'}, 
{from:15, to:30, value: 1.036, title :' 0.012'}, 
{from:17, to:29, value: 6.543, title :' 0.626'}, 
{from:17, to:40, value: 1.073, title :' 0.023'}, 
{from:17, to:47, value: 1.282, title :' 0.083'}, 
{from:17, to:60, value: 1.038, title :' 0.012'}, 
{from:18, to:19, value: 1.084, title :' 0.027'}, 
{from:18, to:21, value: 1.063, title :' 0.020'}, 
{from:18, to:23, value: 1.048, title :' 0.016'}, 
{from:18, to:30, value: 1.043, title :' 0.014'}, 
{from:18, to:34, value: 1.040, title :' 0.013'}, 
{from:19, to:21, value: 2.278, title :' 0.274'}, 
{from:19, to:30, value: 1.470, title :' 0.128'}, 
{from:19, to:35, value: 3.534, title :' 0.421'}, 
{from:20, to:25, value: 2.199, title :' 0.263'}, 
{from:20, to:32, value: 1.480, title :' 0.131'}, 
{from:20, to:37, value: 3.679, title :' 0.434'}, 
{from:20, to:38, value: 1.040, title :' 0.013'}, 
{from:21, to:28, value: 1.074, title :' 0.024'}, 
{from:21, to:30, value: 3.887, title :' 0.453'}, 
{from:22, to:23, value: 1.077, title :' 0.025'}, 
{from:22, to:34, value: 1.060, title :' 0.020'}, 
{from:22, to:41, value: 1.134, title :' 0.042'}, 
{from:22, to:48, value: 1.265, title :' 0.078'}, 
{from:23, to:26, value: 1.040, title :' 0.013'}, 
{from:23, to:36, value: 3.744, title :' 0.440'}, 
{from:23, to:44, value: 1.055, title :' 0.018'}, 
{from:23, to:51, value: 1.204, title :' 0.062'}, 
{from:23, to:55, value: 1.112, title :' 0.035'}, 
{from:25, to:32, value: 3.547, title :' 0.422'}, 
{from:26, to:31, value: 5.305, title :' 0.556'}, 
{from:26, to:41, value: 1.034, title :' 0.011'}, 
{from:26, to:59, value: 1.072, title :' 0.023'}, 
{from:27, to:33, value: 4.727, title :' 0.518'}, 
{from:27, to:41, value: 1.055, title :' 0.018'}, 
{from:27, to:53, value: 1.179, title :' 0.055'}, 
{from:28, to:38, value: 3.085, title :' 0.376'}, 
{from:28, to:42, value: 1.964, title :' 0.225'}, 
{from:34, to:41, value: 1.038, title :' 0.012'}, 
{from:34, to:43, value: 1.786, title :' 0.193'}, 
{from:34, to:44, value: 1.056, title :' 0.018'}, 
{from:34, to:45, value: 1.325, title :' 0.094'}, 
{from:34, to:46, value: 1.288, title :' 0.084'}, 
{from:40, to:44, value: 1.057, title :' 0.018'}, 
{from:44, to:56, value: 1.100, title :' 0.032'}, 
];
var seed141034_BSatlas61node = { nodes:nodes,edges:edges};