/**
 * workers
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * OpenAPI spec version: 2.14
 *
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */

import { MetricStats } from '././metricStats';


export interface WorkerStats {
    /**
     * ID of the worker
     */
    worker?: string;
    /**
     * List of the metrics statistics for the worker
     */
    metrics?: Array<MetricStats>;
}
