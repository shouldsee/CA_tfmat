var nodes=[ 
{id:1, value:16, label:'   907',  }, 
{id:2, value:16, label:'   795',  }, 
{id:3, value:18, label:'  2971',  }, 
{id:4, value:17, label:'   667',  }, 
{id:5, value:15, label:'   915',  }, 
{id:6, value:15, label:'   923',  }, 
{id:7, value:17, label:'  5019',  }, 
{id:8, value:2, label:'   539',  }, 
{id:9, value:14, label:'131739',  }, 
{id:10, value:41, label:'131995', color:'green' }, 
{id:11, value:8, label:'131867',  }, 
{id:12, value:14, label:'   411',  }, 
{id:13, value:7, label:'131611',  }, 
{id:14, value:13, label:'  1947', color:'red' }, 
{id:15, value:1, label:'   651',  }, 
{id:16, value:10, label:'131227',  }, 
{id:17, value:8, label:'131355',  }, 
{id:18, value:1, label:'   659',  }, 
{id:19, value:6, label:'131483',  }, 
{id:20, value:10, label:'132891',  }, 
{id:21, value:2, label:'131099',  }, 
{id:22, value:13, label:'133019',  }, 
{id:23, value:10, label:'132763',  }, 
{id:24, value:6, label:'   927', color:'red' }, 
{id:25, value:1, label:'  2715',  }, 
{id:26, value:1, label:'   779',  }, 
{id:27, value:4, label:'133011',  }, 
{id:28, value:1, label:'132755',  }, 
{id:29, value:1, label:'132635',  }, 
{id:30, value:2, label:'   283',  }, 
{id:31, value:1, label:'  4763',  }, 
{id:32, value:1, label:'   395',  }, 
{id:33, value:1, label:'   787',  }, 
{id:34, value:1, label:'  2843',  }, 
{id:35, value:2, label:'   155',  }, 
{id:36, value:1, label:'  2459',  }, 
{id:37, value:6, label:'132507',  }, 
{id:38, value:1, label:'   403',  }, 
{id:39, value:1, label:'  4891',  }, 
{id:40, value:1, label:'  2955',  }, 
{id:41, value:1, label:'  4507',  }, 
{id:42, value:1, label:'  2963',  }, 
{id:43, value:1, label:'  7067',  }, 
{id:44, value:1, label:'  5003',  }, 
{id:45, value:1, label:'  1819',  }, 
{id:46, value:1, label:'  1691',  }, 
{id:47, value:1, label:'  1435',  }, 
{id:48, value:1, label:'   899', color:'red' }, 
{id:49, value:1, label:'132251',  }, 
{id:50, value:1, label:'  1939',  }, 
{id:51, value:100, label:'  6152',color:'orange'}, 
];
var edges=[ 
{from:1, to:2, value: 1.131, title :' 0.041'}, 
{from:1, to:3, value: 1.240, title :' 0.072'}, 
{from:1, to:4, value: 1.162, title :' 0.050'}, 
{from:1, to:5, value: 1.040, title :' 0.013'}, 
{from:1, to:6, value: 1.159, title :' 0.049'}, 
{from:1, to:7, value: 1.116, title :' 0.036'}, 
{from:1, to:9, value: 1.040, title :' 0.013'}, 
{from:1, to:12, value: 1.083, title :' 0.027'}, 
{from:1, to:14, value: 1.202, title :' 0.061'}, 
{from:1, to:15, value:14.578, title :' 0.893'}, 
{from:1, to:17, value: 1.050, title :' 0.016'}, 
{from:1, to:22, value: 1.042, title :' 0.014'}, 
{from:1, to:23, value: 1.073, title :' 0.023'}, 
{from:1, to:24, value: 1.733, title :' 0.183'}, 
{from:1, to:26, value: 5.296, title :' 0.556'}, 
{from:1, to:32, value: 2.847, title :' 0.349'}, 
{from:2, to:3, value: 1.433, title :' 0.120'}, 
{from:2, to:4, value: 1.971, title :' 0.226'}, 
{from:2, to:5, value: 1.205, title :' 0.062'}, 
{from:2, to:6, value: 1.965, title :' 0.225'}, 
{from:2, to:7, value: 1.153, title :' 0.048'}, 
{from:2, to:8, value:13.644, title :' 0.871'}, 
{from:2, to:9, value: 1.056, title :' 0.018'}, 
{from:2, to:10, value: 1.058, title :' 0.019'}, 
{from:2, to:11, value: 1.122, title :' 0.038'}, 
{from:2, to:12, value: 1.493, title :' 0.134'}, 
{from:2, to:13, value: 1.074, title :' 0.024'}, 
{from:2, to:14, value: 1.520, title :' 0.140'}, 
{from:2, to:22, value: 1.058, title :' 0.019'}, 
{from:2, to:30, value: 3.100, title :' 0.377'}, 
{from:2, to:37, value: 1.073, title :' 0.023'}, 
{from:3, to:4, value: 1.355, title :' 0.101'}, 
{from:3, to:5, value: 1.192, title :' 0.058'}, 
{from:3, to:6, value: 1.351, title :' 0.100'}, 
{from:3, to:7, value: 1.199, title :' 0.060'}, 
{from:3, to:9, value: 1.043, title :' 0.014'}, 
{from:3, to:12, value: 1.344, title :' 0.099'}, 
{from:3, to:14, value: 1.385, title :' 0.109'}, 
{from:3, to:20, value: 1.057, title :' 0.018'}, 
{from:3, to:22, value: 1.067, title :' 0.021'}, 
{from:3, to:23, value: 1.074, title :' 0.024'}, 
{from:3, to:24, value: 1.987, title :' 0.229'}, 
{from:3, to:25, value: 5.300, title :' 0.556'}, 
{from:3, to:34, value: 2.219, title :' 0.266'}, 
{from:3, to:36, value: 2.068, title :' 0.242'}, 
{from:3, to:40, value: 1.481, title :' 0.131'}, 
{from:3, to:42, value: 1.332, title :' 0.096'}, 
{from:4, to:5, value: 1.186, title :' 0.057'}, 
{from:4, to:6, value:11.191, title :' 0.805'}, 
{from:4, to:7, value: 1.153, title :' 0.047'}, 
{from:4, to:8, value: 1.962, title :' 0.225'}, 
{from:4, to:9, value: 1.165, title :' 0.051'}, 
{from:4, to:10, value: 1.151, title :' 0.047'}, 
{from:4, to:12, value: 1.655, title :' 0.168'}, 
{from:4, to:13, value: 1.047, title :' 0.015'}, 
{from:4, to:14, value: 1.437, title :' 0.121'}, 
{from:4, to:20, value: 1.044, title :' 0.014'}, 
{from:4, to:22, value: 1.051, title :' 0.017'}, 
{from:4, to:23, value: 1.050, title :' 0.016'}, 
{from:4, to:35, value: 1.770, title :' 0.190'}, 
{from:4, to:37, value: 1.040, title :' 0.013'}, 
{from:5, to:6, value: 1.180, title :' 0.055'}, 
{from:5, to:7, value: 1.084, title :' 0.027'}, 
{from:5, to:9, value: 1.040, title :' 0.013'}, 
{from:5, to:10, value: 1.040, title :' 0.013'}, 
{from:5, to:12, value: 1.144, title :' 0.045'}, 
{from:5, to:14, value: 1.252, title :' 0.075'}, 
{from:5, to:18, value:11.178, title :' 0.805'}, 
{from:5, to:22, value: 1.052, title :' 0.017'}, 
{from:5, to:33, value: 2.783, title :' 0.341'}, 
{from:5, to:38, value: 1.568, title :' 0.150'}, 
{from:5, to:48, value: 1.130, title :' 0.041'}, 
{from:6, to:7, value: 1.174, title :' 0.054'}, 
{from:6, to:9, value: 1.127, title :' 0.040'}, 
{from:6, to:10, value: 1.161, title :' 0.050'}, 
{from:6, to:11, value: 1.040, title :' 0.013'}, 
{from:6, to:12, value: 1.768, title :' 0.190'}, 
{from:6, to:14, value: 1.390, title :' 0.110'}, 
{from:6, to:16, value: 1.042, title :' 0.014'}, 
{from:6, to:20, value: 1.064, title :' 0.021'}, 
{from:6, to:22, value: 1.073, title :' 0.023'}, 
{from:6, to:27, value: 1.044, title :' 0.014'}, 
{from:7, to:9, value: 1.040, title :' 0.013'}, 
{from:7, to:12, value: 1.098, title :' 0.031'}, 
{from:7, to:14, value: 1.160, title :' 0.050'}, 
{from:7, to:22, value: 1.042, title :' 0.014'}, 
{from:7, to:23, value: 1.034, title :' 0.011'}, 
{from:7, to:24, value: 1.421, title :' 0.117'}, 
{from:7, to:31, value: 2.921, title :' 0.357'}, 
{from:7, to:39, value: 1.527, title :' 0.141'}, 
{from:7, to:41, value: 1.471, title :' 0.129'}, 
{from:7, to:43, value: 1.233, title :' 0.070'}, 
{from:7, to:44, value: 1.190, title :' 0.058'}, 
{from:9, to:10, value: 8.544, title :' 0.715'}, 
{from:9, to:11, value: 1.111, title :' 0.035'}, 
{from:9, to:12, value: 1.049, title :' 0.016'}, 
{from:9, to:13, value: 1.174, title :' 0.054'}, 
{from:9, to:16, value: 1.055, title :' 0.018'}, 
{from:9, to:19, value: 1.052, title :' 0.017'}, 
{from:9, to:22, value: 1.037, title :' 0.012'}, 
{from:10, to:11, value: 1.176, title :' 0.054'}, 
{from:10, to:12, value: 1.041, title :' 0.014'}, 
{from:10, to:13, value: 1.134, title :' 0.042'}, 
{from:10, to:16, value: 1.045, title :' 0.015'}, 
{from:10, to:19, value: 1.049, title :' 0.016'}, 
{from:10, to:27, value: 1.047, title :' 0.015'}, 
{from:11, to:13, value: 9.817, title :' 0.761'}, 
{from:11, to:16, value: 1.044, title :' 0.014'}, 
{from:11, to:17, value: 1.138, title :' 0.043'}, 
{from:11, to:20, value: 1.045, title :' 0.015'}, 
{from:12, to:14, value: 1.285, title :' 0.083'}, 
{from:12, to:16, value: 1.195, title :' 0.059'}, 
{from:12, to:17, value: 1.058, title :' 0.019'}, 
{from:12, to:19, value: 1.240, title :' 0.072'}, 
{from:12, to:22, value: 1.039, title :' 0.013'}, 
{from:13, to:17, value: 1.122, title :' 0.038'}, 
{from:13, to:19, value: 1.041, title :' 0.013'}, 
{from:14, to:16, value: 1.051, title :' 0.016'}, 
{from:14, to:20, value: 1.090, title :' 0.029'}, 
{from:14, to:22, value: 1.239, title :' 0.071'}, 
{from:14, to:23, value: 1.135, title :' 0.042'}, 
{from:14, to:37, value: 1.105, title :' 0.033'}, 
{from:16, to:17, value: 1.115, title :' 0.036'}, 
{from:16, to:19, value: 6.118, title :' 0.604'}, 
{from:16, to:21, value: 1.147, title :' 0.046'}, 
{from:16, to:35, value: 1.214, title :' 0.065'}, 
{from:17, to:19, value: 1.177, title :' 0.054'}, 
{from:17, to:21, value: 6.289, title :' 0.613'}, 
{from:17, to:30, value: 1.098, title :' 0.031'}, 
{from:20, to:22, value: 1.095, title :' 0.030'}, 
{from:20, to:23, value: 1.091, title :' 0.029'}, 
{from:20, to:24, value: 1.084, title :' 0.027'}, 
{from:20, to:29, value: 4.439, title :' 0.497'}, 
{from:20, to:45, value: 1.186, title :' 0.057'}, 
{from:22, to:23, value: 2.982, title :' 0.364'}, 
{from:22, to:37, value: 1.062, title :' 0.020'}, 
{from:23, to:24, value: 1.094, title :' 0.030'}, 
{from:23, to:46, value: 1.181, title :' 0.055'}, 
{from:23, to:49, value: 1.066, title :' 0.021'}, 
{from:24, to:37, value: 1.035, title :' 0.012'}, 
{from:27, to:28, value: 4.533, title :' 0.504'}, 
{from:27, to:50, value: 1.053, title :' 0.017'}, 
{from:37, to:47, value: 1.163, title :' 0.050'}, 
];
var seed133012_BSatlas51node_3dense = { nodes:nodes,edges:edges};