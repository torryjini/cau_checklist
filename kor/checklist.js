function liberalmodal() {
  var word = "교양영역 이수기준"
  var content = "👉공통교양\n- 국어 : 글쓰기\n- 영어 : Communication in English\n- 기타 : 창의와소통/ACT/한국사/컴퓨팅적사고와문제해결/\n 앙트레프레너십시대의회계(회계와사회)\n" +
    "회계학원론(회계원리)을 이수했을 경우, '앙트레프레너십시대의회계' 면제" +
    "\n👉핵심교양 : 도전 / 창의 / 융합 / 신뢰 / 소통\n" +
    "각 영역에서 1과목 이상 이수!\n👉선택교양 : 자율이수\n" + "👉총 교양학점 45학점까지만 인정됩니다!"
  swal(word, content, "info");
}

function majormodal() {
  var word = "전공영역 이수기준"
  var content = "👉전공 : 각 학과별 세부 기준 참고\n" +
    "👉복수전공 : 복수전공 학과의 기준 참고\n복수전공의 전공기초는 자유선택으로 인정" +
    "\n👉연계/융합/설계전공 : 각 과정별 교과과정표를 참고하여 필수 과목 확인!" +
    "\n👉부전공 : 부전공 전공필수 6학점 이상 포함하여 수강" +
    "\n👉자유선택 : CAU세미나 1학점 의무수강" +
    "\n👉교직 : 교직과정 이수 확인(Tel.02-820-5080)" +
    "\n👉총 이수학점 : 132 학점 이상\n(교양은 최대 45학점까지 인정)"
  swal(word, content, "info");
}

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
  var word = "👉입학연도 : " + AdYear + "년\n";

  if (AdYear < 1000) {
    document.getElementById("student-info").scrollIntoView();
    swal("입학연도를 선택하세요!", "", "error");
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
    if (common_etc_point < 10) {
      word += " - 기타 : " + [10 - common_etc_point] + " 학점 미달\n"
    } else {
      word += " - 기타 : 기준 통과\n"
    }
  } else {
    if (common_etc_point < 8) {
      word += " - 기타 : " + [8 - common_etc_point] + " 학점 미달(앙트레프레너십시대의회계 : 면제)\n"
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

  word += "\n👉선택교양 : " + elective_point + " 학점"

  if (liberal_total_point <= 45) {
    word += "\n👉교양영역 계 : " + liberal_total_point + " 학점"
  } else {
    word += "\n👉교양영역 계 : " + liberal_total_point + " 학점_ " + [liberal_total_point - 45] + "학점 초과_45 학점만 인정"
  }

  if (common_kor_point == 2 && Core1 && Core2 && Core3 && Core4 && Core5 && core_total_point >= 14) {
    if (common_eng_point == 2 && common_etc_point == 10) {
      swal("교양영역 결과", word, "success")
    } else if (common_eng_point <= 2 && common_eng_ex && common_etc_point == 10) {
      swal("교양영역 결과", word, "success")
    } else if (common_eng_point == 2 && common_etc_point >= 8 && account_check_SF) {
      swal("교양영역 결과", word, "success")
    } else if (common_eng_point <= 2 && common_eng_ex && common_etc_point >= 8 && account_check_SF) {
      swal("교양영역 결과", word, "success")
    } else {
      swal("교양영역 결과", word, "error")
    }
  } else {
    swal("교양영역 결과", word, "error")
  }
}


// 여기서부터는 전공영역

// 연도별 학과 전공기초, 전공필수 기준
function collegechanges(fr) {
  if (fr == "humanity") {
    num = new Array("선  택", "국어국문학과", "영어영문학과", "유럽문화_독일어문학", "유럽문화_프랑스어문학", "유럽문화_러시아어문학", "아시아문화_일본어문학", "아시아문화_중국어문학", "철학과", "역사학과");
    vnum = new Array("none", "korean", "english", "german", "france", "russia", "japan", "china", "philosophy", "history");
  } else if (fr == "society") {
    num = new Array("선  택", "정치국제학과", "공공인재_행정학트랙", "공공인재_정책학트랙", "심리학과", "문헌정보학과", "사회복지학부", "미디어커뮤니케이션학부", "도시계획부동산학과", "사회학과");
    vnum = new Array("none", "politics", "public-admin", "public-policy", "psyche", "lis", "socialwelfare", "cmc", "planning", "sociology");
  } else if (fr == "natural") {
    num = new Array("선  택", "물리학과", "화학과", "생명과학과", "수학과");
    vnum = new Array("none", "physics", "chemistry", "bio-science", "math");
  } else if (fr == "bne") {
    num = new Array("선  택", "경영학부_경영학전공", "경영학부_글로벌금융", "경제학부", "광고홍보학과", "응용통계학과", "지식경영학부", "국제물류학과", "산업보안학과");
    vnum = new Array("none", "biz_ba", "biz_glofi", "econ", "adpr", "stat", "gloknol", "log", "security");
  } else if (fr == "none") {
    num = new Array("선  택");
    vnum = new Array("none");
  }

  for (i = 0; i = document.getElementById("Major_select").length; i++) {
    document.getElementById("Major_select").options[0] = null;
  };

  for (i = 0; i < num.length; i++) {
    document.getElementById("Major_select").options[i] = new Option(num[i], vnum[i]);
  }
}

function BaseNeceStandard() {
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
  var word = "👉입학연도 : " + AdYear + "년\n👉주전공 : " + Majortext + "\n👉다전공 : " + Multimajortext + "\n";

  var FusionOption = Number(document.getElementById("fusion-options").value);
  if (Multimajortext.includes("융합")) {
    if (FusionOption == 0) {
      swal("세부 융합전공을 선택하세요!", "", "error");
      document.getElementById("double_major_none").scrollIntoView();
      return false;
    }
  }

  if (Majorpoint < Necepoint) {
    swal("전공 과목은 전공 필수를 포함합니다!", "", "error");
    return false;
  }

  if (Basepoint < BaseStandard) {
    word += "👉전공기초 : " + [BaseStandard - Basepoint] + " 학점 미달\n";
  } else {
    word += "👉전공기초 : 기준 통과\n";
  }

  if (Necepoint < NeceStandard) {
    word += "👉전공필수 : " + [NeceStandard - Necepoint] + " 학점 미달\n";
  } else {
    word += "👉전공필수 : 기준 통과\n";
  }

  if (Majorpoint < Majorstandard) {
    word += "👉전공과목 : " + [Majorstandard - Majorpoint] + " 학점 미달\n"
  } else {
    word += "👉전공과목 : 기준 통과\n"
  }

  var Doublecheck = document.getElementById("double_major_none").checked;
  var Doublepoint = Number(document.getElementById("double_major_point").value);
  if (!Doublecheck) {
    if (Doublepoint < 45) {
      word += "👉복수전공 : " + [45 - Doublepoint] + " 학점 미달\n"
    } else {
      word += "👉복수전공 : 최소학점 기준 통과\n"
    }
  }

  var Linkcheck = document.getElementById("link_major_none").checked;
  var LinkCross = Number(document.getElementById("cross_point1").value);
  var Linkpoint = Number(document.getElementById("link_major_point").value) + LinkCross;
  if (!Linkcheck) {
    if (Linkpoint < 36) {
      word += "👉연계전공 : " + [36 - Linkpoint] + " 학점 미달\n"
    } else {
      word += "👉연계전공 : 최소학점 기준 통과\n"
    }
  }


  var Fusioncheck = document.getElementById("fusion_major_none").checked;
  var Fusion = document.getElementById("fusion-options");
  var Fusiontext = Fusion.options[Fusion.selectedIndex].text;
  var Fusionpoint = Number(document.getElementById("fusion_major_point").value) + Number(document.getElementById("cross_point2").value);
  var FusionStandard = Number(document.getElementById("fusion_standard").value);
  if (!Fusioncheck) {
    if (Fusionpoint < FusionStandard) {
      word += "👉" + Fusiontext + "융합전공 : " + [FusionStandard - Fusionpoint] + " 학점 미달\n"
    } else {
      word += "👉" + Fusiontext + "융합전공 : 최소학점 기준 통과\n"
    }
  }

  var Plancheck = document.getElementById("plan_major_none").checked;
  var Planpoint = Number(document.getElementById("plan_major_point").value) + Number(document.getElementById("cross_point3").value);
  if (!Plancheck) {
    if (Planpoint < 36) {
      word += "👉설계전공 : " + [36 - Planpoint] + " 학점 미달\n"
    } else {
      word += "👉설계전공 : 최소학점 기준 통과\n"
    }
  }

  var Minorcheck = document.getElementById("minor_none").checked;
  var Minorpoint = Number(document.getElementById("minor_point").value);
  if (!Minorcheck) {
    if (Minorpoint < 21) {
      word += "👉부전공 : " + [21 - Minorpoint] + " 학점 미달\n"
    } else {
      word += "👉부전공 : 최소학점 기준 통과\n"
    }
  }

  var Freepoint = Number(document.getElementById("free_point").value);
  if (Freepoint < 1) {
    word += "👉자유선택 : " + Freepoint + " 학점 이수_CAU세미나 미수강\n"
  } else {
    word += "👉자유선택 : " + Freepoint + " 학점 이수\n_CAU세미나 이수 확인 필수!\n"
  }

  var Teachingcheck = document.getElementById("teaching_none").checked;
  var Teachingpoint = Number(document.getElementById("teaching_point").value);
  if (!Teachingcheck) {
    if (Teachingpoint < 22)
      word += "👉교직이수 : " + [22 - Teachingpoint] + " 학점 미달\n"
    else {
      word += "👉교직이수 : 최소학점 기준 통과\n"
    }
  }

  var TotalPoint = Number(document.getElementById("the_total").value);
  if (TotalPoint < 132) {
    word += "👉전체 이수학점 : " + [132 - TotalPoint] + " 학점 미달"
  } else {
    word += "👉전체 이수학점 : 기준 통과"
  }

  if (Basepoint >= BaseStandard && Necepoint >= NeceStandard && Majorpoint >= Majorstandard && Freepoint >= 1 && TotalPoint >= 132) {
    if (Minorcheck && Teachingcheck) {
      if (Multimajortext.includes("심화")) {
        swal("전공영역 결과", word, "success")
      } else if (Multimajortext.includes("복수")) {
        if (Doublepoint >= 45) {
          swal("전공영역 결과", word, "success")
        } else {
          swal("전공영역 결과", word, "error")
        }
      } else if (Multimajortext.includes("연계")) {
        if (Linkpoint >= 36) {
          swal("전공영역 결과", word, "success")
        } else {
          swal("전공영역 결과", word, "error")
        }
      } else if (Multimajortext.includes("융합")) {
        if (Fusionpoint >= FusionStandard) {
          swal("전공영역 결과", word, "success")
        } else {
          swal("전공영역 결과", word, "error")
        }
      } else if (Multimajortext.includes("설계")) {
        if (Planpoint >= 36) {
          swal("전공영역 결과", word, "success")
        } else {
          swal("전공영역 결과", word, "error")
        }
      }
    } else if (Minorpoint >= 21 && Teachingcheck) {
      if (Multimajortext.includes("심화")) {
        swal("전공영역 결과", word, "success")
      } else if (Multimajortext.includes("복수")) {
        if (Doublepoint >= 45) {
          swal("전공영역 결과", word, "success")
        } else {
          swal("전공영역 결과", word, "error")
        }
      } else if (Multimajortext.includes("연계")) {
        if (Linkpoint >= 36) {
          swal("전공영역 결과", word, "success")
        } else {
          swal("전공영역 결과", word, "error")
        }
      } else if (Multimajortext.includes("융합")) {
        if (Fusionpoint >= FusionStandard) {
          swal("전공영역 결과", word, "success")
        } else {
          swal("전공영역 결과", word, "error")
        }
      } else if (Multimajortext.includes("설계")) {
        if (Planpoint >= 36) {
          swal("전공영역 결과", word, "success")
        } else {
          swal("전공영역 결과", word, "error")
        }
      }
    } else if (Minorpoint >= 21 && Teachingpoint >= 22) {
      if (Multimajortext.includes("심화")) {
        swal("전공영역 결과", word, "success")
      } else if (Multimajortext.includes("복수")) {
        if (Doublepoint >= 45) {
          swal("전공영역 결과", word, "success")
        } else {
          swal("전공영역 결과", word, "error")
        }
      } else if (Multimajortext.includes("연계")) {
        if (Linkpoint >= 36) {
          swal("전공영역 결과", word, "success")
        } else {
          swal("전공영역 결과", word, "error")
        }
      } else if (Multimajortext.includes("융합")) {
        if (Fusionpoint >= FusionStandard) {
          swal("전공영역 결과", word, "success")
        } else {
          swal("전공영역 결과", word, "error")
        }
      } else if (Multimajortext.includes("설계")) {
        if (Planpoint >= 36) {
          swal("전공영역 결과", word, "success")
        } else {
          swal("전공영역 결과", word, "error")
        }
      }
    } else if (Minorcheck && Teachingpoint >= 22) {
      if (Multimajortext.includes("심화")) {
        swal("전공영역 결과", word, "success")
      } else if (Multimajortext.includes("복수")) {
        if (Doublepoint >= 45) {
          swal("전공영역 결과", word, "success")
        } else {
          swal("전공영역 결과", word, "error")
        }
      } else if (Multimajortext.includes("연계")) {
        if (Linkpoint >= 36) {
          swal("전공영역 결과", word, "success")
        } else {
          swal("전공영역 결과", word, "error")
        }
      } else if (Multimajortext.includes("융합")) {
        if (Fusionpoint >= FusionStandard) {
          swal("전공영역 결과", word, "success")
        } else {
          swal("전공영역 결과", word, "error")
        }
      } else if (Multimajortext.includes("설계")) {
        if (Planpoint >= 36) {
          swal("전공영역 결과", word, "success")
        } else {
          swal("전공영역 결과", word, "error")
        }
      }
    } else {
      swal("전공영역 결과", word, "error")
    }
  } else {
    swal("전공영역 결과", word, "error")
  }
}
