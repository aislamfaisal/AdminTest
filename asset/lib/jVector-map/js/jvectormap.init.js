$(function(){
    new jvm.Map({
        map: 'world_mill',
        container: $('#world-map'),
        backgroundColor: '#00f'
    });
    new jvm.Map({
        map: 'us_aea',
        container: $('#us-map'),
        backgroundColor: '#00f',
        regionLabelStyle: {
            initial: {
                fill: '#000'
            },
            hover: {
                fill: 'black'
            }
        },
        labels: {
            regions: {
                render: function(code){
                    var doNotShow = ['US-RI', 'US-DC', 'US-DE', 'US-MD'];

                    if (doNotShow.indexOf(code) === -1) {
                        return code.split('-')[1];
                    }
                },
                offsets: function(code){
                    return {
                        'CA': [-10, 10],
                        'ID': [0, 40],
                        'OK': [25, 0],
                        'LA': [-20, 0],
                        'FL': [45, 0],
                        'KY': [10, 5],
                        'VA': [15, 5],
                        'MI': [30, 30],
                        'AK': [50, -25],
                        'HI': [25, 50]
                    }[code.split('-')[1]];
                }
            }
        }
    });
    new jvm.Map({
        map: 'au_mill',
        container: $('#aus-map'),
        backgroundColor: 'transparent',
        zoomButtons : false,
        series: {
            regions: [{
                values: {
                    'AU-ACT': '#d22532',
                    'AU-WA': '#00f',
                    'AU-TAS': '#d22532',
                    'AU-': '#00f',
                    'AU-VIC': '#d22532',
                    'AU-NT': '#d22532',
                    'AU-QLD': '#00f',
                    'AU-SA': '#d22532',
                    'AU-NSW': '#d22532'
                },
                attribute: 'fill'
            }]
        }
    });

    $('#mall-map').vectorMap({
        map: 'mall',
        backgroundColor: 'transparent',
        markers: [{
            coords: [60, 110],
            name: 'Escalator 1',
            style: {fill: 'yellow'}
        },{
            coords: [260, 95],
            name: 'Escalator 2',
            style: {fill: 'yellow'}
        },{
            coords: [434, 95],
            name: 'Escalator 3',
            style: {fill: 'yellow'}
        },{
            coords: [634, 110],
            name: 'Escalator 4',
            style: {fill: 'yellow'}
        }],
        series: {
            regions: [{
                values: {
                    F102: 'SPORTS & OUTDOOR',
                    F103: 'HOME DECOR',
                    F105: 'FASHION',
                    F106: 'OTHER',
                    F108: 'BEAUTY & SPA',
                    F109: 'FASHION',
                    F110: 'BEAUTY & SPA',
                    F111: 'URBAN FAVORITES',
                    F114: 'SERVICES',
                    F166: 'DINING',
                    F167: 'FASHION',
                    F169: 'DINING',
                    F170: 'ENTERTAINMENT',
                    F172: 'DINING',
                    F174: 'DINING',
                    F115: 'KIDS STUFF',
                    F117: 'LIFESTYLE',
                    F118: 'URBAN FAVORITES',
                    F119: 'FASHION',
                    F120: 'FASHION',
                    F122: 'KIDS STUFF',
                    F124: 'KIDS STUFF',
                    F125: 'KIDS STUFF',
                    F126: 'KIDS STUFF',
                    F128: 'KIDS STUFF',
                    F129: 'LIFESTYLE',
                    F130: 'HOME DECOR',
                    F132: 'DINING',
                    F133: 'SPORTS & OUTDOOR',
                    F134: 'KIDS STUFF',
                    F135: 'LIFESTYLE',
                    F136: 'LIFESTYLE',
                    F139: 'KIDS STUFF',
                    F153: 'DINING',
                    F155: 'FASHION',
                    F156: 'URBAN FAVORITES',
                    F157: 'URBAN FAVORITES',
                    F158: 'LINGERIE & UNDERWEAR',
                    F159: 'FASHION',
                    F160: 'FASHION',
                    F162: 'FASHION',
                    F164: 'FASHION',
                    F165: 'FASHION',
                    FR01: 'REST ROOMS',
                    FR02: 'REST ROOMS',
                    FR03: 'REST ROOMS',
                    FR04: 'REST ROOMS',
                    FFC: 'DINING'
                },
                scale: {
                    "FASHION": "#2761ad",
                    "LINGERIE & UNDERWEAR": "#d58aa3",
                    "BEAUTY & SPA": "#ee549f",
                    "URBAN FAVORITES": "#15bbba",
                    "SPORTS & OUTDOOR": "#8864ab",
                    "KIDS STUFF": "#ef4e36",
                    "ENTERTAINMENT": "#e47325",
                    "HOME DECOR": "#a2614f",
                    "LIFESTYLE": "#8a8934",
                    "DINING": "#73bb43",
                    "REST ROOMS": "#6c260f",
                    "SERVICES": "#504d7c",
                    "OTHER": "#c7b789"
                }
            }]
        },
        onRegionTipShow: function(e, el, code){
            if (el.html() === '') {
                e.preventDefault();
            }
        }
    });
});