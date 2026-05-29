const FAVORITES_KEY = "teaFestivalFavorites";
const MAP_WIDTH = 1456;
const MAP_HEIGHT = 1080;
const BOOTH_Y_OFFSET = 0;
const MIN_ZOOM = 0.1;
const MAX_ZOOM = 2.5;
const DEFAULT_ZOOM = 0.5;
const SEARCH_FOCUS_ZOOM = 1.45;
const DEFAULT_SORT = "name";
const INITIAL_INDEX = ["ㄱ", "ㄴ", "ㄷ", "ㄹ", "ㅁ", "ㅂ", "ㅅ", "ㅇ", "ㅈ", "ㅊ", "ㅋ", "ㅌ", "ㅍ", "ㅎ", "기타"];
const HANGUL_INITIALS = ["ㄱ", "ㄲ", "ㄴ", "ㄷ", "ㄸ", "ㄹ", "ㅁ", "ㅂ", "ㅃ", "ㅅ", "ㅆ", "ㅇ", "ㅈ", "ㅉ", "ㅊ", "ㅋ", "ㅌ", "ㅍ", "ㅎ"];

const categoryByZone = {
  A: "전통차/다구",
  B: "블렌딩티",
  C: "티푸드",
  D: "차도구",
  E: "지역차",
  F: "수입차",
  G: "문화상품",
  H: "체험/클래스",
};

const featured = {
  A1: {
    name: "무유다원",
  },
  A7: {
	  name: "(사)세계기독교차문화협회/ 일양차문화연구원 회원 티플라워(다화) 전시회",
  },
  A9: {
	  name: "공부차파크 복합치유공간 (과천 청계산점)",
	  instagram: "https://www.instagram.com/gongboochapark.bakery.teahouse?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
  },
  A10: {
    name: "국제통상"
  },
  A11: {
    name: "무유장작가마 살래요",
  },
  A12: {
    name: "명인신광수차_무드를 즐기는차(moocha)",
  },
  A13: {
    name: "모후실에서만난차",
    instagram: "https://www.instagram.com/tea_from_mohusil?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",

  },
  A14: {
    name: "백자일상",
    instagram: "https://www.instagram.com/dl_jeong_hyun?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
  },
  A15: {
    name: "문경칠봉산농원",
  },
  A16: {
    name: "동국대학교 불교대학원 차문화콘텐츠학과"
  },
  A17: {
	  name: "가헌아트",
  },
  A18: {
    name: "순천대학교 (사)고려천태국제선차 연구보존회",
  },
  A23: {
    name: "문재필 옻칠갤러리",
  },
  A24: {
	  name: "경주 남촌도예",
	  instagram: "https://www.instagram.com/namchondoye?igsh=eWc3cDJ1ZjRocXRx",
  },
  A26: {
    name: "매원초가"
  },
  A27: {
    name: "연으로 만드는 힐링푸드 두레연구품당",
  },
  A28: {
    name: "귀단요 성탄송운"
  },
  A30: {
    name: "언담",
  },
  A33: {
    name: "안동착한농장 프로폴리스 茶",
  },
  A36: {
    name: "대림목공예"
  },
  A40: {
    name: "꼬매",
  },
  A41: {
    name: "보성천연염색협동조합 (자연담은 하늘수)",
  },
  A44: {
    name: "승설재 / 무이성",
    instagram: "https://www.instagram.com/seungseoljae?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
  },
  A48: {
	  name: "(사) 한국 싱잉볼 협회 & (주) 젠타라피 네츄럴 힐링센터",
  },
  B1: {
    name: "보성군 홍보관"
  }, 
  B4: {
    name: "보성 유기농 운해다원",
  },
  B7:{
    name: "보성 (부광녹차)",
  },
  B9: {
    name: "보성 영천다원",
  },
  B10: {
    name: "소아다원",
  },
  B12: {
    name: "보성녹차 선다원",
    instagram: "https://www.instagram.com/sundawon_tea?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
  },
  B13: {
    name: "섬진다원",
    instagram: "https://www.instagram.com/teahouse_sumjin?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
  },
  C2: {
    name: "연우제다",
    instagram: "https://www.instagram.com/younwoo.tea?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
  },
  C11: {
    name: "수제차전수관",
  },
  C12: {
    name: "백학제다",
    instagram: "https://www.instagram.com/teamansong?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
  },
  C13: {
    name: "붓당골제다",
    instagram: "https://www.instagram.com/bu_tea_teahouse?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
  },
  C19: {
    name: "산이리",
  },
  C24: {
    name: "소산도예",

  },
  C25: {
    name: "삐딱한 도자기 황제요",
  },
  C29: {
    name: "봉정요",
  },
  D6: {
    name: "삼신차 (발효차 전문다원)",
    instagram: "https://www.instagram.com/sstea_8008?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
  },
  D12: {
    name: "관아수제차",
    instagram: "https://www.instagram.com/gwana_tea_house?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
  },
  D17: {
    name: "산도방",
    instagram: "https://www.instagram.com/sandobang?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
  },
  D18: {
    name: "설도예",

  },
  D24: {
    name: "소랑요",
    instagram: "https://www.instagram.com/sorangyo?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
  },
  D26: {
    name: "알천도예",
  },
  E5: {
    name: "엄기순 금속전"
  },
  E6: {
    name: "스튜디오 세온",
  },
  E8: {
    name: "수니공방",
    instagram: "https://www.instagram.com/suni_silver_craft?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
  },
  E10: {
    name: "여송도예",
  },
  E13: {
    name: "무무요",
    instagram: "https://www.instagram.com/moomoo_studio?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
  },
  E18: {
    name: "부산광역시 공예협동조합 토산요",
    instagram: "https://www.instagram.com/tousanyo2870?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
  },
  E19: {
    name: "슬우재",
    instagram: "https://www.instagram.com/seulwoo_ceramic?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",

  },
  E20: {
    name: "부산광역시 공예협동조합 다솔도예",
    instagram: "https://www.instagram.com/dasoldoye?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
  },
  E27: {
    name: "백암요",
    instagram: "https://www.instagram.com/beagamyo?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
  },
  E29: {
    name: "송하요",
  },
  E30: {
    name: "수도예",
  },
  F7: {
    name: "연세라믹",
    instagram: "https://www.instagram.com/ceramist_yeon?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
  },
  F5: {
    name: "교문공방",
  },
  F12: {
    name: "삼정공방",
  },
  F13: {
    name: "송화도예",
  },
  F20: {
    name: "연화도방",
    instagram: "https://www.instagram.com/yeonhwadobang?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
  },
  F21: {
    name: "언양도예",
  },
  F26: {
    name: "소월백자",
    instagram: "https://www.instagram.com/park_sungmi_ceramist?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
  },
  F29: {
    name: "심곡요",
  },
  G5: {
    name: "글림피스",
    instagram: "https://www.instagram.com/glimpiece_official?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
  },
  G14: {
    name: "사계다향",
  },
  G22: {
    name: "상해구산지진차문화유한공사",
  },
  G23: {
    name: "아람드리",
  },
  G27: {
    name: "여원",
  },
  H1: {
    name: "보이차전문점 명가원",
    instagram: "https://www.instagram.com/myeonggawen_official?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
  },
  H5: {
    name: "선묘당",
  },
  H7: {
    name: "상명",
  },
  H10: {
    name: "석가명차 오운산고차",
    instagram: "https://www.instagram.com/owoonsan?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
  },
  H6: {
    name: "복향명차",
  },
  H12: {
    name: "아망시 프리미엄 티라운지",
    instagram: "https://www.instagram.com/amangsi.teahouse?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
  },
  H21: {
	  name: "(주) 차모아"
  },
  H24: {
    name: "수향 (대경팔공공예협동조합)",
  },
  A2: {
    name: "완도 청해진다원",
   instagram: "https://www.instagram.com/wando.teagarden?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
  },
  A3: {
  name: "현암제다",
  },
  A4: {
  name: "한국제다",
  },
  A5: {
  name: "제주차농",
  instagram: "https://www.instagram.com/jeju.chanong?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
  },
  A6: {
  name: "차인연합회",
  },
  A8: {
  name: "휘계차",
  },
  A17: {
  name: "가헌아트",
  },
  A19: {
  name: "장흥청태전(창흥다원)",
  },
  A21: {
  name: "한국토기",
  },
  A22: {
  name: "헬스베버리지",
  },
  A24: {
  name: "경주 남촌도예",
  instagram: "https://www.instagram.com/namchondoye?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
  },
  A25: {
  name: "트임&김진욱도예원",
  },
  A29: {
  name: "토라",
  instagram: "https://www.instagram.com/tora_ceramic_official?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
  },
  A31: {
  name: "정가로이",
  instagram: "https://www.instagram.com/jeong_garoi_pottery?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
  },
  A32: {
  name: "우기원",
  },
  A34: {
  name: "옻칠채",
  },
  A35: {
  name: "와락공방",
  },
  A37: {
  name: "자연으로 옹크씨",
  },
  A38: {
  name: "주앤안 (이든갤러리)",
  },
  A39: {
  name: "청도 천연염색연구회 감물드리",
  },
  A42: {
  name: "천연염색 미주사랑",
  },
  A43: {
  name: "풀과빛 (청도군 천연염색 연구회)",
  },
  A45: {
  name: "투다헌",
  instagram: "https://www.instagram.com/tuda_teastore?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
  },
  A46: {
  name: "오차연각",
  },
  A47: {
  name: "차문화협회",
  },
  A49: {
  name: "원유전통",
  },
  B3: {
  name: "천보다원",
  },
  B5: {
  name: "유기농 원당제다원",
  },
  B6: {
  name: "징광잎차",
  },
  B8: {
  name: "죽림다원",
  },
  B14: {
  name: "한국티산업경영연구원-차그리다",
  },
  B15: {
  name: "티 팔래트",
  instagram: "https://www.instagram.com/tea.palette.2019?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
  },
  B16: {
  name: "효월",
  instagram: "https://www.instagram.com/hyoworltea?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
  },
  B17: {
  name: "토정가(이조요) since 1940",
  },
  B18: {
  name: "황우요",
  },
  B19: {
  name: "청자,더 공유 / the0u",
  instagram: "https://www.instagram.com/the0u?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
  },
  B22: {
  name: "욱산도헌",
  },
  B24: {
  name: "가마공방",
  instagram: "https://www.instagram.com/gamagongbang?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
  },
  B28: {
  name: "한세은 도예공방",
  },
  C1: {
    name: "나주",
  },
  C3: {
  name: "티후",
  },
  C4: {
  name: "하동아낙 (LADY HADONG)",
  },
  C5: {
  name: "청석골감로다원",
  instagram: "https://www.instagram.com/isuyeongim?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
  },
  C8: {
  name: "쟈드리 TEA SHOP",
  instagram: "https://www.instagram.com/hadong_tea_jadelee?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
  },
  C9: {
  name: "웃차",
  instagram: "https://www.instagram.com/woot.cha?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
  },
  C10: {
  name: "찻잎마술/소암 茶",
  },
  C15: {
  name: "청학도방",
  },
  C16: {
  name: "황매산다원 허굴산방",
  },
  C20: {
  name: "오름오르다",
  instagram: "https://www.instagram.com/oremoreda_ceramic_studio?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
  },
  C22: {
  name: "조선백자",
  },
  C23: {
  name: "정요",
  },
  C28: {
  name: "채담요",
  },
  D1: {
  name: "일구다&요산당",
  instagram: "https://www.instagram.com/ilguda.tea?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
  },
  D2: {
  name: "곡천다원",
  },
  D3: {
  name: "황아차 용강 녹차",
  instagram: "https://www.instagram.com/just_as_it_is2015?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
  },
  D4: {
  name: "혜림 茶. 혜림농원",
  },
  D5: {
  name: "죽로은침",
  },
  D8: {
  name: "하동 휴심선차",
  instagram: "https://www.instagram.com/husimzentea?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
  },
  D9: {
  name: "조태연가 죽로차",
  },
  D10: {
  name: "한밭제다 차공간",
  instagram: "https://www.instagram.com/hanfarmtea?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
  },
  D15: {
    name: "금향다원",
    instagram: "https://www.instagram.com/geumhyang_tea?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
  },
  D16: {
  name: "차살림",
  },
  D19: {
    name: "해너울",
    instagram: "https://www.instagram.com/byunghan81?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
  },
  D21: {
  name: "우곡요",
  },
  D25: {
  name: "공림요",
  },
  D27: {
  name: "현암요",
  },
  D29: {
    name: "김동인",
  },
  D30: {
  name: "청림도요",
  },
  D31: {
  name: "영남요",
  },
  D32: {
  name: "포암요",
  },
  D33: {
    name: "기린공방",
  },
  E2: {
    name: "김천방짜유기 명인 이운형",
  },
  E3: {
  name: "이아뜰리에",
  },
  E4: {
  name: "경기한방꽃차협동조합",
  },
  E11: {
  name: "우림도예",
  },
  E12: {
  name: "효원도예",
  },
  E14: {
  name: "청욱요",
  },
  E15: {
    name: "김해예인요",
  },
  E17: {
  name: "예인요",
  },
  E21: {
    name: "김묘진",
  },
  E22: {
  name: "청담요",
  instagram: "https://www.instagram.com/cheongdamyo?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
  },
  E23: {
    name: "긍정공방",
  },
  E26: {
  name: "효향요",
  },
  E31: {
  name: "화경도요",
  },
  F1: {
  name: "자연을담다",
  },
  F2: {
  name: "경위복차 (가인갤러리)",
  },
  F3: {
    name: "Tea 진공밀폐용기 에스락",
  },
  F6: {
  name: "강동현",
  instagram: "https://www.instagram.com/kangdonghyun_ceramics_?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
  },
  F8: {
  name: "우기세라믹",
  instagram: "https://www.instagram.com/woogi__96?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
  },
  F9: {
    name: "날빛",
    instagram: "https://www.instagram.com/_nalbit?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
  },
  F10: {
  name: "청기백기",
  },
  F14: {
  name: "가람도예",
  },
  F15: {
  name: "고도산방",
  },
  F17: {
    name: "김해요",
  },
  F19: {
  name: "정호요",
  },
  F22: {
  name: "임의섭도예작업장",
  },
  F23: {
  name: "이치헌도예연구소",
  },
  F27: {
  name: "진곡요",
  },
  F30: {
  name: "침향나무",
  },
  F32: {
    name: "HaDa design(하다디자인)",
  },
  H2: {
   name: "차우림, 오래된 미래",
  },
  H3: {
   name: "한차원",
  },
  H4: {
   name: "예평",
   instagram: "https://www.instagram.com/yepyeong.tea?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
  },
  H8: {
   name: "죽평",
  },
  H11: {
    name: "덕화코리아",
  },
  H14: {
    name: "취죽진여실",
    instagram: "https://www.instagram.com/chwijuk?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
  },
  H15: {
    name: "휴다인",
  },
  H17: {
    name: "일삼차",
  },
  H18: {
    name: "하나실크로드티",
  },
  H20: {
    name: "주식회사 인센스월드",
    instagram: "https://www.instagram.com/incenseworld_official?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
  },
  H22: {
    name: "청도 천연앰색연구회 쪽빛나라",
  },
  H23: {
    name: "나은크래프트",
  },
  H25: {
    name: "고전문화",
    instagram: "https://www.instagram.com/1988tea?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
  },
  H26: {
    name: "계절사이로 (이오순 금침명인)",
  },
  G2: {
  name: "티하우스 나니",
  instagram: "https://www.instagram.com/teahousenani?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
  },
  G3: {
  name: "정산당",
  instagram: "https://www.instagram.com/lapsangstorekr?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
  },
  G4: {
  name: "재단법인 하동차&바이오진흥원",
  },
  G6: {
  name: "천년보이차",
  },
  G9: {
  name: "지유명차",
  instagram: "https://www.instagram.com/gallerygu.zisha?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
  },
  G13: {
  name: "틴지오브소울",
  instagram: "https://www.instagram.com/tinge.of.soul?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
  },
  G16: {
  name: "차세상 / 유산차방 한국총판",
  instagram: "https://www.instagram.com/cha_sesang?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
  },
  G20: {
  name: "포담 티하우스",
  instagram: "https://www.instagram.com/fodamteahouse?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
  },
  C14: {
    name: "노전요",
    instagram: "https://www.instagram.com/nojeon_yo?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
  },
  D22: {
    name: "녹주요",
    instagram: "https://www.instagram.com/nok_ju_yo/?utm_source=ig_web_button_share_sheet",
  },
  D13: {
    name: "농업회사법인 지리산 상선암차",
  },
  C18: {
    name: "누보도예",
    instagram: "https://www.instagram.com/nubopottery1996?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
  },
  G10: {
    name: "다견원",
  }, 
  F18: {
    name: "다경요",
  },    
  E16: {
    name: "다솜공방",
  },    
  G25: {
    name: "다심헌.AFTR",
  },   
  G7: {
    name: "다연재",
    instagram: "https://www.instagram.com/goodtealab_chayanzhai?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
  },  
  B11: {
    name: "다채",
  },  
  B26: {
    name: "대광도요",
    instagram: "https://www.instagram.com/daegwangdoyo?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
  }, 
  G1: {
    name: "대익코리아",
    instagram: "https://www.instagram.com/taetea_official?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
  }, 
  E1: {
    name: "대통령 표창 수상 꽃차 하늘바라기",
    instagram: "https://www.instagram.com/flower_tea_hanulbaragi?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
  },
  E25: {
    name: "더셰드",
  },  
  B27: {
    name: "도농도예",
  },  
  E28: {
    name: "도동요",
    instagram: "https://www.instagram.com/dodongyo?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
  },
  E24: {
    name: "도예명장2023-01호 영산요",
  },  
  C17: {
    name: "도자기마을(빛살)",
  },  
  D23: {
    name: "도유가",
    instagram: "https://www.instagram.com/doyouga_?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
  },  
  B25: {
    name: "도정요",
  },  
  G19: {
    name: "동심명차",
    instagram: "https://www.instagram.com/dongsim_myeongcha?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
  },  
  A20: {
    name: "동원공방",
  },  
  G15: {
    name: "동정보이차 노반차품",
  },  
  F28: {
    name: "드내뜰(이종주의 도자기)",
  },
  E7: {
    name: "따티(뷰닉스테크)",
  },  
  B23: {
    name: "뚜띨로공방",
  },
  F16: {
    name: "라세라미스타",
    instagram: "https://www.instagram.com/laceramista?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
  }, 
  C27: {
    name: "라키모",
  }, 
  G12: {
    name: "랑카티스(스리랑카 홍차)",
  }, 
  C6: {
    name: "로전",
    instagram: "https://www.instagram.com/rozeon_tea?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
  }, 
  D7: {
    name: "명성다원",
  }, 
  F25: {
    name: "모동도예",
    instagram: "https://www.instagram.com/modongyo?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
  }, 
  F31: {
    name: "모을 황선회도방",
  }, 
  B21: {
    name: "몽탄갤러리",
  }, 
  F4: {
    name: "묘차",
    instagram: "https://www.instagram.com/myo.cha?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
  },     
  B20: {
    name: "무결",
  }, 
  D14: {
    name: "무애(MUAE TEA)",
    instagram: "https://www.instagram.com/muaesanbang?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
  }, 
  F11: {
    name: "무유",
  }, 
  C26: {
    name: "문경 경북요",
    instagram: "https://www.instagram.com/pinetree07?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
  }, 
  D20: {
    name: "민토",
    instagram: "https://www.instagram.com/ceraminto?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
  }, 
  H9: {
    name: "밀밀홍",
  }, 
  G24: {
    name: "바이에드가",
    instagram: "https://www.instagram.com/_by_edgar?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
  }, 
  F24: {
    name: "박달요",
  }, 
  H27: {
    name: "반짇고리",
  },   
  E9: {
    name: "백산도예 연구소",
  }, 
  C21: {
    name: "보니다",
  },
  G18: {
    name: "北京妙香缘贸易有限公司 (북경 묘향연 무역 유한공사)",
  }, 
  G17: {
    name: "宜兴永盛陶艺茗壶堂 (의흥 영성 도예 명호당)",
  }, 
  H16: {
    name: "宜兴知了文化创意有限公司 (의흥 지료 문화창의 유한공사)",
  }, 
  G21: {
    name: "尹茶人 - YIN TEA (윤차인 - 인 티)",
  }, 
  H19: {
    name: "森桦陶瓷公司 (삼화 도자공사)",
  }, 
  H13: {
    name: "茗扬天下(명양천하) x 휴코퍼레이션 x 북경도사",
  },  
};

const layouts = [
  pxGroup(["B2", "B3"], 371, 938, 99, 35, 2),
  pxGroup(["B1"], 371, 973, 99, 35, 1),
  ...boothRows("B", 371, [843, 746, 638, 534, 431, 319, 215], [[4, 7], [8, 11], [12, 15], [16, 16], [17, 20], [21, 24], [25, 28]], 99),
  ...boothRows("C", 504, [938, 843, 638, 534, 431, 319, 215], [[1, 1], [2, 5], [10, 13], [14, 17], [18, 21], [22, 25], [26, 29]], 102),
  pxGroup(["C8", "C9"], 504, 746, 102, 35, 2),
  pxGroup(["C6"], 504, 781, 102, 35, 1),
  ...boothRows("D", 639, [938, 843, 746, 638, 534, 431, 215], [[1, 4], [5, 8], [9, 12], [13, 16], [17, 20], [21, 24], [30, 33]], 102),
  pxGroup(["D27", "D29"], 639, 319, 102, 35, 2),
  pxGroup(["D25", "D26"], 639, 354, 102, 40, 2),
  ...boothRows("E", 772, [938, 843, 746, 638, 534, 431, 215], [[1, 4], [5, 8], [9, 12], [13, 16], [17, 20], [21, 24], [28, 31]], 99),
  pxGroup(["E26"], 772, 319, 50, 35, 1),
  pxGroup(["E27"], 821, 319, 50, 74, 1),
  pxGroup(["E25"], 772, 354, 50, 39, 1),
  ...boothRows("F", 904, [938, 843, 746, 638, 534, 431, 319, 215], [[1, 4], [5, 8], [9, 12], [13, 16], [17, 20], [21, 24], [25, 28], [29, 32]], 99),
  ...boothRows("G", 1035, [938, 843, 638, 319, 215], [[1, 1], [2, 5], [10, 13], [20, 23], [24, 27]], 102),
  pxGroup(["G7", "G9"], 1035, 746, 102, 35, 2),
  pxGroup(["G6"], 1035, 781, 51, 35, 1),
  pxGroup(["G15", "G16"], 1035, 534, 102, 35, 2),
  pxGroup(["G14"], 1035, 569, 51, 40, 1),
  pxGroup(["G18", "G19"], 1035, 431, 102, 35, 2),
  pxGroup(["G17"], 1035, 466, 51, 40, 1),
  pxGroup(["H1"], 1176, 938, 78, 70, 1),
  pxGroup(["H3"], 1254, 938, 77, 35, 1),
  pxGroup(["H2"], 1254, 973, 77, 35, 1),
  pxGroup(["H4"], 1176, 843, 78, 70, 1),
  pxGroup(["H6"], 1254, 843, 77, 35, 1),
  pxGroup(["H5"], 1254, 878, 77, 35, 1),
  pxGroup(["H7"], 1176, 746, 78, 70, 1),
  pxGroup(["H9"], 1254, 746, 77, 35, 1),
  pxGroup(["H8"], 1254, 781, 77, 35, 1),
  pxGroup(["H10"], 1176, 638, 78, 70, 1),
  pxGroup(["H12"], 1254, 638, 77, 35, 1),
  pxGroup(["H11"], 1254, 673, 77, 35, 1),
  pxGroup(["H13"], 1176, 534, 78, 75, 1),
  pxGroup(["H15"], 1254, 534, 77, 35, 1),
  pxGroup(["H14"], 1254, 569, 77, 40, 1),
  pxGroup(["H17"], 1176, 431, 78, 35, 1),
  pxGroup(["H16"], 1176, 466, 78, 40, 1),
  pxGroup(["H18"], 1254, 431, 77, 75, 1),
  pxGroup(["H21", "H22", "H19", "H20"], 1176, 319, 155, 75, 2),
  pxGroup(["H25"], 1176, 215, 52, 35, 1),
  pxGroup(["H26"], 1228, 215, 52, 35, 1),
  pxGroup(["H27"], 1280, 215, 51, 35, 1),
  pxGroup(["H23"], 1176, 250, 52, 40, 1),
  pxGroup(["H24"], 1228, 250, 103, 40, 1),

  pxGroup(["A4"], 292, 768, 52, 45, 1),
  pxGroup(["A3", "A2", "A1"], 292, 838, 52, 132, 1),
  pxGroup(["A5"], 292, 739, 52, 45, 1),
  pxGroup(["A6"], 88, 740, 155, 35, 1),
  pxGroup(["A8"], 37, 534, 52, 37, 1),
  pxGroup(["A7"], 37, 571, 52, 204, 1),
  pxGroup(["A20"], 117, 534, 102, 35, 1),
  pxGroup(["A16", "A17"], 117, 569, 102, 40, 2),
  pxGroup(["A21", "A22", "A18", "A19"], 242, 534, 102, 75, 2),
  pxGroup(["A10", "A11"], 117, 642, 102, 35, 2),
  pxGroup(["A9"], 117, 677, 102, 40, 1),
  pxGroup(["A14", "A15", "A12", "A13"], 242, 642, 102, 75, 2),
  pxGroup(["A26", "A25"], 271, 215, 57, 81, 1),
  pxGroup(["A24", "A23"], 271, 328, 57, 86, 1),
  pxGroup(["A27", "A28"], 295, 143, 120, 39, 2),
  pxGroup(["A29", "A30"], 474, 143, 109, 39, 2),
  pxGroup(["A31", "A32"], 641, 143, 101, 39, 2),
  pxGroup(["A33", "A34"], 806, 143, 109, 39, 2),
  pxGroup(["A35", "A36"], 965, 143, 108, 39, 2),
  pxGroup(["A37", "A38"], 1124, 143, 101, 39, 2),
  pxGroup(["A39"], 1253, 143, 55, 49, 1),
  pxGroup(["A40"], 1366, 143, 55, 49, 1),
  pxGroup(["A41", "A42"], 1367, 215, 56, 81, 1),
  pxGroup(["A43"], 1367, 346, 56, 43, 1),
  pxGroup(["A44"], 1367, 389, 56, 115, 1),
  pxGroup(["A45"], 1367, 504, 56, 46, 1),
  pxGroup(["A46"], 1367, 591, 56, 48, 1),
  pxGroup(["A47"], 1367, 639, 56, 129, 1),
  pxGroup(["A48"], 1367, 768, 56, 46, 1),
  pxGroup(["A49"], 1367, 905, 56, 100, 1),
];

const booths = layouts.flatMap(makeBooths).sort((a, b) => a.id.localeCompare(b.id, "ko", { numeric: true }));
const boothById = new Map(booths.map((booth) => [booth.id, booth]));
let favorites = new Set(JSON.parse(localStorage.getItem(FAVORITES_KEY) || "[]"));
let selectedId = null;
let activeFilter = "all";
let activeSort = DEFAULT_SORT;
let lastSingleSearchKey = "";
let didAutoZoomForSearch = false;

const searchInput = document.querySelector("#searchInput");
const clearSearch = document.querySelector("#clearSearch");
const appShell = document.querySelector(".app-shell");
const boothList = document.querySelector("#boothList");
const initialIndex = document.querySelector("#initialIndex");
const hotspots = document.querySelector("#hotspots");
const mapZoomFrame = document.querySelector("#mapZoomFrame");
const detailPanel = document.querySelector("#detailPanel");
const detailContent = document.querySelector("#detailContent");
const resultCount = document.querySelector("#resultCount");
const filterButtons = document.querySelectorAll(".filter-chip");
const sortButtons = document.querySelectorAll(".sort-button");
const mapScroller = document.querySelector("#mapScroller");
const mapListDivider = document.querySelector("#mapListDivider");
const zoomLevel = document.querySelector("#zoomLevel");
const detailDragHandle = document.querySelector("#detailDragHandle");
let mapZoom = DEFAULT_ZOOM;
let mapPanX = 0;
let mapPanY = 0;
let dragState = null;
let mapResizeState = null;
const mapPointers = new Map();
let pinchState = null;
let panState = null;
let touchGestureState = null;
let suppressHotspotClick = false;

renderHotspots();
syncSortButtons();
renderList();
renderInitialIndex(booths);
setMapZoom(mapZoom);

searchInput.addEventListener("input", () => {
  syncClearSearchButton();
  renderList();
});
clearSearch.addEventListener("click", () => {
  searchInput.value = "";
  syncClearSearchButton();
  renderList();
  searchInput.focus();
});
document.querySelector("#closeDetail").addEventListener("click", () => {
  selectedId = null;
  detailPanel.classList.remove("open");
  renderHotspots();
  renderList();
});
document.querySelector("#clearFavorites").addEventListener("click", () => {
  favorites = new Set();
  persistFavorites();
  renderHotspots();
  renderList();
  renderDetail();
});
document.querySelector("#fitMap").addEventListener("click", () => {
  setMapZoom(DEFAULT_ZOOM);
  setMapPan(0, 0);
  mapScroller.scrollTo({ left: 0, top: 0, behavior: "smooth" });
});
detailDragHandle.addEventListener("pointerdown", startDetailDrag);
window.addEventListener("pointermove", moveDetailPanel);
window.addEventListener("pointerup", stopDetailDrag);
mapScroller.addEventListener("pointerdown", startMapGesture);
mapScroller.addEventListener("pointermove", moveMapGesture);
mapScroller.addEventListener("pointerup", endMapGesture);
mapScroller.addEventListener("pointercancel", endMapGesture);
mapScroller.addEventListener("touchstart", startTouchMapGesture, { passive: false });
mapScroller.addEventListener("touchmove", moveTouchMapGesture, { passive: false });
mapScroller.addEventListener("touchend", endTouchMapGesture);
mapScroller.addEventListener("touchcancel", endTouchMapGesture);
mapListDivider.addEventListener("pointerdown", startMapResize);
window.addEventListener("pointermove", moveMapResize);
window.addEventListener("pointerup", stopMapResize);

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    activeFilter = button.dataset.filter;
    filterButtons.forEach((item) => item.classList.toggle("active", item === button));
    renderList();
  });
});

sortButtons.forEach((button) => {
  button.addEventListener("click", () => {
    activeSort = button.dataset.sort;
    syncSortButtons();
    renderList();
  });
});

function range(prefix, start, end) {
  return Array.from({ length: end - start + 1 }, (_, index) => `${prefix}${start + index}`);
}

function setMapZoom(nextZoom, anchor = null) {
  const previousZoom = mapZoom;
  mapZoom = Math.min(MAX_ZOOM, Math.max(MIN_ZOOM, Number(nextZoom.toFixed(2))));
  if (anchor && mapZoom !== previousZoom) {
    const zoomRatio = mapZoom / previousZoom;
    mapPanX = anchor.x - (anchor.x - mapPanX) * zoomRatio;
    mapPanY = anchor.y - (anchor.y - mapPanY) * zoomRatio;
  }

  updateMapTransform();
  zoomLevel.textContent = `${Math.round(mapZoom * 100)}%`;
}

function setMapPan(nextX, nextY) {
  mapPanX = nextX;
  mapPanY = nextY;
  updateMapTransform();
}

function updateMapTransform() {
  mapZoomFrame.style.setProperty("--map-zoom", mapZoom);
  mapZoomFrame.style.setProperty("--map-pan-x", `${Math.round(mapPanX)}px`);
  mapZoomFrame.style.setProperty("--map-pan-y", `${Math.round(mapPanY)}px`);
}

function startMapGesture(event) {
  mapPointers.set(event.pointerId, { x: event.clientX, y: event.clientY });
  mapScroller.setPointerCapture(event.pointerId);
  const hotspotId = getHotspotIdFromTarget(event.target);

  if (mapPointers.size === 1) {
    panState = {
      pointerId: event.pointerId,
      hotspotId,
      x: event.clientX,
      y: event.clientY,
      panX: mapPanX,
      panY: mapPanY,
      moved: false,
    };
    mapScroller.classList.add("dragging");
  }

  if (mapPointers.size === 2) {
    event.preventDefault();
    panState = null;
    const points = [...mapPointers.values()];
    const center = getGestureCenter(points);
    const scrollerRect = mapScroller.getBoundingClientRect();
    pinchState = {
      distance: getGestureDistance(points),
      zoom: mapZoom,
      anchor: {
        x: center.x - scrollerRect.left,
        y: center.y - scrollerRect.top,
      },
    };
  }
}

function moveMapGesture(event) {
  if (!mapPointers.has(event.pointerId)) return;
  mapPointers.set(event.pointerId, { x: event.clientX, y: event.clientY });

  if (mapPointers.size === 1 && panState?.pointerId === event.pointerId) {
    event.preventDefault();
    const deltaX = event.clientX - panState.x;
    const deltaY = event.clientY - panState.y;
    panState.moved = panState.moved || Math.hypot(deltaX, deltaY) > 6;
    setMapPan(panState.panX + deltaX, panState.panY + deltaY);
    return;
  }

  if (mapPointers.size < 2 || !pinchState) return;
  event.preventDefault();
  const points = [...mapPointers.values()];
  const distance = getGestureDistance(points);
  if (pinchState.distance <= 0) return;
  setMapZoom(pinchState.zoom * (distance / pinchState.distance), pinchState.anchor);
}

function endMapGesture(event) {
  mapPointers.delete(event.pointerId);
  if (mapScroller.hasPointerCapture(event.pointerId)) {
    mapScroller.releasePointerCapture(event.pointerId);
  }
  if (mapPointers.size < 2) {
    pinchState = null;
  }
  if (panState?.pointerId === event.pointerId) {
    suppressHotspotClick = panState.moved;
    if (!panState.moved && panState.hotspotId) {
      suppressHotspotClick = false;
      selectBooth(panState.hotspotId, { pan: false });
    }
    panState = null;
  }
  if (!panState) {
    mapScroller.classList.remove("dragging");
  }
}

function getGestureDistance(points) {
  return Math.hypot(points[0].x - points[1].x, points[0].y - points[1].y);
}

function getGestureCenter(points) {
  return {
    x: (points[0].x + points[1].x) / 2,
    y: (points[0].y + points[1].y) / 2,
  };
}

function startTouchMapGesture(event) {
  if (event.touches.length === 1) {
    const touch = event.touches[0];
    touchGestureState = {
      mode: "pan",
      hotspotId: getHotspotIdFromTarget(event.target),
      x: touch.clientX,
      y: touch.clientY,
      panX: mapPanX,
      panY: mapPanY,
      moved: false,
    };
    return;
  }

  if (event.touches.length === 2) {
    event.preventDefault();
    const points = getTouchPoints(event.touches);
    const center = getGestureCenter(points);
    const scrollerRect = mapScroller.getBoundingClientRect();
    touchGestureState = {
      mode: "pinch",
      distance: getGestureDistance(points),
      zoom: mapZoom,
      anchor: {
        x: center.x - scrollerRect.left,
        y: center.y - scrollerRect.top,
      },
    };
  }
}

function moveTouchMapGesture(event) {
  if (!touchGestureState) return;

  if (event.touches.length === 1 && touchGestureState.mode === "pan") {
    event.preventDefault();
    const touch = event.touches[0];
    const deltaX = touch.clientX - touchGestureState.x;
    const deltaY = touch.clientY - touchGestureState.y;
    touchGestureState.moved = touchGestureState.moved || Math.hypot(deltaX, deltaY) > 6;
    setMapPan(touchGestureState.panX + deltaX, touchGestureState.panY + deltaY);
    return;
  }

  if (event.touches.length === 2) {
    event.preventDefault();
    const points = getTouchPoints(event.touches);

    if (touchGestureState.mode !== "pinch") {
      const center = getGestureCenter(points);
      const scrollerRect = mapScroller.getBoundingClientRect();
      touchGestureState = {
        mode: "pinch",
        distance: getGestureDistance(points),
        zoom: mapZoom,
        anchor: {
          x: center.x - scrollerRect.left,
          y: center.y - scrollerRect.top,
        },
      };
      return;
    }

    const distance = getGestureDistance(points);
    if (touchGestureState.distance <= 0) return;
    setMapZoom(touchGestureState.zoom * (distance / touchGestureState.distance), touchGestureState.anchor);
  }
}

function endTouchMapGesture(event) {
  if (event.touches.length === 0) {
    if (touchGestureState?.mode === "pan") {
      suppressHotspotClick = touchGestureState.moved;
      if (!touchGestureState.moved && touchGestureState.hotspotId) {
        suppressHotspotClick = false;
        selectBooth(touchGestureState.hotspotId, { pan: false });
      }
    }
    touchGestureState = null;
    return;
  }

  if (event.touches.length === 1) {
    const touch = event.touches[0];
    touchGestureState = {
      mode: "pan",
      hotspotId: getHotspotIdFromTarget(event.target),
      x: touch.clientX,
      y: touch.clientY,
      panX: mapPanX,
      panY: mapPanY,
      moved: false,
    };
  }
}

function getTouchPoints(touches) {
  return Array.from(touches, (touch) => ({
    x: touch.clientX,
    y: touch.clientY,
  }));
}

function getHotspotIdFromTarget(target) {
  return target instanceof Element ? target.closest(".hotspot")?.dataset.id || "" : "";
}

function startMapResize(event) {
  if (!window.matchMedia("(max-width: 920px)").matches) return;

  event.preventDefault();
  const shellRect = appShell.getBoundingClientRect();
  mapResizeState = {
    pointerId: event.pointerId,
    shellTop: shellRect.top,
    shellHeight: shellRect.height,
  };
  mapListDivider.setPointerCapture(event.pointerId);
  document.body.classList.add("resizing-map");
}

function moveMapResize(event) {
  if (!mapResizeState) return;

  event.preventDefault();
  const minHeight = window.matchMedia("(max-width: 560px)").matches ? 220 : 260;
  const maxHeight = Math.max(minHeight, mapResizeState.shellHeight - 220);
  const nextHeight = Math.min(maxHeight, Math.max(minHeight, event.clientY - mapResizeState.shellTop));
  appShell.style.setProperty("--mobile-map-height", `${Math.round(nextHeight)}px`);
}

function stopMapResize() {
  if (!mapResizeState) return;
  if (mapListDivider.hasPointerCapture(mapResizeState.pointerId)) {
    mapListDivider.releasePointerCapture(mapResizeState.pointerId);
  }
  mapResizeState = null;
  document.body.classList.remove("resizing-map");
}

function pxGroup(ids, left, top, width, height, cols = 2, yOffset = BOOTH_Y_OFFSET) {
  const adjustedTop = top + yOffset;
  return {
    ids,
    x: ((left + width / 2) / MAP_WIDTH) * 100,
    y: ((adjustedTop + height / 2) / MAP_HEIGHT) * 100,
    w: (width / MAP_WIDTH) * 100,
    h: (height / MAP_HEIGHT) * 100,
    cols,
  };
}

function boothRows(prefix, left, topPositions, ranges, width = 99) {
  return ranges.map(([start, end], index) => {
    const count = end - start + 1;
    const ids = count === 1 ? [`${prefix}${start}`] : orderedBlock(prefix, start, end);
    return pxGroup(ids, left, topPositions[index], width, count === 1 ? 72 : 76, count === 1 ? 1 : 2);
  });
}

function orderedBlock(prefix, start, end) {
  const count = end - start + 1;
  if (count === 3) {
    return [`${prefix}${start + 2}`, `${prefix}${start}`, `${prefix}${start + 1}`];
  }
  if (count === 4) {
    return [`${prefix}${start + 2}`, `${prefix}${start + 3}`, `${prefix}${start}`, `${prefix}${start + 1}`];
  }
  if (count === 5) {
    return [`${prefix}${start + 2}`, `${prefix}${start + 4}`, `${prefix}${start}`, `${prefix}${start + 1}`, `${prefix}${start + 3}`];
  }
  return range(prefix, start, end);
}

function makeBooths(layout) {
  const rows = Math.ceil(layout.ids.length / layout.cols);
  const cellW = layout.w / layout.cols;
  const cellH = layout.h / rows;
  return layout.ids.map((id, index) => {
    const col = index % layout.cols;
    const row = Math.floor(index / layout.cols);
    const zone = id.slice(0, 1);
    const custom = featured[id] || {};
    return {
      id,
      name: custom.name || `${categoryByZone[zone]} ${id}`,
      category: categoryByZone[zone],
      summary: custom.summary || "",
      instagram: custom.instagram || "",
      event: custom.event || "",
      tags: [zone, categoryByZone[zone], custom.event ? "이벤트" : "안내"],
      x: layout.x - layout.w / 2 + cellW * col + cellW / 2,
      y: layout.y - layout.h / 2 + cellH * row + cellH / 2,
      w: Math.max(cellW * 0.88, 2.3),
      h: Math.max(cellH * 0.82, 2.8),
    };
  });
}

function renderHotspots() {
  hotspots.innerHTML = booths
    .map(
      (booth) => `
        <button
          class="hotspot ${favorites.has(booth.id) ? "favorite" : ""} ${booth.id === selectedId ? "selected" : ""}"
          type="button"
          data-id="${booth.id}"
          title="${booth.id} ${booth.name}"
          style="left:${booth.x}%;top:${booth.y}%;width:${booth.w}%;height:${booth.h}%"
        >${booth.id}</button>
      `,
    )
    .join("");

  hotspots.querySelectorAll(".hotspot").forEach((button) => {
    button.addEventListener("click", (event) => {
      if (suppressHotspotClick) {
        event.preventDefault();
        suppressHotspotClick = false;
        return;
      }
      selectBooth(button.dataset.id, { pan: false });
    });
  });
}

function renderList() {
  syncClearSearchButton();
  const query = searchInput.value.trim().toLowerCase();
  const filtered = booths
    .filter((booth) => {
      const haystack = `${booth.id} ${booth.name} ${booth.category} ${booth.summary} ${booth.event}`.toLowerCase();
      const matchesQuery = !query || haystack.includes(query);
      const matchesFilter =
        activeFilter === "all" ||
        (activeFilter === "favorites" && favorites.has(booth.id)) ||
        (activeFilter === "event" && Boolean(booth.event));
      return matchesQuery && matchesFilter;
    })
    .sort(compareBooths);

  resultCount.textContent = `${filtered.length}개 부스`;
  boothList.parentElement.classList.toggle("alphabet-mode", activeSort === "name");
  boothList.innerHTML =
    filtered.length > 0
      ? filtered.map(renderBoothCard).join("")
      : `<div class="empty-state">조건에 맞는 부스가 없습니다.</div>`;
  renderInitialIndex(filtered);

  boothList.querySelectorAll(".booth-card").forEach((card) => {
    card.addEventListener("click", () => selectBooth(card.dataset.id, { pan: true }));
  });

  boothList.querySelectorAll(".favorite-button").forEach((button) => {
    button.addEventListener("click", (event) => {
      event.stopPropagation();
      toggleFavorite(button.dataset.id);
    });
  });

  focusSingleSearchResult(filtered, query);
}

function syncClearSearchButton() {
  searchInput.parentElement.classList.toggle("has-value", searchInput.value.length > 0);
}

function renderBoothCard(booth) {
  return `
    <button
      class="booth-card ${booth.id === selectedId ? "selected" : ""}"
      type="button"
      data-id="${booth.id}"
      data-initial="${getInitialGroup(booth.name)}"
    >
      <span class="booth-card-main">
        <h3>
          <span class="booth-number zone-${booth.id.slice(0, 1)}">${booth.id}</span>
          <span class="booth-name">${booth.name}</span>
        </h3>
      </span>
      <span class="favorite-button ${favorites.has(booth.id) ? "active" : ""}" data-id="${booth.id}" role="button" aria-label="즐겨찾기">★</span>
    </button>
  `;
}

function compareBooths(a, b) {
  if (activeSort === "booth") {
    return a.id.localeCompare(b.id, "ko", { numeric: true }) || a.name.localeCompare(b.name, "ko");
  }
  return a.name.localeCompare(b.name, "ko") || a.id.localeCompare(b.id, "ko", { numeric: true });
}

function syncSortButtons() {
  sortButtons.forEach((button) => {
    button.classList.toggle("active", button.dataset.sort === activeSort);
  });
}

function renderInitialIndex(items) {
  const available = new Set(items.map((booth) => getInitialGroup(booth.name)));
  initialIndex.innerHTML = INITIAL_INDEX.map(
    (initial) => `
      <button
        class="initial-button"
        type="button"
        data-initial="${initial}"
        ${available.has(initial) ? "" : "disabled"}
      >${initial}</button>
    `,
  ).join("");

  initialIndex.querySelectorAll(".initial-button").forEach((button) => {
    button.addEventListener("click", () => scrollToInitial(button.dataset.initial));
  });
}

function getInitialGroup(text) {
  const first = text.trim().charAt(0);
  const code = first.charCodeAt(0);
  if (code >= 0xac00 && code <= 0xd7a3) {
    const initial = HANGUL_INITIALS[Math.floor((code - 0xac00) / 588)];
    return INITIAL_INDEX.includes(initial) ? initial : "기타";
  }
  return "기타";
}

function scrollToInitial(initial) {
  const target = boothList.querySelector(`[data-initial="${CSS.escape(initial)}"]`);
  target?.scrollIntoView({ behavior: "smooth", block: "start" });
}

function focusSingleSearchResult(filtered, query) {
  if (!query || filtered.length !== 1) {
    if (didAutoZoomForSearch && filtered.length > 1) {
      setMapZoom(DEFAULT_ZOOM);
      setMapPan(0, 0);
      mapScroller.scrollTo({ left: 0, top: 0, behavior: "smooth" });
    }
    lastSingleSearchKey = "";
    didAutoZoomForSearch = false;
    return;
  }

  const booth = filtered[0];
  const searchKey = `${query}:${booth.id}`;
  if (searchKey === lastSingleSearchKey) return;
  lastSingleSearchKey = searchKey;

  setMapZoom(Math.max(mapZoom, SEARCH_FOCUS_ZOOM));
  didAutoZoomForSearch = true;
  requestAnimationFrame(() => {
    const hotspot = hotspots.querySelector(`[data-id="${CSS.escape(booth.id)}"]`);
    if (!hotspot) return;

    hotspot.scrollIntoView({ behavior: "smooth", block: "center", inline: "center" });
    hotspot.classList.remove("search-flash");
    void hotspot.offsetWidth;
    hotspot.classList.add("search-flash");
    window.setTimeout(() => hotspot.classList.remove("search-flash"), 3000);
  });
}

function selectBooth(id, options = {}) {
  selectedId = id;
  renderHotspots();
  renderList();
  renderDetail();
  detailPanel.classList.add("open");
  requestAnimationFrame(keepDetailPanelInView);

  if (options.pan) {
    const hotspot = hotspots.querySelector(`[data-id="${CSS.escape(id)}"]`);
    hotspot?.scrollIntoView({ behavior: "smooth", block: "center", inline: "center" });
  }
}

function startDetailDrag(event) {
  const rect = detailPanel.getBoundingClientRect();
  dragState = {
    pointerId: event.pointerId,
    offsetX: event.clientX - rect.left,
    offsetY: event.clientY - rect.top,
  };
  detailDragHandle.setPointerCapture(event.pointerId);
  detailPanel.classList.add("dragging");
}

function moveDetailPanel(event) {
  if (!dragState) return;
  const panelWidth = detailPanel.offsetWidth;
  const panelHeight = detailPanel.offsetHeight;
  const left = Math.min(window.innerWidth - panelWidth - 8, Math.max(8, event.clientX - dragState.offsetX));
  const top = Math.min(window.innerHeight - panelHeight - 8, Math.max(8, event.clientY - dragState.offsetY));

  detailPanel.style.left = `${left}px`;
  detailPanel.style.top = `${top}px`;
  detailPanel.style.right = "auto";
  detailPanel.style.bottom = "auto";
}

function keepDetailPanelInView() {
  if (!detailPanel.classList.contains("open")) return;

  const rect = detailPanel.getBoundingClientRect();
  const panelWidth = detailPanel.offsetWidth;
  const panelHeight = detailPanel.offsetHeight;
  const left = Math.min(window.innerWidth - panelWidth - 8, Math.max(8, rect.left));
  const top = Math.min(window.innerHeight - panelHeight - 8, Math.max(8, rect.top));

  detailPanel.style.left = `${left}px`;
  detailPanel.style.top = `${top}px`;
  detailPanel.style.right = "auto";
  detailPanel.style.bottom = "auto";
}

function stopDetailDrag(event) {
  if (!dragState) return;
  if (detailDragHandle.hasPointerCapture(dragState.pointerId)) {
    detailDragHandle.releasePointerCapture(dragState.pointerId);
  }
  dragState = null;
  detailPanel.classList.remove("dragging");
}

function renderDetail() {
  const booth = boothById.get(selectedId);
  if (!booth) {
    detailContent.innerHTML = "";
    return;
  }

  detailContent.innerHTML = `
    <p class="detail-kicker">${booth.id}</p>
    <h2>${booth.name}</h2>
    ${booth.summary ? `<p>${booth.summary}</p>` : ""}
    ${booth.event ? `<p><strong>이벤트</strong><br />${booth.event}</p>` : ""}
    <div class="detail-actions">
      ${booth.instagram ? `<a class="action-link" href="${booth.instagram}" target="_blank" rel="noreferrer">Instagram</a>` : ""}
      <button class="${favorites.has(booth.id) ? "active" : ""}" type="button" data-detail-favorite>
        ${favorites.has(booth.id) ? "즐겨찾기 해제" : "즐겨찾기"}
      </button>
    </div>
  `;

  detailContent.querySelector("[data-detail-favorite]").addEventListener("click", () => toggleFavorite(booth.id));
}

function toggleFavorite(id) {
  if (favorites.has(id)) {
    favorites.delete(id);
  } else {
    favorites.add(id);
  }
  persistFavorites();
  renderHotspots();
  renderList();
  renderDetail();
}

function persistFavorites() {
  localStorage.setItem(FAVORITES_KEY, JSON.stringify([...favorites]));
}
