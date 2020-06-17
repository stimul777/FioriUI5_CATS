/*
 * Copyright (C) 2009-2014 SAP SE or an SAP affiliate company. All rights reserved
 */
sap.ui.controller("hcm.mytimesheet.Main", {
	onInit: function() {
		jQuery.sap.require("sap.ca.scfld.md.Startup");
		sap.ca.scfld.md.Startup.init("hcm.mytimesheet", this);
		//sap.ui.getCore().applyTheme("sap_bluecrystal"); 
	},
	onExit: function() {
		try {
			jQuery.sap.require("hcm.mytimesheet.utils.ConcurrentEmployment");
			var x = hcm.mytimesheet.utils.ConcurrentEmployment.getControllerInstance();
			x.oCEDialog.Cancelled = true;
			x.oCEDialog.close();
			x.oApplication.pernr = "";
		} catch (e) {
			jQuery.sap.log.error("couldn't execute onExit", ["onExit failed in main controller"], ["hcm.mytimesheet.Main"]);
		}
	}
});