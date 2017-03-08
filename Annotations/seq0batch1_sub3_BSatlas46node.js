var nodes=[ 
{id:1, value:13, label:'131892',  }, 
{id:2, value:13, label:'   820',  }, 
{id:3, value:13, label:'   564',  }, 
{id:4, value:12, label:'131636',  }, 
{id:5, value:12, label:'197428',  }, 
{id:6, value:12, label:' 66356',  }, 
{id:7, value:11, label:'197172',  }, 
{id:8, value:12, label:' 66100',  }, 
{id:9, value:14, label:' 66228',  }, 
{id:10, value:42, label:'131764', color:'green' }, 
{id:11, value:11, label:'   692',  }, 
{id:12, value:12, label:'   948',  }, 
{id:13, value:15, label:' 66484',  }, 
{id:14, value:11, label:'132020',  }, 
{id:15, value:11, label:'197300',  }, 
{id:16, value:12, label:'197556',  }, 
{id:17, value:11, label:'197557',  }, 
{id:18, value:11, label:'   949',  }, 
{id:19, value:10, label:'132021',  }, 
{id:20, value:11, label:'   693',  }, 
{id:21, value:11, label:' 66485',  }, 
{id:22, value:12, label:' 66229',  }, 
{id:23, value:11, label:'197301',  }, 
{id:24, value:10, label:'131765',  }, 
{id:25, value:11, label:'   565',  }, 
{id:26, value:11, label:'131893',  }, 
{id:27, value:10, label:'197429',  }, 
{id:28, value:10, label:' 66101',  }, 
{id:29, value:10, label:'197173',  }, 
{id:30, value:11, label:' 66357',  }, 
{id:31, value:11, label:'131637',  }, 
{id:32, value:6, label:'196918',  }, 
{id:33, value:3, label:'   821',  }, 
{id:34, value:2, label:' 65846',  }, 
{id:35, value:6, label:'197174',  }, 
{id:36, value:4, label:'197558',  }, 
{id:37, value:6, label:'197430',  }, 
{id:38, value:5, label:' 66102',  }, 
{id:39, value:4, label:' 66358',  }, 
{id:40, value:3, label:'197302',  }, 
{id:41, value:6, label:' 65590',  }, 
{id:42, value:3, label:' 66230',  }, 
{id:43, value:1, label:'196662',  }, 
{id:44, value:1, label:' 66486',  }, 
{id:45, value:1, label:'131766',  }, 
{id:46, value:100, label:'  6152',color:'orange'}, 
];
var edges=[ 
{from:1, to:2, value: 9.252, title :' 0.742'}, 
{from:1, to:3, value: 5.109, title :' 0.544'}, 
{from:1, to:4, value: 8.338, title :' 0.707'}, 
{from:1, to:5, value: 1.611, title :' 0.159'}, 
{from:1, to:6, value: 1.547, title :' 0.145'}, 
{from:1, to:7, value: 1.452, title :' 0.124'}, 
{from:1, to:8, value: 1.431, title :' 0.120'}, 
{from:1, to:9, value: 1.044, title :' 0.014'}, 
{from:1, to:10, value: 1.087, title :' 0.028'}, 
{from:1, to:11, value: 1.083, title :' 0.027'}, 
{from:1, to:12, value: 1.097, title :' 0.031'}, 
{from:1, to:13, value: 1.041, title :' 0.013'}, 
{from:1, to:14, value: 1.114, title :' 0.036'}, 
{from:2, to:3, value: 8.368, title :' 0.708'}, 
{from:2, to:4, value: 5.144, title :' 0.546'}, 
{from:2, to:5, value: 1.543, title :' 0.145'}, 
{from:2, to:6, value: 1.570, title :' 0.150'}, 
{from:2, to:7, value: 1.431, title :' 0.120'}, 
{from:2, to:8, value: 1.432, title :' 0.120'}, 
{from:2, to:10, value: 1.120, title :' 0.038'}, 
{from:2, to:11, value: 1.096, title :' 0.031'}, 
{from:2, to:12, value: 1.096, title :' 0.030'}, 
{from:2, to:13, value: 1.035, title :' 0.012'}, 
{from:2, to:14, value: 1.106, title :' 0.033'}, 
{from:2, to:16, value: 1.039, title :' 0.013'}, 
{from:3, to:4, value: 9.464, title :' 0.749'}, 
{from:3, to:5, value: 1.420, title :' 0.117'}, 
{from:3, to:6, value: 1.428, title :' 0.119'}, 
{from:3, to:7, value: 1.514, title :' 0.138'}, 
{from:3, to:8, value: 1.539, title :' 0.144'}, 
{from:3, to:9, value: 1.037, title :' 0.012'}, 
{from:3, to:10, value: 1.094, title :' 0.030'}, 
{from:3, to:11, value: 1.114, title :' 0.036'}, 
{from:3, to:12, value: 1.086, title :' 0.028'}, 
{from:3, to:13, value: 1.043, title :' 0.014'}, 
{from:3, to:14, value: 1.133, title :' 0.042'}, 
{from:4, to:5, value: 1.437, title :' 0.121'}, 
{from:4, to:6, value: 1.441, title :' 0.122'}, 
{from:4, to:7, value: 1.574, title :' 0.151'}, 
{from:4, to:8, value: 1.505, title :' 0.136'}, 
{from:4, to:9, value: 1.056, title :' 0.018'}, 
{from:4, to:10, value: 1.099, title :' 0.031'}, 
{from:4, to:11, value: 1.082, title :' 0.026'}, 
{from:4, to:12, value: 1.116, title :' 0.037'}, 
{from:4, to:14, value: 1.070, title :' 0.023'}, 
{from:5, to:6, value: 9.285, title :' 0.743'}, 
{from:5, to:7, value: 8.283, title :' 0.705'}, 
{from:5, to:8, value: 5.053, title :' 0.540'}, 
{from:5, to:9, value: 1.071, title :' 0.023'}, 
{from:5, to:10, value: 1.049, title :' 0.016'}, 
{from:5, to:13, value: 1.074, title :' 0.024'}, 
{from:5, to:15, value: 1.082, title :' 0.026'}, 
{from:5, to:16, value: 1.084, title :' 0.027'}, 
{from:6, to:7, value: 4.948, title :' 0.533'}, 
{from:6, to:8, value: 8.035, title :' 0.695'}, 
{from:6, to:9, value: 1.073, title :' 0.023'}, 
{from:6, to:12, value: 1.039, title :' 0.013'}, 
{from:6, to:13, value: 1.091, title :' 0.029'}, 
{from:6, to:15, value: 1.062, title :' 0.020'}, 
{from:6, to:16, value: 1.079, title :' 0.025'}, 
{from:7, to:8, value: 9.052, title :' 0.734'}, 
{from:7, to:9, value: 1.088, title :' 0.028'}, 
{from:7, to:13, value: 1.049, title :' 0.016'}, 
{from:7, to:15, value: 1.107, title :' 0.034'}, 
{from:7, to:16, value: 1.080, title :' 0.026'}, 
{from:8, to:9, value: 1.097, title :' 0.031'}, 
{from:8, to:13, value: 1.058, title :' 0.019'}, 
{from:8, to:15, value: 1.078, title :' 0.025'}, 
{from:8, to:16, value: 1.062, title :' 0.020'}, 
{from:8, to:30, value: 1.044, title :' 0.014'}, 
{from:9, to:10, value: 1.471, title :' 0.129'}, 
{from:9, to:11, value: 1.533, title :' 0.142'}, 
{from:9, to:12, value: 1.394, title :' 0.111'}, 
{from:9, to:13, value: 8.372, title :' 0.708'}, 
{from:9, to:14, value: 1.365, title :' 0.104'}, 
{from:9, to:15, value: 8.609, title :' 0.718'}, 
{from:9, to:16, value: 4.824, title :' 0.525'}, 
{from:10, to:11, value: 8.901, title :' 0.729'}, 
{from:10, to:12, value: 4.846, title :' 0.526'}, 
{from:10, to:13, value: 1.355, title :' 0.101'}, 
{from:10, to:14, value: 8.473, title :' 0.712'}, 
{from:10, to:15, value: 1.492, title :' 0.133'}, 
{from:10, to:16, value: 1.394, title :' 0.111'}, 
{from:11, to:12, value: 8.276, title :' 0.704'}, 
{from:11, to:13, value: 1.398, title :' 0.112'}, 
{from:11, to:14, value: 4.849, title :' 0.526'}, 
{from:11, to:15, value: 1.487, title :' 0.132'}, 
{from:11, to:16, value: 1.396, title :' 0.111'}, 
{from:12, to:13, value: 1.517, title :' 0.139'}, 
{from:12, to:14, value: 8.729, title :' 0.722'}, 
{from:12, to:15, value: 1.389, title :' 0.109'}, 
{from:12, to:16, value: 1.455, title :' 0.125'}, 
{from:13, to:14, value: 1.466, title :' 0.128'}, 
{from:13, to:15, value: 4.784, title :' 0.522'}, 
{from:13, to:16, value: 8.613, title :' 0.718'}, 
{from:13, to:22, value: 1.037, title :' 0.012'}, 
{from:14, to:15, value: 1.391, title :' 0.110'}, 
{from:14, to:16, value: 1.467, title :' 0.128'}, 
{from:15, to:16, value: 8.256, title :' 0.704'}, 
{from:17, to:18, value: 1.364, title :' 0.103'}, 
{from:17, to:19, value: 1.366, title :' 0.104'}, 
{from:17, to:20, value: 1.280, title :' 0.082'}, 
{from:17, to:21, value: 8.496, title :' 0.713'}, 
{from:17, to:22, value: 4.603, title :' 0.509'}, 
{from:17, to:23, value: 8.167, title :' 0.700'}, 
{from:17, to:24, value: 1.316, title :' 0.092'}, 
{from:17, to:27, value: 1.104, title :' 0.033'}, 
{from:17, to:28, value: 1.060, title :' 0.020'}, 
{from:17, to:29, value: 1.077, title :' 0.025'}, 
{from:17, to:30, value: 1.084, title :' 0.027'}, 
{from:18, to:19, value: 8.877, title :' 0.728'}, 
{from:18, to:20, value: 8.194, title :' 0.701'}, 
{from:18, to:21, value: 1.373, title :' 0.106'}, 
{from:18, to:22, value: 1.289, title :' 0.085'}, 
{from:18, to:23, value: 1.302, title :' 0.088'}, 
{from:18, to:24, value: 4.747, title :' 0.519'}, 
{from:18, to:25, value: 1.052, title :' 0.017'}, 
{from:18, to:26, value: 1.057, title :' 0.018'}, 
{from:18, to:31, value: 1.058, title :' 0.019'}, 
{from:18, to:33, value: 1.055, title :' 0.018'}, 
{from:19, to:20, value: 4.752, title :' 0.520'}, 
{from:19, to:21, value: 1.361, title :' 0.103'}, 
{from:19, to:22, value: 1.296, title :' 0.087'}, 
{from:19, to:23, value: 1.282, title :' 0.083'}, 
{from:19, to:24, value: 8.101, title :' 0.697'}, 
{from:19, to:25, value: 1.058, title :' 0.019'}, 
{from:19, to:26, value: 1.071, title :' 0.023'}, 
{from:19, to:31, value: 1.059, title :' 0.019'}, 
{from:20, to:21, value: 1.294, title :' 0.086'}, 
{from:20, to:22, value: 1.368, title :' 0.105'}, 
{from:20, to:23, value: 1.350, title :' 0.100'}, 
{from:20, to:24, value: 8.426, title :' 0.710'}, 
{from:20, to:25, value: 1.105, title :' 0.033'}, 
{from:20, to:26, value: 1.034, title :' 0.011'}, 
{from:20, to:31, value: 1.062, title :' 0.020'}, 
{from:20, to:32, value: 1.038, title :' 0.013'}, 
{from:21, to:22, value: 8.128, title :' 0.698'}, 
{from:21, to:23, value: 4.494, title :' 0.501'}, 
{from:21, to:24, value: 1.288, title :' 0.084'}, 
{from:21, to:27, value: 1.075, title :' 0.024'}, 
{from:21, to:28, value: 1.062, title :' 0.020'}, 
{from:21, to:29, value: 1.054, title :' 0.017'}, 
{from:21, to:30, value: 1.086, title :' 0.028'}, 
{from:22, to:23, value: 8.178, title :' 0.700'}, 
{from:22, to:24, value: 1.368, title :' 0.104'}, 
{from:22, to:27, value: 1.042, title :' 0.014'}, 
{from:22, to:28, value: 1.089, title :' 0.028'}, 
{from:22, to:29, value: 1.058, title :' 0.019'}, 
{from:22, to:30, value: 1.048, title :' 0.016'}, 
{from:23, to:24, value: 1.390, title :' 0.110'}, 
{from:23, to:27, value: 1.079, title :' 0.025'}, 
{from:23, to:28, value: 1.075, title :' 0.024'}, 
{from:23, to:29, value: 1.086, title :' 0.028'}, 
{from:23, to:30, value: 1.050, title :' 0.016'}, 
{from:24, to:25, value: 1.053, title :' 0.017'}, 
{from:24, to:26, value: 1.040, title :' 0.013'}, 
{from:24, to:31, value: 1.067, title :' 0.022'}, 
{from:25, to:26, value: 4.432, title :' 0.496'}, 
{from:25, to:27, value: 1.255, title :' 0.076'}, 
{from:25, to:28, value: 1.414, title :' 0.115'}, 
{from:25, to:29, value: 1.347, title :' 0.099'}, 
{from:25, to:30, value: 1.305, title :' 0.089'}, 
{from:25, to:31, value: 7.307, title :' 0.663'}, 
{from:25, to:33, value: 8.423, title :' 0.710'}, 
{from:26, to:27, value: 1.387, title :' 0.109'}, 
{from:26, to:28, value: 1.279, title :' 0.082'}, 
{from:26, to:29, value: 1.301, title :' 0.088'}, 
{from:26, to:30, value: 1.321, title :' 0.093'}, 
{from:26, to:31, value: 8.206, title :' 0.702'}, 
{from:26, to:33, value: 7.755, title :' 0.683'}, 
{from:27, to:28, value: 4.557, title :' 0.506'}, 
{from:27, to:29, value: 8.043, title :' 0.695'}, 
{from:27, to:30, value: 8.143, title :' 0.699'}, 
{from:27, to:31, value: 1.320, title :' 0.092'}, 
{from:28, to:29, value: 7.813, title :' 0.685'}, 
{from:28, to:30, value: 7.920, title :' 0.690'}, 
{from:28, to:31, value: 1.338, title :' 0.097'}, 
{from:29, to:30, value: 4.575, title :' 0.507'}, 
{from:29, to:31, value: 1.363, title :' 0.103'}, 
{from:30, to:31, value: 1.298, title :' 0.087'}, 
{from:31, to:41, value: 1.037, title :' 0.012'}, 
{from:32, to:34, value:10.836, title :' 0.794'}, 
{from:32, to:37, value: 1.038, title :' 0.013'}, 
{from:32, to:39, value: 1.038, title :' 0.012'}, 
{from:32, to:41, value: 2.497, title :' 0.305'}, 
{from:32, to:43, value: 3.062, title :' 0.373'}, 
{from:34, to:41, value: 3.093, title :' 0.376'}, 
{from:35, to:37, value: 4.390, title :' 0.493'}, 
{from:35, to:38, value: 3.123, title :' 0.380'}, 
{from:35, to:39, value: 1.857, title :' 0.206'}, 
{from:35, to:40, value: 1.052, title :' 0.017'}, 
{from:35, to:41, value: 1.043, title :' 0.014'}, 
{from:35, to:45, value: 1.041, title :' 0.014'}, 
{from:36, to:37, value: 1.055, title :' 0.018'}, 
{from:36, to:40, value: 4.932, title :' 0.532'}, 
{from:36, to:42, value: 1.911, title :' 0.216'}, 
{from:36, to:44, value: 2.836, title :' 0.348'}, 
{from:37, to:38, value: 1.858, title :' 0.207'}, 
{from:37, to:39, value: 3.011, title :' 0.367'}, 
{from:37, to:41, value: 1.043, title :' 0.014'}, 
{from:38, to:39, value: 4.253, title :' 0.483'}, 
{from:38, to:41, value: 1.041, title :' 0.013'}, 
{from:38, to:42, value: 1.037, title :' 0.012'}, 
{from:40, to:42, value: 2.893, title :' 0.354'}, 
];
var seq0batch1_sub3_BSatlas46node = { nodes:nodes,edges:edges};