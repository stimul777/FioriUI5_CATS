jQuery.sap.require("sap.ui.core.mvc.Controller");
jQuery.sap.require("sap.ca.scfld.md.controller.BaseFullscreenController");
jQuery.sap.require("sap.ui.model.odata.datajs");
jQuery.sap.require("hcm.mytimesheet.model.TimeEntry");
jQuery.sap.require("hcm.mytimesheet.utils.DataManager");
jQuery.sap.require("hcm.mytimesheet.utils.ConcurrentEmployment");
jQuery.sap.require("sap.ca.ui.model.format.DateFormat");
jQuery.sap.require("sap.ca.ui.model.type.Number");
jQuery.sap.require("jquery.sap.storage");
sap.ui.controller("hcm.mytimesheet.HCM_TSH_MANExtension.view.S31Custom", {
  // extHookChangeHeaderFooterOptions: null,
  // extHookChangeObjectBeforePost: null,
  // onInit: function () {
  //     sap.ca.scfld.md.controller.BaseFullscreenController.prototype.onInit.call(this);
  //     this.RESULTS_TOP = 30;
  //     this.top = this.RESULTS_TOP;
  //     this.localSkip = 0;
  //     this.remoteSkip = 0;
  //     this.MODEL_SIZE_LIMIT = 1000;
  //     this.gv_fieldRelated = "";
  //     this.searchField_begDa = "";
  //     this.searchField_endDa = "";
  //     this.gv_zzkey = "";
  //     this.pagingEnabled = false;
  //     this.localTypeList = [];
  //     this.favoriteDeletedIds = [];
  //     this.remoteTypeList = [];
  //     this.resultsTotalCount = 0;
  //     this.remoteSearchPhrase = "";
  //     this.favoriteSelected = false;
  //     this.worklistSelectedObj = {};
  //     this.worklistItemSelected = false;
  //     this.continueSearchOnServerActive = false;
  //     this.initialize();
  //     this.entry = new hcm.mytimesheet.model.TimeEntry(0, "", false, true);
  //     var s = this;
  //     this.oRouter.attachRouteMatched(function (e) {
  //         if (e.getParameter("name") === "S31") {
  //             if (s.oApplication.pernr) {
  //                 s.initializeView(e.getParameter("arguments").context);
  //             } else {
  //                 s.context = e.getParameter("arguments").context;
  //             }
  //         }
  //     }, this);
  // },
  //  onAfterRendering: function () {
  //      var s = this;
  //      if (!this.oApplication.pernr) {
  //          hcm.mytimesheet.utils.ConcurrentEmployment.getCEEnablement(this, function () {
  //              if (s.context) {
  //                  s.initializeView(s.context);
  //              }
  //          });
  //      }
  //       var keyIn = this.getView().byId("accountingInfoPanel").getContent()[0].mAggregations.formContainers[0].mAggregations.formElements[1].mAggregations.fields[0];
  // keyIn.setVisible(false);
  //  },
  // initializeView: function (c) {
  //     this.noneText = "(" + this.oBundle.getText("None") + ")";
  //     if (!this.oApplication.getModel("TSM_WEEKLY")) {
  //         var a = new Date();
  //         this.setInitialInfoModelData(a);
  //     }
  //     this.getHderFooterOptions();
  //     var b = new sap.ui.model.json.JSONModel();
  //     this.oApplication.setModel(b, "createScreenModel");
  //     this.worklistItemSelected = false;
  //     this.worklistSelectedObj = {};
  //     this.entry = new hcm.mytimesheet.model.TimeEntry(0, "", false, true);
  //     var f = parseInt(c[c.indexOf("offset") + 6], 10);
  //     this.byId("weeklyCalendar").setFirstDayOffset(f);
  //     var d = decodeURIComponent(c), n;
  //     d = d.replace("offset", "");
  //     d = d.slice(0, -1);
  //     var w = this.oApplication.getModel("TSM_WEEKLY");
  //     var e = new Date(d);
  //     if (sap.ui.Device.system.phone) {
  //         this.byId("weeklyCalendar").setWeeksPerRow(1);
  //         n = 6;
  //     } else {
  //         n = 13;
  //     }
  //     var g = new Date(e.getFullYear(), e.getMonth(), e.getDate() - this.getActualOffset(f, e.getDay()));
  //     var l = new Date(g.getFullYear(), g.getMonth(), g.getDate() + n);
  //     if (w.getData().createdFromS31) {
  //         this.clockEntry = w.getProperty("/clockEntry");
  //         b.setProperty("/start", this.getDateStr(g));
  //         b.setProperty("/weekStart", this.getDateStr(g));
  //         b.setProperty("/weekEnd", this.getDateStr(l));
  //         w.setProperty("/weekStart", this.getDateStr(g));
  //         w.setProperty("/weekEnd", this.getDateStr(l));
  //     } else {
  //         b.setProperty("/start", this.getDateStr(g));
  //         b.setProperty("/weekStart", this.getDateStr(g));
  //         b.setProperty("/weekEnd", this.getDateStr(l));
  //         this.clockEntry = w.getProperty("/clockEntry");
  //         this.releaseFuture = w.getProperty("/releaseFuture");
  //         this.releaseAllowed = w.getProperty("/releaseAllowed");
  //         this.FavoriteAvailable = w.getProperty("/favoriteAvailable");
  //     }
  //     b.setProperty("/clockEntry", this.clockEntry);
  //     b.setProperty("/decimalTimeEntryVisible", !this.clockEntry);
  //     b.setProperty("/editButtonEnabled", false);
  //     b.setProperty("/updateButtonEnabled", false);
  //     this.initView();
  //     this.getProfileFields();
  //     this.getWorkListCollection();
  //     this.getFavoritesCollection();
  //     this.getView().setModel(b);
  // },
  //    initialize: function () {
  //        if (!this.oApplication) {
  //            this.oApplication = this.oApplicationFacade.oApplicationImplementation;
  //            this.oConfiguration = new hcm.mytimesheet.utils.InitialConfigHelper();
  //            this.oService = new hcm.mytimesheet.Service();
  //            this.oConnectionManager = this.oApplication.oConnectionManager;
  //            this.oBundle = this.oApplicationFacade.oApplicationImplementation.getResourceBundle();
  //            this.oConfiguration.setResourceBundle(this.oBundle);
  //        }
  //    },
  //    setInitialInfoModelData: function (c) {
  //        var m = new sap.ui.model.json.JSONModel();
  //        var n = 13;
  //        if (sap.ui.Device.system.phone) {
  //            n = 6;
  //            this.byId("weeklyCalendar").setWeeksPerRow(1);
  //        }
  //        var f = c.getTime() - c.getDay() * 24 * 60 * 60 * 1000;
  //        var l = f + n * 24 * 60 * 60 * 1000;
  //        var a = new Date(f);
  //        var b = new Date(l);
  //        this.oApplication.setModel(m, "TSM_WEEKLY");
  //        this.oService.getInitialInfos(this, this.oApplication.pernr, this.getDateStr(c), this.getDateStr(c));
  //        m.setProperty("/showSubmit", false);
  //        m.setProperty("/selected", this.getDateStr(c));
  //        m.setProperty("/selectedDate", c);
  //        m.setProperty("/year", c.getFullYear());
  //        m.setProperty("/start", this.getDateStr(a));
  //        m.setProperty("/weekStart", this.getDateStr(a));
  //        m.setProperty("/weekEnd", this.getDateStr(b));
  //        m.setProperty("/createdFromS31", true);
  //        var I = this.oConfiguration.getInitialInfoModel();
  //        this.releaseAllowed = I.ReleaseDirectly === "TRUE";
  //        m.setProperty("/releaseAllowed", this.releaseAllowed);
  //        m.setProperty("/releaseFuture", I.ReleaseFuture);
  //        this.releaseFuture = I.ReleaseFuture;
  //        m.setProperty("/favoriteAvailable", I.FavoriteAvailable);
  //        this.FavoriteAvailable = I.FavoriteAvailable;
  //        this.clockEntry = I.ClockEntry === "TRUE";
  //        m.setProperty("/clockEntry", this.clockEntry);
  //        m.setProperty("/decimalTimeEntryVisible", !this.clockEntry);
  //        return m;
  //    },
  initView: function() {

    // var listDialog = new sap.m.Dialog({
    //  id: "Dialog",
    //  title: "Список документов",
    //  endButton: new sap.m.Button({
    //    text: "Закрыть",
    //    icon: "sap-icon://decline",
    //    press: function(event) {
    //      listDialog.close();
    //      // UploadCollection.destroy();
    //    }
    //  })
    // });

    var s = this.oApplication.getModel("S31modelexch");
    // this.zzkey = s.getProperty("/editeddata").entry.childCodes[0];
    var w = this.oApplication.getModel("TSM_WEEKLY");
    this.byId("timeAssignment").setValue("");
    // this.byId("ObjId").setVisible(false);
    // this.byId("ObjId").setText("");
    this.byId("fileUploader").setValue("");
    this.byId("AddDoc").setVisible(false);

    var c = this.oApplication.getModel("createScreenModel");
    var d = [
      "Sun",
      "Mon",
      "Tue",
      "Wed",
      "Thu",
      "Fri",
      "Sat"
    ];
    if (!s) {
      s = new sap.ui.model.json.JSONModel();
      s.setProperty("/selectedDates", w.getProperty("/selectedDate"));
      s.setProperty("/editentryview", false);
      this.oApplication.setModel(s, "S31modelexch");
    }
    if (!this.FavoriteAvailable) {
      this.byId("timeAssignmentLbl").setText(this.oBundle.getText("SELECT_WORKLIST"));
    }
    var a = this.byId("weeklyCalendar");
    a.setHideNavControls(true);
    a.setEnableMultiselection(false);
    a.unselectAllDates();
    if (!s.getProperty("/editentryview")) {
      a.setEnableMultiselection(false);
      a.toggleDatesSelection(s.getData().selectedDates, true);
      if (s.getProperty("/copySelected")) {
        this.edit_entry = false;
        this.edit_entry_data = this.clone(s.getData().editeddata);
        this.byId("accountingInfoPanel").setExpanded(true);
        this.editdatafroms3 = s.getData().editeddata;
        this.entry = this.editdatafroms3.entry;
        this.entry.time = sap.ca.ui.model.format.NumberFormat.getInstance({
          style: "standard"
        }).format(this.entry.time);
        c.setProperty("/entry", this.entry);
        if (this.isClockEntry()) {
          this.byId("startTime").setValue(this.entry.startTime);
          this.byId("endTime").setValue(this.entry.endTime);
        } else {
          this.byId("decimalTimeEntryValue").setValue(this.entry.time);
        }
        if (this.entry.hasNotes) {
          this.byId("S31TextArea").setValue(this.entry.notes);
        }
      } else {
        this.edit_entry = false;
        this.byId("decimalTimeEntryValue").setValue("");
        this.byId("startTime").setValue("");
        this.byId("endTime").setValue("");
        this.byId("timeAssignment").setValue("");
      }
    } else {
      a.toggleDatesSelection(s.getData().selectedDates, true);
      this.edit_entry = true;
      this.edit_entry_data = this.clone(s.getData().editeddata);
      this.byId("accountingInfoPanel").setExpanded(true);
      a.setEnableMultiselection(false);
      this.editdatafroms3 = s.getData().editeddata;
      this.entry = this.editdatafroms3.entry;
      this.entry.time = sap.ca.ui.model.format.NumberFormat.getInstance({
        style: "standard"
      }).format(this.entry.time);
      c.setProperty("/entry", this.entry);
      if (this.isClockEntry()) {
        if (this.entry.startTime !== this.entry.endTime) {
          this.byId("startTime").setValue(this.entry.startTime);
          this.byId("endTime").setValue(this.entry.endTime);
        } else {
          this.byId("ClkTimeDecimalTimeEntryValue").setValue(this.entry.time);
        }
      } else {
        this.byId("decimalTimeEntryValue").setValue(this.entry.time);
      }
      if (this.entry.hasNotes) {
        this.byId("S31TextArea").setValue(this.entry.notes);
      }
    }
    if (a.getSelectedDates().length > 1) {
      this.byId("createPanel").setHeaderText(this.oBundle.getText("SUBMIT_HEADER_TEXT", [
        this.formatDateMMMDD(new Date(a.getSelectedDates()[0])),
        a.getSelectedDates().length - 1
      ]));
    } else if (a.getSelectedDates().length === 1) {
      this.byId("createPanel").setHeaderText(this.oBundle.getText("SUBMIT_HEADER_TEXT_SINGLE", [this.formatDateMMMDD(new Date(a.getSelectedDates()[
        0]))]));
    } else {
      this.byId("createPanel").setHeaderText(this.oBundle.getText("ENTRY_DETAILS"));
      this.setBtnEnabled("SUBMIT_BTN", false);
    }
    if (s.getData().pageData) {
      var l = s.getData().pageData.legendforS31;
      a.toggleDatesType(l.yellow, sap.me.CalendarEventType.Type04, true);
      a.toggleDatesType(l.green, sap.me.CalendarEventType.Type01, true);
      a.toggleDatesType(l.grey, sap.me.CalendarEventType.Type00, true);
      a.toggleDatesType(l.red, sap.me.CalendarEventType.Type07, true);
      a.toggleDatesType(l.rejected, sap.me.CalendarEventType.Type06, true);
    }
    // var newDate = new Date();
    // var text;
    // // this.byId("weeklyCalendar").onAfterRendering = function(oEvent) {
    // //   $("#__icon2").hide();
    // //   $("#__icon3").hide();
    // // };
    if (this.entry.mainCode === "") {
      this.entry.mainCode = "0800";
      this.entry.mainItem = "Работа на проекте";
      this.entry.mainName = "AWART";
    }
    // var awart = this.getView().byId("accountingInfoPanel").getContent()[0].mAggregations.formContainers[0].mAggregations.formElements[0].mAggregations.fields[0];
    // awart.setValueStateText("Работа на проекте (0800)");
    // awart.setValue("0800");
    jQuery.sap.storage.clear();
    this.byId("keyInput").setValue(this.entry.subItems);
    // var keyIn = this.getView().byId("accountingInfoPanel").getContent()[0].mAggregations.formContainers[0].mAggregations.formElements[1].mAggregations.fields[0];
    // keyIn.setVisible(false);
  },
  //    clone: function (o) {
  //        if (o === null || typeof o !== "object") {
  //            return o;
  //        }
  //        if (o instanceof Object) {
  //            var c = {};
  //            var a = null;
  //            for (a in o) {
  //                if (o.hasOwnProperty(a)) {
  //                    c[a] = this.clone(o[a]);
  //                }
  //            }
  //            return c;
  //        }
  //        throw new Error("Unable to copy obj! Its type isn't supported.");
  //    },
  //    formatDateMMMDD: function (d) {
  //        var m = d.getMonth();
  //        var a = d.getDate();
  //        var b = this.oBundle.getText("MONTH_" + m) + " " + a;
  //        return b;
  //    },
  //    getActualOffset: function (f, c) {
  //        var a = 7;
  //        if (f > c) {
  //            return c + a - f;
  //        } else {
  //            return c - f;
  //        }
  //    },
  //    validate: function () {
  //        if (this.favoriteSelected) {
  //            this.byId("timeAssignment").setValue("");
  //        }
  //        this.byId("ClkTimeDecimalTimeEntryValue").setValue("");
  //        this.byId("ClkTimeDecimalTimeEntryValue").setEnabled(false);
  //        this.dateTimeModified = true;
  //        this.validateSaveBtnVisibility();
  //    },
  //    check_for_changed_data: function () {
  //        var c = this.byId("weeklyCalendar");
  //        var s = c.getSelectedDates();
  //        var d = null;
  //        if (this.isClockEntry()) {
  //            var a = this.byId("startTime").getValue();
  //            var e = this.byId("endTime").getValue();
  //        } else {
  //            d = this.byId("decimalTimeEntryValue").getValue();
  //        }
  //        var n = this.byId("S31TextArea").getValue();
  //        var b = this.byId("COST_ASSIGNMENT_RECENTLY_USED_LIST").getValue();
  //        if (this.edit_entry) {
  //            var f = this.edit_entry_data;
  //            var g = this.getDateStr(new Date(s[0]));
  //            var o = f.pageData.days[f.dayIndex].dateStr;
  //            var h = f.entry.notes;
  //            var j = f.entry.mainName;
  //            var k = f.entry.mainCode;
  //            var l = this.getView().getModel("fordynamictypes").getData().types;
  //            var m;
  //            var p;
  //            var q;
  //            var r, t;
  //            var u, v;
  //            if (this.isClockEntry()) {
  //                var w = f.entry.startTime;
  //                var x = f.entry.endTime;
  //                if (w !== a || x !== e)
  //                    return true;
  //            } else {
  //                var y = f.entry.time;
  //                if (y !== d)
  //                    return true;
  //            }
  //            for (u = 0; u < l.length; u++) {
  //                m = l[u].fieldName;
  //                if (m === j) {
  //                    q = l[u].value;
  //                    r = l[u].value.indexOf("(");
  //                    t = l[u].value.indexOf(")");
  //                    p = l[u].value.substring(r + 1, t);
  //                    if (p !== k) {
  //                        return true;
  //                    }
  //                }
  //                for (v = 0; f.entry.childItems && f.entry.childItems[v]; v++) {
  //                    if (f.entry.childNames[v] === m) {
  //                        q = l[u].value;
  //                        r = l[u].value.indexOf("(");
  //                        t = l[u].value.indexOf(")");
  //                        p = l[u].value.substring(r + 1, t);
  //                        if (f.entry.childCodes[v] !== p) {
  //                            return true;
  //                        }
  //                    }
  //                }
  //            }
  //            if (s.length > 1 || o !== g || h !== n) {
  //                return true;
  //            }
  //            return false;
  //        } else {
  //            var z = false;
  //            var A = this.getView().getModel("fordynamictypes").getData().types;
  //            if (A) {
  //                for (var i = 0; i < A.length; i++) {
  //                    if (A[i].value.trim()) {
  //                        z = true;
  //                    }
  //                }
  //            }
  //            if (this.isClockEntry()) {
  //                if (s.length !== 0 || a !== "" || e !== "" || b !== "" || z)
  //                    return true;
  //            } else {
  //                if (s.length !== 0 || d !== "0" && d !== "" || b !== "" || z)
  //                    return true;
  //            }
  //            return false;
  //        }
  //    },

  onTapOnDate: function(e) {
    this.initView();
    // var d = e.getSource().getSelectedDates();
    // var n = d.length;
    // if (this.edit_entry) {
    //     var a = sap.ui.core.format.DateFormat.getDateInstance({ pattern: "YYYYMMdd" });
    //     var b = a.parse(this.edit_entry_data.pageData.days[this.edit_entry_data.dayIndex].dateStr);
    //     for (var i = 0; i < n; i++) {
    //         var c = new Date(d[i]);
    //         if (!(c.getFullYear() === b.getFullYear() && c.getMonth() === b.getMonth() && c.getDate() === b.getDate())) {
    //             e.getSource().toggleDatesSelection([c.toDateString()], false);
    //         }
    //     }
    //     this.validateSaveBtnVisibility(e);
    //     return;
    // }
    // this.validateSaveBtnVisibility(e);
    // if (n > 1) {
    //     this.byId("createPanel").setHeaderText(this.oBundle.getText("SUBMIT_HEADER_TEXT", [
    //         this.formatDateMMMDD(new Date(d[0])),
    //         n - 1
    //     ]));
    // } else if (n === 1) {
    //     this.byId("createPanel").setHeaderText(this.oBundle.getText("SUBMIT_HEADER_TEXT_SINGLE", [this.formatDateMMMDD(new Date(d[0]))]));
    // } else if (n === 0) {
    //     this.byId("createPanel").setHeaderText(this.oBundle.getText("ENTRY_DETAILS"));
    // }
  },
  validateSaveBtnVisibility: function() {
    var t = false;
    if (this.isClockEntry()) {
      var s = this.byId("startTime").getValue();
      var e = this.byId("endTime").getValue();
      var c = this.byId("ClkTimeDecimalTimeEntryValue").getValue();
      if (c !== "0" && c !== "") {
        this.clkTimeDurationFilled = true;
      } else {
        this.clkTimeDurationFilled = false;
      }
      if (s && e && s !== e || this.clkTimeDurationFilled) {
        t = true;
      } else {
        t = false;
      }
    } else {
      var d = this.byId("decimalTimeEntryValue").getValue();
      if (d !== "0" && d !== "") {
        if (this._isValidDecimalNumber(d)) {
          t = true;
        } else {
          t = false;
        }
      } else {
        t = false;
      }
    }
    var a = this.byId("weeklyCalendar").getSelectedDates().length;
    var f = false;
    var b = this.getView().getModel().getData().types;
    if (this.worklistItemSelected) {
      f = true;
    } else if (b) {
      for (var i = 0; i < b.length; i++) {
        if (b[i].value.trim() || b[i].valueStateText.trim()) {
          f = true;
          // break;
        } else {
          f = false;
          break;
        }
      }
    }
    if (f && a && t) {
      this.setBtnEnabled("SUBMIT_BTN", true);
      this.byId("Docs").setVisible(true);
      // this.byId("fileUploader").setEnabled(true);
    } else {
      this.setBtnEnabled("SUBMIT_BTN", false);
      this.byId("Docs").setVisible(false);
      // this.byId("fileUploader").setEnabled(false);
    }
  },
  //    suggestionHelpChange: function (e) {
  //        e.getSource().setValue("");
  //        this.validateSaveBtnVisibility(e);
  //    },
  //    onFavoriteItemSelection: function (e) {
  //        this.validateSaveBtnVisibility(e);
  //    },
  //    onFavValueChange: function () {
  //        this.byId("timeAssignment").setValue("");
  //    },
  //    onManualItemSelection: function (e) {
  //        this.validateSaveBtnVisibility(e);
  //    },
  //    timeAssignmentLiveChange: function () {
  //        this.byId("timeAssignment").setValue("");
  //    },
  // manualHelpChange: function (e) {
  //     // if (this.favoriteSelected) {
  //     //     this.byId("timeAssignment").setValue("");
  //     // }
  //     // e.getSource().setValueStateText(e.getSource().getValue());
  //     // e.getSource().setValue(e.getSource().getValue());
  //     // this.validateSaveBtnVisibility(e);

  //     sap.m.MessageToast.show("Редактивароние запрещено");
  // },
  //    onDurationValueChange: function (e) {
  //        this.validateSaveBtnVisibility(e);
  //    },
  OnTextComm: function(e) {
    if (e.getParameters().value === "") {
      this.byId("Comm").setVisible(false);
    } else {
      this.byId("Comm").setVisible(true);
    }
    // var h = $(this.byId("S31TextAreaCom"));
    // h.height(50).height(h[0].scrollHeight);
  },
  onLive: function(e) {
    sap.m.MessageToast.show("Редактивароние запрещено");
  },
  f4key: function(e) {
    var that = this;
    var c = that.byId("weeklyCalendar");
    var a = c.getSelectedDates();
    //var a = c.mProperties.currentDate;
    var date = new Date(a[0]);
    //var date = new Date(a);
    var key;
    var b = arguments[0].getSource();
    /*if (sap.ui.Device.system.phone) {
      date.setDate(date.getDate() - 1);
    }*/

    var oTable = new sap.m.Table({
      columns: [
        new sap.m.Column({
          width: "30%",
          header: new sap.m.Label({
            text: "Ключ записи"
          })
        }),
        new sap.m.Column({
          header: new sap.m.Label({
            text: "Информация по задаче"
          })
        }),
        new sap.m.Column({
          demandPopin: true,
          minScreenWidth: "500px",
          header: new sap.m.Label({
            text: "Информация по проекту"
          })
        }),
        new sap.m.Column({
          demandPopin: true,
          minScreenWidth: "500px",
          header: new sap.m.Label({
            text: "Информация по РФ"
          })
        })
      ],
      items: {
        path: "/results",
        template: new sap.m.ColumnListItem({
          cells: [
            new sap.m.Text({
              text: "{Key}"
            }),
            new sap.m.Text({
              text: "{TaskInfo}"
            }),
            new sap.m.Text({
              text: "{ProjectInfo}"
            }),
            new sap.m.Text({
              text: "{BidInfo}"
            })
          ]
        })
      }
    });

    var w = that.getDateTimeStr(date);
    var oRowModel = new sap.ui.model.json.JSONModel();
    var filterBar = new sap.ui.comp.filterbar.FilterBar({
      // id: "filterbar",
      header: "Фильтр",
      filterBarExpanded: true,
      showRestoreButton: true,
      // showGoOnFB: false,
      // showGoButton: false,
      showRestoreOnFB: true,
      showFilterConfiguration: false,
      // reset: "onReset" 
      search: function(oEvent) {
        var FilterArray = oEvent.getParameters().selectionSet;
        var filterA = new sap.ui.model.Filter("TaskInfo", "Contains", FilterArray[0]._lastValue);
        var filterB = new sap.ui.model.Filter("ProjectInfo", "Contains", FilterArray[1]._lastValue);
        var filterC = new sap.ui.model.Filter("BidInfo", "Contains", FilterArray[2]._lastValue);
        that.oValueHelpDialog.getTable().getBinding("items").filter([filterA, filterB, filterC]);
      },
      reset: function(oEvent) {
        sap.ui.getCore().byId("idValueHelp").getTable().getBinding("items").filter();
      },
      filterItems: [
        new sap.ui.comp.filterbar.FilterItem({
          name: "TaskInfo",
          control: new sap.m.Input(),
          label: "Задача"
        }),
        new sap.ui.comp.filterbar.FilterItem({
          name: "ProjectInfo",
          control: new sap.m.Input(),
          label: "Проект"
        }),
        new sap.ui.comp.filterbar.FilterItem({
          name: "BidInfo",
          control: new sap.m.Input(),
          label: "РФ"
        })
      ]
    });
    filterBar.attachBrowserEvent("keypress", function(e) {
      // check key code
      if (e.which === 13) {
        filterBar.search();
      }
    });
    // if (!that.oValueHelpDialog) {
    that.oValueHelpDialog = new sap.ui.comp.valuehelpdialog.ValueHelpDialog("idValueHelp", {
      key: "Key",
      draggable: false,
      resizable: false,
      title: "",
      supportRanges: false,
      supportRangesOnly: false,
      supportMultiselect: false,
      stretch: sap.ui.Device.system.phone,
      // supportRanges: true,
      contentWidth: "50%",
      contentHeight: "100%",
      ok: function(oEvent) {
        key = sap.ui.getCore().byId("idValueHelp").getTable().getSelectedItem().getBindingContext().getObject().Key;
        jQuery.sap.storage.put("ZZKEY", key);
        var task = sap.ui.getCore().byId("idValueHelp").getTable().getSelectedItem().getBindingContext().getObject().TaskInfo;
        var proj = sap.ui.getCore().byId("idValueHelp").getTable().getSelectedItem().getBindingContext().getObject().ProjectInfo;
        var rf = sap.ui.getCore().byId("idValueHelp").getTable().getSelectedItem().getBindingContext().getObject().BidInfo;
        // var aTokens = oEvent.getParameters("tokens");
        // oInput.setTokens(aTokens);
        var keyIn = that.getView().byId("accountingInfoPanel").getContent()[0].mAggregations.formContainers[0].mAggregations.formElements[
          1].mAggregations.fields[0];
        keyIn.setValueStateText(key.replace("(", "").replace(")", ""));
        keyIn.setValue(key);
        b.setValueStateText(key.replace("(", "").replace(")", ""));
        b.setValue("Задача: " + task + " Проект: " + proj + " РФ: " + rf);
        that.validateSaveBtnVisibility(oEvent);
        this.close();
      },
      cancel: function() {
        this.close();
      },
      afterClose: function(oEvent) {
        that.oValueHelpDialog.destroy();
      },
      filterBar: filterBar
    });

    // }
    // that.oValueHelpDialog.attachOk(function(event) {
    //  key = sap.ui.getCore().byId("idValueHelp").getTable().getSelectedItem().getBindingContext().getObject().Key;

    //  sap.ui.getCore().byId("idValueHelp").close();
    //  // sap.ui.getCore().byId("idValueHelp").destroy();

    // });

    var sServiceUrl = "/sap/opu/odata/sap/zcats_docs_srv/";
    var oModel = new sap.ui.model.odata.v2.ODataModel(sServiceUrl, {
      useBatch: false
    });

    // var oTable = this.oValueHelpDialog.getTable();

    // oTable.setModel(oColModel, "columns");

    oModel.read("/KeysSet", {
      filters: [
        new sap.ui.model.Filter({
          path: 'Datum',
          operator: sap.ui.model.FilterOperator.EQ,
          value1: w
        })
      ],
      success: function(oData, response) {
        oRowModel.setData(oData);
        oTable.setModel(oRowModel);
        // oTable.bindRows("/results");
        // sap.m.MessageToast.show("OK");
      }

    });
    // this.oValueHelpDialog.setRangeKeyFields([{
    //  label: "Ключ записи",
    //  key: "Key"
    // }, {
    //  label: "Информация по задаче",
    //  key: "TaskInfo"
    // }, {
    //  label: "Информация по проекту",
    //  key: "ProjectInfo"
    // }, {
    //  label: "Информация по РФ",
    //  key: "BidInfo"
    // }]);
    // this.oValueHelpDialog.addStyleClass("sapUiSizeCompact");
    this.oValueHelpDialog.getCustomHeader().getContentMiddle()[0].setText("");
    this.oValueHelpDialog.setTable(oTable);
    this.oValueHelpDialog.open();

  },
  onDecimalTimeValueChange: function(e) {
    if (this.favoriteSelected) {
      this.byId("timeAssignment").setValue("");
    }
    this.dateTimeModified = true;
    var d;
    if (!this.isClockEntry()) {
      d = this.byId("decimalTimeEntryValue").getValue();
    } else {
      d = this.byId("ClkTimeDecimalTimeEntryValue").getValue();
    }
    if (this._isValidDecimalNumber(d)) {
      this.validateSaveBtnVisibility(e);
    } else {
      this.setBtnEnabled("SUBMIT_BTN", false);
      this.byId("Docs").setVisible(false);
    }
  },
  //    _isValidDecimalNumber: function (n) {
  //        var a = n.toString();
  //        var d = a.indexOf(".");
  //        var c = a.indexOf(",");
  //        if (d > 0 && c > 0) {
  //            return false;
  //        }
  //        var s = d;
  //        if (s < 0) {
  //            s = a.indexOf(",");
  //        }
  //        var b = "0123456789";
  //        var i;
  //        var f;
  //        var e = 0;
  //        var h = false;
  //        if (s === -1) {
  //            i = a;
  //            f = "";
  //        } else {
  //            i = a.slice(0, s);
  //            f = a.slice(s + 1, a.length);
  //        }
  //        if (i.length > 5) {
  //            return false;
  //        }
  //        for (e = 0; e < i.length; e++) {
  //            if (b.indexOf(i[e]) === -1) {
  //                return false;
  //            } else {
  //                h = true;
  //            }
  //        }
  //        if (f.length > 2) {
  //            return false;
  //        }
  //        for (e = 0; e < f.length; e++) {
  //            if (b.indexOf(f[e]) === -1) {
  //                return false;
  //            } else {
  //                h = true;
  //            }
  //        }
  //        if (h === false) {
  //            return false;
  //        }
  //        return true;
  //    },
  onNavButton: function() {
    var c = this.byId("weeklyCalendar");
    var s = c.getCurrentDate();
    var d = s;
    s = d + "offset" + c.getFirstDayOffset();
    var m = new sap.ui.model.json.JSONModel();
    m.setProperty("/currentDate", new Date(d));
    this.oApplication.setModel(m, "S3exchangeModel");
    this.cleanUpOnBack();
    delete this.entry;
    this.oRouter.navTo("S3", {
      context: s
    }, true);
  },
  //    cleanUpOnBack: function () {
  //        this.byId("timeAssignment").setValue("");
  //        this.byId("decimalTimeEntryValue").setValue("");
  //        this.byId("startTime").setValue("");
  //        this.byId("endTime").setValue("");
  //        delete this.worklistSelectedObj;
  //        this.worklistItemSelected = false;
  //        this.byId("weeklyCalendar").setDisabledWeekDays([]);
  //        this.byId("weeklyCalendar").unselectAllDates();
  //        this.byId("S31TextArea").setValue("");
  //        this.byId("ClkTimeDecimalTimeEntryValue").setValue("");
  //        var t = this.oApplication.getModel("accountingInfoModel").getData().types;
  //        for (var i = 0; i < t.length; i++) {
  //            if (t[i].value !== "" || t[i].valueStateText !== "") {
  //                t[i].value = "";
  //                t[i].valueStateText = "";
  //            }
  //        }
  //        this.byId("accountingInfoPanel").setExpanded(false);
  //        this.getView().getModel().setProperty("/types", t);
  //        this.oApplication.getModel("accountingInfoModel").setProperty("/types", t);
  //    },
  //    getDateStr: function (d) {
  //        return "" + d.getFullYear() + ("" + (d.getMonth() + 101)).substring(1) + ("" + (d.getDate() + 100)).substring(1);
  //    },
  //    getDateTimeStr: function (d) {
  //        return "" + d.getFullYear() + "-" + ("" + (d.getMonth() + 101)).substring(1) + "-" + ("" + (d.getDate() + 100)).substring(1) + "T00:00:00";
  //    },
  getValueHelpCollection: function(o) {
    var busyDialog = new sap.m.BusyDialog({
      text: "Получаем..."
    });
    busyDialog.open();
    var s = this;
    var c = 0;
    var d = o && o.fieldName;
    if (this.remoteSearchPhrase) {
      c = this.remoteSkip;
    } else {
      c = this.localSkip;
    }
    var l = ";;";
    var e = "";
    var f = this.getView().getModel("accountingInfoModel").getData().types.length;
    for (var i = 0; i < f; i++) {
      var g = this.getView().getModel("accountingInfoModel").getData().types[i].valueStateText;
      var h = this.getView().getModel("accountingInfoModel").getData().types[i].fieldName;
      if (g.length !== 0 && h !== d) {
        var k = h + "=" + g;
        if (e) {
          e += l + k;
        } else {
          e += k;
        }
      }
    }
    this.gv_fieldRelated = e;
    var m = this.byId("weeklyCalendar");
    var n = m.getSelectedDates();
    if (n[0]) {
      var p = n.length;
      this.searchField_begDa = this.getDateStr(new Date(n[0]));
      this.searchField_endDa = this.getDateStr(new Date(n[p - 1]));
    } else {
      var M = this.oApplication.getModel("TSM_WEEKLY");
      this.searchField_begDa = M.getProperty("/weekStart");
      this.searchField_endDa = M.getProperty("/weekEnd");
    }
    this.oService.getValueHelpList(this.oApplication.pernr, d || this.fieldName, this.top, c, this.remoteSearchPhrase, this.gv_fieldRelated,
      this.searchField_begDa, this.searchField_endDa,
      function(q) {
        busyDialog.close();
        s.remoteSearchActive = false;
        var t = [];
        if (s.remoteSearch()) {
          t = s.localTypeList;
          s.remoteSearchActive = true;
          s.lastRemoteSearchPhrase = s.remoteSearchPhrase;
        } else {
          t = s.localTypeList;
        }
        if (q.length > 0 && t.length === 0) {
          t.push({
            fieldValueId: s.noneText,
            fieldValue: s.noneText,
            fieldId: ""
          });
        }
        var r;
        for (var i = 0; i < q.length; i++) {
          r = 1;
          for (var j = 0; j < t.length; j++) {
            var C = "(" + q[i].FieldId + ")";
            if (t[j].fieldValue === q[i].FieldValue && t[j].fieldId === C) {
              r = 0;
              break;
            }
          }
          if (r === 1) {
            t.push({
              fieldValue: q[i].FieldValue,
              fieldId: "(" + q[i].FieldId + ")",
              fieldValueId: q[i].FieldValue + " (" + q[i].FieldId + ")"
            });
          }
        }

        function u(v) {
          var w = 1;
          if (v[0] === "-") {
            w = -1;
            v = v.substr(1);
          }
          return function(a, b) {
            var x = a[v] < b[v] ? -1 : a[v] > b[v] ? 1 : 0;
            return x * w;
          };
        }
        t.sort(u("fieldId"));
        s.oApplication.getModel("createScreenModel").setProperty("/" + (o && o.fieldName), t);
        s.oApplication.getModel("createScreenModel").updateBindings();
        if (s.remoteSearch()) {
          s.remoteResultsLength = q.length;
          s.checkRemotePaging(s.remoteResultsLength);
        } else {
          s.localResultsLength = q.length;
          s.checkLocalPaging(s.localResultsLength, o && o.fieldName);
        }
      });
  },
  //    remoteSearch: function () {
  //        if ("remoteSearchPhrase" in this) {
  //            if (this.remoteSearchPhrase) {
  //                return this.remoteSearchPhrase;
  //            }
  //        }
  //        return false;
  //    },
  //    checkLocalPaging: function (r) {
  //        var t = this.typeListControl.getItems();
  //        var a = t.length;
  //        if (a === 0 || a >= this.MODEL_SIZE_LIMIT) {
  //            return;
  //        }
  //        if (t) {
  //            if (t[a - 1].getTitle() === this.oBundle.getText("TAP_TO_LOAD_MORE_LOADING")) {
  //                this.typeListControl.removeItem(t[a - 1]);
  //            }
  //        }
  //        if (r < this.top) {
  //            if (t[a - 1].getTitle() === this.oBundle.getText("TAP_TO_LOAD_MORE") || t[a - 1].getTitle() === this.oBundle.getText("CONTINUE_SEARCH_ON_SERVER")) {
  //                this.typeListControl.removeItem(t[a - 1]);
  //            }
  //        } else if (r >= this.top) {
  //            if (t[a - 1].getTitle() === this.oBundle.getText("TAP_TO_LOAD_MORE")) {
  //                return;
  //            } else {
  //                if (t[a - 1].getTitle() === this.oBundle.getText("CONTINUE_SEARCH_ON_SERVER")) {
  //                    t[a - 1].setTitle(this.oBundle.getText("TAP_TO_LOAD_MORE"));
  //                } else {
  //                    this.loadMoreItem = new sap.m.StandardListItem({
  //                        title: this.oBundle.getText("TAP_TO_LOAD_MORE"),
  //                        active: true
  //                    });
  //                    this.typeListControl.addItem(this.loadMoreItem);
  //                }
  //            }
  //        }
  //    },
  //    checkRemotePaging: function (r) {
  //        if (r >= this.top || !this.remoteSearchActive || this.lastRemoteSearchPhrase !== this.remoteSearchPhrase) {
  //            var t = this.typeListControl.getItems();
  //            var a = t.length;
  //            if (a === 0 || a >= this.MODEL_SIZE_LIMIT) {
  //                this.noneTextItem = new sap.m.StandardListItem({
  //                    title: this.noneText,
  //                    active: true
  //                });
  //                this.typeListControl.insertItem(this.noneTextItem, 0);
  //                this.addContinueSearchItem(this.oBundle.getText("CONTINUE_SEARCH_ON_SERVER"));
  //                return;
  //            }
  //            if (t[a - 1].getTitle() === this.oBundle.getText("CONTINUE_SEARCH_ON_SERVER")) {
  //                return;
  //            } else {
  //                if (t[a - 1].getTitle() === this.oBundle.getText("TAP_TO_LOAD_MORE")) {
  //                    t[a - 1].setTitle(this.oBundle.getText("CONTINUE_SEARCH_ON_SERVER"));
  //                } else {
  //                    this.addContinueSearchItem(this.oBundle.getText("CONTINUE_SEARCH_ON_SERVER"));
  //                }
  //            }
  //        } else {
  //            t = this.typeListControl.getItems();
  //            a = t.length;
  //            if (t[a - 1].getTitle() === this.oBundle.getText("CONTINUE_SEARCH_ON_SERVER") && r < this.top) {
  //                this.typeListControl.removeItem(t[a - 1]);
  //            }
  //        }
  //    },
  //    addContinueSearchItem: function () {
  //        this.continueSearchItem = new sap.m.StandardListItem({
  //            title: this.oBundle.getText("CONTINUE_SEARCH_ON_SERVER"),
  //            active: true
  //        });
  //        this.typeListControl.addItem(this.continueSearchItem);
  //        this.continueSearchItem.addEventDelegate({
  //            onAfterRendering: function () {
  //                $(this.continueSearchItem.$().context.firstChild).attr("colspan", "2");
  //            }
  //        }, this);
  //    },
  //    tapToLoadMore: function (s) {
  //        this.localSkip += this.top;
  //        this.getValueHelpCollection(s);
  //    },
  //    continueSearchOnServer: function (s) {
  //        this.remoteSearchPhrase = this.searchPhrase;
  //        if (this.firstRemoteSearch) {
  //            this.firstRemoteSearch = false;
  //            this.continueSearchOnServerActive = true;
  //        } else {
  //            this.remoteSkip += this.top;
  //        }
  //        this.getValueHelpCollection(s);
  //        return this.remoteSearchPhrase;
  //    },
  //    refineSearchResult: function () {
  //        this.typeBinding = this.typeListControl.getBinding("items");
  //        var f = [];
  //        if (this.searchPhrase) {
  //            f.push(new sap.ui.model.Filter("fieldValueId", sap.ui.model.FilterOperator.Contains, this.searchPhrase));
  //            f.push(new sap.ui.model.Filter("fieldValueId", sap.ui.model.FilterOperator.Contains, this.noneText));
  //        }
  //        this.typeBinding.filter(f);
  //    },
  //    onLiveFavChange: function (e) {
  //        var f = e.getParameter("value");
  //        f = f.toLowerCase();
  //        var l = e.getSource().getItems();
  //        var v;
  //        var g = null;
  //        var c = 0;
  //        for (var i = 0; i < l.length; i++) {
  //            if (l[i] instanceof sap.m.GroupHeaderListItem) {
  //                if (g) {
  //                    g.setCount(c);
  //                }
  //                g = l[i];
  //                c = 0;
  //            } else {
  //                v = this.applySearchPatternToListItem(l[i], f);
  //                l[i].setVisible(v);
  //                if (v) {
  //                    c++;
  //                }
  //            }
  //        }
  //        if (g) {
  //            if (g.getTitle() !== this.oBundle.getText("NO_WORKLIST") || g.getTitle() !== this.oBundle.getText("NO_WORKLIST")) {
  //                g.setCount(c);
  //            }
  //        }
  //    },
  //    applySearchPatternToListItem: function (i, f) {
  //        if (f === "") {
  //            return true;
  //        }
  //        if (i.getTitle() && i.getTitle().toLowerCase().indexOf(f) !== -1 || i.getDescription() && i.getDescription().toLowerCase().indexOf(f) !== -1 || i.getInfo() && i.getInfo().toLowerCase().indexOf(f) !== -1) {
  //            return true;
  //        }
  //        return false;
  //    },
  onLiveChange: function(e) {
    var v = e.getParameter("value");
    var f = [];
    f.push(new sap.ui.model.Filter("fieldValueId", sap.ui.model.FilterOperator.Contains, v));
    this.searchPhrase = e.getParameter("value");
    this.searchField = e.getSource();
    if (this.searchPhrase) {
      this.refineSearchResult();
      if (this.searchPhrase !== this.remoteSearchPhrase) {
        this.resetRemoteSearch();
      }
      this.remoteSearchPhrase = this.searchPhrase;
      this.checkRemotePaging(this.remoteResultsLength);
    } else {
      this.refineSearchResult();
      this.remoteSearchPhrase = "";
      if (this.oApplication.getModel("createScrenModel")) {
        this.oApplication.getModel("createScrenModel").setProperty("typeList", this.localTypeList);
      }
      this.remoteSearchActive = false;
      this.checkLocalPaging(this.localResultsLength);
      this.resetRemoteSearch();
    }
  },
  //    resetRemoteSearch: function () {
  //        this.firstRemoteSearch = true;
  //        this.remoteSkip = 0;
  //        this.remoteTypeList = [];
  //        this.continueSearchOnServerActive = false;
  //        this.remoteSearchPhrase = "";
  //        this.remoteSearchActive = false;
  //    },
  //    clearSearchField: function () {
  //        if ("searchField" in this) {
  //            this.searchField.setValue("");
  //            this.typeBinding.filter([]);
  //        }
  //    },
  //    bindFavDialog: function (s) {
  //        var c, a = this;
  //        var m = a.oApplication.getModel("createScreenModel");
  //        var w = new sap.m.GroupHeaderListItem({
  //            title: a.oBundle.getText("WORKLIST"),
  //            upperCase: false,
  //            count: m.getProperty("/projects").length
  //        });
  //        var n = new sap.m.GroupHeaderListItem({
  //            title: a.oBundle.getText("NO_WORKLIST"),
  //            upperCase: false
  //        });
  //        if (this.FavoriteAvailable) {
  //            var f = new sap.m.GroupHeaderListItem({
  //                title: a.oBundle.getText("FAVORITE"),
  //                upperCase: false,
  //                count: m.getProperty("/favorites").length
  //            });
  //            var b = new sap.m.GroupHeaderListItem({
  //                title: a.oBundle.getText("NO_FAVORITE"),
  //                upperCase: false
  //            });
  //            c = m.getProperty("/favorites").concat(m.getProperty("/projects"));
  //        } else {
  //            c = m.getProperty("/projects");
  //        }
  //        m.setProperty("/combinedFavList", c);
  //        var i = new sap.m.StandardListItem({
  //            title: "{name}",
  //            description: "{subText}",
  //            info: "{info}",
  //            customData: [
  //                {
  //                    key: "items",
  //                    value: "{childs}"
  //                },
  //                {
  //                    key: "type",
  //                    value: "{type}"
  //                },
  //                {
  //                    key: "id",
  //                    value: "{id}"
  //                },
  //                {
  //                    key: "fieldId",
  //                    value: "{fieldName}"
  //                },
  //                {
  //                    key: "fieldValue",
  //                    value: "{fieldValue}"
  //                }
  //            ]
  //        });
  //        s.setModel(a.oApplication.getModel("createScreenModel"));
  //        s.bindAggregation("items", "/combinedFavList", i);
  //        this.favoriteDialog = s;
  //        if (this.FavoriteAvailable) {
  //            if (m.getProperty("/favorites").length === 0) {
  //                s.insertItem(b, 0);
  //            } else {
  //                s.insertItem(f, 0);
  //            }
  //            if (m.getProperty("/projects").length === 0) {
  //                s.insertItem(n, m.getProperty("/favorites").length + 1);
  //            } else {
  //                s.insertItem(w, m.getProperty("/favorites").length + 1);
  //            }
  //        } else {
  //            if (m.getProperty("/projects").length === 0) {
  //                s.insertItem(n, 0);
  //            } else {
  //                s.insertItem(w, 0);
  //            }
  //        }
  //    },
  // onFavoriteInputHelp: function(e) {
  //  var s = this,
  //    D;
  //  this.favDialogHeaders = [];
  //  if (this.FavoriteAvailable) {
  //    D = this.oBundle.getText("SELECT_FAVORITE");
  //  } else {
  //    D = this.oBundle.getText("SELECT_WORKLIST");
  //  }
  //  var S = new sap.m.SelectDialog({
  //    title: D,
  //    liveChange: [
  //      this.onLiveFavChange,
  //      this
  //    ]
  //  });
  //  this.bindFavDialog(S);
  //  S.open();
  //  var a = arguments[0].getSource(),
  //    t, b, c;
  //  s = this;
  //  S.attachConfirm(function(d) {
  //    var f = d.getParameter("selectedItem");
  //    if (f.data().type) {
  //      s.favoriteSelected = true;
  //      s.worklistItemSelected = false;
  //      t = f.data().type;
  //      b = f.data().items;
  //      c = f.data().id;
  //      var g = 0,
  //        h = 0,
  //        k = 0,
  //        i, j, l;
  //      if (f) {
  //        a.setValue(f.getTitle());
  //      }
  //      if (t === "F") {
  //        for (var m = 0; m < s.favorites.length; m++) {
  //          if (s.favorites[m].id === c) {
  //            if (!s.isClockEntry()) {
  //              h = s.favorites[m].FavoriteDataFields.CATSHOURS;
  //              h = parseFloat(h, 10).toFixed(2);
  //              s.byId("decimalTimeEntryValue").setValue(h);
  //            } else {
  //              g = s.favorites[m].FavoriteDataFields.BEGUZ;
  //              k = s.favorites[m].FavoriteDataFields.ENDUZ;
  //              if (g !== k) {
  //                var n = sap.ca.ui.model.format.DateFormat.getTimeInstance({
  //                  pattern: "HHmm"
  //                });
  //                var o = sap.ca.ui.model.format.DateFormat.getTimeInstance({
  //                  style: "short"
  //                });
  //                g = n.parse(g);
  //                g = o.format(g);
  //                k = n.parse(k);
  //                k = o.format(k);
  //                s.byId("startTime").setValue(s.favorites[m].FavoriteDataFields.BEGUZ);
  //                s.byId("endTime").setValue(s.favorites[m].FavoriteDataFields.ENDUZ);
  //                s.byId("ClkTimeDecimalTimeEntryValue").setEnabled(false);
  //              } else {
  //                h = s.favorites[m].FavoriteDataFields.CATSHOURS;
  //                h = parseFloat(h, 10).toFixed(2);
  //                s.byId("ClkTimeDecimalTimeEntryValue").setValue(h);
  //              }
  //            }
  //          }
  //        }
  //      } else {
  //        s.byId("decimalTimeEntryValue").setValue("");
  //        s.byId("startTime").setValue("");
  //        s.byId("endTime").setValue("");
  //        s.byId("ClkTimeDecimalTimeEntryValue").setValue("");
  //      }
  //      l = s.oApplication.getModel("accountingInfoModel").getData().types;
  //      for (i = 0; i < l.length; i++) {
  //        l[i].value = "";
  //      }
  //      for (j = 0; j < b.length; j++) {
  //        for (i = 0; i < l.length; i++) {
  //          if (l[i].fieldName === b[j].name) {
  //            l[i].value = b[j].value;
  //            l[i].valueStateText = b[j].value;
  //            break;
  //          }
  //        }
  //      }
  //      s.byId("accountingInfoPanel").setExpanded(true);
  //      s.getView().getModel().setProperty("/types", l);
  //      s.oApplication.getModel("accountingInfoModel").setProperty("/types", l);
  //      s.validateSaveBtnVisibility(d);
  //    } else {
  //      s.worklistItemSelected = true;
  //      s.favoriteSelected = false;
  //      a.setValue(f.getTitle());
  //      b = f.data().items;
  //      var p = f.data().fieldId,
  //        q = f.data().fieldValue;
  //      l = s.oApplication.getModel("accountingInfoModel").getData().types;
  //      for (i = 0; i < l.length; i++) {
  //        l[i].value = "";
  //      }
  //      if (!s.worklistSelectedObj) {
  //        s.worklistSelectedObj = {};
  //      }
  //      if (s.checkFieldName(p)) {
  //        s.worklistSelectedObj[p] = q;
  //      }
  //      for (j = 0; j < b.length; j++) {
  //        if (s.checkFieldName(b[j].fieldName)) {
  //          s.worklistSelectedObj[b[j].fieldName] = b[j].fieldValue;
  //        }
  //        for (i = 0; i < l.length; i++) {
  //          if (b[j].fieldName === "LTXA1") {
  //            s.byId("S31TextArea").setValue(b[j].name);
  //          }
  //          var r = f.getTitle() + " " + "(" + q + ")";
  //          if (l[i].fieldName === p && l[i].value !== r) {
  //            l[i].value = r;
  //            l[i].valueStateText = q;
  //          }
  //          if (l[i].fieldName === b[j].fieldName) {
  //            l[i].value = b[j].fieldValue;
  //            l[i].valueStateText = b[j].name;
  //            break;
  //          }
  //        }
  //      }
  //      s.byId("accountingInfoPanel").setExpanded(true);
  //      s.getView().getModel().setProperty("/types", l);
  //      s.oApplication.getModel("accountingInfoModel").setProperty("/types", l);
  //      s.validateSaveBtnVisibility(d);
  //    }
  //    S.destroy();
  //    S = null;
  //  });
  // },
  onUploadCollection: function(e) {
    var Counter = [];
    var UploadCollection;
    var ItemUploadCollection = "";
    var Selected;
    var that = this;
    var c = that.byId("weeklyCalendar");
    var a = c.getSelectedDates();
    that.entry = that.replaceSpecialChar(that.entry);
    var date = new Date(a[0]);
    if (sap.ui.Device.system.phone) {
      date.setDate(date.getDate() - 1);
    }
    var w = that.getDateTimeStr(date);
    // if (sap.ui.Device.system.phone) {
    //  w = w - 1;
    // }
    var busyDialog = new sap.m.BusyDialog({
      text: "Получаем документы...."
    });
    // busyDialog.open();

    var sServiceUrl = "/sap/opu/odata/sap/zcats_docs_srv/";
    var oModel = new sap.ui.model.odata.v2.ODataModel(sServiceUrl, {
      useBatch: false
    });
    sap.ui.getCore().setModel(oModel);

    oModel.attachRequestCompleted(function() {
      busyDialog.close();
    });

    if (jQuery.sap.storage.get("ZZKEY") !== null) {
      var keyFilter = new sap.ui.model.Filter("Zzkey", sap.ui.model.FilterOperator.EQ, jQuery.sap.storage.get("ZZKEY").toString());
    } else {
      keyFilter = new sap.ui.model.Filter("Zzkey", sap.ui.model.FilterOperator.EQ, that.entry.childCodes[0]);
    }

    // var listDialog = new sap.m.Dialog({
    //  title: "Список документов",
    //  endButton: new sap.m.Button({
    //    text: "Закрыть",
    //    icon: "sap-icon://decline",
    //    press: function(event) {
    //      listDialog.close();
    //      // UploadCollection.destroy();
    //    }
    //  })
    // });

    var dialog = sap.ui.getCore().byId("Dialog");

    if (dialog.getContent().length === 0) {

      // var ObjectAttribute = new sap.m.ObjectAttribute({
      //  text: "{ClassText}"
      // });

      var UploadColItem = new sap.m.UploadCollectionItem({
        contributor: "{ClassText}",
        fileName: "{Filename}",
        mimeType: "{MimeType}",
        documentId: "{DocId}",
        visibleDelete: true,
        visibleEdit: false,
        url: "{Link}"
          // attributes: [
          //  new sap.m.ObjectAttribute ({
          //  text: "{ClassText}",
          //  active: false
          //  // press: function(oEvent) {
          //  //  ItemUploadCollection = oEvent.getSource().getParent();
          //  //            var Url = "/sap/opu/odata/sap/ZSERVICE_DESK_SRV/";
          //  // var Model = new sap.ui.model.odata.ODataModel(Url, false);

        //  // Model.read("/ClassificationSet",
        //  //  null,
        //  //  null,
        //  //  false,
        //  //  function(oData, oResponse) {
        //  //    var nodes = [];
        //  //    var ClassDescription = [];
        //  //    var Node = [];
        //  //    for (var Id in oData.results) {
        //  //      var oDataObj = oData.results[Id];
        //  //      nodes.push(oDataObj.Description);
        //  //    }
        //  //    ClassDescription = Array.from(new Set(nodes));
        //  //    var oTree = new sap.ui.commons.Tree({
        //  //      select: function(oEvent) {
        //  //        var selected = oEvent.getParameters().node.getProperty("text");
        //  //        for (var i = 0; i < ClassDescription.length; i++) {
        //  //          if (selected === ClassDescription[i]) {
        //  //            return;
        //  //          }
        //  //        }
        //  //        Selected = selected;
        //  //      },
        //  //    });
        //  //    oTree.setTitle("Варианты:");
        //  //    oTree.setWidth("100%");
        //  //    oTree.setHeight("auto");
        //  //    oTree.setShowHeaderIcons(true);
        //  //    oTree.setShowHorizontalScrollbar(false);
        //  //    for (var i = 0; i < ClassDescription.length; i++) {
        //  //      Node[i] = new sap.ui.commons.TreeNode({
        //  //        text: ClassDescription[i],
        //  //        icon: "sap-icon://sap-box",
        //  //        expanded: false
        //  //      });
        //  //      for (Id in oData.results) {
        //  //        var oDataObj = oData.results[Id];
        //  //        if (oDataObj.Description == ClassDescription[i]) {

        //  //          Node[i].addNode(new sap.ui.commons.TreeNode({
        //  //            text: oDataObj.DocType
        //  //          }));
        //  //          oTree.addNode(Node[i]);
        //  //        }
        //  //      }
        //  //    }
        //  //    var ClassificationDialog = new sap.m.Dialog({
        //  //      title: "Классификация документа",
        //  //      endButton: new sap.m.Button({
        //  //        text: "Ок",
        //  //        icon: "sap-icon://accept",
        //  //        press: function(oEvent) {
        //  //          if (Selected === "") {
        //  //            sap.m.MessageToast.show("Выберите вид документа!");
        //  //            return;
        //  //          }
        //  //          for (var i = 0; i < oData.results.length; i++) {
        //  //            if (oData.results[i].DocType === Selected)
        //  //              var FileClass = oData.results[i];
        //  //          }
        //  //          // var UploadCollection = sap.ui.getCore().byId('UploadCollection');
        //  //          if (ItemUploadCollection != "") {
        //  //            for (var i = 0; i < UploadCollection.getItems().length; i++) {
        //  //              if (UploadCollection.getAggregation("items")[i].getId() === ItemUploadCollection.getId()) {
        //  //                var text = FileClass.Description + "-" + Selected;
        //  //                UploadCollection.getAggregation("items")[i].getAttributes()[0].setText(text);
        //  //                UploadCollection.getAggregation("items")[i].getAttributes()[1].setText(FileClass.Id);
        //  //              }
        //  //            }
        //  //            ItemUploadCollection = "";
        //  //          } else {
        //  //            UploadCollection.getAggregation("items")[0].removeAttribute(UploadCollection.getAggregation("items")[0].getAttributes()[
        //  //              0]);
        //  //            UploadCollection.getAggregation("items")[0].addAttribute(new sap.m.ObjectAttribute({
        //  //              text: FileClass.Description + "-" + Selected,
        //  //              active: true,
        //  //              press: function(oEvent) {
        //  //                ItemUploadCollection = oEvent.getSource().getParent();
        //  //                ClassificationDialog.open(ItemUploadCollection);
        //  //              }
        //  //            }));
        //  //            UploadCollection.getAggregation("items")[0].addAttribute(new sap.m.ObjectAttribute({
        //  //              text: FileClass.Id,
        //  //            }).setVisible(false));
        //  //          }
        //  //          Selected = "";
        //  //          ClassificationDialog.close();
        //  //        },
        //  //      }).addStyleClass("myOkButton"),
        //  //      contentHeight: "50%"
        //  //    });
        //  //    ClassificationDialog.addContent(oTree);
        //  //    ClassificationDialog.open();
        //  //  }
        //  // );
        //  // }

        // }) , new sap.m.ObjectAttribute ({ text: "{DocType}",
        //  visible: false})]
        // attributes: { [{"Class"},{"Class"}] }
      });

      // var oData = oModel.read("/DocsSet", {
      //  filters: [keyFilter, new sap.ui.model.Filter(
      //    "Datum", sap.ui.model.FilterOperator.EQ, w)],
      //  template: UploadColItem,
      //  success: function(event) {
      //    busyDialog.close();
      //  }
      // });

      // UploadCollection = jQuery.sap.storage.get("Collection");

      UploadCollection = new sap.m.UploadCollection({
        id: "UploadCollection",
        multiple: false,
        uploadUrl: sServiceUrl,
        uploadEnabled: true,
        instantUpload: true,
        beforeUploadStarts: function(oEvent) {

          var SecurityToken = oModel.getSecurityToken();
          // Header Token
          var oCustomerHeaderToken = new sap.m.UploadCollectionParameter({
            name: "x-csrf-token",
            value: SecurityToken
          });
          oEvent.getParameters().addHeaderParameter(oCustomerHeaderToken);

          var oCustomerHeaderSlug = new sap.m.UploadCollectionParameter({
            name: "slug",
            value: encodeURIComponent(oEvent.getParameter("fileName"))
          });
          oEvent.getParameters().addHeaderParameter(oCustomerHeaderSlug);

          var oDate = new sap.ui.unified.FileUploaderParameter({
            name: "zdate",
            value: w
          });
          oEvent.getParameters().addHeaderParameter(oDate);
          if (jQuery.sap.storage.get("ZZKEY") !== null) {
            var oKey = new sap.ui.unified.FileUploaderParameter({
              name: "key",
              value: jQuery.sap.storage.get("ZZKEY").toString()
            });
          } else {
            oKey = new sap.ui.unified.FileUploaderParameter({
              name: "key",
              value: that.entry.childCodes[0]
            });
          }
          oEvent.getParameters().addHeaderParameter(oKey);

        },
        change: function(oEvent) {
          var Url = "/sap/opu/odata/sap/ZSERVICE_DESK_SRV/";
          var Model = new sap.ui.model.odata.ODataModel(Url, false);

          Model.read("/ClassificationSet",
            null,
            null,
            false,
            function(oData, oResponse) {
              var nodes = [];
              var ClassDescription = [];
              var Node = [];
              for (var Id in oData.results) {
                var oDataObj = oData.results[Id];
                nodes.push(oDataObj.Description);
              }
              ClassDescription = Array.from(new Set(nodes));
              var oTree = new sap.ui.commons.Tree({
                select: function(oEvent) {
                  var selected = oEvent.getParameters().node.getProperty("text");
                  for (var i = 0; i < ClassDescription.length; i++) {
                    if (selected === ClassDescription[i]) {
                      return;
                    }
                  }
                  Selected = selected;
                },
              });
              oTree.setTitle("Варианты:");
              oTree.setWidth("100%");
              oTree.setHeight("auto");
              oTree.setShowHeaderIcons(true);
              oTree.setShowHorizontalScrollbar(false);
              for (var i = 0; i < ClassDescription.length; i++) {
                Node[i] = new sap.ui.commons.TreeNode({
                  text: ClassDescription[i],
                  icon: "sap-icon://sap-box",
                  expanded: false
                });
                for (Id in oData.results) {
                  var oDataObj = oData.results[Id];
                  if (oDataObj.Description == ClassDescription[i]) {

                    Node[i].addNode(new sap.ui.commons.TreeNode({
                      text: oDataObj.DocType
                    }));
                    oTree.addNode(Node[i]);
                  }
                }
              }
              var ClassificationDialog = new sap.m.Dialog({
                title: "Классификация документа",
                endButton: new sap.m.Button({
                  text: "Ок",
                  icon: "sap-icon://accept",
                  press: function(oEvent) {
                    if (Selected === "") {
                      sap.m.MessageToast.show("Выберите вид документа!");
                      return;
                    }
                    for (var i = 0; i < oData.results.length; i++) {
                      if (oData.results[i].DocType === Selected)
                        var FileClass = oData.results[i];
                    }
                    // var UploadCollection = sap.ui.getCore().byId('UploadCollection');
                    if (ItemUploadCollection != "") {
                      for (var i = 0; i < UploadCollection.getItems().length; i++) {
                        if (UploadCollection.getAggregation("items")[i].getId() === ItemUploadCollection.getId()) {
                          var text = FileClass.Description + "-" + Selected;
                          UploadCollection.getAggregation("items")[i].getAttributes()[0].setText(text);
                          var oCustomerHeaderClassification = new sap.m.UploadCollectionParameter({
                            name: "class",
                            value: FileClass.Id
                          });
                          oEvent.getParameters().addHeaderParameter(oCustomerHeaderClassification);
                          UploadCollection.getAggregation("items")[i].getAttributes()[1].setText(FileClass.Id);
                        }
                      }
                      ItemUploadCollection = "";
                    } else {
                      // UploadCollection.getAggregation("items")[0].removeAttribute(UploadCollection.getAggregation("items")[0].getAttributes()[
                      //  0]);
                      UploadCollection.getAggregation("items")[0].addAttribute(new sap.m.ObjectAttribute({
                        text: FileClass.Description + "-" + Selected,
                        active: false,
                        // press: function(oEvent) {
                        //  ItemUploadCollection = oEvent.getSource().getParent();
                        //  ClassificationDialog.open(ItemUploadCollection);
                        // }
                      }));
                      UploadCollection.getAggregation("items")[0].addAttribute(new sap.m.ObjectAttribute({
                        text: FileClass.Id,
                      }).setVisible(false));
                    }
                    Selected = "";
                    ClassificationDialog.close();
                  },
                }).addStyleClass("myOkButton"),
                contentHeight: "50%"
              });
              ClassificationDialog.addContent(oTree);
              ClassificationDialog.open();
            }
          );
        },
        uploadComplete: function(oEvent) {
          Counter = [];
          oEvent.getSource().removeAllItems();
        },
        // fileDeleted: function(oEvent) {
        //  var docId = (oEvent.getParameter("documentId"));
        //  UploadCollection.bindAggregation("items", {
        //    path: "/DocsSet",
        //    filters: [keyFilter, new sap.ui.model.Filter(
        //      "Datum", sap.ui.model.FilterOperator.EQ, w), new sap.ui.model.Filter("DocId", sap.ui.model.FilterOperator.EQ, docId)],
        //    template: UploadColItem
        //  });
        // },
        items: {
          path: "/DocsSet",
          filters: [keyFilter, new sap.ui.model.Filter(
            "Datum", sap.ui.model.FilterOperator.EQ, w)],
          template: UploadColItem
        }
      });

      // jQuery.sap.storage.put("Collection", UploadCollection);

      dialog.addContent(UploadCollection);
      // dialog.addContent(busyDialog);

    }

    dialog.open();
    // busyDialog.open();

  },
  onList: function(e) {
    var that = this;
    var c = that.byId("weeklyCalendar");
    var a = c.getSelectedDates();
    that.entry = that.replaceSpecialChar(that.entry);
    var date = new Date(a[0]);
    if (sap.ui.Device.system.phone) {
      date.setDate(date.getDate() - 1);
    }
    var w = that.getDateTimeStr(date);
    // if (sap.ui.Device.system.phone) {
    //  w = w - 1;
    // }
    var busyDialog = new sap.m.BusyDialog({
      text: "Получаем документы...."
    });
    // busyDialog.open();

    var sServiceUrl = "/sap/opu/odata/sap/zcats_docs_srv/";
    var oModel = new sap.ui.model.odata.v2.ODataModel(sServiceUrl, {
      useBatch: false
    });
    sap.ui.getCore().setModel(oModel);

    oModel.attachRequestCompleted(function() {
      busyDialog.close();
    });

    if (jQuery.sap.storage.get("ZZKEY") !== null) {
      var keyFilter = new sap.ui.model.Filter("Zzkey", sap.ui.model.FilterOperator.EQ, jQuery.sap.storage.get("ZZKEY").toString());
    } else {
      keyFilter = new sap.ui.model.Filter("Zzkey", sap.ui.model.FilterOperator.EQ, that.entry.childCodes[0]);
    }

    var UploadColItem = new sap.m.UploadCollectionItem({
      contributor: "{ClassText}",
      fileName: "{Filename}",
      mimeType: "{MimeType}",
      documentId: "{DocId}",
      visibleDelete: true,
      visibleEdit: false,
      url: "{Link}"
    });

    // var oData = oModel.read("/DocsSet", {
    //  filters: [keyFilter, new sap.ui.model.Filter(
    //    "Datum", sap.ui.model.FilterOperator.EQ, w)],
    //  template: UploadColItem,
    //  success: function(event) {
    //    busyDialog.close();
    //  }
    // });

    var UploadCollection = new sap.m.UploadCollection({
      multiple: false,
      uploadEnabled: false,
      fileDeleted: function(oEvent) {
        var docId = (oEvent.getParameter("documentId"));
        UploadCollection.bindAggregation("items", {
          path: "/DocsSet",
          filters: [keyFilter, new sap.ui.model.Filter(
            "Datum", sap.ui.model.FilterOperator.EQ, w), new sap.ui.model.Filter("DocId", sap.ui.model.FilterOperator.EQ, docId)],
          template: UploadColItem
        });
      },
      items: {
        path: "/DocsSet",
        filters: [keyFilter, new sap.ui.model.Filter(
          "Datum", sap.ui.model.FilterOperator.EQ, w)],
        template: UploadColItem
      }
    });

    var listDialog = new sap.m.Dialog({
      title: "Список документов",
      endButton: new sap.m.Button({
        text: "Закрыть",
        icon: "sap-icon://decline",
        press: function(event) {
          listDialog.close();
          UploadCollection.destroy();
        }
      })
    });

    // sap.ui.getCore().getModel().submitChanges({
    //  success: function() {
    //    busyDialog.close();
    //  },
    //  error: function() {}
    // });

    listDialog.addContent(UploadCollection);
    listDialog.addContent(busyDialog);

    listDialog.open();
    busyDialog.open();

  },
  onUploadComplete: function(e) {
    setTimeout(sap.m.MessageToast.show("Документ прикреплён"), 2000);
    this.byId("fileUploader").setValue("");
    this.busyDialog.close();
  },
  onAddDoc: function(e) {
    var that = this;
    var oTable = new sap.ui.table.TreeTable({
      groupHeaderProperty: "Id",
      columns: [new sap.ui.table.Column({
        template: "Id"
      })],
      visibleRowCount: 15,
      enableColumnReordering: false,
      expandFirstLevel: false,
      selectionMode: sap.ui.table.SelectionMode.Single,
    });

    var sServiceUrl = "/sap/opu/odata/sap/zcats_docs_srv/";
    var oModel = new sap.ui.model.odata.v2.ODataModel(sServiceUrl, {
      useBatch: false
    });

    oTable.setModel(oModel);

    //navigation service binding
    oTable.bindRows({
      path: "/ClassSet",
      parameters: {
        expand: "ChildNodes",
        countMode: "Inline",
        navigation: {
          'ClassSet': 'ChildNodes'
        }
      }
    });

    var ClassificationDialog = new sap.m.Dialog({
      title: "Классификация документа",
      beginButton: new sap.m.Button({
        text: "Отмена",
        icon: "sap-icon://response",
        press: function(event) {
          that.byId("fileUploader").setValue("");
          ClassificationDialog.close();
        }
      }),
      endButton: new sap.m.Button({
        text: "Ок",
        icon: "sap-icon://accept",
        press: function(event) {
          var index = ClassificationDialog.getContent()[0].getSelectedIndex();
          if (index === -1) {
            sap.m.MessageToast.show("Выберите вид документа!");
            return;
          }
          var dataClass = ClassificationDialog.getContent()[0].getContextByIndex(index);
          var classDoc = dataClass.getProperty(dataClass.getPath());
          if (classDoc.ParentId === "") {
            sap.m.MessageToast.show("Выберите вид документа!");
            return;
          }
          jQuery.sap.storage.put("Class", classDoc.Name);

          var oClass = new sap.ui.unified.FileUploaderParameter({
            name: "class",
            value: classDoc.Name
          });
          that.byId("fileUploader").addHeaderParameter(oClass);
          that.busyDialog = new sap.m.BusyDialog({
            text: "Прикрепляем..."
          });
          that.busyDialog.open();
          ClassificationDialog.close();
          that.byId("fileUploader").upload();
        }
      }).addStyleClass("myOkButton"),
      contentHeight: "50%",
      contentWidth: "20%"
    });

    ClassificationDialog.addContent(oTable);
    ClassificationDialog.open();

    this.byId("AddDoc").setVisible(false);

  },
  // ClassDoc: function(oUploadCollection, name) {
  //  var that = this;

  //  var oTable = new sap.ui.table.TreeTable({
  //    groupHeaderProperty: "Id",
  //    columns: [new sap.ui.table.Column({
  //      template: "Id"
  //    })],
  //    visibleRowCount: 15,
  //    selectionMode: sap.ui.table.SelectionMode.Single
  //  });

  //  var sServiceUrl = "/sap/opu/odata/sap/zcats_docs_srv/";
  //  var oModel = new sap.ui.model.odata.v2.ODataModel(sServiceUrl, {
  //    useBatch: true
  //  });

  //  oTable.setModel(oModel);

  //  //navigation service binding
  //  oTable.bindRows({
  //    path: "/ClassSet",
  //    parameters: {
  //      expand: "ChildNodes",
  //      navigation: {
  //        'ClassSet': 'ChildNodes'
  //      }
  //    }
  //  });

  //  var ClassificationDialog = new sap.m.Dialog({
  //    title: "Классификация документа",
  //    endButton: new sap.m.Button({
  //      text: "Ок",
  //      icon: "sap-icon://accept",
  //      press: function(oEvent) {
  //        var index = ClassificationDialog.getContent()[0].getSelectedIndex();
  //        if (index === -1) {
  //          sap.m.MessageToast.show("Выберите вид документа!");
  //          return;
  //        }
  //        var dataClass = ClassificationDialog.getContent()[0].getContextByIndex(index);
  //        var classDoc = dataClass.getProperty(dataClass.getPath());
  //        if (classDoc.ParentId === "") {
  //          sap.m.MessageToast.show("Выберите вид документа!");
  //          return;
  //        }
  //        var ObjId = that.byId("ObjId");
  //        var text = "Класс документа: " + classDoc.ParentId + "\n" + "Вид документа: " + classDoc.Id;
  //        ObjId.setText(text);
  //        jQuery.sap.storage.put("Class", classDoc.Name);
  //        // Selected = "";

  //        // var link = "/sap/opu/odata/sap/zcats_docs_srv/";

  //        // var oModel = new sap.ui.model.odata.v2.ODataModel(link, {
  //        //  useBatch: false
  //        // });

  //        // var oUploadCollection = oEvent.getSource();
  //        var SecurityToken = oModel.getSecurityToken();
  //        // Header Token
  //        var oCustomerHeaderToken = new sap.ui.unified.FileUploaderParameter({
  //          name: "x-csrf-token",
  //          value: SecurityToken
  //        });
  //        oUploadCollection.addHeaderParameter(oCustomerHeaderToken);

  //        var oCustomerHeaderSlug = new sap.ui.unified.FileUploaderParameter({
  //          name: "slug",
  //          value: encodeURIComponent(name)
  //        });
  //        oUploadCollection.addHeaderParameter(oCustomerHeaderSlug);

  //        var c = that.byId("weeklyCalendar");
  //        var a = c.getSelectedDates();
  //        that.entry = that.replaceSpecialChar(that.entry);
  //        var w = that.getDateTimeStr(new Date(a[0]));
  //        // jQuery.sap.storage.put("Date", w);
  //        // jQuery.sap.storage.put("Key", s.entry.childCodes[0]);
  //        // var classDoc = jQuery.sap.storage.get("Class").toString();

  //        var oDate = new sap.ui.unified.FileUploaderParameter({
  //          name: "date",
  //          value: w
  //        });
  //        oUploadCollection.addHeaderParameter(oDate);

  //        var oKey = new sap.ui.unified.FileUploaderParameter({
  //          name: "key",
  //          value: that.entry.childCodes[0]
  //        });
  //        oUploadCollection.addHeaderParameter(oKey);

  //        var oClass = new sap.ui.unified.FileUploaderParameter({
  //          name: "class",
  //          value: classDoc.Name
  //        });
  //        oUploadCollection.addHeaderParameter(oClass);
  //        ClassificationDialog.close();
  //        return oUploadCollection;

  //      }
  //    }).addStyleClass("myOkButton"),
  //    contentHeight: "50%",
  //    contentWidth: "20%"
  //  });

  //  ClassificationDialog.addContent(oTable);
  //  ClassificationDialog.open();
  //  this.byId("AddDoc").setVisible(true);

  //  //  // }
  //  // });
  // },
  ClassClicked: function(e) {
    // this.ClassDoc();
  },
  onChangeDoc: function(oEvent) {
    // var ObjId = this.byId("ObjId");
    // ObjId.setVisible(true);

    var oUploadCollection = oEvent.getSource();
    oUploadCollection.destroyHeaderParameters();
    var name = oEvent.getParameter("files")[0].name;
    var that = this;

    var sServiceUrl = "/sap/opu/odata/sap/zcats_docs_srv/";
    var oModel = new sap.ui.model.odata.v2.ODataModel(sServiceUrl, {
      useBatch: false
    });

    var SecurityToken = oModel.getSecurityToken();
    // Header Token
    var oCustomerHeaderToken = new sap.ui.unified.FileUploaderParameter({
      name: "x-csrf-token",
      value: SecurityToken
    });
    oUploadCollection.addHeaderParameter(oCustomerHeaderToken);

    var oCustomerHeaderSlug = new sap.ui.unified.FileUploaderParameter({
      name: "slug",
      value: encodeURIComponent(name)
    });
    oUploadCollection.addHeaderParameter(oCustomerHeaderSlug);

    var c = that.byId("weeklyCalendar");
    var a = c.getSelectedDates();
    that.entry = that.replaceSpecialChar(that.entry);
    var w = that.getDateTimeStr(new Date(a[0]));

    // jQuery.sap.storage.put("Date", w);
    // jQuery.sap.storage.put("Key", s.entry.childCodes[0]);
    // var classDoc = jQuery.sap.storage.get("Class").toString();

    var oDate = new sap.ui.unified.FileUploaderParameter({
      name: "zdate",
      value: w
    });
    oUploadCollection.addHeaderParameter(oDate);

    if (jQuery.sap.storage.get("ZZKEY") !== null) {
      var oKey = new sap.ui.unified.FileUploaderParameter({
        name: "key",
        value: jQuery.sap.storage.get("ZZKEY").toString()
      });
    } else {
      oKey = new sap.ui.unified.FileUploaderParameter({
        name: "key",
        value: that.entry.childCodes[0]
      });
    }

    oUploadCollection.addHeaderParameter(oKey);

    this.byId("AddDoc").setVisible(true);

  },
  onComment: function(e) {
    var s = this;
    var note = s.byId("S31TextArea").getValue();
    var comm = s.byId("S31TextAreaCom").getValue();
    // if (comm === "") {
    //  sap.m.MessageToast.show("Комментарий пустой");
    //  return;
    // }
    var user = sap.ushell.Container.getUser();
    var FirstName = user.getFirstName();
    var LastName = user.getLastName();
    var oDate = new Date();
    var date = oDate.toLocaleDateString();
    var time = oDate.toLocaleTimeString();
    if (note === "") {
      s.byId("S31TextArea").setValue(date + '/' + time + '/' + LastName + ' ' + FirstName + '\n' + comm);
    } else {
      s.byId("S31TextArea").setValue(note + '\n' + date + '/' + time + '/' + LastName + ' ' + FirstName + '\n' + comm);
    }
    s.byId("S31TextAreaCom").setValue("");
    s.byId("Comm").setVisible(false);

  },
  onInputHelp: function() {
    var s = this;
    var a = {};
    a.name = arguments[0].getSource().getValueStateText();
    a.fieldName = arguments[0].getSource().getName();
    var S = arguments[0].getSource().getParent().getLabel().getText();

    var o = new sap.m.SelectDialog({
      title: S,
      contentWidth: "80%",
      search: [
        this.onLiveChange,
        this
      ],
      liveChange: [
        this.onLiveChange,
        this
      ]
    });
    var i = new sap.m.StandardListItem({
      title: "{fieldValue}",
      description: "{fieldId}",
      active: true
    });
    s.typeListControl = o;
    s.getValueHelpCollection(a);
    o.setModel(s.oApplication.getModel("createScreenModel"));
    if (a.fieldName.indexOf("/") >= 0) {
      a.fieldName = a.fieldName.split("/").join("-");
    }
    o.bindAggregation("items", "/" + a.fieldName, i);
    o.open();
    var b = arguments[0].getSource();
    o.attachConfirm(function(e) {
      var c = e.getParameter("selectedItem");
      if (c) {
        s.selectedIndex = e.getParameter("selectedItem").getParent().indexOfItem(e.getParameter("selectedItem"));
        if (c.getTitle() === s.oBundle.getText("TAP_TO_LOAD_MORE")) {
          s.tapToLoadMore(a);
          o.open();
          return;
        } else if (c.getTitle() === s.oBundle.getText("CONTINUE_SEARCH_ON_SERVER")) {
          var d = s.continueSearchOnServer(a);
          o.open(d);
          return;
        } else if (c.getTitle() === "(None)") {
          b.setValue("");
          b.setValueStateText("");
        } else {
          b.setValue(c.getTitle() + " " + c.getDescription());
          if (a.fieldName === "ZZKEY") {
            jQuery.sap.storage.put("ZZKEY", c.getDescription());
          }
          b.setValueStateText(c.getDescription().replace("(", "").replace(")", ""));
        }
        s.validateSaveBtnVisibility(e);
      }
      o.destroy();
      o = null;
      s.localTypeList = [];
      s.remoteTypeList = [];
      s.resetRemoteSearch();
      s.top = s.RESULTS_TOP;
      s.remoteSkip = 0;
      s.localSkip = 0;
    });
    o.attachCancel(function() {
      o = null;
      s.localTypeList = [];
      s.remoteTypeList = [];
      s.resetRemoteSearch();
      s.top = s.RESULTS_TOP;
      s.remoteSkip = 0;
      s.localSkip = 0;
    });
  },
  //    getFavoritesCollection: function () {
  //        var s = this;
  //        var F, a;
  //        if (this.FavoriteAvailable) {
  //            this.oService.getFavorites(this, this.oApplication.pernr, function (d) {
  //                var f = 0;
  //                s.favorites = [];
  //                for (var i = 0; i < d.length; i++) {
  //                    if (d[i].ObjType === "FW") {
  //                        s.favorites[f] = {
  //                            name: d[i].Name,
  //                            type: d[i].ObjType,
  //                            id: d[i].ID,
  //                            FavoriteDataFields: d[i].FavoriteDataFields,
  //                            childs: [],
  //                            info: "",
  //                            active: true,
  //                            subText: d[i].Field_Text
  //                        };
  //                    } else {
  //                        if (parseFloat(d[i].FavoriteDataFields.CATSHOURS)) {
  //                            a = s.oBundle.getText("TOTAL_RECORDED_HOURS", [d[i].FavoriteDataFields.CATSHOURS]);
  //                            if (a.indexOf("Target:") >= 0) {
  //                                a = d[i].FavoriteDataFields.CATSHOURS + " h";
  //                            }
  //                        } else {
  //                            var b = d[i].FavoriteDataFields.BEGUZ, e = d[i].FavoriteDataFields.ENDUZ;
  //                            var t = sap.ca.ui.model.format.DateFormat.getTimeInstance({ pattern: "HHmm" });
  //                            var c = sap.ca.ui.model.format.DateFormat.getTimeInstance({ style: "short" });
  //                            b = t.parse(b);
  //                            b = c.format(b);
  //                            e = t.parse(e);
  //                            e = c.format(e);
  //                            a = s.oBundle.getText("WEEK_DATE_RANGE", [
  //                                b,
  //                                e
  //                            ]);
  //                        }
  //                        s.favorites[f] = {
  //                            name: d[i].Name,
  //                            type: d[i].ObjType,
  //                            id: d[i].ID,
  //                            FavoriteDataFields: d[i].FavoriteDataFields,
  //                            childs: [],
  //                            info: a,
  //                            active: true,
  //                            subText: d[i].Field_Text
  //                        };
  //                    }
  //                    f++;
  //                }
  //                for (i = 0; i < f; i++) {
  //                    F = s.favorites[i].FavoriteDataFields;
  //                    for (var p in F) {
  //                        if (p !== "CATSHOURS" && p !== "PERNR" && p !== "BEGUZ" && p !== "ENDUZ") {
  //                            if (F[p] !== "" && typeof F[p] !== "undefined" && parseInt(F[p], 10) !== 0) {
  //                                s.favorites[i].childs.push({
  //                                    name: p,
  //                                    value: F[p]
  //                                });
  //                            }
  //                        }
  //                    }
  //                }
  //                s.oApplication.getModel("createScreenModel").setProperty("/favorites", s.favorites);
  //                if (s.oApplication.getModel("createScreenModel").getProperty("/projects")) {
  //                    if (s.oApplication.getModel("createScreenModel").getProperty("/favorites").length === 0 && s.oApplication.getModel("createScreenModel").getProperty("/projects").length === 0) {
  //                        s.byId("accountingInfoPanel").setExpanded(true);
  //                        s.byId("timeAssignmentLbl").setVisible(false);
  //                        s.byId("timeAssignment").setVisible(false);
  //                    }
  //                }
  //            });
  //        }
  //    },
  //    getWorkListCollection: function () {
  //        this.workList = [];
  //        this.workListType = [];
  //        var s = this;
  //        var m = this.oApplication.getModel("TSM_WEEKLY");
  //        this.searchField_begDa = m.getProperty("/weekStart");
  //        this.searchField_endDa = m.getProperty("/weekEnd");
  //        this.oService.getWorkListCollection(this, this.oApplication.pernr, this.searchField_begDa, this.searchField_endDa, function (d) {
  //            var w = 0;
  //            for (var i = 0; i < d.length; i++) {
  //                if (d[i].Level === 0) {
  //                    s.workList[w] = {
  //                        name: d[i].FieldValueText,
  //                        childs: [],
  //                        fieldName: d[i].FieldName,
  //                        fieldValue: d[i].FieldValue,
  //                        recordNumber: d[i].RecordNumber
  //                    };
  //                    w++;
  //                }
  //            }
  //            for (i = 0; i < d.length; i++) {
  //                if (d[i].Level !== 0) {
  //                    for (var j = 0; j < s.workList.length; j++) {
  //                        if (s.workList[j].recordNumber === d[i].RecordNumber) {
  //                            s.workList[j].childs.push({
  //                                name: d[i].FieldValueText,
  //                                fieldName: d[i].FieldName,
  //                                fieldValue: d[i].FieldValue
  //                            });
  //                        }
  //                    }
  //                }
  //            }
  //            var p = [];
  //            for (i = 0; i < s.workList.length; i++) {
  //                var c = [];
  //                var a = [];
  //                var b = [];
  //                for (j = 0; j < s.workList[i].childs.length; j++) {
  //                    c.push(s.workList[i].childs[j].name);
  //                    a.push(s.workList[i].childs[j].fieldName);
  //                    b.push(s.workList[i].childs[j].fieldValue);
  //                }
  //                p.push({
  //                    name: s.workList[i].name,
  //                    subText: c.join(", "),
  //                    type: false,
  //                    childs: s.workList[i].childs,
  //                    fieldName: s.workList[i].fieldName,
  //                    fieldValue: s.workList[i].fieldValue,
  //                    fieldValueId: s.workList[i].name + c.join(", ")
  //                });
  //            }
  //            s.workList = p;
  //            s.oApplication.getModel("createScreenModel").setProperty("/projects", s.workList);
  //            if (s.FavoriteAvailable) {
  //                if (s.oApplication.getModel("createScreenModel").getProperty("/favorites")) {
  //                    if (s.oApplication.getModel("createScreenModel").getProperty("/favorites").length === 0 && s.oApplication.getModel("createScreenModel").getProperty("/projects").length === 0) {
  //                        s.byId("accountingInfoPanel").setExpanded(true);
  //                        s.byId("timeAssignmentLbl").setVisible(false);
  //                        s.byId("timeAssignment").setVisible(false);
  //                    } else {
  //                        s.byId("timeAssignmentLbl").setVisible(true);
  //                        s.byId("timeAssignment").setVisible(true);
  //                    }
  //                }
  //            } else {
  //                if (s.oApplication.getModel("createScreenModel").getProperty("/projects").length === 0) {
  //                    s.byId("accountingInfoPanel").setExpanded(true);
  //                    s.byId("timeAssignmentLbl").setVisible(false);
  //                    s.byId("timeAssignment").setVisible(false);
  //                } else {
  //                    s.byId("timeAssignmentLbl").setVisible(true);
  //                    s.byId("timeAssignment").setVisible(true);
  //                }
  //            }
  //        });
  //    },
  //    valueHelpDataForamtter: function (f, a) {
  //        if (f) {
  //            return f + " (" + a + ")";
  //        }
  //    },
  //    durationDateForamtter: function (h, m) {
  //        return h + ":" + m;
  //    },
  getProfileFields: function() {
    this.profileFields = [];
    var s = this;
    var a = new sap.ui.model.json.JSONModel();
    this.oApplication.setModel(a, "accountingInfoModel");
    this.oService.getProfileFields(this, this.oApplication.pernr, function(d) {
      var e = {},
        i;
      var b = s.oApplication.getModel("S31modelexch").getData().editentryview;
      var c = s.oApplication.getModel("S31modelexch").getData().copySelected;
      if (b || c) {
        e = s.oApplication.getModel("S31modelexch").getData().editeddata;
        s.validateSaveBtnVisibility();
      }
      for (i = 0; i < d.length; i++) {
        var n = d[i].FieldText;
        var f = d[i].FieldName;
        var g = s.NON_BREAKING_SPACE;
        var h = "";
        var r = d[i].ReadOnly;
        if (s.editCostAssignment) {
          if (s.selectedMainName === f) {
            h = s.selectedMainCode;
            g = s.selectedMainItem;
          } else {
            if ("selectedChildItems" in s) {
              for (var j = 0; j < s.selectedChildNames.length; j++) {
                if (s.selectedChildNames[j] === f) {
                  h = s.selectedChildCodes[j];
                  g = s.selectedChildItems[j];
                }
              }
            }
          }
        }
        var v = "";
        var k = "";
        if (e && e.entry) {
          if (e.entry.childItems) {
            var l = e.entry.childCodes[e.entry.childNames.indexOf(f)];
            var m = e.entry.childItems[e.entry.childNames.indexOf(f)];
            if (l) {
              v = m + " (" + l + ")";
            }
            if (m) {
              k = l;
            }
            if (!v) {
              if (f === e.entry.mainName) {
                v = e.entry.mainItem + " (" + e.entry.mainCode + ")";
                k = e.entry.mainCode;
              }
            }
          } else {
            if (f === e.entry.mainName) {
              v = e.entry.mainItem + " (" + e.entry.mainCode + ")";
              k = e.entry.mainCode;
            }
          }
        }
        s.profileFields.push({
          name: n,
          selectedName: g,
          fieldName: f,
          listType: "Active",
          labelVisible: true,
          typeVisible: f === "ZZKEY" ? false : true,
          // typeVisible: true,
          fieldValue: h,
          value: v === "" && f === "AWART" ? "Работа на проекте (0800)" : v,
          valueStateText: k === "" && f === "AWART" ? "0800" : k,
          ReadOnly: r.toLowerCase() === "true" ? false : true,
          valueHelp: true
        });
        if (!s.checkDisplayFieldNames(f)) {
          s.profileFields[i].ReadOnly = false;
        }
      }
      a.setProperty("/types", s.profileFields);
      s.oApplication.setModel(a, "accountingInfoModel");
      s.oApplication.getModel("createScreenModel").setProperty("/types", s.profileFields);
      s.getView().setModel(a, "accountingInfoModel");
      s.validateSaveBtnVisibility();
    });
  },
  //    checkDisplayFieldNames: function (f) {
  //        var a = [
  //            "DISPTEXT",
  //            "CPR_",
  //            "LTXA1"
  //        ];
  //        for (var i = 0; i < a.length; i++) {
  //            if (f.match(a[i])) {
  //                return false;
  //            }
  //        }
  //        return true;
  //    },
  //    onDone: function () {
  //        this.entry.showError = false;
  //        this.entry.error = "";
  //        this.resetMainAndChildItems();
  //        var m = true;
  //        this.entry.notes = this.byId("S31TextArea").getValue();
  //        m = false;
  //        var i = this.byId("manualAccountingInfos").getFormElements();
  //        var v;
  //        for (var j = 0; j < i.length; j++) {
  //            var k = i[j].getFields()[0].getName();
  //            if (i[j].getFields()[0].getValue().split("").indexOf("(") !== -1) {
  //                v = i[j].getFields()[0].getValueStateText();
  //            } else {
  //                v = i[j].getFields()[0].getValue();
  //            }
  //            if (!v) {
  //                v = i[j].getFields()[0].getValue();
  //            }
  //            if (v) {
  //                if (!m) {
  //                    this.entry.mainItem = k;
  //                    this.entry.mainName = k;
  //                    this.entry.mainCode = v;
  //                    m = true;
  //                } else {
  //                    if (!this.entry.childItems) {
  //                        this.initializeChildItems();
  //                        this.childItemsInitialized = true;
  //                    }
  //                    this.entry.childItems.push(k);
  //                    this.entry.childNames.push(k);
  //                    this.entry.childCodes.push(v);
  //                }
  //            }
  //        }
  //        if ("childItems" in this.entry) {
  //            if (this.entry.childItems.length > 1) {
  //                this.entry.subItems = this.entry.childItems.join(", ");
  //            } else if (this.entry.childItems.length === 1) {
  //                this.entry.subItems = this.entry.childItems[0];
  //            }
  //        }
  //        if (m || this.worklistItemSelected) {
  //            this.onSubmit();
  //        } else {
  //            this.initializeChildItems();
  //        }
  //    },
  //    onSubmit: function () {
  //        this.entry.showError = false;
  //        this.entry.error = "";
  //        this.entry.rejectionReason = "";
  //        this.updatePageData();
  //    },
  //    updatePageData: function () {
  //        var c = this.byId("weeklyCalendar");
  //        var s = c.getSelectedDates();
  //        this.entry.selectedDate = s;
  //        if (!this.isClockEntry() || this.clkTimeDurationFilled) {
  //            var l;
  //            if (!this.clkTimeDurationFilled) {
  //                l = this.byId("decimalTimeEntryValue").getValue();
  //            } else {
  //                l = this.byId("ClkTimeDecimalTimeEntryValue").getValue();
  //            }
  //            if (l.indexOf(",") > 0) {
  //                l = l.replace(",", ".");
  //            }
  //            this.entry.time = l;
  //        } else {
  //            var a = this.byId("startTime").getDateValue(), e = this.byId("endTime").getDateValue();
  //            this.entry.startTime = this.convertTime(a);
  //            this.entry.endTime = this.convertTime(e);
  //            var d = (e.getTime() - a.getTime()) / (1000 * 60);
  //            this.entry.hours = parseInt(d / 60, 10);
  //            this.entry.minutes = d % 60;
  //            this.entry.time = "0.0";
  //        }
  //        this.entry.hasNotes = this.entry.notes && this.entry.notes.length > 0 ? true : false;
  //        this.submitToOdata();
  //    },
  //    convertTime: function (d) {
  //        var t = sap.ui.core.format.DateFormat.getTimeInstance({ pattern: "HHmmss" });
  //        return t.format(d);
  //    },
  //    formatAMPM: function (d) {
  //        var h = d.getHours();
  //        var m = d.getMinutes();
  //        var a = h >= 12 ? "PM" : "AM";
  //        h = h % 12;
  //        h = h ? h : 12;
  //        m = m < 10 ? "0" + m : m;
  //        var s = h + ":" + m + " " + a;
  //        return s;
  //    },
  submitToOdata: function() {
    var s = this,
      c = this.byId("weeklyCalendar"),
      a = c.getSelectedDates(),
      S, t;
    this.errors = null;
    var b = null,
      i = 0,
      d, e, f, g, h, p, j;
    if (this.isClockEntry() && !this.clkTimeDurationFilled) {
      d = this.byId("startTime").getDateValue();
      e = this.byId("endTime").getDateValue();
    }
    if (!this.isClockEntry() || this.clkTimeDurationFilled) {
      if (this.clkTimeDurationFilled) {
        g = this.getView().byId("ClkTimeDecimalTimeEntryValue").getValue();
      } else {
        g = this.getView().byId("decimalTimeEntryValue").getValue();
      }
      if (g.indexOf(",") > -1) {
        g = g.replace(",", ".");
      }
      g = parseFloat(g);
      g = g.toFixed(2);
      h = sap.ca.ui.model.format.NumberFormat.getInstance({
        style: "standard"
      }).format(g);
      f = h;
    }
    if (!this.releaseAllowed) {
      p = this.oBundle.getText("DRAFT_CONFIRMATION_SUMMARY");
      j = this.oConfiguration.getText("DRAFT_CONFIRMATION");
    } else {
      p = this.oBundle.getText("SUBMISSION_CONFIRMATION_SUMMARY");
      j = this.oConfiguration.getText("SUBMISSION_CONFIRMATION");
    }
    t = sap.ca.ui.model.format.DateFormat.getTimeInstance({
      style: "short"
    });
    if (this.isClockEntry() && !this.clkTimeDurationFilled) {
      if (this.byId("startTime").getDisplayFormat() === "hh:mm a" || this.byId("startTime").getDisplayFormat() === "h:mm a") {
        d = this.formatAMPM(d);
        e = this.formatAMPM(e);
      } else {
        d = t.format(d);
        e = t.format(e);
      }
      S = {
        question: p,
        additionalInformation: [{
          label: this.oBundle.getText("DELETE_CONFIRMATION_SUMMARY_ENTRIES"),
          text: a.length.toString()
        }, {
          label: this.oBundle.getText("START_TIME"),
          text: d
        }, {
          label: this.oBundle.getText("END_TIME"),
          text: e
        }],
        showNote: false,
        title: j,
        confirmButtonLabel: this.oBundle.getText("OK")
      };
    } else {
      S = {
        question: p,
        additionalInformation: [{
          label: this.oBundle.getText("DELETE_CONFIRMATION_SUMMARY_ENTRIES"),
          text: a.length.toString()
        }, {
          label: this.oBundle.getText("DURATION"),
          text: f
        }],
        showNote: false,
        title: j,
        confirmButtonLabel: this.oBundle.getText("OK")
      };
    }
    this.openConfirmationPopup(S, function(r) {
      var t = this;
      var k = [],
        w = "";
      var o = s.oApplication.getModel("S31modelexch").getData().editentryview ? "U" : "C";
      if (a.length !== 0) {
        for (i = 0; i < a.length; i++) {
          s.entry = s.replaceSpecialChar(s.entry);
          w = s.getDateTimeStr(new Date(a[i]));
          jQuery.sap.storage.put("Date", w);
          jQuery.sap.storage.put("Key", s.entry.childCodes[0]);
          k.push(s.setPostObject(s.entry.counter, o, w, s.entry.time, s.entry.mainName, s.entry.mainCode, s.entry.notes, s.entry.startTime,
            s.entry.endTime, s.entry.subItems, s.entry.childCodes, s.entry.childNames));
        }
      }
      if (k.length === 0) {
        b.close();
      } else {
        s.oService.submitTimeEntry(s, k, [], [], function() {
          var l;
          if (!s.releaseAllowed) {
            l = s.oBundle.getText("DRAFT_SUCCESS");
          } else {
            l = s.oBundle.getText("SUBMIT_SUCCESS");
          }
          var m = s.byId("weeklyCalendar");
          var n = m.getCurrentDate();
          var q = n;
          n = q + "offset" + m.getFirstDayOffset();
          var M = new sap.ui.model.json.JSONModel();
          M.setProperty("/currentDate", new Date(q));
          s.oApplication.setModel(M, "S3exchangeModel");
          delete s.entry;
          // if (typeof s.content !== "undefined") {
          //  s.content.upload();
          //  s.content = null;
          // }
          s.cleanUpOnBack();
          s.oRouter.navTo("S3", {
            context: n
          }, true);
          sap.m.MessageToast.show("Cохранено");
        }, function(l, m) {
          var n = s.byId("weeklyCalendar");
          n.unselectAllDates();
          n.toggleDatesSelection(m, true);
        });
      }
    });
  },
  getHderFooterOptions: function() {
    if (this.oApplication.pernr) {
      var c = this.oApplicationFacade.getResourceBundle().getText("CANCEL");
      var r = this.oApplicationFacade.getResourceBundle().getText("RESET");
      var e = this.oApplicationFacade.getResourceBundle().getText("FAVORITE");
      var s = this.oApplication.getModel("S31modelexch");
      var a;
      if (!this.oApplication.getModel("TSM_WEEKLY").getData().releaseAllowed) {
        a = this.oApplicationFacade.getResourceBundle().getText("SAVE_DRAFT");
      } else {
        a = this.oApplicationFacade.getResourceBundle().getText("SUBMIT");
      }
      var b;
      if (!s) {
        b = this.oApplicationFacade.getResourceBundle().getText("TIMESHEET_CREATE_ENTRY_TITLE");
      } else {
        if (s.getProperty("/editentryview")) {
          b = this.oApplicationFacade.getResourceBundle().getText("TIMESHEET_EDIT_ENTRY_TITLE_SCREEN");
        } else {
          b = this.oApplicationFacade.getResourceBundle().getText("TIMESHEET_CREATE_ENTRY_TITLE");
        }
      }
      var t = this;
      var v = {
        sId: "SUBMIT_BTN",
        sI18nBtnTxt: "Сохранить",
        onBtnPressed: function(d) {
          t.onDone(d);
        }
      };
      var o = {
        sI18NFullscreenTitle: b,
        oEditBtn: v,
        buttonList: [{
          sId: "cancelBtn",
          sI18nBtnTxt: c,
          onBtnPressed: function(d) {
            t.onCancel(d);
          }
        }],
        onBack: jQuery.proxy(function() {
          this.onNavButton();
        }, this)
      };

      // if (this.oApplication.getModel("TSM_WEEKLY").getData().favoriteAvailable) {
      //  o.buttonList[1] = {
      //    sId: "EditFavoriteBtn",
      //    sI18nBtnTxt: e,
      //    onBtnPressed: function(d) {
      //      t.editFavorites(d);
      //    }
      //  };
      // }

      o.bSuppressBookmarkButton = true;
      var m = new sap.ui.core.routing.HashChanger();
      var u = m.getHash();
      // if (u.indexOf("Shell-runStandaloneApp") >= 0) {
      //  o.bSuppressBookmarkButton = true;
      // }
      if (this.extHookChangeHeaderFooterOptions) {
        o = this.extHookChangeHeaderFooterOptions(o);
      }
      this.setHeaderFooterOptions(o);
    }
  }
});