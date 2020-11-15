abstract class Employee_GOOD {
    abstract calculatePay (): number;
    abstract reportHours (): number;
    // this is going to be same for all
    protected save (): Promise<any> {
        return Promise.resolve(true);
    }
}

class HR extends Employee_GOOD {
    calculatePay (): number {
        return 1200;
    }

    reportHours (): number {
        return 120;
    }
}

class Accounting extends Employee_GOOD {
    calculatePay (): number {
        return 1200;
    }

    reportHours (): number {
        return 120;
    }
}

const HREmployee =  new HR();
console.log('Pay => ', HREmployee.calculatePay())
console.log('Report Hours', HREmployee.reportHours())
