import { BehaviorSubject } from 'rxjs';
export declare class GocodeeLibDemoService {
    private config;
    message: BehaviorSubject<string>;
    visible: BehaviorSubject<boolean>;
    constructor(config: any);
    sumValue(val1: number, val2: number): void;
    show(): void;
    hide(): void;
    each(array: any, delegate: any): any;
}
