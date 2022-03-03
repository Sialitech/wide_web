/**
 * events
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * OpenAPI spec version: 2.14
 *
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */



/**
 * Used for reporting scalar metrics during training task
 */
export interface MetricsScalarEvent {
    /**
     * Epoch milliseconds UTC, will be set by the server if not set.
     */
    timestamp?: number;
    /**
     * training_stats_vector
     */
    type: object;
    /**
     * Task ID (required)
     */
    task: string;
    /**
     * Iteration
     */
    iter?: number;
    /**
     * Metric name, e.g. \'count\', \'loss\', \'accuracy\'
     */
    metric?: string;
    /**
     * E.g. \'class_1\', \'total\', \'average
     */
    variant?: string;
    /**
     * 
     */
    value?: number;
}
