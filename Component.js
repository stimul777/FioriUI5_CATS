jQuery.sap.declare("hcm.mytimesheet.HCM_TSH_MANExtension.Component");
// use the load function for getting the optimized preload file if present
sap.ui.component.load({
  name: "hcm.mytimesheet",
  // Use the below URL to run the extended application when SAP-delivered application is deployed on SAPUI5 ABAP Repository
  url: "/sap/bc/ui5_ui5/sap/HCM_TSH_MAN" // we use a URL relative to our own component
    // extension application is deployed with customer namespace
});
this.hcm.mytimesheet.Component.extend("hcm.mytimesheet.HCM_TSH_MANExtension.Component", {
  metadata: {
    version: "1.0",
    config: {},
    customizing: {
      "sap.ui.controllerExtensions": {
        "hcm.mytimesheet.view.S3": {
          "controllerName": "hcm.mytimesheet.HCM_TSH_MANExtension.view.S3Custom1"
        },
        "hcm.mytimesheet.view.S31": {
          "controllerName": "hcm.mytimesheet.HCM_TSH_MANExtension.view.S31Custom"
        },
        "hcm.mytimesheet.Main": {
          "controllerName": "hcm.mytimesheet.HCM_TSH_MANExtension.MainCustom"
        }
      },
      "sap.ui.viewReplacements": {
        "hcm.mytimesheet.view.S3": {
          "viewName": "hcm.mytimesheet.HCM_TSH_MANExtension.view.S3Custom",
          "type": "XML"
        },
        "hcm.mytimesheet.view.S31": {
          "viewName": "hcm.mytimesheet.HCM_TSH_MANExtension.view.S31Custom",
          "type": "XML"
        },
        "hcm.mytimesheet.Main": {
          "viewName": "hcm.mytimesheet.HCM_TSH_MANExtension.MainCustom",
          "type": "XML"
        }
      }
    }
  }
});