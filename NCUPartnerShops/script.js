function initMap() {
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 12,
        center: { lat: 24.968311, lng: 121.195333 } // 預設中心點
    });

    var locations = [
        { id: 'Cdiscount1',coords: { lat: 24.974205760220315,lng: 121.19337989402285 },title: '小木屋鬆餅｜中大店'},
        { id: 'Cdiscount2',coords: { lat: 24.96716507626938, lng: 121.1908416107259 },title: '路易莎咖啡｜中央大學門市'},
        { id: 'Cdiscount3',coords: { lat: 24.966284937071343, lng: 121.19464267725955 },title: '敦煌書局｜中央營業所'},
        { id: 'Cdiscount4',coords: { lat: 24.96837947902286, lng: 121.19529879538335 },title: '中大駐警隊｜校內停車優惠'},
        {  
            id: 'Cdiscount5',
            title: '全家便利商店',
            subLocations: [
            { lat: 24.965827210517087, lng: 121.19551462721861, title: '中壢中央一店' },
            { lat: 24.971017805385756, lng: 121.19584328200153, title: '中壢中央二店' },
            { lat: 24.967458067248756, lng: 121.19090801760765, title: '中壢中央三店' }]},
        
        { id: 'Cdiscount6',coords: { lat: 24.970045209561047,lng: 121.18985659180765 },title: '桃園市中大國民運動中心'},
        {
            id: 'restaurant1', 
            title: '藝奇日本料理',
            subLocations: [
                { lat: 25.042323527756302, lng: 121.51208886975535, title: '台北衡陽店' },
                { lat: 24.990718567741236, lng: 121.30854299538406, title: '桃園南華店' },
                { lat: 24.831163101857594, lng: 121.01309144140664, title: '竹北光明店' },
                { lat: 22.995828382872258, lng: 120.23367995601168, title: '台南南紡店' }
            ]
        },
        {
            id: 'restaurant2', 
            title: '享鴨',
            subLocations: [
                { lat: 25.08337123472803, lng: 121.29319317322877, title: '桃園同德店' },
                { lat: 25.034071706973933, lng: 121.52701191208229, title: '台北金山南店' },
                { lat: 25.041549986480675, lng: 121.54792562237186, title: '台北忠孝東店' }
            ]
        },
        { 
            id: 'restaurant3', 
            title: '涮乃葉' ,
            subLocations: [
                { lat: 25.037115574562485, lng: 121.56812486654995, title: '信義遠百店' },
                { lat: 23.079810705074472, lng: 120.24166082360118, title: '台南遠百成功店' }
            ]
        },
        { id: 'restaurant4', coords: { lat: 25.052124092335085, lng: 121.5479585399683 },title: '橫浜牛排 微風南京店' },
    	{ id: 'restaurant5', coords: { lat: 24.96184325386761, lng: 121.22662872740773 },title: '原燒 中壢元化店' },
        {
            id: 'restaurant6', 
            title: '柚子花花青春客家菜',
            subLocations: [
                { lat: 25.023061392372526, lng: 121.2960357287901, title: '桃園店' },
                { lat: 25.005499299074692, lng: 121.20263635838165, title: 'A19環球青埔店' },
                { lat: 24.83061323240136, lng: 121.03172300641192, title: '竹北享平方店' },
		        { lat: 25.05835694398406, lng: 121.5202360901603, title: '台北店' }
            ]
        },
	    {
            id: 'restaurant7', 
            title: '陶板屋',
            subLocations: [
                { lat: 24.964341288060027, lng: 121.22192276249923, title: '中壢中山店' },
                { lat: 24.96997841604051, lng: 121.29906187900747, title: '八德大和店' }
            ]
        },
	    {
            id: 'restaurant8', 
            title: '王品牛排',
            subLocations: [
                { lat: 25.025806252110055, lng: 121.30318071091851, title: '桃園同德店' },
                { lat: 25.071107801265327, lng: 121.5221557425648, title: '台北中山北店' },
                { lat: 24.83063092889069, lng: 121.01419090702255, title: '新竹光明店' },
		        { lat: 22.981603258109068, lng: 120.21101259627386, title: '台南健康店' }
		
            ]
        },
	    { id: 'restaurant9', coords: { lat: 25.041223010234816, lng: 121.1958237148014 },title: '尬鍋 中壢店' },
	    { id: 'restaurant10', coords: { lat: 25.007824230115236, lng: 121.30500704150174 },title: 'Tasty西堤牛排 桃園南華店'},
	    { id: 'restaurant11',coords: { lat: 25.03819989312054, lng:121.50771842237174 },title: '匡記涼麵'},
	    { id: 'restaurant12', coords: { lat: 24.968614317024272, lng: 121.20142044090241},title: '有竹居'},
	    { 
            id: 'restaurant13', 
            title: '天母盛鑫',
            subLocations: [
                { lat: 25.098463546852532, lng: 121.52697272422319, title: '中山店' },
                { lat: 25.085014667257646, lng: 121.55777492604872, title: '麗華店' }
            ]
        },
	    { id: 'restaurant14', coords: { lat: 22.988750506906246, lng: 120.17469853088215},title: '東東餐飲集團'},
	    {
            id: 'restaurant15', 
            title: '一番地',
            subLocations: [
                { lat: 25.031135091143582, lng: 121.51874119402282, title: '台北店' },
                { lat: 24.960306040136654, lng: 121.22095249538309, title: '中壢店' },
                { lat: 25.01765790460142, lng: 121.29750883009197, title: '桃園店' }
            ]
        },
        { id: 'restaurant16', coords: { lat: 24.99129801299116, lng: 121.31253219538411},title: '海底撈 桃園統領店'},
        { id: 'restaurant17', coords: { lat: 24.965264843201506, lng: 121.2168652161046},title: '七盞茶 中壢光明店'},
        { id: 'restaurant18', coords: { lat: 24.95785109575251, lng: 121.22198941006117},title: '鶴茶樓 中壢中山店'},
        { id: 'traffic1',coords: { lat: 25.057540056405674, lng: 121.53756816706775 },title: '中國東方航空'},
        { id: 'traffic2',coords: { lat: 24.968238626139875, lng: 121.19432434232908},title: '飛遊網 台灣航空'},
        { id: 'traffic3',coords: { lat: 25.05817927290209, lng: 121.54778479666119},title: '國泰航空'},
        { id: 'traffic4',coords: { lat: 25.00908808328985, lng: 121.31058853054088},title: '喜鴻(綜合)旅行社'},
        { id: 'traffic5', coords: { lat: 23.561319900000026, lng: 119.59439539634326},title: '愛之旅旅行社有限公司'},
        { id: 'products1',coords: { lat: 24.825877640590218, lng: 121.01570823159864 },title: 'homebox好博家'},
        { id: 'products2',coords: { lat: 25.01501792241476, lng: 121.2152170589606 },title: '萬國通路 桃園高鐵店'}, // 有超多分店但先建一個示意
        { id: 'products3',coords: { lat: 25.061831221171147, lng: 121.52547113379316 },title: '愛菲斯居家美學'},
        { id: 'products4',coords: { lat: 25.00791464680665, lng: 121.48383054911483 },title: '朵法亞生活美學'},
        { id: 'products5',coords: { lat: 24.963459559429634, lng: 121.23257706444043 },title: '台灣歐德家具股份有限公司'},
        { id: 'products6',coords: { lat: 25.02065581063814, lng: 121.21518044912008 },title: '新視代影音科技'},
        { id: 'leisure1',coords: { lat: 24.824838097737075,lng: 121.18347853369474 },title: '六福村主題遊樂園'},
        { id: 'leisure2',coords: { lat: 23.61623623345457, lng: 120.57611703871348 },title: '劍湖山世界'},
        { id: 'leisure3',coords: { lat: 24.983296799801774,lng: 121.2727262402594 },title: '享玩桌遊'},
        { id: 'leisure4',coords: { lat: 24.698770260703842,lng: 121.07109594898702 },title: '綠世界生態農場'},
        { id: 'dessert1', title: '肉桂捲製作所',
            subLocations: [
            { lat: 25.078554895652697, lng: 121.57798732472378, title: '內湖門市' },
            { lat: 25.058396706464997, lng: 121.51912441545265, title: '雙連門市' },
            { lat: 25.000327848568013, lng: 121.55664418465814, title: '萬芳門市' }]},
        { id: 'dessert2', title: '萬益食品',
            subLocations: [       
            { lat: 24.121839, lng: 120.671673, title: '總店' },
            { lat: 24.132217, lng: 120.643022, title: '南屯分店' }]},
        { id: 'dessert3', title: '伊莎貝爾',
            subLocations: [
            { lat: 25.078554, lng: 121.577987, title: '台北忠孝店' },
            { lat: 25.060148, lng: 121.520203, title: '台北中山店' },
            { lat: 25.009437, lng: 121.539837, title: '新北板橋店' },
            { lat: 25.065698, lng: 121.501854, title: '新北三重店' },
            { lat: 24.956766, lng: 121.225972, title: '桃園中山店' },
            { lat: 24.990792, lng: 121.311621, title: '中壢延平店' },
            { lat: 24.804636, lng: 120.965716, title: '新竹中正店' },
            { lat: 24.144380, lng: 120.681091, title: '台中三民店' },
            { lat: 24.082927, lng: 120.541147, title: '員林中正店' },
            { lat: 23.500486, lng: 120.446501, title: '嘉義中山店' },
            { lat: 22.994714, lng: 120.214462, title: '台南東寧店' },
            { lat: 22.624967, lng: 120.301636, title: '高雄中正店' },
            { lat: 22.666692, lng: 120.308954, title: '屏東民生店' }]},
        { id: 'hotel1',coords: { lat: 24.967793722947917, lng: 121.17863416654771 },title: '南方莊園渡假飯店'},
        { id: 'hotel2',coords: { lat: 24.155425045509528, lng: 120.66103721070026 },title: '伊麗莎白酒店'},
        { id: 'hotel3',coords: { lat: 24.67373326261112, lng: 121.77519178373043 },title: '村却國際溫泉酒店'},
        { id: 'hotel4',coords: { lat: 24.871339087579862, lng: 121.40668808585954 },title: '大板根森林溫泉渡假村'},
        { id: 'hotel5',coords: { lat: 22.730019982521416, lng: 120.40154078367131 },title: '義大皇家酒店'},
        { id: 'hotel6',coords: { lat: 22.997371873646532, lng: 120.21079399532279 },title: '台南大飯店'},
        { id: 'hotel7',coords: { lat: 25.018023242636975, lng: 121.21373595440714 },title: '和逸飯店 桃園館'},
        { id: 'hotel8',coords: { lat: 23.568036156951308, lng: 119.57587182602484 },title: '澎湖福朋喜來登酒店'},
        { id: 'law1',coords: { lat: 25.059626086719824, lng: 121.52058634294356 },title: '現代地政士事務所'},
        { id: 'law2',coords: { lat: 25.059269693865286, lng: 121.5171528554879 },title: '現代物業經濟股份有限公司'},
        { id: 'life1',title: '棉花田生機園地',
        subLocations: [
            { lat: 25.019234436896173, lng: 121.29696867566926, title: '桃園中正門市' },
            { lat: 24.996280770271103, lng: 121.31428236349853, title: '桃園中山門市' },
            { lat: 25.01782738363917, lng: 121.3111385194467, title: '桃園大業門市' },
            { lat: 25.04424830755826, lng: 121.29196280864635, title: '桃園南崁門市' },
            { lat: 24.96369825710761, lng: 121.30094235425476, title: '桃園八德門市' },
            { lat: 24.96677941597761, lng: 121.26112875635306, title: '中壢環東門市' },
            { lat: 24.829790940385408, lng: 121.01001831380508, title: '竹北縣政門市' },
            { lat: 24.814054860926646, lng: 121.02666946651469, title: '竹北文興門市' },
            { lat: 24.80984784762954, lng: 120.97354027152564, title: '新竹中央門市' },
            { lat: 24.785945262441672, lng: 121.0187646804958, title: '新竹關新門市' }]},
        { id: 'learn1',coords: { lat: 25.049995116725825, lng: 121.53277769363454 },title: '黑嘉嘉圍棋教室'},
        { id: 'learn2',coords: { lat: 25.01137296652365, lng: 121.29866213770896 },title: '台灣麥克圖書'},
    ]

    var markers = {};
    var infoWindows = {};
    var openInfoWindows = [];

    locations.forEach(function (location) {
        if (location.subLocations) {
            markers[location.id] = [];
            infoWindows[location.id] = [];
            location.subLocations.forEach(function (subLocation) {
                var marker = new google.maps.Marker({
                    position: subLocation,
                    map: map,
                    title: location.title + ' ' + subLocation.title,
                    visible: false
                });

                var infoWindow = new google.maps.InfoWindow({
                    content: location.title + ' ' + subLocation.title
                });

                marker.addListener('click', function () {
                    closeAllInfoWindows();
                    infoWindow.open(map, marker);
                    openInfoWindows.push(infoWindow);
                });

                markers[location.id].push(marker);
                infoWindows[location.id].push(infoWindow);
            });
        } else {
            var marker = new google.maps.Marker({
                position: location.coords,
                map: map,
                title: location.title,
                visible: false
            });

            var infoWindow = new google.maps.InfoWindow({
                content: location.title
            });

            marker.addListener('click', function () {
                closeAllInfoWindows();
                infoWindow.open(map, marker);
                openInfoWindows.push(infoWindow);
            });

            markers[location.id] = [marker];
            infoWindows[location.id] = [infoWindow];
        }

        // Listen for clicks on the menu items
        document.getElementById(location.id).addEventListener('click', function () {
            showMarkers(location.id);
            updateInfoContainer(location.id);
        });
    });

    function showMarkers(locationId) {
        closeAllInfoWindows();

        // 隱藏所有標記
        for (var key in markers) {
            markers[key].forEach(function (marker) {
                marker.setVisible(false);
            });
        }

        // 顯示選中地標的標記並打開對應的信息窗口
        var bounds = new google.maps.LatLngBounds();
        markers[locationId].forEach(function (marker, index) {
            marker.setVisible(true);
            infoWindows[locationId][index].open(map, marker);
            openInfoWindows.push(infoWindows[locationId][index]);
            bounds.extend(marker.getPosition());
        });
        map.fitBounds(bounds);
    }

    function closeAllInfoWindows() {
        while (openInfoWindows.length) {
            openInfoWindows.pop().close();
        }
    }

    showAllMarkers();

    function showAllMarkers() {
    var bounds = new google.maps.LatLngBounds();
    Object.keys(markers).forEach(function(key) {
        markers[key].forEach(function(marker) {
            marker.setVisible(true);
            bounds.extend(marker.getPosition());
        });
    });
    map.fitBounds(bounds); // Adjusts the viewport to include all markers
}
}


function smoothPanAndZoom(map, destination, zoomLevel) {
    let start = Date.now();
    let duration = 1000; // Duration in milliseconds
    let startLatLng = map.getCenter();
    let endLatLng = destination;
    let deltaLat = (endLatLng.lat() - startLatLng.lat()) / duration;
    let deltaLng = (endLatLng.lng() - startLatLng.lng()) / duration;
    let startZoom = map.getZoom();
    let deltaZoom = (zoomLevel - startZoom) / duration;
    let interval = setInterval(function () {
        let now = Date.now() - start;
        if (now >= duration) {
            map.panTo(endLatLng);
            map.setZoom(zoomLevel);
            clearInterval(interval);
        } else {
            map.panTo({
                lat: startLatLng.lat() + deltaLat * now,
                lng: startLatLng.lng() + deltaLng * now
            });
            map.setZoom(Math.round(startZoom + deltaZoom * now));
        } ``
    }, 1); // Adjust the time interval for smooth animation
}

function updateInfoContainer(locationId) {
    const infoContainer = document.getElementById('info-container');
    let content = '';

    if (locationId === 'restaurant1') {
        content = `
        <h1>藝奇日本料理</h1>
        <p>* 台北衡陽店：台北市中正區衡陽路52號。(近博愛路)。02-23310200</p>
        <p>* 桃園南華：桃園市桃園區南華街60號(南華街‧中華路口)。03-3398680</p>
        <p>* 竹北光明：新竹縣竹北市光明一路368號(近文祿街口)。035-589622</p>
        <p>* 台南南紡店：台南市東區中華東路一段358號 3樓(南紡購物中心A2館)。</p>
        <p>優惠內容：憑校友證消費套餐，即可享有主廚私房菜一份(優惠內容視各分店提供內容為主)。</p>
        <p>優惠期限：依各分店為準，使用優惠前請電洽藝奇日本料理確認。</p>
        <p>網站連結：<a href="https://www.ikki.com.tw/store_view.php?store=7" target="_blank">按此前往</a></p>
      `;
    } else if (locationId === 'restaurant2') {
        content = `
        <h1>享鴨</h1>
        <p>* 桃園同德店：桃園市桃園區同德五街73號10樓(中茂新天地)。03-3568805</p>
        <p>* 台北金山南店：台北市大安區金山南路二段2號2樓。02-23223789</p>
        <p>* 台北忠孝東店：台北市大安區忠孝東路四段128號2樓。02-27118823</p>
        <p>優惠內容：憑校友證至店內消費，即招待芝麻流沙湯圓一份。</p>
        <p>優惠期限：依各分店為準，使用優惠前請電洽享鴨確認。</p>
        <p>網站連結：<a href="https://www.xiangduck.com.tw/" target="_blank">按此前往</a></p>
      `;
    } else if (locationId === 'restaurant3') {
        content = `
        <h1>涮乃葉</h1>
        <p>*信義遠百店：台北市信義區松仁路58號7樓。02-27230698</p>
        <p>*台南遠百成功店：台南市東區前鋒路210號4樓。06-2091292</p>
        <p>優惠內容：憑校友證，店內用餐享 9.5折優惠。</p>
        <p>優惠期限 : 依各分店為準，使用優惠前請電洽涮乃葉(信義遠百店、台南遠百成功店)確認。</p>
        <p>網站連結：<a href="https://syabuyo.com.tw/" target="_blank">按此前往</a></p>
      `;
    } else if (locationId === 'restaurant4') {
        content = `
        <h1>橫浜牛排</h1>
        <p>* 微風南京店：台北市南京東路三段337號3樓。02-87125575</p>
        <p>優惠內容：憑校友證用餐，全時段95折。</p>
        <p>優惠期限：依各分店為準，使用優惠前請電洽橫浜牛排(微風南京店)確認。</p>
        <p>網站連結：<a href="https://inline.app/booking/-LmryXQ4hVtyifXQLKkD%3Ainline-live-1/-LmryXU-OKIeX6tvoKJL?language=zh-tw" target="_blank">按此前往</a></p>
      `;
    } else if (locationId === 'restaurant5') {
        content = `
        <h1>原燒</h1>
        <p>* 中壢元化店：桃園市中壢區元化路245號2樓。03-4526458</p>
        <p>優惠內容：憑校友證至原燒中壢元化店內消費套餐，贈送「去骨雞腿」乙份。</p>
        <p>優惠期限：依各分店為準，使用優惠前請電洽原燒（中壢元化店）確認。</p>
        <p>網站連結：<a href="https://www.yakiyan.com/" target="_blank">按此前往</a></p>
      `;
    } else if (locationId === 'restaurant6') {
        content = `
        <h1>柚子花花青春客家菜</h1>
        <p>* 桃園店：桃園市桃園區中正路1270號。03-317-2666</p>
        <p>* A19環球青埔店：桃園市中壢區高鐵南路二段352號5F。03-2871931</p>
        <p>* 竹北享平方店：新竹縣竹北市自強南路36號2樓。03-6685591</p>
        <p>* 台北店：台北市中山區中山北路二段48巷7號B1。02-25218601</p>
        <p>優惠內容：憑校友證至店內消費享菜色九折優惠。凡預約商務合菜消費即享菜色九折優惠。</p>
        <p>優惠期限：依各分店為準，使用優惠前請電洽柚子花花青春客家菜(桃園店、A19環球青埔店、竹北享平方店、台北店)確認。</p>
        <p>網站連結：<a href="https://www.facebook.com/HakkaHappyFlower/?locale=zh_TW" target="_blank">按此前往</a></p>
      `;
    } else if (locationId === 'restaurant7') {
        content = `
        <h1>陶板屋</h1>
        <p>* 中壢中山店：桃園市中壢區中山路111號2樓。03-2807070</p>
        <p>* 八德大和店：桃園市八德區金和路27號2樓。03-2182928</p>
        <p>優惠內容：持校友證、員工證至餐廳消費，即贈送主廚私房菜一份。</p>
        <p>優惠期限：依各分店為準，使用優惠前請電洽陶板屋(中壢中山店、八德大和店)確認。</p>
        <p>網站連結：<a href="https://www.tokiya.com.tw/" target="_blank">按此前往</a></p>
      `;
    } else if (locationId === 'restaurant8') {
        content = `
        <h1>王品牛排</h1>
        <p>* 桃園同德店：桃園市桃園區同德五街69號3F。03-3561887</p>
        <p>* 台北中山北店：台北市中山區中山北路二段33號2F。02-25361350</p>
        <p>* 新竹光明店：新竹縣竹北市光明一路181號。03-5588669</p>
        <p>* 台南健康店：台南市中西區健康路一段24號。06-2137966</p>
        <p>優惠內容：憑校友證至店內消費套餐，贈送「主廚私房菜」乙份。</p>
        <p>優惠期限：依各分店為準，使用優惠前請電洽王品牛排(桃園同德店、台北中山北店、新竹光明店、台南健康店)確認。</p>
        <p>網站連結：<a href="https://www.wangsteak.com.tw/" target="_blank">按此前往</a></p>
      `;
    } else if (locationId === 'restaurant9') {
        content = `
        <h1>尬鍋</h1>
        <p>* 中壢店：桃園市中壢區元化路327號1樓。03-4220036</p>
        <p>優惠內容：憑校友證至店內消費享好禮五選一（雪花牛肉、梅花豬肉、真香無骨鹽酥雞、鮮切雕魚、蛤蜊）。</p>
        <p>優惠期限：依各分店為準，使用優惠前請電洽尬鍋(中壢店)確認。</p>
        <p>網站連結：<a href="https://www.godguo.com.tw/" target="_blank">按此前往</a></p>
      `;
    } else if (locationId === 'restaurant10') {
        content = `
        <h1>Tasty 西堤牛排</h1>
        <p>* 桃園南華店：桃園市桃園區南華街66號。03-3395896</p>
        <p>優惠內容：憑校友證消費套餐，每桌每人贈送「無酒精香檳氣泡飲」乙份。</p>
        <p>優惠期限：依各分店為準，使用優惠前請電洽Tasty 西堤牛排-桃園南華店確認。</p>
        <p>網站連結：<a href="https://www.tasty.com.tw/" target="_blank">按此前往</a></p>
      `;
    } else if (locationId === 'restaurant11') {
        content = `
        <h1>匡記涼麵</h1>
        <p>地址：台北市信義區吳興街8巷3號。02-27324719</p>
        <p>優惠內容：憑校友證消費9折優惠。</p>
        <p>優惠期限：無限制，使用優惠前請電洽匡記涼麵確認。</p>
        <p>網站連結：<a href="https://www.facebook.com/kuangjinoodle/?locale=zh_TW" target="_blank">按此前往</a></p>
      `;
    } else if (locationId === 'restaurant12') {
        content = `
        <h1>友竹居</h1>
        <p>地址：桃園縣中壢市中大路32號。03-4271116</p>
        <p>優惠內容：憑教職員證用餐以現金消費一律9折。</p>
        <p>優惠期限：無限制 ，使用優惠前請電洽友竹居確認。</p>
        <p>網站連結：<a href="https://www.facebook.com/people/%E5%8F%8B%E7%AB%B9%E5%B1%85%E8%8C%B6%E8%97%9D%E9%A4%A8/100064085109802/" target="_blank">按此前往</a></p>
      `;
    } else if (locationId === 'restaurant13') {
        content = `
        <h1>天母盛鑫</h1>
        <p>* 中山店：台北市士林區中山北路五段729號。02-28363588</p>
        <p>* 麗華店：台北市敬業三路22號5樓。02-21753816</p>
        <p>優惠內容：憑校友證消費免加一成服務費。</p>
        <p>優惠期限：無期限，使用優惠前請電洽天母盛鑫(中山店、麗華店)確認。</p>
        <p>網站連結：<a href="https://www.gilleys.com.tw/" target="_blank">前往連結</a></p>
      `;
    } else if (locationId === 'restaurant14') {
        content = `
        <h1>東東餐飲集團</h1>
        <p>地址：台南市安平區華平路152號。06-2951000</p>
        <p>優惠內容：憑校友證至旗下分店消費享消費金額九折優惠。</p>
        <p>優惠期限：依各分店為準，使用優惠前請電洽東東餐飲集團確認。</p>
        <p>網站連結：<a href="http://www.dondom.com.tw/career.php" target="_blank">前往連結</a></p>
      `;
    } else if (locationId === 'restaurant15') {
        content = `
        <h1>一番地</h1>
        <p>* 台北店：台北市中正區和平西路一段80號。02-2368-6600</p>
        <p>* 中壢店：桃園市中壢區中美路二段130號。03-4252588</p>
        <p>* 桃園店：桃園市桃園區大興西路二段86號。03-3019500</p>
        <p>優惠內容：憑校友證消費95折優惠。</p>
        <p>優惠期限：無限期，使用優惠前請電洽一番地(台北店、中壢店、桃園店)確認。</p>
        <p>網站連結：<a href="https://www.sukiyakino1.com.tw/home.html" target="_blank">前往連結</a></p>
      `;
    } else if (locationId === 'restaurant16') {
        content = `
        <h1>海底撈</h1>
        <p>*桃園統領店：桃園市桃園區中正路61號8樓。03-3321608</p>
        <p>優惠內容: 結帳時出示學生證</p>
        <p>（1） 平日（即非假日、星期六及星期日），結帳享全店菜品88折優惠價；</p>
        <p>假日，結帳享全店菜品95折優惠價 (以上均不含鍋底/酒水/醬料等)。</p>
        <p>（2） 不定期推出獨家限定款商品組合優惠價/優惠卷等，所有優惠不得同時使用 。</p>
        <p>優惠期限: 使用優惠前請電洽 海底撈(桃園統領店)確認</p>
        <p>網站連結：<a href="https://inline.app/booking/-LamXb5SAQN7JcJfyRKi:inline-live-2a466/-LcTecEoGkZm2Acfd96G?language=zh-tw" target="_blank">前往連結</a></p>
      `;
    } else if (locationId === 'restaurant17') {
        content = `
        <h1>七盞茶</h1>
        <p>*中壢光明店：桃園市中壢區三光路409號。03-2812355</p>
        <p>優惠內容:憑學生證可享以下優惠</p>
        <p>1.來店消費享95折優惠</p>
        <p>2.外送滿300，享9折優惠</p>
        <p>優惠期限: 使用優惠前請電洽 七盞茶(中壢光明店)確認</p>
        <p>網站連結：<a href="https://www.taiwan7tea.com.tw/" target="_blank">前往連結</a></p>
      `;
    } else if (locationId === 'restaurant18') {
        content = `
        <h1>鶴茶樓</h1>
        <p>*中壢中山店：桃園市中壢區大同路130號1樓。03-4228900</p>
        <p>優惠內容:憑學生證可享以下優惠</p>
        <p>1.來店或電話自取享9折優惠(可與環保杯、買五送一併用)</p>
        <p>2.外送滿500元享9折，300元享95折</p>
        <p>優惠期限: 使用優惠前請電洽 鶴茶樓(中壢中山店)確認</p>
        <p>網站連結：<a href="https://hechaloutea.com.tw/" target="_blank">前往連結</a></p>
      `;
    } else if (locationId === 'traffic1') {
        content = `
        <h1>中國東方航空</h1>
        <p>* 台北市民生東路三段2號6樓A室。03-4128118。</p>
        <p>優惠內容：
            1.提供在校生/校友/教職員於中國東方航空台灣官網上註冊成為『東方萬里行會員』，並登入會員購買由中國東方航空/上海航空實際承運由台灣始發直航大陸航點或經大陸中轉至大陸地區航線、日本、韓國、歐洲、北美、紐澳、東南亞和南亞中東航線之指定艙等，享有單程或來回機票價格優惠。
            2.促銷代碼：購票流程時使用，如未於付款前進行驗證使用，則無法事後主張享有其優惠。促優惠折扣僅限機票價格。機場稅、燃油附加費用及其他雜項費用不列入折扣範圍。</p>
        <p>優惠內容說明：(1)【購票日期】
            自2024年05月01日起至2025年04月30日止
            (2)【旅行日期】
            2024年05月01日起至2024年09月27日止
            2024年10月08日起至2024年12月31日止
            2025年01月01日起至2025年01月25日止
            2025年02月12日起至2054年04月30日止
            實際訂位均以東航台灣官方網站系統提供為準。
            (3)本優惠專案限使用指定促銷代碼(詳如附件說明)於中國東方航空台灣官網且登入會員後購票適用。</p>
        <p>優惠期限： 2024.05.01-2025.04.30 ，使用優惠前請電洽 中國東方航空確認</p>
        <p>網站連結：<a href="https://tw.ceair.com/hk/" target="_blank">按此前往</a></p>
        `;
    } else if (locationId === 'traffic2') {
        content = `
        <h1>飛遊網 台灣航空</h1>
        <p>* 桃園市中壢區中大路300號(產學中心2樓R226室)。0930138177。</p>
        <p>優惠內容：
            1. 護照(14歲以上) 售價$1800,教職員生優惠$1700
            (未滿14歲) 售價$1400,教職員生優惠$1350
            2. 台胞證 售價$1800,教職員生優惠$1700
            3.口譯機 售價$60/天，教職員生$55/天(租五天起)
            4.上網卡 蝦皮價格，教職員生折$15/張</p>
        <p>優惠期限： 2023年01月02日起至 2024年12月31日 ，使用優惠前請電洽 飛遊網 台灣航空福利社確認</p>
        <p>網站連結：<a href="https://www.plynet.com.tw/" target="_blank">按此前往</a></p>
        `;
    } else if (locationId === 'traffic3') {
        content = `
        <h1>國泰航空</h1>
        <p>* 台北:台北市民生東路三段129號12樓環球商業大樓。02-27152333。</p>
        <p>* 台中:台中市民權路239號8樓A1室</p>
        <p>* 高雄:高雄市中華三路21號6樓</p>
        <p>優惠內容：僅提供學生留學機票網上專屬優惠</p>
        <p>優惠期限 : 2018.04.20-無期限 ，使用優惠前請電洽 國泰航空確認</p>
        <p>網站連結：<a href="https://www.cathaypacific.com/cx/zh_TW.html" target="_blank">按此前往</a></p>
        `;
    } else if (locationId === 'traffic4') {
        content = `
        <h1>喜鴻(綜合)旅行社</h1>
        <p>* 桃園市經國路9號11樓之2。03-3167121。</p>
        <p>優惠內容：憑校友證
            1.購買喜鴻網頁之旅遊商品,必須透過網路交易機制,刷卡消費可享特約銀行信用卡分期0利率(3期)。
            2.會員透過網路報名國外團體旅遊可享比一般價便宜新台幣1200元、國外自由行比一般價便宜1000元,國內團體旅遊比一般價便宜新台幣300元之優惠,惟國際機票、國內外定房及量身訂做、促銷及特惠團體，不適用上述優惠範圍。
            3.憑企業帳號45002931及密碼4227151即可享優惠</p>
        <p>優惠期限：2017.04.19-永久 ，使用優惠前請電洽 喜鴻(綜合)旅行社確認。</p>
        <p>網站連結：<a>href="https://www.besttour.com.tw/e_web/?utm_source=google&utm_medium=cpc&utm_campaign=21163175911&utm_term=%E5%96%9C%E9%B4%BB%20%E6%97%85%E8%A1%8C%E7%A4%BE&utm_content=695684372371&fc=mk&gad_source=1&gclid=Cj0KCQjwjLGyBhCYARIsAPqTz1-yRvvT3PLomZu2LqHuGpMHyqQ5H9B8_A3VO8ptAJSr2y1RAPFPQ6UaAmClEALw_wcB"target="_blank">按此前往</a></p>
        `;
    } else if (locationId === 'traffic5') {
        content = `
        <h1>愛之旅旅行社有限公司</h1>
        <p>* 2017.04.19-永久 ，使用優惠前請電洽 喜鴻(綜合)旅行社確認</p>
        <p>優惠內容：
            1.親持中央大學學生證、校友證參加自由行行程或散客湊團,確定成行並完款後,即享有優惠金額200元/人
            2.凡改住6-8人房,即可再享有優惠金額200元/人
            3.總人數滿11人以上(確定成行並完款後),以11人為一單位提供天然珍珠項鍊禮盒給予摸彩
            4.總人數滿33人以上(確定成行並完款後)，另有優惠(須親自洽詢)</p>
        <p>優惠期限：2015.12.01-無期限 ，使用優惠前請電洽 愛之旅</p>
        <p>網站連結：<a href="https://www.go-penghu.com/" target="_blank">按此前往</a></p>
        `;
    } else if (locationId === 'products1') {
        content = `
        <h1>Homebox好博家</h1>
        <p>*新竹縣竹北市縣政二路186號。0800-285-885</p>
        <p>優惠內容：1.全國實體門市購物享95折優惠
            5/23(四)~5/27(一)特約9折◆SUMMER樂一夏！特約企業9折優惠活動即將開跑！
            注意事項：
            A. 不適用冷氣、家電、施工費、廚具櫥櫃、系統家具、特訂窗簾布、磁磚、鐡件商品、TOTO合購套組、衛生紙巾類、出清品等。
            B. 不適用以員工卡、VIP濾芯卡、9折炫涼卡及交易折價券、現折券、其他優惠卡(券)等結帳。
            C. 恕無法享有會員紅利點數。
            D. 不得與其他優惠併用(例：滿千送百、滿萬送千、合購價、現折優惠、買X送Y、安裝優惠、同類商品買第X件享Y折、加購價、免頭期款優惠、滿額贈優惠等)。
        </p>
        <p>優惠期限：即日起-2024.12.31 ，使用優惠前請電洽Homebox好博家確認。</p>
        <p>網站連結：<a href="https://www.homeboxshop.com.tw/" target="_blank">按此前往</a></p>
      `;
    } else if (locationId === 'products2') {
        content = `
        <h1>萬國通路股份有限公司</h1>
        <p>優惠內容：憑校友證
            1.商品9折優惠價
            2.不定期提出獨家限定款商品組合優惠價
        </p>
        <p>優惠期限： 2022.01.01-2024.12.31 ，使用優惠前請電洽 萬國通路股份有限公司確認。</p>
        <p>網站連結：<a href="https://tw.eminent.com/" target="_blank">按此前往</a></p>
      `;
    } else if (locationId === 'products3') {
        content = `
        <h1>愛菲斯居家美學</h1>
        <p>*新北市中和區板南路663號14樓。02-2778-0037。</p>
        <p>優惠內容：可憑校友證，即享有相關特價優惠。
            優惠對象：教職員工、校友、學生
            於朵法亞生活美學官網：
            https://www.darphia.com/
            使用優惠代碼：SVIP2401
            ※全館85折，不與館內其他優惠共用。
            合約期間：自中華民國 113 年 02 月 01 日起至 114 年 02 月 01 日止。
            若雙方無不續約之意思表示，為節省行政作業，可於合約到期日之前，經雙方email聯繫同意續約後，即按本合約書之原條件，自動續約一期；如優惠內容有變更，可以附件形式提供。
        </p>
        <p>優惠期限 : 2023.02.01-2024.02.01 ，使用優惠前請電洽 朵法亞生活美學確認。</p>
        <p>網站連結：<a href="https://www.elvishome.com/" target="_blank">按此前往</a></p>
      `;
    } else if (locationId === 'products4') {
        content = `
        <h1>朵法亞生活美學</h1>
        <p>* 新北市中和區板南路663號14樓。02-2778-0037。</p>
        <p>優惠內容：可憑校友證，即享有相關特價優惠。</p>
        <p>優惠對象：教職員工、校友、學生</p>
            於朵法亞生活美學官網：https://www.darphia.com/ 使用優惠代碼：SVIP2401
            ※全館85折，不與館內其他優惠共用。
            合約期間：自中華民國 113 年 02 月 01 日起至 114 年 02 月 01 日止。
            若雙方無不續約之意思表示，為節省行政作業，可於合約到期日之前，經雙方email聯繫同意續約後，即按本合約書之原條件，自動續約一期；如優惠內容有變更，可以附件形式提供。
        </p>
        <p>優惠期限： 2023.02.01-2024.02.01 ，使用優惠前請電洽 朵法亞生活美學確認</p>
        <p>網站連結：<a href="http://www.darphia.com/" target="_blank">按此前往</a></p>
      `;
    } else if (locationId === 'products5') {
        content = `
        <h1>台灣歐德家具股份有限公司</h1>
        <p>*桃園縣中壢市延平路47號。03-4535778。</p>
        <p>優惠內容：1.原有折扣，再享95折。2.來店即贈來店禮。3.不定期促銷活動。4.免費3D圖面設計規劃</p>
        <p>優惠期限：2013.10.04-無期限 ，使用優惠前請電洽 台灣歐德家具股份有限公司確認。</p>
        <p>網站連結：<a href="https://www.order.com.tw/" target="_blank">按此前往</a></p>
      `;
    } else if (locationId === 'products6') {
        content = `
        <h1>新視代影音科技</h1>
        <p>*桃園市大園區領航北路四段12號。03-3811373。</p>
        <p>優惠內容：憑校友證消費 1.享全館市售價九折及每月特惠商品低價回饋。2. Lgy全系列商品十二期零利率</p>
        <p>優惠期限： 2014.01.01-無期限 ，使用優惠前請電洽 新視代影音科技確認。</p>
        <p>網站連結：<a href="http://www.neo-force.com.tw/" target="_blank">按此前往</a></p>
      `;
    }
    else if (locationId === 'leisure1') {
        content = `
        <h1>六福村主題遊樂園</h1>
        <p>"*新竹縣關西鎮仁安里拱子溝60號。03-5475665</p>
        <p>*優惠內容:</p>
        <p>憑校友證可享:</p>
        <p>六福村3月起至12月，每月12號前憑證件可享$550購票優惠，購票時再請出示""優惠內容下載""的檔案提醒售票人員</p>
        <p>*優惠期限 : 2023/03/31~2023/12/31 ，使用優惠前請電洽 六福村主題遊樂園確認</p>
        <p>網站連結：<a href="https://in.ncu.edu.tw/alumni/web/doc/20230308153101_att.pdf" target="_blank">按此前往</a></p>
      `;
    }  else if (locationId === 'leisure2') {
        content = `
        <h1>劍湖山世界</h1>
        <p>*雲林古坑鄉永光村大湖口67號。05-5825789</p>
        <p>*優惠內容:憑校友證享以下優惠:</p>
        <p>1.至劍湖山主題樂園購票享650元(原價899元)優惠價</p>
        <p>2.每證當日限購四張，不得與其他優惠活動並用</p>
        <p>3.不適用於農曆春節假期(農曆初一至初五)</p>
        <p>4.優惠期間內如有調整門票價格，以現場公告為主，恕不另行通知</p>
        <p>*優惠期限 : 2019.01.01-2023.12.30，使用優惠前請電洽 劍湖山世界確認</p>
        <p>網站連結：<a href="https://janfusun.com.tw/fancyworld.php" target="_blank">按此前往</a></p>
      `;
    } else if (locationId === 'leisure3') {
        content = `
        <h1>享玩桌遊</h1> 
        <p>*桃園市桃園區大慶街356號裕和街17巷88。03-370-0260</p>
        <p>*優惠內容:</p>
        <p>憑校友證至店內消費，可享優惠:</p>
        <p>1.生日當天壽星遊玩免費。(以身分證資料為準)</p>
        <p>2.社團(各系學會、班級)4人以上訂位，(平日)包日100元/人、(假日)包日150元/人。</p>
        <p>※各項優惠不可合併使用。且須主動出示有效證件。</p>
        <p>※活動優惠範圍為店內桌遊遊玩、販售，不包含桌遊外租、集換式卡牌及其周邊商品。</p>
        <p>*優惠期限 : 2020.08.01-2024.12.31 ，使用優惠前請電洽 享玩桌遊確認"</p>
        <p>網站連結：<a href="https://www.have-fun.com.tw/" target="_blank">按此前往</a></p>
      `;
    } else if (locationId === 'leisure4') {
        content = `
        <h1>綠世界生態農場</h1>
        <p>*新竹縣北埔鄉大湖村7鄰20號。03-5801000。<br> 
        *優惠內容:<br>
        憑校友證可享:<br>
        1. 本人及其親友，限購五張優待半票。(最新半票之價格請參考綠世界官網)<br>
        2. 至園區各商店消費，部分商品享9折優惠<br>
        3. 特約廠商員工本人於生日當天入園，憑識別證和身分證件(身分證、駕照，需有照片能辨識為本人之證件)，可享免費入園優惠及贈送精美小禮物。<br>
        (此優惠僅限特廠員工本人適用，且僅限生日當天入園，方享有此優惠。)<br>
        *優惠期限 : 即日起~2024.12.31 ，使用優惠前請電洽 綠世界生態農場確認"</p>
        <p>網站連結：<a href="https://www.green-world.com.tw/" target="_blank">按此前往</a></p>
      `;
    } else if (locationId === 'dessert1') {
        content = `
        <h1>肉桂捲製作所</h1>
        <p>*內湖門市：台北市內湖區內湖路一段600巷8號1樓。<br>電話：02-22505431。</p>
        <p>*雙連門市：台北市大同區雙連街19號1樓。<br>電話：02-25575005。</p>
        <p>*萬芳門市：台北市文山區興隆路三段79巷1號。</p>
        <p>優惠內容：<br>
        憑「國立中央大學校友證」消費可享<br>
        1. 享肉桂捲製作所全店”正價餐點9折優惠”<br>
        2. 僅限台北地區：當日滿20顆即享免費外送服務（需至少提前一日提出訂單需求）<br>
        3. 其他縣市若需訂購可使用官網訂購，冷凍宅配同樣享有”9折優惠”</p>
        <p>優惠期限 : 2024.2.5- 無終止日期 ，使用優惠前請電洽 肉桂捲製作所確認</p>
    　`;
    } else if (locationId === 'dessert2') {
        content = `
        <h1>萬益食品</h1>
        <p>*地址 : 各店資訊請上網萬益食品查詢</p>
        <p>優惠內容：<br>
        1.全體員工購買乙方肉品、豆干類產品，得享有9折之優惠（特價品除外），但不得與其他促銷方式併用而重複享有折扣。<br>
        2.單次消費滿2000元(含稅)，可享以個人資格申請VIP貴賓卡。</p>
        <p>優惠期限 : 2014.01.08-無期限 ，使用優惠前請電洽 萬益食品確認</p>
    `;
    } else if (locationId === 'dessert3') {
        content = `
        <h1>伊莎貝爾</h1>
        <p>*地址 : 各店資訊請上網萬益食品查詢</p>
        <p>優惠內容：憑校友證消費，可享<br>
        1. 至全省直營門市消費，常溫類蛋糕、常溫類彌月、伴手禮享有85折優惠。<br>
        2. 訂購伊莎貝爾及皇樓喜餅可再享有多2%點數兌換之優惠。(上述優惠不得與其他折扣及優惠方案合併共同使用)<br>
        *結帳前應主動出示證件(含校友證、教職員證)，或相關證件(有國立中央大學字樣)</p>
        <p>優惠期限 : 2016.01.11-2029.12.31 ，使用優惠前請電洽 伊莎貝爾確認</p>
        <p>網站連結：<a href="https://www.isabelle.com.tw/" target="_blank">按此前往</a></p>
      `;
    } else if (locationId === 'Cdiscount1') {
        content = `
        <h1>小木屋鬆餅｜中大店</h1>
        <p>地址 : 桃園市中壢區中大路300號<br>
        連絡電話 : 03-4265215<br>
        優惠內容:出示有效校友證可享9折優惠！<br>
        網站連結：<a href="https://www.shinemood2006.com/" target="_blank">按此前往</a></p>
      `;
    } else if (locationId === 'Cdiscount2') {
        content = `
        <h1>路易莎咖啡｜中央大學門市</h1>
        <p>地址 : 桃園市中壢區中大路300號（中大松苑餐廳）<br>
        連絡電話 : 03-4904613<br>
        優惠內容:出示有效校友證可享9折優惠！<br>
        網站連結：<a href="https://www.louisacoffee.co/" target="_blank">按此前往</a></p>
      `;
    } else if (locationId === 'Cdiscount3') {
        content = `
        <h1>敦煌書局｜中央營業所</h1>
        <p>地址：桃園市中壢區中大路300號<br>
        連絡電話 : 03-4201339<br>
        優惠內容：憑校友證可享以下優惠<br>
        1.中文書籍、文具 、原文小說、讀本及考試專用書-9折之優惠<br>
        2.語言教材、特價/橘標商品及文藝購票恕不適用3.提供國外圖書商品客訂服務，並享有上述相同折扣(運費除外)<br>
        網站連結：<a href="https://www.cavesbooks.com.tw/" target="_blank">按此前往</a></p>
      `;
    } else if (locationId === 'Cdiscount4') {
        content = `
        <h1>中大駐警隊｜校內停車優惠</h1>
        <p>地址：桃園市中壢區中大路300號<br>
        連絡電話：(03) 4227151；或03-4267144、校內分機57119(駐警隊)<br>
        優惠內容：依國立中央大學校區車輛管理實施要點-107.1.1起實施<br>
        
        <br>12月起開始~ 校友停車優惠~<br>
        一、車輛入校：請以「車牌辨識」方式 入校，校友須主動出示「校友證」，向崗哨人 員領取停車優惠券。<br>
        二、車輛出校：離校前需先至全自動繳費機，按說明完成優惠券折抵操作後出場，方享本優惠。<br>
        <br><br>
        汽車停車收費標準：<br>
        一、上班日 : 20 元/時<br>
        二、假 日 ：40 元/時<br>
        三、每日最高上限收費 200 元<br>
        四、上班日及假日認定標準以行政院人事行政總處公告之行事曆為準。<br><br>
        
        網站連結：<a href="https://www.oga.ncu.edu.tw/86e45040" target="_blank">按此前往</a></p>
      `;
    } else if (locationId === 'Cdiscount5') {
        content = `
        <h1>全家便利商店｜校內門市</h1>
        <p>*中壢中央一店：桃園市中壢區中大路300號松果餐廳<br>
        *中壢中央二店：桃園市中壢區中大路300號男九餐廳<br>
        *中壢中央三店：桃園市中壢區中大路300號松苑餐廳<br><br>
        
        優惠內容：在校內全家消費可享85折優惠<br><br>
        
        網站連結：<a href="https://www.family.com.tw/Marketing/" target="_blank">按此前往</a></p>
      `;
    } else if (locationId === 'Cdiscount6') {
        content = `
        <h1>桃園市中大國民運動中心</h1>
        <p>地址：桃園市中壢區中大路300號<br>
        電話：03-4227151<br>
        優惠內容：憑學生證可享健身房一小時30元優惠<br><br>
        
        網站連結：<a href="https://sportscenter.ncu.edu.tw/" target="_blank">按此前往</a></p>
      `;
    }
    else if (locationId === 'hotel1') {
        content = `
        <h1>南方莊園渡假飯店</h1>
        <p>*桃園市中壢區樹籽路8號。03-420-2122</p>
        <p>憑校友證可享以下客房優惠：</p>
        <p>豪華客房 Deluxe Room</p>
        <p>定價$11800+10%，平日特價4500+10%，旺日特價5500+10%，假日合約價6000+10%，農曆過年期間$11800</p>

        <p>家庭客房 Family Room</p>
        <p>定價$14800+10%，平日特價6000+10%，旺日特價7000+10%，假日合約價7500+10%，農曆過年期間$14800</p>

        <p>景觀客房 Scenic Room</p>
        <p>定價$15800+10%，平日特價7900+10%，旺日特價8690+10%，假日合約價9480+10%，農曆過年期間$13430+10%</p>

        <p>*平日定義：周日~周五</p>
        <p>*旺日定義：七、八月周五、周日</p>
        <p>*假日定義：周六、連續假日、國定假日</p>
        <p>*農曆春節：113.02.08~113.02.14</p>

        <p>*各項折扣不得合併使用。優惠價格恕不得與其他專案優惠合併使用。</p>
        <p>*以上日期定義如有更動請以飯店公告為主，恕不另行通知。</p>

        <p>飯店設施與服務：</p>
        <p>1.依房型人數提供早餐。加購早餐每位收取大人NT$500+10%、小孩NT$250+10%（小孩定義115-150cm）、幼童115公分以下不收費。</p>
        <p>2.每房型依人數贈送礦泉水、軟性飲料、咖啡包、茶包、精緻點心。</p>
        <p>3.免費有線上網服務。</p>
        <p>4.免費使用南方莊園聯誼會設施，設施包含：</p>
        <p>B1文泉水療中心（室內溫水游泳池、水療池、兒童戲水池、戶外湯池區）、1F休閒中心（健身房、團體運動教室、兒童遊戲室、休閒娛樂室）、2F溫泉桑拿中心（亞式溫泉桑拿區、歐式溫泉桑拿區，桑拿區設備有文泉池、戶外游泳池、蒸氣室、烤箱及岩盤浴等設備）。</p>

        <p>餐飲優惠：</p>
        <p>1.於南方莊園渡假飯店南方餐廳（10人桌菜限三桌以下）、莊園餐廳、一起吧消費，可享9折優惠。（優惠不適用於外帶、特惠活動、會議專案、喜宴、飲料、客房服務）</p>
        <p>2.餐飲消費需加原價之10%服務費。</p>
        <p>3.持南方卡平日消費再95折，假日則無。</p>

        <p>優惠期限：2024.01.01-2024.12.30 ，使用優惠前請電洽 南方莊園渡假飯店確認。</p>
        <p>網站連結：<a href="http://www.southgarden.com.tw/" target="_blank">按此前往</a></p>
        <p>優惠內容:<a href="https://in.ncu.edu.tw/alumni/web/doc/20240424100750_att.pdf" target="_blank">優惠內容下載</a></p>
      `;
    } else if (locationId === 'hotel2') {
        content = `
        <h1>伊麗莎白酒店</h1>
        <p>*台中市西區中美街471號。04-23228899</p>
        <p>優惠內容：憑校友證可享以下客房優惠：</p>
        <p>1.方案A（含早餐，不含停車）</p>

        <p>．一大床房型：平日NT$1300，假日NT$2400。</p>
        <p>．二小床房型：平日NT$1300，假日NT$2400。</p>
        <p>．三人房房型：平日NT$1600，假日NT$2800。</p>
        <p>．雙大床房型：平日NT$1900，假日NT$3600。</p>

        <p>2.方案B（不含早餐，不含停車）</p>

        <p>．一大床房型：平日NT$1140，假日NT$2240。</p>
        <p>．二小床房型：平日NT$1140，假日NT$2240。</p>
        <p>．三人房房型：平日NT$1360，假日NT$2560。</p>
        <p>．雙大床房型：平日NT$1580，假日NT$3280。</p>

        <p>3.環保永續優惠方案（適用連續住宿兩晚以上，不清潔房間，不更換備品）</p>

        <p>．一大床房型 / 二小床房型：第二日起每日折扣NT$200。</p>
        <p>．三人房房型：第二日起每日折扣NT$250。</p>
        <p>．雙大床房型：第二日起每日折扣NT$300。</p>

        <p>房型介紹</p>
        <p>1、一大床型：最多可住2人，床鋪尺寸為一張標準雙人床。</p>
        <p>2、二小床型：最多可住2人，床鋪尺寸為二張標準單人床。</p>
        <p>3、三人房房型：最多可住3人，床鋪尺寸為一張標準雙人床加一張標準單人床或三張標準單人床。</p>
        <p>4、雙大床房型：最多可住4人，床鋪尺寸為二張標準雙人床。</p>

        <p>*春節、跨年、寒暑假及連續假日不適用特約優惠，特殊假日訂房請事先聯繫酒店。</p>
        <p>*優惠方案的細節及預訂住宿日期均須事先確認。</p>
        <p>*本酒店每間房間均有對外窗及獨立衛浴，九樓設有自住洗衣設備，選定房型後，房間樓層房號由酒店安排，恕不指定房號，如有特殊需求請於訂房前告知。</p>
        <p>*如未指定優惠方案，本酒店一律以B方案及環保永續方案計價安排住宿。</p>
        <p>*以上報價均含稅，退房時請記得向櫃臺領取發票。</p>
        <p>*入住時間：下午三點後，退房時間：中午十二點前。提前到來可先置放行李。</p>

        <p>網站連結：<a href="http://www.southgarden.com.tw/zh_TW">按此前往</a></p>

        <p>優惠期限： 即日起~2024.12.31 ，使用優惠前請電洽 伊麗莎白酒店確認</p>
        <p>網站連結：<a href="http://www.elizabethhotel.com.tw/index.html" target="_blank">按此前往</a></p>
      `;
    } else if (locationId === 'hotel3') {
        content = `
        <h1>村却國際溫泉酒店</h1>
        <p>*宜蘭縣羅東鎮站東路190號。03-9057988。</p>
        <p>優惠內容：憑校友證可享以下客房優惠：</p>

        <p>【一泊一食：含早餐】</p>
        <p>特約優惠報價        平日        旺日        假日</p>
        <p>儷緻客房        $7,100        $7,800        $8,600</p>
        <p>典雅客房        $7,100        $7,800        $8,600</p>
        <p>豪華客房        $8,970        $9,670        $10,470</p>
        <p>家庭客房        $10,840        $11,540        $12,340</p>
        <p>星隅客房        $11,840        $12,540        $13,340</p>
        <p>寰鼎客房        $11,840        $12,540        $13,340</p>
        <p>行政套房（2人）        $13,800        $14,500        $15,300</p>
        <p>行政套房（4人）        $20,900        $21,600        $22,400</p>
        <p>行政套房（6人）        $25,640        $26,340        $27,140</p>

        <p>【一泊二食：含早餐及晚餐】</p>
        <p>特約優惠報價        平日        旺日        假日</p>
        <p>儷緻客房        $8,600        $9,300        $10,100</p>
        <p>典雅客房        $8,600        $9,300        $10,100</p>
        <p>豪華客房        $11,020        $11,720        $12,520</p>
        <p>家庭客房        $13,440        $14,140        $14,940</p>
        <p>星隅客房        $14,440        $15,140        $15,940</p>
        <p>寰鼎客房        $14,440        $15,140        $15,940</p>
        <p>行政套房（2人）        $15,300        $16,000        $16,800</p>
        <p>行政套房（4人）        $23,900        $24,600        $25,400</p>
        <p>行政套房（6人）        $29,740        $30,440        $31,240</p>

        <p>---------------------------------------</p>
        <p>2024年平日/旺日/假日及春節期間定義:【以酒店公告為主】</p>
        <p>平日定義:週日~週四、03/01~10/25之週五。</p>
        <p>旺日定義:01/02~02/28之週五及11/01~12/30之週五。</p>
        <p>假日定義:週六、04/04、04/05、06/09。</p>

        <p>訂房說明：</p>
        <p>1、以上價格均內含5%營業稅及10%服務費。</p>
        <p>2、每房依標準入住人數含專案餐食，所有房型皆不提供加床服務。【嬰兒床除外】</p>
        <p>兒童7-11歲不佔床費用：一泊二食$1100+10%/位、一泊一食為$850+10%/位。</p>
        <p>早午餐：明廚百匯自助餐廳 時段 06:30~13:00</p>
        <p>晚餐：明廚百匯自助餐廳 時段 17:30~19:00或19:30~21:00</p>
        <p>【由於餐廳座位有限，若遇以上任一餐期客滿，將安排於尚未客滿之餐期使用。不便之處，敬請見諒！】</p>
        <p>※此報價提供之晚餐定價為NT$1080+10%/客，若於特殊節日或主題美食節入住，須補足當日餐飲定價差額，特殊節日與主題美食節日期以酒店官網公告為主。</p>

        <p>3、房內皆備有雙湯池【碳酸氫鈉美人湯及喜馬拉雅山玫瑰鹽浴】、景觀陽台、沐浴組、迷你吧【含冰箱飲料】、礦泉水、宜蘭特色迎賓點心【以現場實際提供為主】。</p>
        <p>4、住客皆可免費使用戶外常溫游泳池、兒童戲水池、室內健身房、溫泉裸湯、溫泉大眾池<著泳衣及泳帽>、兒童遊戲區…等；【Spa 身體芳療程除外，需另付費】。</p>
        <p>5、所有訂房入住【Check In】時間為下午三點以後，退房【Check Out】時間為中午十一點以前。</p>
        <p>6、使用此特惠同時仍需遵循飯店各項消費暨訂房規則；本報價書於有效期限結束後，非經雙方重新協議簽訂，即視為自動失效。</p>
        <p>7、若經由旅行社或特殊優惠方案安排則不另享有此特惠內容</p>
        <p>8、以上優惠專案限【企業會員】獨享，訂房及入住時請提供合約代碼(公司統

        <p>優惠期限 :2024.01.02~2024.12.30 ，使用優惠前請電洽 村却國際溫泉酒店確認。</p>
        <p>網站連結：<a href="https://www.cuncyue.com/" target="_blank">按此前往</a></p>
      `;
    } else if (locationId === 'hotel4') {
        content = `
        <h1>大板根森林溫泉渡假村</h1>
        <p>* 新北市三峽區插角里80號。02-26749228。</p>
        <p>優惠內容：憑校友證可享以下客房優惠(每張識別證限購二張/間)：</p>
        <p>1.住房優惠:(限訂兩間)住房含早餐、露天溫泉SPA(須著泳衣、泳帽)、森林入園門票</p>

        <p>平日65折+10%服務費(服務費為房間定價之一成)</p>
        <p>旺日75折+10%服務費(服務費為房間定價之一成)</p>
        <p>假日95折+10%服務費(服務費為房間定價之一成)</p>

        <p>*平旺假日定義:(農曆春節期間不適用)</p>
        <p>平日定義:一般月份的週日至週四，2~6月的週日至週五；例假日及1月春節期間例外</p>
        <p>旺日定義:週五及假日前一晚</p>
        <p>假日定義:週六、連續假日</p>

        <p>如有任何異動，一大板根官網住房行事曆為準</p>

        <p>住房區域</p>
        <p>渡假村區</p>
        <p>房型 定價 平日 旺日 假日</p>
        <p>二人 7000+10% 5200 6000 7500</p>
        <p>三人 8000+10% 6000 6800 8500</p>
        <p>四人 9000+10% 6800 7600 9500</p>
        <p>五人 10000+10% 7600 8400 10500</p>

        <p>酒店區</p>
        <p>房型 定價 平日 旺日 假日</p>
        <p>二人 8000+10% 6000 6800 8500</p>
        <p>三人 9000+10% 6800 7600 9500</p>
        <p>四人 10000+10% 7600 8400 10500</p>

        <p>*另依房型人數贈送大板根咖啡廳飲料一杯。</p>

        <p>2.露天溫泉SPA(限成人):平日依現場定價打七折、假日打八折(每人550元)</p>

        <p>3.森林入園門票:依現場定價打八折(定價:成人250元，兒童150元)</p>
        <p>優惠期限：2024.01.01~2024.12.31 ，使用優惠前請電洽 大板根森林溫泉渡假村確認</p>
        <p>網站連結：<a href="https://www.thegreatroots.com/" target="_blank">按此前往</a></p>
      `;
    } else if (locationId === 'hotel5') {
        content = `
        <h1>義大皇家酒店</h1>
        <p>*高雄市大樹區學城路一段153號。07-656-8158。</p>
        <p>優惠內容:</p>

        <p>義大皇家飯店</p>
        <p>豪華客房/一大床/兩小床 :NT$4,180 (含 2 客早餐)</p>
        <p>山景客房/一大床: NT$4,730 (含 2 客早餐)</p>
        <p>雅致家庭房/兩中床: NT$5,170 (含3 客早餐)</p>
        <p>雅致家庭房/兩中床 :NT$6,160 (含4 客早餐)</p>
        <p>豪華家庭房/兩大床 :NT$6,710 (含 4 客早餐)</p>

        <p>義大天悅飯店</p>
        <p>雅緻客房/一大床/兩小床 :NT$3,500 (含 2 客早餐)</p>
        <p>溫馨家庭房/兩中床 :NT$4,490 (含 3 客早餐)</p>
        <p>溫馨家庭房/兩中床 :NT$5,480 (含 4 客早餐)</p>
        <p>幸福家庭房/一大兩小/兩大床 : NT$6,140 (含 4 客早餐)</p>

        <p>憑校友證</p>
        <p>1.優惠價格農曆春節(2/8-2/13)、跨年期間不適用</p>
        <p>2.義大皇家飯店提供免費使用飯店休閒設施:三溫暖， 健身房， 戶外游泳池， SPA 水療</p>
        <p>3.免費提供礦泉水及使用網際網路。</p>
        <p>4.加人每人加價 NT$990 含早餐(入住家庭房，每房最多可入住四人)。</p>
        <p>5.以上價格已含 5%營業稅、 10%服務費。</p>
        <p>6. 如遇週六入住每房需加 NT$1,100NET。 暑假(7 月 01 日~8 月 31 日)星期六、連續假日、清明節 4/4-4/6、端午節 6/8-6/9 住宿，每房加價 NT$1,760</p>

        <p>優惠期限 : 2024.01.01-2024.12.29 ，使用優惠前請電洽 義大皇家酒店確認</p>
        <p>網站連結：<a href="https://in.ncu.edu.tw/alumni/web/doc/20240104113902_att.pdf" target="_blank">按此前往</a></p>
      `;
    } else if (locationId === 'hotel6') {
        content = `
        <h1>台南大飯店</h1>
        <p>*台南市中西區成功路1號。06-2289101。</p>
        <p>優惠內容:</p>
        <p>1. 憑校友證預定以下宴席項目享優惠:</p>
        <p>1-1 歐式自助餐:9折優惠(需另加原價10%服務費)</p>
        <p>1-2 會議廳租用:9折優惠</p>
        <p>1-3 中式桌菜:指定菜單(廚房菜單或季節菜單)優惠免收10%服務費</p>

        <p>2. 本優惠不適用以下型態:喜宴、外燴、美食外賣、外帶與酒水飲料</p>
        <p>3. 本優惠不適用於農曆春節(小年夜~初五)及母親節當周日</p>
        <p>4. 本優惠恕無法以$500餐飲抵用券或餐券付款</p>
        <p>5. 本優惠恕無法與其他優惠方案並用</p>

        <p>(歐式自助餐訂位專線06-2249886，會議廳及宴席桌菜洽詢專線06-2207829)</p>
        <p>優惠期限 :2024.1.1-2024.12.31 ，使用優惠前請電洽 台南大飯店確認</p>
        <p>網站連結：<a href="https://www.facebook.com/HotelTainan.Since1964/?locale=zh_TW" target="_blank">按此前往</a></p>
      `;
    } else if (locationId === 'hotel7') {
        content = `
        <h1>和逸飯店｜桃園館</h1>
        <p>*桃園市中壢區春德路101號。02-77063603。</p>
        <p>優惠內容：憑校友證消費，可享房型優惠：</p>
        
        <p>舒適客房(一大床/兩小床)定價NT$15,000，優惠價NT$4100</p>
        <p>和逸客房(一大床)定價NT$18,000，優惠價NT$4600</p>
        <p>景隅客房(一大床)定價NT$22,000，優惠價NT$5100</p>
        <p>和逸客房(二大床，2~4位入住)定價NT$25,000，優惠價NT$7600</p>
        
        <p>*以上價格為每晚每房價格，並已含10%服務費用及5%稅金，不含佣金</p>
        <p>*房價均含一客早餐(和逸客房-二大床依合約價提供二客至四客早餐)</p>
        <p>*加人加價:每晚需另收費NT$1000NET(含早餐)</p>
        <p>*飯店另有提供加床服務，每張加床每晚需加收NT$1200NET(含早餐)</p>
        <p>*此優惠價僅適用於五間以下一般散客入住使用，不適用任何規模之會議、獎勵旅遊或特殊目的的團體。</p>
        
        <p>*合約不適用的日期:</p>
        
        <p>1.週六(除7-8月)每房每晚需另加NT$1400NET</p>
        <p>2.7月及8月之週六及國定假日與連續假期每房每晚需另加NT$1800NET</p>
        <p>3.下列假日期間房價依照飯店當日浮動房價:<br>
        2023/1/1(元旦)、1/21~1/26(農曆春節)、12/31</p>
        <p>4.和逸客房兩大床於週六期間及連續假日不適用雙人之住宿</p>
        
        <p>房客專屬優惠：</p>
        
        <p>1. 房客免費停車</p>
        <p>2. 全區免費有線/無線網路</p>
        <p>3. 枕頭選單</p>
        <p>4. 房內每日兩瓶礦泉水</p>
        <p>5. 嶄新套房專屬體驗-Cozzi24</p>
        <p>6. 房客專屬休憩空間</p>
        
        <p>優惠期限 : ~2024.12.30，使用優惠前請電洽 和逸飯店桃園館確認</p>        
        <p>網站連結：<a href="https://hotelcozzi.com/?gclid=Cj0KCQjwmvSoBhDOARIsAK6aV7h5y8tOhJWAl1B1eXziiTEZppZMc9Qj6yAQBkUV2t-ALYx_2As34GUaAhx6EALw_wcB" target="_blank">按此前往</a></p>
        `;
    } else if (locationId === 'hotel8') {
        content = `
        <h1>澎湖福朋喜來登酒店</h1>
        <p>澎湖縣馬公市新店路197號。02-25315508</p>
        <p>優惠內容：憑校友證可享以下客房優惠：</p>
        <p>1. 專案優惠價格如下:</p>
        <p>(此專案不是用於旅行社或訂房網站等第三方代訂房)</p>
        <p>街景豪華雙床(兩中床)客房(2人):原價12500元，旺季平日5300元、假日6000元。</p>
        <p>市景 側港景豪華雙床(兩中床)客房(2人):原價13500元，旺季平日5800元、假日6500元。</p>
        <p>港景豪華雙床(兩中床)客房(2人):原價15500元，旺季平日6300元、假日7000元。</p>
        <p>港景豪華雙人客房(2人):原價17500元，旺季平日6600元、假日7300元。</p>
        <p>港景石滬雅仕套房(一大一中床):原價31500元，旺季平日12500元、假日13200元。</p>
        <p>港景吉貝雅套房(一大床):原價37500元，旺季平日13000元、假日13700元。</p>
        <p>港景菊島大使套房(一大床):原價43800元，旺季平日14500元、假日15200元。</p>
        
        <p>2. 餐飲專案優惠:</p>
        <p>館內餐廳(宜客樂海港百匯自助餐聽、藍洞餐廳、聚味軒中餐廳)成人用餐88折優惠。</p>
        <p>每日每餐期間優惠乙次:拆單或併桌消費不適用(需另加原訂價10%服務費)</p>
        <p>*特定節日不可使用專案優惠!</p>

        <p>注意事項:</p>
        <p>1. 住宿優惠價含早餐(1~2 客)含稅及服務費；若單人住宿售價不變，仍以每房(2 人)為單位計價。</p>
        <p>2.同房住宿貴賓若第 2 位為兒童者(即 1 大 1 小)，亦視為大人計，無減價優惠。</p>
        <p>3.以上優惠內容於訂房/訂餐時，須主動告知為『企業福委會合約』之優惠專案，並提供員工證或相關證明予飯店，得享優惠內容。優惠預訂與否需視酒店實際而定。</p>
        <p>4.加人加價定義：</p>
        <p>(1)一般雙床客房同房加人(恕不加床)，雙床客房至多容納四位(含成人或兒童或幼兒)為限</p>
        <p>◆第 3、4 位大人，每人每晚 NT$1,200 元(僅含早餐)。(2)套房加人至多容納三位(含成人或兒童或幼兒)。</p>
        <p>◆「石滬雅仕套房」加人加價不加床，成人每晚 NT$2,000 元(含早餐)。</p>
        <p>◆「吉貝雅爵套房」、「菊島大使套房」加人加價加床，成人每晚 NT$2,500 元(含早餐)。</p>
        <p>5.兒童定義依酒店規定辦理：</p>
        <p>(1)6 歲以下兒童與父母同房免收佔床費用，兒童早餐免費。</p>
        <p>(2)7-12 歲兒童與父母同房免收佔床費用，但皃童早餐需自行加訂付費(成人價五折+10%)。</p>
        <p>(3)13 歲以上皆視為成人佔床，需以成人加人加價(不加床)計費。</p>
        <p>6.宜客樂百匯自助餐廳優惠僅適用於成人計價，五折價(含)以下收費標準之兒童價恕不適用。</p>
        <p>7.餐飲優惠限於酒店內用餐 12 人(含)以下之消費，恕不適用於外帶、宴席、包廂(費)、酒水飲料、餐劵或禮劵。</p>
        <p>8.以上餐飲消費折扣不適用於特殊節慶期間(依餐廳現場公告為主)，優惠不可與其他優惠或折扣一併使用，且不可兌換現金或其他產品。</p>

        <p>【注意事項】</p>
        <p>1.入住時間為下午 15:00 以後，團體(8 間以上)退房時間為上午 10:00 以前;散客(7 間以下)退房時間為上午 11:00 以前。</p>
        <p>2.入住前一日須付清全額房費，否則飯店有權取消訂房，付款方式限以現金、信用卡結帳。</p>
        <p>3.以上房價均含稅，訂房確認且收取訂金前，本飯店有權修改房價表之內容。</p>
        <p>4.為配合政府法令及維護旅客住宿品質，本飯店全面禁菸並禁止攜帶寵物入住。</p>

        <p>網站連結：按此前往(https://www.fourpoints-penghu.com/)</p>

        <p>9.花蓮理想大地渡假飯店</p>
        <p>地址 : 花蓮縣壽豐鄉理想路1號(23.86580217375343, 121.52706642233495)</p>
        <p>連絡電話 : 03-8656789</p>
        <p>優惠內容：憑校友證可享以下客房優惠：</p>
        <p>優惠房價:</p>
        <p>房型 床型 坪數 定價 平日 旺日</p>
        <p>豪華客房 2 人房 1 大床 15 坪 $9,600+10% $6,500 $7,300</p>
        <p>豪華客房 2 人房 2 中床 15 坪 $10,200+10% $6,900 $7,700</p>
        <p>蜜月客房 2 人房 1 大床 15 坪 $10,200+10% $6,900 $7,700</p>
        <p>歡樂客房 2 人房 2 大床 15 坪 $10,800+10% $7,300 $8,100</p>
        <p>蜜月套房 2 人房 1 大床 21 坪 $16,000+10% $8,300 $9,100</p>
        <p>歡樂套房 4 人房 2 大床 21 坪 $16,600+10% $11,300 $12,100</p>
        <p>經典閣樓套房 4 人房 2 大床 25 坪 $21,000+10% $13,200 $14,000</p>
        <p>閣樓童畫套房 4 人房 2 大床 25 坪 $23,000+10% $14,200 $15,000</p>

        <p>企業合約獨享優惠:</p>
        <p>1. 每人贈活動三選一(竹筏/釣魚/射箭)。</p>
        <p>2. 館內用餐享有9折優惠。(里拉自助餐廳及風味餐廳限定)。</p>
        <p>3. 每房贈送館內消費券$300 (可於館內自營消費折抵) ,不得與其他優惠折扣併用。</p>

        <p>《專案內容》</p>
        <p>⚫ 西班牙主題房型住宿乙晚</p>
        <p>⚫ 陽光活力自助早餐乙次</p>
        <p>⚫ 應許河遊艇導覽乙次</p>
        <p>⚫ 迎賓小品 + 湖畔夜間彈唱 + 飯店免費設施使用(內容依當季活動一覽表為主)</p>
        <p>⚫ 花蓮車站/機場定時定點往返飯店接駁乙次(依飯店公告時間,需事先預約)</p>
        <p>《備註》</p>
        <p>⚫ 以上價格已含10%服務費。</p>
        <p>⚫ 假日/連續假期/享官網訂房95折優惠 (特殊專案、 指定日、春節不適用)。</p>
        <p>⚫ 床型尺寸:大床 (180x200cm)、中床 (150x200cm)</p>
        <p>⚫ 每房加人費用:大人(12歲以上):每人$1200+10%,兒童(6歲以上未滿12歲或身高滿115公分未滿150公分者):</p>
        <p>每人$600+10%(含備品、早餐、遊艇券、房內Mini Bar、接送、免費設施)。未滿6歲及身高未滿115公分不佔床之嬰童免
        費。</p>
        <p>⚫ 假日、暑假期間訂房需搭配使用二餐 (早+午或晚),連續假日期間需搭配使用晚餐 (早+晚)。</p>
        <p>⚫ 辦理住房手續為 15:00以後,退房時間為 早上11:00以前。</p>
        <p>⚫ 免費提供嬰兒床、澡盆、消毒鍋、安全護欄(數量有限,請先預約)。</p>
        <p>⚫ 詳細平/旺/假日/連續假日定義請參考附件行事曆,或可自行至官網下載</p>
        <p>優惠期限 : 2024.01.01~2024.12.31 ，使用優惠前請電洽 澎湖福朋喜來登酒店確認</p>            
        <p>網站連結：<a href="https://www.marriott.com.cn/hotels/mzgfp-four-points-penghu/overview/" target="_blank">按此前往</a></p>
        <p>優惠內容: <a href="https://in.ncu.edu.tw/alumni/web/doc/20231226111241_att.pdf" target="_blank">優惠內容下載</a></p>
        `;
    } else if (locationId === 'law1') {
        content = `
        <h1>現代地政士事務所</h1>
        <p>*台北市大同區南京西路18巷8之1號。02-25586666</p>
        <p>優惠內容：憑校友證</p>
        <p>    （一）買賣、繼承、贈與登記打七折。</p>
        <p>    （二）法令諮詢打七折。（含買賣契約、遺囑、信託之擬定規劃）</p>
        <p>    節稅規劃</p>
        <p>優惠期限：2024/03/01~2026/12/31 ，使用優惠前請電洽 現代地政士事務所確認。</p>
        <p>網站連結：<a href="https://in.ncu.edu.tw/alumni/web/benefits.php?type=legal%20administrative" target="_blank">按此前往</a></p>
      `;
    } else if (locationId === 'law2') {
        content = `
        <h1>現代物業經濟股份有限公司</h1>
        <p>* 台北市大同區南京西路18巷8之1號。02-25586666</p>
        <p>優惠內容：憑校友證</p>
        <p>    便宜的房子與土地出售時，優先通知。</p>
        <p>優惠期限：2024/03/01~2026/12/31 ，使用優惠前請電洽 現代物業經濟股份有限公司確認。</p>
        <p>網站連結：<a href="https://in.ncu.edu.tw/alumni/web/benefits.php?type=legal%20administrative" target="_blank">按此前往</a></p>
      `;
    } else if (locationId === 'life1') {
        content = `
        <h1>棉花田生機園地</h1>
        <p>"*桃園中正門市：桃園市桃園區中正路1189號<br>
        電話：03-326-0908<br>
        *桃園中山門市：33053桃園市桃園區中山路260號<br>
        電話：03-332-1038<br>
        *桃園大業門市：桃園市桃園區大業路一段376號<br>
        電話：03-316-6128<br>
        *桃園南崁門市：桃園市蘆竹區忠孝西路42號<br>
        電話：03-212-0398<br>
        *桃園八德門市：桃園市八德區介壽路一段934號<br>
        電話：03-361-5389<br>
        *中壢環東門市：桃園市中壢區環中東路212號<br>
        電話：03-285-2588<br>
        *竹北縣政門市：新竹縣竹北市縣政九路163號<br>
        電話：03-558-5308<br>
        *竹北文興門市：新竹縣竹北市文興路一段17號、19號<br>
        電話：03-667-5458<br>
        *新竹中央門市：新竹市東區中央路174號<br>
        電話：03-515-2250<br>
        *新竹關新門市：新竹市東區關新路53號<br>
        電話：03-666-2197<br><br>
        
        優惠內容：憑教職員證可享桃園、新竹區門市9折優待(現金、刷卡)，機器、餐點、餐汁券、禮券、米、葷食、鮮乳製品、特惠商品及部分商品除外。<br><br>
        
        網站連結：<a href="https://www.sun-organism.com.tw/index.php" target="_blank">按此前往</a></p>;
    `;
    } else if (locationId === 'learn1') {
        content = `
        <h1>黑嘉嘉圍棋教室</h1>
        <p>*台北市中山區松江路80號11樓B座。0956178599</p>
        <p>優惠內容：憑校友證、學生證消費，並以中大email帳號申請即可享線上課程5折優惠。</p>
        <p>優惠期限：2022.10.20~2024.12.31 ，使用優惠前請電洽 黑嘉嘉圍棋教室確認</p>
        <p>網站連結：<a href="https://www.heijiajia.com.tw/" target="_blank">按此前往</a></p>
    `;
    } else if (locationId === 'learn2') {
        content = `
        <h1>台灣麥克圖書</h1>
        <p>* 桃園區大興西路二段65號9樓。陳燕倫 0921460262</p>
        <p>優惠內容：兒童,青少年圖書書籍提供69折優惠</p>
        <p>優惠期限：自2021.10.01起至無期限 ，使用優惠前請電洽 台灣麥克圖書確認</p>
        <p>網站連結：<a href="https://www.tmac.com.tw/home.asp" target="_blank">按此前往</a></p>
        `;
    }

  infoContainer.innerHTML = content;
}

function smoothPanAndZoom(map, destination, zoomLevel) {
    let start = Date.now();
    let duration = 1000; // Duration in milliseconds
    let startLatLng = map.getCenter();
    let endLatLng = destination;
    let deltaLat = (endLatLng.lat() - startLatLng.lat()) / duration;
    let deltaLng = (endLatLng.lng() - startLatLng.lng()) / duration;
    let startZoom = map.getZoom();
    let deltaZoom = (zoomLevel - startZoom) / duration;

    let interval = setInterval(function () {
        let now = Date.now() - start;
        if (now >= duration) {
            map.panTo(endLatLng);
            map.setZoom(zoomLevel);
            clearInterval(interval);
        } else {
            map.panTo({
                lat: startLatLng.lat() + deltaLat * now,
                lng: startLatLng.lng() + deltaLng * now
            });
            map.setZoom(Math.round(startZoom + deltaZoom * now));
        }
    }, 10); // Adjust the time interval for smooth animation
}

document.addEventListener("DOMContentLoaded", function () {
    var headers = document.querySelectorAll('.menu-item h3');
    headers.forEach(function (header) {
        header.addEventListener('click', function () {
            var content = this.nextElementSibling;
            if (content.style.display === "none" || !content.style.display) {
                content.style.display = "block";
                this.classList.add('open');
            } else {
                content.style.display = "none";
                this.classList.remove('open');
            }
        });
    });

    const toggleButton = document.querySelector('.toggle-sidebar-btn');
    const sidebar = document.querySelector('#sidebar');
    const main = document.querySelector('#main');
    
    toggleButton.addEventListener('click', function() {
        sidebar.classList.toggle('hidden');
        main.classList.toggle('shrink');
    });
});
