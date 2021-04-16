//index 페이지 함수
function index_info() {
  title = "CAU CHECK4GRAD"
  word = "Code by THINGCOL\nTranslated by HUA & SUN\nE-mail : torryjini@naver.com"
  swal(title, word, "info")
}


function yearchanges(fr) {
  if (fr == "entrance") {
    //뿌려줄값을 배열로정렬
    num = new Array("--", "2012 ~ 2014", "2015", "2016 ~");
    vnum = new Array("0", "2014", "2015", "2016");
  } else if (fr == "transfer") {
    num = new Array("--", "2017 ~");
    vnum = new Array("0", "2017");
  }
  // 셀렉트안의 리스트를 기본값으로 한다.

  for (i = 0; i < document.getElementById("index-year").length; i++) {
    document.getElementById("index-year").options[0] = null;
  };
  //포문을 이용하여 두번째(test2)셀렉트 박스에 값을 뿌려줍니당)
  for (i = 0; i < num.length; i++) {
    document.getElementById("index-year").options[i] = new Option(num[i], vnum[i]);
  }
}

//version Modal
function versioninfo() {
  word = "Version"
  var content = "Updated in Feb. 2021"
  swal(word, content, "info");
}

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

//input number 최대 글자수 제한
function maxLengthCheck(object) {
  if (object.value.length > object.maxLength) {
    object.value = object.value.slice(0, object.maxLength);
  }
}

//html include 함수
function includeHTML() {
  var z, i, elmnt, file, xhttp;
  /* Loop through a collection of all HTML elements: */
  z = document.getElementsByTagName("*");
  for (i = 0; i < z.length; i++) {
    elmnt = z[i];
    /*search for elements with a certain atrribute:*/
    file = elmnt.getAttribute("w3-include-html");
    if (file) {
      /* Make an HTTP request using the attribute value as the file name: */
      xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function() {
        if (this.readyState == 4) {
          if (this.status == 200) {elmnt.innerHTML = this.responseText;}
          if (this.status == 404) {elmnt.innerHTML = "Page not found.";}
          /* Remove the attribute, and call this function once more: */
          elmnt.removeAttribute("w3-include-html");
          includeHTML();
        }
      }
      xhttp.open("GET", file, true);
      xhttp.send();
      /* Exit the function: */
      return;
    }
  }
}

var Reset = {
  form: function(id) {
    document.getElementById(id).reset();
  },
  majorselect: function() {
    num = new Array("--");
    vnum = new Array("none");

    for (i = 0; i = document.getElementById("Major_select").length; i++) {
      document.getElementById("Major_select").options[0] = null;
    };

    for (i = 0; i < num.length; i++) {
      document.getElementById("Major_select").options[i] = new Option(num[i], vnum[i]);
    }
  },
  majortable: function() {
    document.getElementById("double_table").style.display = "none";
    document.getElementById("link_table").style.display = "none";
    document.getElementById("fusion_table").style.display = "none";
    document.getElementById("plan_table").style.display = "none";
    document.getElementById("teaching_table").style.display = "none";
  },
  libcolor: function() {
    document.getElementById("common_kor").style.color = "red";
    document.getElementById("common_eng").style.color = "red";
    document.getElementById("common_etc").style.color = "red";
  },
  maj_dou_teach: function() {
    document.getElementById("major_teach").checked = false;
    document.getElementById("double-teaching").checked = false;
    document.getElementById("double_st").value = 45;
  }
}

var Color = {
  number: function(st, number) {
    var standard = Number(document.getElementById(st).value);
    var point = Number(document.getElementById(number).value);
    if (point >= standard) {
      document.getElementById(number).style.color = "blue";
    } else {
      document.getElementById(number).style.color = "red";
    }
  },
  gpa: function() {
    var point = Number(document.getElementById("average").value);
    if (point >= 2) {
      document.getElementById("average").style.color = "blue";
    } else {
      document.getElementById("average").style.color = "red";
    }
  }
}

var AdYear = document.getElementById("ad-year").value;

var Liberal = {
  standardsum: function() {
    // var AdYear = Number(document.getElementById("ad-year").value);
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
  },
  etcchange: function() {
    // var AdYear = Number(document.getElementById("ad-year").value);
    var College = document.getElementById("college_select").value;
    var Engin = ["engineering", "ict", "ict1617", "ict18", "software"]
    if (AdYear >= 2016 && AdYear <= 2018 && Engin.includes(College)) {
      document.getElementById("com_etc_st").value = 8;
      document.getElementById("etc_max").value = 8;
      Liberal.standardsum();
    } else {
      document.getElementById("com_etc_st").value = 10;
      document.getElementById("etc_max").value = 10;
      Liberal.standardsum();
    }
  },
  mach: function() {
    // var AdYear = Number(document.getElementById("ad-year").value);
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

      Liberal.standardsum();
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

      Liberal.standardsum();
    }
  },
  sum: function() {
    // var AdYear = Number(document.getElementById("ad-year").value);
    var College = document.getElementById("college_select").value;
    var elective_point = Number(document.getElementById("elective_liberal").value);
    var common_kor_point = Number(document.getElementById("common_kor").value);
    var common_eng_point = Number(document.getElementById("common_eng").value);
    var common_etc_point = Number(document.getElementById("common_etc").value);
    var core_total_point = Number(document.getElementById("core_total").value);
    var MACH1 = Number(document.getElementById("mach1").value);
    var MACH2 = Number(document.getElementById("mach2").value);
    var Engin = ["engineering", "ict", "ict1617", "ict18", "software"]

    if (AdYear >= 2015 && AdYear <= 2018 && Engin.includes(College)) {
      document.getElementById("liberal_total").value = elective_point + common_kor_point + common_eng_point + common_etc_point + core_total_point + MACH1 + MACH2;
    } else {
      document.getElementById("liberal_total").value = elective_point + common_kor_point + common_eng_point + common_etc_point + core_total_point;
    }
  }
}

var Change = {
  year1214: function() {
    // var AdYear = document.getElementById("ad-year").value;
    if (AdYear == 2012) {
      num = new Array("--", "인문대학", "사회과학대학", "사범대학", "자연과학대학", "공과대학", "경영경제대학", "예술대학", "체육대학");
      vnum = new Array("none", "humanity", "society", "edu", "natural", "engineering12", "bne", "arts", "sport");
    } else if (AdYear == 2013) {
      num = new Array("--", "인문대학", "사회과학대학", "사범대학", "자연과학대학", "공과대학", "경영경제대학", "예술대학", "체육대학");
      vnum = new Array("none", "humanity", "society", "edu", "natural", "engineering", "bne", "arts", "sport");
    } else if (AdYear == 2014) {
      num = new Array("--", "인문대학", "사회과학대학", "사범대학", "자연과학대학", "공과대학", "경영경제대학", "예술대학", "생명공학대학", "체육대학");
      vnum = new Array("none", "humanity", "society", "edu", "natural", "engineering", "bne", "arts", "biotech", "sport");
    } else if (AdYear == "0") {
      num = new Array("--");
      vnum = new Array("none");
    }

    for (i = 0; i = document.getElementById("college_select").length; i++) {
      document.getElementById("college_select").options[0] = null;
    };

    for (i = 0; i < num.length; i++) {
      document.getElementById("college_select").options[i] = new Option(num[i], vnum[i]);
    }
  },
  year16: function() {
    // var AdYear = document.getElementById("ad-year").value;
    if (AdYear == 2016 || AdYear == 2017) {
      num = new Array("--", "인문대학", "사회과학대학", "사범대학", "자연과학대학", "공과대학", "창의ICT공과대학", "경영경제대학", "예술대학", "생명공학대학", "체육대학");
      vnum = new Array("none", "humanity", "society", "edu", "natural", "engineering", "ict1617", "bne", "arts", "biotech", "sport");
    } else if (AdYear == 2018) {
      num = new Array("--", "인문대학", "사회과학대학", "사범대학", "자연과학대학", "공과대학", "창의ICT공과대학", "경영경제대학", "예술대학", "생명공학대학", "체육대학");
      vnum = new Array("none", "humanity", "society", "edu", "natural", "engineering", "ict18", "bne", "arts", "biotech", "sport");
    } else if (AdYear >= 2019) {
      num = new Array("--", "인문대학", "사회과학대학", "사범대학", "자연과학대학", "공과대학", "창의ICT공과대학", "소프트웨어대학", "경영경제대학", "예술대학", "예술공학대학", "생명공학대학", "체육대학");
      vnum = new Array("none", "humanity", "society", "edu", "natural", "engineering", "ict", "software", "bne", "arts", "artech", "biotech", "sport");
    } else if (AdYear == "0") {
      num = new Array("--");
      vnum = new Array("none");
    }

    for (i = 0; i = document.getElementById("college_select").length; i++) {
      document.getElementById("college_select").options[0] = null;
    };

    for (i = 0; i < num.length; i++) {
      document.getElementById("college_select").options[i] = new Option(num[i], vnum[i]);
    }
  },
  tr_year: function() {
    // var AdYear = document.getElementById("ad-year").value;
    if (AdYear >= 2017) {
      num = new Array("--", "인문대학", "사회과학대학", "사범대학", "자연과학대학", "공과대학", "창의ICT공과대학", "경영경제대학", "예술대학", "생명공학대학", "체육대학");
      vnum = new Array("none", "humanity", "society", "edu", "natural", "engineering", "ict", "bne", "arts", "biotech", "sport");
    } else if (AdYear == "0") {
      num = new Array("--");
      vnum = new Array("none");
    }

    for (i = 0; i = document.getElementById("college_select").length; i++) {
      document.getElementById("college_select").options[0] = null;
    };

    for (i = 0; i < num.length; i++) {
      document.getElementById("college_select").options[i] = new Option(num[i], vnum[i]);
    }
  },
  college1214: function() {
    // var AdYear = document.getElementById("ad-year").value;
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
    } else if (AdYear == 2014 && fr == "natural") {
      num = new Array("--", "물리학과", "화학과", "생명과학과", "수학과");
      vnum = new Array("none", "physics", "chemistry", "bio-science", "math");
    } else if (AdYear == 2013 && fr == "natural") {
      num = new Array("--", "물리학과", "화학과", "생명과학과", "수학과", "동물생명공학과", "식물시스템과학과", "식품공학과", "식품영양학과", "시스템생명공학과");
      vnum = new Array("none", "physics", "chemistry", "bio-science", "math", "animal", "plantbio", "foodscience", "foodnutri", "systembio");
    } else if (AdYear == 2012 && fr == "natural") {
      num = new Array("--", "물리학과", "화학과", "생명과학과", "수학과", "동물생명공학과", "식물시스템과학과", "식품공학과", "식품영양학과");
      vnum = new Array("none", "physics", "chemistry", "bio-science", "math", "animal", "plantbio", "foodscience", "foodnutri");
    } else if (fr == "biotech") {
      num = new Array("--", "동물생명공학과", "식물시스템과학과", "식품공학과", "식품영양학과", "시스템생명공학과");
      vnum = new Array("none", "animal", "plantbio", "foodscience", "foodnutri", "systembio");
    } else if (fr == "bne") {
      num = new Array("--", "경영학부_경영학전공", "경영학부_글로벌금융", "경제학부", "광고홍보학과", "응용통계학과", "지식경영학부", "국제물류학과");
      vnum = new Array("none", "biz_ba", "biz_glofi", "econ", "adpr", "stat", "gloknol", "log");
    } else if (fr == "engineering") {
      num = new Array("--", "사회기반시스템공학부", "건축학부_건축학", "건축학부_건축공학", "화학신소재공학부", "기계공학부", "에너지시스템공학부", "전자전기공학부", "컴퓨터공학부", "융합공학부");
      vnum = new Array("none", "infra", "archi", "archieng", "chemeng", "me", "ese", "eee1214", "computer", "ie1214");
    } else if (fr == "engineering12") {
      num = new Array("--", "사회기반시스템공학부", "건축학부_건축학", "건축학부_건축공학", "화학신소재공학부", "기계공학부", "전자전기공학부", "컴퓨터공학부", "융합공학부");
      vnum = new Array("none", "infra", "archi", "archieng", "chemeng", "me", "eee1214", "computer12", "ie1214");
    } else if (fr == "arts") {
      num = new Array("--", "공연영상창작학부_연극전공", "공연영상창작학부_영화전공", "공연영상창작학부_공간연출전공", "공연영상창작학부_문예창작전공", "공연영상창작학부_사진전공", "공연영상창작학부_무용전공", "미술학부_한국화전공", "미술학부_서양화전공",
        "미술학부_조소전공", "디자인학부_공예전공", "디자인학부_시각디자인전공", "디자인학부_산업디자인전공", "디자인학부_실내환경디자인전공", "디자인학부_패션전공", "음악학부_작곡전공", "음악학부_성악전공", "음악학부_피아노전공", "음악학부_관현악전공", "전통예술학부");
      vnum = new Array("none", "theatre", "film", "tfdesign", "creativewriting", "photo", "dance", "kopaint", "fineart", "sculpture", "craftart", "vd", "id", "indesign", "fashion", "compose", "vocal", "piano", "orchestra", "koreanmusic");
    } else if (fr == "sport") {
      num = new Array("--", "스포츠과학부");
      vnum = new Array("none", "sportscience");
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
  },
  college15: function() {
    var fr = document.getElementById("college_select").value;
    if (fr == "humanity") {
      num = new Array("--", "국어국문학과", "영어영문학과", "유럽문화_독일어문학", "유럽문화_프랑스어문학", "유럽문화_러시아어문학", "아시아문화_일본어문학", "아시아문화_중국어문학", "철학과", "역사학과");
      vnum = new Array("none", "korean", "english", "german", "france", "russia", "japan", "china", "philosophy", "history");
    } else if (fr == "society") {
      num = new Array("--", "정치국제학과", "공공인재학부_행정학트랙", "공공인재학부_정책학트랙", "심리학과", "문헌정보학과", "사회복지학부", "미디어커뮤니케이션학부", "도시계획부동산학과", "사회학과");
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
    } else if (fr == "arts") {
      num = new Array("--", "공연영상창작학부_연극전공", "공연영상창작학부_영화전공", "공연영상창작학부_공간연출전공", "공연영상창작학부_문예창작전공", "공연영상창작학부_사진전공", "공연영상창작학부_무용전공", "미술학부_한국화전공", "미술학부_서양화전공",
        "미술학부_조소전공", "디자인학부_공예전공", "디자인학부_시각디자인전공", "디자인학부_산업디자인전공", "디자인학부_실내환경디자인전공", "디자인학부_패션전공", "음악학부_작곡전공", "음악학부_성악전공", "음악학부_피아노전공", "음악학부_관현악전공", "전통예술학부");
      vnum = new Array("none", "theatre", "film", "tfdesign", "creativewriting", "photo", "dance", "kopaint", "fineart", "sculpture", "craftart", "vd", "id", "indesign", "fashion", "compose", "vocal", "piano", "orchestra", "koreanmusic");
    } else if (fr == "biotech") {
      num = new Array("--", "동물생명공학과", "식물시스템과학과", "식품공학과", "식품영양학과", "시스템생명공학과");
      vnum = new Array("none", "animal", "plantbio", "foodscience", "foodnutri", "systembio");
    } else if (fr == "sport") {
      num = new Array("--", "스포츠과학부");
      vnum = new Array("none", "sportscience");
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
  },
  college16: function() {
    // var AdYear = Number(document.getElementById("ad-year").value);
    var fr = document.getElementById("college_select").value;
    if (fr == "humanity") {
      num = new Array("--", "국어국문학과", "영어영문학과", "유럽문화_독일어문학", "유럽문화_프랑스어문학", "유럽문화_러시아어문학", "아시아문화_일본어문학", "아시아문화_중국어문학", "철학과", "역사학과");
      vnum = new Array("none", "korean", "english", "german", "france", "russia", "japan", "china", "philosophy", "history");
    } else if (fr == "society") {
      num = new Array("--", "정치국제학과", "공공인재학부_행정학트랙", "공공인재학부_정책학트랙", "심리학과", "문헌정보학과", "사회복지학부", "미디어커뮤니케이션학부", "도시계획부동산학과", "사회학과");
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
    } else if (fr == "arts") {
      num = new Array("--", "공연영상창작학부_연극전공", "공연영상창작학부_영화전공", "공연영상창작학부_공간연출전공", "공연영상창작학부_문예창작전공", "공연영상창작학부_사진전공", "공연영상창작학부_무용전공", "미술학부_한국화전공", "미술학부_서양화전공",
        "미술학부_조소전공", "디자인학부_공예전공", "디자인학부_시각디자인전공", "디자인학부_산업디자인전공", "디자인학부_실내환경디자인전공", "디자인학부_패션전공", "음악학부_작곡전공", "음악학부_성악전공", "음악학부_피아노전공", "음악학부_관현악전공", "전통예술학부");
      vnum = new Array("none", "theatre", "film", "tfdesign", "creativewriting", "photo", "dance", "kopaint", "fineart", "sculpture", "craftart", "vd", "id", "indesign", "fashion", "compose", "vocal", "piano", "orchestra", "koreanmusic");
    } else if (AdYear <= 2018 && fr == "biotech") {
      num = new Array("--", "동물생명공학과", "식물시스템과학과", "식품공학과", "식품영양학과", "시스템생명공학과");
      vnum = new Array("none", "animal", "plantbio", "foodscience", "foodnutri", "systembio");
    } else if (AdYear >= 2019 && fr == "biotech") {
      num = new Array("--", "동물생명공학과", "식물생명공학과", "식품공학과", "식품영양학과", "시스템생명공학과");
      vnum = new Array("none", "animal", "plantbio", "foodscience", "foodnutri", "systembio");
    } else if (fr == "sport") {
      num = new Array("--", "스포츠과학부");
      vnum = new Array("none", "sportscience");
    } else if (fr == "artech") {
      num = new Array("--", "컴퓨터예술학부");
      vnum = new Array("none", "computerart");
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
  },
  tr_college: function() {
    var fr = document.getElementById("college_select").value;
    if (fr == "humanity") {
      num = new Array("--", "국어국문학과", "영어영문학과", "유럽문화_독일어문학", "유럽문화_프랑스어문학", "유럽문화_러시아어문학", "아시아문화_일본어문학", "아시아문화_중국어문학", "철학과", "역사학과");
      vnum = new Array("none", "korean", "english", "german", "france", "russia", "japan", "china", "philosophy", "history");
    } else if (fr == "society") {
      num = new Array("--", "정치국제학과", "공공인재학부_행정학트랙", "공공인재학부_정책학트랙", "심리학과", "문헌정보학과", "사회복지학부", "미디어커뮤니케이션학부", "도시계획부동산학과", "사회학과");
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
    } else if (fr == "arts") {
      num = new Array("--", "공연영상창작학부_연극전공", "공연영상창작학부_영화전공", "공연영상창작학부_공간연출전공", "공연영상창작학부_문예창작전공", "공연영상창작학부_무용전공", "미술학부_서양화전공", "미술학부_조소전공",
       "디자인학부_공예전공", "디자인학부_시각디자인전공", "디자인학부_산업디자인전공", "디자인학부_실내환경디자인전공", "디자인학부_패션전공", "음악학부_관현악전공");
      vnum = new Array("none", "theatre", "film", "tfdesign", "creativewriting", "dance", "fineart", "sculpture", "craftart", "vd", "id", "indesign", "fashion", "orchestra");
    } else if (fr == "biotech") {
      num = new Array("--", "동물생명공학과", "식물생명공학과", "식품공학과", "식품영양학과", "시스템생명공학과");
      vnum = new Array("none", "animal", "plantbio", "foodscience", "foodnutri", "systembio");
    } else if (fr == "sport") {
      num = new Array("--", "스포츠과학부");
      vnum = new Array("none", "sportscience");
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
  },
  multimajor: function() {
    var major = document.getElementById("Major_select").value;
    var Edu = ["education", "ece", "englishedu", "pe"]
    var Archi = ["archi"]
    var ICT = ["eee", "ie"]
    var Soft = ["computer", "soft"]
    var ArtSport = ["theatre", "film", "tfdesign", "creativewriting", "photo", "dance", "piano", "vocal", "compose", "orchestra",
      "kopaint", "fineart", "sculpture", "craftart", "vd", "id", "indesign", "fashion", "koreanmusic", "sportscience"
    ]
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
    } else if (ArtSport.includes(major)) {
      num = new Array("--", "전공심화", "복수전공", "연계전공", "융합전공", "설계전공");
      vnum = new Array("0", "69", "54", "54", "54", "54");
      document.getElementById("total_standard").value = "132";
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
  },
  multi_tr_kor: function() {
    var SecYear = document.getElementById("2ndyear").checked;
    var major = document.getElementById("Major_select").value;
    var Edu = ["education", "ece", "englishedu", "pe"]
    var Archi = ["archi"]
    var ICT = ["eee", "ie"]
    var ArtSport = ["theatre", "film", "tfdesign", "creativewriting", "photo", "dance", "piano", "vocal", "compose", "orchestra",
      "kopaint", "fineart", "sculpture", "craftart", "vd", "id", "indesign", "fashion", "sportscience"
    ]
    if (Edu.includes(major)) {
      num = new Array("해당없음", "전공심화", "복수전공", "연계전공", "융합전공", "설계전공");
      vnum = new Array("50", "66", "50", "50", "50", "50");
      document.getElementById("major_standard").value = "50";
      if (SecYear) {
        document.getElementById("total_standard").value = "99";
      } else {
        document.getElementById("total_standard").value = "66";
      }
    } else if (Archi.includes(major)) {
      num = new Array("해당없음", "전공심화", "복수전공", "연계전공", "융합전공", "설계전공");
      vnum = new Array("105", "105", "105", "105", "105", "105");
      document.getElementById("major_standard").value = "105";
      document.getElementById("total_standard").value = "105";
    } else if (ICT.includes(major)) {
      num = new Array("해당없음", "전공심화", "복수전공", "연계전공", "융합전공", "설계전공");
      vnum = new Array("45", "72", "45", "45", "45", "45");
      document.getElementById("major_standard").value = "45";
      document.getElementById("total_standard").value = "70";
    } else if (ArtSport.includes(major)) {
      num = new Array("해당없음", "전공심화", "복수전공", "연계전공", "융합전공", "설계전공");
      vnum = new Array("54", "66", "54", "54", "54", "54");
      document.getElementById("major_standard").value = "54";
      if (SecYear) {
        document.getElementById("total_standard").value = "99";
      } else {
        document.getElementById("total_standard").value = "66";
      }
    } else {
      num = new Array("해당없음", "전공심화", "복수전공", "연계전공", "융합전공", "설계전공");
      vnum = new Array("45", "66", "45", "45", "45", "45");
      document.getElementById("major_standard").value = "45";
      if (SecYear) {
        document.getElementById("total_standard").value = "99";
      } else {
        document.getElementById("total_standard").value = "66";
      }
    }

    for (i = 0; i = document.getElementById("MultiMajor_select").length; i++) {
      document.getElementById("MultiMajor_select").options[0] = null;
    };

    for (i = 0; i < num.length; i++) {
      document.getElementById("MultiMajor_select").options[i] = new Option(num[i], vnum[i]);
    }
  },
  multi_tr_eng: function() {
    var SecYear = document.getElementById("2ndyear").checked;
    var major = document.getElementById("Major_select").value;
    var Edu = ["education", "ece", "englishedu", "pe"]
    var Archi = ["archi"]
    var ICT = ["eee", "ie"]
    var ArtSport = ["theatre", "film", "tfdesign", "creativewriting", "photo", "dance", "piano", "vocal", "compose", "orchestra",
      "kopaint", "fineart", "sculpture", "craftart", "vd", "id", "indesign", "fashion", "sportscience"
    ]
    if (Edu.includes(major)) {
      num = new Array("N/A", "전공심화", "복수전공", "연계전공", "융합전공", "설계전공");
      vnum = new Array("50", "66", "50", "50", "50", "50");
      document.getElementById("major_standard").value = "50";
      if (SecYear) {
        document.getElementById("total_standard").value = "99";
      } else {
        document.getElementById("total_standard").value = "66";
      }
    } else if (Archi.includes(major)) {
      num = new Array("N/A", "전공심화", "복수전공", "연계전공", "융합전공", "설계전공");
      vnum = new Array("105", "105", "105", "105", "105", "105");
      document.getElementById("major_standard").value = "105";
      document.getElementById("total_standard").value = "105";
    } else if (ICT.includes(major)) {
      num = new Array("N/A", "전공심화", "복수전공", "연계전공", "융합전공", "설계전공");
      vnum = new Array("45", "72", "45", "45", "45", "45");
      document.getElementById("major_standard").value = "45";
      document.getElementById("total_standard").value = "70";
    } else if (ArtSport.includes(major)) {
      num = new Array("N/A", "전공심화", "복수전공", "연계전공", "융합전공", "설계전공");
      vnum = new Array("54", "66", "54", "54", "54", "54");
      document.getElementById("major_standard").value = "54";
      if (SecYear) {
        document.getElementById("total_standard").value = "99";
      } else {
        document.getElementById("total_standard").value = "66";
      }
    } else {
      num = new Array("N/A", "전공심화", "복수전공", "연계전공", "융합전공", "설계전공");
      vnum = new Array("45", "66", "45", "45", "45", "45");
      document.getElementById("major_standard").value = "45";
      document.getElementById("total_standard").value = "66";
      if (SecYear) {
        document.getElementById("total_standard").value = "99";
      } else {
        document.getElementById("total_standard").value = "66";
      }
    }

    for (i = 0; i = document.getElementById("MultiMajor_select").length; i++) {
      document.getElementById("MultiMajor_select").options[0] = null;
    };

    for (i = 0; i < num.length; i++) {
      document.getElementById("MultiMajor_select").options[i] = new Option(num[i], vnum[i]);
    }
  },
  multi_tr_chi: function() {
    var SecYear = document.getElementById("2ndyear").checked;
    var major = document.getElementById("Major_select").value;
    var Edu = ["education", "ece", "englishedu", "pe"]
    var Archi = ["archi"]
    var ICT = ["eee", "ie"]
    var ArtSport = ["theatre", "film", "tfdesign", "creativewriting", "photo", "dance", "piano", "vocal", "compose", "orchestra",
      "kopaint", "fineart", "sculpture", "craftart", "vd", "id", "indesign", "fashion", "sportscience"
    ]
    if (Edu.includes(major)) {
      num = new Array("无(해당없음)", "전공심화", "복수전공", "연계전공", "융합전공", "설계전공");
      vnum = new Array("50", "66", "50", "50", "50", "50");
      document.getElementById("major_standard").value = "50";
      document.getElementById("total_standard").value = "66";
      if (SecYear) {
        document.getElementById("total_standard").value = "99";
      } else {
        document.getElementById("total_standard").value = "66";
      }
    } else if (Archi.includes(major)) {
      num = new Array("无(해당없음)", "전공심화", "복수전공", "연계전공", "융합전공", "설계전공");
      vnum = new Array("105", "105", "105", "105", "105", "105");
      document.getElementById("major_standard").value = "105";
      document.getElementById("total_standard").value = "105";
    } else if (ICT.includes(major)) {
      num = new Array("无(해당없음)", "전공심화", "복수전공", "연계전공", "융합전공", "설계전공");
      vnum = new Array("45", "72", "45", "45", "45", "45");
      document.getElementById("major_standard").value = "45";
      document.getElementById("total_standard").value = "70";
    } else if (ArtSport.includes(major)) {
      num = new Array("无(해당없음)", "전공심화", "복수전공", "연계전공", "융합전공", "설계전공");
      vnum = new Array("54", "66", "54", "54", "54", "54");
      document.getElementById("major_standard").value = "54";
      if (SecYear) {
        document.getElementById("total_standard").value = "99";
      } else {
        document.getElementById("total_standard").value = "66";
      }
    } else {
      num = new Array("无(해당없음)", "전공심화", "복수전공", "연계전공", "융합전공", "설계전공");
      vnum = new Array("45", "66", "45", "45", "45", "45");
      document.getElementById("major_standard").value = "45";
      document.getElementById("total_standard").value = "66";
      if (SecYear) {
        document.getElementById("total_standard").value = "99";
      } else {
        document.getElementById("total_standard").value = "66";
      }
    }

    for (i = 0; i = document.getElementById("MultiMajor_select").length; i++) {
      document.getElementById("MultiMajor_select").options[0] = null;
    };

    for (i = 0; i < num.length; i++) {
      document.getElementById("MultiMajor_select").options[i] = new Option(num[i], vnum[i]);
    }
  },
  major_st_teaching: function() {
    var MajorTeachCheck = document.getElementById("major_teach").checked;

    if (MajorTeachCheck) {
      document.getElementById("major_standard").value = 50;
    } else {
      document.getElementById("major_standard").value = 45;
    }
  },
  double_st_teaching: function() {
    var DoubleTeachCheck = document.getElementById("double-teaching").checked;

    if (DoubleTeachCheck) {
      document.getElementById("double_st").value = 50;
    } else {
      document.getElementById("double_st").value = 45;
    }
  }
}

var Check = {
  none: function(none, point) {
    var none_checked = document.getElementById(none).checked;
    if (!none_checked) {
      document.getElementById(point).readOnly = false;
    } else {
      document.getElementById(point).value = null;
      document.getElementById(point).readOnly = true;
    }
  },
  multinone: function(none, point, cross) {
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
  },
  fusionstandard: function() {
    var fusion_min = document.getElementById("fusion-options").value;
    var crosspoint = document.getElementById("cross_point2");
    if (fusion_min == 45) {
      document.getElementById("fusion_standard").value = 45;
      crosspoint.setAttribute("max", 15);
    } else {
      document.getElementById("fusion_standard").value = 36;
      crosspoint.setAttribute("max", 12);
    }
  },
  teach: function() { //교직과정 설치 학과 구분
    var teachingmajor = ["education", "ece", "englishedu", "pe",
      "korean", "english", "german", "russia", "japan", "china", "philosophy", "history",
      "psyche", "lis", "physics", "chemistry", "bio-science", "math", "foodnutri", "theatre", "film",
      "photo", "dance", "kopaint", "fineart", "craftart", "koreanmusic"
    ]
    var major = document.getElementById("Major_select").value;
    if (teachingmajor.includes(major)) {
      document.getElementById("teaching_point").readOnly = false;
      document.getElementById("teaching_none").checked = false;
      document.getElementById("teaching_table").style.display = "";
    } else {
      document.getElementById("teaching_point").value = 0;
      document.getElementById("teaching_point").readOnly = true;
      document.getElementById("teaching_none").checked = true;
      document.getElementById("teaching_table").style.display = "none";
    }
  },
  multi_teach: function() {
    var teachingmajor = ["education", "ece", "englishedu", "pe",
      "korean", "english", "german", "russia", "japan", "china", "philosophy", "history",
      "psyche", "lis", "physics", "chemistry", "bio-science", "math", "foodnutri", "theatre", "film",
      "photo", "dance", "kopaint", "fineart", "craftart", "koreanmusic"
    ]
    var major = document.getElementById("Major_select").value;
    var Multimajor_standard = Number(document.getElementById("MultiMajor_select").value);
    if (Multimajor_standard == 45 && teachingmajor.includes(major)) {
      document.getElementById("maj_tea_check").style.display = "";
    } else {
      document.getElementById("maj_tea_check").style.display = "none";
      document.getElementById("major_teach").checked = false;
    }
  },
  double_teach_show: function() {
    var teachingmajor = ["education", "ece", "englishedu", "pe",
      "korean", "english", "german", "russia", "japan", "china", "philosophy", "history",
      "psyche", "lis", "physics", "chemistry", "bio-science", "math", "foodnutri", "theatre", "film",
      "photo", "dance", "kopaint", "fineart", "craftart", "koreanmusic"
    ]
    var major = document.getElementById("Major_select").value;
    if (teachingmajor.includes(major)) {
      document.getElementById("dou_tea_check").style.display = "";
    } else {
      document.getElementById("dou_tea_check").style.display = "none";
    }
  },
  korean: function() {
    // AdYear = Number(document.getElementById("ad-year").value);
    if (AdYear == 2014 || AdYear == 0) {
      document.getElementById("Korean").checked = false;
    } else {
      document.getElementById("Korean").checked = true;
    }
  }
}

var Standard = {
  major: function() {
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
  },
  tr_major: function() {
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
  },
  BaseNece: function() {
    var Major = document.getElementById("Major_select").value;
    // var AdYear = Number(document.getElementById("ad-year").value);
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
  },
  BaseNece_tr: function() {
    var Major = document.getElementById("Major_select").value;
    // var AdYear = Number(document.getElementById("ad-year").value);
    var SecYear = document.getElementById("2ndyear").checked;
    var i = AdYear - 2017;
    var Baseselect = Base_tr[Major];
    var Neceselect = Nece_tr[Major];
    if (Major == "none") {
      document.getElementById("base_standard").value = "-";
      document.getElementById("nece_standard").value = "-";
    } else if (SecYear && Major == "cmc") {
      document.getElementById("base_standard").value = Base_tr.cmc2[i];
      document.getElementById("nece_standard").value = Neceselect[i];
    } else if (SecYear && Major == "log") {
      document.getElementById("base_standard").value = Base_tr.log2[i];
      document.getElementById("nece_standard").value = Neceselect[i];
    } else {
      document.getElementById("base_standard").value = Baseselect[i];
      document.getElementById("nece_standard").value = Neceselect[i];
    }
  }
}

var Total = {
  sum: function() {
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
  },
  tr_sum: function() {
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
}

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
  "computer12": "소프트웨어학부",
  //예술대학
  "theatre": "공연영상창작학부 연극전공",
  "film": "공연영상창작학부 영화전공",
  "tfdesign": "공연영상창작학부 공간연출전공",
  "creativewriting": "공연영상창작학부 문예창작전공",
  "photo": "공연영상창작학부 사진전공",
  "dance": "공연영상창작학부 무용전공",
  "kopaint": "미술학부 한국화전공",
  "fineart": "미술학부 서양화전공",
  "sculpture": "미술학부 조소전공",
  "craftart": "디자인학부 공예전공",
  "id": "디자인학부 산업디자인전공",
  "vd": "디자인학부 시각디자인전공",
  "indesign": "디자인학부 실내환경디자인전공",
  "fashion": "디자인학부 패션전공",
  "compose": "음악학부 작곡전공",
  "vocal": "음악학부 성악전공",
  "piano": "음악학부 피아노전공",
  "orchestra": "음악학부 관현악전공",
  "koreanmusic": "전통예술학부",
  //예술공학대학
  "computerart": "컴퓨터예술학부",
  //생명공학대학
  "animal": "동물생명공학과",
  "plantbio": "식물생명공학과",
  "foodscience": "식품공학과",
  "foodnutri": "식품영양학과",
  "systembio": "시스템생명공학과",
  //체육대학
  "sportscience": "스포츠과학부"
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
  "computer12": "02-820-5301",
  //예술대학
  "theatre": "02-765-0717",
  "film": "02-820-5799",
  "tfdesign": "02-820-5809",
  //이하 안성캠퍼스
  "creativewriting": "031-670-3078",
  "photo": "031-670-3112",
  "dance": "031-670-3119",
  "kopaint": "031-670-3094",
  "fineart": "031-670-3099",
  "sculpture": "031-670-3124",
  "craftart": "031-670-3106",
  "id": "031-670-3127",
  "vd": "031-670-3129",
  "indesign": "031-670-4788",
  "fashion": "031-670-3277",
  "compose": "031-670-3291",
  "vocal": "031-670-3298",
  "piano": "031-670-3305",
  "orchestra": "031-670-3316",
  "koreanmusic": "031-670-4813",
  //예술공학대학
  "computerart": "031-670-3182",
  //생명공학대학
  "animal": "031-670-3084",
  "plantbio": "031-670-3037",
  "foodscience": "031-670-3031",
  "foodnutri": "031-670-3083",
  "systembio": "031-670-3062",
  //체육대학
  "sportscience": "031-670-4525",

  call: function() {
    var Major = document.getElementById("Major_select").value;
    if (Major == "none") {
      document.getElementById("dept").value = "-";
      document.getElementById("phone").value = "-";
    } else {
      document.getElementById("dept").value = Office[Major];
      document.getElementById("phone").value = PhoneNumber[Major];
      document.getElementById("phonenumber").setAttribute("href", "tel:" + PhoneNumber[Major]); //전화연결 가능
    }
  },
  DavinciCall: function() {
    var Major = document.getElementById("Major_select").value;
    var Ansung = ["creativewriting", "photo", "dance", "kopaint", "fineart", "sculpture",
    "craftart", "id", "vd", "indesign", "fashion", "compose",
    "vocal", "piano", "orchestra", "koreanmusic", "computerart",
    "animal", "plantbio", "foodscience", "foodnutri", "systembio", "sportscience"]

    if (Ansung.includes(Major)) {
      document.getElementById("Davinci").value = "031-670-4820";
      document.getElementById("Davincicall").setAttribute("href", "tel:031-670-4820");
    } else {
      document.getElementById("Davinci").value = "02-820-6633";
      document.getElementById("Davincicall").setAttribute("href", "tel:02-820-6633");
    }
  }
};

var Base = { //전공기초 2012년부터
  //인문대학
  "korean": ["10", "10", "10", "10", "10", "10", "10", "10", "10"],
  "english": ["12", "12", "12", "12", "12", "12", "12", "12", "12"],
  "german": ["14", "14", "14", "14", "14", "14", "14", "14", "14"],
  "france": ["14", "14", "14", "14", "14", "14", "14", "14", "14"],
  "russia": ["14", "14", "14", "14", "14", "14", "14", "14", "14"],
  "japan": ["12", "12", "12", "12", "12", "12", "12", "12", "12"],
  "china": ["12", "12", "12", "12", "12", "12", "12", "12", "12"],
  "philosophy": ["12", "12", "12", "12", "12", "12", "12", "12", "12"],
  "history": ["12", "12", "12", "12", "12", "12", "12", "12", "12"],
  //사회과학대학
  "psyche": ["10", "10", "10", "10", "10", "10", "10", "10", "10"],
  "politics": ["12", "12", "12", "12", "12", "12", "12", "12", "12"],
  "lis": ["10", "12", "12", "12", "12", "12", "12", "12", "12"],
  "socialwelfare": ["12", "12", "12", "12", "12", "12", "12", "12", "12"],
  "cmc": ["15", "15", "15", "15", "15", "15", "15", "15", "15"],
  "planning": ["12", "12", "12", "12", "12", "12", "12", "12", "12"],
  "sociology": ["12", "12", "12", "12", "12", "12", "12", "12", "12"],
  "public": ["18", "18", "18", "18", "18", "18", "18", "18", "18"],
  "public-admin": ["17", "17", "17", "17", "17", "18", "18", "17", "17"],
  "public-policy": ["16", "16", "16", "16", "16", "17", "17", "17", "17"],
  //사범대학
  "education": ["0", "0", "0", "0", "0", "0", "0", "0", "0"],
  "ece": ["9", "9", "9", "9", "9", "9", "9", "9", "9"],
  "englishedu": ["11", "11", "11", "11", "11", "11", "11", "11", "11"],
  "pe": ["10", "10", "10", "10", "10", "10", "10", "10", "10"],
  //자연과학대학
  "physics": ["10", "10", "14", "14", "14", "14", "14", "14", "14"],
  "chemistry": ["14", "14", "14", "14", "14", "14", "14", "14", "14"],
  "bio-science": ["14", "14", "14", "14", "14", "14", "14", "14", "14"],
  "math": ["16", "16", "16", "16", "16", "16", "16", "16", "16"],
  //경영경제대학
  "biz_ba": ["14", "14", "14", "14", "14", "14", "14", "14", "14"],
  "biz_glofi": ["18", "18", "18", "18", "18", "18", "18", "18", "18"],
  "econ": ["6", "6", "6", "6", "6", "6", "6", "6", "6"],
  "adpr": ["9", "9", "9", "9", "9", "9", "9", "9", "9"],
  "stat": ["12", "12", "12", "12", "12", "12", "12", "12", "12"],
  "gloknol": ["18", "18", "18", "18", "15", "18", "18", "18", "18"],
  "log": ["15", "15", "15", "15", "15", "15", "15", "15", "15"],
  "security": ["15", "15", "15", "15", "15", "15", "15", "15", "15"],
  //공과대학
  "infra": ["10", "10", "10", "10", "10", "10", "10", "10", "10"],
  "archi": ["12", "12", "12", "12", "12", "12", "12", "12", "12"],
  "archieng": ["12", "12", "12", "14", "14", "14", "14", "14", "14"],
  "chemeng": ["10", "10", "14", "14", "14", "14", "14", "14", "14"],
  "me": ["14", "14", "14", "14", "14", "14", "14", "14", "14"],
  "ese": ["14", "14", "14", "14", "14", "15", "15", "15", "15"],
  //창의ICT공과대학
  "eee1214": ["14", "14", "14", "14", "14", "14", "14", "14", "14"],
  "eee": ["14", "14", "14", "14", "14", "14", "14", "14", "14"],
  "computer12": ["10", "14", "14", "14", "14", "14", "14", "14", "14"],
  "computer": ["10", "14", "14", "14", "14", "14", "14", "14", "14"],
  "ie1214": ["18", "18", "18", "18", "18", "18", "18", "18", "18"],
  "soft": ["14", "14", "14", "14", "14", "14", "14", "14", "14"],
  "ie": ["18", "18", "18", "18", "18", "18", "18", "18", "18"],
  //예술대학
  "theatre": ["10", "10", "10", "10", "10", "10", "10", "10", "10"],
  "film": ["10", "10", "10", "10", "10", "10", "10", "10", "10"],
  "tfdesign": ["10", "10", "10", "10", "10", "10", "10", "10", "10"],
  //이하 안성캠퍼스
  "creativewriting": ["10", "10", "10", "10", "10", "10", "10", "10", "10"],
  "photo": ["14", "10", "10", "10", "10", "10", "10", "10", "10"],
  "dance": ["10", "10", "10", "11", "11", "11", "11", "11", "11"],
  "kopaint": ["10", "10", "10", "10", "10", "10", "10", "10", "10"],
  "fineart": ["10", "10", "10", "10", "10", "10", "10", "10", "10"],
  "sculpture": ["10", "10", "10", "10", "10", "10", "10", "10", "10"],
  "craftart": ["10", "10", "10", "10", "10", "10", "10", "10", "10"],
  "id": ["12", "12", "12", "12", "14", "14", "14", "15", "15"],
  "vd": ["10", "14", "14", "14", "14", "14", "14", "14", "14"],
  "indesign": ["12", "12", "12", "12", "12", "12", "12", "12", "12"],
  "fashion": ["13", "13", "13", "14", "14", "14", "14", "14", "14"],
  "compose": ["15", "14", "14", "14", "14", "14", "14", "14", "14"],
  "vocal": ["15", "14", "14", "14", "14", "14", "14", "14", "14"],
  "piano": ["15", "15", "15", "15", "15", "15", "15", "15", "15"],
  "orchestra": ["15", "15", "15", "15", "15", "15", "15", "15", "15"],
  "koreanmusic": ["14", "14", "14", "14", "14", "14", "14", "14", "14"],
  //예술공학대학
  "computerart": ["12", "12", "12", "12", "12", "12", "12", "12", "12"],
  //생명공학대학
  "animal": ["15", "15", "15", "15", "15", "15", "15", "15", "15"],
  "plantbio": ["15", "15", "15", "15", "15", "15", "15", "15", "15"],
  "foodscience": ["15", "15", "15", "15", "15", "15", "15", "15", "15"],
  "foodnutri": ["15", "15", "15", "15", "15", "15", "15", "15", "15"],
  "systembio": ["15", "15", "15", "15", "15", "15", "15", "15", "15"],
  //체육대학
  "sportscience": ["14", "14", "14", "14", "14", "14", "14", "14", "14"]
}

var Nece = { //전공필수 2012년부터
  //인문대학
  "korean": ["12", "12", "12", "12", "12", "12", "12", "12", "12"],
  "english": ["9", "9", "9", "9", "9", "9", "9", "9", "9"],
  "german": ["15", "15", "15", "15", "15", "15", "15", "15", "15"],
  "france": ["9", "15", "15", "15", "15", "15", "15", "15", "15"],
  "russia": ["18", "18", "18", "18", "18", "18", "18", "18", "18"],
  "japan": ["15", "15", "15", "15", "15", "15", "15", "15", "15"],
  "china": ["15", "15", "15", "15", "15", "15", "15", "15", "15"],
  "philosophy": ["18", "18", "18", "18", "18", "18", "18", "18", "18"],
  "history": ["9", "9", "9", "9", "9", "9", "9", "9", "9"],
  //사회과학대학
  "psyche": ["9", "9", "9", "9", "9", "9", "9", "9", "9"],
  "politics": ["9", "9", "9", "9", "9", "9", "9", "9", "9"],
  "lis": ["18", "18", "18", "18", "18", "18", "18", "18", "18"],
  "socialwelfare": ["18", "18", "18", "18", "18", "18", "18", "18", "18"],
  "cmc": ["9", "9", "9", "9", "9", "9", "9", "9", "9"],
  "planning": ["18", "18", "18", "18", "18", "18", "18", "18", "18"],
  "sociology": ["9", "9", "9", "9", "9", "9", "9", "9", "12"],
  "public": ["19", "19", "19", "19", "19", "19", "19", "19", "19"],
  "public-admin": ["19", "19", "19", "19", "19", "19", "19", "18", "18"],
  "public-policy": ["17", "17", "17", "17", "17", "17", "17", "18", "18"],
  //사범대학
  "education": ["15", "15", "15", "15", "15", "15", "15", "15", "15"],
  "ece": ["18", "18", "18", "18", "18", "19", "19", "19", "19"],
  "englishedu": ["18", "18", "18", "18", "18", "18", "18", "18", "18"],
  "pe": ["18", "18", "18", "18", "18", "18", "18", "18", "18"],
  //자연과학대학
  "physics": ["15", "15", "15", "18", "18", "18", "17", "17", "17"],
  "chemistry": ["15", "15", "15", "15", "15", "15", "15", "15", "15"],
  "bio-science": ["18", "18", "18", "18", "18", "18", "18", "18", "18"],
  "math": ["18", "18", "18", "18", "18", "18", "18", "18", "18"],
  //경영경제대학
  "biz_ba": ["24", "24", "24", "24", "24", "24", "24", "24", "24"],
  "biz_glofi": ["39", "39", "39", "39", "39", "39", "39", "39", "39"],
  "econ": ["9", "9", "9", "9", "9", "9", "9", "9", "9"],
  "adpr": ["9", "12", "12", "12", "12", "12", "12", "12", "12"],
  "stat": ["15", "15", "15", "15", "15", "15", "12", "12", "12"],
  "gloknol": ["21", "21", "21", "21", "21", "21", "21", "21", "21"],
  "log": ["18", "18", "18", "18", "18", "12", "12", "12", "12"],
  "security": ["18", "18", "18", "18", "15", "18", "18", "18", "18"],
  //공과대학
  "infra": ["18", "18", "18", "18", "18", "18", "18", "18", "18"],
  "archi": ["99", "99", "99", "99", "99", "99", "99", "99", "99"],
  "archieng": ["12", "12", "12", "17", "17", "17", "17", "17", "18"],
  "chemeng": ["18", "18", "18", "18", "18", "18", "18", "18"],
  "me": ["18", "18", "18", "18", "18", "18", "18", "18", "18"],
  "ese": ["12", "12", "12", "12", "15", "15", "15", "15", "15"],
  "eee1214": ["9", "9", "9", "9", "9", "9", "9", "9", "9"],
  "eee": ["9", "9", "9", "9", "9", "9", "9", "9", "9"],
  "computer12": ["12", "12", "12", "12", "12", "12", "13", "13", "13"],
  "computer": ["12", "12", "12", "12", "12", "12", "13", "13", "13"],
  "soft": ["6", "6", "6", "6", "6", "6", "13", "13", "13"],
  "ie1214": ["18", "18", "18", "18", "18", "18", "18", "18", "18"],
  "ie": ["18", "18", "18", "18", "18", "18", "18", "18", "18"],
  //예술대학
  "theatre": ["0", "0", "0", "0", "0", "0", "0", "0", "0"],
  "film": ["0", "0", "0", "0", "0", "0", "0", "0", "0"],
  "tfdesign": ["0", "0", "0", "0", "0", "0", "0", "0", "0"],
  //이하 안성캠퍼스
  "creativewriting": ["15", "15", "15", "15", "15", "15", "15", "15", "15"],
  "photo": ["9", "9", "9", "9", "9", "9", "9", "9", "9"],
  "dance": ["6", "6", "6", "14", "14", "14", "14", "14", "14"],
  "kopaint": ["12", "12", "12", "12", "12", "12", "12", "12", "12"],
  "fineart": ["9", "9", "9", "9", "9", "9", "9", "12", "12"],
  "sculpture": ["18", "18", "18", "23", "23", "23", "23", "23", "23"],
  "craftart": ["14", "14", "14", "14", "14", "14", "14", "14", "14"],
  "id": ["14", "14", "14", "14", "14", "14", "14", "17", "17"],
  "vd": ["12", "12", "12", "12", "17", "17", "17", "17", "17"],
  "indesign": ["12", "12", "12", "12", "12", "12", "12", "12", "12"],
  "fashion": ["17", "17", "17", "17", "17", "17", "17", "17", "17"],
  "compose": ["9", "9", "9", "9", "9", "9", "9", "9", "9"],
  "vocal": ["12", "12", "12", "12", "12", "12", "12", "12", "12"],
  "piano": ["16", "16", "16", "16", "16", "16", "16", "16", "16"],
  "orchestra": ["11", "11", "11", "11", "11", "11", "11", "11", "11"],
  "koreanmusic": ["18", "18", "18", "18", "18", "18", "18", "18", "18"],
  //예술공학대학
  "computerart": ["15", "15", "15", "15", "15", "15", "15", "15", "15"],
  //생명공학대학
  "animal": ["18", "18", "18", "18", "18", "18", "18", "18", "18"],
  "plantbio": ["18", "18", "18", "18", "18", "18", "18", "18", "18"],
  "foodscience": ["18", "18", "18", "18", "18", "18", "18", "18", "18"],
  "foodnutri": ["18", "18", "18", "18", "18", "18", "18", "18", "18"],
  "systembio": ["15", "15", "15", "15", "15", "15", "15", "15", "15"],
  //체육대학
  "sportscience": ["18", "18", "18", "18", "18", "18", "18", "18", "18"]
}

var Base_tr = { // 전공기초: [2017, 2018, 2019, 2020]
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
  "ie": ["6", "6", "6", "6"],
  //예술대학
  "theatre": ["10", "10", "10", "10"],
  "film": ["10", "10", "10", "10"],
  "tfdesign": ["10", "10", "10", "10"],
  //이하 안성캠퍼스
  "creativewriting": ["0", "0", "0", "0"],
  "dance": ["0", "0", "0", "0"],
  // "kopaint": ["10", "10", "10", "10"],
  "fineart": ["0", "0", "0", "0"],
  "sculpture": ["10", "10", "10", "10"],
  "craftart": ["10", "10", "10", "10"],
  "id": ["0", "0", "0", "0"],
  "vd": ["0", "0", "0", "0"],
  "indesign": ["12", "12", "12", "12"],
  "fashion": ["0", "0", "0", "0"],
  // "compose": ["14", "14", "14", "14"],
  // "vocal": ["15", "14", "14", "14"],
  // "piano": ["15", "15", "15", "15"],
  "orchestra": ["0", "0", "0", "0"],
  //생명공학대학
  "animal": ["0", "0", "0", "0"],
  "plantbio": ["0", "0", "0", "0"],
  "foodscience": ["0", "0", "0", "0"],
  "foodnutri": ["0", "0", "0", "0"],
  "systembio": ["0", "0", "0", "0"],
  //체육대학
  "sportscience": ["0", "0", "0", "0"]
};

var Nece_tr = { //전공필수: [2017, 2018, 2019, 2020]
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
  "ie": ["18", "18", "18", "18"],
  //예술대학
  "theatre": ["0", "0", "0", "0"],
  "film": ["0", "0", "0", "0"],
  "tfdesign": ["0", "0", "0", "0"],
  //이하 안성캠퍼스
  "creativewriting": ["15", "15", "15", "15"],
  "dance": ["14", "14", "14", "14"],
  // "kopaint": ["10", "10", "10", "10"],
  "fineart": ["9", "9", "12", "12"],
  "sculpture": ["23", "23", "23", "23"],
  "craftart": ["14", "14", "14", "14"],
  "id": ["0", "0", "0", "0"],
  "vd": ["17", "17", "17", "17"],
  "indesign": ["12", "12", "12", "12"],
  "fashion": ["17", "17", "17", "17"],
  // "compose": ["14", "14", "14", "14"],
  // "vocal": ["15", "14", "14", "14"],
  // "piano": ["15", "15", "15", "15"],
  "orchestra": ["12", "12", "12", "12"],
  //생명공학대학
  "animal": ["18", "18", "18", "18"],
  "plantbio": ["18", "18", "18", "18"],
  "foodscience": ["18", "18", "18", "18"],
  "foodnutri": ["18", "18", "18", "18"],
  "systembio": ["15", "15", "15", "15"],
  //체육대학
  "sportscience": ["18", "18", "18", "18"]
};
