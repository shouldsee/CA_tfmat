var nodes=[ 
{id:1, value:16, label:'175842',  }, 
{id:2, value:11, label:' 44642',  }, 
{id:3, value:12, label:'175843',  }, 
{id:4, value:12, label:'176099',  }, 
{id:5, value:12, label:' 44770',  }, 
{id:6, value:15, label:' 45026',  }, 
{id:7, value:8, label:' 44771',  }, 
{id:8, value:9, label:' 45027',  }, 
{id:9, value:3, label:'236637',  }, 
{id:10, value:8, label:'240866',  }, 
{id:11, value:3, label:'236636',  }, 
{id:12, value:3, label:'237149',  }, 
{id:13, value:9, label:'241379',  }, 
{id:14, value:33, label:'237148', color:'green' }, 
{id:15, value:3, label:'137717',  }, 
{id:16, value:3, label:'138229',  }, 
{id:17, value:6, label:'110563',  }, 
{id:18, value:2, label:'137716',  }, 
{id:19, value:1, label:' 44898',  }, 
{id:20, value:2, label:'138228',  }, 
{id:21, value:1, label:'175714',  }, 
{id:22, value:4, label:'241122',  }, 
{id:23, value:4, label:'176098',  }, 
{id:24, value:9, label:'110306',  }, 
{id:25, value:3, label:'109794',  }, 
{id:26, value:5, label:'240867',  }, 
{id:27, value:3, label:'235295',  }, 
{id:28, value:5, label:'241635',  }, 
{id:29, value:3, label:'110050',  }, 
{id:30, value:3, label:'110307',  }, 
{id:31, value:3, label:'234783',  }, 
{id:32, value:5, label:'241123',  }, 
{id:33, value:3, label:'235039',  }, 
{id:34, value:5, label:'241378',  }, 
{id:35, value:3, label:'  6901',  }, 
{id:36, value:33, label:'109795', color:'green' }, 
{id:37, value:2, label:'  6389',  }, 
{id:38, value:33, label:'234527', color:'green' }, 
{id:39, value:3, label:'110051',  }, 
{id:40, value:2, label:'  6900',  }, 
{id:41, value:2, label:'  6388',  }, 
{id:42, value:6, label:' 44768',  }, 
{id:43, value:6, label:' 45025',  }, 
{id:44, value:5, label:' 44769',  }, 
{id:45, value:34, label:'137460', color:'green' }, 
{id:46, value:4, label:'  6645',  }, 
{id:47, value:4, label:'137972',  }, 
{id:48, value:6, label:'110305',  }, 
{id:49, value:6, label:'241377',  }, 
{id:50, value:3, label:'137461',  }, 
{id:51, value:3, label:'137973',  }, 
{id:52, value:3, label:'  6644',  }, 
{id:53, value:3, label:'110562',  }, 
{id:54, value:2, label:'  7157',  }, 
{id:55, value:2, label:'  7156',  }, 
{id:56, value:3, label:'110561',  }, 
{id:57, value:3, label:'175840',  }, 
{id:58, value:2, label:' 45024',  }, 
{id:59, value:100, label:'  6152',color:'orange'}, 
];
var edges=[ 
{from:1, to:2, value: 1.111, title :' 0.035'}, 
{from:1, to:3, value: 1.279, title :' 0.082'}, 
{from:1, to:4, value: 1.160, title :' 0.049'}, 
{from:1, to:5, value: 2.991, title :' 0.365'}, 
{from:1, to:6, value: 1.718, title :' 0.180'}, 
{from:1, to:7, value: 1.124, title :' 0.039'}, 
{from:1, to:8, value: 1.087, title :' 0.028'}, 
{from:1, to:23, value: 2.755, title :' 0.338'}, 
{from:1, to:24, value: 1.075, title :' 0.024'}, 
{from:1, to:34, value: 1.084, title :' 0.027'}, 
{from:1, to:42, value: 1.128, title :' 0.040'}, 
{from:1, to:43, value: 1.117, title :' 0.037'}, 
{from:1, to:44, value: 1.149, title :' 0.046'}, 
{from:1, to:48, value: 1.083, title :' 0.026'}, 
{from:1, to:49, value: 1.084, title :' 0.027'}, 
{from:1, to:58, value: 1.108, title :' 0.034'}, 
{from:2, to:5, value: 1.075, title :' 0.024'}, 
{from:2, to:19, value: 4.602, title :' 0.509'}, 
{from:2, to:21, value: 4.278, title :' 0.485'}, 
{from:2, to:23, value: 1.082, title :' 0.026'}, 
{from:2, to:42, value: 1.103, title :' 0.033'}, 
{from:2, to:43, value: 1.076, title :' 0.024'}, 
{from:2, to:44, value: 1.097, title :' 0.031'}, 
{from:2, to:49, value: 1.089, title :' 0.028'}, 
{from:2, to:57, value: 1.094, title :' 0.030'}, 
{from:2, to:58, value: 1.093, title :' 0.030'}, 
{from:3, to:4, value: 2.733, title :' 0.335'}, 
{from:3, to:5, value: 1.181, title :' 0.056'}, 
{from:3, to:6, value: 1.115, title :' 0.036'}, 
{from:3, to:7, value: 2.755, title :' 0.338'}, 
{from:3, to:8, value: 1.499, title :' 0.135'}, 
{from:3, to:23, value: 1.172, title :' 0.053'}, 
{from:3, to:42, value: 1.084, title :' 0.027'}, 
{from:3, to:43, value: 1.121, title :' 0.038'}, 
{from:3, to:44, value: 1.117, title :' 0.037'}, 
{from:3, to:49, value: 1.078, title :' 0.025'}, 
{from:3, to:57, value: 1.095, title :' 0.030'}, 
{from:4, to:5, value: 1.076, title :' 0.024'}, 
{from:4, to:6, value: 1.148, title :' 0.046'}, 
{from:4, to:7, value: 1.570, title :' 0.150'}, 
{from:4, to:8, value: 2.597, title :' 0.318'}, 
{from:4, to:23, value: 1.205, title :' 0.062'}, 
{from:4, to:28, value: 1.080, title :' 0.026'}, 
{from:4, to:42, value: 1.074, title :' 0.024'}, 
{from:4, to:43, value: 1.094, title :' 0.030'}, 
{from:4, to:44, value: 1.085, title :' 0.027'}, 
{from:4, to:57, value: 1.089, title :' 0.028'}, 
{from:5, to:6, value: 2.980, title :' 0.364'}, 
{from:5, to:7, value: 1.220, title :' 0.066'}, 
{from:5, to:8, value: 1.143, title :' 0.045'}, 
{from:5, to:24, value: 1.097, title :' 0.031'}, 
{from:5, to:34, value: 1.112, title :' 0.035'}, 
{from:5, to:48, value: 1.085, title :' 0.027'}, 
{from:5, to:53, value: 1.075, title :' 0.024'}, 
{from:5, to:56, value: 1.091, title :' 0.029'}, 
{from:6, to:7, value: 1.132, title :' 0.041'}, 
{from:6, to:8, value: 1.236, title :' 0.071'}, 
{from:6, to:24, value: 1.106, title :' 0.034'}, 
{from:6, to:34, value: 1.080, title :' 0.026'}, 
{from:6, to:42, value: 1.154, title :' 0.048'}, 
{from:6, to:43, value: 1.136, title :' 0.042'}, 
{from:6, to:44, value: 1.154, title :' 0.048'}, 
{from:6, to:48, value: 1.091, title :' 0.029'}, 
{from:6, to:49, value: 1.085, title :' 0.027'}, 
{from:6, to:53, value: 1.098, title :' 0.031'}, 
{from:6, to:56, value: 1.106, title :' 0.034'}, 
{from:7, to:8, value: 2.801, title :' 0.343'}, 
{from:7, to:43, value: 1.101, title :' 0.032'}, 
{from:7, to:56, value: 1.099, title :' 0.031'}, 
{from:8, to:42, value: 1.124, title :' 0.039'}, 
{from:8, to:48, value: 1.083, title :' 0.026'}, 
{from:8, to:49, value: 1.077, title :' 0.025'}, 
{from:9, to:11, value: 2.371, title :' 0.288'}, 
{from:9, to:12, value: 2.648, title :' 0.325'}, 
{from:9, to:14, value: 1.307, title :' 0.089'}, 
{from:10, to:13, value: 1.097, title :' 0.031'}, 
{from:10, to:22, value: 2.018, title :' 0.234'}, 
{from:10, to:25, value: 1.796, title :' 0.195'}, 
{from:10, to:26, value: 1.119, title :' 0.038'}, 
{from:10, to:28, value: 1.095, title :' 0.030'}, 
{from:10, to:29, value: 1.267, title :' 0.079'}, 
{from:10, to:32, value: 1.075, title :' 0.024'}, 
{from:10, to:34, value: 1.100, title :' 0.032'}, 
{from:11, to:12, value: 1.265, title :' 0.078'}, 
{from:11, to:14, value: 2.352, title :' 0.285'}, 
{from:12, to:14, value: 2.085, title :' 0.245'}, 
{from:13, to:17, value: 1.237, title :' 0.071'}, 
{from:13, to:22, value: 1.081, title :' 0.026'}, 
{from:13, to:24, value: 1.077, title :' 0.025'}, 
{from:13, to:26, value: 1.181, title :' 0.055'}, 
{from:13, to:28, value: 1.849, title :' 0.205'}, 
{from:13, to:30, value: 1.586, title :' 0.154'}, 
{from:13, to:32, value: 1.126, title :' 0.039'}, 
{from:13, to:48, value: 1.086, title :' 0.027'}, 
{from:15, to:18, value: 3.951, title :' 0.458'}, 
{from:15, to:45, value: 1.090, title :' 0.029'}, 
{from:15, to:50, value: 1.162, title :' 0.050'}, 
{from:16, to:20, value: 4.093, title :' 0.470'}, 
{from:16, to:47, value: 1.078, title :' 0.025'}, 
{from:16, to:51, value: 1.119, title :' 0.038'}, 
{from:17, to:24, value: 1.094, title :' 0.030'}, 
{from:17, to:28, value: 1.524, title :' 0.140'}, 
{from:17, to:30, value: 1.747, title :' 0.186'}, 
{from:17, to:49, value: 1.079, title :' 0.025'}, 
{from:17, to:53, value: 1.252, title :' 0.075'}, 
{from:18, to:45, value: 1.166, title :' 0.051'}, 
{from:20, to:47, value: 1.102, title :' 0.032'}, 
{from:22, to:25, value: 1.225, title :' 0.068'}, 
{from:22, to:29, value: 1.584, title :' 0.153'}, 
{from:24, to:28, value: 1.089, title :' 0.028'}, 
{from:24, to:30, value: 1.222, title :' 0.067'}, 
{from:24, to:34, value: 1.890, title :' 0.212'}, 
{from:24, to:48, value: 1.076, title :' 0.024'}, 
{from:25, to:29, value: 1.702, title :' 0.177'}, 
{from:26, to:32, value: 1.689, title :' 0.175'}, 
{from:26, to:36, value: 1.454, title :' 0.125'}, 
{from:26, to:39, value: 1.142, title :' 0.044'}, 
{from:27, to:31, value: 2.170, title :' 0.258'}, 
{from:27, to:33, value: 1.543, title :' 0.145'}, 
{from:27, to:38, value: 1.098, title :' 0.031'}, 
{from:31, to:33, value: 1.130, title :' 0.041'}, 
{from:31, to:38, value: 1.262, title :' 0.078'}, 
{from:32, to:36, value: 1.104, title :' 0.033'}, 
{from:32, to:39, value: 1.292, title :' 0.085'}, 
{from:33, to:38, value: 1.665, title :' 0.170'}, 
{from:35, to:37, value: 2.015, title :' 0.234'}, 
{from:35, to:46, value: 1.084, title :' 0.027'}, 
{from:35, to:54, value: 1.181, title :' 0.055'}, 
{from:36, to:39, value: 1.525, title :' 0.141'}, 
{from:37, to:46, value: 1.189, title :' 0.058'}, 
{from:40, to:41, value: 1.717, title :' 0.180'}, 
{from:40, to:55, value: 1.194, title :' 0.059'}, 
{from:41, to:52, value: 1.178, title :' 0.055'}, 
{from:45, to:47, value: 1.153, title :' 0.048'}, 
{from:45, to:50, value: 1.198, title :' 0.060'}, 
{from:46, to:52, value: 1.073, title :' 0.024'}, 
{from:46, to:54, value: 1.241, title :' 0.072'}, 
{from:47, to:51, value: 1.213, title :' 0.065'}, 
{from:50, to:51, value: 1.126, title :' 0.040'}, 
{from:52, to:55, value: 1.189, title :' 0.058'}, 
];
var seq0batch256_sub96_BSatlas59node = { nodes:nodes,edges:edges};