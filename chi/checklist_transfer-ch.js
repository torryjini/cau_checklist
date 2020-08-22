function majormodal() {
  var word = "学分进修基准"
  var content = "👉教养 : 不需要进修\n" +
    "👉专业 : 请参考各专业的具体要求\n" +
    "👉多专业 : 只针对2年级插班生" +
    "\n- 双专业 : 请参考双专业学科的要求\n 双专业的专业基础认证为自由选择" +
    "\n- 联系/融合/设计专业(연계/융합/설계전공) : 请参考各部分的教课课程表确认必修课程!" +
    "\n👉副专业 : 需要包括副专业的专业必修6学分以上" +
    "\n👉教职 : 确认教职过程进修情况请联系(Tel.02-820-5080)" +
    "\n👉总进修学分 : 66 学分以上(2年级插班生：99学分以上)"
  swal(word, content, "info");
}

function tr_major_standard_maker() {
  var Multimajor_standard = Number(document.getElementById("MultiMajor_select").value);
  document.getElementById("major_standard").value = Multimajor_standard;
  var Multimajor = document.getElementById("MultiMajor_select");
  var Multimajortext = Multimajor.options[Multimajor.selectedIndex].text;

  if (Multimajortext.includes("해당없음")) {
    document.getElementById("total_standard").value = 66;
  } else {
    document.getElementById("total_standard").value = 99;
  }

  if (Multimajortext.includes("심화") || Multimajortext.includes("해당없음")) {
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

// 연도별 학과 전공기초, 전공필수 기준
function collegechanges(fr) {
  if (fr == "society") {
    num = new Array("选 择", "정치국제학과", "공공인재_행정학트랙", "공공인재_정책학트랙", "심리학과", "문헌정보학과", "사회복지학부", "미디어커뮤니케이션학부", "도시계획부동산학과", "사회학과");
    vnum = new Array("none", "politics", "public-admin", "public-policy", "psyche", "lis", "socialwelfare", "cmc", "planning", "sociology");
  } else if (fr == "bne") {
    num = new Array("选 择", "경영학부_경영학전공", "경영학부_글로벌금융", "경제학부", "광고홍보학과", "응용통계학과", "국제물류학과", "산업보안학과");
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

function BaseNeceStandard() {
  var Base = { // 전공기초: [2017, 2018, 2019, 2020]
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
    swal("请选择插班年度!", "", "error");
    return false;
  }

  if (Fusiontext.includes("문화") || Fusiontext.includes("창업") || Fusiontext.includes("게임")) {
    if (FusionCross > 6) {
      document.getElementById("double_major_none").scrollIntoView();
      swal(Fusiontext + "융합전공最多可以交叉认证6学分!", "", "error")
      return false;
    }
  } else if (Fusiontext.includes("금융")) {
    if (FusionCross > 15) {
      document.getElementById("double_major_none").scrollIntoView();
      swal(Fusiontext + "융합전공最多可以交叉认证15学分!", "", "error")
      return false;
    }
  } else if (Fusiontext.includes("인문") || Fusiontext.includes("보안") || Fusiontext.includes("테크") || Fusiontext.includes("벤처")) {
    if (FusionCross > 12) {
      document.getElementById("double_major_none").scrollIntoView();
      swal(Fusiontext + "융합전공最多可以交叉认证12学分!", "", "error")
      return false;
    }
  }

  if (MajorSelect == "none") {
    document.getElementById("student-info").scrollIntoView();
    swal("请选择专业学科!", "", "error");
    return false;
  } else if (SecYear && Multimajortext.includes("해당")) {
    document.getElementById("student-info").scrollIntoView();
    swal("请选择是否是多专业", "2年级插班生需要完成多专业。", "error");
    return false;
  } else if (LinkCross > 12) {
    document.getElementById("double_major_point").scrollIntoView();
    swal("联系专业(연계전공)最多可以交叉认证12学分!", "", "error")
    return false;
  } else if (PlanCross > 6) {
    document.getElementById("link_major_none").scrollIntoView();
    swal("自我设计专业(자기설계전공)最多可以交叉认证6学分!", "", "error")
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
  var word = "👉插班年度 : " + AdYear + "年";

  if (SecYear) {
    word += "- 二年级插班";
  } else {
    word += "- 三年级插班"
  }

  if (Majortext.includes("트랙")) {
    word += "\n👉主专业 : 공공인재학부" + Majortext + "\n👉多专业 : " + Multimajortext + "\n👉教养 : " + Liberal_point + " 学分\n";
  } else {
    word += "\n👉主专业 : " + Majortext + "\n👉多专业 : " + Multimajortext + "\n👉教养 : " + Liberal_point + " 学分\n";
  }

  var FusionOption = Number(document.getElementById("fusion-options").value);
  if (Multimajortext.includes("융합")) {
    if (FusionOption == 0) {
      swal("请选择细部融合专业（세부융합전공）!", "", "error");
      document.getElementById("double_major_none").scrollIntoView();
      return false;
    }
  }

  if (Majorpoint < Necepoint) {
    swal("专业课程包括专业必修!", "", "error");
    return false;
  }

  if (Basepoint < BaseStandard) {
    word += "👉专业基础 : 缺少" + [BaseStandard - Basepoint] + " 学分\n";
  } else {
    word += "👉专业基础 : 通过\n";
  }

  if (Necepoint < NeceStandard) {
    word += "👉专业必修 : 缺少" + [NeceStandard - Necepoint] + " 学分\n";
  } else {
    word += "👉专业必修 : 通过\n";
  }

  if (Majorpoint < Majorstandard) {
    word += "👉专业课程 : 缺少" + [Majorstandard - Majorpoint] + " 学分\n"
  } else {
    word += "👉专业课程 : 通过\n"
  }

  var Doublecheck = document.getElementById("double_major_none").checked;
  var Doublepoint = Number(document.getElementById("double_major_point").value);
  if (!Doublecheck) {
    if (Doublepoint < 45) {
      word += "👉双专业 : 缺少" + [45 - Doublepoint] + " 学分\n"
    } else {
      word += "👉双专业 : 通过最少学分\n"
    }
  }

  var Linkcheck = document.getElementById("link_major_none").checked;
  var LinkCross = Number(document.getElementById("cross_point1").value);
  var Linkpoint = Number(document.getElementById("link_major_point").value) + LinkCross;
  if (!Linkcheck) {
    if (Linkpoint < 36) {
      word += "👉연계전공 : 缺少" + [36 - Linkpoint] + " 学分\n"
    } else {
      word += "👉연계전공 : 通过最少学分\n"
    }
  }

  var Fusioncheck = document.getElementById("fusion_major_none").checked;
  var Fusion = document.getElementById("fusion-options");
  var Fusiontext = Fusion.options[Fusion.selectedIndex].text;
  var Fusionpoint = Number(document.getElementById("fusion_major_point").value) + Number(document.getElementById("cross_point2").value);
  var FusionStandard = Number(document.getElementById("fusion_standard").value);
  if (!Fusioncheck) {
    if (Fusionpoint < FusionStandard) {
      word += "👉" + Fusiontext + "융합전공 : 缺少" + [FusionStandard - Fusionpoint] + " 学分\n"
    } else {
      word += "👉" + Fusiontext + "융합전공 : 通过最少学分\n"
    }
  }

  var Plancheck = document.getElementById("plan_major_none").checked;
  var Planpoint = Number(document.getElementById("plan_major_point").value) + Number(document.getElementById("cross_point3").value);
  if (!Plancheck) {
    if (Planpoint < 36) {
      word += "👉연계전공 : 缺少" + [36 - Planpoint] + " 学分\n"
    } else {
      word += "👉연계전공 : 通过最少学分\n"
    }
  }

  var Minorcheck = document.getElementById("minor_none").checked;
  var Minorpoint = Number(document.getElementById("minor_point").value);
  if (!Minorcheck) {
    if (Minorpoint < 21) {
      word += "👉부전공 : 缺少" + [21 - Minorpoint] + " 学分\n"
    } else {
      word += "👉부전공 : 通过最少学分\n"
    }
  }

  var Freepoint = Number(document.getElementById("free_point").value);
  word += "👉자유선택 : " + Freepoint + " 学分\n"

  var Teachingcheck = document.getElementById("teaching_none").checked;
  var Teachingpoint = Number(document.getElementById("teaching_point").value);
  if (!Teachingcheck) {
    if (Teachingpoint < 22)
      word += "👉교직이수 : 缺少 " + [22 - Teachingpoint] + " 学分\n"
    else {
      word += "👉교직이수 : 通过最少学分\n"
    }
  }

  var TotalPoint = Number(document.getElementById("the_total").value);
  var TotalStandard = Number(document.getElementById("total_standard").value);
  if (TotalPoint < TotalStandard) {
    word += "👉总进修学分 : 缺少" + [TotalStandard - TotalPoint] + " 学分"
  } else {
    word += "👉总进修学分 : 通过"
  }

  if (Basepoint >= BaseStandard && Necepoint >= NeceStandard && Majorpoint >= Majorstandard && TotalPoint >= TotalStandard) {
    if (Minorcheck && Teachingcheck) {
      if (Multimajortext.includes("해당")) {
        swal("学分进修结果", word, "success")
      } else if (Multimajortext.includes("심화")) {
        swal("学分进修结果", word, "success")
      } else if (Multimajortext.includes("복수")) {
        if (Doublepoint >= 45) {
          swal("学分进修结果", word, "success")
        } else {
          swal("学分进修结果", word, "error")
        }
      } else if (Multimajortext.includes("연계")) {
        if (Linkpoint >= 36) {
          swal("学分进修结果", word, "success")
        } else {
          swal("学分进修结果", word, "error")
        }
      } else if (Multimajortext.includes("융합")) {
        if (Fusionpoint >= FusionStandard) {
          swal("学分进修结果", word, "success")
        } else {
          swal("学分进修结果", word, "error")
        }
      } else if (Multimajortext.includes("설계")) {
        if (Planpoint >= 36) {
          swal("学分进修结果", word, "success")
        } else {
          swal("学分进修结果", word, "error")
        }
      }
    } else if (Minorpoint >= 21 && Teachingcheck) {
      if (Multimajortext.includes("해당")) {
        swal("学分进修结果", word, "success")
      } else if (Multimajortext.includes("심화")) {
        swal("学分进修结果", word, "success")
      } else if (Multimajortext.includes("복수")) {
        if (Doublepoint >= 45) {
          swal("学分进修结果", word, "success")
        } else {
          swal("学分进修结果", word, "error")
        }
      } else if (Multimajortext.includes("연계")) {
        if (Linkpoint >= 36) {
          swal("学分进修结果", word, "success")
        } else {
          swal("学分进修结果", word, "error")
        }
      } else if (Multimajortext.includes("융합")) {
        if (Fusionpoint >= FusionStandard) {
          swal("学分进修结果", word, "success")
        } else {
          swal("学分进修结果", word, "error")
        }
      } else if (Multimajortext.includes("설계")) {
        if (Planpoint >= 36) {
          swal("学分进修结果", word, "success")
        } else {
          swal("学分进修结果", word, "error")
        }
      }
    } else if (Minorpoint >= 21 && Teachingpoint >= 22) {
      if (Multimajortext.includes("해당")) {
        swal("学分进修结果", word, "success")
      } else if (Multimajortext.includes("심화")) {
        swal("学分进修结果", word, "success")
      } else if (Multimajortext.includes("복수")) {
        if (Doublepoint >= 45) {
          swal("学分进修结果", word, "success")
        } else {
          swal("学分进修结果", word, "error")
        }
      } else if (Multimajortext.includes("연계")) {
        if (Linkpoint >= 36) {
          swal("学分进修结果", word, "success")
        } else {
          swal("学分进修结果", word, "error")
        }
      } else if (Multimajortext.includes("융합")) {
        if (Fusionpoint >= FusionStandard) {
          swal("学分进修结果", word, "success")
        } else {
          swal("学分进修结果", word, "error")
        }
      } else if (Multimajortext.includes("설계")) {
        if (Planpoint >= 36) {
          swal("学分进修结果", word, "success")
        } else {
          swal("学分进修结果", word, "error")
        }
      }
    } else if (Minorcheck && Teachingpoint >= 22) {
      if (Multimajortext.includes("해당")) {
        swal("学分进修结果", word, "success")
      } else if (Multimajortext.includes("심화")) {
        swal("学分进修结果", word, "success")
      } else if (Multimajortext.includes("복수")) {
        if (Doublepoint >= 45) {
          swal("学分进修结果", word, "success")
        } else {
          swal("学分进修结果", word, "error")
        }
      } else if (Multimajortext.includes("연계")) {
        if (Linkpoint >= 36) {
          swal("学分进修结果", word, "success")
        } else {
          swal("学分进修结果", word, "error")
        }
      } else if (Multimajortext.includes("융합")) {
        if (Fusionpoint >= FusionStandard) {
          swal("学分进修结果", word, "success")
        } else {
          swal("学分进修结果", word, "error")
        }
      } else if (Multimajortext.includes("설계")) {
        if (Planpoint >= 36) {
          swal("学分进修结果", word, "success")
        } else {
          swal("学分进修结果", word, "error")
        }
      }
    } else {
      swal("学分进修结果", word, "error")
    }
  } else {
    swal("学分进修结果", word, "error")
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
