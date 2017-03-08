var nodes=[ 
{id:1, value:7, label:'222838',  }, 
{id:2, value:7, label:'222836',  }, 
{id:3, value:6, label:'222837',  }, 
{id:4, value:6, label:'222325',  }, 
{id:5, value:8, label:'222324',  }, 
{id:6, value:9, label:'222839',  }, 
{id:7, value:3, label:'221815',  }, 
{id:8, value:7, label:'222327',  }, 
{id:9, value:6, label:'222501',  }, 
{id:10, value:5, label:'222245',  }, 
{id:11, value:6, label:'157549',  }, 
{id:12, value:4, label:'157036',  }, 
{id:13, value:4, label:'157037',  }, 
{id:14, value:3, label:'157548',  }, 
{id:15, value:2, label:'222326',  }, 
{id:16, value:1, label:'221303',  }, 
{id:17, value:1, label:'221814',  }, 
{id:18, value:4, label:'156780',  }, 
{id:19, value:3, label:'157292',  }, 
{id:20, value:4, label:' 91173',  }, 
{id:21, value:4, label:'157293',  }, 
{id:22, value:4, label:'155759',  }, 
{id:23, value:3, label:'156781',  }, 
{id:24, value:3, label:'155758',  }, 
{id:25, value:4, label:'156271',  }, 
{id:26, value:5, label:'155757',  }, 
{id:27, value:4, label:'155756',  }, 
{id:28, value:3, label:'156270',  }, 
{id:29, value:33, label:'156268', color:'green' }, 
{id:30, value:3, label:'156269',  }, 
{id:31, value:4, label:' 25700',  }, 
{id:32, value:4, label:' 25956',  }, 
{id:33, value:5, label:' 26468',  }, 
{id:34, value:5, label:' 26212',  }, 
{id:35, value:4, label:' 29796',  }, 
{id:36, value:4, label:' 30308',  }, 
{id:37, value:4, label:'156772',  }, 
{id:38, value:3, label:' 30052',  }, 
{id:39, value:3, label:'157028',  }, 
{id:40, value:5, label:'157540',  }, 
{id:41, value:2, label:' 30564',  }, 
{id:42, value:1, label:' 91429',  }, 
{id:43, value:2, label:'157284',  }, 
{id:44, value:6, label:'222308',  }, 
{id:45, value:6, label:' 91749',  }, 
{id:46, value:5, label:'222309',  }, 
{id:47, value:4, label:' 91748',  }, 
{id:48, value:3, label:' 91236',  }, 
{id:49, value:3, label:' 91492',  }, 
{id:50, value:5, label:'222820',  }, 
{id:51, value:3, label:' 92004',  }, 
{id:52, value:2, label:' 91493',  }, 
{id:53, value:2, label:' 91237',  }, 
{id:54, value:4, label:'223076',  }, 
{id:55, value:3, label:'222565',  }, 
{id:56, value:3, label:'222564',  }, 
{id:57, value:4, label:'223077',  }, 
{id:58, value:3, label:'222821',  }, 
{id:59, value:100, label:'  6152',color:'orange'}, 
];
var edges=[ 
{from:1, to:2, value: 1.120, title :' 0.038'}, 
{from:1, to:3, value: 1.092, title :' 0.029'}, 
{from:1, to:4, value: 1.078, title :' 0.025'}, 
{from:1, to:5, value: 1.059, title :' 0.019'}, 
{from:1, to:6, value: 5.612, title :' 0.575'}, 
{from:1, to:8, value: 2.855, title :' 0.350'}, 
{from:1, to:15, value: 5.840, title :' 0.588'}, 
{from:2, to:3, value: 5.575, title :' 0.573'}, 
{from:2, to:4, value: 2.815, title :' 0.345'}, 
{from:2, to:5, value: 5.327, title :' 0.558'}, 
{from:2, to:6, value: 1.101, title :' 0.032'}, 
{from:2, to:8, value: 1.069, title :' 0.022'}, 
{from:2, to:45, value: 1.046, title :' 0.015'}, 
{from:3, to:4, value: 5.636, title :' 0.576'}, 
{from:3, to:5, value: 2.771, title :' 0.340'}, 
{from:3, to:6, value: 1.080, title :' 0.026'}, 
{from:3, to:8, value: 1.065, title :' 0.021'}, 
{from:4, to:5, value: 5.162, title :' 0.547'}, 
{from:4, to:6, value: 1.058, title :' 0.019'}, 
{from:4, to:8, value: 1.060, title :' 0.020'}, 
{from:5, to:6, value: 1.048, title :' 0.015'}, 
{from:5, to:8, value: 1.057, title :' 0.019'}, 
{from:5, to:15, value: 1.062, title :' 0.020'}, 
{from:5, to:45, value: 1.043, title :' 0.014'}, 
{from:6, to:7, value: 1.065, title :' 0.021'}, 
{from:6, to:8, value: 5.721, title :' 0.581'}, 
{from:6, to:11, value: 1.055, title :' 0.018'}, 
{from:6, to:13, value: 1.039, title :' 0.013'}, 
{from:7, to:16, value: 5.671, title :' 0.578'}, 
{from:7, to:17, value: 5.305, title :' 0.556'}, 
{from:8, to:10, value: 1.042, title :' 0.014'}, 
{from:9, to:10, value: 3.231, title :' 0.391'}, 
{from:9, to:11, value: 1.037, title :' 0.012'}, 
{from:9, to:20, value: 1.515, title :' 0.138'}, 
{from:9, to:26, value: 1.039, title :' 0.013'}, 
{from:9, to:35, value: 1.042, title :' 0.014'}, 
{from:9, to:42, value: 2.640, title :' 0.324'}, 
{from:10, to:20, value: 2.798, title :' 0.343'}, 
{from:10, to:36, value: 1.052, title :' 0.017'}, 
{from:10, to:46, value: 1.042, title :' 0.014'}, 
{from:11, to:12, value: 1.298, title :' 0.087'}, 
{from:11, to:13, value: 3.017, title :' 0.368'}, 
{from:11, to:14, value: 1.639, title :' 0.165'}, 
{from:11, to:33, value: 1.039, title :' 0.013'}, 
{from:12, to:13, value: 1.705, title :' 0.178'}, 
{from:12, to:14, value: 3.134, title :' 0.381'}, 
{from:12, to:18, value: 1.038, title :' 0.013'}, 
{from:13, to:14, value: 1.285, title :' 0.084'}, 
{from:18, to:19, value: 3.305, title :' 0.398'}, 
{from:18, to:21, value: 1.117, title :' 0.037'}, 
{from:18, to:23, value: 1.319, title :' 0.092'}, 
{from:19, to:21, value: 1.304, title :' 0.088'}, 
{from:19, to:23, value: 1.119, title :' 0.037'}, 
{from:20, to:44, value: 1.035, title :' 0.011'}, 
{from:20, to:52, value: 1.038, title :' 0.012'}, 
{from:21, to:23, value: 2.967, title :' 0.363'}, 
{from:21, to:45, value: 1.034, title :' 0.011'}, 
{from:22, to:24, value: 1.303, title :' 0.088'}, 
{from:22, to:25, value: 2.941, title :' 0.360'}, 
{from:22, to:28, value: 1.112, title :' 0.035'}, 
{from:22, to:50, value: 1.035, title :' 0.012'}, 
{from:24, to:25, value: 1.100, title :' 0.032'}, 
{from:24, to:28, value: 2.976, title :' 0.364'}, 
{from:25, to:28, value: 1.225, title :' 0.068'}, 
{from:25, to:40, value: 1.034, title :' 0.011'}, 
{from:26, to:27, value: 1.310, title :' 0.090'}, 
{from:26, to:29, value: 1.098, title :' 0.031'}, 
{from:26, to:30, value: 2.653, title :' 0.325'}, 
{from:26, to:46, value: 1.034, title :' 0.011'}, 
{from:27, to:29, value: 2.732, title :' 0.335'}, 
{from:27, to:30, value: 1.103, title :' 0.033'}, 
{from:27, to:34, value: 1.036, title :' 0.012'}, 
{from:29, to:30, value: 1.328, title :' 0.095'}, 
{from:31, to:32, value: 2.702, title :' 0.331'}, 
{from:31, to:37, value: 1.180, title :' 0.055'}, 
{from:31, to:39, value: 1.051, title :' 0.016'}, 
{from:31, to:45, value: 1.036, title :' 0.012'}, 
{from:32, to:33, value: 1.048, title :' 0.015'}, 
{from:32, to:37, value: 1.046, title :' 0.015'}, 
{from:32, to:39, value: 1.151, title :' 0.047'}, 
{from:33, to:34, value: 2.459, title :' 0.300'}, 
{from:33, to:40, value: 1.161, title :' 0.050'}, 
{from:33, to:55, value: 1.043, title :' 0.014'}, 
{from:34, to:35, value: 1.038, title :' 0.013'}, 
{from:34, to:40, value: 1.051, title :' 0.017'}, 
{from:34, to:43, value: 1.140, title :' 0.044'}, 
{from:35, to:36, value: 2.643, title :' 0.324'}, 
{from:35, to:38, value: 1.107, title :' 0.034'}, 
{from:36, to:38, value: 1.049, title :' 0.016'}, 
{from:36, to:41, value: 1.073, title :' 0.024'}, 
{from:37, to:39, value: 2.433, title :' 0.296'}, 
{from:37, to:45, value: 1.040, title :' 0.013'}, 
{from:38, to:41, value: 2.617, title :' 0.321'}, 
{from:40, to:43, value: 2.157, title :' 0.256'}, 
{from:40, to:44, value: 1.042, title :' 0.014'}, 
{from:44, to:46, value: 1.059, title :' 0.019'}, 
{from:44, to:48, value: 1.047, title :' 0.015'}, 
{from:44, to:50, value: 1.240, title :' 0.072'}, 
{from:44, to:56, value: 1.236, title :' 0.071'}, 
{from:45, to:53, value: 1.259, title :' 0.077'}, 
{from:46, to:55, value: 1.194, title :' 0.059'}, 
{from:46, to:58, value: 1.330, title :' 0.095'}, 
{from:47, to:48, value: 1.204, title :' 0.062'}, 
{from:47, to:50, value: 1.075, title :' 0.024'}, 
{from:47, to:51, value: 1.329, title :' 0.095'}, 
{from:47, to:57, value: 1.034, title :' 0.011'}, 
{from:48, to:49, value: 1.389, title :' 0.110'}, 
{from:49, to:51, value: 1.190, title :' 0.058'}, 
{from:49, to:56, value: 1.046, title :' 0.015'}, 
{from:50, to:54, value: 1.175, title :' 0.054'}, 
{from:50, to:58, value: 1.035, title :' 0.011'}, 
{from:51, to:54, value: 1.046, title :' 0.015'}, 
{from:52, to:53, value: 1.307, title :' 0.089'}, 
{from:54, to:56, value: 1.229, title :' 0.069'}, 
{from:54, to:57, value: 1.071, title :' 0.023'}, 
{from:55, to:57, value: 1.280, title :' 0.082'}, 
{from:57, to:58, value: 1.099, title :' 0.031'}, 
];
var seed222502_BSatlas59node_0dense = { nodes:nodes,edges:edges};