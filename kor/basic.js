var Modal = {
  lib12to14: function() {
    var word = "교양영역 이수기준"
    var content = "👉공통교양\n- 국어 : 글쓰기\n- 영어 : English1(Communication in English)\nEnglish2(English fo Professional Track)" +
      "\n- 기타 : 논리와사고(ACT) / 회계와사회 / 독서와토론(창의와소통) / 한국사\n" +
      "회계학원론(회계원리)을 이수했을 경우, '회계와사회' 면제" +
      "\n👉핵심교양 : 이수학점 및 역량 관계없이 최소 3과목 이상 이수 시 인정" +
      "\n👉선택교양 : 자율이수\n" + "👉총 교양학점 45학점까지만 인정됩니다!"
    swal(word, content, "info");
  },
  lib2015:function() {
    var word = "교양영역 이수기준"
    var content = "👉공통교양\n- 국어 : 글쓰기\n- 영어 : Communication in English\n- 기타 : 창의와소통 / 회계와사회 / ACT / 한국사\n" +
      "회계학원론(회계원리)을 이수했을 경우, '회계와사회' 면제" +
      "\n👉핵심교양 : 서로 다른 4개 영역에서 각 1과목 이상 이수\n" +
      "👉선택교양 : 자율이수\n" + "👉총 교양학점 45학점까지만 인정됩니다!"
    swal(word, content, "info");
  },
  lib2016: function() {
    var AdYear = Number(document.getElementById("ad-year").value);
    var College = document.getElementById("college_select").value;
    var Engin = ["engineering", "ict", "software"]
    var word = "교양영역 이수기준"
    var content1618 = "👉공통교양\n- 국어 : 글쓰기\n- 영어 : Communication in English\n- 기타 : 창의와소통/ACT/한국사/\n 앙트레프레너십시대의회계(회계와사회)\n" +
      "회계학원론(회계원리)을 이수했을 경우, '앙트레프레너십시대의회계' 면제" +
      "\n👉핵심교양 : 도전 / 창의 / 융합 / 신뢰 / 소통\n" +
      "각 영역에서 1과목 이상 이수!\n👉선택교양 : 자율이수\n" + "👉총 교양학점 45학점까지만 인정됩니다!"
    var contenteng = "👉공통교양\n- 국어 : 글쓰기\n- 영어 : Communication in English\n- 기타 : 창의와소통/ACT/한국사/\n앙트레프레너십시대의회계/\n디자인적사고와문제해결" +
      "\n회계학원론(회계원리)을 이수했을 경우, '앙트레프레너십시대의회계' 면제" +
      "\n👉핵심교양 : 도전 / 창의 / 융합 / 신뢰 / 소통\n" +
      "각 영역에서 1과목 이상 이수!\n👉선택교양 : 자율이수\n" + "👉총 교양학점 45학점까지만 인정됩니다!"
    var content = "👉공통교양\n- 국어 : 글쓰기\n- 영어 : Communication in English\n- 기타 : 창의와소통/ACT/한국사/\n앙트레프레너십시대의회계/\n컴퓨팅적사고와문제해결" +
      "\n회계학원론(회계원리)을 이수했을 경우, '앙트레프레너십시대의회계' 면제" +
      "\n👉핵심교양 : 도전 / 창의 / 융합 / 신뢰 / 소통\n" +
      "각 영역에서 1과목 이상 이수!\n👉선택교양 : 자율이수\n" + "👉총 교양학점 45학점까지만 인정됩니다!"

    if (Engin.includes(College)) {
      if (AdYear >= 2016 && AdYear <= 2018) {
        swal(word, content1618, "info");
      } else {
        swal(word, contenteng, "info");
      }
    } else {
      swal(word, content, "info");
    }
  },
  major12to15: function() {
    var word = "전공영역 이수기준"
    var content = "👉전공 : 각 학과별 세부 기준 참고\n" +
      "👉복수전공 : 복수전공 학과의 기준 참고\n복수전공의 전공기초는 자유선택으로 인정" +
      "\n👉연계/융합/설계전공 : 각 과정별 교과과정표를 참고하여 필수 과목 확인!" +
      "\n👉부전공 : 부전공 전공필수 6학점 이상 포함하여 수강" +
      "\n👉교직 : 교직과정 이수 확인(Tel.02-820-5080)" +
      "\n👉총 이수학점 : 132 학점 이상\n(교양은 최대 45학점까지 인정)"
    swal(word, content, "info");
  },
  major2016: function() {
    var word = "전공영역 이수기준"
    var content = "👉전공 : 각 학과별 세부 기준 참고\n" +
      "👉복수전공 : 복수전공 학과의 기준 참고\n복수전공의 전공기초는 자유선택으로 인정" +
      "\n👉연계/융합/설계전공 : 각 과정별 교과과정표를 참고하여 필수 과목 확인!" +
      "\n👉부전공 : 부전공 전공필수 6학점 이상 포함하여 수강" +
      "\n👉자유선택 : CAU세미나 1학점 의무수강" +
      "\n👉교직 : 교직과정 이수 확인(Tel.02-820-5080)" +
      "\n👉총 이수학점 : 132 학점 이상\n(교양은 최대 45학점까지 인정)"
    swal(word, content, "info");
  },
  major_tr: function() {
    var word = "학점 이수기준"
    var content = "👉교양 : 이수 의무 없음\n" +
      "👉전공 : 각 학과별 세부 기준 참고\n" +
      "👉다전공 : 2학년 편입생만 해당." +
      "\n- 복수전공 : 복수전공 학과의 기준 참고\n복수전공의 전공기초는 자유선택으로 인정" +
      "\n- 연계/융합/설계전공 : 각 과정별 교과과정표를 참고하여 필수 과목 확인!" +
      "\n👉부전공 : 부전공 전공필수 6학점 이상 포함하여 수강" +
      "\n👉교직 : 교직과정 이수 확인(Tel.02-820-5080)" +
      "\n👉총 이수학점 : 66 학점 이상(2학년 편입은 99 학점 이상)"
    swal(word, content, "info");
  }
}

var Result = {
  lib12to14: function() {
    var AdYear = Number(document.getElementById("ad-year").value);
    var College = document.getElementById("college_select").value;
    var elective_point = Number(document.getElementById("elective_liberal").value);
    var common_kor_point = Number(document.getElementById("common_kor").value);
    var common_eng_point = Number(document.getElementById("common_eng").value);
    var common_eng_ex = document.getElementById("eng_ex").checked;
    var common_etc_point = Number(document.getElementById("common_etc").value);
    var account_check_SF = document.getElementById("account_check").checked;
    var core_total_point = Number(document.getElementById("core_total").value);
    var liberal_total_point = Number(document.getElementById("liberal_total").value);
    var word = "👉입학연도 : " + AdYear + "년\n";

    if (AdYear < 1000) {
      document.getElementById("student-info").scrollIntoView();
      swal("입학연도를 선택하세요!", "", "error");
      return false;
    }

    if (common_kor_point < 2) {
      word += "👉공통교양\n - 국어 : " + [2 - common_kor_point] + " 학점 미달\n";
    } else {
      word += "👉공통교양\n - 국어 : 기준 통과\n";
    }

    if (common_eng_point < 4 && common_eng_ex) {
      word += " - 영어 : 면제\n"
    } else if (common_eng_point < 4 && !common_eng_ex) {
      word += " - 영어 : " + [4 - common_eng_point] + " 학점 미달\n";
    } else {
      word += " - 영어 : 기준 통과\n";
    }

    if (!account_check_SF) {
      if (common_etc_point < 8) {
        word += " - 기타 : " + [8 - common_etc_point] + " 학점 미달\n"
      } else {
        word += " - 기타 : 기준 통과\n"
      }
    } else {
      if (common_etc_point < 6) {
        word += " - 기타 : " + [6 - common_etc_point] + " 학점 미달(회계와사회 : 면제)\n"
      } else {
        word += " - 기타 : 기준 통과(회계와사회 : 면제)\n"
      }
    }

    if (core_total_point < 9) {
      word += "👉핵심교양 : " + [9 - core_total_point] + " 학점 미달"
    } else {
      word += "👉핵심교양 : 기준 통과"
    }

    word += "\n👉선택교양 : " + elective_point + " 학점"

    if (liberal_total_point <= 45) {
      word += "\n👉교양영역 계 : " + liberal_total_point + " 학점"
    } else {
      word += "\n👉교양영역 계 : " + liberal_total_point + " 학점_ " + [liberal_total_point - 45] + "학점 초과_45 학점만 인정"
    }

    if (common_kor_point == 2 && core_total_point >= 9) {
      if (common_eng_point >= 4 && common_etc_point == 8) {
        swal("교양영역 결과", word, "success")
      } else if (common_eng_point <= 4 && common_eng_ex && common_etc_point == 8) {
        swal("교양영역 결과", word, "success")
      } else if (common_eng_point >= 4 && common_etc_point >= 6 && account_check_SF) {
        swal("교양영역 결과", word, "success")
      } else if (common_eng_point <= 4 && common_eng_ex && common_etc_point >= 6 && account_check_SF) {
        swal("교양영역 결과", word, "success")
      } else {
        swal("교양영역 결과", word, "error")
      }
    } else {
      swal("교양영역 결과", word, "error")
    }
  },
  lib2015: function() {
    var AdYear = Number(document.getElementById("ad-year").value);
    var College = document.getElementById("college_select").value;
    var elective_point = Number(document.getElementById("elective_liberal").value);
    var common_kor_point = Number(document.getElementById("common_kor").value);
    var common_eng_point = Number(document.getElementById("common_eng").value);
    var common_eng_ex = document.getElementById("eng_ex").checked;
    var common_etc_point = Number(document.getElementById("common_etc").value);
    var account_check_SF = document.getElementById("account_check").checked;
    var core_total_point = Number(document.getElementById("core_total").value);
    var liberal_total_point = Number(document.getElementById("liberal_total").value);
    var MACH1 = Number(document.getElementById("mach1").value);
    var MACH1none = document.getElementById("mach1_none").checked;
    var MACH2 = Number(document.getElementById("mach2").value);
    var MACH2none = document.getElementById("mach2_none").checked;
    var MACH1_st = Number(document.getElementById("mach1_st").value);
    var MACH2_st = Number(document.getElementById("mach2_st").value);
    var word = "👉입학연도 : " + AdYear + "년\n";

    if (College == "none") {
      document.getElementById("student-info").scrollIntoView();
      swal("소속 대학을 선택하세요!", "", "error");
      return false;
    }

    if (common_kor_point < 2) {
      word += "👉공통교양\n - 국어 : " + [2 - common_kor_point] + " 학점 미달\n";
    } else {
      word += "👉공통교양\n - 국어 : 기준 통과\n";
    }

    if (common_eng_point < 2 && common_eng_ex) {
      word += " - 영어 : 면제\n"
    } else if (common_eng_point < 2 && !common_eng_ex) {
      word += " - 영어 : " + [2 - common_eng_point] + " 학점 미달\n";
    } else {
      word += " - 영어 : 기준 통과\n";
    }

    if (!account_check_SF) {
      if (common_etc_point < 8) {
        word += " - 기타 : " + [8 - common_etc_point] + " 학점 미달\n"
      } else {
        word += " - 기타 : 기준 통과\n"
      }
    } else {
      if (common_etc_point < 6) {
        word += " - 기타 : " + [6 - common_etc_point] + " 학점 미달(회계와사회 : 면제)\n"
      } else {
        word += " - 기타 : 기준 통과(회계와사회 : 면제)\n"
      }
    }

    if (core_total_point < 12) {
      word += "👉핵심교양 : " + [12 - core_total_point] + " 학점 미달\n- 핵심 역량 4개 영역 각 1과목 이상 이수 필요!"
    } else {
      word += "👉핵심교양 : 최소학점 기준 통과\n- 핵심 역량 4개 영역 각 1과목 이상 이수 확인!"
    }

    word += "\n👉선택교양 : " + elective_point + " 학점"

    if (!MACH1none) {
      if (MACH1 < 4) {
        word += "\n👉MACH교양 : " + [4 - MACH1] + " 학점 미달"
      } else {
        word += "\n👉MACH교양 : 기준 통과"
      }
    }

    if (!MACH2none) {
      if (MACH2 < 4) {
        word += "\n👉MACH실습 : " + [2 - MACH2] + " 학점 미달"
      } else {
        word += "\n👉MACH실습 : 기준 통과"
      }
    }

    if (liberal_total_point <= 45) {
      word += "\n👉교양영역 계 : " + liberal_total_point + " 학점"
    } else {
      word += "\n👉교양영역 계 : " + liberal_total_point + " 학점_ " + [liberal_total_point - 45] + "학점 초과_45 학점만 인정"
    }

    if (common_kor_point == 2 && core_total_point >= 11 && MACH1 >= MACH1_st && MACH2 >= MACH2_st) {
      if (common_eng_point == 2 && common_etc_point == 8) {
        swal("교양영역 결과", word, "success")
      } else if (common_eng_point <= 2 && common_eng_ex && common_etc_point == 8) {
        swal("교양영역 결과", word, "success")
      } else if (common_eng_point == 2 && common_etc_point >= 6 && account_check_SF) {
        swal("교양영역 결과", word, "success")
      } else if (common_eng_point <= 2 && common_eng_ex && common_etc_point >= 6 && account_check_SF) {
        swal("교양영역 결과", word, "success")
      } else {
        swal("교양영역 결과", word, "error")
      }
    } else {
      swal("교양영역 결과", word, "error")
    }
  },
  lib2016: function() {
    var AdYear = Number(document.getElementById("ad-year").value);
    var College = document.getElementById("college_select").value;
    var elective_point = Number(document.getElementById("elective_liberal").value);
    var common_kor_point = Number(document.getElementById("common_kor").value);
    var common_eng_point = Number(document.getElementById("common_eng").value);
    var common_eng_ex = document.getElementById("eng_ex").checked;
    var cometcst = Number(document.getElementById("com_etc_st").value);
    var common_etc_point = Number(document.getElementById("common_etc").value);
    var account_check_SF = document.getElementById("account_check").checked;
    var Core1 = document.getElementById("core1").checked;
    var Core2 = document.getElementById("core2").checked;
    var Core3 = document.getElementById("core3").checked;
    var Core4 = document.getElementById("core4").checked;
    var Core5 = document.getElementById("core5").checked;
    var core_total_point = Number(document.getElementById("core_total").value);
    var liberal_total_point = Number(document.getElementById("liberal_total").value);
    var MACH1 = Number(document.getElementById("mach1").value);
    var MACH1none = document.getElementById("mach1_none").checked;
    var MACH2 = Number(document.getElementById("mach2").value);
    var MACH2none = document.getElementById("mach2_none").checked;
    var MACH1_st = Number(document.getElementById("mach1_st").value);
    var MACH2_st = Number(document.getElementById("mach2_st").value);
    var word = "👉입학연도 : " + AdYear + "년\n";

    if (AdYear < 1000) {
      document.getElementById("student-info").scrollIntoView();
      swal("입학연도를 선택하세요!", "", "error");
      return false;
    }

    if (College == "none") {
      document.getElementById("student-info").scrollIntoView();
      swal("소속 대학을 선택하세요!", "", "error");
      return false;
    }

    if (core_total_point > 0 && !Core1 && !Core2 && !Core3 && !Core4 && !Core5) {
      swal("핵심교양 영역을 체크하세요!", "", "error")
      return false;
    }

    if (Core1 || Core2 || Core3 || Core4 || Core5) {
      if (core_total_point == 0) {
        swal("핵심교양 학점을 입력하세요!", "", "error")
        return false;
      }
    }

    if (common_kor_point < 2) {
      word += "👉공통교양\n - 국어 : " + [2 - common_kor_point] + " 학점 미달\n";
    } else {
      word += "👉공통교양\n - 국어 : 기준 통과\n";
    }

    if (common_eng_point < 2 && common_eng_ex) {
      word += " - 영어 : 면제\n"
    } else if (common_eng_point < 2 && !common_eng_ex) {
      word += " - 영어 : " + [2 - common_eng_point] + " 학점 미달\n";
    } else {
      word += " - 영어 : 기준 통과\n";
    }

    if (!account_check_SF) {
      if (common_etc_point < cometcst) {
        word += " - 기타 : " + [cometcst - common_etc_point] + " 학점 미달\n"
      } else {
        word += " - 기타 : 기준 통과\n"
      }
    } else {
      if (common_etc_point < cometcst - 2) {
        word += " - 기타 : " + [cometcst - 2 - common_etc_point] + " 학점 미달(앙트레프레너십시대의회계 : 면제)\n"
      } else {
        word += " - 기타 : 기준 통과(앙트레프레너십시대의회계 : 면제)\n"
      }
    }

    if (Core1 && Core2 && Core3 && Core4 && Core5 && core_total_point >= 14) {
      word += "👉핵심교양 : 기준 통과"
    } else if (core_total_point < 15) {
      word += "👉핵심교양 : " + [15 - core_total_point] + " 학점 미달\n- 미이수 영역 : "
    } else {
      word += "👉핵심교양 : 최소학점 기준 통과\n- 미이수 영역 : "
    }

    if (!Core1) {
      word += "도전 "
    }
    if (!Core2) {
      word += "창의 "
    }
    if (!Core3) {
      word += "융합 "
    }
    if (!Core4) {
      word += "신뢰 "
    }
    if (!Core5) {
      word += "소통"
    }

    var Engin =["engineering", "ict", "software"]
    if (AdYear >= 2019 && Engin.includes(College)) {
      word += "\n - MACH 교양 1 과목 이상 이수 확인!"
    }

    word += "\n👉선택교양 : " + elective_point + " 학점"

    if (!MACH1none) {
      if (MACH1 < 4) {
        word += "\n👉MACH교양 : " + [4 - MACH1] + " 학점 미달"
      } else {
        word += "\n👉MACH교양 : 기준 통과"
      }
    }

    if (!MACH2none) {
      if (MACH2 < 4) {
        word += "\n👉MACH실습 : " + [2 - MACH2] + " 학점 미달"
      } else {
        word += "\n👉MACH실습 : 기준 통과"
      }
    }

    if (liberal_total_point <= 45) {
      word += "\n👉교양영역 계 : " + liberal_total_point + " 학점"
    } else {
      word += "\n👉교양영역 계 : " + liberal_total_point + " 학점_ " + [liberal_total_point - 45] + "학점 초과_45 학점만 인정"
    }

    if (common_kor_point == 2 && Core1 && Core2 && Core3 && Core4 && Core5 && core_total_point >= 14 && MACH1 >= MACH1_st && MACH2 >= MACH2_st) {
      if (common_eng_point == 2 && common_etc_point >= cometcst) {
        swal("교양영역 결과", word, "success")
      } else if (common_eng_point <= 2 && common_eng_ex && common_etc_point >= cometcst) {
        swal("교양영역 결과", word, "success")
      } else if (common_eng_point == 2 && common_etc_point >= [cometcst - 2] && account_check_SF) {
        swal("교양영역 결과", word, "success")
      } else if (common_eng_point <= 2 && common_eng_ex && common_etc_point >= [cometcst - 2] && account_check_SF) {
        swal("교양영역 결과", word, "success")
      } else {
        swal("교양영역 결과", word, "error")
      }
    } else {
      swal("교양영역 결과", word, "error")
    }
  }
}

function Major_result() {
  var AdYear = Number(document.getElementById("ad-year").value);
  var Majorstandard = document.getElementById("MultiMajor_select").value;
  var MajorSelect = document.getElementById("Major_select").value;
  var LinkCross = Number(document.getElementById("cross_point1").value);
  var Fusion = document.getElementById("fusion-options");
  var Fusiontext = Fusion.options[Fusion.selectedIndex].text;
  var FusionCross = Number(document.getElementById("cross_point2").value);
  var PlanCross = Number(document.getElementById("cross_point3").value);

  if (AdYear < 1000) {
    document.getElementById("student-info").scrollIntoView();
    swal("입학연도를 선택하세요!", "", "error");
    return false;
  }

  if (Fusiontext.includes("문화") || Fusiontext.includes("창업") || Fusiontext.includes("게임")) {
    if (FusionCross > 6) {
      document.getElementById("double_major_none").scrollIntoView();
      swal(Fusiontext + "융합전공 교차인정\n최대학점은 6 학점입니다!", "", "error")
      return false;
    }
  } else if (Fusiontext.includes("금융")) {
    if (FusionCross > 15) {
      document.getElementById("double_major_none").scrollIntoView();
      swal(Fusiontext + "융합전공 교차인정\n최대학점은 15 학점입니다!", "", "error")
      return false;
    }
  } else if (Fusiontext.includes("인문") || Fusiontext.includes("보안") || Fusiontext.includes("테크") || Fusiontext.includes("벤처")) {
    if (FusionCross > 12) {
      document.getElementById("double_major_none").scrollIntoView();
      swal(Fusiontext + "융합전공 교차인정\n최대학점은 12 학점입니다!", "", "error")
      return false;
    }
  }

  if (MajorSelect == "none") {
    document.getElementById("student-info").scrollIntoView();
    swal("전공 학과를 선택하세요!", "", "error");
    return false;
  } else if (Majorstandard < 45) {
    document.getElementById("student-info").scrollIntoView();
    swal("다전공을 선택하세요!", "", "error");
    return false;
  } else if (LinkCross > 12) {
    document.getElementById("double_major_point").scrollIntoView();
    swal("연계전공의 교차인정 최대학점은 12 학점입니다!", "", "error")
    return false;
  } else if (PlanCross > 6) {
    document.getElementById("link_major_none").scrollIntoView();
    swal("자기설계전공의 교차인정 최대학점은 6 학점입니다!", "", "error")
    return false;
  } else {
    BaseNeceresult(Majorstandard);
  }
}

// 여기서부터는 졸업인정제 등 졸업요건 관련
//
// function etcmodal() {
//   var word = "기타 졸업요건"
//   var content = "졸업가능 : 학점 이수 기준 모두 통과 + 졸업인정제 통과 + 졸업시험/논문 합격 + 최저 평점 기준 통과\n\n"
//    + "수료 : 학점 이수 기준은 모두 통과했으나 졸업인정제(영어, 한자, 한국어)와 졸업시험/논문 중 하나라도 미통과시 수료\n\n"
//    + "졸업불가 : 학점 이수 기준 중 하나라도 부족하거나 전 학년 평점이 2.0 미만인 경우 졸업불가"
//   swal(word, content, "info");
// }

function Etc_result() {
  var English_result = document.getElementById("English").checked;
  var Hanja_result = document.getElementById("Hanja").checked;
  var Korean_result = document.getElementById("Korean").checked;
  var Paper_result = document.getElementById("major_paper").checked;
  var Paper_result2 = document.getElementById("double_major_paper").checked;
  var Average_result = Number(document.getElementById("average").value);

  if (Average_result > 4.5) {
    swal("평균평점은 4.5 만점입니다!", "", "error")
    return false;
  }

  var word = "👉졸업인정제\n";

  if (!English_result) {
    word += "- 영어 : 미통과\n"
  } else {
    word += "- 영어 : 통과\n"
  }

  if (Hanja_result) {
    word += "- 한자 : 통과\n"
  } else {
    word += "- 한자 : 미통과\n"
  }

  if (Korean_result) {
    word += "- 한국어 : 통과\n"
  } else {
    word += "- 한국어 : 미통과\n"
  }

  if (Paper_result) {
    word += "👉졸업시험/논문\n- 주전공 : 합격\n"
  } else {
    word += "👉졸업시험/논문\n- 주전공 : 불합격\n"
  }

  if (Paper_result2) {
    word += "- 복수전공 : 통과/해당없음\n"
  } else {
    word += "- 복수전공 : 불합격\n"
  }

  if (Average_result >= 2) {
    word += "👉평균평점 : 통과"
  } else {
    word += "👉평균평점 : 미통과_졸업불가"
  }

  if (English_result && Hanja_result && Korean_result && Paper_result && Paper_result2 && Average_result >= 2) {
    swal("기타 졸업요건 결과", word, "success");
  } else if (Average_result >= 2) {
    if (!English_result || !Hanja_result || !Korean_result || !Paper_result || !Paper_result2) {
      swal("기타 졸업요건 결과", word, "warning");
    }
  } else if (Average_result <= 2) {
    swal("기타 졸업요건 결과", word, "error");
  }
}
