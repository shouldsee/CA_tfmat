var nodes=[ 
{id:1, value:12, label:'  5127', color:'red' }, 
{id:2, value:15, label:' 38159',  }, 
{id:3, value:12, label:' 37903', color:'red' }, 
{id:4, value:17, label:' 38535',  }, 
{id:5, value:14, label:' 34055',  }, 
{id:6, value:12, label:' 38663',  }, 
{id:7, value:10, label:' 37383',  }, 
{id:8, value:9, label:' 33799', color:'red' }, 
{id:9, value:12, label:' 38407',  }, 
{id:10, value:7, label:'168963',  }, 
{id:11, value:4, label:' 38147',  }, 
{id:12, value:10, label:' 39943', color:'red' }, 
{id:13, value:3, label:' 37891',  }, 
{id:14, value:1, label:'169219',  }, 
{id:15, value:1, label:' 37639',  }, 
{id:16, value:5, label:'  5383', color:'red' }, 
{id:17, value:7, label:'  5639', color:'red' }, 
{id:18, value:5, label:' 34311', color:'red' }, 
{id:19, value:9, label:' 37895',  }, 
{id:20, value:2, label:' 40455', color:'red' }, 
{id:21, value:10, label:' 38151',  }, 
{id:22, value:1, label:' 38791',  }, 
{id:23, value:3, label:' 38415', color:'red' }, 
{id:24, value:2, label:' 37889', color:'red' }, 
{id:25, value:3, label:' 39939', color:'red' }, 
{id:26, value:6, label:' 38403', color:'red' }, 
{id:27, value:11, label:' 38423',  }, 
{id:28, value:1, label:'103431',  }, 
{id:29, value:31, label:'103687', color:'green' }, 
{id:30, value:1, label:' 38671',  }, 
{id:31, value:1, label:' 34567',  }, 
{id:32, value:4, label:' 54275',  }, 
{id:33, value:1, label:' 34063',  }, 
{id:34, value:3, label:' 38279',  }, 
{id:35, value:3, label:' 38406',  }, 
{id:36, value:1, label:' 38023',  }, 
{id:37, value:1, label:' 38471',  }, 
{id:38, value:100, label:'  6152',color:'orange'}, 
];
var edges=[ 
{from:1, to:2, value: 1.253, title :' 0.075'}, 
{from:1, to:3, value: 1.330, title :' 0.095'}, 
{from:1, to:4, value: 1.046, title :' 0.015'}, 
{from:1, to:5, value: 1.145, title :' 0.045'}, 
{from:1, to:6, value: 1.090, title :' 0.029'}, 
{from:1, to:8, value: 1.161, title :' 0.050'}, 
{from:1, to:9, value: 1.093, title :' 0.030'}, 
{from:1, to:16, value: 3.807, title :' 0.446'}, 
{from:1, to:17, value: 2.982, title :' 0.364'}, 
{from:1, to:19, value: 1.099, title :' 0.032'}, 
{from:1, to:21, value: 1.056, title :' 0.018'}, 
{from:1, to:27, value: 1.080, title :' 0.026'}, 
{from:2, to:3, value: 1.889, title :' 0.212'}, 
{from:2, to:4, value: 1.124, title :' 0.039'}, 
{from:2, to:5, value: 1.101, title :' 0.032'}, 
{from:2, to:6, value: 1.125, title :' 0.039'}, 
{from:2, to:8, value: 1.176, title :' 0.054'}, 
{from:2, to:9, value: 1.144, title :' 0.045'}, 
{from:2, to:12, value: 1.111, title :' 0.035'}, 
{from:2, to:16, value: 1.171, title :' 0.053'}, 
{from:2, to:17, value: 1.273, title :' 0.080'}, 
{from:2, to:18, value: 1.219, title :' 0.066'}, 
{from:2, to:19, value: 1.124, title :' 0.039'}, 
{from:2, to:21, value: 1.096, title :' 0.030'}, 
{from:2, to:30, value: 1.728, title :' 0.182'}, 
{from:2, to:33, value: 1.212, title :' 0.064'}, 
{from:3, to:4, value: 1.070, title :' 0.023'}, 
{from:3, to:5, value: 1.141, title :' 0.044'}, 
{from:3, to:6, value: 1.190, title :' 0.058'}, 
{from:3, to:7, value: 1.053, title :' 0.017'}, 
{from:3, to:9, value: 1.271, title :' 0.080'}, 
{from:3, to:12, value: 1.142, title :' 0.044'}, 
{from:3, to:21, value: 1.120, title :' 0.038'}, 
{from:3, to:23, value: 2.007, title :' 0.232'}, 
{from:3, to:27, value: 1.057, title :' 0.019'}, 
{from:3, to:35, value: 1.049, title :' 0.016'}, 
{from:4, to:5, value: 1.081, title :' 0.026'}, 
{from:4, to:6, value: 1.170, title :' 0.052'}, 
{from:4, to:8, value: 1.089, title :' 0.028'}, 
{from:4, to:9, value: 1.132, title :' 0.041'}, 
{from:4, to:12, value: 1.080, title :' 0.026'}, 
{from:4, to:16, value: 1.047, title :' 0.015'}, 
{from:4, to:17, value: 1.061, title :' 0.020'}, 
{from:4, to:18, value: 1.141, title :' 0.044'}, 
{from:4, to:19, value: 1.055, title :' 0.018'}, 
{from:4, to:21, value: 1.073, title :' 0.023'}, 
{from:4, to:22, value: 2.664, title :' 0.327'}, 
{from:4, to:23, value: 1.167, title :' 0.051'}, 
{from:4, to:34, value: 1.059, title :' 0.019'}, 
{from:4, to:36, value: 1.048, title :' 0.016'}, 
{from:5, to:6, value: 1.137, title :' 0.043'}, 
{from:5, to:7, value: 1.071, title :' 0.023'}, 
{from:5, to:8, value: 2.198, title :' 0.263'}, 
{from:5, to:9, value: 1.086, title :' 0.027'}, 
{from:5, to:12, value: 1.075, title :' 0.024'}, 
{from:5, to:16, value: 1.061, title :' 0.020'}, 
{from:5, to:17, value: 1.069, title :' 0.022'}, 
{from:5, to:19, value: 1.103, title :' 0.033'}, 
{from:5, to:21, value: 1.040, title :' 0.013'}, 
{from:5, to:31, value: 1.658, title :' 0.168'}, 
{from:6, to:7, value: 1.040, title :' 0.013'}, 
{from:6, to:8, value: 1.152, title :' 0.047'}, 
{from:6, to:9, value: 2.777, title :' 0.340'}, 
{from:6, to:12, value: 1.131, title :' 0.041'}, 
{from:6, to:19, value: 1.128, title :' 0.040'}, 
{from:6, to:21, value: 1.133, title :' 0.042'}, 
{from:6, to:27, value: 1.091, title :' 0.029'}, 
{from:7, to:8, value: 1.083, title :' 0.027'}, 
{from:7, to:9, value: 1.066, title :' 0.021'}, 
{from:7, to:12, value: 1.046, title :' 0.015'}, 
{from:7, to:15, value: 5.821, title :' 0.587'}, 
{from:7, to:17, value: 1.056, title :' 0.018'}, 
{from:7, to:18, value: 1.042, title :' 0.014'}, 
{from:7, to:27, value: 1.058, title :' 0.019'}, 
{from:8, to:9, value: 1.127, title :' 0.040'}, 
{from:8, to:18, value: 1.947, title :' 0.222'}, 
{from:8, to:21, value: 1.052, title :' 0.017'}, 
{from:9, to:19, value: 1.128, title :' 0.040'}, 
{from:9, to:21, value: 1.087, title :' 0.028'}, 
{from:9, to:27, value: 1.093, title :' 0.030'}, 
{from:9, to:35, value: 1.041, title :' 0.013'}, 
{from:10, to:11, value: 1.064, title :' 0.021'}, 
{from:10, to:13, value: 1.058, title :' 0.019'}, 
{from:10, to:14, value: 6.029, title :' 0.599'}, 
{from:10, to:17, value: 1.034, title :' 0.011'}, 
{from:10, to:25, value: 1.042, title :' 0.014'}, 
{from:10, to:26, value: 1.072, title :' 0.023'}, 
{from:10, to:37, value: 1.036, title :' 0.012'}, 
{from:11, to:12, value: 1.041, title :' 0.013'}, 
{from:11, to:13, value: 5.747, title :' 0.583'}, 
{from:11, to:26, value: 1.072, title :' 0.023'}, 
{from:12, to:20, value: 2.794, title :' 0.343'}, 
{from:12, to:26, value: 1.225, title :' 0.068'}, 
{from:12, to:27, value: 1.041, title :' 0.014'}, 
{from:13, to:19, value: 1.036, title :' 0.012'}, 
{from:16, to:27, value: 1.059, title :' 0.019'}, 
{from:17, to:27, value: 1.049, title :' 0.016'}, 
{from:18, to:27, value: 1.046, title :' 0.015'}, 
{from:19, to:21, value: 1.488, title :' 0.133'}, 
{from:19, to:27, value: 1.043, title :' 0.014'}, 
{from:20, to:32, value: 1.040, title :' 0.013'}, 
{from:21, to:34, value: 1.034, title :' 0.011'}, 
{from:23, to:27, value: 1.070, title :' 0.022'}, 
{from:24, to:25, value: 1.900, title :' 0.214'}, 
{from:24, to:26, value: 1.286, title :' 0.084'}, 
{from:25, to:32, value: 1.052, title :' 0.017'}, 
{from:26, to:32, value: 1.057, title :' 0.018'}, 
{from:26, to:34, value: 1.035, title :' 0.011'}, 
{from:28, to:29, value: 1.814, title :' 0.198'}, 
{from:32, to:35, value: 1.049, title :' 0.016'}, 
];
var seed168964_BSatlas38node = { nodes:nodes,edges:edges};