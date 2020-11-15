/**
 * S: Single Responsibility Principle
 */

 /**
  * Bad example
  */
class Employee_BAD {
    private department: string;
    constructor(department: string) {
        this.department = department;
    }

    public calculatePay (): number {
        let pay: number;
        if (this.department === 'IT') {
            pay = 1000;
        } else if (this.department === 'HR') {
            pay = 1200;
        } else if (this.department === 'ACCOUNTING') {
            pay = 2000;
        } else {
            pay = 0;
        }

        return 0;
    }

    public reportHours (): number {
         // impl
        return 0;
    }

    public save (): Promise<any> {
        // impl

        return Promise.resolve(true);
    }
}

// https://khalilstemmler.com/articles/solid-principles/solid-typescript/#SRP