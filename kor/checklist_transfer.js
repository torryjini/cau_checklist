function majormodal() {
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
    num = new Array("선  택", "경영학부_경영학전공", "경영학부_글로벌금융", "경제학부", "광고홍보학과", "응용통계학과", "국제물류학과", "산업보안학과");
    vnum = new Array("none", "biz_ba", "biz_glofi", "econ", "adpr", "stat", "log", "security");
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

function tr_Major_result() {
  var AdYear = Number(document.getElementById("ad-year").value);
  var SecYear = document.getElementById("2ndyear").checked;
  var Majorstandard = document.getElementById("MultiMajor_select").value;
  var MajorSelect = document.getElementById("Major_select").value;
  var Multimajor = document.getElementById("MultiMajor_select");
  var Multimajortext = Multimajor.options[Multimajor.selectedIndex].text;
  var LinkCross = Number(document.getElementById("cross_point1").value);
  var Fusion = document.getElementById("fusion-options");
  var Fusiontext = Fusion.options[Fusion.selectedIndex].text;
  var FusionCross = Number(document.getElementById("cross_point2").value);
  var PlanCross = Number(document.getElementById("cross_point3").value);
  if (AdYear < 1000) {
    document.getElementById("student-info").scrollIntoView();
    swal("편입학연도를 선택하세요!", "", "error");
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
  } else if (SecYear && Multimajortext.includes("해당")) {
    document.getElementById("student-info").scrollIntoView();
    swal("다전공을 선택하세요!", "2학년 편입은 다전공 대상입니다.", "error");
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

function BaseNeceresult(Majorstandard) {
  var AdYear = Number(document.getElementById("ad-year").value);
  var SecYear = document.getElementById("2ndyear").checked;
  var Major = document.getElementById("Major_select");
  var Majortext = Major.options[Major.selectedIndex].text;
  var Multimajor = document.getElementById("MultiMajor_select");
  var Multimajortext = Multimajor.options[Multimajor.selectedIndex].text;
  var Liberal_point = Number(document.getElementById("liberal_input").value);
  var BaseStandard = document.getElementById("base_standard").value;
  var NeceStandard = document.getElementById("nece_standard").value;
  var Basepoint = Number(document.getElementById("base_input").value);
  var Necepoint = Number(document.getElementById("nece_input").value);
  var Majorpoint = Number(document.getElementById("major_input").value);
  Majorstandard = Number(Majorstandard);
  var word = "👉편입학연도 : " + AdYear + "년";

  if (SecYear) {
    word += " - 2학년편입";
  } else {
    word += " - 3학년편입"
  }

  word += "\n👉주전공 : " + Majortext + "\n👉다전공 : " + Multimajortext + "\n👉교양 : " + Liberal_point + " 학점 이수\n";

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
  word += "👉자유선택 : " + Freepoint + " 학점 이수\n"

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
  var TotalStandard = Number(document.getElementById("total_standard").value);
  if (TotalPoint < TotalStandard) {
    word += "👉전체 이수학점 : " + [TotalStandard - TotalPoint] + " 학점 미달"
  } else {
    word += "👉전체 이수학점 : 기준 통과"
  }

  if (Basepoint >= BaseStandard && Necepoint >= NeceStandard && Majorpoint >= Majorstandard && TotalPoint >= TotalStandard) {
    if (Minorcheck && Teachingcheck) {
      if (Multimajortext.includes("해당")) {
        swal("학점 이수 결과", word, "success")
      } else if (Multimajortext.includes("심화")) {
        swal("학점 이수 결과", word, "success")
      } else if (Multimajortext.includes("복수")) {
        if (Doublepoint >= 45) {
          swal("학점 이수 결과", word, "success")
        } else {
          swal("학점 이수 결과", word, "error")
        }
      } else if (Multimajortext.includes("연계")) {
        if (Linkpoint >= 36) {
          swal("학점 이수 결과", word, "success")
        } else {
          swal("학점 이수 결과", word, "error")
        }
      } else if (Multimajortext.includes("융합")) {
        if (Fusionpoint >= FusionStandard) {
          swal("학점 이수 결과", word, "success")
        } else {
          swal("학점 이수 결과", word, "error")
        }
      } else if (Multimajortext.includes("설계")) {
        if (Planpoint >= 36) {
          swal("학점 이수 결과", word, "success")
        } else {
          swal("학점 이수 결과", word, "error")
        }
      }
    } else if (Minorpoint >= 21 && Teachingcheck) {
      if (Multimajortext.includes("해당")) {
        swal("학점 이수 결과", word, "success")
      } else if (Multimajortext.includes("심화")) {
        swal("학점 이수 결과", word, "success")
      } else if (Multimajortext.includes("복수")) {
        if (Doublepoint >= 45) {
          swal("학점 이수 결과", word, "success")
        } else {
          swal("학점 이수 결과", word, "error")
        }
      } else if (Multimajortext.includes("연계")) {
        if (Linkpoint >= 36) {
          swal("학점 이수 결과", word, "success")
        } else {
          swal("학점 이수 결과", word, "error")
        }
      } else if (Multimajortext.includes("융합")) {
        if (Fusionpoint >= FusionStandard) {
          swal("학점 이수 결과", word, "success")
        } else {
          swal("학점 이수 결과", word, "error")
        }
      } else if (Multimajortext.includes("설계")) {
        if (Planpoint >= 36) {
          swal("학점 이수 결과", word, "success")
        } else {
          swal("학점 이수 결과", word, "error")
        }
      }
    } else if (Minorpoint >= 21 && Teachingpoint >= 22) {
      if (Multimajortext.includes("해당")) {
        swal("학점 이수 결과", word, "success")
      } else if (Multimajortext.includes("심화")) {
        swal("학점 이수 결과", word, "success")
      } else if (Multimajortext.includes("복수")) {
        if (Doublepoint >= 45) {
          swal("학점 이수 결과", word, "success")
        } else {
          swal("학점 이수 결과", word, "error")
        }
      } else if (Multimajortext.includes("연계")) {
        if (Linkpoint >= 36) {
          swal("학점 이수 결과", word, "success")
        } else {
          swal("학점 이수 결과", word, "error")
        }
      } else if (Multimajortext.includes("융합")) {
        if (Fusionpoint >= FusionStandard) {
          swal("학점 이수 결과", word, "success")
        } else {
          swal("학점 이수 결과", word, "error")
        }
      } else if (Multimajortext.includes("설계")) {
        if (Planpoint >= 36) {
          swal("학점 이수 결과", word, "success")
        } else {
          swal("학점 이수 결과", word, "error")
        }
      }
    } else if (Minorcheck && Teachingpoint >= 22) {
      if (Multimajortext.includes("해당")) {
        swal("학점 이수 결과", word, "success")
      } else if (Multimajortext.includes("심화")) {
        swal("학점 이수 결과", word, "success")
      } else if (Multimajortext.includes("복수")) {
        if (Doublepoint >= 45) {
          swal("학점 이수 결과", word, "success")
        } else {
          swal("학점 이수 결과", word, "error")
        }
      } else if (Multimajortext.includes("연계")) {
        if (Linkpoint >= 36) {
          swal("학점 이수 결과", word, "success")
        } else {
          swal("학점 이수 결과", word, "error")
        }
      } else if (Multimajortext.includes("융합")) {
        if (Fusionpoint >= FusionStandard) {
          swal("학점 이수 결과", word, "success")
        } else {
          swal("학점 이수 결과", word, "error")
        }
      } else if (Multimajortext.includes("설계")) {
        if (Planpoint >= 36) {
          swal("학점 이수 결과", word, "success")
        } else {
          swal("학점 이수 결과", word, "error")
        }
      }
    } else {
      swal("학점 이수 결과", word, "error")
    }
  } else {
    swal("학점 이수 결과", word, "error")
  }
}
