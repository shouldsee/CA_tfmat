var nodes=[ 
{id:1, value:6, label:'209320',  }, 
{id:2, value:7, label:' 78248',  }, 
{id:3, value:7, label:' 78250',  }, 
{id:4, value:4, label:'211880',  }, 
{id:5, value:7, label:' 78762',  }, 
{id:6, value:6, label:'209832',  }, 
{id:7, value:6, label:'209064',  }, 
{id:8, value:5, label:'209834',  }, 
{id:9, value:6, label:'209576',  }, 
{id:10, value:6, label:' 78760',  }, 
{id:11, value:8, label:'209066',  }, 
{id:12, value:3, label:'211368',  }, 
{id:13, value:7, label:'210600',  }, 
{id:14, value:5, label:'210856',  }, 
{id:15, value:6, label:' 77992',  }, 
{id:16, value:4, label:'209578',  }, 
{id:17, value:6, label:'209321',  }, 
{id:18, value:5, label:' 77994',  }, 
{id:19, value:5, label:'210344',  }, 
{id:20, value:5, label:'210857',  }, 
{id:21, value:5, label:' 78506',  }, 
{id:22, value:4, label:'209833',  }, 
{id:23, value:5, label:' 78504',  }, 
{id:24, value:6, label:' 79016',  }, 
{id:25, value:5, label:'210088',  }, 
{id:26, value:6, label:' 12713',  }, 
{id:27, value:5, label:' 79528',  }, 
{id:28, value:6, label:' 79272',  }, 
{id:29, value:4, label:'143529',  }, 
{id:30, value:6, label:' 79785',  }, 
{id:31, value:4, label:'209579',  }, 
{id:32, value:5, label:'210345',  }, 
{id:33, value:5, label:'209065',  }, 
{id:34, value:4, label:'209577',  }, 
{id:35, value:5, label:' 78507',  }, 
{id:36, value:35, label:' 79784', color:'green' }, 
{id:37, value:4, label:' 78249',  }, 
{id:38, value:6, label:' 77993',  }, 
{id:39, value:5, label:'143785',  }, 
{id:40, value:4, label:' 78761',  }, 
{id:41, value:4, label:'210601',  }, 
{id:42, value:3, label:' 12457',  }, 
{id:43, value:4, label:' 79273',  }, 
{id:44, value:4, label:' 13225',  }, 
{id:45, value:5, label:'210089',  }, 
{id:46, value:4, label:' 78505',  }, 
{id:47, value:5, label:' 77995',  }, 
{id:48, value:3, label:'144041',  }, 
{id:49, value:4, label:' 79529',  }, 
{id:50, value:4, label:' 79017',  }, 
{id:51, value:2, label:' 12969',  }, 
{id:52, value:3, label:'144297',  }, 
{id:53, value:2, label:'209067',  }, 
{id:54, value:2, label:'211369',  }, 
{id:55, value:3, label:' 78763',  }, 
{id:56, value:2, label:'209322',  }, 
{id:57, value:2, label:'209835',  }, 
{id:58, value:2, label:' 78251',  }, 
{id:59, value:1, label:'211881',  }, 
{id:60, value:3, label:' 80296',  }, 
{id:61, value:1, label:'209056', color:'red' }, 
{id:62, value:100, label:'  6152',color:'orange'}, 
];
var edges=[ 
{from:1, to:2, value: 1.483, title :' 0.131'}, 
{from:1, to:6, value: 1.241, title :' 0.072'}, 
{from:1, to:7, value: 1.382, title :' 0.108'}, 
{from:1, to:12, value: 1.048, title :' 0.015'}, 
{from:1, to:15, value: 1.066, title :' 0.021'}, 
{from:1, to:17, value: 1.079, title :' 0.025'}, 
{from:2, to:3, value: 1.035, title :' 0.012'}, 
{from:2, to:6, value: 1.036, title :' 0.012'}, 
{from:2, to:7, value: 1.066, title :' 0.021'}, 
{from:2, to:10, value: 1.197, title :' 0.060'}, 
{from:2, to:15, value: 1.370, title :' 0.105'}, 
{from:2, to:37, value: 1.086, title :' 0.027'}, 
{from:3, to:5, value: 1.298, title :' 0.087'}, 
{from:3, to:11, value: 1.034, title :' 0.011'}, 
{from:3, to:18, value: 1.203, title :' 0.062'}, 
{from:3, to:47, value: 1.045, title :' 0.015'}, 
{from:3, to:56, value: 1.213, title :' 0.064'}, 
{from:3, to:58, value: 1.366, title :' 0.104'}, 
{from:4, to:12, value: 1.660, title :' 0.169'}, 
{from:4, to:13, value: 1.040, title :' 0.013'}, 
{from:4, to:54, value: 1.129, title :' 0.040'}, 
{from:4, to:59, value: 1.485, title :' 0.132'}, 
{from:5, to:8, value: 1.198, title :' 0.060'}, 
{from:5, to:11, value: 1.037, title :' 0.012'}, 
{from:5, to:18, value: 1.042, title :' 0.014'}, 
{from:5, to:21, value: 1.199, title :' 0.060'}, 
{from:5, to:44, value: 1.037, title :' 0.012'}, 
{from:5, to:55, value: 1.374, title :' 0.106'}, 
{from:6, to:9, value: 1.337, title :' 0.097'}, 
{from:6, to:10, value: 1.365, title :' 0.104'}, 
{from:6, to:22, value: 1.162, title :' 0.050'}, 
{from:6, to:33, value: 1.035, title :' 0.012'}, 
{from:7, to:9, value: 1.219, title :' 0.066'}, 
{from:7, to:15, value: 1.387, title :' 0.109'}, 
{from:7, to:33, value: 1.081, title :' 0.026'}, 
{from:7, to:61, value: 1.037, title :' 0.012'}, 
{from:8, to:16, value: 1.198, title :' 0.060'}, 
{from:8, to:55, value: 1.040, title :' 0.013'}, 
{from:8, to:56, value: 1.326, title :' 0.094'}, 
{from:8, to:57, value: 1.398, title :' 0.112'}, 
{from:9, to:10, value: 1.039, title :' 0.013'}, 
{from:9, to:15, value: 1.036, title :' 0.012'}, 
{from:9, to:23, value: 1.396, title :' 0.111'}, 
{from:9, to:34, value: 1.101, title :' 0.032'}, 
{from:10, to:23, value: 1.339, title :' 0.097'}, 
{from:10, to:38, value: 1.055, title :' 0.018'}, 
{from:10, to:40, value: 1.121, title :' 0.038'}, 
{from:11, to:16, value: 1.291, title :' 0.085'}, 
{from:11, to:18, value: 1.272, title :' 0.080'}, 
{from:11, to:21, value: 1.060, title :' 0.019'}, 
{from:11, to:26, value: 1.037, title :' 0.012'}, 
{from:11, to:47, value: 1.052, title :' 0.017'}, 
{from:11, to:53, value: 1.293, title :' 0.086'}, 
{from:12, to:54, value: 1.462, title :' 0.127'}, 
{from:13, to:14, value: 1.167, title :' 0.052'}, 
{from:13, to:24, value: 1.043, title :' 0.014'}, 
{from:13, to:25, value: 1.342, title :' 0.098'}, 
{from:13, to:27, value: 1.198, title :' 0.060'}, 
{from:13, to:41, value: 1.234, title :' 0.070'}, 
{from:13, to:45, value: 1.035, title :' 0.011'}, 
{from:14, to:19, value: 1.420, title :' 0.117'}, 
{from:14, to:20, value: 1.272, title :' 0.080'}, 
{from:14, to:28, value: 1.044, title :' 0.014'}, 
{from:14, to:36, value: 1.156, title :' 0.048'}, 
{from:15, to:23, value: 1.125, title :' 0.039'}, 
{from:15, to:38, value: 1.050, title :' 0.016'}, 
{from:16, to:21, value: 1.252, title :' 0.075'}, 
{from:16, to:31, value: 1.273, title :' 0.080'}, 
{from:17, to:22, value: 1.243, title :' 0.072'}, 
{from:17, to:33, value: 1.225, title :' 0.068'}, 
{from:17, to:37, value: 1.383, title :' 0.108'}, 
{from:17, to:39, value: 1.043, title :' 0.014'}, 
{from:17, to:60, value: 1.037, title :' 0.012'}, 
{from:18, to:21, value: 1.243, title :' 0.073'}, 
{from:18, to:47, value: 1.222, title :' 0.067'}, 
{from:19, to:25, value: 1.132, title :' 0.041'}, 
{from:19, to:28, value: 1.205, title :' 0.062'}, 
{from:19, to:32, value: 1.200, title :' 0.061'}, 
{from:19, to:36, value: 1.039, title :' 0.013'}, 
{from:20, to:23, value: 1.035, title :' 0.011'}, 
{from:20, to:30, value: 1.168, title :' 0.052'}, 
{from:20, to:32, value: 1.393, title :' 0.111'}, 
{from:20, to:41, value: 1.113, title :' 0.036'}, 
{from:21, to:35, value: 1.182, title :' 0.056'}, 
{from:22, to:34, value: 1.244, title :' 0.073'}, 
{from:22, to:40, value: 1.297, title :' 0.087'}, 
{from:23, to:46, value: 1.070, title :' 0.022'}, 
{from:24, to:25, value: 1.261, title :' 0.077'}, 
{from:24, to:26, value: 1.037, title :' 0.012'}, 
{from:24, to:27, value: 1.290, title :' 0.085'}, 
{from:24, to:28, value: 1.150, title :' 0.047'}, 
{from:24, to:50, value: 1.135, title :' 0.042'}, 
{from:25, to:27, value: 1.044, title :' 0.014'}, 
{from:25, to:45, value: 1.146, title :' 0.045'}, 
{from:26, to:29, value: 1.072, title :' 0.023'}, 
{from:26, to:39, value: 1.296, title :' 0.086'}, 
{from:26, to:42, value: 1.399, title :' 0.112'}, 
{from:26, to:44, value: 1.090, title :' 0.029'}, 
{from:27, to:36, value: 1.178, title :' 0.055'}, 
{from:27, to:49, value: 1.197, title :' 0.060'}, 
{from:28, to:30, value: 1.041, title :' 0.014'}, 
{from:28, to:36, value: 1.263, title :' 0.078'}, 
{from:28, to:43, value: 1.187, title :' 0.057'}, 
{from:29, to:39, value: 1.423, title :' 0.118'}, 
{from:29, to:42, value: 1.390, title :' 0.110'}, 
{from:29, to:48, value: 1.058, title :' 0.019'}, 
{from:30, to:32, value: 1.041, title :' 0.013'}, 
{from:30, to:36, value: 1.197, title :' 0.060'}, 
{from:30, to:43, value: 1.301, title :' 0.088'}, 
{from:30, to:49, value: 1.136, title :' 0.042'}, 
{from:31, to:35, value: 1.190, title :' 0.058'}, 
{from:31, to:53, value: 1.284, title :' 0.083'}, 
{from:31, to:57, value: 1.134, title :' 0.042'}, 
{from:32, to:43, value: 1.147, title :' 0.046'}, 
{from:32, to:45, value: 1.102, title :' 0.032'}, 
{from:33, to:34, value: 1.196, title :' 0.060'}, 
{from:33, to:38, value: 1.341, title :' 0.098'}, 
{from:34, to:46, value: 1.335, title :' 0.096'}, 
{from:35, to:47, value: 1.300, title :' 0.087'}, 
{from:35, to:55, value: 1.140, title :' 0.044'}, 
{from:35, to:60, value: 1.036, title :' 0.012'}, 
{from:37, to:38, value: 1.225, title :' 0.068'}, 
{from:37, to:40, value: 1.162, title :' 0.050'}, 
{from:38, to:46, value: 1.127, title :' 0.040'}, 
{from:38, to:60, value: 1.040, title :' 0.013'}, 
{from:39, to:42, value: 1.054, title :' 0.017'}, 
{from:39, to:52, value: 1.048, title :' 0.016'}, 
{from:40, to:46, value: 1.250, title :' 0.074'}, 
{from:41, to:45, value: 1.305, title :' 0.089'}, 
{from:41, to:49, value: 1.158, title :' 0.049'}, 
{from:43, to:50, value: 1.155, title :' 0.048'}, 
{from:44, to:51, value: 1.396, title :' 0.111'}, 
{from:44, to:52, value: 1.290, title :' 0.085'}, 
{from:45, to:50, value: 1.189, title :' 0.058'}, 
{from:47, to:58, value: 1.140, title :' 0.044'}, 
{from:48, to:51, value: 1.346, title :' 0.099'}, 
{from:48, to:52, value: 1.376, title :' 0.106'}, 
{from:49, to:50, value: 1.229, title :' 0.069'}, 
];
var seed244137_BSatlas62node = { nodes:nodes,edges:edges};