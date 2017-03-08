var nodes=[ 
{id:1, value:4, label:'206182',  }, 
{id:2, value:33, label:' 75110', color:'green' }, 
{id:3, value:3, label:' 74854',  }, 
{id:4, value:3, label:'205926',  }, 
{id:5, value:3, label:'206438',  }, 
{id:6, value:4, label:' 75366',  }, 
{id:7, value:4, label:'206694',  }, 
{id:8, value:2, label:' 75111',  }, 
{id:9, value:4, label:' 75622',  }, 
{id:10, value:1, label:' 74855',  }, 
{id:11, value:2, label:' 99943',  }, 
{id:12, value:2, label:'100199',  }, 
{id:13, value:5, label:'  1894',  }, 
{id:14, value:6, label:' 99942',  }, 
{id:15, value:4, label:'  2022',  }, 
{id:16, value:3, label:'231014',  }, 
{id:17, value:3, label:'231270',  }, 
{id:18, value:32, label:'100198', color:'green' }, 
{id:19, value:5, label:'198374',  }, 
{id:20, value:5, label:'  1638',  }, 
{id:21, value:4, label:'132966',  }, 
{id:22, value:2, label:'198630',  }, 
{id:23, value:2, label:' 67174',  }, 
{id:24, value:2, label:' 67430',  }, 
{id:25, value:1, label:'198246',  }, 
{id:26, value:1, label:'198502',  }, 
{id:27, value:1, label:'  1766',  }, 
{id:28, value:4, label:' 66662',  }, 
{id:29, value:4, label:' 66918',  }, 
{id:30, value:1, label:'132710',  }, 
{id:31, value:3, label:'197990',  }, 
{id:32, value:3, label:'197734',  }, 
{id:33, value:3, label:'  1895', color:'red' }, 
{id:34, value:3, label:'  1382',  }, 
{id:35, value:1, label:'  1126',  }, 
{id:36, value:1, label:'  1510',  }, 
{id:37, value:1, label:'229990',  }, 
{id:38, value:1, label:' 98919',  }, 
{id:39, value:100, label:'  6152',color:'orange'}, 
];
var edges=[ 
{from:1, to:2, value: 1.693, title :' 0.176'}, 
{from:1, to:3, value: 1.208, title :' 0.063'}, 
{from:1, to:4, value: 2.995, title :' 0.366'}, 
{from:1, to:7, value: 1.034, title :' 0.011'}, 
{from:2, to:3, value: 3.025, title :' 0.369'}, 
{from:2, to:4, value: 1.210, title :' 0.064'}, 
{from:3, to:4, value: 1.655, title :' 0.168'}, 
{from:5, to:6, value: 1.302, title :' 0.088'}, 
{from:5, to:7, value: 3.265, title :' 0.394'}, 
{from:5, to:9, value: 1.096, title :' 0.030'}, 
{from:6, to:7, value: 1.080, title :' 0.026'}, 
{from:6, to:9, value: 3.121, title :' 0.379'}, 
{from:6, to:19, value: 1.036, title :' 0.012'}, 
{from:7, to:9, value: 1.230, title :' 0.069'}, 
{from:8, to:10, value: 4.274, title :' 0.484'}, 
{from:8, to:14, value: 1.037, title :' 0.012'}, 
{from:9, to:19, value: 1.043, title :' 0.014'}, 
{from:11, to:12, value: 3.947, title :' 0.458'}, 
{from:11, to:19, value: 1.059, title :' 0.019'}, 
{from:12, to:19, value: 1.041, title :' 0.013'}, 
{from:13, to:20, value: 2.180, title :' 0.260'}, 
{from:13, to:21, value: 1.059, title :' 0.019'}, 
{from:13, to:23, value: 1.051, title :' 0.017'}, 
{from:13, to:33, value: 1.273, title :' 0.080'}, 
{from:13, to:34, value: 1.088, title :' 0.028'}, 
{from:14, to:16, value: 1.064, title :' 0.021'}, 
{from:14, to:17, value: 1.035, title :' 0.012'}, 
{from:14, to:18, value: 2.607, title :' 0.319'}, 
{from:14, to:29, value: 1.034, title :' 0.011'}, 
{from:14, to:38, value: 1.047, title :' 0.015'}, 
{from:15, to:20, value: 1.082, title :' 0.026'}, 
{from:15, to:27, value: 2.050, title :' 0.239'}, 
{from:15, to:33, value: 1.255, title :' 0.076'}, 
{from:15, to:36, value: 1.074, title :' 0.024'}, 
{from:16, to:17, value: 2.646, title :' 0.324'}, 
{from:16, to:37, value: 1.048, title :' 0.016'}, 
{from:17, to:18, value: 1.051, title :' 0.016'}, 
{from:19, to:22, value: 2.359, title :' 0.286'}, 
{from:20, to:21, value: 1.050, title :' 0.016'}, 
{from:20, to:34, value: 1.038, title :' 0.012'}, 
{from:20, to:35, value: 1.085, title :' 0.027'}, 
{from:21, to:30, value: 1.997, title :' 0.230'}, 
{from:21, to:33, value: 1.133, title :' 0.041'}, 
{from:22, to:34, value: 1.062, title :' 0.020'}, 
{from:23, to:24, value: 2.216, title :' 0.265'}, 
{from:24, to:28, value: 1.034, title :' 0.011'}, 
{from:25, to:26, value: 2.167, title :' 0.258'}, 
{from:28, to:29, value: 1.695, title :' 0.176'}, 
{from:28, to:31, value: 1.053, title :' 0.017'}, 
{from:28, to:32, value: 1.107, title :' 0.034'}, 
{from:29, to:31, value: 1.102, title :' 0.032'}, 
{from:29, to:32, value: 1.036, title :' 0.012'}, 
{from:31, to:32, value: 1.644, title :' 0.166'}, 
];
var seed229991_BSatlas39node = { nodes:nodes,edges:edges};