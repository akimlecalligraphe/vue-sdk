import { schemas } from './schemas';
export interface ValidationResult {
    valid: boolean;
    errors: ValidationError[];
}
export interface ValidationError {
    field: string;
    message: string;
    value?: unknown;
}
export declare function validate(type: string, data: unknown): ValidationResult;
export declare function validateWidgetConfig(config: unknown): ValidationResult;
export declare function assertValid(type: string, data: unknown): void;
export { schemas };
