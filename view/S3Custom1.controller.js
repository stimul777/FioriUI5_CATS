jQuery.sap.require("sap.ca.scfld.md.controller.BaseFullscreenController");
jQuery.sap.require("hcm.mytimesheet.utils.DataManager");
jQuery.sap.require("hcm.mytimesheet.utils.ConcurrentEmployment");
jQuery.sap.require("hcm.mytimesheet.model.TimeEntry");
jQuery.sap.require("sap.ca.ui.dialog.factory");
jQuery.sap.require("sap.ca.ui.dialog.Dialog");
jQuery.sap.require("sap.ca.ui.message.message");
jQuery.sap.require("sap.ca.ui.model.format.DateFormat");
jQuery.sap.require("hcm.mytimesheet.utils.InitialConfigHelper");
jQuery.sap.require("sap.ca.ui.model.type.Number");
sap.ui.controller("hcm.mytimesheet.HCM_TSH_MANExtension.view.S3Custom1", {
	//    extHookChangeHeaderFooterOptions: null,
	//    extHookAlterColumns: null,
	//    extHookChangeObjectBeforePost: null,
	//    extHookChangeFormatTime: null,
	// onInit: function () {
	//     sap.ca.scfld.md.controller.BaseFullscreenController.prototype.onInit.call(this);
	//     this.oApplication = this.oApplicationFacade.oApplicationImplementation;
	//     this.oBundle = this.oApplicationFacade.oApplicationImplementation.getResourceBundle();
	//     this.oConfiguration = new hcm.mytimesheet.utils.InitialConfigHelper();
	//     this.oConfiguration.setResourceBundle(this.oBundle);
	//     if (!this.oService) {
	//         this.oService = new hcm.mytimesheet.Service();
	//     }
	//     var s = this;
	//     sap.ui.Device.orientation.attachHandler(function (e) {
	//         if (e.landscape) {
	//             if (sap.ui.Device.system.phone) {
	//                 s.byId("MTS3_SUMMARY_GRID").setDefaultSpan("L6 M6 S12");
	//                 s.byId("MTS3_SUMMARY_GRID").rerender();
	//             }
	//         }
	//     });
	//     this.oRouter.attachRouteMatched(function (e){
	//         if (e.getParameter("name") === "S3") {
	//             if (s.oApplication.pernr) {
	//                 s.initializeView();
	//                 s.updateData();
	//             }
	//         }
	//     });
	// },
	//   	onAfterRendering: function() {
	// 	var s = this;
	// 	if (!this.oApplication.pernr) {
	// 		try {
	// 			var c = sap.ui.core.Component.getOwnerIdFor(this.getView());
	// 			var S = sap.ui.component(c).getComponentData().startupParameters;
	// 			this.oApplication.pernr = S.pernr[0];
	// 			this.initializeView();
	// 			this.initializeTable();
	// 			this.updateData();
	// 		} catch (o) {
	// 			hcm.mytimesheet.utils.ConcurrentEmployment.getCEEnablement(this, function() {
	// 				s.initializeView();
	// 				s.initializeTable();
	// 				s.updateData();
	// 			});
	// 		}
	// 	}
	// },
	initializeView: function() {
		var c = new Date();
		var m;
		var text;
		var s = this.oApplication.getModel("S3exchangeModel");
		var newDate = new Date();
		this.byId("DP2").setDateValue(new Date());
		if (sap.ui.Device.system.phone) {
			this.byId("DP2").setWidth("100%");
		}
		//this.byId("DP2").setValue(new Date());
		if (s) {
			m = this.setInitialInfoModelData(s.getProperty("/currentDate"));
			this.oApplication.setModel(null, "S3exchangeModel");
		} else {
			m = this.setInitialInfoModelData(c);
		}
		this.getView().setModel(m);
		this.byId("WEEKLY_CALENDAR").setModel(m);
		// this.byId("WEEKLY_CALENDAR").onAfterRendering = function(oEvent) {
		// 	var b = this.getModel().oData.selectedDate;
		// 	newDate.setTime(b.getTime() + 12 * 86400000);
		// 	if (b.toLocaleString("ru-ru", {
		// 			month: "long"
		// 		}) !== newDate.toLocaleString("ru-ru", {
		// 			month: "long"
		// 		})) {
		// 		text = b.toLocaleString("ru-ru", {
		// 			month: "long"
		// 		}) + " " + b.getFullYear() + " г. - " + newDate.toLocaleString("ru-ru", {
		// 			month: "long"
		// 		}) + " " + newDate.getFullYear() + " г.";
		// 	} else {
		// 		text = b.toLocaleString("ru-ru", {
		// 			month: "long"
		// 		}) + " " + b.getFullYear() + " г.";
		// 	}
		// 	$(".sapMeCalendarMonthName").text(text);

		// 	// this.setEnableMultiselection(false);
		// 	// jQuery.sap.storage.put("Text",text);
		// };
		// this.initLabel();
		this.calendarModel = m;
		this.setBtnText("deleteBtn", this.oApplicationFacade.getResourceBundle().getText("DELETE"));
		this.setBtnEnabled("deleteBtn", false);
		this.setBtnText("SUBMIT_BTN", this.oApplicationFacade.getResourceBundle().getText("SUBMIT"));
		this.setBtnEnabled("SUBMIT_BTN", false);
		this.setBtnText("copyBtn", this.oApplicationFacade.getResourceBundle().getText("COPY"));
		this.setBtnEnabled("copyBtn", false);
		this.setBtnEnabled("createBtn", false);
		this.checkboxList = [];
		var S = new sap.ui.model.json.JSONModel();
		this.oApplication.setModel(S, "S31modelexch");
	},
	// initLabel: function() {
	// 	var b = this.byId("WEEKLY_CALENDAR").getModel().oData.selectedDate;
	// 	var newDate = new Date();
	// 	var text;
	// 	newDate.setTime(b.getTime() + 12 * 86400000);
	// 	if (b.toLocaleString("ru-ru", {
	// 			month: "long"
	// 		}) !== newDate.toLocaleString("ru-ru", {
	// 			month: "long"
	// 		})) {
	// 		text = b.toLocaleString("ru-ru", {
	// 			month: "long"
	// 		}) + " " + b.getFullYear() + " г. - " + newDate.toLocaleString("ru-ru", {
	// 			month: "long"
	// 		}) + " " + newDate.getFullYear() + " г.";
	// 	} else {
	// 		text = b.toLocaleString("ru-ru", {
	// 			month: "long"
	// 		}) + " " + b.getFullYear() + " г.";
	// 	}
	// 		this.byId("LabelDate").addStyleClass("Classlabel");
	// 	this.byId("LabelDate").setText(text);

	// },
	// ,
	// setInitialInfoModelData: function (c) {
	//     var m = new sap.ui.model.json.JSONModel({ phone: sap.ui.Device.system.phone });
	//     var n = 13;
	//     if (sap.ui.Device.system.phone) {
	//         n = 6;
	//         this.byId("WEEKLY_CALENDAR").setWeeksPerRow(1);
	//         this.byId("MTS3_SECOND_INFO").setVisible(false);
	//         this.byId("MTS3_SUMMARY_GRID").rerender();
	//     }
	//     var f = new Date(c.getFullYear(), c.getMonth(), c.getDate() - this.getActualOffset(this.byId("WEEKLY_CALENDAR").getFirstDayOffset(), c.getDay()));
	//     var l = new Date(f.getFullYear(), f.getMonth(), f.getDate() + n);
	//     this.oApplication.setModel(m, "TSM_WEEKLY");
	//     this.oService.getInitialInfos(this, this.oApplication.pernr, this.getDateStr(c), this.getDateStr(c));
	//     m.setProperty("/showSubmit", false);
	//     m.setProperty("/selected", this.getDateStr(c));
	//     m.setProperty("/selectedDate", c);
	//     m.setProperty("/year", c.getFullYear());
	//     m.setProperty("/start", this.getDateStr(c));
	//     m.setProperty("/weekStart", this.getDateStr(f));
	//     m.setProperty("/weekEnd", this.getDateStr(l));
	//     var I = this.oConfiguration.getInitialInfoModel();
	//     this.releaseAllowed = I.ReleaseDirectly === "TRUE";
	//     m.setProperty("/releaseAllowed", this.releaseAllowed);
	//     this.releaseFuture = I.ReleaseFuture === "TRUE";
	//     m.setProperty("/releaseFuture", this.releaseFuture);
	//     m.setProperty("/favoriteAvailable", I.FavoriteAvailable);
	//     this.FavoriteAvailable = I.FavoriteAvailable;
	//     this.setBtnEnabled("SUBMIT_BTN", false);
	//     this.clockEntry = I.ClockEntry === "TRUE";
	//     m.setProperty("/clockEntry", this.clockEntry);
	//     this.withTargetHours = I.WithTargetHours;
	//     return m;
	// },
	// setWeekOverviews: function (n) {
	//     var m = this.oApplication.getModel("TSM_WEEKLY");
	//     var w = m.getProperty("/days");
	//     var c = new Date(this.byId("WEEKLY_CALENDAR").getCurrentDate());
	//     var f = new Date(c.getFullYear(), c.getMonth(), c.getDate() - this.getActualOffset(this.byId("WEEKLY_CALENDAR").getFirstDayOffset(), c.getDay()));
	//     var l = new Date(f.getFullYear(), f.getMonth(), f.getDate() + (7 * n - 1));
	//     m.setProperty("/weekStart", this.getDateStr(f));
	//     m.setProperty("/weekEnd", this.getDateStr(l));
	//     var a = f.getTime();
	//     var b, s, i, t, r, d;
	//     var e, g, h, j, k, o, p, q, u;
	//     h = [];
	//     h[0] = this.formatDateMMMDD(f);
	//     if (n === 1) {
	//         h[1] = this.formatDateMMMDD(l);
	//         g = this.oBundle.getText("WEEK_DATE_RANGE", [
	//             h[0],
	//             h[1]
	//         ]);
	//         this.byId("MTS3_CURRENT_WEEK_INFO_1").setTitle(g);
	//         j = 0;
	//         k = 0;
	//         o = 0;
	//         t = 0;
	//         q = [];
	//         for (i = 0; i < w.length; i++) {
	//             j += w[i].targetHours;
	//             k += w[i].recordedHours;
	//             o += w[i].approvedHours;
	//             if (w[i].entries.length) {
	//                 q = this.pushUniqueElements(w[i].entries, q);
	//             }
	//         }
	//         t = q.length;
	//         if (j !== 0) {
	//             j = this.formatTime(j.toFixed(2));
	//         }
	//         if (k !== 0) {
	//             k = this.formatTime(k.toFixed(2));
	//         }
	//         if (o !== 0) {
	//             o = this.formatTime(o.toFixed(2));
	//         }
	//         if (k !== 0) {
	//             r = this.oBundle.getText("TOTAL_RECORDED_HOURS", [k]);
	//         } else {
	//             r = this.oBundle.getText("NO_RECORDING");
	//         }
	//         if (t === 1) {
	//             d = this.oBundle.getText("TOTAL_ASSIGNMENT");
	//         } else if (t === 0) {
	//             d = this.oBundle.getText("NO_ASSIGNMENT");
	//         } else {
	//             d = this.oBundle.getText("TOTAL_ASSIGNMENTS", [t]);
	//         }
	//         if (o === 0) {
	//             p = " ";
	//         } else {
	//             p = this.oBundle.getText("TOTAL_APPROVED_HOURS", [o]);
	//         }
	//         if (j !== 0 && this.withTargetHours) {
	//             e = this.oBundle.getText("TOTAL_TARGET_HOURS", [j]);
	//         } else {
	//             e = "  ";
	//         }
	//         this.byId("MTS3_CURRENT_WEEK_INFO_1").setNumber(r);
	//         this.byId("MTS3_TARGET_TIME_1").setText(e);
	//         this.byId("MTS3_TXT_ASSIGNMENTS_1").setText(d);
	//         this.byId("MTS3_TXT_APPROVED_HOURS_1").setText(p);
	//     } else {
	//         b = a + (7 * 1 - 1) * 24 * 60 * 60 * 1000;
	//         b = new Date(b);
	//         s = a + 7 * 24 * 60 * 60 * 1000;
	//         s = new Date(s);
	//         f.setHours(0, 0, 0, 0);
	//         b.setHours(0, 0, 0, 0);
	//         s.setHours(0, 0, 0, 0);
	//         l.setHours(0, 0, 0, 0);
	//         h[1] = this.formatDateMMMDD(b);
	//         g = this.oBundle.getText("WEEK_DATE_RANGE", [
	//             h[0],
	//             h[1]
	//         ]);
	//         this.byId("MTS3_CURRENT_WEEK_INFO_1").setTitle(g);
	//         h[2] = this.formatDateMMMDD(s);
	//         h[3] = this.formatDateMMMDD(l);
	//         g = this.oBundle.getText("WEEK_DATE_RANGE", [
	//             h[2],
	//             h[3]
	//         ]);
	//         this.byId("MTS3_CURRENT_WEEK_INFO_2").setTitle(g);
	//         j = [
	//             0,
	//             0
	//         ];
	//         k = [
	//             0,
	//             0
	//         ];
	//         o = [
	//             0,
	//             0
	//         ];
	//         t = [
	//             0,
	//             0
	//         ];
	//         q = [];
	//         u = [];
	//         for (i = 0; i < w.length; i++) {
	//             if (w[i].date.getTime() < s.getTime()) {
	//                 j[0] += w[i].targetHours;
	//                 k[0] += w[i].recordedHours;
	//                 o[0] += w[i].approvedHours;
	//                 if (w[i].entries.length) {
	//                     q = this.pushUniqueElements(w[i].entries, q);
	//                 }
	//             } else {
	//                 j[1] += w[i].targetHours;
	//                 k[1] += w[i].recordedHours;
	//                 o[1] += w[i].approvedHours;
	//                 if (w[i].entries.length) {
	//                     u = this.pushUniqueElements(w[i].entries, u);
	//                 }
	//             }
	//         }
	//         t[0] = q.length;
	//         t[1] = u.length;
	//         for (i = 0; i < 2; i++) {
	//             if (j[i] !== 0) {
	//                 j[i] = this.formatTime(j[i].toFixed(2));
	//             }
	//             if (k[i] !== 0) {
	//                 k[i] = this.formatTime(k[i].toFixed(2));
	//             }
	//             if (o[i] !== 0) {
	//                 o[i] = this.formatTime(o[i].toFixed(2));
	//             }
	//         }
	//         if (k[0] !== 0) {
	//             if (k[0] === "01:00") {
	//                 r = this.oBundle.getText("TOTAL_RECORDED_HOUR", [k[0]]);
	//             } else {
	//                 r = this.oBundle.getText("TOTAL_RECORDED_HOURS", [k[0]]);
	//             }
	//         } else {
	//             r = this.oBundle.getText("NO_RECORDING");
	//         }
	//         if (t[0] === 1) {
	//             d = this.oBundle.getText("TOTAL_ASSIGNMENT");
	//         } else if (t[0] === 0) {
	//             d = this.oBundle.getText("NO_ASSIGNMENT");
	//         } else {
	//             d = this.oBundle.getText("TOTAL_ASSIGNMENTS", [t[0]]);
	//         }
	//         if (o[0] === 0) {
	//             p = " ";
	//         } else {
	//             p = this.oBundle.getText("TOTAL_APPROVED_HOURS", [o[0]]);
	//         }
	//         if (j[0] !== 0 && this.withTargetHours) {
	//             e = this.oBundle.getText("TOTAL_TARGET_HOURS", [j[0]]);
	//         } else {
	//             e = "  ";
	//         }
	//         this.byId("MTS3_CURRENT_WEEK_INFO_1").setNumber(r);
	//         this.byId("MTS3_TARGET_TIME_1").setText(e);
	//         this.byId("MTS3_TXT_ASSIGNMENTS_1").setText(d);
	//         this.byId("MTS3_TXT_APPROVED_HOURS_1").setText(p);
	//         if (k[1] !== 0) {
	//             if (k[1] === "01:00") {
	//                 r = this.oBundle.getText("TOTAL_RECORDED_HOUR", [k[1]]);
	//             } else {
	//                 r = this.oBundle.getText("TOTAL_RECORDED_HOURS", [k[1]]);
	//             }
	//         } else {
	//             r = this.oBundle.getText("NO_RECORDING");
	//         }
	//         if (t[1] === 1) {
	//             d = this.oBundle.getText("TOTAL_ASSIGNMENT");
	//         } else if (t[1] === 0) {
	//             d = this.oBundle.getText("NO_ASSIGNMENT");
	//         } else {
	//             d = this.oBundle.getText("TOTAL_ASSIGNMENTS", [t[1]]);
	//         }
	//         if (o[1] === 0) {
	//             p = " ";
	//         } else {
	//             p = this.oBundle.getText("TOTAL_APPROVED_HOURS", [o[1]]);
	//         }
	//         if (j[1] !== 0 && this.withTargetHours) {
	//             e = this.oBundle.getText("TOTAL_TARGET_HOURS", [j[1]]);
	//         } else {
	//             e = "  ";
	//         }
	//         this.byId("MTS3_CURRENT_WEEK_INFO_2").setNumber(r);
	//         this.byId("MTS3_TARGET_TIME_2").setText(e);
	//         this.byId("MTS3_TXT_ASSIGNMENTS_2").setText(d);
	//         this.byId("MTS3_TXT_APPROVED_HOURS_2").setText(p);
	//     }
	// },
	//    getActualOffset: function (f, c) {
	//        var a = 7;
	//        if (f > c) {
	//            return c + a - f;
	//        } else {
	//            return c - f;
	//        }
	//    },
	    // pushUniqueElements: function (e, a) {
	    //     if (!e) {
	    //         return null;
	    //     }
	    //     for (var j = 0; j < e.length; j++) {
	    //         var s = e[j].mainName + ":" + e[j].mainCode + ",";
	    //         for (var i = 0; typeof e[j].childNames !== "undefined" && i < e[j].childNames.length; i++) {
	    //             s += e[j].childNames[i] + ":" + e[j].childCodes[i] + ",";
	    //         }
	    //         if (a.length) {
	    //             for (i = 0; i < a.length; i++) {
	    //                 if (s === a[i]) {
	    //                     break;
	    //                 }
	    //             }
	    //             if (i === a.length) {
	    //                 a.push(s);
	    //             }
	    //         } else {
	    //             a.push(s);
	    //         }
	    //     }
	    //     return a;
	    // },
	//    formatDateMMMDD: function (d) {
	//        var m = d.getMonth();
	//        var a = d.getDate();
	//        var b = this.oBundle.getText("MONTH_" + m) + " " + a;
	//        return b;
	//    },
	//    formatTime: function (t) {
	//        var a;
	//        if (this.extHookChangeFormatTime) {
	//            a = extHookChangeFormatTime(t);
	//        } else {
	//            var b = t * 60;
	//            var h = Math.floor(b / 60).toString();
	//            if (h.length === 1) {
	//                h = "0" + h;
	//            }
	//            var m = (b % 60).toFixed(0);
	//            if (m.length === 1) {
	//                m = "0" + m;
	//            }
	//            a = h + ":" + m;
	//        }
	//        return a;
	//    },
	parseDateYYYYMMdd: function(d) {
		// var a = sap.ui.core.format.DateFormat.getDateInstance({ pattern: "YYYY.MM.dd" });
		var a = sap.ui.core.format.DateFormat.getDateInstance({
			pattern: "YYYY.MM.dd"
		});
		return a.parse(d);
	},
	//    formatDateYYYYMMdd: function (d) {
	//        if (typeof d === "string") {
	//            d = new Date(d);
	//        }
	//        var a = sap.ui.core.format.DateFormat.getDateInstance({ pattern: "YYYYMMdd" });
	//        return a.format(d);
	//    },
	//    getPostData: function (d, e) {
	//        var p = {};
	//        p.day = d;
	//        p.entry = e;
	//        return p;
	//    },
	//    openConfirmationPopup: function (s, a) {
	//        var b = this;
	//        var e = [];
	//        for (var i = 0; i < s.additionalInformation.length; i++) {
	//            e.push(new sap.m.Label({
	//                text: s.additionalInformation[i].label,
	//                design: "Bold"
	//            }));
	//            e.push(new sap.m.Text({ text: s.additionalInformation[i].text }));
	//        }
	//        var f = new sap.ui.layout.form.SimpleForm({
	//            minWidth: 1024,
	//            editable: false,
	//            maxContainerCols: 2,
	//            layout: "ResponsiveGridLayout",
	//            labelSpanL: 7,
	//            labelSpanM: 7,
	//            labelSpanS: 7,
	//            emptySpanL: 1,
	//            emptySpanM: 1,
	//            emptySpanS: 1,
	//            columnsL: 1,
	//            columnsM: 1,
	//            columnsS: 1,
	//            content: e
	//        });
	//        var c = new sap.m.Dialog({
	//            title: s.title,
	//            content: [f],
	//            beginButton: new sap.m.Button({
	//                text: s.confirmButtonLabel,
	//                press: function () {
	//                    b.submitTime(a);
	//                    c.close();
	//                }
	//            }),
	//            endButton: new sap.m.Button({
	//                text: this.oBundle.getText("CANCEL"),
	//                press: function () {
	//                    c.close();
	//                }
	//            })
	//        });
	//        c.addStyleClass("sapUiContentPadding sapUiMediumMarginTopBottom");
	//        c.open();
	//    },
	//    releaseEntriesSummary: function (u) {
	//        var t = this.byId("ENTRY_LIST_CONTENTS");
	//        var s = t.getSelectedItems();
	//        var d = 0, a = 0, b = 0, n = 0;
	//        var c, e, f, g, h = new Date();
	//        var m = this.oApplication.getModel("TSM_WEEKLY");
	//        var p = m.getData();
	//        for (var i = 0; i < s.length; i++) {
	//            if (!s[i].data().header) {
	//                c = s[i].data().day;
	//                e = s[i].data().entry;
	//                f = p.days[c].entries[e];
	//                g = s[i].data().dateSelected;
	//                if (!f) {
	//                    continue;
	//                }
	//                if (f.statusId === "MSAVE" && !(!this.releaseFuture && this.checkDate(g, h))) {
	//                    if (u) {
	//                        this.updatePageData(false, c, f, true);
	//                    }
	//                    d += f.hours;
	//                    a += f.minutes;
	//                    b += f.time;
	//                    b = parseFloat(b.toFixed(2));
	//                    n++;
	//                }
	//                if (a > 59) {
	//                    a -= 60;
	//                    d++;
	//                }
	//            }
	//        }
	//        var r = [];
	//        if (this.clockEntry) {
	//            b = d;
	//            b += a / 60;
	//            b = parseFloat(b.toFixed(2));
	//        }
	//        r.push(n);
	//        r.push(d);
	//        r.push(a);
	//        r.push(b);
	//        return r;
	//    },
	//    onSubmit: function () {
	//        var r = [];
	//        var s = null, t;
	//        r = this.releaseEntriesSummary(false);
	//        t = this.formatTime(r[3].toString());
	//        if (!this.clockEntry) {
	//            var a = this.oBundle.getText("TOTAL_DURATION");
	//            s = {
	//                question: this.oBundle.getText("SUBMISSION_CONFIRMATION_SUMMARY"),
	//                additionalInformation: [
	//                    {
	//                        label: this.oBundle.getText("DELETE_CONFIRMATION_SUMMARY_ENTRIES"),
	//                        text: r[0].toString()
	//                    },
	//                    {
	//                        label: a,
	//                        text: t
	//                    }
	//                ],
	//                showNote: false,
	//                title: this.oConfiguration.getText("SUBMISSION_CONFIRMATION"),
	//                confirmButtonLabel: this.oBundle.getText("OK")
	//            };
	//        } else {
	//            s = {
	//                question: this.oBundle.getText("SUBMISSION_CONFIRMATION_SUMMARY"),
	//                additionalInformation: [
	//                    {
	//                        label: this.oBundle.getText("DELETE_CONFIRMATION_SUMMARY_ENTRIES"),
	//                        text: this.formatTime(r[0].toString())
	//                    },
	//                    {
	//                        label: this.oBundle.getText("DELETE_CONFIRMATION_SUMMARY_HOURS"),
	//                        text: this.oBundle.getText("FULL_CONCATENATE_HOURSMIN", [
	//                            r[1],
	//                            r[2]
	//                        ])
	//                    }
	//                ],
	//                showNote: false,
	//                title: this.oConfiguration.getText("SUBMISSION_CONFIRMATION"),
	//                confirmButtonLabel: this.oBundle.getText("OK")
	//            };
	//        }
	//        this.openConfirmationPopup(s, true);
	//    },
	//    submitTime: function (s) {
	//        var a = this;
	//        if (s) {
	//            this.releaseEntriesSummary(true);
	//        }
	//        var m = this.oApplication.getModel("TSM_WEEKLY");
	//        var n = m.getData().days;
	//        this.errors = null;
	//        var u = [];
	//        var d = [];
	//        for (var i = 0; i < n.length; i++) {
	//            for (var j = 0; j < n[i].entries.length; j++) {
	//                if (n[i].entries[j].deleted && (n[i].entries[j].counter !== "" || n[i].entries[j].counter === null)) {
	//                    d.push(this.getPostData(this.getDateTimeStr(n[i].date), n[i].entries[j]));
	//                } else {
	//                    if (this.oldDays[i]) {
	//                        for (var k = 0; k < this.oldDays[i].entries.length; k++) {
	//                            if (n[i].entries[j].counter === this.oldDays[i].entries[k].counter && n[i].entries[j].counter !== "") {
	//                                var b = n[i].entries[j];
	//                                var c = this.oldDays[i].entries[k];
	//                                if (b.time !== c.time || b.notes !== c.notes || b.mainItem !== c.mainItem || b.subItems !== c.subItems || b.hours !== c.hours || b.minutes !== c.minutes || b.startTime !== c.startTime || b.endTime !== c.endTime) {
	//                                    if (!n[i].entries[j].deleted) {
	//                                        u.push(this.getPostData(this.getDateTimeStr(n[i].date), n[i].entries[j]));
	//                                    }
	//                                }
	//                            }
	//                        }
	//                    }
	//                }
	//                if (n[i].entries[j].statusId === "MSAVE" && n[i].entries[j].bToBeReleased) {
	//                    u.push(this.getPostData(this.getDateTimeStr(n[i].date), n[i].entries[j]));
	//                }
	//            }
	//        }
	//        var e = [];
	//        var f = [];
	//        if (u.length !== 0) {
	//            for (i = 0; i < u.length; i++) {
	//                u[i].entry = this.replaceSpecialChar(u[i].entry);
	//                e.push(a.setPostObject(u[i].entry.counter, "U", u[i].day, u[i].entry.time, u[i].entry.mainName, u[i].entry.mainCode, u[i].entry.notes, u[i].entry.startTime, u[i].entry.endTime, u[i].entry.subItems, u[i].entry.childCodes, u[i].entry.childNames));
	//            }
	//        }
	//        if (d.length !== 0) {
	//            for (i = 0; i < d.length; i++) {
	//                d[i].entry = this.replaceSpecialChar(d[i].entry);
	//                f.push(a.setPostObject(d[i].entry.counter, "D", d[i].day, d[i].entry.time, d[i].entry.mainName, d[i].entry.mainCode, d[i].entry.notes, d[i].entry.startTime, d[i].entry.endTime, d[i].entry.subItems, d[i].entry.childCodes, d[i].entry.childNames));
	//            }
	//        }
	//        if (e.length === 0 && f.length === 0) {
	//            sap.m.MessageToast.show(a.oConfiguration.getText("SUBMIT_SUCCESS"));
	//        } else {
	//            a.oService.submitTimeEntry(a, [], e, f, function () {
	//                if (f.length !== 0) {
	//                    sap.m.MessageToast.show(a.oConfiguration.getText("DELETE_SUCCESS"));
	//                } else {
	//                    sap.m.MessageToast.show(a.oConfiguration.getText("SUBMIT_SUCCESS"));
	//                }
	//                if (!a.errors) {
	//                    a.updateData();
	//                }
	//            }, function (h, g) {
	//                a.updateData();
	//            });
	//        }
	//    },
	//    setPostObject: function (C, T, W, a, N, b, n, s, e, c, d, f) {
	//        var t = {
	//            Counter: C,
	//            TimeEntryOperation: T,
	//            TimeEntryDataFields: {
	//                WORKDATE: W,
	//                CATSAMOUNT: "" + a,
	//                BEGUZ: s,
	//                ENDUZ: e
	//            }
	//        };
	//        if (T !== "D") {
	//            t.TimeEntryRelease = "X";
	//        }
	//        if (this.checkFieldName(N) === true) {
	//            t.TimeEntryDataFields[N] = b;
	//        }
	//        if (c && c !== "") {
	//            for (var i = 0; i < f.length; i++) {
	//                if (this.checkFieldName(f[i]) === true) {
	//                    t.TimeEntryDataFields[f[i]] = d[i];
	//                }
	//            }
	//        }
	//        if (n && n !== "") {
	//            t.TimeEntryDataFields.LONGTEXT_DATA = n;
	//            t.TimeEntryDataFields.LONGTEXT = "X";
	//        }
	//        if (this.extHookChangeObjectBeforePost) {
	//            t = this.extHookChangeObjectBeforePost(t);
	//        }
	//        return t;
	//    },
	//    checkDate: function (d, c) {
	//        if (d.getFullYear() >= c.getFullYear() && d.getMonth() >= c.getMonth() && d.getDate() > c.getDate()) {
	//            return true;
	//        }
	//        return false;
	//    },
	//    checkFieldName: function (f) {
	//        var c = f;
	//        if (c.match("DISPTEXT")) {
	//            return false;
	//        }
	//        if (c.match("CPR_OBJTEXT")) {
	//            return false;
	//        }
	//        if (c.match("CPR_TEXT")) {
	//            return false;
	//        }
	//        return true;
	//    },
	//    replaceAllOccurances: function (s) {
	//        if (typeof s === "undefined") {
	//            return null;
	//        }
	//        var S = "/";
	//        var r = "-";
	//        while (s.indexOf(S) > -1) {
	//            s = s.replace(S, r);
	//        }
	//        return s;
	//    },
	//    replaceSpecialChar: function (e) {
	//        if (typeof e.mainName !== "undefined") {
	//            e.mainName = this.replaceAllOccurances(e.mainName);
	//        }
	//        if (typeof e.subItems !== "undefined") {
	//            e.subItems = this.replaceAllOccurances(e.subItems);
	//        }
	//        if (typeof e.childNames !== "undefined") {
	//            for (var i = 0; i < e.childNames.length; i++) {
	//                e.childNames[i] = this.replaceAllOccurances(e.childNames[i]);
	//            }
	//        }
	//        return e;
	//    },
	//    onCopy: function () {
	//        var m, p, v;
	//        var d;
	//        var e;
	//        var t = this.byId("ENTRY_LIST_CONTENTS");
	//        var s = [];
	//        s = t.getSelectedItems();
	//        d = s[0].data().day;
	//        e = s[0].data().entry;
	//        m = this.oApplication.getModel("TSM_WEEKLY");
	//        p = m.getData();
	//        p.days[d].entries[e].counter = "";
	//        v = {
	//            entry: p.days[d].entries[e],
	//            pageData: p,
	//            dayIndex: d,
	//            entryIndex: e
	//        };
	//        this.oApplication.getModel("S31modelexch").setProperty("/editeddata", v);
	//        this.oApplication.getModel("S31modelexch").setProperty("/copySelected", true);
	//        this.oApplication.getModel("S31modelexch").setProperty("/selectedDates", []);
	//        this.oRouter.navTo("S31", { context: m.getProperty("/selectedDate").toDateString() + "offset" + this.byId("WEEKLY_CALENDAR").getFirstDayOffset() }, true);
	//    },
	onItemSelectGotoEdit: function(e) {
		//sap.m.MessageToast.show("Запись утверждена"); 
		var i = e.getSource();
		var a = i.data();
		var m, p, v;
		var d = a.day;
		var b = a.entry;
		m = this.oApplication.getModel("TSM_WEEKLY");
		p = m.getData();
		v = {
			entry: p.days[d].entries[b],
			pageData: p,
			dayIndex: d,
			entryIndex: b
		};
		if (v.entry.statusId === "DONE" || v.entry.mainCode === "9008" || v.entry.mainCode === "9003" || v.entry.mainCode === "9004" || v.entry
			.mainCode === "9002" || v.entry.mainCode === "9005" || v.entry.mainCode === "0820" || v.entry.mainCode === "0200" || v.entry.mainCode ===
			"9009" || v.entry.mainCode === "9006" || v.entry.mainCode === "9007" || v.entry.mainCode === "3080") {
			sap.m.MessageToast.show("Запись нельзя изменить");
		} else if (v.entry.timeUnit === "DOC") {
			sap.m.MessageToast.show("Задача документирования");
		} else {
			this.oApplication.getModel("S31modelexch").setProperty("/editeddata", v);
			this.oApplication.getModel("S31modelexch").setProperty("/editentryview", true);
			this.oApplication.getModel("S31modelexch").setProperty("/selectedDates", [a.dateSelected]);
			this.oRouter.navTo("S31", {
				context: m.getProperty("/selectedDate").toDateString() + "offset" + this.byId("WEEKLY_CALENDAR").getFirstDayOffset()
			}, true);
		}
	},

	onItemSelect: function(e) {
		this.selectDateOnAllCheckBoxSelection(e.getSource());
		if (e.getSource().getSelectedItems().length === 0) {
			this.setBtnText("deleteBtn", this.oApplicationFacade.getResourceBundle().getText("DELETE"));
			this.setBtnEnabled("deleteBtn", false);
			this.setBtnText("SUBMIT_BTN", this.oApplicationFacade.getResourceBundle().getText("SUBMIT"));
			this.setBtnEnabled("SUBMIT_BTN", false);
			this.setBtnEnabled("copyBtn", false);
		} else {
			var s = e.getSource().getSelectedItems();
			var a;
			for (var i = 0; i < s.length; i++) {
				a = s[i].data().header;
				if (!a) {
					this.findCount(e);
				}
			}
		}
	},
	findCount: function(e) {
		var s = e.getSource().getSelectedItems();
		var a, b, c = new Date(),
			d, f, g;
		var h = 0,
			j = 0;
		var m = this.oApplication.getModel("TSM_WEEKLY");
		var p = m.getData();
		for (var i = 0; i < s.length; i++) {
			a = s[i].data().header;
			b = s[i].data().dateSelected;
			if (!a) {
				h++;
				d = s[i].data().day;
				f = s[i].data().entry;
				g = p.days[d].entries[f];
				if (g.statusId === "MSAVE" && !(!this.releaseFuture && this.checkDate(b, c))) {
					j++;
				}
			}
		}
		if (j === 0) {
			this.setBtnText("SUBMIT_BTN", this.oApplicationFacade.getResourceBundle().getText("SUBMIT"));
			this.setBtnEnabled("SUBMIT_BTN", false);
		} else {
			this.setBtnText("SUBMIT_BTN", this.oApplicationFacade.getResourceBundle().getText("SUBMIT") + "(" + j + ")");
			this.setBtnEnabled("SUBMIT_BTN", true);
		}
		if (h === 0) {
			this.setBtnText("deleteBtn", this.oApplicationFacade.getResourceBundle().getText("DELETE"));
			this.setBtnEnabled("deleteBtn", false);
		} else {
			this.setBtnText("deleteBtn", this.oApplicationFacade.getResourceBundle().getText("DELETE") + "(" + h + ")");
			this.setBtnEnabled("deleteBtn", true);
		}
		if (h === 1 && e.getSource().getSelectedItems().length === 1) {
			this.setBtnEnabled("copyBtn", true);
		} else {
			this.setBtnEnabled("copyBtn", false);
		}
	},
	onSelect: function(e) {
		var s = new Date(e.getParameter("date"));
		// var s = new Date( this.byId("DP2").getValue() );
		var d = e.getParameter("didSelect");
		this.selectDate(s, d);
	},
	//    scrollTo: function (i) {
	//        var l = this.byId("ENTRY_LIST_CONTENTS");
	//        var a = l.getItems()[i];
	//        var s = a.$().get(0).offsetTop;
	//        this.byId("scroller").scrollTo(0, s, 500);
	//    },
	//    compareDays: function (a, b) {
	//        if (parseInt(a.dateStr, 10) > parseInt(b.dateStr, 10)) {
	//            return 1;
	//        } else {
	//            return -1;
	//        }
	//    },
	selectDate: function(s, a) {
		var d = s.toDateString();
		var m = this.oApplication.getModel("TSM_WEEKLY");
		var b = 0;
		// var prop = this.byId("createBtn");
		if (this.byId("WEEKLY_CALENDAR").getSelectedDates().length == 0) {
			this.setBtnEnabled("createBtn", false);
		} else {
			this.setBtnEnabled("createBtn", true);
		}
		m.setProperty("/selected", d);
		if (this.entryListContents) {
			var c = this.entryListContents.getItems();
			var e;
			for (var i = 0; i < c.length; i++) {
				e = c[i].data();
				if (e.dateSelected.toDateString() === d && !e.header) {
					c[i].setSelected(a);
					b = i;
				}
			}
			var f = this.byId("ENTRY_LIST_CONTENTS").getSelectedItems();
			if (f.length === 0) {
				this.setBtnText("deleteBtn", this.oApplicationFacade.getResourceBundle().getText("DELETE"));
				this.setBtnEnabled("deleteBtn", false);
			} else {
				this.setBtnText("deleteBtn", this.oApplicationFacade.getResourceBundle().getText("DELETE") + "(" + f.length + ")");
				this.setBtnEnabled("deleteBtn", true);
			}
			var r = this.releaseEntriesSummary(false);
			if (r[0] === 0) {
				this.setBtnText("SUBMIT_BTN", this.oApplicationFacade.getResourceBundle().getText("SUBMIT"));
				this.setBtnEnabled("SUBMIT_BTN", false);
			} else {
				this.setBtnText("SUBMIT_BTN", this.oApplicationFacade.getResourceBundle().getText("SUBMIT") + "(" + r[0] + ")");
				this.setBtnEnabled("SUBMIT_BTN", true);
			}
			if (f.length === 1) {
				this.setBtnEnabled("copyBtn", true);
			} else {
				this.setBtnEnabled("copyBtn", false);
			}
			if (a && b !== 0) {
				this.scrollTo(b);
			}
		}
	},
	// updateData: function() {
	// 	var n;
	// 	var m = this.oApplication.getModel("TSM_WEEKLY");
	// 	m.setProperty("/red", "");
	// 	m.setProperty("/green", "");
	// 	m.setProperty("/grey", "");
	// 	m.setProperty("/yellow", "");
	// 	m.setProperty("/rejected", "");
	// 	var w = this.byId("WEEKLY_CALENDAR");
	// 	w.removeTypesOfAllDates();
	// 	w.unselectAllDates();
	// 	m.setProperty("/activities", null);
	// 	m.setProperty("/workingDayList", null);
	// 	var s = this;
	// 	var I = this.oConfiguration.getInitialInfoModel();
	// 	if (sap.ui.Device.system.phone) {
	// 		n = 1;
	// 	} else {
	// 		n = 2;
	// 	}
	// 	var c = new Date(this.byId("WEEKLY_CALENDAR").getCurrentDate());
	// 	var f = new Date(c.getFullYear(), c.getMonth(), c.getDate() - this.getActualOffset(new Date(I.StartDate.substring(0, 4) + "/" + I.StartDate
	// 		.substring(4, 6) + "/" + I.StartDate.substring(6, 8)).getDay(), c.getDay()));
	// 	var l = new Date(f.getFullYear(), f.getMonth(), f.getDate() + (7 * n - 1));
	// 	this.oService.getWorkDays(this, this.oApplication.pernr, this.getDateStr(f), this.getDateStr(l), function(d) {
	// 		s.getTimeSheetCalendar(d);
	// 		if (m.getData().activities) {
	// 			s.setWeeklyData(m.getData().activities);
	// 		}
	// 	});
	// 	this.oService.getTimeDataList(this, this.oApplication.pernr, this.getDateStr(f), this.getDateStr(l), function(d) {
	// 		m.setProperty("/activities", d);
	// 		if (m.getData().workingDayList) {
	// 			s.setWeeklyData(d);
	// 		}
	// 	});
	// 	this.setBtnText("deleteBtn", s.oApplicationFacade.getResourceBundle().getText("DELETE"));
	// 	this.setBtnEnabled("deleteBtn", false);
	// 	this.setBtnText("SUBMIT_BTN", s.oApplicationFacade.getResourceBundle().getText("SUBMIT"));
	// 	this.setBtnEnabled("SUBMIT_BTN", false);
	// 	this.setBtnEnabled("copyBtn", false);
	// 	this.setBtnEnabled("createBtn", false);
	// },

	handleChange: function() {

		var s = this.byId("DP2").getValue();
		var date = this.byId("DP2").getDateValue();
		var object = this.byId("WEEKLY_CALENDAR");
		object.setCurrentDate(date);
		object.fireChangeCurrentDate(object, s);

		//event.fireEvent("TapOnDate");
		//this.selectDate(s, null);

	},
	//    getTimeSheetCalendar: function (d) {
	//        var m = this.oApplication.getModel("TSM_WEEKLY");
	//        var n = new Date(), g = [], y = [], a = [], b = [], r = [];
	//        var c = m.getData().selected, f = null, e = [], h = [];
	//        var j = false;
	//        var w = [];
	//        var k = -1;
	//        if (d.length > 0) {
	//            var l = d[0].FirstDayOfWeek;
	//            if (l === null) {
	//                k = -1;
	//            } else if (l === "MONDAY") {
	//                k = 1;
	//            } else if (l === "TUESDAY") {
	//                k = 2;
	//            } else if (l === "WEDNESDAY") {
	//                k = 3;
	//            } else if (l === "THURSDAY") {
	//                k = 4;
	//            } else if (l === "FRIDAY") {
	//                k = 5;
	//            } else if (l === "SATURDAY") {
	//                k = 6;
	//            } else if (l === "SUNDAY") {
	//                k = 0;
	//            }
	//        }
	//        for (var i = 0; i < d.length; i++) {
	//            var o = d[i].Date;
	//            var p = d[i].WorkingDay === "TRUE";
	//            var q = new Date(parseInt(o.substring(0, 4), 10), parseInt(o.substring(4, 6), 10) - 1, parseInt(o.substring(6, 8), 10));
	//            w.push({
	//                date: o,
	//                workingDay: p,
	//                targetHours: parseFloat(d[i].TargetHours.trim()),
	//                startTime: d[i].StartTime,
	//                endTime: d[i].EndTime
	//            });
	//            var s = d[i].Status;
	//            if (!p) {
	//                g.push(q);
	//            } else {
	//                if (!f) {
	//                    f = o;
	//                }
	//                if (!j && c === o) {
	//                    j = true;
	//                }
	//                if (s === "YACTION") {
	//                    h.push(d[i].Date);
	//                    if (n.getTime() > q.getTime()) {
	//                        y.push(q);
	//                    } else {
	//                        e.push(q);
	//                    }
	//                } else if (s === "MACTION") {
	//                    b.push(q);
	//                } else if (s === "REJECTED") {
	//                    r.push(q);
	//                } else if (s === "DONE") {
	//                    a.push(q);
	//                }
	//            }
	//        }
	//        m.setProperty("/workingDayList", w);
	//        var t = this.byId("WEEKLY_CALENDAR");
	//        if (k > 0) {
	//            t.setFirstDayOffset(k);
	//        }
	//        t.toggleDatesType(e, sap.me.CalendarEventType.Type10, true);
	//        t.toggleDatesType(b, sap.me.CalendarEventType.Type04, true);
	//        t.toggleDatesType(a, sap.me.CalendarEventType.Type01, true);
	//        t.toggleDatesType(g, sap.me.CalendarEventType.Type00, true);
	//        t.toggleDatesType(y, sap.me.CalendarEventType.Type07, true);
	//        t.toggleDatesType(r, sap.me.CalendarEventType.Type06, true);
	//        var L = {
	//            "yellow": b,
	//            "green": a,
	//            "grey": g,
	//            "red": y,
	//            "rejected": r,
	//            "FutureWorkingDays": e
	//        };
	//        var u = this.byId("LEGEND");
	//        if (a.length > 0) {
	//            u.setLegendForType01(this.oBundle.getText("FILLED_DAY"));
	//        } else if (u.getLegendForType01()) {
	//            u.setLegendForType01(null);
	//        }
	//        if (b.length > 0) {
	//            u.setLegendForType04(this.oBundle.getText("FILLED_MANAGER"));
	//        } else if (u.getLegendForType04()) {
	//            u.setLegendForType04(null);
	//        }
	//        if (y.length > 0) {
	//            u.setLegendForType07(this.oBundle.getText("MISSING_DAY"));
	//        } else if (u.getLegendForType07()) {
	//            u.setLegendForType07(null);
	//        }
	//        if (r.length > 0) {
	//            u.setLegendForType06(this.oBundle.getText("REJECTED"));
	//        } else if (u.getLegendForType06()) {
	//            u.setLegendForType06(null);
	//        }
	//        if (e.length > 0) {
	//            u.setLegendForNormal(this.oBundle.getText("WORKING_DAY"));
	//        } else if (u.getLegendForNormal()) {
	//            u.setLegendForNormal(null);
	//        }
	//        if (g.length > 0) {
	//            u.setLegendForType00(this.oBundle.getText("NON_WORKING_DAY"));
	//        } else if (u.getLegendForType00()) {
	//            u.setLegendForType00(null);
	//        }
	//        u.setLegendForToday(this.oBundle.getText("CURRENT_DAY"));
	//        u.setLegendForSelected(this.oBundle.getText("SELECTED_DAY"));
	//        u.setLegendForSelected00(this.oBundle.getText("SELECTED_NW_DAY"));
	//        m = this.oApplication.getModel("TSM_WEEKLY");
	//        m.setProperty("/legendforS31", L);
	//    },
	//    onAddNewEntry: function () {
	//        var s = this.byId("WEEKLY_CALENDAR").getSelectedDates();
	//        var d;
	//        for (var i = 0; i < s.length; i++) {
	//            s[i] = new Date(s[i]);
	//        }
	//        d = this.byId("WEEKLY_CALENDAR").getCurrentDate();
	//        this.oApplication.getModel("S31modelexch").setProperty("/selectedDates", s);
	//        this.oApplication.getModel("S31modelexch").setProperty("/editentryview", false);
	//        this.oRouter.navTo("S31", { context: d + "offset" + this.byId("WEEKLY_CALENDAR").getFirstDayOffset() }, true);
	//    },
	onCalendarWeekChange: function(e) {
		var c = new Date(e.getParameter("currentDate"));
		if (isNaN(c) === true) {
			c = this.byId("DP2").getDateValue();
		} else {
			this.byId("DP2").setDateValue(c);
		}
		var m = this.oApplication.getModel("TSM_WEEKLY");
		var s = e.getSource().getSelectedDates();
		var n = 13;
		if (sap.ui.Device.system.phone) {
			n = 6;
		}
		var f = new Date(c.getFullYear(), c.getMonth(), c.getDate() - this.getActualOffset(this.byId("WEEKLY_CALENDAR").getFirstDayOffset(), c
			.getDay()));
		var l = new Date(f.getFullYear(), f.getMonth(), f.getDate() + n);
		m.setProperty("/showSubmit", false);
		m.setProperty("/selected", this.getDateStr(c));
		m.setProperty("/selectedDate", c);
		m.setProperty("/year", c.getFullYear());
		m.setProperty("/weekStart", this.getDateStr(f));
		m.setProperty("/weekEnd", this.getDateStr(l));
		this.setBtnEnabled("SUBMIT_BTN", false);
		this.lastSelected = m.getData().selected;
		this.updateData();
		this.calendarModel = m;
		var d, a = [];
		for (var i = 0; i < s.length; i++) {
			d = new Date(s[i]);
			if (d.getTime() >= f && d.getTime() <= l.getTime()) {
				a.push(d);
			}
		}
		if (a.length > 0) {
			e.getSource().toggleDatesSelection(a, true);
		}
		this.setBtnText("deleteBtn", this.oApplicationFacade.getResourceBundle().getText("DELETE"));
		this.setBtnEnabled("deleteBtn", false);
		this.setBtnText("SUBMIT_BTN", this.oApplicationFacade.getResourceBundle().getText("SUBMIT"));
		this.setBtnEnabled("SUBMIT_BTN", false);
		this.setBtnEnabled("copyBtn", false);
		this.setBtnEnabled("createBtn", false);
		// this.initLabel();
		// this.byId("WEEKLY_CALENDAR").rerender();
		// var b = $( ".myClass" );
	},
	getDateStr: function(d) {
		return "" + d.getFullYear() + ("" + (d.getMonth() + 101)).substring(1) + ("" + (d.getDate() + 100)).substring(1);
	},
	//    getDateTimeStr: function (d) {
	//        return "" + d.getFullYear() + "-" + ("" + (d.getMonth() + 101)).substring(1) + "-" + ("" + (d.getDate() + 100)).substring(1) + "T00:00:00";
	//    },
	//    setWeeklyData: function (d) {
	//        var m = this.oApplication.getModel("TSM_WEEKLY");
	//        var p = { days: [] };
	//        var l = null, D = null, a;
	//        var r, b, i, j, h, c, e = null;
	//        var E = {};
	//        var w = m.getData().workingDayList;
	//        for (i = 0; i < d.length; i++) {
	//            if (d[i].FieldName === "WORKDATE") {
	//                if (e === null || d[i].FieldValue !== e) {
	//                    e = d[i].FieldValue;
	//                    a = new Date(parseInt(d[i].FieldValue.substring(0, 4), 10), parseInt(d[i].FieldValue.substring(4, 6), 10) - 1, parseInt(d[i].FieldValue.substring(6, 8), 10));
	//                    D = {
	//                        date: a,
	//                        dateStr: d[i].FieldValue,
	//                        dateFormatted: this.convertDateFormat(a),
	//                        targetHours: this.getTargetHours(d[i].FieldValue, w),
	//                        entries: [],
	//                        workingDay: this.getWorkingDay(d[i].FieldValue, w)
	//                    };
	//                    p.days.push(D);
	//                    l = null;
	//                }
	//            }
	//            if (l === null || d[i].RecordNumber !== l) {
	//                l = d[i].RecordNumber;
	//                E = new hcm.mytimesheet.model.TimeEntry(0, "", d[i].Suggested === "TRUE", true);
	//                D.entries.push(E);
	//            }
	//            if (d[i].FieldName === "MEINH") {
	//                E.timeUnit = d[i].FieldValue;
	//            }
	//            E.setData(d[i]);
	//        }
	//        p.days.sort(this.compareDays);
	//        for (i = 0; i < w.length; i++) {
	//            if (w[i].workingDay) {
	//                h = false;
	//                c = p.days.length;
	//                for (j = 0; j < p.days.length; j++) {
	//                    if (w[i].date === p.days[j].dateStr) {
	//                        h = true;
	//                        break;
	//                    }
	//                    if (w[i].date < p.days[j].dateStr) {
	//                        c = j;
	//                        break;
	//                    }
	//                }
	//                if (!h) {
	//                    a = new Date(parseInt(w[i].date.substring(0, 4), 10), parseInt(w[i].date.substring(4, 6), 10) - 1, parseInt(w[i].date.substring(6, 8), 10));
	//                    D = {
	//                        date: a,
	//                        dateStr: w[i].date,
	//                        dateFormatted: this.convertDateFormat(a),
	//                        targetHours: this.getTargetHours(w[i].date, w),
	//                        workingDay: w[i],
	//                        entries: []
	//                    };
	//                    p.days.splice(c, 0, D);
	//                }
	//            }
	//        }
	//        for (i = 0; i < p.days.length; i++) {
	//            r = 0;
	//            b = 0;
	//            for (j = 0; j < p.days[i].entries.length; j++) {
	//                r += p.days[i].entries[j].time;
	//                if (p.days[i].entries[j].statusId === "DONE") {
	//                    b += p.days[i].entries[j].time;
	//                }
	//            }
	//            p.days[i].recordedHours = r;
	//            p.days[i].approvedHours = b;
	//        }
	//        this.oldDays = jQuery.extend(true, {}, p.days);
	//        m.setProperty("/days", p.days);
	//        this.loadListWithoPageData(p);
	//    },
	//    TimeEntry: function (t, c, e) {
	//        var x = {};
	//        x.time = t;
	//        x.hours = Math.floor(t);
	//        x.minutes = Math.round((t - Math.floor(t)) * 60);
	//        x.newEntry = !e;
	//        x.mainItem = null;
	//        x.subItems = c;
	//        x.notes = null;
	//        x.startTime = "";
	//        x.endTime = "";
	//        x.counter = "";
	//        x.hasNotes = false;
	//        x.showTime = e;
	//        x.showError = false;
	//        x.error = "";
	//        x.status = "";
	//        x.statusId = "";
	//        return x;
	//    },
	//    getWorkingDay: function (d, w) {
	//        if (w) {
	//            for (var i = 0; i < w.length; i++) {
	//                if (w[i].date === d) {
	//                    return w[i];
	//                }
	//            }
	//        }
	//        return null;
	//    },
	//    getTargetHours: function (d, w) {
	//        var a = this.getWorkingDay(d, w);
	//        if (a) {
	//            return a.targetHours;
	//        }
	//        return 0;
	//    },
	//    convertDateFormat: function (d) {
	//        return sap.ui.core.format.DateFormat.getDateInstance({ style: "medium" }).format(d);
	//    },
	// YYYYMMDDtoDate: function (a) {
	//     var y = parseInt(a.substr(0, 4), 10);
	//     var m = parseInt(a.substr(4, 2), 10) - 1;
	//     var d = parseInt(a.substr(6, 2), 10);
	//     return new Date(y, m, d, 0, 0, 0, 0);
	// },
	//    loadListWithoModel: function () {
	//        var m = this.oApplication.getModel("TSM_WEEKLY");
	//        this.loadListWithoPageData(m.getData());
	//    },
	//    loadListWithoPageData: function (p) {
	//        if (p.days === null) {
	//            return;
	//        }
	//        var m = this.oApplication.getModel("TSM_WEEKLY");
	//        var s = this.convertDateFormat(this.YYYYMMDDtoDate(m.getData().selected));
	//        for (var i = 0; i < p.days.length; i++) {
	//            var d = p.days[i];
	//            d.selected = s === d.dateFormatted;
	//        }
	//        this.loadList(p.days);
	//    },
	//    initializeTable: function () {
	//        this.entryListContents = this.byId("ENTRY_LIST_CONTENTS");
	//        var h = new sap.m.Column({
	//            hAlign: "Left",
	//            header: new sap.m.Label({
	//                design: "Bold",
	//                text: "{i18n>COST_ASSIGNMENT}"
	//            })
	//        });
	//        this.entryListContents.addColumn(h);
	//        if (this.clockEntry) {
	//            h = new sap.m.Column({
	//                hAlign: "Center",
	//                demandPopin: true,
	//                minScreenWidth: "Tablet",
	//                popinDisplay: "Inline",
	//                header: new sap.m.Label({
	//                    design: "Bold",
	//                    text: "{i18n>START_TIME}"
	//                })
	//            });
	//            this.entryListContents.addColumn(h);
	//            h = new sap.m.Column({
	//                hAlign: "Center",
	//                demandPopin: true,
	//                minScreenWidth: "Tablet",
	//                popinDisplay: "Inline",
	//                header: new sap.m.Label({
	//                    design: "Bold",
	//                    text: "{i18n>END_TIME}"
	//                })
	//            });
	//            this.entryListContents.addColumn(h);
	//        }
	//        h = new sap.m.Column({
	//            hAlign: "Center",
	//            demandPopin: true,
	//            minScreenWidth: "Tablet",
	//            popinDisplay: "Inline",
	//            header: new sap.m.Label({
	//                design: "Bold",
	//                text: "{i18n>DURATION}"
	//            })
	//        });
	//        this.entryListContents.addColumn(h);
	//        h = new sap.m.Column({
	//            hAlign: "Right",
	//            demandPopin: true,
	//            minScreenWidth: "Tablet",
	//            popinDisplay: "Inline",
	//            header: new sap.m.Label({
	//                design: "Bold",
	//                text: "{i18n>STATUS}"
	//            })
	//        });
	//        if (this.extHookAlterColumns) {
	//            h = this.extHookAlterColumns(h);
	//        }
	//        this.entryListContents.addColumn(h);
	//    },
	// ,handleChange: function
	loadList: function() {
		var m = this.oApplication.getModel("TSM_WEEKLY");
		var d = m.getData().days;
		var s = this,
			r, a, t, b;
		this.entryListContents.removeAllItems();
		for (var i = 0; i < d.length; i++) {
			if (d[i].entries.length) {
				a = d[i].date;
				a = this.formatDateMMMDD(a);
				var w = new sap.m.GroupHeaderListItem({
					title: a,
					upperCase: false
				});
				w.addCustomData(new sap.ui.core.CustomData({
					key: "dateSelected",
					value: d[i].date
				}));
				w.addCustomData(new sap.ui.core.CustomData({
					key: "header",
					value: true
				}));
				var o = new sap.m.ObjectIdentifier({
					title: a
				});
				t = this.formatTime(d[i].targetHours.toFixed(2));
				b = this.formatTime(d[i].recordedHours.toFixed(2));
				if (parseFloat(t, 10) !== 0 && this.withTargetHours) {
					if (parseFloat(b, 10) === 1) {
						r = this.oBundle.getText("WEEKLY_RECORDED_HOUR", [
							b,
							t
						]);
					} else {
						r = this.oBundle.getText("WEEKLY_RECORDED_HOURS", [
							b,
							t
						]);
					}
				} else {
					r = this.oBundle.getText("TOTAL_RECORDED_HOURS", [b]);
				}
				w.setCount(r);
				this.entryListContents.addItem(w);
				for (var j = 0; j < d[i].entries.length; j++) {
					var l = d[i].entries[j];
					var S = new sap.m.ColumnListItem({
						type: "Inactive",
						// unread: true
						tap: function(E) {
							s.onItemSelectGotoEdit(E);
						}
					});
					S.addCustomData(new sap.ui.core.CustomData({
						key: "day",
						value: i
					}));
					S.addCustomData(new sap.ui.core.CustomData({
						key: "entry",
						value: j
					}));
					S.addCustomData(new sap.ui.core.CustomData({
						key: "dateformated",
						value: d[i].dateFormatted
					}));
					S.addCustomData(new sap.ui.core.CustomData({
						key: "dateSelected",
						value: d[i].date
					}));
					S.addCustomData(new sap.ui.core.CustomData({
						key: "selectedDate",
						value: d[i].dateStr
					}));
					S.addCustomData(new sap.ui.core.CustomData({
						key: "header",
						value: false
					}));
					o = new sap.m.ObjectIdentifier({
						title: l.mainItem,
						text: l.subItems,
						badgeNotes: l.hasNotes
					});
					if (l.showError || l.rejectionReason) {
						var c = new sap.ui.layout.VerticalLayout();
						c.addContent(o);
						if (l.showError) {
							c.addContent(new sap.m.ObjectStatus({
								text: l.error,
								state: sap.ui.core.ValueState.Error
							}));
						} else {
							c.addContent(new sap.m.ObjectStatus({
								text: l.rejectionReason,
								state: sap.ui.core.ValueState.Error
							}));
						}
						S.addCell(c);
					} else {
						S.addCell(o);
					}
					var e = sap.ca.ui.model.format.DateFormat.getTimeInstance({
						pattern: "HHmmss"
					});
					var f = sap.ca.ui.model.format.DateFormat.getTimeInstance({
						style: "medium"
					});
					var g;
					var h;
					var k = this.formatTime(l.time.toFixed(2));
					if (this.clockEntry) {
						if (l.startTime !== l.endTime) {
							g = e.parse(l.startTime);
							S.addCell(new sap.m.Label({
								text: f.format(g),
								design: "Bold"
							}));
							h = e.parse(l.endTime);
							S.addCell(new sap.m.Label({
								text: f.format(h),
								design: "Bold"
							}));
							S.addCell(new sap.m.Label({
								text: k,
								design: "Bold"
							}));
						} else {
							S.addCell(new sap.m.Label({
								text: "-",
								design: "Bold"
							}));
							S.addCell(new sap.m.Label({
								text: "-",
								design: "Bold"
							}));
							S.addCell(new sap.m.Label({
								text: k,
								design: "Bold"
							}));
						}
					} else {
						S.addCell(new sap.m.Label({
							text: k,
							design: "Bold"
						}));
					}
					var n;
					if (l.statusId === "REJECTED") {
						n = sap.ui.core.ValueState.Error;
					} else if (l.statusId === "MSAVE") {
						n = sap.ui.core.ValueState.NONE;
					} else {
						n = sap.ui.core.ValueState.Success;
					}
					S.setType("Navigation");
					S.addCell(new sap.m.ObjectStatus({
						text: l.status,
						state: n
					}));
					this.entryListContents.addItem(S);
				}
			}
		}
		if (sap.ui.Device.system.phone) {
			this.setWeekOverviews(1);
		} else {
			this.setWeekOverviews(2);
		}
	},
	onRender: function(e) {
		$(".sapMeCalendarMonthName").text("Hello выа");
	},
	onDelete: function() {
		var t = this.byId("ENTRY_LIST_CONTENTS");
		var s = [];
		s = t.getSelectedItems();
		var d = 0;
		var a = 0;
		var b = 0;
		var n;
		var c;
		var e;
		var f;
		var status;
		var m = this.oApplication.getModel("TSM_WEEKLY");
		var p = m.getData();
		var S = null;
		n = s.length;
		for (var i = 0; i < s.length; i++) {
			c = s[i].data().day;
			e = s[i].data().entry;
			f = p.days[c].entries[e];
			status = p.days[c].entries[e].statusId;
			this.updatePageData(true, c, f, false);
			if (f.subItems !== this.oApplicationFacade.getResourceBundle().getText("ADD_NEW")) {
				d += f.hours;
				a += f.minutes;
				b += f.time;
				b = parseFloat(b.toFixed(2));
			} else {
				n--;
			}
			if (a > 59) {
				a -= 60;
				d++;
			}
		}
		if (status === "DONE") {
			sap.m.MessageToast.show("Запись утверждена");
			return;
		}
		if (this.clockEntry) {
			S = {
				question: this.oBundle.getText("DELETE_CONFIRMATION_SUMMARY"),
				additionalInformation: [{
					label: this.oBundle.getText("DELETE_CONFIRMATION_SUMMARY_ENTRIES"),
					text: n.toString()
				}, {
					label: this.oBundle.getText("DELETE_CONFIRMATION_SUMMARY_HOURS"),
					text: this.oBundle.getText("FULL_CONCATENATE_HOURSMIN", [
						d,
						a
					])
				}],
				showNote: false,
				title: this.oConfiguration.getText("DELETE_CONFIRMATION"),
				confirmButtonLabel: this.oBundle.getText("OK")
			};
		} else {
			var g = this.oBundle.getText("TOTAL_DURATION");
			S = {
				question: this.oBundle.getText("DELETE_CONFIRMATION_SUMMARY"),
				additionalInformation: [{
					label: this.oBundle.getText("DELETE_CONFIRMATION_SUMMARY_ENTRIES"),
					text: n.toString()
				}, {
					label: g,
					text: this.formatTime(b.toString())
				}],
				showNote: false,
				title: this.oConfiguration.getText("DELETE_CONFIRMATION"),
				confirmButtonLabel: this.oBundle.getText("OK")
			};
		}
		this.openConfirmationPopup(S, false);
	},
	//    updatePageData: function (d, a, e, t) {
	//        if (!e) {
	//            return;
	//        }
	//        this.entry = e;
	//        this.dayIndex = a;
	//        if (d) {
	//            this.entry.deleted = true;
	//        }
	//        if (t) {
	//            this.entry.bToBeReleased = true;
	//        }
	//        this.entry.newEntry = false;
	//        this.entry.showTime = true;
	//        if (!this.clockEntry) {
	//            this.entry.hours = parseInt(this.entry.hours, 10);
	//            this.entry.minutes = parseInt(this.entry.minutes, 10);
	//        } else {
	//            this.entry.startTime = e.startTime;
	//            this.entry.endTime = e.endTime;
	//            this.entry.hours = e.hours;
	//            this.entry.minutes = e.minutes;
	//            this.entry.time = e.time;
	//        }
	//        this.entry.hasNotes = this.entry.notes && this.entry.notes.length > 0 ? true : false;
	//    },
	//    selectDateOnAllCheckBoxSelection: function (t) {
	//        var l = t.getItems();
	//        var s = t.getSelectedItems();
	//        var a = [];
	//        var u = [];
	//        var j = 0;
	//        for (var i = 0; i < l.length; i++) {
	//            if (s[j] && l[i].data().dateSelected === s[j].data().dateSelected) {
	//                a.push(s[j].data().dateSelected);
	//                if (j < s.length) {
	//                    j++;
	//                }
	//            } else {
	//                u.push(l[i].data().dateSelected);
	//            }
	//        }
	//        this.byId("WEEKLY_CALENDAR").toggleDatesSelection(u, false);
	//        this.byId("WEEKLY_CALENDAR").toggleDatesSelection(a, true);
	//        a = [];
	//        u = [];
	//    },

	getHeaderFooterOptions: function() {
		var t = this;
		var o = {
			sI18NFullscreenTitle: "CATS",
			// 	            oEditBtn: {
			// 	                id: "QUICK_FILL_BTN",
			// 	                sI18nBtnTxt: "CREATE",
			// 	                // bDisabled: true
			// //	                onBtnPressed: function (e) {
			// //	                    t.onAddNewEntry(e);
			// //	                }
			// 	            },
			buttonList: [{
					sId: "createBtn",
					sI18nBtnTxt: "CREATE",
					onBtnPressed: function(e) {
						t.onAddNewEntry(e);
					}
				},
				// 	                {
				// 	                    sId: "copyBtn",
				// 	                    sI18nBtnTxt: "CLopy"
				// ///	                    onBtnPressed: function (e) {
				// //	                        t.onCopy(e);
				// //	                    }
				// 	                },
				{
					sId: "deleteBtn",
					sI18nBtnTxt: "DELETE",
					onBtnPressed: function(e) {
						t.onDelete(e);
					}
				},
				// 	                {
				// 	                    sId: "SUBMIT_BTN",
				// 	                    sI18nBtnTxt: "SUBMIT"
				// //	                    onBtnPressed: function (e) {
				// //	                        t.onSubmit(e);
				// //	                    }
				// 	                }
			]
		};
		o.bSuppressBookmarkButton = true;
		var m = new sap.ui.core.routing.HashChanger();
		var u = m.getHash();
		if (u.indexOf("Shell-runStandaloneApp") >= 0) {
			// o.bSuppressBookmarkButton = true;
		}
		if (this.extHookChangeHeaderFooterOptions) {
			o = this.extHookChangeHeaderFooterOptions(o);
		}

		//var that = this;

		// o.oEditBtn = null;
		// o.buttonList.splice(0, 0, {sid : "createBtn", sI18nBtnTxt : "CREATE",
		//  onBtnPressed : function(evt) {
		//       that.onAddNewEntry();
		//   },
		//   bDisabled : true
		//  });

		// o.bSuppressBookmarkButton = true;
		return o;
	}
});