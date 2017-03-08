var nodes=[ 
{id:1, value:22, label:'137215',  }, 
{id:2, value:13, label:'220664',  }, 
{id:3, value:15, label:'219642',  }, 
{id:4, value:13, label:'220154',  }, 
{id:5, value:13, label:'219641',  }, 
{id:6, value:12, label:'220665',  }, 
{id:7, value:12, label:'219643',  }, 
{id:8, value:14, label:'221176',  }, 
{id:9, value:12, label:'220153',  }, 
{id:10, value:13, label:'221178',  }, 
{id:11, value:11, label:'220152',  }, 
{id:12, value:11, label:'220666',  }, 
{id:13, value:13, label:'221177',  }, 
{id:14, value:11, label:'220667',  }, 
{id:15, value:42, label:'221179', color:'green' }, 
{id:16, value:12, label:'220155',  }, 
{id:17, value:11, label:'219640',  }, 
{id:18, value:23, label:'137212',  }, 
{id:19, value:22, label:'136189',  }, 
{id:20, value:10, label:'137213',  }, 
{id:21, value:16, label:'136957',  }, 
{id:22, value:10, label:'  6143',  }, 
{id:23, value:6, label:'  5885',  }, 
{id:24, value:7, label:'  5373',  }, 
{id:25, value:3, label:'136959',  }, 
{id:26, value:8, label:'  5887',  }, 
{id:27, value:9, label:'  5631',  }, 
{id:28, value:1, label:'137214',  }, 
{id:29, value:12, label:'  4605',  }, 
{id:30, value:6, label:'  5375',  }, 
{id:31, value:13, label:'136701',  }, 
{id:32, value:3, label:' 78301',  }, 
{id:33, value:3, label:' 78813',  }, 
{id:34, value:3, label:' 78812',  }, 
{id:35, value:33, label:' 78300', color:'green' }, 
{id:36, value:3, label:'153827',  }, 
{id:37, value:3, label:' 23011',  }, 
{id:38, value:3, label:' 22755',  }, 
{id:39, value:5, label:'135677',  }, 
{id:40, value:5, label:'136703',  }, 
{id:41, value:33, label:'154083', color:'green' }, 
{id:42, value:3, label:'  4607',  }, 
{id:43, value:3, label:'141425',  }, 
{id:44, value:7, label:'  5629',  }, 
{id:45, value:2, label:' 10353',  }, 
{id:46, value:3, label:' 10609',  }, 
{id:47, value:36, label:'  6141', color:'green' }, 
{id:48, value:32, label:'141681', color:'green' }, 
{id:49, value:5, label:'136700',  }, 
{id:50, value:2, label:'136445',  }, 
{id:51, value:2, label:'136191',  }, 
{id:52, value:4, label:'133117',  }, 
{id:53, value:4, label:'132861',  }, 
{id:54, value:2, label:'   509',  }, 
{id:55, value:1, label:'  5117',  }, 
{id:56, value:2, label:'132093',  }, 
{id:57, value:2, label:' 70141',  }, 
{id:58, value:1, label:'  4604',  }, 
{id:59, value:2, label:'136188',  }, 
{id:60, value:1, label:'136956',  }, 
{id:61, value:31, label:'  4349', color:'green' }, 
{id:62, value:1, label:'135933',  }, 
{id:63, value:100, label:'  6152',color:'orange'}, 
];
var edges=[ 
{from:1, to:18, value: 1.175, title :' 0.054'}, 
{from:1, to:19, value: 1.130, title :' 0.041'}, 
{from:1, to:20, value: 1.181, title :' 0.055'}, 
{from:1, to:21, value: 1.131, title :' 0.041'}, 
{from:1, to:22, value: 2.543, title :' 0.311'}, 
{from:1, to:25, value:17.371, title :' 0.952'}, 
{from:1, to:26, value: 2.487, title :' 0.304'}, 
{from:1, to:27, value: 2.510, title :' 0.307'}, 
{from:1, to:28, value:14.545, title :' 0.892'}, 
{from:1, to:30, value: 2.547, title :' 0.312'}, 
{from:1, to:31, value: 1.135, title :' 0.042'}, 
{from:1, to:39, value: 1.099, title :' 0.031'}, 
{from:1, to:40, value: 2.513, title :' 0.307'}, 
{from:1, to:42, value: 1.970, title :' 0.226'}, 
{from:1, to:49, value: 1.126, title :' 0.039'}, 
{from:1, to:51, value: 1.598, title :' 0.156'}, 
{from:1, to:52, value: 1.278, title :' 0.082'}, 
{from:1, to:53, value: 1.249, title :' 0.074'}, 
{from:1, to:54, value: 1.269, title :' 0.080'}, 
{from:1, to:56, value: 1.274, title :' 0.081'}, 
{from:1, to:57, value: 1.127, title :' 0.040'}, 
{from:1, to:59, value: 1.124, title :' 0.039'}, 
{from:2, to:3, value: 1.080, title :' 0.026'}, 
{from:2, to:5, value: 1.159, title :' 0.049'}, 
{from:2, to:6, value:12.406, title :' 0.839'}, 
{from:2, to:7, value: 1.085, title :' 0.027'}, 
{from:2, to:8, value: 8.994, title :' 0.732'}, 
{from:2, to:9, value: 1.138, title :' 0.043'}, 
{from:2, to:10, value: 2.063, title :' 0.241'}, 
{from:2, to:11, value: 1.129, title :' 0.040'}, 
{from:2, to:12, value: 2.386, title :' 0.290'}, 
{from:2, to:13, value: 6.683, title :' 0.633'}, 
{from:2, to:14, value: 2.418, title :' 0.294'}, 
{from:2, to:15, value: 2.049, title :' 0.239'}, 
{from:2, to:17, value: 1.172, title :' 0.053'}, 
{from:3, to:4, value: 9.869, title :' 0.763'}, 
{from:3, to:5, value: 2.448, title :' 0.298'}, 
{from:3, to:6, value: 1.076, title :' 0.024'}, 
{from:3, to:7, value:11.311, title :' 0.809'}, 
{from:3, to:8, value: 1.075, title :' 0.024'}, 
{from:3, to:9, value: 2.095, title :' 0.246'}, 
{from:3, to:10, value: 1.164, title :' 0.051'}, 
{from:3, to:11, value: 2.099, title :' 0.247'}, 
{from:3, to:12, value: 1.171, title :' 0.053'}, 
{from:3, to:13, value: 1.085, title :' 0.027'}, 
{from:3, to:14, value: 1.127, title :' 0.040'}, 
{from:3, to:15, value: 1.102, title :' 0.032'}, 
{from:3, to:16, value: 6.196, title :' 0.608'}, 
{from:3, to:17, value: 2.176, title :' 0.259'}, 
{from:4, to:5, value: 1.915, title :' 0.216'}, 
{from:4, to:7, value: 6.584, title :' 0.628'}, 
{from:4, to:8, value: 1.077, title :' 0.025'}, 
{from:4, to:9, value: 2.226, title :' 0.267'}, 
{from:4, to:10, value: 1.229, title :' 0.069'}, 
{from:4, to:11, value: 2.303, title :' 0.278'}, 
{from:4, to:12, value: 1.149, title :' 0.046'}, 
{from:4, to:13, value: 1.092, title :' 0.029'}, 
{from:4, to:14, value: 1.130, title :' 0.041'}, 
{from:4, to:15, value: 1.165, title :' 0.051'}, 
{from:4, to:16, value:11.575, title :' 0.816'}, 
{from:4, to:17, value: 1.835, title :' 0.202'}, 
{from:5, to:6, value: 1.141, title :' 0.044'}, 
{from:5, to:7, value: 2.423, title :' 0.295'}, 
{from:5, to:8, value: 1.139, title :' 0.043'}, 
{from:5, to:9, value: 8.704, title :' 0.721'}, 
{from:5, to:10, value: 1.090, title :' 0.029'}, 
{from:5, to:11, value: 6.064, title :' 0.601'}, 
{from:5, to:13, value: 1.098, title :' 0.031'}, 
{from:5, to:15, value: 1.079, title :' 0.025'}, 
{from:5, to:16, value: 1.940, title :' 0.221'}, 
{from:5, to:17, value:11.054, title :' 0.801'}, 
{from:6, to:8, value: 6.633, title :' 0.631'}, 
{from:6, to:9, value: 1.134, title :' 0.042'}, 
{from:6, to:10, value: 1.935, title :' 0.220'}, 
{from:6, to:11, value: 1.075, title :' 0.024'}, 
{from:6, to:12, value: 2.197, title :' 0.262'}, 
{from:6, to:13, value: 9.755, title :' 0.759'}, 
{from:6, to:14, value: 2.231, title :' 0.267'}, 
{from:6, to:15, value: 1.940, title :' 0.221'}, 
{from:6, to:17, value: 1.079, title :' 0.025'}, 
{from:7, to:9, value: 2.093, title :' 0.246'}, 
{from:7, to:10, value: 1.084, title :' 0.027'}, 
{from:7, to:11, value: 2.045, title :' 0.239'}, 
{from:7, to:12, value: 1.110, title :' 0.035'}, 
{from:7, to:14, value: 1.161, title :' 0.050'}, 
{from:7, to:15, value: 1.129, title :' 0.040'}, 
{from:7, to:16, value: 8.355, title :' 0.708'}, 
{from:7, to:17, value: 2.101, title :' 0.247'}, 
{from:8, to:9, value: 1.147, title :' 0.046'}, 
{from:8, to:10, value: 2.202, title :' 0.263'}, 
{from:8, to:11, value: 1.126, title :' 0.040'}, 
{from:8, to:12, value: 1.967, title :' 0.226'}, 
{from:8, to:13, value:10.588, title :' 0.787'}, 
{from:8, to:14, value: 1.943, title :' 0.221'}, 
{from:8, to:15, value: 2.106, title :' 0.248'}, 
{from:8, to:16, value: 1.080, title :' 0.026'}, 
{from:8, to:17, value: 1.082, title :' 0.026'}, 
{from:9, to:10, value: 1.079, title :' 0.025'}, 
{from:9, to:11, value:11.580, title :' 0.816'}, 
{from:9, to:13, value: 1.158, title :' 0.049'}, 
{from:9, to:16, value: 1.994, title :' 0.230'}, 
{from:9, to:17, value: 5.854, title :' 0.589'}, 
{from:10, to:12, value: 9.187, title :' 0.739'}, 
{from:10, to:13, value: 2.061, title :' 0.241'}, 
{from:10, to:14, value: 5.850, title :' 0.589'}, 
{from:10, to:15, value:10.171, title :' 0.773'}, 
{from:10, to:16, value: 1.162, title :' 0.050'}, 
{from:11, to:13, value: 1.100, title :' 0.032'}, 
{from:11, to:16, value: 2.144, title :' 0.254'}, 
{from:11, to:17, value: 8.644, title :' 0.719'}, 
{from:12, to:13, value: 1.747, title :' 0.186'}, 
{from:12, to:14, value:11.328, title :' 0.809'}, 
{from:12, to:15, value: 6.048, title :' 0.600'}, 
{from:12, to:16, value: 1.082, title :' 0.026'}, 
{from:13, to:14, value: 1.802, title :' 0.196'}, 
{from:13, to:15, value: 2.166, title :' 0.258'}, 
{from:13, to:17, value: 1.081, title :' 0.026'}, 
{from:14, to:15, value: 8.111, title :' 0.698'}, 
{from:14, to:16, value: 1.140, title :' 0.044'}, 
{from:15, to:16, value: 1.156, title :' 0.048'}, 
{from:16, to:17, value: 1.787, title :' 0.194'}, 
{from:18, to:19, value: 1.107, title :' 0.034'}, 
{from:18, to:20, value:12.025, title :' 0.829'}, 
{from:18, to:21, value: 1.235, title :' 0.070'}, 
{from:18, to:22, value: 1.469, title :' 0.128'}, 
{from:18, to:25, value: 1.173, title :' 0.053'}, 
{from:18, to:26, value: 1.481, title :' 0.131'}, 
{from:18, to:27, value: 1.422, title :' 0.117'}, 
{from:18, to:30, value: 1.460, title :' 0.126'}, 
{from:18, to:31, value: 1.313, title :' 0.091'}, 
{from:18, to:39, value: 1.101, title :' 0.032'}, 
{from:18, to:40, value: 1.266, title :' 0.079'}, 
{from:18, to:42, value: 1.299, title :' 0.087'}, 
{from:18, to:44, value: 1.093, title :' 0.030'}, 
{from:18, to:47, value: 1.085, title :' 0.027'}, 
{from:18, to:49, value: 1.348, title :' 0.100'}, 
{from:18, to:50, value: 1.121, title :' 0.038'}, 
{from:18, to:51, value: 1.192, title :' 0.059'}, 
{from:18, to:53, value: 1.081, title :' 0.026'}, 
{from:18, to:56, value: 1.079, title :' 0.025'}, 
{from:18, to:59, value: 1.105, title :' 0.033'}, 
{from:18, to:60, value: 1.147, title :' 0.046'}, 
{from:18, to:62, value: 1.083, title :' 0.027'}, 
{from:19, to:20, value: 1.134, title :' 0.042'}, 
{from:19, to:21, value: 1.098, title :' 0.031'}, 
{from:19, to:22, value: 1.393, title :' 0.111'}, 
{from:19, to:25, value: 1.133, title :' 0.042'}, 
{from:19, to:26, value: 1.355, title :' 0.101'}, 
{from:19, to:27, value: 1.358, title :' 0.102'}, 
{from:19, to:29, value: 1.403, title :' 0.113'}, 
{from:19, to:30, value: 1.360, title :' 0.102'}, 
{from:19, to:31, value: 1.123, title :' 0.039'}, 
{from:19, to:39, value: 2.074, title :' 0.243'}, 
{from:19, to:40, value: 1.216, title :' 0.065'}, 
{from:19, to:42, value: 1.467, title :' 0.128'}, 
{from:19, to:49, value: 1.090, title :' 0.029'}, 
{from:19, to:52, value: 1.188, title :' 0.057'}, 
{from:19, to:53, value: 1.124, title :' 0.039'}, 
{from:19, to:54, value: 1.200, title :' 0.061'}, 
{from:19, to:55, value: 1.412, title :' 0.115'}, 
{from:19, to:57, value: 1.218, title :' 0.066'}, 
{from:19, to:58, value: 1.301, title :' 0.088'}, 
{from:19, to:61, value: 1.089, title :' 0.028'}, 
{from:20, to:21, value: 1.269, title :' 0.079'}, 
{from:20, to:22, value: 1.546, title :' 0.145'}, 
{from:20, to:26, value: 1.574, title :' 0.151'}, 
{from:20, to:27, value: 1.521, title :' 0.140'}, 
{from:20, to:31, value: 1.343, title :' 0.098'}, 
{from:20, to:44, value: 1.082, title :' 0.026'}, 
{from:20, to:47, value: 1.096, title :' 0.030'}, 
{from:21, to:22, value: 1.397, title :' 0.111'}, 
{from:21, to:23, value: 1.088, title :' 0.028'}, 
{from:21, to:24, value: 1.074, title :' 0.024'}, 
{from:21, to:26, value: 1.413, title :' 0.115'}, 
{from:21, to:27, value: 1.369, title :' 0.105'}, 
{from:21, to:29, value: 1.088, title :' 0.028'}, 
{from:21, to:30, value: 1.384, title :' 0.108'}, 
{from:21, to:31, value: 1.140, title :' 0.044'}, 
{from:21, to:39, value: 1.075, title :' 0.024'}, 
{from:21, to:40, value: 1.169, title :' 0.052'}, 
{from:21, to:49, value: 1.155, title :' 0.048'}, 
{from:21, to:50, value: 1.700, title :' 0.177'}, 
{from:22, to:23, value: 1.136, title :' 0.043'}, 
{from:22, to:24, value: 1.090, title :' 0.029'}, 
{from:22, to:29, value: 1.224, title :' 0.067'}, 
{from:22, to:31, value: 1.335, title :' 0.096'}, 
{from:22, to:44, value: 1.134, title :' 0.042'}, 
{from:23, to:24, value:13.018, title :' 0.855'}, 
{from:23, to:27, value: 1.137, title :' 0.043'}, 
{from:23, to:44, value: 1.140, title :' 0.044'}, 
{from:23, to:47, value: 1.139, title :' 0.043'}, 
{from:24, to:26, value: 1.126, title :' 0.039'}, 
{from:24, to:27, value: 1.095, title :' 0.030'}, 
{from:24, to:44, value: 1.100, title :' 0.032'}, 
{from:24, to:47, value: 1.127, title :' 0.040'}, 
{from:26, to:29, value: 1.257, title :' 0.076'}, 
{from:26, to:31, value: 1.324, title :' 0.094'}, 
{from:27, to:29, value: 1.236, title :' 0.071'}, 
{from:27, to:31, value: 1.324, title :' 0.094'}, 
{from:29, to:30, value: 1.206, title :' 0.062'}, 
{from:29, to:31, value: 1.075, title :' 0.024'}, 
{from:29, to:39, value: 2.012, title :' 0.233'}, 
{from:29, to:40, value: 1.165, title :' 0.051'}, 
{from:29, to:49, value: 1.081, title :' 0.026'}, 
{from:29, to:52, value: 1.149, title :' 0.046'}, 
{from:29, to:53, value: 1.095, title :' 0.030'}, 
{from:30, to:31, value: 1.370, title :' 0.105'}, 
{from:31, to:44, value: 1.111, title :' 0.035'}, 
{from:31, to:47, value: 1.075, title :' 0.024'}, 
{from:31, to:52, value: 1.081, title :' 0.026'}, 
{from:32, to:33, value: 2.035, title :' 0.237'}, 
{from:32, to:34, value: 1.348, title :' 0.100'}, 
{from:32, to:35, value: 3.309, title :' 0.399'}, 
{from:33, to:34, value: 3.215, title :' 0.389'}, 
{from:33, to:35, value: 1.293, title :' 0.086'}, 
{from:34, to:35, value: 1.807, title :' 0.197'}, 
{from:36, to:37, value: 1.292, title :' 0.085'}, 
{from:36, to:38, value: 1.931, title :' 0.219'}, 
{from:36, to:41, value: 2.420, title :' 0.295'}, 
{from:37, to:38, value: 2.438, title :' 0.297'}, 
{from:37, to:41, value: 1.831, title :' 0.202'}, 
{from:38, to:41, value: 1.175, title :' 0.054'}, 
{from:43, to:45, value: 1.630, title :' 0.163'}, 
{from:43, to:46, value: 1.104, title :' 0.033'}, 
{from:43, to:48, value: 1.634, title :' 0.164'}, 
{from:44, to:47, value: 1.564, title :' 0.149'}, 
{from:45, to:46, value: 1.719, title :' 0.181'}, 
{from:46, to:48, value: 1.471, title :' 0.129'}, 
];
var seq0batch256_sub111_BSatlas63node = { nodes:nodes,edges:edges};