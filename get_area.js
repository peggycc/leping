function zip ($scope)
{
	$scope.Citys=
		[
			{
				name:"基隆市",
				areas:["仁愛區200", "信義區201", "中正區202", "中山區203", "安樂區204", "暖暖區205", "七堵區206"]
			},		
			{
				name:"台北市",
				areas:["中正區100", "大同區103", "中山區104", "松山區105", "大安區106", "萬華區108", "信義區110", "士林區111", "北投區112", "內湖區114", "南港區115", "文山區116"]
			},
			{
				name:"新北市",
				areas: ["萬里鄉207", "金山鄉208", "板橋市220", "汐止市221", "深坑鄉222", "石碇鄉223", "瑞芳鎮224", "平溪鄉226", "雙溪鄉227", "貢寮鄉228", "新店市231", "坪林鄉232", "烏來鄉233", "永和市234", "中和市235", "土城市236", "三峽鎮237", "樹林市238", "鶯歌鎮239", "三重市241", "新莊市242", "泰山鄉243", "林口鄉244", "蘆洲市247", "五股鄉248", "八里鄉249", "淡水鎮251", "三芝鄉252", "石門鄉253"]
			},
			{
				name:"桃園市",
				areas:["中壢區320", "平鎮區324", "龍潭區325", "楊梅區326", "新屋區327", "觀音區328", "桃園區330", "龜山區333", "八德區334", "大溪區335", "復興區336", "大園區337", "蘆竹區338"]
			},
			{
				name:"新竹市",
				areas:["東　區300", "北　區300", "香山區300"]
			},
			{
				name:"新竹縣",
				areas:["竹北市302", "湖口鄉303", "新豐鄉304", "關西鎮306", "芎林鄉307", "寶山鄉308", "五峰鄉311", "橫山鄉312", "尖石鄉313", "北埔鄉314", "峨眉鄉315"]
			},
			{
				name:"苗栗縣",
				areas:["竹南鎮350", "頭份鎮351", "三灣鄉352", "南庄鄉353", "獅潭鄉354", "後龍鎮356", "通霄鎮357", "苑裡鎮358", "苗栗市360", "造橋鄉361", "頭屋鄉362", "公館鄉363", "大湖鄉364", "泰安鄉365", "銅鑼鄉366", "三義鄉367", "西湖鄉368", "卓蘭鎮369"]
			},
			{
				name:"台中市",
				areas:["中　區400", "東　區401", "南　區402", "西　區403", "北　區404", "北屯區406", "西屯區407", "南屯區408", "大里區412", "霧峰區413", "烏日區414", "豐原區420", "后里區421", "石岡區422", "東勢區423", "和平區424", "新社區426", "潭子區427", "大雅區428", "神岡區429", "大肚區432", "沙鹿區433", "龍井區434", "梧棲區435", "清水區436", "大甲區437", "外埔區438", "大安區439"]
			},	
			{
				name:"彰化縣",
				areas:["彰化市500", "花壇鄉503", "秀水鄉504", "鹿港鎮505", "福興鄉506", "線西鄉507", "和美鎮508", "伸港鄉509", "員林鎮510", "社頭鄉511", "永靖鄉512", "埔心鄉513""溪湖鎮514", "大村鄉515", "埔鹽鄉516", "田中鎮520", "北斗鎮521", "埤頭鄉523", "溪州鄉524", "二林鎮526", "大城鄉527", "芳苑鄉528", "二水鄉530"]
			},	
			{
				name:"南投縣",
				areas:["南投市540", "中寮鄉541", "草屯鎮542", "埔里鎮545", "仁愛鄉546", "名間鄉551", "水里鄉553", "魚池鄉555", "信義鄉556", "竹山鎮557", "鹿谷鄉558"]
			},	
			{
				name:"雲林縣",
				areas:["斗南鎮630", "大埤鄉631", "土庫鎮633", "褒忠鄉634", "台西鄉636", "崙背鄉637", "麥寮鄉638", "林內鄉643", "莿桐鄉647", "西螺鎮648", "二崙鄉649", "北港鎮651", "水林鄉652", "口湖鄉653", "四湖鄉654", "元長鄉655"]
			},	
			{
				name:"嘉義市",
				areas:["東　區600", "西　區600"]
			},	
			{
				name:"嘉義縣",
				areas:["仁愛區200", "信義區201", "中正區202", "中山區203", "安樂區204", "暖暖區205", "七堵區206"]
			},	
			{
				name:"台南市",
				areas:["中西區 700", "東　區701", "南　區702", "北　區704", "安平區708", "安南區709", "永康區710", "歸仁區711", "新化區712", "左鎮區713", "玉井區714", "楠西區715", "南化區716", "仁德區717", "關廟區718", "龍崎區719", "官田區720", "麻豆區721", "佳里區722", "西港區723", "七股區724", "將軍區725", "學甲區726", "北門區727", "新營區730", "後壁區731", "白河區732", "東山區733", "六甲區734", "下營區735", "柳營區736", "鹽水區737", "善化區741", "大內區742", "山上區743", "新市區744", "安定區745"]
			},	
			{
				name:"高雄市",
				areas:["仁愛區200", "信義區201", "中正區202", "中山區203", "安樂區204", "暖暖區205", "七堵區206"]
			},	
			{
				name:"屏東縣",
				areas:["仁愛區200", "信義區201", "中正區202", "中山區203", "安樂區204", "暖暖區205", "七堵區206"]
			},	
			{
				name:"台東縣",
				areas:["仁愛區200", "信義區201", "中正區202", "中山區203", "安樂區204", "暖暖區205", "七堵區206"]
			},
			{
				name:"花蓮縣",
				areas:["仁愛區200", "信義區201", "中正區202", "中山區203", "安樂區204", "暖暖區205", "七堵區206"]
			},	
			{
				name:"宜蘭縣",
				areas:["仁愛區200", "信義區201", "中正區202", "中山區203", "安樂區204", "暖暖區205", "七堵區206"]
			},				
		];
	$scope.update = function (selectedValue) {
		$scope.level2 = selectedValue.areas;
	};
}