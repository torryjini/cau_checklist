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
  var word = "👉Entrance Year : " + AdYear;

  if (Majortext.includes("트랙")) {
    word += "\n👉Major : 공공인재학부 " + Majortext + "\n👉Multiple Major : " + Multimajortext + "\n";
  } else {
    word += "\n👉Major : " + Majortext + "\n👉Multiple Major : " + Multimajortext + "\n";
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
      word += "👉" + Fusiontext + "융합전공 : " + [FusionStandard - Fusionpoint] + " more credits required\n"
    } else {
      word += "👉" + Fusiontext + "융합전공 : Passed the minimum credits requirement\n"
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

  var TotalStandard = Number(document.getElementById("total_standard").value);
  var TotalPoint = Number(document.getElementById("the_total").value);
  if (TotalPoint < TotalStandard) {
    word += "👉Total credits : " + [TotalStandard - TotalPoint] + " more credits required"
  } else {
    word += "👉Total credits : Passed the requirement"
  }

  if (Basepoint >= BaseStandard && Necepoint >= NeceStandard && Majorpoint >= Majorstandard && TotalPoint >= TotalStandard) {
    if (Minorcheck && Teachingcheck) {
      if (Multimajortext.includes("심화")) {
        swal("Major credits result", word, "success")
      } else if (Multimajortext.includes("복수")) {
        if (Doublepoint >= 45) {
          swal("Major credits result", word, "success")
        } else {
          swal("Major credits result", word, "error")
        }
      } else if (Multimajortext.includes("연계")) {
        if (Linkpoint >= 36) {
          swal("Major credits result", word, "success")
        } else {
          swal("Major credits result", word, "error")
        }
      } else if (Multimajortext.includes("융합")) {
        if (Fusionpoint >= FusionStandard) {
          swal("Major credits result", word, "success")
        } else {
          swal("Major credits result", word, "error")
        }
      } else if (Multimajortext.includes("설계")) {
        if (Planpoint >= 36) {
          swal("Major credits result", word, "success")
        } else {
          swal("Major credits result", word, "error")
        }
      }
    } else if (Minorpoint >= 21 && Teachingcheck) {
      if (Multimajortext.includes("심화")) {
        swal("Major credits result", word, "success")
      } else if (Multimajortext.includes("복수")) {
        if (Doublepoint >= 45) {
          swal("Major credits result", word, "success")
        } else {
          swal("Major credits result", word, "error")
        }
      } else if (Multimajortext.includes("연계")) {
        if (Linkpoint >= 36) {
          swal("Major credits result", word, "success")
        } else {
          swal("Major credits result", word, "error")
        }
      } else if (Multimajortext.includes("융합")) {
        if (Fusionpoint >= FusionStandard) {
          swal("Major credits result", word, "success")
        } else {
          swal("Major credits result", word, "error")
        }
      } else if (Multimajortext.includes("설계")) {
        if (Planpoint >= 36) {
          swal("Major credits result", word, "success")
        } else {
          swal("Major credits result", word, "error")
        }
      }
    } else if (Minorpoint >= 21 && Teachingpoint >= 22) {
      if (Multimajortext.includes("심화")) {
        swal("Major credits result", word, "success")
      } else if (Multimajortext.includes("복수")) {
        if (Doublepoint >= 45) {
          swal("Major credits result", word, "success")
        } else {
          swal("Major credits result", word, "error")
        }
      } else if (Multimajortext.includes("연계")) {
        if (Linkpoint >= 36) {
          swal("Major credits result", word, "success")
        } else {
          swal("Major credits result", word, "error")
        }
      } else if (Multimajortext.includes("융합")) {
        if (Fusionpoint >= FusionStandard) {
          swal("Major credits result", word, "success")
        } else {
          swal("Major credits result", word, "error")
        }
      } else if (Multimajortext.includes("설계")) {
        if (Planpoint >= 36) {
          swal("Major credits result", word, "success")
        } else {
          swal("Major credits result", word, "error")
        }
      }
    } else if (Minorcheck && Teachingpoint >= 22) {
      if (Multimajortext.includes("심화")) {
        swal("Major credits result", word, "success")
      } else if (Multimajortext.includes("복수")) {
        if (Doublepoint >= 45) {
          swal("Major credits result", word, "success")
        } else {
          swal("Major credits result", word, "error")
        }
      } else if (Multimajortext.includes("연계")) {
        if (Linkpoint >= 36) {
          swal("Major credits result", word, "success")
        } else {
          swal("Major credits result", word, "error")
        }
      } else if (Multimajortext.includes("융합")) {
        if (Fusionpoint >= FusionStandard) {
          swal("Major credits result", word, "success")
        } else {
          swal("Major credits result", word, "error")
        }
      } else if (Multimajortext.includes("설계")) {
        if (Planpoint >= 36) {
          swal("Major credits result", word, "success")
        } else {
          swal("Major credits result", word, "error")
        }
      }
    } else {
      swal("Major credits result", word, "error")
    }
  } else {
    swal("Major credits result", word, "error")
  }
}
