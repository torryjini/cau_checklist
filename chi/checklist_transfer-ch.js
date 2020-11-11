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

function tr_multimajorchanges() {
  var SecYear = document.getElementById("2ndyear").checked;
  var major = document.getElementById("Major_select").value;
  var Edu = ["education", "ece", "englishedu", "pe"]
  var Archi = ["archi"]
  var ICT = ["eee", "ie"]
  var Arts = ["theatre", "film", "tfdesign"]
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
  } else if (Arts.includes(major)) {
    num = new Array("无(해당없음)", "전공심화", "복수전공", "연계전공", "융합전공", "설계전공");
    vnum = new Array("54", "66", "54", "54", "54", "54");
    document.getElementById("major_standard").value = "50";
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
