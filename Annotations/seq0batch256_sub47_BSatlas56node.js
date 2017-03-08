var nodes=[ 
{id:1, value:11, label:'190906',  }, 
{id:2, value:11, label:'191416',  }, 
{id:3, value:11, label:'190904',  }, 
{id:4, value:11, label:'191417',  }, 
{id:5, value:11, label:'191419',  }, 
{id:6, value:11, label:'190907',  }, 
{id:7, value:11, label:'192443',  }, 
{id:8, value:11, label:'191418',  }, 
{id:9, value:9, label:'190905',  }, 
{id:10, value:11, label:'191931',  }, 
{id:11, value:11, label:'191929',  }, 
{id:12, value:11, label:'191928',  }, 
{id:13, value:10, label:'192440',  }, 
{id:14, value:10, label:'192441',  }, 
{id:15, value:11, label:'191930',  }, 
{id:16, value:41, label:'192442', color:'green' }, 
{id:17, value:33, label:' 46552', color:'green' }, 
{id:18, value:3, label:' 47064',  }, 
{id:19, value:3, label:' 93374',  }, 
{id:20, value:3, label:' 93886',  }, 
{id:21, value:3, label:' 93375',  }, 
{id:22, value:3, label:' 46553',  }, 
{id:23, value:33, label:' 93887', color:'green' }, 
{id:24, value:3, label:' 47065',  }, 
{id:25, value:8, label:' 85941',  }, 
{id:26, value:37, label:' 85429', color:'green' }, 
{id:27, value:7, label:'217013',  }, 
{id:28, value:7, label:' 85940',  }, 
{id:29, value:7, label:'216757',  }, 
{id:30, value:7, label:' 85173',  }, 
{id:31, value:6, label:'216501',  }, 
{id:32, value:6, label:'216244',  }, 
{id:33, value:6, label:' 85685',  }, 
{id:34, value:6, label:'216500',  }, 
{id:35, value:6, label:'217012',  }, 
{id:36, value:5, label:'216245',  }, 
{id:37, value:7, label:' 85684',  }, 
{id:38, value:5, label:' 85428',  }, 
{id:39, value:5, label:' 85172',  }, 
{id:40, value:5, label:'216756',  }, 
{id:41, value:3, label:'  9782',  }, 
{id:42, value:3, label:'  9270',  }, 
{id:43, value:4, label:'  9526',  }, 
{id:44, value:4, label:'140342',  }, 
{id:45, value:4, label:' 84379',  }, 
{id:46, value:3, label:'140854',  }, 
{id:47, value:3, label:'140598',  }, 
{id:48, value:3, label:'215195',  }, 
{id:49, value:3, label:'215451',  }, 
{id:50, value:3, label:' 10038',  }, 
{id:51, value:33, label:' 84123', color:'green' }, 
{id:52, value:3, label:' 84635',  }, 
{id:53, value:3, label:'215963',  }, 
{id:54, value:3, label:' 84891',  }, 
{id:55, value:33, label:'141110', color:'green' }, 
{id:56, value:100, label:'  6152',color:'orange'}, 
];
var edges=[ 
{from:1, to:2, value: 1.492, title :' 0.133'}, 
{from:1, to:3, value: 1.725, title :' 0.182'}, 
{from:1, to:4, value: 1.472, title :' 0.129'}, 
{from:1, to:5, value: 4.747, title :' 0.519'}, 
{from:1, to:6, value:11.002, title :' 0.799'}, 
{from:1, to:7, value: 1.088, title :' 0.028'}, 
{from:1, to:8, value: 6.450, title :' 0.621'}, 
{from:1, to:9, value: 1.565, title :' 0.149'}, 
{from:1, to:10, value: 1.136, title :' 0.042'}, 
{from:1, to:15, value: 1.162, title :' 0.050'}, 
{from:1, to:16, value: 1.134, title :' 0.042'}, 
{from:2, to:3, value: 7.137, title :' 0.655'}, 
{from:2, to:4, value:11.009, title :' 0.800'}, 
{from:2, to:5, value: 1.525, title :' 0.141'}, 
{from:2, to:6, value: 1.404, title :' 0.113'}, 
{from:2, to:8, value: 1.546, title :' 0.145'}, 
{from:2, to:9, value: 4.515, title :' 0.502'}, 
{from:2, to:11, value: 1.104, title :' 0.033'}, 
{from:2, to:12, value: 1.115, title :' 0.036'}, 
{from:2, to:13, value: 1.204, title :' 0.062'}, 
{from:2, to:14, value: 1.181, title :' 0.056'}, 
{from:3, to:4, value: 4.613, title :' 0.510'}, 
{from:3, to:5, value: 1.381, title :' 0.107'}, 
{from:3, to:6, value: 1.559, title :' 0.148'}, 
{from:3, to:8, value: 1.390, title :' 0.110'}, 
{from:3, to:9, value:10.338, title :' 0.779'}, 
{from:3, to:11, value: 1.150, title :' 0.047'}, 
{from:3, to:12, value: 1.151, title :' 0.047'}, 
{from:3, to:13, value: 1.103, title :' 0.033'}, 
{from:3, to:14, value: 1.109, title :' 0.035'}, 
{from:4, to:5, value: 1.592, title :' 0.155'}, 
{from:4, to:6, value: 1.416, title :' 0.116'}, 
{from:4, to:8, value: 1.548, title :' 0.146'}, 
{from:4, to:9, value: 6.976, title :' 0.647'}, 
{from:4, to:11, value: 1.096, title :' 0.030'}, 
{from:4, to:12, value: 1.093, title :' 0.030'}, 
{from:4, to:13, value: 1.107, title :' 0.034'}, 
{from:4, to:14, value: 1.150, title :' 0.046'}, 
{from:5, to:6, value: 6.304, title :' 0.614'}, 
{from:5, to:7, value: 1.200, title :' 0.061'}, 
{from:5, to:8, value:10.928, title :' 0.797'}, 
{from:5, to:9, value: 1.456, title :' 0.125'}, 
{from:5, to:10, value: 1.103, title :' 0.033'}, 
{from:5, to:15, value: 1.077, title :' 0.025'}, 
{from:5, to:16, value: 1.154, title :' 0.048'}, 
{from:6, to:7, value: 1.118, title :' 0.037'}, 
{from:6, to:8, value: 4.471, title :' 0.499'}, 
{from:6, to:9, value: 1.642, title :' 0.165'}, 
{from:6, to:10, value: 1.133, title :' 0.042'}, 
{from:6, to:15, value: 1.092, title :' 0.029'}, 
{from:6, to:16, value: 1.084, title :' 0.027'}, 
{from:7, to:8, value: 1.130, title :' 0.041'}, 
{from:7, to:10, value: 5.975, title :' 0.596'}, 
{from:7, to:11, value: 1.401, title :' 0.112'}, 
{from:7, to:12, value: 1.408, title :' 0.114'}, 
{from:7, to:13, value: 1.561, title :' 0.148'}, 
{from:7, to:14, value: 1.586, title :' 0.154'}, 
{from:7, to:15, value: 4.420, title :' 0.495'}, 
{from:7, to:16, value:10.747, title :' 0.792'}, 
{from:8, to:9, value: 1.391, title :' 0.110'}, 
{from:8, to:10, value: 1.108, title :' 0.034'}, 
{from:8, to:15, value: 1.096, title :' 0.030'}, 
{from:8, to:16, value: 1.098, title :' 0.031'}, 
{from:9, to:11, value: 1.125, title :' 0.039'}, 
{from:9, to:12, value: 1.113, title :' 0.036'}, 
{from:10, to:11, value: 1.526, title :' 0.141'}, 
{from:10, to:12, value: 1.639, title :' 0.165'}, 
{from:10, to:13, value: 1.400, title :' 0.112'}, 
{from:10, to:14, value: 1.425, title :' 0.118'}, 
{from:10, to:15, value:10.523, title :' 0.785'}, 
{from:10, to:16, value: 4.096, title :' 0.470'}, 
{from:11, to:12, value:10.804, title :' 0.793'}, 
{from:11, to:13, value: 4.358, title :' 0.491'}, 
{from:11, to:14, value: 6.204, title :' 0.608'}, 
{from:11, to:15, value: 1.511, title :' 0.138'}, 
{from:11, to:16, value: 1.362, title :' 0.103'}, 
{from:12, to:13, value: 5.857, title :' 0.589'}, 
{from:12, to:14, value: 4.292, title :' 0.486'}, 
{from:12, to:15, value: 1.494, title :' 0.134'}, 
{from:12, to:16, value: 1.322, title :' 0.093'}, 
{from:13, to:14, value:10.634, title :' 0.788'}, 
{from:13, to:15, value: 1.436, title :' 0.121'}, 
{from:13, to:16, value: 1.542, title :' 0.144'}, 
{from:14, to:15, value: 1.264, title :' 0.078'}, 
{from:14, to:16, value: 1.407, title :' 0.114'}, 
{from:15, to:16, value: 6.011, title :' 0.598'}, 
{from:17, to:18, value: 4.968, title :' 0.534'}, 
{from:17, to:22, value: 2.473, title :' 0.302'}, 
{from:17, to:24, value: 1.620, title :' 0.161'}, 
{from:18, to:22, value: 1.670, title :' 0.171'}, 
{from:18, to:24, value: 2.371, title :' 0.288'}, 
{from:19, to:20, value: 3.998, title :' 0.462'}, 
{from:19, to:21, value: 2.743, title :' 0.336'}, 
{from:19, to:23, value: 1.624, title :' 0.162'}, 
{from:20, to:21, value: 1.660, title :' 0.169'}, 
{from:20, to:23, value: 2.621, title :' 0.321'}, 
{from:21, to:23, value: 3.692, title :' 0.435'}, 
{from:22, to:24, value: 4.055, title :' 0.467'}, 
{from:25, to:26, value: 1.660, title :' 0.169'}, 
{from:25, to:27, value: 1.384, title :' 0.108'}, 
{from:25, to:28, value: 2.208, title :' 0.264'}, 
{from:25, to:30, value: 1.076, title :' 0.024'}, 
{from:25, to:31, value: 1.078, title :' 0.025'}, 
{from:25, to:33, value: 1.314, title :' 0.091'}, 
{from:25, to:37, value: 1.084, title :' 0.027'}, 
{from:25, to:38, value: 1.178, title :' 0.055'}, 
{from:26, to:27, value: 1.076, title :' 0.024'}, 
{from:26, to:28, value: 1.161, title :' 0.050'}, 
{from:26, to:30, value: 1.411, title :' 0.115'}, 
{from:26, to:31, value: 1.412, title :' 0.115'}, 
{from:26, to:34, value: 1.082, title :' 0.026'}, 
{from:26, to:38, value: 2.022, title :' 0.235'}, 
{from:27, to:28, value: 1.106, title :' 0.034'}, 
{from:27, to:29, value: 1.274, title :' 0.081'}, 
{from:27, to:31, value: 1.646, title :' 0.166'}, 
{from:27, to:34, value: 1.163, title :' 0.050'}, 
{from:27, to:35, value: 2.165, title :' 0.257'}, 
{from:28, to:33, value: 1.098, title :' 0.031'}, 
{from:28, to:35, value: 1.366, title :' 0.104'}, 
{from:28, to:37, value: 1.293, title :' 0.086'}, 
{from:28, to:38, value: 1.547, title :' 0.145'}, 
{from:29, to:32, value: 1.134, title :' 0.042'}, 
{from:29, to:33, value: 1.380, title :' 0.107'}, 
{from:29, to:35, value: 1.093, title :' 0.030'}, 
{from:29, to:36, value: 1.610, title :' 0.159'}, 
{from:29, to:37, value: 1.077, title :' 0.025'}, 
{from:29, to:40, value: 2.183, title :' 0.260'}, 
{from:30, to:32, value: 1.105, title :' 0.033'}, 
{from:30, to:33, value: 1.617, title :' 0.160'}, 
{from:30, to:36, value: 1.364, title :' 0.104'}, 
{from:30, to:37, value: 1.106, title :' 0.034'}, 
{from:30, to:39, value: 1.994, title :' 0.230'}, 
{from:31, to:34, value: 2.223, title :' 0.266'}, 
{from:31, to:35, value: 1.103, title :' 0.033'}, 
{from:31, to:36, value: 1.295, title :' 0.086'}, 
{from:32, to:34, value: 1.243, title :' 0.072'}, 
{from:32, to:36, value: 2.311, title :' 0.279'}, 
{from:32, to:39, value: 1.457, title :' 0.126'}, 
{from:32, to:40, value: 1.445, title :' 0.123'}, 
{from:33, to:37, value: 2.091, title :' 0.246'}, 
{from:33, to:39, value: 1.126, title :' 0.040'}, 
{from:34, to:35, value: 1.595, title :' 0.156'}, 
{from:34, to:38, value: 1.355, title :' 0.101'}, 
{from:35, to:40, value: 1.289, title :' 0.085'}, 
{from:36, to:40, value: 1.087, title :' 0.028'}, 
{from:37, to:39, value: 1.496, title :' 0.134'}, 
{from:37, to:40, value: 1.316, title :' 0.091'}, 
{from:38, to:39, value: 1.341, title :' 0.098'}, 
{from:41, to:42, value: 1.643, title :' 0.165'}, 
{from:41, to:46, value: 1.465, title :' 0.127'}, 
{from:41, to:50, value: 1.523, title :' 0.140'}, 
{from:42, to:43, value: 1.497, title :' 0.134'}, 
{from:42, to:44, value: 1.461, title :' 0.126'}, 
{from:43, to:44, value: 1.076, title :' 0.024'}, 
{from:43, to:47, value: 1.530, title :' 0.142'}, 
{from:43, to:50, value: 1.407, title :' 0.114'}, 
{from:44, to:46, value: 1.322, title :' 0.093'}, 
{from:44, to:47, value: 1.481, title :' 0.131'}, 
{from:45, to:48, value: 1.085, title :' 0.027'}, 
{from:45, to:49, value: 1.563, title :' 0.149'}, 
{from:45, to:51, value: 1.559, title :' 0.148'}, 
{from:45, to:54, value: 1.088, title :' 0.028'}, 
{from:46, to:55, value: 1.477, title :' 0.130'}, 
{from:47, to:55, value: 1.252, title :' 0.075'}, 
{from:48, to:49, value: 1.549, title :' 0.146'}, 
{from:48, to:51, value: 1.484, title :' 0.132'}, 
{from:49, to:53, value: 1.097, title :' 0.031'}, 
{from:50, to:55, value: 1.219, title :' 0.066'}, 
{from:51, to:52, value: 1.091, title :' 0.029'}, 
{from:52, to:53, value: 1.076, title :' 0.024'}, 
{from:52, to:54, value: 1.552, title :' 0.146'}, 
{from:53, to:54, value: 1.367, title :' 0.104'}, 
];
var seq0batch256_sub47_BSatlas56node = { nodes:nodes,edges:edges};