/**
 * tasks
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * OpenAPI spec version: 2.14
 *
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */



export type TaskTypeEnum = 'training' | 'testing' | 'inference' | 'data_processing' | 'application' | 'monitor' | 'controller' | 'optimizer' | 'service' | 'qc' | 'custom';

export const TaskTypeEnum = {
    Training: 'training' as TaskTypeEnum,
    Testing: 'testing' as TaskTypeEnum,
    Inference: 'inference' as TaskTypeEnum,
    DataProcessing: 'data_processing' as TaskTypeEnum,
    Application: 'application' as TaskTypeEnum,
    Monitor: 'monitor' as TaskTypeEnum,
    Controller: 'controller' as TaskTypeEnum,
    Optimizer: 'optimizer' as TaskTypeEnum,
    Service: 'service' as TaskTypeEnum,
    Qc: 'qc' as TaskTypeEnum,
    Custom: 'custom' as TaskTypeEnum
}
