import Ajv, { AnySchema } from "ajv";
import { schemas } from "./schemas";

const ajv = new Ajv({ allErrors: true, strict: false });

for (const [type, schema] of Object.entries(schemas) as [string, AnySchema][]) {
  ajv.addSchema(schema, type);
}

export interface ValidationResult {
  valid: boolean;
  errors: ValidationError[];
}

export interface ValidationError {
  field: string;
  message: string;
  value?: unknown;
}

export function validate(type: string, data: unknown): ValidationResult {
  const schema = schemas[type];
  if (!schema) {
    return {
      valid: false,
      errors: [{ field: "type", message: `Unknown widget type: '${type}'. Available: ${Object.keys(schemas).join(", ")}` }],
    };
  }

  const valid = ajv.validate(type, data);
  if (valid) return { valid: true, errors: [] };

  const errors: ValidationError[] = (ajv.errors ?? []).map((err) => ({
    field: err.instancePath || err.params?.missingProperty || "unknown",
    message: err.message ?? "Validation error",
    value: err.data,
  }));

  return { valid: false, errors };
}

export function validateWidgetConfig(config: unknown): ValidationResult {
  if (typeof config !== "object" || config === null) {
    return { valid: false, errors: [{ field: "root", message: "Config must be an object" }] };
  }
  const type = (config as Record<string, unknown>).type as string;
  return validate(type, config);
}

export function assertValid(type: string, data: unknown): void {
  const result = validate(type, data);
  if (!result.valid) {
    const messages = result.errors.map((e) => `  - ${e.field}: ${e.message}`).join("\n");
    throw new Error(`[VueSDK] Invalid '${type}' config:\n${messages}`);
  }
}

export { schemas };
