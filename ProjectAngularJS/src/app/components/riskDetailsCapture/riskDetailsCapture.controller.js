
class riskDetailsCaptureController {
    constructor(riskDetailsService) {
        'ngInject'
        this.name = 'riskDetailsCapture';

        this.headers = [{name: "#"}, {name: "Reg No"}, {name: "Make/Model"}, {name: "Use"}, {name: "Seats c/p"}, {name: "Hull"},
            {name: "TLO"}, {name: "Hull War"}, {name: "Hull Ccy"}, {name: "Hull Value"}, {name: "TLO Value"}, {name: "Hull DED"},
            {name: "Hull Deduction"}, {name: "Hull War Deductions"}, {name: "Liab CCy"}, {name: "Liab Limit"},
            {name: "PA: Ccy"}, {name: "PA Limit"}, {name: "AVN 52E DED"}, {name: "Liability Deduction"}];

        this.editMode = false;
        const riskDetails = riskDetailsService.getRisks();
        riskDetails.then((risk) => {
            this.riskDetailsCapture = risk.data.result;
            this.riskDetailsCapture.forEach((risk)=> {
                console.log(risk.hullCoverage.hullWarCoverageEnabled);
            } )
        });
        this.openEditMode = function (e) {
            console.log(this.editMode);
            this.editMode = !this.editMode;
        }
    }
}

export default riskDetailsCaptureController;