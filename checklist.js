function Liberal_Sum() {
  var elective_point = Number(document.getElementById("elective_liberal").value);
  var common_kor_point = Number(document.getElementById("common_kor").value);
  var common_eng_point = Math.floor(Number(document.getElementById("common_eng").value));
  var common_etc_point = Number(document.getElementById("common_etc").value);
  var core_total_point = Number(document.getElementById("core_total").value);
  document.getElementById("liberal_total").value = elective_point + common_kor_point + common_eng_point + common_etc_point + core_total_point;
}

function Liberal_cal() {
  var AdYear = Number(document.getElementById("ad-year").value);
  var elective_point = Number(document.getElementById("elective_liberal").value);
  var common_kor_point = Number(document.getElementById("common_kor").value);
  var common_eng_point = Number(document.getElementById("common_eng").value);
  var common_eng_ex = document.getElementById("eng_ex").checked;
  var common_etc_point = Number(document.getElementById("common_etc").value);
  var account_check_SF = document.getElementById("account_check").checked;
  var Core1 = document.getElementById("core1").checked;
  var Core2 = document.getElementById("core2").checked;
  var Core3 = document.getElementById("core3").checked;
  var Core4 = document.getElementById("core4").checked;
  var Core5 = document.getElementById("core5").checked;
  var core_total_point = Number(document.getElementById("core_total").value);
  var liberal_total_point = Number(document.getElementById("liberal_total").value);
  var word = "입학년도 : " + AdYear + " 년\n선택교양 : " + elective_point + " 학점\n";

  if (AdYear < 1000) {
    document.getElementById("student-info").scrollIntoView();
    alert("입학년도를 선택하세요!");
    return false;
  }

  if (core_total_point > 0 && !Core1 && !Core2 && !Core3 && !Core4 && !Core5) {
    alert("핵심교양 영역 이수를 체크하세요!")
    return false;
  }

  if (Core1 || Core2 || Core3 || Core4 || Core5) {
    if (core_total_point == 0) {
      alert("핵심교양 학점을 입력하세요!")
      return false;
    }
  }

  if (common_kor_point < 2) {
    word += "공통교양\n - 국어 : " + [2 - common_kor_point] + " 학점 미달\n";
  } else {
    word += "공통교양\n - 국어 : 기준 통과\n";
  }

  if (common_eng_point < 2 && common_eng_ex) {
    word += " - 영어 : 면제\n"
  } else if (common_eng_point < 2 && !common_eng_ex) {
    word += " - 영어 : " + [2 - common_eng_point] + " 학점 미달\n";
  } else {
    word += " - 영어 : 기준 통과\n";
  }

  if (!account_check_SF) {
    if (common_etc_point < 10) {
      word += " - 기타 : " + [10 - common_etc_point] + " 학점 미달\n"
    } else {
      word += " - 기타 : 기준 통과\n"
    }
  } else {
    if (common_etc_point < 8) {
      word += " - 기타 : " + [8 - common_etc_point] + " 학점 미달 ( 회계와사회 : 면제 )\n"
    } else {
      word += " - 기타 : 기준 통과 ( 회계와사회 : 면제 )\n"
    }
  }

  if (Core1 && Core2 && Core3 && Core4 && Core5 && core_total_point >= 14) {
    word += "핵심교양 : 기준 통과\n"
  } else if (core_total_point < 15) {
    word += "핵심교양 : " + [15 - core_total_point] + " 학점 미달\n- 미이수 영역 : "
  } else {
    word += "핵심교양 : 최소학점 기준 통과\n- 미이수 영역 : "
  }

  if (!Core1) {
    word += "「도전」"
  }
  if (!Core2) {
    word += "「창의」"
  }
  if (!Core3) {
    word += "「융합」"
  }
  if (!Core4) {
    word += "「신뢰」"
  }
  if (!Core5) {
    word += "「소통」"
  }

  if (liberal_total_point <= 45) {
    word += "\n교양영역 계 : " + liberal_total_point + " 학점"
  } else {
    word += "\n교양영역 계 : " + liberal_total_point + " 학점_ " + [liberal_total_point - 45] + "학점 초과 45 학점만 인정"
  }

  alert(word)
}


// 여기서부터는 전공영역

function OfficeNumber() {
  var Office = {
    "psyche": "심리학과",
    "politics": "정치국제학과",
    "lis": "문헌정보학과",
    "socialwelfare": "사회복지학부",
    "cmc": "미디어커뮤니케이션학부",
    "planning": "도시계획/부동산학과",
    "sociology": "사회학과",
    "public-admin": "공공인재학부",
    "public-policy": "공공인재학부"
  };
  var PhoneNumber = {
    "psyche": "02-820-5124",
    "politics": "02-820-5473",
    "lis": "02-820-5144",
    "socialwelfare": "02-820-5149",
    "cmc": "02-820-5481",
    "planning": "02-820-5108",
    "sociology": "02-820-6351",
    "public-admin": "02-820-5445",
    "public-policy": "02-820-5445"
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
    crosspoint.setAttribute("max", 6);
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

    document.getElementById("link_major_none").checked = true;
    document.getElementById("link_major_point").value = null;
    document.getElementById("link_major_point").readOnly = true;
    document.getElementById("cross_point1").value = null;
    document.getElementById("cross_point1").readOnly = true;

    document.getElementById("fusion_major_none").checked = true;
    document.getElementById("fusion_major_point").value = null;
    document.getElementById("fusion_major_point").readOnly = true;
    document.getElementById("cross_point2").value = null;
    document.getElementById("cross_point2").readOnly = true;

    document.getElementById("plan_major_none").checked = true;
    document.getElementById("plan_major_point").value = null;
    document.getElementById("plan_major_point").readOnly = true;
    document.getElementById("cross_point3").value = null;
    document.getElementById("cross_point3").readOnly = true;
  } else if (Multimajortext.includes("복수")) {
    document.getElementById("double_major_none").checked = false;
    document.getElementById("double_major_point").readOnly = false;

    document.getElementById("link_major_none").checked = true;
    document.getElementById("link_major_point").value = null;
    document.getElementById("link_major_point").readOnly = true;
    document.getElementById("cross_point1").value = null;
    document.getElementById("cross_point1").readOnly = true;

    document.getElementById("fusion_major_none").checked = true;
    document.getElementById("fusion_major_point").value = null;
    document.getElementById("fusion_major_point").readOnly = true;
    document.getElementById("cross_point2").value = null;
    document.getElementById("cross_point2").readOnly = true;

    document.getElementById("plan_major_none").checked = true;
    document.getElementById("plan_major_point").value = null;
    document.getElementById("plan_major_point").readOnly = true;
    document.getElementById("cross_point3").value = null;
    document.getElementById("cross_point3").readOnly = true;
  } else if (Multimajortext.includes("연계")) {
    document.getElementById("double_major_none").checked = true;
    document.getElementById("double_major_point").value = null;
    document.getElementById("double_major_point").readOnly = true;

    document.getElementById("link_major_none").checked = false;
    document.getElementById("link_major_point").readOnly = false;
    document.getElementById("cross_point1").readOnly = false;

    document.getElementById("fusion_major_none").checked = true;
    document.getElementById("fusion_major_point").value = null;
    document.getElementById("fusion_major_point").readOnly = true;
    document.getElementById("cross_point2").value = null;
    document.getElementById("cross_point2").readOnly = true;

    document.getElementById("plan_major_none").checked = true;
    document.getElementById("plan_major_point").value = null;
    document.getElementById("plan_major_point").readOnly = true;
    document.getElementById("cross_point3").value = null;
    document.getElementById("cross_point3").readOnly = true;
  } else if (Multimajortext.includes("융합")) {
    document.getElementById("double_major_none").checked = true;
    document.getElementById("double_major_point").value = null;
    document.getElementById("double_major_point").readOnly = true;

    document.getElementById("link_major_none").checked = true;
    document.getElementById("link_major_point").value = null;
    document.getElementById("link_major_point").readOnly = true;
    document.getElementById("cross_point1").value = null;
    document.getElementById("cross_point1").readOnly = true;

    document.getElementById("fusion_major_none").checked = false;
    document.getElementById("fusion_major_point").readOnly = false;
    document.getElementById("cross_point2").readOnly = false;

    document.getElementById("plan_major_none").checked = true;
    document.getElementById("plan_major_point").value = null;
    document.getElementById("plan_major_point").readOnly = true;
    document.getElementById("cross_point3").value = null;
    document.getElementById("cross_point3").readOnly = true;
  } else if (Multimajortext.includes("설계")) {
    document.getElementById("double_major_none").checked = true;
    document.getElementById("double_major_point").value = null;
    document.getElementById("double_major_point").readOnly = true;

    document.getElementById("link_major_none").checked = true;
    document.getElementById("link_major_point").value = null;
    document.getElementById("link_major_point").readOnly = true;
    document.getElementById("cross_point1").value = null;
    document.getElementById("cross_point1").readOnly = true;

    document.getElementById("fusion_major_none").checked = true;
    document.getElementById("fusion_major_point").value = null;
    document.getElementById("fusion_major_point").readOnly = true;
    document.getElementById("cross_point2").value = null;
    document.getElementById("cross_point2").readOnly = true;

    document.getElementById("plan_major_none").checked = false;
    document.getElementById("plan_major_point").readOnly = false;
    document.getElementById("cross_point3").readOnly = false;
  } else if (Multimajortext.includes("선 택")) {
    document.getElementById("double_major_none").checked = false;
    document.getElementById("double_major_point").readOnly = false;

    document.getElementById("link_major_none").checked = false;
    document.getElementById("link_major_point").readOnly = false;
    document.getElementById("cross_point1").readOnly = false;

    document.getElementById("fusion_major_none").checked = false;
    document.getElementById("fusion_major_point").readOnly = false;
    document.getElementById("cross_point2").readOnly = false;

    document.getElementById("plan_major_none").checked = false;
    document.getElementById("plan_major_point").readOnly = false;
    document.getElementById("cross_point3").readOnly = false;
  }
}

// 연도별 학과 전공기초, 전공필수 기준
function BaseNeceStandard() {
  var Major_base = {
    "psyche": "10",
    "politics": "12",
    "lis": "12",
    "socialwelfare": "12",
    "cmc": "15",
    "planning": "12",
    "sociology": "12",
    "public-admin": "18",
    "public-policy": "16"
  };

  var Major_nece = {
    "psyche": "9",
    "politics": "9",
    "lis": "18",
    "socialwelfare": "18",
    "cmc": "9",
    "planning": "18",
    "sociology": "9",
    "public-admin": "26",
    "public-policy": "24"
  };

  var Major_base1718 = {
    "public-admin": "18",
    "public-policy": "17"
  };

  var Major_nece1718 = {
    "public-admin": "26",
    "public-policy": "24"
  };

  var Major_base2019 = {
    "public-admin": "17",
    "public-policy": "17"
  };

  var Major_nece2020 = {
    "sociology": "12",
    "public-admin": "18",
    "public-policy": "18"
  };
  var Major = document.getElementById("Major_select").value;
  var AdYear = Number(document.getElementById("ad-year").value);
  if (Major == "none") {
    document.getElementById("base_standard").value = "-";
    document.getElementById("nece_standard").value = "-";
  } else if (AdYear == 2017 || AdYear == 2018) {
    if (Major == "public-admin" || Major == "public-policy") {
      document.getElementById("base_standard").value = Major_base1718[Major];
      document.getElementById("nece_standard").value = Major_nece1718[Major];
    } else {
      document.getElementById("base_standard").value = Major_base[Major];
      document.getElementById("nece_standard").value = Major_nece[Major];
    }
  } else if (AdYear == 2019) {
    if (Major == "public-admin" || Major == "public-policy") {
      document.getElementById("base_standard").value = Major_base2019[Major];
      document.getElementById("nece_standard").value = Major_nece2020[Major];
    } else {
      document.getElementById("base_standard").value = Major_base[Major];
      document.getElementById("nece_standard").value = Major_nece[Major];
    }
  } else if (AdYear >= 2020) {
    if (Major == "public-admin" || Major == "public-policy") {
      document.getElementById("base_standard").value = Major_base2019[Major];
      document.getElementById("nece_standard").value = Major_nece2020[Major];
    } else if (Major == "sociology") {
      document.getElementById("base_standard").value = Major_base[Major];
      document.getElementById("nece_standard").value = Major_nece2020[Major];
    } else {
      document.getElementById("base_standard").value = Major_base[Major];
      document.getElementById("nece_standard").value = Major_nece[Major];
    }
  } else {
    document.getElementById("base_standard").value = Major_base[Major];
    document.getElementById("nece_standard").value = Major_nece[Major];
  }
}

function Major_result() {
  var AdYear = Number(document.getElementById("ad-year").value);
  var Majorstandard = document.getElementById("MultiMajor_select").value;
  var MajorSelect = document.getElementById("Major_select").value;
  var LinkCross = Number(document.getElementById("cross_point1").value);
  var FusionCross = Number(document.getElementById("cross_point2").value);
  var PlanCross = Number(document.getElementById("cross_point3").value);
  if (AdYear < 1000) {
    document.getElementById("student-info").scrollIntoView();
    alert("입학년도를 선택하세요!");
    return false;
  }

  if (MajorSelect == "none") {
    document.getElementById("student-info").scrollIntoView();
    alert("전공 학과를 선택하세요!");
    return false;
  } else if (Majorstandard < 45) {
    document.getElementById("student-info").scrollIntoView();
    alert("다전공 여부를 선택하세요!");
    return false;
  } else if (LinkCross > 12) {
    alert("연계전공의 교차인정 최대학점은 12 학점입니다!")
    return false;
  } else if (FusionCross > 15) {
    alert("융합전공의 교차인정 최대학점은 6 또는 15 학점입니다!\n- 문화컨텐츠/창업학/게임인터렉티브 : 6학점\n- 그 외 : 15 학점")
  } else if (PlanCross > 6) {
    alert("설계전공의 교차인정 최대학점은 6 학점입니다!")
    return false;
  } else {
    BaseNeceresult(Majorstandard);
  }
}

function BaseNeceresult(Majorstandard) {
  var AdYear = Number(document.getElementById("ad-year").value);
  var Major = document.getElementById("Major_select");
  var Majortext = Major.options[Major.selectedIndex].text;
  var Multimajor = document.getElementById("MultiMajor_select");
  var Multimajortext = Multimajor.options[Multimajor.selectedIndex].text;
  var BaseStandard = document.getElementById("base_standard").value;
  var NeceStandard = document.getElementById("nece_standard").value;
  var Basepoint = Number(document.getElementById("base_input").value);
  var Necepoint = Number(document.getElementById("nece_input").value);
  var Majorpoint = Number(document.getElementById("major_input").value);
  Majorstandard = Number(Majorstandard);
  var word = "입학년도 : " + AdYear + " 년";

  if (Majortext.includes("트랙")) {
    word += "\n주전공 : 공공인재학부 " + Majortext + "\n다전공 : " + Multimajortext + "\n";
  } else {
    word += "\n주전공 : " + Majortext + "\n다전공 : " + Multimajortext + "\n";
  }

  var FusionOption = Number(document.getElementById("fusion-options").value);
  if (Multimajortext.includes("융합")) {
    if (FusionOption == 0) {
      alert("융합전공 옵션을 선택하세요!");
      document.getElementById("fusion_standard").scrollIntoView();
      return false;
    }
  }

  if (Majorpoint < Necepoint) {
    alert("전공 과목은 전공 필수를 포함합니다!");
    return false;
  }

  if (Basepoint < BaseStandard) {
    word += "전공기초 : " + [BaseStandard - Basepoint] + " 학점 미달\n";
  } else {
    word += "전공기초 : 기준 통과\n";
  }

  if (Necepoint < NeceStandard) {
    word += "전공필수 : " + [NeceStandard - Necepoint] + " 학점 미달\n";
  } else {
    word += "전공필수 : 기준 통과\n";
  }

  if (Majorpoint < Majorstandard) {
    word += "전공과목 : " + [Majorstandard - Majorpoint] + " 학점 미달\n"
  } else {
    word += "전공과목 : 기준 통과\n"
  }

  var Doublecheck = document.getElementById("double_major_none").checked;
  var Doublepoint = Number(document.getElementById("double_major_point").value);
  if (!Doublecheck) {
    if (Doublepoint < 45) {
      word += "복수전공 : " + [45 - Doublepoint] + " 학점 미달\n"
    } else {
      word += "복수전공 : 최소학점 기준 통과\n"
    }
  }

  var Linkcheck = document.getElementById("link_major_none").checked;
  var LinkCross = Number(document.getElementById("cross_point1").value);
  var Linkpoint = Number(document.getElementById("link_major_point").value) + LinkCross;
  if (!Linkcheck) {
    if (Linkpoint < 36) {
      word += "연계전공 : " + [36 - Linkpoint] + " 학점 미달\n"
    } else {
      word += "연계전공 : 최소학점 기준 통과\n"
    }
  }


  var Fusioncheck = document.getElementById("fusion_major_none").checked;
  var Fusion = document.getElementById("fusion-options");
  var Fusiontext = Fusion.options[Fusion.selectedIndex].text;
  var Fusionpoint = Number(document.getElementById("fusion_major_point").value) + Number(document.getElementById("cross_point2").value);
  var FusionStandard = Number(document.getElementById("fusion_standard").value);
  if (!Fusioncheck) {
    if (Fusionpoint < FusionStandard) {
      word += "융합전공_" + Fusiontext + " : " + [FusionStandard - Fusionpoint] + " 학점 미달\n"
    } else {
      word += "융합전공_" + Fusiontext + " : 최소학점 기준 통과\n"
    }
  }

  var Plancheck = document.getElementById("plan_major_none").checked;
  var Planpoint = Number(document.getElementById("plan_major_point").value) + Number(document.getElementById("cross_point3").value);
  if (!Plancheck) {
    if (Planpoint < 36) {
      word += "설계전공 : " + [36 - Planpoint] + " 학점 미달\n"
    } else {
      word += "설계전공 : 최소학점 기준 통과\n"
    }
  }

  var Minorcheck = document.getElementById("minor_none").checked;
  var Minorpoint = Number(document.getElementById("minor_point").value);
  if (!Minorcheck) {
    if (Minorpoint < 21) {
      word += "부전공 : " + [21 - Minorpoint] + " 학점 미달\n"
    } else {
      word += "부전공 : 최소학점 기준 통과\n"
    }
  }

  var Freepoint = Number(document.getElementById("free_point").value);
  if (Freepoint < 1) {
    word += "자유선택 : " + Freepoint + " 학점 이수_CAU세미나 미수강\n"
  } else {
    word += "자유선택 : " + Freepoint + " 학점 이수_CAU세미나 이수 확인 필수!\n"
  }

  var Teachingcheck = document.getElementById("teaching_none").checked;
  var Teachingpoint = Number(document.getElementById("teaching_point").value);
  if (!Teachingcheck) {
    if (Teachingpoint < 22)
      word += "교직이수 : " + [22 - Teachingpoint] + " 학점 미달\n"
    else {
      word += "교직이수 : 최소학점 기준 통과\n"
    }
  }

  var TotalPoint = Number(document.getElementById("the_total").value);
  if (TotalPoint < 132) {
    word += "전체 이수학점 : " + [132 - TotalPoint] + " 학점 미달"
  } else {
    word += "전체 이수학점 : 기준 통과"
  }
  alert(word)
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

// 여기서부터는 졸업인정제 등 졸업요건 관련

function Etc_result() {
  var English_result = document.getElementById("English").checked;
  var Hanja_result = document.getElementById("Hanja").checked;
  var paper_result = document.getElementById("major_paper").checked;
  var paper_result2 = document.getElementById("double_major_paper").checked;
  var average_result = Number(document.getElementById("average").value);
  var word = "졸업인정제 통과 여부\n";
  if (!English_result) {
    word += "영어 : 미통과\n"
  } else {
    word += "영어 : 통과\n"
  }

  if (Hanja_result) {
    word += "한자 : 통과\n졸업시험/논문\n"
  } else {
    word += "한자 : 미통과\n졸업시험/논문\n"
  }

  if (paper_result) {
    word += "- 주전공 : 합격\n"
  } else {
    word += "- 주전공 : 불합격\n"
  }

  if (paper_result2) {
    word += "- 복수전공 : 통과/해당없음\n"
  } else {
    word += "- 복수전공 : 불합격\n"
  }

  if (average_result >= 2) {
    word += "평균평점 : 통과"
  } else {
    word += "평균평점 : 미통과_졸업불가"
  }

  alert(word);
}
