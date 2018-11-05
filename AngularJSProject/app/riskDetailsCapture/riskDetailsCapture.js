'use strict';

riskApp.controller('RiskDetailsCaptureCtrl', function RiskDetailsCaptureCtrl(RiskDetailsService) {
    this.headers = [{name: "#"}, {name: "Reg No"}, {name: "Make/Model"}, {name: "Use"}, {name: "Seats c/p"}, {name: "Hull"},
        {name: "TLO"}, {name: "Hull War"}, {name: "Hull Ccy"}, {name: "Hull Value"}, {name: "TLO Value"}, {name: "Hull DED"},
        {name: "Hull Deduction"}, {name: "Hull War Deductions"}, {name: "Liab CCy"}, {name: "Liab Limit"},
        {name: "PA: Ccy"}, {name: "PA Limit"}, {name: "AVN 52E DED"}, {name: "Liability Deduction"}];

    const riskDetails = RiskDetailsService.getRisks();
    riskDetails.then((risk) => {
        this.riskDetailsCapture = risk.data.result;
    });
});
