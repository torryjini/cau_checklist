//Get the button "top" 버튼 관련
var mybutton = document.getElementById("TopBtn");

// When the user scrolls down 10px from the top of the document, show the button
window.onscroll = function() {
  scrollFunction()
};

function scrollFunction() {
  if (document.body.scrollTop > 10 || document.documentElement.scrollTop > 10) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

function maxLengthCheck(object) {
  if (object.value.length > object.maxLength) {
    object.value = object.value.slice(0, object.maxLength);
  }
}

function Form_Reset(id) {
  document.getElementById(id).reset();
}

function majorselectreset() {
  num = new Array("--");
  vnum = new Array("none");

  for (i = 0; i = document.getElementById("Major_select").length; i++) {
    document.getElementById("Major_select").options[0] = null;
  };

  for (i = 0; i < num.length; i++) {
    document.getElementById("Major_select").options[i] = new Option(num[i], vnum[i]);
  }
}

function MajortableReset() {
  document.getElementById("double_table").style.display = "none";
  document.getElementById("link_table").style.display = "none";
  document.getElementById("fusion_table").style.display = "none";
  document.getElementById("plan_table").style.display = "none";
}

function numbercolor(st, number) {
  var standard = Number(document.getElementById(st).value);
  var point = Number(document.getElementById(number).value);
  if (point >= standard) {
    document.getElementById(number).style.color = "blue";
  } else {
    document.getElementById(number).style.color = "red";
  }
}

function gpacolor() {
  var point = Number(document.getElementById("average").value);
  if (point >= 2) {
    document.getElementById("average").style.color = "blue";
  } else {
    document.getElementById("average").style.color = "red";
  }
}

function libcolorreset() {
  document.getElementById("common_kor").style.color = "red";
  document.getElementById("common_eng").style.color = "red";
  document.getElementById("common_etc").style.color = "red";
}

function Liberal_Sum() {
  var AdYear = Number(document.getElementById("ad-year").value);
  var College = document.getElementById("college_select").value;
  var elective_point = Number(document.getElementById("elective_liberal").value);
  var common_kor_point = Number(document.getElementById("common_kor").value);
  var common_eng_point = Number(document.getElementById("common_eng").value);
  var common_etc_point = Number(document.getElementById("common_etc").value);
  var core_total_point = Number(document.getElementById("core_total").value);
  var MACH1 = Number(document.getElementById("mach1").value);
  var MACH2 = Number(document.getElementById("mach2").value);
  if (AdYear >= 2015 && AdYear <= 2018 && College == "ict") {
    document.getElementById("liberal_total").value = elective_point + common_kor_point + common_eng_point + common_etc_point + core_total_point + MACH1 + MACH2;
  } else {
    document.getElementById("liberal_total").value = elective_point + common_kor_point + common_eng_point + common_etc_point + core_total_point;
  }
}

function Lib_st_Sum() {
  var AdYear = Number(document.getElementById("ad-year").value);
  var College = document.getElementById("college_select").value;
  var elec_st = Number(document.getElementById("elective_st").value);
  var kor_st = Number(document.getElementById("com_kor_st").value);
  var eng_st = Number(document.getElementById("com_eng_st").value);
  var etc_st = Number(document.getElementById("com_etc_st").value);
  var core_st = Number(document.getElementById("core_st").value);
  var MACH1_st = Number(document.getElementById("mach1_st").value);
  var MACH2_st = Number(document.getElementById("mach2_st").value);
  var Engin = ["engineering", "ict", "ict1617", "ict18", "software"]

  if (AdYear >= 2015 && AdYear <= 2018 && Engin.includes(College)) {
    document.getElementById("total_lib_st").value = elec_st + kor_st + eng_st + etc_st + core_st + MACH1_st + MACH2_st;
  } else {
    document.getElementById("total_lib_st").value = elec_st + kor_st + eng_st + etc_st + core_st;
  }
}

function etcchange() {
  var AdYear = Number(document.getElementById("ad-year").value);
  var College = document.getElementById("college_select").value;
  var Engin = ["engineering", "ict", "ict1617", "ict18", "software"]
  if (AdYear >= 2016 && AdYear <= 2018 && Engin.includes(College)) {
    document.getElementById("com_etc_st").value = 8;
    document.getElementById("etc_max").value = 8;
    Lib_st_Sum();
  } else {
    document.getElementById("com_etc_st").value = 10;
    document.getElementById("etc_max").value = 10;
    Lib_st_Sum();
  }
}

function machshow() {
  var AdYear = document.getElementById("ad-year").value;
  var College = document.getElementById("college_select").value;
  var ICT = ["ict", "ict1617", "ict18"]

  if (AdYear >= 2015 && AdYear <= 2018 && ICT.includes(College)) {
    document.getElementById("mach1_table").style.display = "";
    document.getElementById("mach1").readOnly = false;
    document.getElementById("mach1_none").checked = false;
    document.getElementById("mach1_st").value = "4";

    document.getElementById("mach2_table").style.display = "";
    document.getElementById("mach2").readOnly = false;
    document.getElementById("mach2_none").checked = false;
    document.getElementById("mach2_st").value = "2";

    Lib_st_Sum();
  } else {
    document.getElementById("mach1_table").style.display = "none";
    document.getElementById("mach1").readOnly = true;
    document.getElementById("mach1").value = null;
    document.getElementById("mach1_none").checked = true;
    document.getElementById("mach1_st").value = "0";

    document.getElementById("mach2_table").style.display = "none";
    document.getElementById("mach2").value = null;
    document.getElementById("mach2").readOnly = true;
    document.getElementById("mach2_none").checked = true;
    document.getElementById("mach2_st").value = "0";

    Lib_st_Sum();
  }
}

function teachingcheck() { //교직과정 설치 학과 구분
  var teachingmajor = ["education", "ece", "englishedu", "pe",
    "korean", "english", "german", "russia", "japan", "china", "philosophy", "history",
    "psyche", "lis", "physics", "chemistry", "bio-science", "math"
  ]
  var major = document.getElementById("Major_select").value;
  if (teachingmajor.includes(major)) {
    document.getElementById("teaching_point").readOnly = false;
    document.getElementById("teaching_none").checked = false;
  } else {
    document.getElementById("teaching_point").value = 0;
    document.getElementById("teaching_point").readOnly = true;
    document.getElementById("teaching_none").checked = true;
  }
}

function total_point_sum() {
  var LiberalTotal = Number(document.getElementById("liberal_total").value);
  var Basepoint = Number(document.getElementById("base_input").value);
  var Majorpoint = Number(document.getElementById("major_input").value);
  var Doublepoint = Number(document.getElementById("double_major_point").value);
  var Linkpoint = Number(document.getElementById("link_major_point").value);
  var Fusionpoint = Number(document.getElementById("fusion_major_point").value);
  var Planpoint = Number(document.getElementById("plan_major_point").value);
  var Minorpoint = Number(document.getElementById("minor_point").value);
  var Freepoint = Number(document.getElementById("free_point").value);
  var Teachpoint = Number(document.getElementById("teaching_point").value);
  if (LiberalTotal > 45) {
    document.getElementById("the_total").value = 45 + Basepoint + Majorpoint + Doublepoint + Linkpoint + Fusionpoint + Planpoint + Minorpoint + Freepoint + Teachpoint;
  } else {
    document.getElementById("the_total").value = LiberalTotal + Basepoint + Majorpoint + Doublepoint + Linkpoint + Fusionpoint + Planpoint + Minorpoint + Freepoint + Teachpoint;
  }
}

//연도별 대학 변환
function yearchanges1214() {
  var fr = document.getElementById("ad-year").value;
  if (fr == 2012) {
    num = new Array("--", "인문대학", "사회과학대학", "사범대학", "자연과학대학", "공과대학", "경영경제대학");
    vnum = new Array("none", "humanity", "society", "edu", "natural", "engineering12", "bne");
  } else if (fr >= 2013) {
    num = new Array("--", "인문대학", "사회과학대학", "사범대학", "자연과학대학", "공과대학", "경영경제대학");
    vnum = new Array("none", "humanity", "society", "edu", "natural", "engineering", "bne");
  } else if (fr == "0") {
    num = new Array("--");
    vnum = new Array("none");
  }

  for (i = 0; i = document.getElementById("college_select").length; i++) {
    document.getElementById("college_select").options[0] = null;
  };

  for (i = 0; i < num.length; i++) {
    document.getElementById("college_select").options[i] = new Option(num[i], vnum[i]);
  }
}

function yearchanges() {
  var fr = document.getElementById("ad-year").value;
  if (fr == 2016 || fr == 2017) {
    num = new Array("--", "인문대학", "사회과학대학", "사범대학", "자연과학대학", "공과대학", "창의ICT공과대학", "경영경제대학");
    vnum = new Array("none", "humanity", "society", "edu", "natural", "engineering", "ict1617", "bne");
  } else if (fr == 2018) {
    num = new Array("--", "인문대학", "사회과학대학", "사범대학", "자연과학대학", "공과대학", "창의ICT공과대학", "경영경제대학");
    vnum = new Array("none", "humanity", "society", "edu", "natural", "engineering", "ict18", "bne");
  } else if (fr >= 2019) {
    num = new Array("--", "인문대학", "사회과학대학", "사범대학", "자연과학대학", "공과대학", "창의ICT공과대학", "소프트웨어대학", "경영경제대학");
    vnum = new Array("none", "humanity", "society", "edu", "natural", "engineering", "ict", "software", "bne");
  } else if (fr == "0") {
    num = new Array("--");
    vnum = new Array("none");
  }

  for (i = 0; i = document.getElementById("college_select").length; i++) {
    document.getElementById("college_select").options[0] = null;
  };

  for (i = 0; i < num.length; i++) {
    document.getElementById("college_select").options[i] = new Option(num[i], vnum[i]);
  }
}

function tr_yearchanges() {
  var fr = document.getElementById("ad-year").value;
  if (fr >= 2017) {
    num = new Array("--", "인문대학", "사회과학대학", "사범대학", "자연과학대학", "공과대학", "창의ICT공과대학", "경영경제대학");
    vnum = new Array("none", "humanity", "society", "edu", "natural", "engineering", "ict", "bne");
  } else if (fr == "0") {
    num = new Array("--");
    vnum = new Array("none");
  }

  for (i = 0; i = document.getElementById("college_select").length; i++) {
    document.getElementById("college_select").options[0] = null;
  };

  for (i = 0; i < num.length; i++) {
    document.getElementById("college_select").options[i] = new Option(num[i], vnum[i]);
  }
}

//대학별 학과 변환
function collegechanges1214() {
  var fr = document.getElementById("college_select").value;
  if (fr == "humanity") {
    num = new Array("--", "국어국문학과", "영어영문학과", "유럽문화_독일어문학", "유럽문화_프랑스어문학", "유럽문화_러시아어문학", "아시아문화_일본어문학", "아시아문화_중국어문학", "철학과", "역사학과");
    vnum = new Array("none", "korean", "english", "german", "france", "russia", "japan", "china", "philosophy", "history");
  } else if (fr == "society") {
    num = new Array("--", "정치국제학과", "공공인재학부", "심리학과", "문헌정보학과", "사회복지학부", "신문방송학부", "도시계획부동산학과", "사회학과");
    vnum = new Array("none", "politics", "public", "psyche", "lis", "socialwelfare", "cmc", "planning", "sociology");
  } else if (fr == "edu") {
    num = new Array("--", "교육학과", "유아교육과", "영어교육과", "체육교육과");
    vnum = new Array("none", "education", "ece", "englishedu", "pe");
  } else if (fr == "natural") {
    num = new Array("--", "물리학과", "화학과", "생명과학과", "수학과");
    vnum = new Array("none", "physics", "chemistry", "bio-science", "math");
  } else if (fr == "bne") {
    num = new Array("--", "경영학부_경영학전공", "경영학부_글로벌금융", "경제학부", "광고홍보학과", "응용통계학과", "지식경영학부", "국제물류학과");
    vnum = new Array("none", "biz_ba", "biz_glofi", "econ", "adpr", "stat", "gloknol", "log");
  } else if (fr == "engineering") {
    num = new Array("--", "사회기반시스템공학부", "건축학부_건축학", "건축학부_건축공학", "화학신소재공학부", "기계공학부", "에너지시스템공학부", "전자전기공학부", "컴퓨터공학부", "융합공학부");
    vnum = new Array("none", "infra", "archi", "archieng", "chemeng", "me", "ese", "eee1214", "computer", "ie1214");
  } else if (fr == "engineering12") {
    num = new Array("--", "사회기반시스템공학부", "건축학부_건축학", "건축학부_건축공학", "화학신소재공학부", "기계공학부", "전자전기공학부", "컴퓨터공학부", "융합공학부");
    vnum = new Array("none", "infra", "archi", "archieng", "chemeng", "me", "eee1214", "computer12", "ie1214");
  } else if (fr == "none") {
    num = new Array("--");
    vnum = new Array("none");
  }

  for (i = 0; i = document.getElementById("Major_select").length; i++) {
    document.getElementById("Major_select").options[0] = null;
  };

  for (i = 0; i < num.length; i++) {
    document.getElementById("Major_select").options[i] = new Option(num[i], vnum[i]);
  }
}

function collegechanges15() {
  var fr = document.getElementById("college_select").value;
  if (fr == "humanity") {
    num = new Array("--", "국어국문학과", "영어영문학과", "유럽문화_독일어문학", "유럽문화_프랑스어문학", "유럽문화_러시아어문학", "아시아문화_일본어문학", "아시아문화_중국어문학", "철학과", "역사학과");
    vnum = new Array("none", "korean", "english", "german", "france", "russia", "japan", "china", "philosophy", "history");
  } else if (fr == "society") {
    num = new Array("--", "정치국제학과", "공공인재_행정학트랙", "공공인재_정책학트랙", "심리학과", "문헌정보학과", "사회복지학부", "미디어커뮤니케이션학부", "도시계획부동산학과", "사회학과");
    vnum = new Array("none", "politics", "public-admin", "public-policy", "psyche", "lis", "socialwelfare", "cmc", "planning", "sociology");
  } else if (fr == "edu") {
    num = new Array("--", "교육학과", "유아교육과", "영어교육과", "체육교육과");
    vnum = new Array("none", "education", "ece", "englishedu", "pe");
  } else if (fr == "natural") {
    num = new Array("--", "물리학과", "화학과", "생명과학과", "수학과");
    vnum = new Array("none", "physics", "chemistry", "bio-science", "math");
  } else if (fr == "bne") {
    num = new Array("--", "경영학부_경영학전공", "경영학부_글로벌금융", "경제학부", "광고홍보학과", "응용통계학과", "지식경영학부", "국제물류학과", "산업보안학과");
    vnum = new Array("none", "biz_ba", "biz_glofi", "econ", "adpr", "stat", "gloknol", "log", "security");
  } else if (fr == "engineering") {
    num = new Array("--", "사회기반시스템공학부", "건축학부_건축학", "건축학부_건축공학", "화학신소재공학부", "기계공학부", "에너지시스템공학부");
    vnum = new Array("none", "infra", "archi", "archieng", "chemeng", "me", "ese");
  } else if (fr == "ict") {
    num = new Array("--", "전자전기공학부", "컴퓨터공학부_컴퓨터공학", "컴퓨터공학부_소프트웨어", "융합공학부");
    vnum = new Array("none", "eee", "computer", "soft", "ie");
  } else if (fr == "none") {
    num = new Array("--");
    vnum = new Array("none");
  }

  for (i = 0; i = document.getElementById("Major_select").length; i++) {
    document.getElementById("Major_select").options[0] = null;
  };

  for (i = 0; i < num.length; i++) {
    document.getElementById("Major_select").options[i] = new Option(num[i], vnum[i]);
  }
}

function collegechanges16() {
  var fr = document.getElementById("college_select").value;
  if (fr == "humanity") {
    num = new Array("--", "국어국문학과", "영어영문학과", "유럽문화_독일어문학", "유럽문화_프랑스어문학", "유럽문화_러시아어문학", "아시아문화_일본어문학", "아시아문화_중국어문학", "철학과", "역사학과");
    vnum = new Array("none", "korean", "english", "german", "france", "russia", "japan", "china", "philosophy", "history");
  } else if (fr == "society") {
    num = new Array("--", "정치국제학과", "공공인재_행정학트랙", "공공인재_정책학트랙", "심리학과", "문헌정보학과", "사회복지학부", "미디어커뮤니케이션학부", "도시계획부동산학과", "사회학과");
    vnum = new Array("none", "politics", "public-admin", "public-policy", "psyche", "lis", "socialwelfare", "cmc", "planning", "sociology");
  } else if (fr == "edu") {
    num = new Array("--", "교육학과", "유아교육과", "영어교육과", "체육교육과");
    vnum = new Array("none", "education", "ece", "englishedu", "pe");
  } else if (fr == "natural") {
    num = new Array("--", "물리학과", "화학과", "생명과학과", "수학과");
    vnum = new Array("none", "physics", "chemistry", "bio-science", "math");
  } else if (fr == "bne") {
    num = new Array("--", "경영학부_경영학전공", "경영학부_글로벌금융", "경제학부", "광고홍보학과", "응용통계학과", "지식경영학부", "국제물류학과", "산업보안학과");
    vnum = new Array("none", "biz_ba", "biz_glofi", "econ", "adpr", "stat", "gloknol", "log", "security");
  } else if (fr == "engineering") {
    num = new Array("--", "사회기반시스템공학부", "건축학부_건축학", "건축학부_건축공학", "화학신소재공학부", "기계공학부", "에너지시스템공학부");
    vnum = new Array("none", "infra", "archi", "archieng", "chemeng", "me", "ese");
  } else if (fr == "ict") {
    num = new Array("--", "전자전기공학부", "융합공학부");
    vnum = new Array("none", "eee", "ie");
  } else if (fr == "ict1617") {
    num = new Array("--", "전자전기공학부", "컴퓨터공학부_컴퓨터공학", "컴퓨터공학부_소프트웨어", "융합공학부");
    vnum = new Array("none", "eee", "computer", "soft", "ie");
  } else if (fr == "ict18") {
    num = new Array("--", "전자전기공학부", "소프트웨어학부", "융합공학부");
    vnum = new Array("none", "eee", "soft", "ie");
  } else if (fr == "software") {
    num = new Array("--", "소프트웨어학부");
    vnum = new Array("none", "soft");
  } else if (fr == "none") {
    num = new Array("--");
    vnum = new Array("none");
  }

  for (i = 0; i = document.getElementById("Major_select").length; i++) {
    document.getElementById("Major_select").options[0] = null;
  };

  for (i = 0; i < num.length; i++) {
    document.getElementById("Major_select").options[i] = new Option(num[i], vnum[i]);
  }
}

function tr_collegechanges() {
  var fr = document.getElementById("college_select").value;
  if (fr == "humanity") {
    num = new Array("--", "국어국문학과", "영어영문학과", "유럽문화_독일어문학", "유럽문화_프랑스어문학", "유럽문화_러시아어문학", "아시아문화_일본어문학", "아시아문화_중국어문학", "철학과", "역사학과");
    vnum = new Array("none", "korean", "english", "german", "france", "russia", "japan", "china", "philosophy", "history");
  } else if (fr == "society") {
    num = new Array("--", "정치국제학과", "공공인재_행정학트랙", "공공인재_정책학트랙", "심리학과", "문헌정보학과", "사회복지학부", "미디어커뮤니케이션학부", "도시계획부동산학과", "사회학과");
    vnum = new Array("none", "politics", "public-admin", "public-policy", "psyche", "lis", "socialwelfare", "cmc", "planning", "sociology");
  } else if (fr == "edu") {
    num = new Array("--", "교육학과", "유아교육과", "영어교육과", "체육교육과");
    vnum = new Array("none", "education", "ece", "englishedu", "pe");
  } else if (fr == "natural") {
    num = new Array("--", "물리학과", "화학과", "생명과학과", "수학과");
    vnum = new Array("none", "physics", "chemistry", "bio-science", "math");
  } else if (fr == "bne") {
    num = new Array("--", "경영학부_경영학전공", "경영학부_글로벌금융", "경제학부", "광고홍보학과", "응용통계학과", "국제물류학과", "산업보안학과");
    vnum = new Array("none", "biz_ba", "biz_glofi", "econ", "adpr", "stat", "log", "security");
  } else if (fr == "engineering") {
    num = new Array("--", "사회기반시스템공학부", "건축학부_건축학", "건축학부_건축공학", "화학신소재공학부", "기계공학부", "에너지시스템공학부");
    vnum = new Array("none", "infra", "archi", "archieng", "chemeng", "me", "ese");
  } else if (fr == "ict") {
    num = new Array("--", "전자전기공학부", "융합공학부");
    vnum = new Array("none", "eee", "ie");
  } else if (fr == "none") {
    num = new Array("--");
    vnum = new Array("none");
  }

  for (i = 0; i = document.getElementById("Major_select").length; i++) {
    document.getElementById("Major_select").options[0] = null;
  };

  for (i = 0; i < num.length; i++) {
    document.getElementById("Major_select").options[i] = new Option(num[i], vnum[i]);
  }
}

function multimajorchanges() {
  var major = document.getElementById("Major_select").value;
  var Edu = ["education", "ece", "englishedu", "pe"]
  var Archi = ["archi"]
  var ICT = ["eee", "ie"]
  var Soft = ["computer", "soft"]
  if (Edu.includes(major)) {
    num = new Array("--", "전공심화", "복수전공", "연계전공", "융합전공", "설계전공");
    vnum = new Array("0", "66", "50", "50", "50", "50");
    document.getElementById("total_standard").value = "132";
  } else if (Archi.includes(major)) {
    num = new Array("--", "전공심화", "복수전공", "연계전공", "융합전공", "설계전공");
    vnum = new Array("0", "105", "105", "105", "105", "105");
    document.getElementById("total_standard").value = "160";
  } else if (ICT.includes(major)) {
    num = new Array("--", "전공심화", "복수전공", "연계전공", "융합전공", "설계전공");
    vnum = new Array("0", "72", "45", "45", "45", "45");
    document.getElementById("total_standard").value = "140";
  } else if (Soft.includes(major)) {
    num = new Array("--", "전공심화", "복수전공", "연계전공", "융합전공", "설계전공");
    vnum = new Array("0", "84", "84", "84", "84", "84");
    document.getElementById("total_standard").value = "140";
  } else {
    num = new Array("--", "전공심화", "복수전공", "연계전공", "융합전공", "설계전공");
    vnum = new Array("0", "66", "45", "45", "45", "45");
    document.getElementById("total_standard").value = "132";
  }

  for (i = 0; i = document.getElementById("MultiMajor_select").length; i++) {
    document.getElementById("MultiMajor_select").options[0] = null;
  };

  for (i = 0; i < num.length; i++) {
    document.getElementById("MultiMajor_select").options[i] = new Option(num[i], vnum[i]);
  }
}

function major_standard_maker() {
  var Multimajor_standard = Number(document.getElementById("MultiMajor_select").value);
  document.getElementById("major_standard").value = Multimajor_standard;
  var Multimajor = document.getElementById("MultiMajor_select");
  var Multimajortext = Multimajor.options[Multimajor.selectedIndex].text;

  if (Multimajortext.includes("심화")) {
    document.getElementById("double_major_none").checked = true;
    document.getElementById("double_major_point").value = null;
    document.getElementById("double_major_point").readOnly = true;
    document.getElementById("double_major_paper").checked = true;
    document.getElementById("double_table").style.display = "none";

    document.getElementById("link_major_none").checked = true;
    document.getElementById("link_major_point").value = null;
    document.getElementById("link_major_point").readOnly = true;
    document.getElementById("cross_point1").value = null;
    document.getElementById("cross_point1").readOnly = true;
    document.getElementById("link_table").style.display = "none";

    document.getElementById("fusion_major_none").checked = true;
    document.getElementById("fusion_major_point").value = null;
    document.getElementById("fusion_major_point").readOnly = true;
    document.getElementById("cross_point2").value = null;
    document.getElementById("cross_point2").readOnly = true;
    document.getElementById("fusion_table").style.display = "none";

    document.getElementById("plan_major_none").checked = true;
    document.getElementById("plan_major_point").value = null;
    document.getElementById("plan_major_point").readOnly = true;
    document.getElementById("cross_point3").value = null;
    document.getElementById("cross_point3").readOnly = true;
    document.getElementById("plan_table").style.display = "none";
  } else if (Multimajortext.includes("복수")) {
    document.getElementById("double_major_none").checked = false;
    document.getElementById("double_major_point").readOnly = false;
    document.getElementById("double_major_paper").checked = false;
    document.getElementById("double_table").style.display = "";

    document.getElementById("link_major_none").checked = true;
    document.getElementById("link_major_point").value = null;
    document.getElementById("link_major_point").readOnly = true;
    document.getElementById("cross_point1").value = null;
    document.getElementById("cross_point1").readOnly = true;
    document.getElementById("link_table").style.display = "none";

    document.getElementById("fusion_major_none").checked = true;
    document.getElementById("fusion_major_point").value = null;
    document.getElementById("fusion_major_point").readOnly = true;
    document.getElementById("cross_point2").value = null;
    document.getElementById("cross_point2").readOnly = true;
    document.getElementById("fusion_table").style.display = "none";

    document.getElementById("plan_major_none").checked = true;
    document.getElementById("plan_major_point").value = null;
    document.getElementById("plan_major_point").readOnly = true;
    document.getElementById("cross_point3").value = null;
    document.getElementById("cross_point3").readOnly = true;
    document.getElementById("plan_table").style.display = "none";
  } else if (Multimajortext.includes("연계")) {
    document.getElementById("double_major_none").checked = true;
    document.getElementById("double_major_point").value = null;
    document.getElementById("double_major_point").readOnly = true;
    document.getElementById("double_major_paper").checked = true;
    document.getElementById("double_table").style.display = "none";

    document.getElementById("link_major_none").checked = false;
    document.getElementById("link_major_point").readOnly = false;
    document.getElementById("cross_point1").readOnly = false;
    document.getElementById("link_table").style.display = "";

    document.getElementById("fusion_major_none").checked = true;
    document.getElementById("fusion_major_point").value = null;
    document.getElementById("fusion_major_point").readOnly = true;
    document.getElementById("cross_point2").value = null;
    document.getElementById("cross_point2").readOnly = true;
    document.getElementById("fusion_table").style.display = "none";

    document.getElementById("plan_major_none").checked = true;
    document.getElementById("plan_major_point").value = null;
    document.getElementById("plan_major_point").readOnly = true;
    document.getElementById("cross_point3").value = null;
    document.getElementById("cross_point3").readOnly = true;
    document.getElementById("plan_table").style.display = "none";
  } else if (Multimajortext.includes("융합")) {
    document.getElementById("double_major_none").checked = true;
    document.getElementById("double_major_point").value = null;
    document.getElementById("double_major_point").readOnly = true;
    document.getElementById("double_major_paper").checked = true;
    document.getElementById("double_table").style.display = "none";

    document.getElementById("link_major_none").checked = true;
    document.getElementById("link_major_point").value = null;
    document.getElementById("link_major_point").readOnly = true;
    document.getElementById("cross_point1").value = null;
    document.getElementById("cross_point1").readOnly = true;
    document.getElementById("link_table").style.display = "none";

    document.getElementById("fusion_major_none").checked = false;
    document.getElementById("fusion_major_point").readOnly = false;
    document.getElementById("cross_point2").readOnly = false;
    document.getElementById("fusion_table").style.display = "";

    document.getElementById("plan_major_none").checked = true;
    document.getElementById("plan_major_point").value = null;
    document.getElementById("plan_major_point").readOnly = true;
    document.getElementById("cross_point3").value = null;
    document.getElementById("cross_point3").readOnly = true;
    document.getElementById("plan_table").style.display = "none";
  } else if (Multimajortext.includes("설계")) {
    document.getElementById("double_major_none").checked = true;
    document.getElementById("double_major_point").value = null;
    document.getElementById("double_major_point").readOnly = true;
    document.getElementById("double_major_paper").checked = true;
    document.getElementById("double_table").style.display = "none";

    document.getElementById("link_major_none").checked = true;
    document.getElementById("link_major_point").value = null;
    document.getElementById("link_major_point").readOnly = true;
    document.getElementById("cross_point1").value = null;
    document.getElementById("cross_point1").readOnly = true;
    document.getElementById("link_table").style.display = "none";

    document.getElementById("fusion_major_none").checked = true;
    document.getElementById("fusion_major_point").value = null;
    document.getElementById("fusion_major_point").readOnly = true;
    document.getElementById("cross_point2").value = null;
    document.getElementById("cross_point2").readOnly = true;
    document.getElementById("fusion_table").style.display = "none";

    document.getElementById("plan_major_none").checked = false;
    document.getElementById("plan_major_point").readOnly = false;
    document.getElementById("cross_point3").readOnly = false;
    document.getElementById("plan_table").style.display = "";
  } else if (Multimajor_standard == 0) {
    document.getElementById("double_major_none").checked = false;
    document.getElementById("double_major_point").readOnly = false;
    document.getElementById("double_major_paper").checked = false;
    document.getElementById("double_table").style.display = "none";

    document.getElementById("link_major_none").checked = false;
    document.getElementById("link_major_point").readOnly = false;
    document.getElementById("cross_point1").readOnly = false;
    document.getElementById("link_table").style.display = "none";

    document.getElementById("fusion_major_none").checked = false;
    document.getElementById("fusion_major_point").readOnly = false;
    document.getElementById("cross_point2").readOnly = false;
    document.getElementById("fusion_table").style.display = "none";

    document.getElementById("plan_major_none").checked = false;
    document.getElementById("plan_major_point").readOnly = false;
    document.getElementById("cross_point3").readOnly = false;
    document.getElementById("plan_table").style.display = "none";
  }
}

//편입생 관련

function tr_major_standard_maker() {
  var Multimajor_standard = Number(document.getElementById("MultiMajor_select").value);
  document.getElementById("major_standard").value = Multimajor_standard;
  var Multimajor = document.getElementById("MultiMajor_select");
  var Multimajortext = Multimajor.options[Multimajor.selectedIndex].text;

  if (Multimajortext.includes("심화") || Multimajortext.includes("해당없음") || Multimajortext.includes("N/A")) {
    document.getElementById("double_major_none").checked = true;
    document.getElementById("double_major_point").value = null;
    document.getElementById("double_major_point").readOnly = true;
    document.getElementById("double_major_paper").checked = true;
    document.getElementById("double_table").style.display = "none";

    document.getElementById("link_major_none").checked = true;
    document.getElementById("link_major_point").value = null;
    document.getElementById("link_major_point").readOnly = true;
    document.getElementById("cross_point1").value = null;
    document.getElementById("cross_point1").readOnly = true;
    document.getElementById("link_table").style.display = "none";

    document.getElementById("fusion_major_none").checked = true;
    document.getElementById("fusion_major_point").value = null;
    document.getElementById("fusion_major_point").readOnly = true;
    document.getElementById("cross_point2").value = null;
    document.getElementById("cross_point2").readOnly = true;
    document.getElementById("fusion_table").style.display = "none";

    document.getElementById("plan_major_none").checked = true;
    document.getElementById("plan_major_point").value = null;
    document.getElementById("plan_major_point").readOnly = true;
    document.getElementById("cross_point3").value = null;
    document.getElementById("cross_point3").readOnly = true;
    document.getElementById("plan_table").style.display = "none";
  } else if (Multimajortext.includes("복수")) {
    document.getElementById("double_major_none").checked = false;
    document.getElementById("double_major_point").readOnly = false;
    document.getElementById("double_major_paper").checked = false;
    document.getElementById("double_table").style.display = "";

    document.getElementById("link_major_none").checked = true;
    document.getElementById("link_major_point").value = null;
    document.getElementById("link_major_point").readOnly = true;
    document.getElementById("cross_point1").value = null;
    document.getElementById("cross_point1").readOnly = true;
    document.getElementById("link_table").style.display = "none";

    document.getElementById("fusion_major_none").checked = true;
    document.getElementById("fusion_major_point").value = null;
    document.getElementById("fusion_major_point").readOnly = true;
    document.getElementById("cross_point2").value = null;
    document.getElementById("cross_point2").readOnly = true;
    document.getElementById("fusion_table").style.display = "none";

    document.getElementById("plan_major_none").checked = true;
    document.getElementById("plan_major_point").value = null;
    document.getElementById("plan_major_point").readOnly = true;
    document.getElementById("cross_point3").value = null;
    document.getElementById("cross_point3").readOnly = true;
    document.getElementById("plan_table").style.display = "none";
  } else if (Multimajortext.includes("연계")) {
    document.getElementById("double_major_none").checked = true;
    document.getElementById("double_major_point").value = null;
    document.getElementById("double_major_point").readOnly = true;
    document.getElementById("double_major_paper").checked = true;
    document.getElementById("double_table").style.display = "none";

    document.getElementById("link_major_none").checked = false;
    document.getElementById("link_major_point").readOnly = false;
    document.getElementById("cross_point1").readOnly = false;
    document.getElementById("link_table").style.display = "";

    document.getElementById("fusion_major_none").checked = true;
    document.getElementById("fusion_major_point").value = null;
    document.getElementById("fusion_major_point").readOnly = true;
    document.getElementById("cross_point2").value = null;
    document.getElementById("cross_point2").readOnly = true;
    document.getElementById("fusion_table").style.display = "none";

    document.getElementById("plan_major_none").checked = true;
    document.getElementById("plan_major_point").value = null;
    document.getElementById("plan_major_point").readOnly = true;
    document.getElementById("cross_point3").value = null;
    document.getElementById("cross_point3").readOnly = true;
    document.getElementById("plan_table").style.display = "none";
  } else if (Multimajortext.includes("융합")) {
    document.getElementById("double_major_none").checked = true;
    document.getElementById("double_major_point").value = null;
    document.getElementById("double_major_point").readOnly = true;
    document.getElementById("double_major_paper").checked = true;
    document.getElementById("double_table").style.display = "none";

    document.getElementById("link_major_none").checked = true;
    document.getElementById("link_major_point").value = null;
    document.getElementById("link_major_point").readOnly = true;
    document.getElementById("cross_point1").value = null;
    document.getElementById("cross_point1").readOnly = true;
    document.getElementById("link_table").style.display = "none";

    document.getElementById("fusion_major_none").checked = false;
    document.getElementById("fusion_major_point").readOnly = false;
    document.getElementById("cross_point2").readOnly = false;
    document.getElementById("fusion_table").style.display = "";

    document.getElementById("plan_major_none").checked = true;
    document.getElementById("plan_major_point").value = null;
    document.getElementById("plan_major_point").readOnly = true;
    document.getElementById("cross_point3").value = null;
    document.getElementById("cross_point3").readOnly = true;
    document.getElementById("plan_table").style.display = "none";
  } else if (Multimajortext.includes("설계")) {
    document.getElementById("double_major_none").checked = true;
    document.getElementById("double_major_point").value = null;
    document.getElementById("double_major_point").readOnly = true;
    document.getElementById("double_major_paper").checked = true;
    document.getElementById("double_table").style.display = "none";

    document.getElementById("link_major_none").checked = true;
    document.getElementById("link_major_point").value = null;
    document.getElementById("link_major_point").readOnly = true;
    document.getElementById("cross_point1").value = null;
    document.getElementById("cross_point1").readOnly = true;
    document.getElementById("link_table").style.display = "none";

    document.getElementById("fusion_major_none").checked = true;
    document.getElementById("fusion_major_point").value = null;
    document.getElementById("fusion_major_point").readOnly = true;
    document.getElementById("cross_point2").value = null;
    document.getElementById("cross_point2").readOnly = true;
    document.getElementById("fusion_table").style.display = "none";

    document.getElementById("plan_major_none").checked = false;
    document.getElementById("plan_major_point").readOnly = false;
    document.getElementById("cross_point3").readOnly = false;
    document.getElementById("plan_table").style.display = "";
  }
}

function tr_total_point_sum() {
  var Liberal_point = Number(document.getElementById("liberal_input").value);
  var Basepoint = Number(document.getElementById("base_input").value);
  var Majorpoint = Number(document.getElementById("major_input").value);
  var Doublepoint = Number(document.getElementById("double_major_point").value);
  var Linkpoint = Number(document.getElementById("link_major_point").value);
  var Fusionpoint = Number(document.getElementById("fusion_major_point").value);
  var Planpoint = Number(document.getElementById("plan_major_point").value);
  var Minorpoint = Number(document.getElementById("minor_point").value);
  var Freepoint = Number(document.getElementById("free_point").value);
  var Teachpoint = Number(document.getElementById("teaching_point").value);

  document.getElementById("the_total").value = Liberal_point + Basepoint + Majorpoint + Doublepoint + Linkpoint + Fusionpoint + Planpoint + Minorpoint + Freepoint + Teachpoint;
}

function OfficeNumber() {
  var Office = {
    //인문대학
    "korean": "국어국문학과",
    "english": "영어영문학과",
    "german": "유럽문화학부 독일어문학",
    "france": "유럽문화학부 프랑스어문학",
    "russia": "유럽문화학부 러시아어문학",
    "japan": "아시아문화학부 일본어문학",
    "china": "아시아문화학부 중국어문학",
    "philosophy": "철학과",
    "history": "역사학과",
    //사회과학대학
    "psyche": "심리학과",
    "politics": "정치국제학과",
    "lis": "문헌정보학과",
    "socialwelfare": "사회복지학부",
    "cmc": "미디어커뮤니케이션학부",
    "cmc2": "미디어커뮤니케이션학부",
    "planning": "도시계획/부동산학과",
    "sociology": "사회학과",
    "public-admin": "공공인재학부",
    "public-policy": "공공인재학부",
    "public": "공공인재학부",
    //사범대학
    "education": "교육학과",
    "ece": "유아교육과",
    "englishedu": "영어교육과",
    "pe": "체육교육과",
    //자연과학대학
    "physics": "물리학과",
    "chemistry": "화학과",
    "bio-science": "생명과학과",
    "math": "수학과",
    //경영경제대학
    "biz_ba": "경영학부",
    "biz_glofi": "경영학부",
    "econ": "경제학부",
    "adpr": "광고홍보학과",
    "stat": "응용통계학과",
    "gloknol": "지식경영학부",
    "log": "국제물류학과",
    "security": "산업보안학과",
    //공과대학
    "infra": "사회기반시스템공학부",
    "archi": "건축학부",
    "archieng": "건축학부",
    "chemeng": "화학신소재공학부",
    "me": "기계공학부",
    "ese": "에너지시스템공학부",
    //창의ICT공과대학
    "eee": "전자전기공학부",
    "eee1214": "전자전기공학부",
    "ie": "융합공학부",
    "ie1214": "융합공학부",
    //소프트웨어대학
    "soft": "소프트웨어학부",
    "computer": "소프트웨어학부",
    "computer12": "소프트웨어학부"
  };
  var PhoneNumber = {
    //인문대학
    "korean": "02-820-5084",
    "english": "02-820-5095",
    "german": "02-820-5105",
    "france": "02-820-5171",
    "russia": "02-820-5239",
    "japan": "02-820-5118",
    "china": "02-820-5243",
    "philosophy": "02-820-5130",
    "history": "02-820-5137",
    //사회과학대학
    "psyche": "02-820-5124",
    "politics": "02-820-5473",
    "lis": "02-820-5144",
    "socialwelfare": "02-820-5149",
    "cmc": "02-820-5481",
    "cmc2": "02-820-5481",
    "planning": "02-820-5108",
    "sociology": "02-820-6351",
    "public-admin": "02-820-5445",
    "public-policy": "02-820-5445",
    "public": "02-820-5445",
    //사범대학
    "education": "02-820-5362",
    "ece": "02-820-5372",
    "englishedu": "02-820-5391",
    "pe": "02-820-5382",
    //자연과학대학
    "physics": "02-820-5189",
    "chemistry": "02-820-5196",
    "bio-science": "02-820-5206",
    "math": "02-820-5214",
    //경영경제대학
    "biz_ba": "02-820-5539",
    "biz_glofi": "02-820-5540",
    "econ": "02-820-5487",
    "adpr": "02-820-5504",
    "stat": "02-820-5499",
    "gloknol": "02-820-5527",
    "log": "02-820-5537",
    "security": "02-820-5730",
    //공과대학
    "infra": "02-820-5253",
    "archi": "02-820-5260",
    "archieng": "02-820-5260",
    "chemeng": "02-820-5268",
    "me": "02-820-5276",
    "ese": "02-820-5867",
    //창의ICT공과대학
    "eee": "02-820-5285",
    "eee1214": "02-820-5285",
    "ie": "02-820-5940",
    "ie1214": "02-820-5940",
    //소프트웨어대학
    "soft": "02-820-5301",
    "computer": "02-820-5301",
    "computer12": "02-820-5301"
  };
  var Major = document.getElementById("Major_select").value;
  if (Major == "none") {
    document.getElementById("dept").value = "-";
    document.getElementById("phone").value = "-";
  } else {
    document.getElementById("dept").value = Office[Major];
    document.getElementById("phone").value = PhoneNumber[Major];
    document.getElementById("phonenumber").setAttribute("href", "tel:" + PhoneNumber[Major]); //전화연결 가능
  }
}

//연도별 학과 전공기초, 전공필수 기준
function BaseNeceStandard12to14() {
  var Base = { // 전공기초: [2012, 2013, 2014]
    //인문대학
    "korean": ["10", "10", "10"],
    "english": ["12", "12", "12"],
    "german": ["14", "14", "14"],
    "france": ["14", "14", "14"],
    "russia": ["14", "14", "14"],
    "japan": ["12", "12", "12"],
    "china": ["12", "12", "12"],
    "philosophy": ["12", "12", "12"],
    "history": ["12", "12", "12"],
    //사회과학대학
    "psyche": ["10", "10", "10"],
    "politics": ["12", "12", "12"],
    "lis": ["10", "12", "12"],
    "socialwelfare": ["12", "12", "12"],
    "cmc": ["15", "15", "15"],
    "planning": ["12", "12", "12"],
    "sociology": ["12", "12", "12"],
    "public": ["18", "18", "18"],
    //사범대학
    "education": ["0", "0", "0"],
    "ece": ["9", "9", "9"],
    "englishedu": ["11", "11", "11"],
    "pe": ["10", "10", "10"],
    //자연과학대학
    "physics": ["10", "10", "14"],
    "chemistry": ["14", "14", "14"],
    "bio-science": ["14", "14", "14"],
    "math": ["16", "16", "16"],
    //경영경제대학
    "biz_ba": ["14", "14", "14"],
    "biz_glofi": ["18", "18", "18"],
    "econ": ["6", "6", "6"],
    "adpr": ["9", "9", "9"],
    "stat": ["12", "12", "12"],
    "gloknol": ["18", "18", "18"],
    "log": ["15", "15", "15"],
    //공과대학
    "infra": ["10", "10", "10"],
    "archi": ["12", "12", "12"],
    "archieng": ["12", "12", "12"],
    "chemeng": ["10", "10", "14"],
    "me": ["14", "14", "14"],
    "ese": ["14", "14", "14"],
    "eee1214": ["14", "14", "14"],
    "computer12": ["10", "14", "14"],
    "computer": ["10", "14", "14"],
    "ie1214": ["18", "18", "18"]
  };
  var Nece = { //전공필수: [2012, 2013, 2014]
    //인문대학
    "korean": ["12", "12", "12"],
    "english": ["9", "9", "9"],
    "german": ["15", "15", "15"],
    "france": ["19", "15", "15"],
    "russia": ["18", "18", "18"],
    "japan": ["15", "15", "15"],
    "china": ["15", "15", "15"],
    "philosophy": ["18", "18", "18"],
    "history": ["9", "9", "9"],
    //사회과학대학
    "psyche": ["9", "9", "9"],
    "politics": ["9", "9", "9"],
    "lis": ["18", "18", "18"],
    "socialwelfare": ["18", "18", "18"],
    "cmc": ["9", "9", "9"],
    "planning": ["18", "18", "18"],
    "sociology": ["9", "9", "9"],
    "public": ["19", "19", "19"],
    //사범대학
    "education": ["15", "15", "15"],
    "ece": ["18", "18", "18"],
    "englishedu": ["18", "18", "18"],
    "pe": ["18", "18", "18"],
    //자연과학대학
    "physics": ["15", "15", "15"],
    "chemistry": ["15", "15", "15"],
    "bio-science": ["18", "18", "18"],
    "math": ["18", "18", "18"],
    //경영경제대학
    "biz_ba": ["24", "24", "24"],
    "biz_glofi": ["39", "39", "39"],
    "econ": ["9", "9", "9"],
    "adpr": ["9", "12", "12"],
    "stat": ["15", "15", "15"],
    "gloknol": ["21", "21", "21"],
    "log": ["18", "18", "18"],
    //공과대학
    "infra": ["18", "18", "18"],
    "archi": ["99", "99", "99"],
    "archieng": ["12", "12", "12"],
    "chemeng": ["18", "18", "18"],
    "me": ["18", "18", "18"],
    "ese": ["12", "12", "12"],
    "eee1214": ["9", "9", "9"],
    "computer12": ["12", "12", "12"],
    "computer": ["12", "12", "12"],
    "ie1214": ["18", "18", "18"]
  };

  var Major = document.getElementById("Major_select").value;
  var AdYear = Number(document.getElementById("ad-year").value);
  var i = AdYear - 2012;
  var Baseselect = Base[Major];
  var Neceselect = Nece[Major];
  if (Major == "none") {
    document.getElementById("base_standard").value = "-";
    document.getElementById("nece_standard").value = "-";
  } else {
    document.getElementById("base_standard").value = Baseselect[i];
    document.getElementById("nece_standard").value = Neceselect[i];
  }
}

function BaseNeceStandard2015() {
  var Major_base = {
    //인문대학
    "korean": "10",
    "english": "12",
    "german": "14",
    "france": "14",
    "russia": "14",
    "japan": "12",
    "china": "12",
    "philosophy": "12",
    "history": "12",
    //사회과학대학
    "psyche": "10",
    "politics": "12",
    "lis": "12",
    "socialwelfare": "12",
    "cmc": "15",
    "planning": "12",
    "sociology": "12",
    "public-admin": "17",
    "public-policy": "16",
    //사범대학
    "education": "0",
    "ece": "9",
    "englishedu": "11",
    "pe": "10",
    //자연과학대학
    "physics": "14",
    "chemistry": "14",
    "bio-science": "14",
    "math": "16",
    //경영경제대학
    "biz_ba": "14",
    "biz_glofi": "18",
    "econ": "6",
    "adpr": "9",
    "stat": "12",
    "gloknol": "18",
    "log": "15",
    "security": "15",
    //공과대학
    "infra": "10",
    "archi": "12",
    "archieng": "14",
    "chemeng": "14",
    "me": "14",
    "ese": "14",
    //창의ICT공과대학
    "eee": "14",
    "computer": "14",
    "soft": "14",
    "ie": "18"
  };

  var Major_nece = {
    //인문대학
    "korean": "12",
    "english": "9",
    "german": "15",
    "france": "15",
    "russia": "18",
    "japan": "15",
    "china": "15",
    "philosophy": "18",
    "history": "19",
    //사회과학대학
    "psyche": "9",
    "politics": "9",
    "lis": "18",
    "socialwelfare": "18",
    "cmc": "9",
    "planning": "18",
    "sociology": "9",
    "public-admin": "19",
    "public-policy": "17",
    //사범대학
    "education": "15",
    "ece": "18",
    "englishedu": "18",
    "pe": "18",
    //자연과학대학
    "physics": "18",
    "chemistry": "15",
    "bio-science": "18",
    "math": "18",
    //경영경제대학
    "biz_ba": "24",
    "biz_glofi": "39",
    "econ": "9",
    "adpr": "12",
    "stat": "15",
    "gloknol": "21",
    "log": "18",
    "security": "18",
    //공과대학
    "infra": "18",
    "archi": "99",
    "archieng": "17",
    "chemeng": "18",
    "me": "18",
    "ese": "12",
    //창의ICT공과대학
    "eee": "9",
    "computer": "12",
    "soft": "6",
    "ie": "15"
  };

  var Major = document.getElementById("Major_select").value;
  if (Major == "none") {
    document.getElementById("base_standard").value = "-";
    document.getElementById("nece_standard").value = "-";
  } else {
    document.getElementById("base_standard").value = Major_base[Major];
    document.getElementById("nece_standard").value = Major_nece[Major];
  }
}

function BaseNeceStandard2016() {
  var Base = { // 전공기초: [2016, 2017, 2018, 2019, 2020]
    //인문대학
    "korean": ["10", "10", "10", "10", "10"],
    "english": ["12", "12", "12", "12", "12"],
    "german": ["14", "14", "14", "14", "14"],
    "france": ["14", "14", "14", "14", "14"],
    "russia": ["14", "14", "14", "14", "14"],
    "japan": ["12", "12", "12", "12", "12"],
    "china": ["12", "12", "12", "12", "12"],
    "philosophy": ["12", "12", "12", "12", "12"],
    "history": ["12", "12", "12", "12", "12"],
    //사회과학대학
    "psyche": ["10", "10", "10", "10", "10"],
    "politics": ["12", "12", "12", "12", "12"],
    "lis": ["12", "12", "12", "12", "12"],
    "socialwelfare": ["12", "12", "12", "12", "12"],
    "cmc": ["15", "15", "15", "15", "15"],
    "planning": ["12", "12", "12", "12", "12"],
    "sociology": ["12", "12", "12", "12", "12"],
    "public-admin": ["17", "18", "18", "17", "17"],
    "public-policy": ["16", "17", "17", "17", "17"],
    //사범대학
    "education": ["0", "0", "0", "0", "0"],
    "ece": ["9", "9", "9", "9", "9"],
    "englishedu": ["11", "11", "11", "11", "11"],
    "pe": ["10", "10", "10", "10", "10"],
    //자연과학대학
    "physics": ["14", "14", "14", "14", "14"],
    "chemistry": ["14", "14", "14", "14", "14"],
    "bio-science": ["14", "14", "14", "14", "14"],
    "math": ["16", "16", "16", "16", "16"],
    //경영경제대학
    "biz_ba": ["14", "14", "14", "14", "14"],
    "biz_glofi": ["18", "18", "18", "18", "18"],
    "econ": ["6", "6", "6", "6", "6"],
    "adpr": ["9", "9", "9", "9", "9"],
    "stat": ["12", "12", "12", "12", "12"],
    "gloknol": ["15", "18", "18", "18", "18"],
    "log": ["15", "15", "15", "15", "15"],
    "security": ["15", "15", "15", "15", "15"],
    //공과대학
    "infra": ["10", "10", "10", "10", "10"],
    "archi": ["12", "12", "12", "12", "12"],
    "archieng": ["14", "14", "14", "14", "14"],
    "chemeng": ["14", "14", "14", "14", "14"],
    "me": ["14", "14", "14", "14", "14"],
    "ese": ["14", "15", "15", "15", "15"],
    //창의ICT공과대학
    "eee": ["14", "14", "14", "14", "14"],
    "ie": ["18", "18", "18", "18", "18"],
    "computer": ["14", "14", "14", "14", "14"],
    "soft": ["14", "14", "14", "14", "14"]
  };
  var Nece = { //전공필수: [2016, 2017, 2018, 2019, 2020]
    //인문대학
    "korean": ["12", "12", "12", "12", "12"],
    "english": ["9", "9", "9", "9", "9"],
    "german": ["15", "15", "15", "15", "15"],
    "france": ["15", "15", "15", "15", "15"],
    "russia": ["18", "18", "18", "18", "18"],
    "japan": ["15", "15", "15", "15", "15"],
    "china": ["15", "15", "15", "15", "15"],
    "philosophy": ["18", "18", "18", "18", "18"],
    "history": ["9", "9", "9", "9", "9"],
    //사회과학대학
    "psyche": ["9", "9", "9", "9", "9"],
    "politics": ["9", "9", "9", "9", "9"],
    "lis": ["18", "18", "18", "18", "18"],
    "socialwelfare": ["18", "18", "18", "18", "18"],
    "cmc": ["9", "9", "9", "9", "9"],
    "planning": ["18", "18", "18", "18", "18"],
    "sociology": ["9", "9", "9", "9", "12"],
    "public-admin": ["19", "19", "19", "18", "18"],
    "public-policy": ["17", "17", "17", "18", "18"],
    //사범대학
    "education": ["15", "15", "15", "15", "15"],
    "ece": ["18", "19", "19", "19", "19"],
    "englishedu": ["18", "18", "18", "18", "18"],
    "pe": ["18", "18", "18", "18", "18"],
    //자연과학대학
    "physics": ["18", "18", "17", "17", "17"],
    "chemistry": ["15", "15", "15", "15", "15"],
    "bio-science": ["18", "18", "18", "18", "18"],
    "math": ["18", "18", "18", "18", "18"],
    //경영경제대학
    "biz_ba": ["24", "24", "24", "24", "24"],
    "biz_glofi": ["39", "39", "39", "39", "39"],
    "econ": ["9", "9", "9", "9", "9"],
    "adpr": ["12", "12", "12", "12", "12"],
    "stat": ["15", "15", "12", "12", "12"],
    "gloknol": ["21", "21", "21", "21", "21"],
    "log": ["18", "12", "12", "12", "12"],
    "security": ["15", "18", "18", "18", "18"],
    //공과대학
    "infra": ["18", "18", "18", "18", "18"],
    "archi": ["99", "99", "99", "99", "99"],
    "archieng": ["17", "17", "17", "17", "18"],
    "chemeng": ["18", "18", "18", "18", "18"],
    "me": ["18", "18", "18", "18", "18"],
    "ese": ["15", "15", "15", "15", "15"],
    //창의ICT공과대학
    "eee": ["9", "9", "9", "9", "9"],
    "ie": ["18", "18", "18", "18", "18"],
    "computer": ["12", "12", "13", "13", "13"],
    "soft": ["6", "6", "13", "13", "13"]
  };

  var Major = document.getElementById("Major_select").value;
  var AdYear = Number(document.getElementById("ad-year").value);
  var i = AdYear - 2016;
  var Baseselect = Base[Major];
  var Neceselect = Nece[Major];
  if (Major == "none") {
    document.getElementById("base_standard").value = "-";
    document.getElementById("nece_standard").value = "-";
  } else {
    document.getElementById("base_standard").value = Baseselect[i];
    document.getElementById("nece_standard").value = Neceselect[i];
  }
}

function BaseNeceStandard_tr2017() {
  var Base = { // 전공기초: [2017, 2018, 2019, 2020]
    //인문대학
    "korean": ["10", "10", "10", "10"],
    "english": ["12", "12", "12", "12"],
    "german": ["14", "14", "14", "14"],
    "france": ["14", "14", "14", "14"],
    "russia": ["14", "14", "14", "14"],
    "japan": ["12", "12", "12", "12"],
    "china": ["12", "12", "12", "12"],
    "philosophy": ["12", "12", "12", "12"],
    "history": ["12", "12", "12", "12"],
    //사회과학대학
    "psyche": ["10", "10", "10", "10"],
    "politics": ["6", "6", "6", "6"],
    "lis": ["12", "12", "12", "12"],
    "socialwelfare": ["12", "12", "12", "12"],
    "cmc": ["9", "9", "9", "9"],
    "cmc2": ["12", "12", "12", "12"],
    "planning": ["0", "0", "0", "0"],
    "sociology": ["12", "12", "12", "12"],
    "public-admin": ["8", "8", "12", "12"],
    "public-policy": ["7", "7", "11", "11"],
    //사범대학
    "education": ["0", "0", "0", "0"],
    "ece": ["9", "9", "9", "9"],
    "englishedu": ["11", "11", "11", "11"],
    "pe": ["10", "10", "10", "10"],
    //자연과학대학
    "physics": ["14", "14", "14", "14"],
    "chemistry": ["14", "14", "14", "14"],
    "bio-science": ["14", "14", "14", "14"],
    "math": ["0", "0", "0", "0"],
    //경영경제대학
    "biz_ba": ["14", "14", "14", "14"],
    "biz_glofi": ["18", "18", "18", "18"],
    "econ": ["6", "6", "6", "6"],
    "adpr": ["9", "9", "9", "9"],
    "stat": ["12", "12", "12", "12"],
    "gloknol": ["9", "9", "9", "9"],
    "log": ["3", "3", "3", "3"],
    "log2": ["15", "15", "15", "15"],
    "security": ["15", "15", "15", "15"],
    //공과대학
    "infra": ["0", "0", "0", "0"],
    "archi": ["0", "0", "0", "0"],
    "archieng": ["0", "0", "0", "0"],
    "chemeng": ["0", "0", "0", "0"],
    "me": ["0", "0", "0", "0"],
    "ese": ["0", "0", "0", "0"],
    //창의ICT공과대학
    "eee": ["0", "0", "0", "0"],
    "ie": ["6", "6", "6", "6"]
  };
  var Nece = { //전공필수: [2017, 2018, 2019, 2020]
    //인문대학
    "korean": ["12", "12", "12", "12"],
    "english": ["9", "9", "9", "9"],
    "german": ["15", "15", "15", "15"],
    "france": ["15", "15", "15", "15"],
    "russia": ["18", "18", "18", "18"],
    "japan": ["15", "15", "15", "15"],
    "china": ["15", "15", "15", "15"],
    "philosophy": ["18", "18", "18", "18"],
    "history": ["9", "9", "9", "9"],
    //사회과학대학
    "psyche": ["9", "9", "9", "9"],
    "politics": ["9", "9", "9", "9"],
    "lis": ["18", "18", "18", "18"],
    "socialwelfare": ["18", "18", "18", "18"],
    "cmc": ["9", "9", "9", "9"],
    "planning": ["18", "18", "18", "18"],
    "sociology": ["9", "9", "9", "12"],
    "public-admin": ["19", "19", "18", "18"],
    "public-policy": ["17", "17", "18", "18"],
    //사범대학
    "education": ["15", "15", "15", "15"],
    "ece": ["19", "19", "19", "19"],
    "englishedu": ["18", "18", "18", "18"],
    "pe": ["18", "18", "18", "18"],
    //자연과학대학
    "physics": ["18", "17", "17", "17"],
    "chemistry": ["15", "15", "15", "15"],
    "bio-science": ["18", "18", "18", "18"],
    "math": ["18", "18", "18", "18"],
    //경영경제대학
    "biz_ba": ["24", "24", "24", "24"],
    "biz_glofi": ["39", "39", "39", "39"],
    "econ": ["9", "9", "9", "9"],
    "adpr": ["6", "6", "6", "6"],
    "stat": ["15", "12", "12", "12"],
    "gloknol": ["21", "21", "21", "21"],
    "log": ["12", "12", "12", "12"],
    "security": ["18", "18", "18", "18"],
    //공과대학
    "infra": ["18", "18", "18", "18"],
    "archi": ["99", "99", "99", "99"],
    "archieng": ["17", "17", "17", "18"],
    "chemeng": ["18", "18", "18", "18"],
    "me": ["18", "18", "18", "18"],
    "ese": ["12", "15", "15", "15"],
    //창의ICT공과대학
    "eee": ["9", "9", "9", "9"],
    "ie": ["18", "18", "18", "18"]
  };

  var Major = document.getElementById("Major_select").value;
  var AdYear = Number(document.getElementById("ad-year").value);
  var SecYear = document.getElementById("2ndyear").checked;
  var i = AdYear - 2017;
  var Baseselect = Base[Major];
  var Neceselect = Nece[Major];
  if (Major == "none") {
    document.getElementById("base_standard").value = "-";
    document.getElementById("nece_standard").value = "-";
  } else if (SecYear && Major == "cmc") {
    document.getElementById("base_standard").value = Base.cmc2[i];
    document.getElementById("nece_standard").value = Neceselect[i];
  } else if (SecYear && Major == "log") {
    document.getElementById("base_standard").value = Base.log2[i];
    document.getElementById("nece_standard").value = Neceselect[i];
  } else {
    document.getElementById("base_standard").value = Baseselect[i];
    document.getElementById("nece_standard").value = Neceselect[i];
  }
}

function checkcont1(none, point) {
  var none_checked = document.getElementById(none).checked;
  if (!none_checked) {
    document.getElementById(point).readOnly = false;
  } else {
    document.getElementById(point).value = null;
    document.getElementById(point).readOnly = true;
  }
}

function checkcont(none, point, cross) {
  var none_checked = document.getElementById(none).checked;
  if (!none_checked) {
    document.getElementById(point).readOnly = false;
    document.getElementById(cross).readOnly = false;
  } else {
    document.getElementById(point).value = null;
    document.getElementById(point).readOnly = true;
    document.getElementById(cross).value = null;
    document.getElementById(cross).readOnly = true;
  }
}

function FusionStandardCheck() {
  var fusion_min = document.getElementById("fusion-options").value;
  var crosspoint = document.getElementById("cross_point2");
  if (fusion_min == 45) {
    document.getElementById("fusion_standard").value = 45;
    crosspoint.setAttribute("max", 15);
  } else {
    document.getElementById("fusion_standard").value = 36;
    crosspoint.setAttribute("max", 12);
  }
}
