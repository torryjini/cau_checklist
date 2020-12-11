function Liberal_cal() {
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
}

// 여기서부터는 전공영역

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
  var word = "👉입학연도 : " + AdYear + "년" + "\n👉주전공 : " + Majortext + "\n👉다전공 : " + Multimajortext + "\n";

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

  var TotalStandard = Number(document.getElementById("total_standard").value);
  var TotalPoint = Number(document.getElementById("the_total").value);
  if (TotalPoint < TotalStandard) {
    word += "👉전체 이수학점 : " + [TotalStandard - TotalPoint] + " 학점 미달"
  } else {
    word += "👉전체 이수학점 : 기준 통과"
  }

  if (Basepoint >= BaseStandard && Necepoint >= NeceStandard && Majorpoint >= Majorstandard && TotalPoint >= TotalStandard) {
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
