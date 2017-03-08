var nodes=[ 
{id:1, value:14, label:'147460',  }, 
{id:2, value:12, label:' 16644',  }, 
{id:3, value:11, label:'213252',  }, 
{id:4, value:11, label:' 82180',  }, 
{id:5, value:10, label:'212996',  }, 
{id:6, value:10, label:' 81924',  }, 
{id:7, value:15, label:' 84228',  }, 
{id:8, value:14, label:'215300',  }, 
{id:9, value:13, label:'215044',  }, 
{id:10, value:14, label:' 83972',  }, 
{id:11, value:15, label:'149508',  }, 
{id:12, value:14, label:' 84100',  }, 
{id:13, value:16, label:'215428',  }, 
{id:14, value:44, label:'149764', color:'green' }, 
{id:15, value:13, label:' 84356',  }, 
{id:16, value:14, label:'215172',  }, 
{id:17, value:15, label:' 18436',  }, 
{id:18, value:12, label:' 82308',  }, 
{id:19, value:12, label:' 18692',  }, 
{id:20, value:15, label:'149892',  }, 
{id:21, value:13, label:'149636',  }, 
{id:22, value:15, label:' 18820',  }, 
{id:23, value:12, label:'213124',  }, 
{id:24, value:13, label:' 18564',  }, 
{id:25, value:11, label:'147716',  }, 
{id:26, value:12, label:'147844',  }, 
{id:27, value:11, label:'213380',  }, 
{id:28, value:6, label:'158084',  }, 
{id:29, value:5, label:'150404',  }, 
{id:30, value:6, label:'223364',  }, 
{id:31, value:6, label:'215684',  }, 
{id:32, value:4, label:'157828',  }, 
{id:33, value:2, label:' 82052',  }, 
{id:34, value:2, label:' 16388',  }, 
{id:35, value:4, label:'150148',  }, 
{id:36, value:4, label:' 26756',  }, 
{id:37, value:4, label:' 19076',  }, 
{id:38, value:2, label:' 16772',  }, 
{id:39, value:2, label:'147588',  }, 
{id:40, value:4, label:'157700',  }, 
{id:41, value:4, label:'150020',  }, 
{id:42, value:1, label:' 26628',  }, 
{id:43, value:1, label:' 27012',  }, 
{id:44, value:1, label:' 92292',  }, 
{id:45, value:1, label:' 84612',  }, 
{id:46, value:1, label:' 18948',  }, 
{id:47, value:1, label:' 19332',  }, 
{id:48, value:1, label:'215940',  }, 
{id:49, value:1, label:'223620',  }, 
{id:50, value:4, label:' 84036',  }, 
{id:51, value:1, label:' 18500',  }, 
{id:52, value:1, label:' 84164',  }, 
{id:53, value:3, label:' 18628',  }, 
{id:54, value:1, label:'215556',  }, 
{id:55, value:1, label:'157956',  }, 
{id:56, value:1, label:'223236',  }, 
{id:57, value:100, label:'  6152',color:'orange'}, 
];
var edges=[ 
{from:1, to:2, value: 6.963, title :' 0.647'}, 
{from:1, to:3, value: 2.098, title :' 0.247'}, 
{from:1, to:4, value: 2.090, title :' 0.246'}, 
{from:1, to:5, value: 2.267, title :' 0.273'}, 
{from:1, to:6, value: 2.286, title :' 0.276'}, 
{from:1, to:9, value: 1.046, title :' 0.015'}, 
{from:1, to:13, value: 1.038, title :' 0.012'}, 
{from:1, to:18, value: 1.084, title :' 0.027'}, 
{from:1, to:23, value: 1.105, title :' 0.033'}, 
{from:1, to:25, value:10.779, title :' 0.793'}, 
{from:1, to:26, value: 1.291, title :' 0.085'}, 
{from:1, to:27, value: 1.114, title :' 0.036'}, 
{from:1, to:34, value:11.539, title :' 0.815'}, 
{from:1, to:39, value: 1.351, title :' 0.100'}, 
{from:2, to:3, value: 2.271, title :' 0.273'}, 
{from:2, to:4, value: 2.328, title :' 0.282'}, 
{from:2, to:5, value: 2.003, title :' 0.231'}, 
{from:2, to:6, value: 2.079, title :' 0.244'}, 
{from:2, to:18, value: 1.139, title :' 0.043'}, 
{from:2, to:23, value: 1.096, title :' 0.031'}, 
{from:2, to:25, value:11.641, title :' 0.818'}, 
{from:2, to:26, value: 1.253, title :' 0.075'}, 
{from:2, to:27, value: 1.108, title :' 0.034'}, 
{from:2, to:34, value:10.732, title :' 0.791'}, 
{from:2, to:38, value: 1.328, title :' 0.095'}, 
{from:3, to:4, value:11.860, title :' 0.824'}, 
{from:3, to:5, value:10.923, title :' 0.797'}, 
{from:3, to:6, value: 6.982, title :' 0.648'}, 
{from:3, to:7, value: 1.037, title :' 0.012'}, 
{from:3, to:18, value: 1.222, title :' 0.067'}, 
{from:3, to:23, value: 1.230, title :' 0.069'}, 
{from:3, to:25, value: 2.306, title :' 0.278'}, 
{from:3, to:26, value: 1.128, title :' 0.040'}, 
{from:3, to:27, value: 1.286, title :' 0.084'}, 
{from:4, to:5, value: 6.926, title :' 0.645'}, 
{from:4, to:6, value:10.991, title :' 0.799'}, 
{from:4, to:18, value: 1.296, title :' 0.086'}, 
{from:4, to:22, value: 1.039, title :' 0.013'}, 
{from:4, to:23, value: 1.197, title :' 0.060'}, 
{from:4, to:25, value: 2.276, title :' 0.274'}, 
{from:4, to:26, value: 1.103, title :' 0.033'}, 
{from:4, to:27, value: 1.238, title :' 0.071'}, 
{from:5, to:6, value:11.861, title :' 0.824'}, 
{from:5, to:18, value: 1.196, title :' 0.060'}, 
{from:5, to:23, value: 1.295, title :' 0.086'}, 
{from:5, to:25, value: 2.051, title :' 0.240'}, 
{from:5, to:26, value: 1.091, title :' 0.029'}, 
{from:5, to:27, value: 1.257, title :' 0.076'}, 
{from:6, to:18, value: 1.247, title :' 0.073'}, 
{from:6, to:23, value: 1.232, title :' 0.069'}, 
{from:6, to:25, value: 2.090, title :' 0.246'}, 
{from:6, to:26, value: 1.079, title :' 0.025'}, 
{from:6, to:27, value: 1.184, title :' 0.056'}, 
{from:7, to:8, value:10.873, title :' 0.795'}, 
{from:7, to:9, value: 5.700, title :' 0.580'}, 
{from:7, to:10, value: 9.011, title :' 0.733'}, 
{from:7, to:11, value: 1.582, title :' 0.153'}, 
{from:7, to:12, value: 1.145, title :' 0.045'}, 
{from:7, to:13, value: 1.162, title :' 0.050'}, 
{from:7, to:14, value: 1.706, title :' 0.178'}, 
{from:7, to:15, value: 1.154, title :' 0.048'}, 
{from:7, to:16, value: 1.116, title :' 0.037'}, 
{from:7, to:17, value: 1.574, title :' 0.151'}, 
{from:7, to:19, value: 1.737, title :' 0.184'}, 
{from:7, to:20, value: 1.054, title :' 0.018'}, 
{from:7, to:21, value: 1.046, title :' 0.015'}, 
{from:7, to:24, value: 1.037, title :' 0.012'}, 
{from:8, to:9, value: 9.124, title :' 0.737'}, 
{from:8, to:10, value: 5.634, title :' 0.576'}, 
{from:8, to:11, value: 1.618, title :' 0.160'}, 
{from:8, to:12, value: 1.131, title :' 0.041'}, 
{from:8, to:13, value: 1.174, title :' 0.053'}, 
{from:8, to:14, value: 1.722, title :' 0.181'}, 
{from:8, to:15, value: 1.135, title :' 0.042'}, 
{from:8, to:16, value: 1.149, title :' 0.046'}, 
{from:8, to:17, value: 1.560, title :' 0.148'}, 
{from:8, to:19, value: 1.719, title :' 0.181'}, 
{from:8, to:20, value: 1.040, title :' 0.013'}, 
{from:8, to:22, value: 1.040, title :' 0.013'}, 
{from:8, to:24, value: 1.052, title :' 0.017'}, 
{from:9, to:10, value:11.000, title :' 0.799'}, 
{from:9, to:11, value: 1.739, title :' 0.184'}, 
{from:9, to:12, value: 1.147, title :' 0.046'}, 
{from:9, to:13, value: 1.157, title :' 0.049'}, 
{from:9, to:14, value: 1.593, title :' 0.155'}, 
{from:9, to:15, value: 1.133, title :' 0.042'}, 
{from:9, to:16, value: 1.176, title :' 0.054'}, 
{from:9, to:17, value: 1.697, title :' 0.176'}, 
{from:9, to:19, value: 1.544, title :' 0.145'}, 
{from:9, to:22, value: 1.056, title :' 0.018'}, 
{from:10, to:11, value: 1.701, title :' 0.177'}, 
{from:10, to:12, value: 1.173, title :' 0.053'}, 
{from:10, to:13, value: 1.123, title :' 0.039'}, 
{from:10, to:14, value: 1.582, title :' 0.153'}, 
{from:10, to:15, value: 1.138, title :' 0.043'}, 
{from:10, to:16, value: 1.121, title :' 0.038'}, 
{from:10, to:17, value: 1.768, title :' 0.190'}, 
{from:10, to:19, value: 1.599, title :' 0.156'}, 
{from:10, to:20, value: 1.035, title :' 0.012'}, 
{from:10, to:21, value: 1.039, title :' 0.013'}, 
{from:10, to:22, value: 1.035, title :' 0.012'}, 
{from:11, to:12, value: 1.043, title :' 0.014'}, 
{from:11, to:13, value: 1.040, title :' 0.013'}, 
{from:11, to:14, value: 9.333, title :' 0.745'}, 
{from:11, to:15, value: 1.040, title :' 0.013'}, 
{from:11, to:16, value: 1.054, title :' 0.017'}, 
{from:11, to:17, value:10.609, title :' 0.787'}, 
{from:11, to:19, value: 5.550, title :' 0.571'}, 
{from:11, to:20, value: 1.143, title :' 0.044'}, 
{from:11, to:21, value: 1.161, title :' 0.050'}, 
{from:11, to:22, value: 1.108, title :' 0.034'}, 
{from:11, to:24, value: 1.089, title :' 0.028'}, 
{from:12, to:13, value: 5.657, title :' 0.578'}, 
{from:12, to:14, value: 1.050, title :' 0.016'}, 
{from:12, to:15, value: 9.369, title :' 0.746'}, 
{from:12, to:16, value:10.411, title :' 0.781'}, 
{from:12, to:17, value: 1.042, title :' 0.014'}, 
{from:12, to:20, value: 1.519, title :' 0.139'}, 
{from:12, to:21, value: 1.690, title :' 0.175'}, 
{from:12, to:22, value: 1.564, title :' 0.149'}, 
{from:12, to:24, value: 1.716, title :' 0.180'}, 
{from:13, to:14, value: 1.043, title :' 0.014'}, 
{from:13, to:15, value:10.271, title :' 0.776'}, 
{from:13, to:16, value: 9.132, title :' 0.737'}, 
{from:13, to:17, value: 1.041, title :' 0.014'}, 
{from:13, to:19, value: 1.044, title :' 0.014'}, 
{from:13, to:20, value: 1.701, title :' 0.177'}, 
{from:13, to:21, value: 1.527, title :' 0.141'}, 
{from:13, to:22, value: 1.667, title :' 0.170'}, 
{from:13, to:24, value: 1.499, title :' 0.135'}, 
{from:14, to:17, value: 5.453, title :' 0.565'}, 
{from:14, to:19, value:10.513, title :' 0.784'}, 
{from:14, to:20, value: 1.166, title :' 0.051'}, 
{from:14, to:21, value: 1.147, title :' 0.046'}, 
{from:14, to:22, value: 1.104, title :' 0.033'}, 
{from:14, to:23, value: 1.035, title :' 0.011'}, 
{from:14, to:24, value: 1.101, title :' 0.032'}, 
{from:15, to:16, value: 5.719, title :' 0.581'}, 
{from:15, to:17, value: 1.039, title :' 0.013'}, 
{from:15, to:20, value: 1.680, title :' 0.173'}, 
{from:15, to:21, value: 1.532, title :' 0.142'}, 
{from:15, to:22, value: 1.725, title :' 0.182'}, 
{from:15, to:24, value: 1.568, title :' 0.150'}, 
{from:16, to:17, value: 1.038, title :' 0.012'}, 
{from:16, to:20, value: 1.560, title :' 0.148'}, 
{from:16, to:21, value: 1.736, title :' 0.184'}, 
{from:16, to:22, value: 1.463, title :' 0.127'}, 
{from:16, to:24, value: 1.689, title :' 0.175'}, 
{from:16, to:50, value: 1.036, title :' 0.012'}, 
{from:17, to:19, value: 9.070, title :' 0.735'}, 
{from:17, to:20, value: 1.078, title :' 0.025'}, 
{from:17, to:21, value: 1.101, title :' 0.032'}, 
{from:17, to:22, value: 1.115, title :' 0.036'}, 
{from:17, to:24, value: 1.143, title :' 0.045'}, 
{from:18, to:23, value: 7.209, title :' 0.658'}, 
{from:18, to:25, value: 1.098, title :' 0.031'}, 
{from:18, to:26, value: 2.226, title :' 0.267'}, 
{from:18, to:27, value:11.678, title :' 0.819'}, 
{from:18, to:33, value:10.881, title :' 0.796'}, 
{from:18, to:53, value: 1.036, title :' 0.012'}, 
{from:19, to:20, value: 1.111, title :' 0.035'}, 
{from:19, to:21, value: 1.101, title :' 0.032'}, 
{from:19, to:22, value: 1.161, title :' 0.050'}, 
{from:19, to:24, value: 1.133, title :' 0.042'}, 
{from:20, to:21, value: 9.159, title :' 0.738'}, 
{from:20, to:22, value:10.104, title :' 0.771'}, 
{from:20, to:24, value: 5.427, title :' 0.564'}, 
{from:20, to:25, value: 1.034, title :' 0.011'}, 
{from:21, to:22, value: 5.473, title :' 0.567'}, 
{from:21, to:24, value:10.271, title :' 0.776'}, 
{from:22, to:24, value: 8.951, title :' 0.731'}, 
{from:23, to:25, value: 1.085, title :' 0.027'}, 
{from:23, to:26, value: 2.040, title :' 0.238'}, 
{from:23, to:27, value:11.169, title :' 0.804'}, 
{from:23, to:33, value:11.553, title :' 0.816'}, 
{from:25, to:26, value: 1.346, title :' 0.099'}, 
{from:25, to:27, value: 1.124, title :' 0.039'}, 
{from:26, to:27, value: 2.278, title :' 0.274'}, 
{from:26, to:38, value:11.509, title :' 0.814'}, 
{from:26, to:39, value:10.746, title :' 0.792'}, 
{from:27, to:53, value: 1.039, title :' 0.013'}, 
{from:28, to:30, value: 1.397, title :' 0.111'}, 
{from:28, to:32, value: 8.071, title :' 0.696'}, 
{from:28, to:36, value: 4.702, title :' 0.516'}, 
{from:28, to:40, value: 1.104, title :' 0.033'}, 
{from:28, to:43, value:10.120, title :' 0.771'}, 
{from:28, to:55, value: 1.093, title :' 0.030'}, 
{from:29, to:31, value: 1.217, title :' 0.065'}, 
{from:29, to:35, value: 7.576, title :' 0.675'}, 
{from:29, to:37, value: 4.503, title :' 0.502'}, 
{from:29, to:41, value: 1.065, title :' 0.021'}, 
{from:29, to:47, value: 9.243, title :' 0.741'}, 
{from:30, to:32, value: 1.485, title :' 0.132'}, 
{from:30, to:36, value: 1.454, title :' 0.125'}, 
{from:30, to:44, value: 9.928, title :' 0.765'}, 
{from:30, to:49, value: 8.043, title :' 0.695'}, 
{from:30, to:56, value: 1.089, title :' 0.028'}, 
{from:31, to:35, value: 1.350, title :' 0.100'}, 
{from:31, to:37, value: 1.301, title :' 0.088'}, 
{from:31, to:45, value: 9.502, title :' 0.750'}, 
{from:31, to:48, value: 8.406, title :' 0.710'}, 
{from:31, to:54, value: 1.117, title :' 0.037'}, 
{from:32, to:36, value:10.275, title :' 0.777'}, 
{from:32, to:40, value: 1.116, title :' 0.036'}, 
{from:35, to:37, value: 9.588, title :' 0.754'}, 
{from:35, to:41, value: 1.069, title :' 0.022'}, 
{from:36, to:40, value: 1.079, title :' 0.025'}, 
{from:37, to:41, value: 1.075, title :' 0.024'}, 
{from:40, to:42, value:10.556, title :' 0.786'}, 
{from:41, to:46, value: 9.484, title :' 0.750'}, 
{from:50, to:51, value: 1.579, title :' 0.152'}, 
{from:50, to:52, value: 1.150, title :' 0.046'}, 
{from:50, to:53, value: 1.068, title :' 0.022'}, 
];
var seed223365_BSatlas57node_0dense = { nodes:nodes,edges:edges};