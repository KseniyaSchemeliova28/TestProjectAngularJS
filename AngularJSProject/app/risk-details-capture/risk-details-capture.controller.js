class riskDetailsCaptureController {
    constructor(riskDetailsCaptureService) {
        'ngInject'

        this.name = 'RiskDetailsCaptureComponent';
        this._riskService = riskDetailsCaptureService;

        this.riskDetailsCapture = [];
        this.editMode = false;
        const riskDetails = this._riskService.getRisks();
        this.currentPage = 0;

        //test #66
        riskDetails.then((risk) => {
            this.riskDetailsCapture = angular.copy(risk.slice(this.currentPage * 10, this.currentPage * 10 + 10));
            this.numberOfPage = risk.length / 10;
            this.pages = [];
            let i = 0;
            while (i < this.numberOfPage) {
                this.pages.push(i);
                i++;
            }
        });

        //test git extensions
        this.collumns = [
            {name: 'registrationNumber', header: "Reg No", type: 'text', readonly: false},
            {name: 'aircraftMakeModel', header: "Make/Model", type: 'object', readonly: true},
            {name: 'use', header: "Use", type: 'text', readonly: true},
            {name: 'seats', header: "Seats c/p", type: 'seats', readonly: true},
            {name: 'hullCoverageEnabled', header: "Hull", type: 'bool', readonly: true},
            {name: 'tloCoverageEnabled', header: "TLO", type: 'bool', readonly: true},
            {name: 'hullWarCoverageEnabled', header: "Hull War", type: 'bool', readonly: false},
            {name: 'hullCoverageCurrency', header: "Hull Ccy", type: 'text', readonly: true},
            {name: 'hullValue', header: "Hull property", type: 'number', readonly: false},
            {name: 'tloLimit', header: "TLO property", type: 'number', readonly: true},
            {name: 'hullDeductible', header: "Hull DED", type: 'number', readonly: true},
            {name: 'hullDeductible', header: "Hull Deduction", type: 'percent', readonly: true},
            {name: 'hullDeductible', header: "Hull War Deductions", type: 'percent', readonly: true},
            {name: 'liabilityCoverageCurrency', header: "Liab CCy", type: 'text', readonly: true},
            {name: 'liabilityLimit', header: "Liab Limit", type: 'number', readonly: true},
            {name: 'paCoverageCurrency', header: "PA: Ccy", type: 'text', readonly: true},
            {name: 'paLimit', header: "PA Limit", type: 'number', readonly: true},
            {name: 'AVN52Deductible', header: "AVN 52E DED", type: 'number', readonly: true},
            {name: 'hullDeductible', header: "Liability Deduction", type: 'percent', readonly: true}];
    }

    onClickedPage(number) {
        if (number >= 0) {
            this.currentPage = number;
        } else if (this.currentPage > 0 && number === 'previous') {
            this.currentPage--;
        } else if (this.currentPage <= this.numberOfPage - 1 && number === 'next') {
            this.currentPage++;
        }
        this.getRiskDetails();
    };

    openEditMode() {
        this.editMode = !this.editMode;
    };

    saveRiskDetails() {
        this._riskService.saveRisks(this.riskDetailsCapture);
        this.getRiskDetails();
        this.openEditMode();
    };

    exitWithoutChanges() {
        if (confirm('You are about to leave the page. Unsaved data will be lost. Do you want to proceed?')) {
            this.getRiskDetails();
            this.openEditMode();
        }
    };

    getRiskDetails() {
        this.riskDetailsCapture = this._riskService.getLoadedRisks().slice(this.currentPage * 10, this.currentPage * 10 + 10);
        this.numberOfPage = this._riskService.getLoadedRisks().length / 10;
        this.pages = [];
        let i = 0;
        while (i < this.numberOfPage) {
            this.pages.push(i);
            i++;
        }
    }

    getClassForPaging(page) {
        if (page === this.currentPage) {
            return 'active';
        } else return '';
    }
}

export default riskDetailsCaptureController;