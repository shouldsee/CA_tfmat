var nodes=[ 
{id:1, value:3, label:'  6308',  }, 
{id:2, value:5, label:'209034',  }, 
{id:3, value:5, label:'209290',  }, 
{id:4, value:3, label:'137380',  }, 
{id:5, value:3, label:'  6564',  }, 
{id:6, value:4, label:'143498',  }, 
{id:7, value:33, label:'137636', color:'green' }, 
{id:8, value:4, label:' 12682',  }, 
{id:9, value:4, label:' 12426',  }, 
{id:10, value:3, label:' 78218',  }, 
{id:11, value:3, label:' 77962',  }, 
{id:12, value:34, label:'143754', color:'green' }, 
{id:13, value:33, label:' 50837', color:'green' }, 
{id:14, value:3, label:'181909',  }, 
{id:15, value:3, label:'182165',  }, 
{id:16, value:3, label:' 51093',  }, 
{id:17, value:3, label:' 88702',  }, 
{id:18, value:33, label:' 88703', color:'green' }, 
{id:19, value:3, label:' 88191',  }, 
{id:20, value:3, label:' 88190',  }, 
{id:21, value:3, label:'210863',  }, 
{id:22, value:3, label:' 55143',  }, 
{id:23, value:3, label:'210351',  }, 
{id:24, value:3, label:' 55142',  }, 
{id:25, value:3, label:' 52555',  }, 
{id:26, value:33, label:'210862', color:'green' }, 
{id:27, value:4, label:'210859',  }, 
{id:28, value:3, label:' 54630',  }, 
{id:29, value:32, label:' 52299', color:'green' }, 
{id:30, value:33, label:' 54631', color:'green' }, 
{id:31, value:2, label:' 28588',  }, 
{id:32, value:3, label:'183371',  }, 
{id:33, value:3, label:'210350',  }, 
{id:34, value:4, label:'210858',  }, 
{id:35, value:4, label:'210346',  }, 
{id:36, value:3, label:'210347',  }, 
{id:37, value:1, label:' 28076',  }, 
{id:38, value:2, label:'183627',  }, 
{id:39, value:2, label:' 28589',  }, 
{id:40, value:3, label:' 79787',  }, 
{id:41, value:3, label:'210090',  }, 
{id:42, value:3, label:' 79274',  }, 
{id:43, value:1, label:'211255',  }, 
{id:44, value:31, label:'211767', color:'green' }, 
{id:45, value:3, label:' 79786',  }, 
{id:46, value:31, label:' 28077', color:'green' }, 
{id:47, value:33, label:'210602', color:'green' }, 
{id:48, value:3, label:'210603',  }, 
{id:49, value:2, label:' 79275',  }, 
{id:50, value:2, label:'210091',  }, 
{id:51, value:3, label:' 79018',  }, 
{id:52, value:3, label:' 79531',  }, 
{id:53, value:3, label:' 79530',  }, 
{id:54, value:2, label:' 79019',  }, 
{id:55, value:2, label:' 40469',  }, 
{id:56, value:2, label:' 40725',  }, 
{id:57, value:2, label:'171541',  }, 
{id:58, value:32, label:'171797', color:'green' }, 
{id:59, value:1, label:'138220',  }, 
{id:60, value:1, label:'138221',  }, 
{id:61, value:100, label:'  6152',color:'orange'}, 
];
var edges=[ 
{from:1, to:4, value: 6.474, title :' 0.623'}, 
{from:1, to:5, value: 4.688, title :' 0.515'}, 
{from:1, to:7, value: 2.554, title :' 0.313'}, 
{from:2, to:3, value: 3.653, title :' 0.432'}, 
{from:2, to:6, value: 1.102, title :' 0.032'}, 
{from:2, to:9, value: 1.101, title :' 0.032'}, 
{from:2, to:10, value: 2.292, title :' 0.277'}, 
{from:2, to:11, value: 6.638, title :' 0.631'}, 
{from:3, to:8, value: 1.086, title :' 0.028'}, 
{from:3, to:10, value: 6.417, title :' 0.620'}, 
{from:3, to:11, value: 2.130, title :' 0.252'}, 
{from:3, to:12, value: 1.098, title :' 0.031'}, 
{from:4, to:5, value: 2.304, title :' 0.278'}, 
{from:4, to:7, value: 3.952, title :' 0.458'}, 
{from:5, to:7, value: 5.416, title :' 0.563'}, 
{from:6, to:8, value: 2.297, title :' 0.277'}, 
{from:6, to:9, value: 7.037, title :' 0.650'}, 
{from:6, to:12, value: 3.244, title :' 0.392'}, 
{from:8, to:9, value: 3.167, title :' 0.384'}, 
{from:8, to:12, value: 6.460, title :' 0.622'}, 
{from:9, to:12, value: 2.069, title :' 0.242'}, 
{from:10, to:11, value: 3.444, title :' 0.412'}, 
{from:13, to:14, value: 4.201, title :' 0.478'}, 
{from:13, to:15, value: 1.946, title :' 0.222'}, 
{from:13, to:16, value: 3.615, title :' 0.428'}, 
{from:14, to:15, value: 3.715, title :' 0.437'}, 
{from:14, to:16, value: 1.764, title :' 0.189'}, 
{from:15, to:16, value: 3.526, title :' 0.420'}, 
{from:17, to:18, value: 2.175, title :' 0.259'}, 
{from:17, to:19, value: 1.598, title :' 0.156'}, 
{from:17, to:20, value: 4.797, title :' 0.523'}, 
{from:18, to:19, value: 4.720, title :' 0.517'}, 
{from:18, to:20, value: 1.453, title :' 0.124'}, 
{from:19, to:20, value: 1.877, title :' 0.210'}, 
{from:21, to:23, value: 1.896, title :' 0.213'}, 
{from:21, to:26, value: 1.724, title :' 0.181'}, 
{from:21, to:33, value: 1.130, title :' 0.041'}, 
{from:22, to:24, value: 1.519, title :' 0.139'}, 
{from:22, to:28, value: 1.115, title :' 0.036'}, 
{from:22, to:30, value: 1.920, title :' 0.217'}, 
{from:23, to:26, value: 1.098, title :' 0.031'}, 
{from:23, to:33, value: 1.537, title :' 0.143'}, 
{from:24, to:28, value: 1.946, title :' 0.222'}, 
{from:24, to:30, value: 1.083, title :' 0.026'}, 
{from:25, to:29, value: 2.079, title :' 0.244'}, 
{from:25, to:32, value: 1.092, title :' 0.029'}, 
{from:25, to:38, value: 1.387, title :' 0.109'}, 
{from:26, to:33, value: 1.653, title :' 0.168'}, 
{from:27, to:34, value: 1.623, title :' 0.161'}, 
{from:27, to:35, value: 1.082, title :' 0.026'}, 
{from:27, to:36, value: 1.538, title :' 0.143'}, 
{from:27, to:40, value: 1.131, title :' 0.041'}, 
{from:28, to:30, value: 1.399, title :' 0.112'}, 
{from:29, to:32, value: 1.459, title :' 0.126'}, 
{from:31, to:37, value: 2.533, title :' 0.310'}, 
{from:31, to:39, value: 1.146, title :' 0.045'}, 
{from:32, to:38, value: 1.809, title :' 0.198'}, 
{from:34, to:35, value: 1.406, title :' 0.114'}, 
{from:34, to:36, value: 1.087, title :' 0.028'}, 
{from:34, to:45, value: 1.099, title :' 0.031'}, 
{from:35, to:36, value: 1.548, title :' 0.146'}, 
{from:35, to:42, value: 1.134, title :' 0.042'}, 
{from:39, to:46, value: 2.086, title :' 0.245'}, 
{from:40, to:45, value: 1.408, title :' 0.114'}, 
{from:40, to:49, value: 1.405, title :' 0.113'}, 
{from:41, to:47, value: 1.407, title :' 0.114'}, 
{from:41, to:50, value: 1.357, title :' 0.102'}, 
{from:41, to:51, value: 1.152, title :' 0.047'}, 
{from:42, to:45, value: 1.353, title :' 0.101'}, 
{from:42, to:49, value: 1.413, title :' 0.115'}, 
{from:43, to:44, value: 2.132, title :' 0.252'}, 
{from:47, to:48, value: 1.299, title :' 0.087'}, 
{from:47, to:53, value: 1.109, title :' 0.035'}, 
{from:48, to:50, value: 1.409, title :' 0.114'}, 
{from:48, to:52, value: 1.086, title :' 0.028'}, 
{from:51, to:53, value: 1.185, title :' 0.057'}, 
{from:51, to:54, value: 1.278, title :' 0.082'}, 
{from:52, to:53, value: 1.251, title :' 0.075'}, 
{from:52, to:54, value: 1.276, title :' 0.081'}, 
{from:55, to:56, value: 1.219, title :' 0.066'}, 
{from:55, to:57, value: 1.302, title :' 0.088'}, 
{from:56, to:58, value: 1.298, title :' 0.087'}, 
{from:57, to:58, value: 1.126, title :' 0.040'}, 
{from:59, to:60, value: 1.237, title :' 0.071'}, 
];
var seq0batch256_sub21_BSatlas61node = { nodes:nodes,edges:edges};