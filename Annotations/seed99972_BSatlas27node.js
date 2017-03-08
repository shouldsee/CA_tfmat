var nodes=[ 
{id:1, value:12, label:' 99075',  }, 
{id:2, value:41, label:' 98819', color:'green' }, 
{id:3, value:8, label:' 67075',  }, 
{id:4, value:6, label:' 99971',  }, 
{id:5, value:8, label:' 99843',  }, 
{id:6, value:8, label:'100099',  }, 
{id:7, value:1, label:' 67331',  }, 
{id:8, value:1, label:'100227',  }, 
{id:9, value:9, label:' 98947',  }, 
{id:10, value:11, label:' 98307',  }, 
{id:11, value:5, label:' 99331',  }, 
{id:12, value:1, label:' 99587',  }, 
{id:13, value:4, label:' 98435',  }, 
{id:14, value:1, label:' 99203',  }, 
{id:15, value:9, label:' 33283',  }, 
{id:16, value:6, label:' 66307',  }, 
{id:17, value:6, label:' 34307',  }, 
{id:18, value:6, label:' 99139',  }, 
{id:19, value:1, label:' 98563',  }, 
{id:20, value:1, label:'  1539',  }, 
{id:21, value:1, label:' 66051',  }, 
{id:22, value:3, label:' 98818',  }, 
{id:23, value:3, label:' 98311',  }, 
{id:24, value:2, label:' 41475',  }, 
{id:25, value:1, label:' 99459',  }, 
{id:26, value:1, label:' 33411',  }, 
{id:27, value:100, label:'  6152',color:'orange'}, 
];
var edges=[ 
{from:1, to:2, value:10.941, title :' 0.798'}, 
{from:1, to:3, value: 1.061, title :' 0.020'}, 
{from:1, to:5, value: 1.062, title :' 0.020'}, 
{from:1, to:6, value: 1.049, title :' 0.016'}, 
{from:1, to:9, value: 1.697, title :' 0.176'}, 
{from:1, to:10, value: 1.319, title :' 0.092'}, 
{from:1, to:14, value: 1.963, title :' 0.225'}, 
{from:1, to:15, value: 1.060, title :' 0.019'}, 
{from:1, to:16, value: 1.110, title :' 0.035'}, 
{from:1, to:17, value: 1.094, title :' 0.030'}, 
{from:1, to:18, value: 1.043, title :' 0.014'}, 
{from:1, to:19, value: 1.300, title :' 0.087'}, 
{from:2, to:5, value: 1.062, title :' 0.020'}, 
{from:2, to:6, value: 1.036, title :' 0.012'}, 
{from:2, to:9, value: 1.799, title :' 0.196'}, 
{from:2, to:10, value: 1.312, title :' 0.091'}, 
{from:2, to:13, value: 1.080, title :' 0.026'}, 
{from:2, to:15, value: 1.104, title :' 0.033'}, 
{from:2, to:16, value: 1.044, title :' 0.014'}, 
{from:2, to:17, value: 1.090, title :' 0.029'}, 
{from:2, to:18, value: 1.052, title :' 0.017'}, 
{from:2, to:23, value: 1.064, title :' 0.021'}, 
{from:3, to:5, value: 1.039, title :' 0.013'}, 
{from:3, to:7, value:10.147, title :' 0.772'}, 
{from:3, to:16, value: 1.164, title :' 0.051'}, 
{from:3, to:17, value: 1.102, title :' 0.032'}, 
{from:3, to:18, value: 1.057, title :' 0.018'}, 
{from:3, to:20, value: 1.274, title :' 0.081'}, 
{from:3, to:21, value: 1.273, title :' 0.080'}, 
{from:4, to:5, value: 1.190, title :' 0.058'}, 
{from:4, to:6, value: 1.191, title :' 0.058'}, 
{from:4, to:8, value: 9.543, title :' 0.752'}, 
{from:4, to:10, value: 1.066, title :' 0.021'}, 
{from:4, to:18, value: 1.040, title :' 0.013'}, 
{from:4, to:25, value: 1.063, title :' 0.020'}, 
{from:5, to:6, value: 9.608, title :' 0.754'}, 
{from:5, to:9, value: 1.056, title :' 0.018'}, 
{from:5, to:11, value: 1.074, title :' 0.024'}, 
{from:5, to:23, value: 1.039, title :' 0.013'}, 
{from:6, to:10, value: 1.047, title :' 0.015'}, 
{from:6, to:11, value: 1.060, title :' 0.019'}, 
{from:6, to:13, value: 1.040, title :' 0.013'}, 
{from:6, to:15, value: 1.039, title :' 0.013'}, 
{from:9, to:10, value: 1.111, title :' 0.035'}, 
{from:9, to:13, value: 1.259, title :' 0.077'}, 
{from:9, to:15, value: 1.096, title :' 0.031'}, 
{from:9, to:17, value: 1.042, title :' 0.014'}, 
{from:9, to:24, value: 1.040, title :' 0.013'}, 
{from:9, to:26, value: 1.062, title :' 0.020'}, 
{from:10, to:11, value: 1.057, title :' 0.019'}, 
{from:10, to:13, value: 1.540, title :' 0.144'}, 
{from:10, to:15, value: 1.071, title :' 0.023'}, 
{from:10, to:18, value: 1.068, title :' 0.022'}, 
{from:10, to:22, value: 1.055, title :' 0.018'}, 
{from:10, to:23, value: 1.050, title :' 0.016'}, 
{from:11, to:12, value: 2.668, title :' 0.327'}, 
{from:11, to:18, value: 1.046, title :' 0.015'}, 
{from:15, to:16, value: 1.084, title :' 0.027'}, 
{from:15, to:17, value: 1.073, title :' 0.024'}, 
{from:15, to:22, value: 1.058, title :' 0.019'}, 
{from:15, to:24, value: 1.043, title :' 0.014'}, 
{from:16, to:17, value: 1.127, title :' 0.040'}, 
{from:16, to:22, value: 1.058, title :' 0.019'}, 
];
var seed99972_BSatlas27node = { nodes:nodes,edges:edges};