var nodes=[ 
{id:1, value:4, label:'210901',  }, 
{id:2, value:4, label:'210389',  }, 
{id:3, value:5, label:'210388',  }, 
{id:4, value:4, label:'210900',  }, 
{id:5, value:4, label:' 79829',  }, 
{id:6, value:4, label:' 79828',  }, 
{id:7, value:5, label:' 79317',  }, 
{id:8, value:4, label:'  4726',  }, 
{id:9, value:5, label:'210132',  }, 
{id:10, value:33, label:'  4214', color:'green' }, 
{id:11, value:4, label:' 79316',  }, 
{id:12, value:4, label:'210644',  }, 
{id:13, value:6, label:' 23626',  }, 
{id:14, value:3, label:'210133',  }, 
{id:15, value:35, label:'154698', color:'green' }, 
{id:16, value:5, label:'154954',  }, 
{id:17, value:3, label:'210645',  }, 
{id:18, value:5, label:'155467',  }, 
{id:19, value:5, label:' 23882',  }, 
{id:20, value:3, label:' 79573',  }, 
{id:21, value:5, label:'154699',  }, 
{id:22, value:4, label:' 79061',  }, 
{id:23, value:4, label:'154955',  }, 
{id:24, value:4, label:'155466',  }, 
{id:25, value:5, label:' 24394',  }, 
{id:26, value:34, label:' 79572', color:'green' }, 
{id:27, value:4, label:' 24138',  }, 
{id:28, value:4, label:'155210',  }, 
{id:29, value:3, label:'169112',  }, 
{id:30, value:4, label:' 79060',  }, 
{id:31, value:4, label:' 23627',  }, 
{id:32, value:3, label:' 38296',  }, 
{id:33, value:33, label:' 38040', color:'green' }, 
{id:34, value:4, label:' 23883',  }, 
{id:35, value:3, label:'169368',  }, 
{id:36, value:4, label:' 24139',  }, 
{id:37, value:4, label:'155211',  }, 
{id:38, value:3, label:' 38552',  }, 
{id:39, value:4, label:' 24395',  }, 
{id:40, value:3, label:' 38808',  }, 
{id:41, value:3, label:'169624',  }, 
{id:42, value:3, label:'155934',  }, 
{id:43, value:4, label:'135286',  }, 
{id:44, value:3, label:'169880',  }, 
{id:45, value:3, label:'  4470',  }, 
{id:46, value:3, label:'156447',  }, 
{id:47, value:3, label:'155935',  }, 
{id:48, value:3, label:'155678',  }, 
{id:49, value:3, label:'135798',  }, 
{id:50, value:3, label:'156191',  }, 
{id:51, value:2, label:'156446',  }, 
{id:52, value:3, label:'  4982',  }, 
{id:53, value:3, label:'155679',  }, 
{id:54, value:3, label:'135542',  }, 
{id:55, value:2, label:' 24862',  }, 
{id:56, value:2, label:'156190',  }, 
{id:57, value:31, label:' 24606', color:'green' }, 
{id:58, value:3, label:'136054',  }, 
{id:59, value:1, label:' 25374',  }, 
{id:60, value:100, label:'  6152',color:'orange'}, 
];
var edges=[ 
{from:1, to:2, value: 1.836, title :' 0.203'}, 
{from:1, to:3, value: 1.205, title :' 0.062'}, 
{from:1, to:4, value: 2.637, title :' 0.323'}, 
{from:1, to:5, value: 1.101, title :' 0.032'}, 
{from:2, to:3, value: 2.471, title :' 0.301'}, 
{from:2, to:4, value: 1.210, title :' 0.064'}, 
{from:2, to:7, value: 1.109, title :' 0.034'}, 
{from:3, to:4, value: 1.659, title :' 0.169'}, 
{from:3, to:9, value: 1.088, title :' 0.028'}, 
{from:3, to:11, value: 1.130, title :' 0.041'}, 
{from:4, to:6, value: 1.113, title :' 0.036'}, 
{from:5, to:6, value: 2.486, title :' 0.304'}, 
{from:5, to:7, value: 1.736, title :' 0.184'}, 
{from:5, to:11, value: 1.130, title :' 0.041'}, 
{from:6, to:7, value: 1.169, title :' 0.052'}, 
{from:6, to:11, value: 1.602, title :' 0.157'}, 
{from:7, to:11, value: 2.025, title :' 0.235'}, 
{from:7, to:22, value: 1.074, title :' 0.024'}, 
{from:8, to:10, value: 2.303, title :' 0.278'}, 
{from:8, to:43, value: 1.136, title :' 0.043'}, 
{from:8, to:49, value: 1.275, title :' 0.081'}, 
{from:8, to:52, value: 1.327, title :' 0.094'}, 
{from:9, to:12, value: 1.592, title :' 0.155'}, 
{from:9, to:14, value: 2.077, title :' 0.244'}, 
{from:9, to:17, value: 1.113, title :' 0.036'}, 
{from:9, to:30, value: 1.100, title :' 0.032'}, 
{from:10, to:43, value: 1.451, title :' 0.124'}, 
{from:10, to:45, value: 1.255, title :' 0.076'}, 
{from:12, to:14, value: 1.164, title :' 0.051'}, 
{from:12, to:17, value: 2.032, title :' 0.236'}, 
{from:12, to:26, value: 1.090, title :' 0.029'}, 
{from:13, to:15, value: 1.986, title :' 0.229'}, 
{from:13, to:16, value: 1.086, title :' 0.028'}, 
{from:13, to:19, value: 1.358, title :' 0.102'}, 
{from:13, to:21, value: 1.083, title :' 0.027'}, 
{from:13, to:27, value: 1.078, title :' 0.025'}, 
{from:13, to:31, value: 1.178, title :' 0.055'}, 
{from:14, to:17, value: 1.648, title :' 0.166'}, 
{from:15, to:16, value: 1.262, title :' 0.078'}, 
{from:15, to:19, value: 1.096, title :' 0.031'}, 
{from:15, to:21, value: 1.276, title :' 0.081'}, 
{from:15, to:28, value: 1.090, title :' 0.029'}, 
{from:16, to:19, value: 1.868, title :' 0.208'}, 
{from:16, to:23, value: 1.350, title :' 0.100'}, 
{from:16, to:24, value: 1.088, title :' 0.028'}, 
{from:18, to:23, value: 1.145, title :' 0.045'}, 
{from:18, to:24, value: 1.407, title :' 0.114'}, 
{from:18, to:25, value: 1.107, title :' 0.034'}, 
{from:18, to:37, value: 1.255, title :' 0.076'}, 
{from:18, to:39, value: 1.655, title :' 0.168'}, 
{from:19, to:25, value: 1.114, title :' 0.036'}, 
{from:19, to:34, value: 1.156, title :' 0.048'}, 
{from:20, to:22, value: 1.630, title :' 0.163'}, 
{from:20, to:26, value: 1.913, title :' 0.216'}, 
{from:20, to:30, value: 1.097, title :' 0.031'}, 
{from:21, to:23, value: 1.224, title :' 0.067'}, 
{from:21, to:31, value: 1.826, title :' 0.201'}, 
{from:21, to:37, value: 1.102, title :' 0.032'}, 
{from:22, to:26, value: 1.090, title :' 0.029'}, 
{from:22, to:30, value: 1.784, title :' 0.193'}, 
{from:23, to:34, value: 1.796, title :' 0.195'}, 
{from:24, to:25, value: 1.777, title :' 0.192'}, 
{from:24, to:28, value: 1.248, title :' 0.074'}, 
{from:25, to:27, value: 1.311, title :' 0.090'}, 
{from:25, to:39, value: 1.165, title :' 0.051'}, 
{from:26, to:30, value: 1.453, title :' 0.125'}, 
{from:27, to:28, value: 1.944, title :' 0.222'}, 
{from:27, to:36, value: 1.201, title :' 0.061'}, 
{from:28, to:37, value: 1.225, title :' 0.068'}, 
{from:29, to:32, value: 1.149, title :' 0.046'}, 
{from:29, to:33, value: 1.609, title :' 0.159'}, 
{from:29, to:35, value: 1.706, title :' 0.178'}, 
{from:31, to:34, value: 1.301, title :' 0.088'}, 
{from:31, to:36, value: 1.114, title :' 0.036'}, 
{from:32, to:33, value: 1.729, title :' 0.182'}, 
{from:32, to:35, value: 1.568, title :' 0.150'}, 
{from:33, to:35, value: 1.114, title :' 0.036'}, 
{from:34, to:39, value: 1.106, title :' 0.034'}, 
{from:36, to:37, value: 1.714, title :' 0.180'}, 
{from:36, to:39, value: 1.267, title :' 0.079'}, 
{from:38, to:40, value: 1.663, title :' 0.170'}, 
{from:38, to:41, value: 1.590, title :' 0.155'}, 
{from:38, to:44, value: 1.084, title :' 0.027'}, 
{from:40, to:41, value: 1.075, title :' 0.024'}, 
{from:40, to:44, value: 1.499, title :' 0.135'}, 
{from:41, to:44, value: 1.527, title :' 0.141'}, 
{from:42, to:47, value: 1.299, title :' 0.087'}, 
{from:42, to:51, value: 1.617, title :' 0.160'}, 
{from:42, to:55, value: 1.240, title :' 0.072'}, 
{from:43, to:49, value: 1.278, title :' 0.082'}, 
{from:43, to:54, value: 1.231, title :' 0.069'}, 
{from:45, to:52, value: 1.258, title :' 0.076'}, 
{from:45, to:54, value: 1.477, title :' 0.130'}, 
{from:46, to:47, value: 1.535, title :' 0.143'}, 
{from:46, to:50, value: 1.145, title :' 0.045'}, 
{from:46, to:51, value: 1.288, title :' 0.084'}, 
{from:47, to:53, value: 1.091, title :' 0.029'}, 
{from:48, to:53, value: 1.224, title :' 0.067'}, 
{from:48, to:56, value: 1.436, title :' 0.121'}, 
{from:48, to:57, value: 1.216, title :' 0.065'}, 
{from:49, to:58, value: 1.289, title :' 0.085'}, 
{from:50, to:53, value: 1.513, title :' 0.138'}, 
{from:50, to:56, value: 1.205, title :' 0.062'}, 
{from:52, to:58, value: 1.221, title :' 0.067'}, 
{from:54, to:58, value: 1.088, title :' 0.028'}, 
{from:55, to:59, value: 1.575, title :' 0.151'}, 
];
var seq0batch256_sub82_BSatlas60node = { nodes:nodes,edges:edges};