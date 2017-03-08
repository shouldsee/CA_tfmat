var nodes=[ 
{id:1, value:9, label:' 11427',  }, 
{id:2, value:8, label:'208163',  }, 
{id:3, value:7, label:' 77219',  }, 
{id:4, value:8, label:'142755',  }, 
{id:5, value:8, label:' 76963',  }, 
{id:6, value:8, label:'208035',  }, 
{id:7, value:7, label:'208291',  }, 
{id:8, value:7, label:'208803',  }, 
{id:9, value:9, label:'207137',  }, 
{id:10, value:7, label:' 11683',  }, 
{id:11, value:6, label:' 77091',  }, 
{id:12, value:9, label:' 11555',  }, 
{id:13, value:2, label:'142499',  }, 
{id:14, value:5, label:'206881',  }, 
{id:15, value:6, label:' 76835',  }, 
{id:16, value:7, label:'206883',  }, 
{id:17, value:7, label:'207139',  }, 
{id:18, value:6, label:' 75811',  }, 
{id:19, value:6, label:' 76067',  }, 
{id:20, value:8, label:' 76195',  }, 
{id:21, value:6, label:' 12195',  }, 
{id:22, value:36, label:' 75939', color:'green' }, 
{id:23, value:5, label:'207011',  }, 
{id:24, value:5, label:'207267',  }, 
{id:25, value:4, label:'211235',  }, 
{id:26, value:4, label:'211491',  }, 
{id:27, value:2, label:'143267',  }, 
{id:28, value:4, label:'210979',  }, 
{id:29, value:1, label:'207907',  }, 
{id:30, value:1, label:' 11299',  }, 
{id:31, value:1, label:' 77731',  }, 
{id:32, value:2, label:' 77475', color:'red' }, 
{id:33, value:4, label:' 79907',  }, 
{id:34, value:2, label:'142627',  }, 
{id:35, value:8, label:'207009',  }, 
{id:36, value:1, label:' 80419',  }, 
{id:37, value:1, label:' 80163',  }, 
{id:38, value:2, label:'145443',  }, 
{id:39, value:1, label:' 14371',  }, 
{id:40, value:4, label:' 75809',  }, 
{id:41, value:7, label:'141345',  }, 
{id:42, value:1, label:'211747',  }, 
{id:43, value:31, label:' 75937', color:'green' }, 
{id:44, value:1, label:' 76065',  }, 
{id:45, value:1, label:' 10273',  }, 
{id:46, value:3, label:' 76961', color:'red' }, 
{id:47, value:1, label:'208675',  }, 
{id:48, value:1, label:'207265',  }, 
{id:49, value:1, label:'210947', color:'red' }, 
{id:50, value:1, label:'141601',  }, 
{id:51, value:100, label:'  6152',color:'orange'}, 
];
var edges=[ 
{from:1, to:3, value: 1.073, title :' 0.024'}, 
{from:1, to:4, value: 2.592, title :' 0.318'}, 
{from:1, to:5, value: 1.098, title :' 0.031'}, 
{from:1, to:6, value: 1.106, title :' 0.034'}, 
{from:1, to:7, value: 1.052, title :' 0.017'}, 
{from:1, to:10, value: 6.953, title :' 0.646'}, 
{from:1, to:12, value: 1.039, title :' 0.013'}, 
{from:1, to:13, value: 3.938, title :' 0.457'}, 
{from:1, to:21, value: 1.064, title :' 0.021'}, 
{from:2, to:7, value: 1.050, title :' 0.016'}, 
{from:2, to:11, value: 4.179, title :' 0.477'}, 
{from:2, to:12, value: 1.077, title :' 0.025'}, 
{from:2, to:15, value: 2.654, title :' 0.325'}, 
{from:2, to:18, value: 1.043, title :' 0.014'}, 
{from:2, to:19, value: 1.039, title :' 0.013'}, 
{from:2, to:29, value: 7.143, title :' 0.655'}, 
{from:2, to:34, value: 1.096, title :' 0.031'}, 
{from:3, to:4, value: 1.108, title :' 0.034'}, 
{from:3, to:5, value: 6.842, title :' 0.641'}, 
{from:3, to:6, value: 2.599, title :' 0.318'}, 
{from:3, to:7, value: 4.259, title :' 0.483'}, 
{from:3, to:10, value: 1.103, title :' 0.033'}, 
{from:3, to:11, value: 1.064, title :' 0.021'}, 
{from:4, to:5, value: 1.081, title :' 0.026'}, 
{from:4, to:6, value: 1.068, title :' 0.022'}, 
{from:4, to:7, value: 1.096, title :' 0.031'}, 
{from:4, to:10, value: 4.020, title :' 0.464'}, 
{from:4, to:12, value: 1.035, title :' 0.011'}, 
{from:4, to:13, value: 6.988, title :' 0.648'}, 
{from:5, to:6, value: 4.320, title :' 0.488'}, 
{from:5, to:7, value: 2.561, title :' 0.314'}, 
{from:5, to:10, value: 1.061, title :' 0.020'}, 
{from:5, to:11, value: 1.043, title :' 0.014'}, 
{from:5, to:15, value: 1.040, title :' 0.013'}, 
{from:6, to:7, value: 6.498, title :' 0.624'}, 
{from:6, to:8, value: 1.039, title :' 0.013'}, 
{from:6, to:10, value: 1.068, title :' 0.022'}, 
{from:6, to:15, value: 1.034, title :' 0.011'}, 
{from:7, to:10, value: 1.084, title :' 0.027'}, 
{from:8, to:21, value: 1.431, title :' 0.119'}, 
{from:8, to:27, value: 1.489, title :' 0.133'}, 
{from:8, to:31, value: 5.795, title :' 0.586'}, 
{from:8, to:32, value: 3.783, title :' 0.443'}, 
{from:8, to:46, value: 1.154, title :' 0.048'}, 
{from:8, to:47, value: 1.329, title :' 0.095'}, 
{from:9, to:14, value: 9.867, title :' 0.763'}, 
{from:9, to:17, value: 1.042, title :' 0.014'}, 
{from:9, to:20, value: 1.036, title :' 0.012'}, 
{from:9, to:35, value: 1.230, title :' 0.069'}, 
{from:9, to:40, value: 1.511, title :' 0.138'}, 
{from:9, to:41, value: 1.091, title :' 0.029'}, 
{from:9, to:44, value: 1.674, title :' 0.172'}, 
{from:9, to:48, value: 1.281, title :' 0.083'}, 
{from:9, to:50, value: 1.063, title :' 0.020'}, 
{from:10, to:21, value: 1.058, title :' 0.019'}, 
{from:11, to:12, value: 1.097, title :' 0.031'}, 
{from:11, to:15, value: 7.033, title :' 0.650'}, 
{from:11, to:41, value: 1.040, title :' 0.013'}, 
{from:12, to:15, value: 1.062, title :' 0.020'}, 
{from:12, to:20, value: 1.035, title :' 0.012'}, 
{from:12, to:22, value: 1.042, title :' 0.014'}, 
{from:12, to:30, value: 6.584, title :' 0.628'}, 
{from:12, to:34, value: 3.402, title :' 0.408'}, 
{from:14, to:16, value: 1.041, title :' 0.013'}, 
{from:14, to:35, value: 1.309, title :' 0.090'}, 
{from:14, to:40, value: 1.676, title :' 0.172'}, 
{from:14, to:41, value: 1.115, title :' 0.036'}, 
{from:15, to:28, value: 1.037, title :' 0.012'}, 
{from:16, to:17, value: 7.003, title :' 0.649'}, 
{from:16, to:18, value: 1.486, title :' 0.132'}, 
{from:16, to:19, value: 1.337, title :' 0.097'}, 
{from:16, to:23, value: 1.082, title :' 0.026'}, 
{from:16, to:24, value: 1.056, title :' 0.018'}, 
{from:16, to:35, value: 1.039, title :' 0.013'}, 
{from:17, to:18, value: 1.332, title :' 0.096'}, 
{from:17, to:19, value: 1.494, title :' 0.134'}, 
{from:17, to:23, value: 1.046, title :' 0.015'}, 
{from:17, to:24, value: 1.062, title :' 0.020'}, 
{from:17, to:35, value: 1.037, title :' 0.012'}, 
{from:18, to:19, value: 6.872, title :' 0.642'}, 
{from:18, to:20, value: 1.041, title :' 0.013'}, 
{from:18, to:22, value: 1.078, title :' 0.025'}, 
{from:19, to:20, value: 1.068, title :' 0.022'}, 
{from:19, to:22, value: 1.043, title :' 0.014'}, 
{from:20, to:22, value: 6.855, title :' 0.642'}, 
{from:20, to:23, value: 1.255, title :' 0.076'}, 
{from:20, to:24, value: 1.410, title :' 0.115'}, 
{from:20, to:35, value: 1.050, title :' 0.016'}, 
{from:21, to:27, value: 5.307, title :' 0.556'}, 
{from:21, to:32, value: 1.444, title :' 0.123'}, 
{from:21, to:46, value: 1.163, title :' 0.050'}, 
{from:22, to:23, value: 1.384, title :' 0.108'}, 
{from:22, to:24, value: 1.239, title :' 0.071'}, 
{from:23, to:24, value: 6.885, title :' 0.643'}, 
{from:25, to:26, value: 1.053, title :' 0.017'}, 
{from:25, to:28, value: 2.238, title :' 0.269'}, 
{from:25, to:33, value: 1.379, title :' 0.107'}, 
{from:25, to:37, value: 3.020, title :' 0.368'}, 
{from:26, to:28, value: 1.078, title :' 0.025'}, 
{from:26, to:36, value: 3.126, title :' 0.380'}, 
{from:26, to:42, value: 2.292, title :' 0.276'}, 
{from:28, to:33, value: 2.920, title :' 0.357'}, 
{from:33, to:38, value: 1.042, title :' 0.014'}, 
{from:33, to:41, value: 1.041, title :' 0.014'}, 
{from:35, to:40, value: 1.046, title :' 0.015'}, 
{from:35, to:41, value: 1.047, title :' 0.015'}, 
{from:35, to:43, value: 1.717, title :' 0.180'}, 
{from:38, to:39, value: 2.872, title :' 0.352'}, 
{from:40, to:41, value: 1.041, title :' 0.013'}, 
{from:41, to:45, value: 1.665, title :' 0.170'}, 
{from:46, to:49, value: 1.144, title :' 0.045'}, 
];
var seed211492_BSatlas51node = { nodes:nodes,edges:edges};