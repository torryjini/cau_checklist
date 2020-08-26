function majormodal() {
  var word = "Requirements for credits"
  var content = "👉General courses : No need to take credits\n" +
    "👉Major : Check the department's detailed requiremetns\n" +
    "👉Double major : Check each department's detailed requiremetns\nBasics of double majors are counted as Free choice" +
    "\n👉연계/융합/설계전공 : Check for required courses for each track!" +
    "\n👉Minor : Earn more than 6 credits from required courses of your minor" +
    "\n👉Teaching : Check for details(Tel.02-820-5080)" +
    "\n👉Total credits : Only 66 credits count for graduation(over 99 credits for 2nd year transfer students)"
  swal(word, content, "info");
}

function tr_major_standard_maker() {
  var Multimajor_standard = Number(document.getElementById("MultiMajor_select").value);
  document.getElementById("major_standard").value = Multimajor_standard;
  var Multimajor = document.getElementById("MultiMajor_select");
  var Multimajortext = Multimajor.options[Multimajor.selectedIndex].text;

  if (Multimajortext.includes("N/A")) {
    document.getElementById("total_standard").value = 66;
  } else {
    document.getElementById("total_standard").value = 99;
  }

  if (Multimajortext.includes("심화") || Multimajortext.includes("N/A")) {
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
  } else if (Multimajortext.includes("선 택")) {
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

// 연도별 학과 전공기초, Required 기준
function collegechanges(fr) {
  if (fr == "humanity") {
    num = new Array("Select", "국어국문학과", "영어영문학과", "유럽문화_독일어문학", "유럽문화_프랑스어문학", "유럽문화_러시아어문학", "아시아문화_일본어문학", "아시아문화_중국어문학", "철학과", "역사학과");
    vnum = new Array("none", "korean", "english", "german", "france", "russia", "japan", "china", "philosophy", "history");
  } else if (fr == "society") {
    num = new Array("Select", "정치국제학과", "공공인재_행정학트랙", "공공인재_정책학트랙", "심리학과", "문헌정보학과", "사회복지학부", "미디어커뮤니케이션학부", "도시계획부동산학과", "사회학과");
    vnum = new Array("none", "politics", "public-admin", "public-policy", "psyche", "lis", "socialwelfare", "cmc", "planning", "sociology");
  } else if (fr == "natural") {
    num = new Array("Select", "물리학과", "화학과", "생명과학과", "수학과");
    vnum = new Array("none", "physics", "chemistry", "bio-science", "math");
  } else if (fr == "bne") {
    num = new Array("Select", "경영학부_경영학전공", "경영학부_글로벌금융", "경제학부", "광고홍보학과", "응용통계학과", "국제물류학과", "산업보안학과");
    vnum = new Array("none", "biz_ba", "biz_glofi", "econ", "adpr", "stat", "log", "security");
  } else if (fr == "none") {
    num = new Array("Select");
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
    swal("Choose your transfer year!", "", "error");
    return false;
  }

  if (Fusiontext.includes("문화") || Fusiontext.includes("창업") || Fusiontext.includes("게임")) {
    if (FusionCross > 6) {
      document.getElementById("double_major_none").scrollIntoView();
      swal("Maximum credits for\n" + Fusiontext + "융합전공 are 6!", "", "error")
      return false;
    }
  } else if (Fusiontext.includes("금융")) {
    if (FusionCross > 15) {
      document.getElementById("double_major_none").scrollIntoView();
      swal("Maximum credits for\n" + Fusiontext + "융합전공 are 15!", "", "error")
      return false;
    }
  } else if (Fusiontext.includes("인문") || Fusiontext.includes("보안") || Fusiontext.includes("테크") || Fusiontext.includes("벤처")) {
    if (FusionCross > 12) {
      document.getElementById("double_major_none").scrollIntoView();
      swal("Maximum credits for\n" + Fusiontext + "융합전공 are 12!", "", "error")
      return false;
    }
  }

  if (MajorSelect == "none") {
    document.getElementById("student-info").scrollIntoView();
    swal("Choose your major!", "", "error");
    return false;
  } else if (SecYear && Multimajortext.includes("N/A")) {
    document.getElementById("student-info").scrollIntoView();
    swal("Choose your multiple major!", "If you transferred to 2nd year, multiple majors are required!", "error");
    return false;
  } else if (LinkCross > 12) {
    document.getElementById("double_major_point").scrollIntoView();
    swal("Maximum cross credits for 연계전공 are 12!", "", "error")
    return false;
  } else if (PlanCross > 6) {
    document.getElementById("link_major_none").scrollIntoView();
    swal("Maximum cross credits for 자기설계전공 are 6!", "", "error")
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
  var word = "👉Transfer year : " + AdYear;

  if (SecYear) {
    word += "- 2nd year transfer";
  } else {
    word += "- 3rd year transfer"
  }

  if (Majortext.includes("트랙")) {
    word += "\n👉Major : 공공인재학부" + Majortext + "\n👉Multiple Major : " + Multimajortext + "\n👉교양 : " + Liberal_point + " credits\n";
  } else {
    word += "\n👉Major : " + Majortext + "\n👉Multiple Major : " + Multimajortext + "\n👉교양 : " + Liberal_point + " credits\n";
  }

  var FusionOption = Number(document.getElementById("fusion-options").value);
  if (Multimajortext.includes("융합")) {
    if (FusionOption == 0) {
      swal("Choose your 융합전공!", "", "error");
      document.getElementById("double_major_none").scrollIntoView();
      return false;
    }
  }

  if (Majorpoint < Necepoint) {
    swal("Major courses include required courses!", "", "error");
    return false;
  }

  if (Basepoint < BaseStandard) {
    word += "👉Basics : " + [BaseStandard - Basepoint] + " more credits required\n";
  } else {
    word += "👉Basics : Passed the requirement\n";
  }

  if (Necepoint < NeceStandard) {
    word += "👉Required : " + [NeceStandard - Necepoint] + " more credits required\n";
  } else {
    word += "👉Required : Passed the requirement\n";
  }

  if (Majorpoint < Majorstandard) {
    word += "👉Major course : " + [Majorstandard - Majorpoint] + " more credits required\n"
  } else {
    word += "👉Major course : Passed the requirement\n"
  }

  var Doublecheck = document.getElementById("double_major_none").checked;
  var Doublepoint = Number(document.getElementById("double_major_point").value);
  if (!Doublecheck) {
    if (Doublepoint < 45) {
      word += "👉Double major : " + [45 - Doublepoint] + " more credits required\n"
    } else {
      word += "👉Double major : Passed the minimum credits requirement\n"
    }
  }

  var Linkcheck = document.getElementById("link_major_none").checked;
  var LinkCross = Number(document.getElementById("cross_point1").value);
  var Linkpoint = Number(document.getElementById("link_major_point").value) + LinkCross;
  if (!Linkcheck) {
    if (Linkpoint < 36) {
      word += "👉연계전공 : " + [36 - Linkpoint] + " more credits required\n"
    } else {
      word += "👉연계전공 : Passed the minimum credits requirement\n"
    }
  }

  var Fusioncheck = document.getElementById("fusion_major_none").checked;
  var Fusion = document.getElementById("fusion-options");
  var Fusiontext = Fusion.options[Fusion.selectedIndex].text;
  var Fusionpoint = Number(document.getElementById("fusion_major_point").value) + Number(document.getElementById("cross_point2").value);
  var FusionStandard = Number(document.getElementById("fusion_standard").value);
  if (!Fusioncheck) {
    if (Fusionpoint < FusionStandard) {
      word += Fusiontext + "👉융합전공 : " + [FusionStandard - Fusionpoint] + " more credits required\n"
    } else {
      word += Fusiontext + "👉융합전공 : Passed the minimum credits requirement\n"
    }
  }

  var Plancheck = document.getElementById("plan_major_none").checked;
  var Planpoint = Number(document.getElementById("plan_major_point").value) + Number(document.getElementById("cross_point3").value);
  if (!Plancheck) {
    if (Planpoint < 36) {
      word += "👉설계전공 : " + [36 - Planpoint] + " more credits required\n"
    } else {
      word += "👉설계전공 : Passed the minimum credits requirement\n"
    }
  }

  var Minorcheck = document.getElementById("minor_none").checked;
  var Minorpoint = Number(document.getElementById("minor_point").value);
  if (!Minorcheck) {
    if (Minorpoint < 21) {
      word += "👉Minor : " + [21 - Minorpoint] + " more credits required\n"
    } else {
      word += "👉Minor : Passed the minimum credits requirement\n"
    }
  }

  var Freepoint = Number(document.getElementById("free_point").value);
  word += "👉Free choice : " + Freepoint + " credits\n"

  var Teachingcheck = document.getElementById("teaching_none").checked;
  var Teachingpoint = Number(document.getElementById("teaching_point").value);
  if (!Teachingcheck) {
    if (Teachingpoint < 22)
      word += "👉Teaching : " + [22 - Teachingpoint] + " more credits required\n"
    else {
      word += "👉Teaching : Passed the minimum credits requirement\n"
    }
  }

  var TotalPoint = Number(document.getElementById("the_total").value);
  var TotalStandard = Number(document.getElementById("total_standard").value);
  if (TotalPoint < TotalStandard) {
    word += "👉Total credits : " + [TotalStandard - TotalPoint] + " more credits required"
  } else {
    word += "👉Total credits : Passed the requirement"
  }

  if (Basepoint >= BaseStandard && Necepoint >= NeceStandard && Majorpoint >= Majorstandard && TotalPoint >= TotalStandard) {
    if (Minorcheck && Teachingcheck) {
      if (Multimajortext.includes("N/A")) {
        swal("Total credits result", word, "success")
      } else if (Multimajortext.includes("심화")) {
        swal("Total credits result", word, "success")
      } else if (Multimajortext.includes("복수")) {
        if (Doublepoint >= 45) {
          swal("Total credits result", word, "success")
        } else {
          swal("Total credits result", word, "error")
        }
      } else if (Multimajortext.includes("연계")) {
        if (Linkpoint >= 36) {
          swal("Total credits result", word, "success")
        } else {
          swal("Total credits result", word, "error")
        }
      } else if (Multimajortext.includes("융합")) {
        if (Fusionpoint >= FusionStandard) {
          swal("Total credits result", word, "success")
        } else {
          swal("Total credits result", word, "error")
        }
      } else if (Multimajortext.includes("설계")) {
        if (Planpoint >= 36) {
          swal("Total credits result", word, "success")
        } else {
          swal("Total credits result", word, "error")
        }
      }
    } else if (Minorpoint >= 21 && Teachingcheck) {
      if (Multimajortext.includes("N/A")) {
        swal("Total credits result", word, "success")
      } else if (Multimajortext.includes("심화")) {
        swal("Total credits result", word, "success")
      } else if (Multimajortext.includes("복수")) {
        if (Doublepoint >= 45) {
          swal("Total credits result", word, "success")
        } else {
          swal("Total credits result", word, "error")
        }
      } else if (Multimajortext.includes("연계")) {
        if (Linkpoint >= 36) {
          swal("Total credits result", word, "success")
        } else {
          swal("Total credits result", word, "error")
        }
      } else if (Multimajortext.includes("융합")) {
        if (Fusionpoint >= FusionStandard) {
          swal("Total credits result", word, "success")
        } else {
          swal("Total credits result", word, "error")
        }
      } else if (Multimajortext.includes("설계")) {
        if (Planpoint >= 36) {
          swal("Total credits result", word, "success")
        } else {
          swal("Total credits result", word, "error")
        }
      }
    } else if (Minorpoint >= 21 && Teachingpoint >= 22) {
      if (Multimajortext.includes("N/A")) {
        swal("Total credits result", word, "success")
      } else if (Multimajortext.includes("심화")) {
        swal("Total credits result", word, "success")
      } else if (Multimajortext.includes("복수")) {
        if (Doublepoint >= 45) {
          swal("Total credits result", word, "success")
        } else {
          swal("Total credits result", word, "error")
        }
      } else if (Multimajortext.includes("연계")) {
        if (Linkpoint >= 36) {
          swal("Total credits result", word, "success")
        } else {
          swal("Total credits result", word, "error")
        }
      } else if (Multimajortext.includes("융합")) {
        if (Fusionpoint >= FusionStandard) {
          swal("Total credits result", word, "success")
        } else {
          swal("Total credits result", word, "error")
        }
      } else if (Multimajortext.includes("설계")) {
        if (Planpoint >= 36) {
          swal("Total credits result", word, "success")
        } else {
          swal("Total credits result", word, "error")
        }
      }
    } else if (Minorcheck && Teachingpoint >= 22) {
      if (Multimajortext.includes("N/A")) {
        swal("Total credits result", word, "success")
      } else if (Multimajortext.includes("심화")) {
        swal("Total credits result", word, "success")
      } else if (Multimajortext.includes("복수")) {
        if (Doublepoint >= 45) {
          swal("Total credits result", word, "success")
        } else {
          swal("Total credits result", word, "error")
        }
      } else if (Multimajortext.includes("연계")) {
        if (Linkpoint >= 36) {
          swal("Total credits result", word, "success")
        } else {
          swal("Total credits result", word, "error")
        }
      } else if (Multimajortext.includes("융합")) {
        if (Fusionpoint >= FusionStandard) {
          swal("Total credits result", word, "success")
        } else {
          swal("Total credits result", word, "error")
        }
      } else if (Multimajortext.includes("설계")) {
        if (Planpoint >= 36) {
          swal("Total credits result", word, "success")
        } else {
          swal("Total credits result", word, "error")
        }
      }
    } else {
      swal("Total credits result", word, "error")
    }
  } else {
    swal("Total credits result", word, "error")
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
