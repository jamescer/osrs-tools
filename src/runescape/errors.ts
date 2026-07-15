/**
 * Custom error for validation failures in OSRS tools
 */
export class ValidationError extends Error {
  public readonly fieldName: string;
  public readonly value: unknown;
  public readonly context?: Record<string, unknown>;

  constructor(fieldName: string, value: unknown, message: string, context?: Record<string, unknown>) {
    super(message);
    this.name = 'ValidationError';
    this.fieldName = fieldName;
    this.value = value;
    this.context = context;
  }
}
