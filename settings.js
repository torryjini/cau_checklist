//Get the button
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

function numbercolor(st, number) {
  var standard = Number(document.getElementById(st).value);
  var point = Number(document.getElementById(number).value);
  if(point >= standard){
    document.getElementById(number).style.color = "blue";
  } else {
    document.getElementById(number).style.color = "red";
  }
}

function gpacolor() {
  var point = Number(document.getElementById("average").value);
  if(point >= 2){
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

function MajortableReset() {
  document.getElementById("double_table").style.display = "none";
  document.getElementById("link_table").style.display = "none";
  document.getElementById("fusion_table").style.display = "none";
  document.getElementById("plan_table").style.display = "none";
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
    //자연과학대학
    "physics":"물리학과",
    "chemistry":"화학과",
    "bio-science":"생명과학과",
    "math":"수학과",
    //경영경제대학
    "biz_ba":"경영학부",
    "biz_glofi":"경영학부",
    "econ":"경제학부",
    "adpr":"광고홍보학과",
    "stat":"응용통계학과",
    "gloknol":"지식경영학부",
    "log":"국제물류학과",
    "security":"산업보안학과"
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
    //자연과학대학
    "physics":"02-820-5189",
    "chemistry":"02-820-5196",
    "bio-science":"02-820-5206",
    "math":"02-820-5214",
    //경영경제대학
    "biz_ba":"02-820-5539",
    "biz_glofi":"02-820-5540",
    "econ":"02-820-5487",
    "adpr":"02-820-5504",
    "stat":"02-820-5499",
    "gloknol":"02-820-5527",
    "log":"02-820-5537",
    "security":"02-820-5730"
  };
  var Major = document.getElementById("Major_select").value;
  if (Major == "none") {
    document.getElementById("dept").value = "-";
    document.getElementById("phone").value = "-";
  } else {
    document.getElementById("dept").value = Office[Major];
    document.getElementById("phone").value = PhoneNumber[Major];
  }
}

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
    "security": "15"
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
    "security": "18"
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
    "security": ["15", "15", "15", "15", "15"]
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
    "security": ["15", "18", "18", "18", "18"]
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
    "security": ["15", "15", "15", "15"]
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
    "security": ["18", "18", "18", "18"]
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
