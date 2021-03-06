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

import { ParamsItem } from '././paramsItem';
import { ReplaceHyperparamsEnum } from '././replaceHyperparamsEnum';


export interface TasksEditHyperParamsRequest {
    /**
     * Task ID
     */
    task: string;
    /**
     * Task hyper parameters. The new ones will be added and the already existing ones   will be updated
     */
    hyperparams: Array<ParamsItem>;
    replace_hyperparams?: ReplaceHyperparamsEnum;
    /**
     * If set to True then both new and running task hyper params can be edited.   Otherwise only the new task ones. Default is False
     */
    force?: boolean;
}
