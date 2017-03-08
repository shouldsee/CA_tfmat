var nodes=[ 
{id:1, value:11, label:'218500',  }, 
{id:2, value:10, label:'218244',  }, 
{id:3, value:9, label:' 87172',  }, 
{id:4, value:9, label:'152964',  }, 
{id:5, value:9, label:' 87428',  }, 
{id:6, value:9, label:' 21636',  }, 
{id:7, value:11, label:' 21764',  }, 
{id:8, value:8, label:'152708',  }, 
{id:9, value:8, label:' 21892',  }, 
{id:10, value:11, label:'152836',  }, 
{id:11, value:8, label:' 21508',  }, 
{id:12, value:9, label:'152580',  }, 
{id:13, value:8, label:'218116',  }, 
{id:14, value:10, label:' 87044',  }, 
{id:15, value:8, label:'218372',  }, 
{id:16, value:8, label:' 87300',  }, 
{id:17, value:9, label:' 87556',  }, 
{id:18, value:10, label:'218692',  }, 
{id:19, value:8, label:'153156',  }, 
{id:20, value:8, label:' 87620',  }, 
{id:21, value:8, label:' 22340',  }, 
{id:22, value:7, label:'153412',  }, 
{id:23, value:7, label:' 87876',  }, 
{id:24, value:9, label:'218628',  }, 
{id:25, value:7, label:' 87812',  }, 
{id:26, value:7, label:' 22084',  }, 
{id:27, value:8, label:'218884',  }, 
{id:28, value:8, label:'218948',  }, 
{id:29, value:38, label:'153348', color:'green' }, 
{id:30, value:7, label:' 22020',  }, 
{id:31, value:7, label:' 22276',  }, 
{id:32, value:7, label:'153092',  }, 
{id:33, value:8, label:'218373',  }, 
{id:34, value:6, label:'219076',  }, 
{id:35, value:9, label:'152581',  }, 
{id:36, value:6, label:' 21765',  }, 
{id:37, value:6, label:' 21509',  }, 
{id:38, value:6, label:'152837',  }, 
{id:39, value:7, label:'153157',  }, 
{id:40, value:8, label:' 87301',  }, 
{id:41, value:6, label:' 88004',  }, 
{id:42, value:3, label:' 22085',  }, 
{id:43, value:7, label:' 87045',  }, 
{id:44, value:5, label:' 87748',  }, 
{id:45, value:4, label:' 22341',  }, 
{id:46, value:2, label:'218117',  }, 
{id:47, value:1, label:'218820',  }, 
{id:48, value:1, label:'153413',  }, 
{id:49, value:4, label:' 22468',  }, 
{id:50, value:3, label:' 87621',  }, 
{id:51, value:1, label:'153540',  }, 
{id:52, value:1, label:' 22212',  }, 
{id:53, value:1, label:' 87877',  }, 
{id:54, value:1, label:'218693',  }, 
{id:55, value:1, label:' 87309',  }, 
{id:56, value:100, label:'  6152',color:'orange'}, 
];
var edges=[ 
{from:1, to:2, value: 7.958, title :' 0.691'}, 
{from:1, to:3, value: 4.018, title :' 0.464'}, 
{from:1, to:4, value: 1.238, title :' 0.071'}, 
{from:1, to:5, value: 6.841, title :' 0.641'}, 
{from:1, to:6, value: 1.186, title :' 0.057'}, 
{from:1, to:7, value: 1.037, title :' 0.012'}, 
{from:1, to:8, value: 1.193, title :' 0.059'}, 
{from:1, to:9, value: 1.251, title :' 0.075'}, 
{from:1, to:14, value: 1.040, title :' 0.013'}, 
{from:1, to:15, value: 1.057, title :' 0.018'}, 
{from:1, to:16, value: 1.060, title :' 0.019'}, 
{from:2, to:3, value: 6.837, title :' 0.641'}, 
{from:2, to:4, value: 1.191, title :' 0.058'}, 
{from:2, to:5, value: 4.044, title :' 0.466'}, 
{from:2, to:6, value: 1.228, title :' 0.069'}, 
{from:2, to:8, value: 1.221, title :' 0.067'}, 
{from:2, to:9, value: 1.180, title :' 0.055'}, 
{from:2, to:10, value: 1.040, title :' 0.013'}, 
{from:2, to:13, value: 1.082, title :' 0.026'}, 
{from:2, to:29, value: 1.043, title :' 0.014'}, 
{from:3, to:4, value: 1.202, title :' 0.061'}, 
{from:3, to:5, value: 7.840, title :' 0.686'}, 
{from:3, to:6, value: 1.265, title :' 0.078'}, 
{from:3, to:8, value: 1.236, title :' 0.071'}, 
{from:3, to:9, value: 1.179, title :' 0.055'}, 
{from:3, to:14, value: 1.045, title :' 0.015'}, 
{from:3, to:18, value: 1.036, title :' 0.012'}, 
{from:4, to:5, value: 1.225, title :' 0.068'}, 
{from:4, to:6, value: 3.956, title :' 0.458'}, 
{from:4, to:8, value: 7.750, title :' 0.683'}, 
{from:4, to:9, value: 6.999, title :' 0.649'}, 
{from:4, to:10, value: 1.046, title :' 0.015'}, 
{from:4, to:36, value: 1.036, title :' 0.012'}, 
{from:5, to:6, value: 1.191, title :' 0.058'}, 
{from:5, to:8, value: 1.191, title :' 0.058'}, 
{from:5, to:9, value: 1.244, title :' 0.073'}, 
{from:5, to:10, value: 1.035, title :' 0.011'}, 
{from:5, to:14, value: 1.036, title :' 0.012'}, 
{from:6, to:7, value: 1.036, title :' 0.012'}, 
{from:6, to:8, value: 7.036, title :' 0.650'}, 
{from:6, to:9, value: 7.576, title :' 0.675'}, 
{from:6, to:11, value: 1.041, title :' 0.013'}, 
{from:7, to:9, value: 1.052, title :' 0.017'}, 
{from:7, to:10, value: 6.805, title :' 0.639'}, 
{from:7, to:11, value: 7.903, title :' 0.689'}, 
{from:7, to:12, value: 3.977, title :' 0.460'}, 
{from:7, to:13, value: 1.172, title :' 0.053'}, 
{from:7, to:14, value: 1.150, title :' 0.047'}, 
{from:7, to:15, value: 1.211, title :' 0.064'}, 
{from:7, to:16, value: 1.203, title :' 0.062'}, 
{from:7, to:35, value: 1.039, title :' 0.013'}, 
{from:8, to:9, value: 3.891, title :' 0.453'}, 
{from:8, to:12, value: 1.043, title :' 0.014'}, 
{from:10, to:11, value: 4.042, title :' 0.466'}, 
{from:10, to:12, value: 7.659, title :' 0.679'}, 
{from:10, to:13, value: 1.141, title :' 0.044'}, 
{from:10, to:14, value: 1.152, title :' 0.047'}, 
{from:10, to:15, value: 1.184, title :' 0.056'}, 
{from:10, to:16, value: 1.191, title :' 0.058'}, 
{from:10, to:39, value: 1.041, title :' 0.013'}, 
{from:11, to:12, value: 6.983, title :' 0.648'}, 
{from:11, to:13, value: 1.199, title :' 0.060'}, 
{from:11, to:14, value: 1.211, title :' 0.064'}, 
{from:11, to:15, value: 1.169, title :' 0.052'}, 
{from:11, to:16, value: 1.142, title :' 0.044'}, 
{from:12, to:13, value: 1.198, title :' 0.060'}, 
{from:12, to:14, value: 1.219, title :' 0.066'}, 
{from:12, to:15, value: 1.131, title :' 0.041'}, 
{from:12, to:16, value: 1.132, title :' 0.041'}, 
{from:12, to:39, value: 1.037, title :' 0.012'}, 
{from:13, to:14, value: 6.769, title :' 0.637'}, 
{from:13, to:15, value: 7.587, title :' 0.675'}, 
{from:13, to:16, value: 3.763, title :' 0.442'}, 
{from:14, to:15, value: 3.623, title :' 0.429'}, 
{from:14, to:16, value: 7.299, title :' 0.663'}, 
{from:15, to:16, value: 6.788, title :' 0.638'}, 
{from:17, to:24, value: 6.264, title :' 0.612'}, 
{from:17, to:25, value: 5.957, title :' 0.595'}, 
{from:17, to:27, value: 2.986, title :' 0.365'}, 
{from:17, to:29, value: 1.061, title :' 0.020'}, 
{from:17, to:30, value: 1.125, title :' 0.039'}, 
{from:17, to:31, value: 1.061, title :' 0.020'}, 
{from:17, to:32, value: 1.078, title :' 0.025'}, 
{from:17, to:40, value: 1.048, title :' 0.015'}, 
{from:17, to:43, value: 1.036, title :' 0.012'}, 
{from:18, to:19, value: 1.127, title :' 0.040'}, 
{from:18, to:20, value: 6.576, title :' 0.628'}, 
{from:18, to:21, value: 1.080, title :' 0.026'}, 
{from:18, to:22, value: 1.093, title :' 0.030'}, 
{from:18, to:23, value: 2.852, title :' 0.349'}, 
{from:18, to:26, value: 1.097, title :' 0.031'}, 
{from:18, to:28, value: 5.172, title :' 0.548'}, 
{from:18, to:41, value: 1.047, title :' 0.015'}, 
{from:18, to:44, value: 1.037, title :' 0.012'}, 
{from:19, to:20, value: 1.117, title :' 0.037'}, 
{from:19, to:21, value: 2.944, title :' 0.360'}, 
{from:19, to:22, value: 5.555, title :' 0.572'}, 
{from:19, to:23, value: 1.100, title :' 0.032'}, 
{from:19, to:26, value: 6.339, title :' 0.616'}, 
{from:19, to:28, value: 1.068, title :' 0.022'}, 
{from:19, to:43, value: 1.036, title :' 0.012'}, 
{from:20, to:21, value: 1.093, title :' 0.030'}, 
{from:20, to:22, value: 1.077, title :' 0.025'}, 
{from:20, to:23, value: 5.129, title :' 0.545'}, 
{from:20, to:26, value: 1.153, title :' 0.048'}, 
{from:20, to:28, value: 2.889, title :' 0.354'}, 
{from:20, to:41, value: 1.038, title :' 0.013'}, 
{from:21, to:22, value: 6.192, title :' 0.608'}, 
{from:21, to:23, value: 1.166, title :' 0.051'}, 
{from:21, to:26, value: 5.337, title :' 0.558'}, 
{from:21, to:28, value: 1.106, title :' 0.034'}, 
{from:21, to:49, value: 1.035, title :' 0.011'}, 
{from:22, to:23, value: 1.143, title :' 0.044'}, 
{from:22, to:26, value: 2.897, title :' 0.355'}, 
{from:22, to:28, value: 1.128, title :' 0.040'}, 
{from:23, to:26, value: 1.098, title :' 0.031'}, 
{from:23, to:28, value: 6.303, title :' 0.614'}, 
{from:24, to:25, value: 3.062, title :' 0.373'}, 
{from:24, to:27, value: 5.654, title :' 0.577'}, 
{from:24, to:29, value: 1.044, title :' 0.014'}, 
{from:24, to:30, value: 1.075, title :' 0.024'}, 
{from:24, to:31, value: 1.036, title :' 0.012'}, 
{from:24, to:32, value: 1.080, title :' 0.026'}, 
{from:24, to:40, value: 1.045, title :' 0.015'}, 
{from:24, to:43, value: 1.037, title :' 0.012'}, 
{from:25, to:27, value: 6.107, title :' 0.603'}, 
{from:25, to:29, value: 1.105, title :' 0.033'}, 
{from:25, to:30, value: 1.061, title :' 0.020'}, 
{from:25, to:31, value: 1.073, title :' 0.023'}, 
{from:25, to:32, value: 1.039, title :' 0.013'}, 
{from:26, to:28, value: 1.061, title :' 0.020'}, 
{from:27, to:29, value: 1.085, title :' 0.027'}, 
{from:27, to:30, value: 1.059, title :' 0.019'}, 
{from:27, to:31, value: 1.088, title :' 0.028'}, 
{from:27, to:32, value: 1.042, title :' 0.014'}, 
{from:27, to:35, value: 1.034, title :' 0.011'}, 
{from:28, to:41, value: 1.036, title :' 0.012'}, 
{from:29, to:30, value: 2.749, title :' 0.337'}, 
{from:29, to:31, value: 5.749, title :' 0.583'}, 
{from:29, to:32, value: 5.607, title :' 0.575'}, 
{from:30, to:31, value: 5.666, title :' 0.578'}, 
{from:30, to:32, value: 5.687, title :' 0.579'}, 
{from:31, to:32, value: 2.845, title :' 0.349'}, 
{from:33, to:35, value: 1.062, title :' 0.020'}, 
{from:33, to:36, value: 1.094, title :' 0.030'}, 
{from:33, to:37, value: 1.046, title :' 0.015'}, 
{from:33, to:38, value: 1.088, title :' 0.028'}, 
{from:33, to:40, value: 5.378, title :' 0.561'}, 
{from:33, to:43, value: 2.654, title :' 0.325'}, 
{from:33, to:46, value: 5.716, title :' 0.581'}, 
{from:33, to:55, value: 1.038, title :' 0.012'}, 
{from:34, to:38, value: 1.040, title :' 0.013'}, 
{from:34, to:41, value: 5.455, title :' 0.565'}, 
{from:34, to:44, value: 2.651, title :' 0.325'}, 
{from:34, to:47, value: 4.775, title :' 0.521'}, 
{from:34, to:49, value: 1.096, title :' 0.030'}, 
{from:34, to:51, value: 1.113, title :' 0.036'}, 
{from:35, to:36, value: 2.444, title :' 0.298'}, 
{from:35, to:37, value: 4.915, title :' 0.531'}, 
{from:35, to:38, value: 5.208, title :' 0.550'}, 
{from:35, to:40, value: 1.038, title :' 0.012'}, 
{from:35, to:43, value: 1.065, title :' 0.021'}, 
{from:35, to:46, value: 1.070, title :' 0.023'}, 
{from:36, to:37, value: 5.377, title :' 0.561'}, 
{from:36, to:38, value: 4.740, title :' 0.519'}, 
{from:36, to:40, value: 1.080, title :' 0.026'}, 
{from:37, to:38, value: 2.386, title :' 0.290'}, 
{from:37, to:40, value: 1.057, title :' 0.019'}, 
{from:37, to:43, value: 1.076, title :' 0.024'}, 
{from:38, to:40, value: 1.064, title :' 0.021'}, 
{from:39, to:42, value: 5.435, title :' 0.564'}, 
{from:39, to:45, value: 2.393, title :' 0.291'}, 
{from:39, to:48, value: 4.347, title :' 0.490'}, 
{from:39, to:50, value: 1.061, title :' 0.020'}, 
{from:39, to:54, value: 1.051, title :' 0.017'}, 
{from:40, to:43, value: 5.645, title :' 0.577'}, 
{from:41, to:44, value: 5.172, title :' 0.548'}, 
{from:41, to:49, value: 1.129, title :' 0.040'}, 
{from:42, to:45, value: 4.306, title :' 0.487'}, 
{from:42, to:50, value: 1.083, title :' 0.026'}, 
{from:44, to:49, value: 1.064, title :' 0.021'}, 
{from:44, to:52, value: 1.098, title :' 0.031'}, 
{from:45, to:50, value: 1.064, title :' 0.021'}, 
{from:45, to:53, value: 1.060, title :' 0.019'}, 
];
var seed219077_BSatlas56node_0dense = { nodes:nodes,edges:edges};