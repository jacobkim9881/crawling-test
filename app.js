const express = require('express')
const path = require('path');
const pug = require('pug');

var Crawler = require("crawler");
 
var c = new Crawler({
    maxConnections : 10,
    // This will be called for each crawled page
    callback : function (error, res, done) {
        if(error){
            console.log(error);
        }else{
            var $ = res.$;
            // $ is Cheerio by default
            //a lean implementation of core jQuery designed specifically for the server
            //let txt = $(`.sh-pr__product-results-grid sh-pr__product-results`).text();
            const arr = [];
            let img2 = $('.u30d4').each((i, elem1) => {
                console.log(elem1.children[0].children)
            })
            let imgAddr = $('img').each((i, elem) => {
                //console.log(elem)
                //arr[i] = elem.attribs.src
            })
            let addr = $('img').parent().parent().each((i, elem) => {
                //console.log(elem.attribs.href)
            })
            let title = $('.HRLxBb').text();
            
            //let texts = title.match(/별도+/g);
            //let test = txt.match(/\w+|\d[^\n|^\s|^\r]/g);
            
            //lotto
            //let txt = $(".win_result").text();
            //let test = txt.match(/\w+|\d[^\n|^\s|^\r]/g);
            //console.log(txt);
            //console.log(img2)
        }
        done();
    }
});
 
// Queue just one URL, with default callback
c.queue('https://www.google.com/search?hl=ko&gl=kr&tbm=shop&sxsrf=ALeKk02Zqfvd4iLow1jkWs95zmmAsRfVow%3A1596508407468&source=hp&ei=98goX-CXGo_m-Aaf6r3YDw&q=%EC%96%91%EB%A7%90&oq=%EC%96%91%EB%A7%90&gs_lcp=Cgtwcm9kdWN0cy1jYxADMgQIABAeMgQIABAeMgQIABAeMgQIABAeMgQIABAeMgQIABAeMgQIABAeMgQIABAeMgQIABAeMgQIABAeOgYIABAKEB5Q3RlY4yhggCpoA3AAeAGAAXGIAd8FkgEDMC43mAEAoAEBqgEPcHJvZHVjdHMtY2Mtd2l6sAEA&sclient=products-cc&ved=0ahUKEwig74WkwYDrAhUPM94KHR91D_sQ4dUDCAc&uact=5');
//c.queue('http://www.inven.co.kr/board/hos/3903');

const app = express();

app.set('view engine', 'pug');

app.get('/', (req, res) => {
    res.render('index', { title: 'Hey', message: 'Hello'});
});

console.log('hello')

app.listen(3000);


let test2 = `MY 홈찜한 상품찜한 스토어상품 리뷰장바구니주문확인/배송조회쿠폰여성청바지여성원피스여성스커트여성점프슈트여성블라우스/셔츠여성티셔츠여성재킷패션의류5,642,751출산/육아596,965패션잡화334,964생활/건강303,427가구/인테리어108,384스포츠/레저70,143디지털/가전52,630식품44,043화장품/미용4,609여가/생활편의508면세점501게스리바이스지오다노닉스가바쉬즈미스더뽐까레라데님오브벌츄써스데이아일랜드반에이크캘빈클라인겟유즈드플랙진리틀마켓쥬시쥬디잠뱅이버커루랩플라스틱아일랜드긴바지숏팬츠/3부5부9부4부8부7부6부와이드핏일자핏보이핏테이퍼드핏슬림핏배기핏2만원이하2만원 ~ 4만원4만원 ~ 8만원8만원이상무료배송오늘출발카드할인쿠폰적립추가할인전체7,158,925가격비교561,812네이버페이2,646,748백화점/홈쇼핑589,339핫딜5,008쇼핑윈도115,260해외직구2,612,026적합도 지수 : 검색어에 대한 상품 정보 연관도/카테고리 선호도인기도 지수 : 네이버쇼핑을 통한 상품클릭수, 판매실적, 구매평수, 찜수, 최신성신뢰도 지수 : 네이버쇼핑 페널티, 상품명 SEO 스코어오픈마켓/종합몰선택백화점/홈쇼핑면세점해외쇼핑마트/소셜여행/티켓소호상품타입(전체)해외직구보기해외직구제외중고보기중고제외렌탈보기렌탈제외20개씩 보기40개씩 보기60개씩 보기80개씩 보기담기내 블로그에 담기카페에 담기레인쿨 아이스 여름 밴딩 고무줄 부츠컷데님팬츠광고30,600원패션의류여성의류청바지리뷰171등록일 2020.05.찜하기0신고하기시크폭스정보상품만 보기파워네이버플러스멤버십포인트 918원배송비  2,500원적립구매정보담기내 블로그에 담기카페에 담기[XXXXL제작상품]KELR_SP:휴룸 데님팬츠1830[빅사이즈]광고48,000원패션의류여성의류청바지전상품 무료배송, M~5XL 자체제작!등록일 2020.02.찜하기0신고하기OKKANE정보상품만 보기파워네이버플러스멤버십포인트 1,440원배송비 무료적립구매정보담기내 블로그에 담기카페에 담기웨이스트 빈티지 배기 찢어진 연청 데님 찢청광고19,800원패션의류여성의류청바지리뷰5,181등록일 2020.02.찜하기0신고하기시크폭스정보상품만 보기파워네이버플러스멤버십포인트 594원배송비  2,500원적립구매정보담기내 블로그에 담기카페에 담기지오다노 여 LW 슬림 스트레이트 데님 청바지 05 05410537최저21,220원판매처 570패션의류여성의류청바지리뷰별점 4.6100등록일 2020.04.찜하기0정보 수정요청쇼핑몰별 최저가네이버페이현대Hmall21,22011번가22,560네이버플러스멤버십엔터식스23,210옥션23,280네이버페이NS홈쇼핑23,420담기내 블로그에 담기카페에 담기허벅지 얇아보이는 데님 밴딩 반바지최저12,580원판매처 22패션의류여성의류청바지하의기장 : 4부|핏 : 와이드핏|밑위 : 하이웨이스트|성별 : 여성용리뷰별점 4.15,664등록일 2019.04.찜하기0정보 수정요청쇼핑몰별 최저가네이버플러스멤버십미인옷12,58011번가12,590네이버플러스멤버십하미아스토어12,710네이버플러스멤버십춤의 운성13,870네이버플러스멤버십Na Na14,070네이버플러스멤버십포인트 918원배송비  2,500원적립구매정보네이버플러스멤버십포인트 1,440원배송비 무료적립구매정보네이버플러스멤버십포인트 594원배송비  2,500원적립구매정보네이버페이현대Hmall21,22011번가22,560네이버플러스멤버십엔터식스23,210옥션23,280네이버페이NS홈쇼핑23,420네이버플러스멤버십미인옷12,58011번가12,590네이버플러스멤버십하미아스토어12,710네이버플러스멤버십춤의 운성13,870네이버플러스멤버십Na Na14,070`