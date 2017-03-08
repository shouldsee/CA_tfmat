var nodes=[ 
{id:1, value:13, label:'  6559', color:'red' }, 
{id:2, value:7, label:'  6303', color:'red' }, 
{id:3, value:5, label:'  7071', color:'red' }, 
{id:4, value:13, label:'  6941',  }, 
{id:5, value:7, label:'  6173', color:'red' }, 
{id:6, value:4, label:'  6543', color:'red' }, 
{id:7, value:10, label:'  8093',  }, 
{id:8, value:11, label:'138141',  }, 
{id:9, value:7, label:'  6413',  }, 
{id:10, value:5, label:'  6541',  }, 
{id:11, value:7, label:'  6813',  }, 
{id:12, value:4, label:'137613',  }, 
{id:13, value:1, label:'  6685',  }, 
{id:14, value:1, label:'  6157',  }, 
{id:15, value:8, label:'137373',  }, 
{id:16, value:1, label:'  6285',  }, 
{id:17, value:1, label:'137357',  }, 
{id:18, value:1, label:'  6429',  }, 
{id:19, value:5, label:'  7069',  }, 
{id:20, value:3, label:'  6558',  }, 
{id:21, value:3, label:'  6301',  }, 
{id:22, value:2, label:'137885',  }, 
{id:23, value:4, label:'  6556',  }, 
{id:24, value:1, label:'  7837',  }, 
{id:25, value:1, label:'  7965',  }, 
{id:26, value:32, label:'  6557', color:'green' }, 
{id:27, value:1, label:'  6925',  }, 
{id:28, value:1, label:'139165',  }, 
{id:29, value:1, label:'138013',  }, 
{id:30, value:100, label:'  6152',color:'orange'}, 
];
var edges=[ 
{from:1, to:2, value:15.826, title :' 0.921'}, 
{from:1, to:3, value:16.744, title :' 0.939'}, 
{from:1, to:4, value: 1.465, title :' 0.127'}, 
{from:1, to:5, value: 3.365, title :' 0.405'}, 
{from:1, to:6, value: 2.916, title :' 0.357'}, 
{from:1, to:7, value: 1.210, title :' 0.064'}, 
{from:1, to:8, value: 1.199, title :' 0.060'}, 
{from:1, to:9, value: 1.226, title :' 0.068'}, 
{from:1, to:10, value: 1.057, title :' 0.018'}, 
{from:1, to:11, value: 1.169, title :' 0.052'}, 
{from:1, to:15, value: 1.038, title :' 0.012'}, 
{from:1, to:19, value: 1.090, title :' 0.029'}, 
{from:1, to:23, value: 1.035, title :' 0.011'}, 
{from:2, to:4, value: 1.427, title :' 0.119'}, 
{from:2, to:7, value: 1.199, title :' 0.060'}, 
{from:2, to:8, value: 1.209, title :' 0.063'}, 
{from:2, to:9, value: 1.226, title :' 0.068'}, 
{from:2, to:15, value: 1.063, title :' 0.020'}, 
{from:2, to:23, value: 1.034, title :' 0.011'}, 
{from:3, to:7, value: 1.245, title :' 0.073'}, 
{from:3, to:8, value: 1.165, title :' 0.051'}, 
{from:3, to:12, value: 1.045, title :' 0.015'}, 
{from:3, to:15, value: 1.041, title :' 0.013'}, 
{from:4, to:5, value: 1.585, title :' 0.154'}, 
{from:4, to:6, value: 1.178, title :' 0.055'}, 
{from:4, to:7, value: 1.079, title :' 0.025'}, 
{from:4, to:8, value: 1.037, title :' 0.012'}, 
{from:4, to:9, value: 1.091, title :' 0.029'}, 
{from:4, to:11, value: 1.102, title :' 0.032'}, 
{from:4, to:13, value: 1.632, title :' 0.163'}, 
{from:4, to:15, value: 1.040, title :' 0.013'}, 
{from:4, to:18, value: 1.352, title :' 0.101'}, 
{from:4, to:19, value: 1.057, title :' 0.018'}, 
{from:4, to:27, value: 1.075, title :' 0.024'}, 
{from:5, to:7, value: 1.167, title :' 0.051'}, 
{from:5, to:8, value: 1.214, title :' 0.065'}, 
{from:5, to:9, value: 1.169, title :' 0.052'}, 
{from:5, to:15, value: 1.071, title :' 0.023'}, 
{from:5, to:23, value: 1.049, title :' 0.016'}, 
{from:6, to:7, value: 1.136, title :' 0.043'}, 
{from:6, to:8, value: 1.116, title :' 0.037'}, 
{from:7, to:11, value: 1.053, title :' 0.017'}, 
{from:7, to:20, value: 1.106, title :' 0.034'}, 
{from:7, to:24, value: 1.157, title :' 0.049'}, 
{from:7, to:25, value: 1.145, title :' 0.045'}, 
{from:8, to:15, value: 1.079, title :' 0.025'}, 
{from:8, to:20, value: 1.103, title :' 0.033'}, 
{from:8, to:22, value: 1.121, title :' 0.038'}, 
{from:8, to:28, value: 1.074, title :' 0.024'}, 
{from:8, to:29, value: 1.063, title :' 0.020'}, 
{from:9, to:10, value: 1.057, title :' 0.018'}, 
{from:9, to:11, value: 1.037, title :' 0.012'}, 
{from:9, to:14, value: 1.611, title :' 0.159'}, 
{from:10, to:12, value: 1.104, title :' 0.033'}, 
{from:10, to:16, value: 1.433, title :' 0.120'}, 
{from:10, to:23, value: 1.044, title :' 0.014'}, 
{from:11, to:15, value: 1.046, title :' 0.015'}, 
{from:11, to:19, value: 1.077, title :' 0.025'}, 
{from:11, to:21, value: 1.132, title :' 0.041'}, 
{from:12, to:17, value: 1.428, title :' 0.119'}, 
{from:12, to:20, value: 1.067, title :' 0.022'}, 
{from:15, to:22, value: 1.074, title :' 0.024'}, 
{from:19, to:21, value: 1.047, title :' 0.015'}, 
{from:19, to:26, value: 1.035, title :' 0.012'}, 
{from:21, to:26, value: 1.071, title :' 0.023'}, 
];
var seed138142_sub0_BSatlas30node = { nodes:nodes,edges:edges};