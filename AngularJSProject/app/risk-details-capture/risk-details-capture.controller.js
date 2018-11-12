class riskDetailsCaptureController {
    constructor(riskDetailsCaptureService) {
        'ngInject'
        this.name = 'riskDetailsCapture';
        this._riskService = riskDetailsCaptureService;

        this.headers = [{name: "#"}, {name: "Reg No"}, {name: "Make/Model"}, {name: "Use"}, {name: "Seats c/p"}, {name: "Hull"},
            {name: "TLO"}, {name: "Hull War"}, {name: "Hull Ccy"}, {name: "Hull Value"}, {name: "TLO Value"}, {name: "Hull DED"},
            {name: "Hull Deduction"}, {name: "Hull War Deductions"}, {name: "Liab CCy"}, {name: "Liab Limit"},
            {name: "PA: Ccy"}, {name: "PA Limit"}, {name: "AVN 52E DED"}, {name: "Liability Deduction"}];

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

        this.getRiskDetails = () => {
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
        };


        this.onClickedPage = (number) => {
            if (number >= 0) {
                this.currentPage = number;
                this.getRiskDetails();
            } else if (this.currentPage > 0 && number === 'previous') {
                this.currentPage--;
                this.getRiskDetails();
            } else if (this.currentPage < this.numberOfPage-1 && number === 'next') {
                this.currentPage++;
                this.getRiskDetails();
            }

        };

        this.openEditMode = (e) => {
            this.editMode = !this.editMode;
        }

    }
}

export default riskDetailsCaptureController;