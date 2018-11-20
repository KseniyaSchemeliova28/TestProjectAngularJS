class riskDetailsCaptureController{
    constructor(riskDetailsCaptureService) {
        'ngInject'
        this.name = 'riskDetailsCapture';
        this._riskService = riskDetailsCaptureService;

        this.riskDetailsCapture = [];
        this.editMode = false;
        const riskDetails = this._riskService.getRisks();
        this.currentPage = 0;
        riskDetails.then((risk) => {
            this.riskDetailsCapture = risk.data.result.slice(this.currentPage * 10, this.currentPage * 10 + 10);
            this.numberOfPage = risk.data.result.length / 10;
            this.pages = [];
            let i = 0;
            while (i < this.numberOfPage) {
                this.pages.push(i);
                i++;
            }
        });
        this.headers = [{name: "#", type: 'number', property: ''},
            {name: "Reg No", type: 'text', propertySum: 1, property: 'registrationNumber'},
            {name: "Make/Model", type: 'text', propertySum: 3, property: 'aircraftModel'}, //todo
            {name: "Use", type: 'text', propertySum: 2, property: 'purposeOfUse'},
            {name: "Seats c/p", type: 'seats', propertySum: 2, property: 'crewSeats'}, //todo
            {name: "Hull", type: 'bool', property: 'hullCoverage'},
            {name: "TLO", type: 'bool', property: 'hullCoverage'},
            {name: "Hull War", type: 'bool', property: 'hullCoverage'},
            {name: "Hull Ccy", type: 'text', property: 'hullCoverage'},
            {name: "Hull property", type: 'number', property: 'hullCoverage'},
            {name: "TLO property", type: 'number', property: 'hullCoverage'},
            {name: "Hull DED", type: 'number', property: 'hullCoverage'},
            {name: "Hull Deduction", type: 'number', property: 'hullCoverage'},
            {name: "Hull War Deductions", type: 'number', property: 'hullCoverage'},
            {name: "Liab CCy", type: 'text', property: 'liabilityCoverage'},
            {name: "Liab Limit", type: 'number', property: 'liabilityCoverage'},
            {name: "PA: Ccy", type: 'text', property: 'personalAccidentCoverage'},
            {name: "PA Limit", type: 'number', property: 'personalAccidentCoverage'},
            {name: "AVN 52E DED", type: 'number', property: 'personalAccidentCoverage'},
            {name: "Liability Deduction", type: 'number', property: 'personalAccidentCoverage'}];
    }

    onClickedPage(number) {
        if (number >= 0) {
            this.currentPage = number;
        } else if (this.currentPage > 0 && number === 'previous') {
            this.currentPage--;
        } else if (this.currentPage <= this.numberOfPage-1 && number === 'next') {
            this.currentPage++;
        }
        this.getRiskDetails();
    };

    openEditMode(e) {
        this.editMode = !this.editMode;
    };

    saveRiskDetails(){
        this._riskService.saveRisks(this.riskDetailsCapture);
        this.editMode=!this.editMode;
    };

    exitWithoutChanges(){
        if(confirm('You are about to leave the page. Unsaved data will be lost. Do you want to proceed?')){
            this.editMode=!this.editMode;
        }
        this.getRiskDetails();
    };

    getRiskDetails() {
        this.riskDetailsCapture =this._riskService.getLoadedRisks().slice(this.currentPage * 10, this.currentPage * 10 + 10);
        this.numberOfPage = this._riskService.getLoadedRisks().length / 10;
        this.pages = [];
        let i = 0;
        while (i < this.numberOfPage) {
            this.pages.push(i);
            i++;
        }
    }

    getClassForPaging(page){
        if(page === this.currentPage){
            return 'active';
        }else return '';
    }
}

export default riskDetailsCaptureController;