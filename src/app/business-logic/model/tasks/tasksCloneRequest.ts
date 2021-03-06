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

import { ConfigurationItem } from '././configurationItem';
import { ParamsItem } from '././paramsItem';
import { Execution } from '././execution';
import { TaskModelItem } from '././taskModelItem';


export interface TasksCloneRequest {
    /**
     * ID of the task
     */
    task: string;
    /**
     * The name of the cloned task. If not provided then taken from the original task
     */
    new_task_name?: string;
    /**
     * The comment of the cloned task. If not provided then taken from the original   task
     */
    new_task_comment?: string;
    /**
     * The user-defined tags of the cloned task. If not provided then taken from the   original task
     */
    new_task_tags?: Array<string>;
    /**
     * The system tags of the cloned task. If not provided then empty
     */
    new_task_system_tags?: Array<string>;
    /**
     * The parent of the cloned task. If not provided then taken from the original   task
     */
    new_task_parent?: string;
    /**
     * The project of the cloned task. If not provided then taken from the original   task
     */
    new_task_project?: string;
    /**
     * The hyper params for the new task. If not provided then taken from the original   task
     */
    new_task_hyperparams?: { [key: string]: { [key: string]: ParamsItem; }; };
    /**
     * The configuration for the new task. If not provided then taken from the   original task
     */
    new_task_configuration?: { [key: string]: ConfigurationItem; };
    execution_overrides?: Execution;
    /**
     * If set to \'false\' then the task fields that are copied from the original task   are not validated. The default is false.
     */
    validate_references?: boolean;
    /**
     * Clone task to a new project by this name (only if `new_task_project` is not   provided). If a project by this name already exists, task will be cloned to   existing project.
     */
    new_project_name?: string;
    /**
     * The list of input models for the cloned task. If not specifed then copied from   the original task
     */
    new_task_input_models?: Array<TaskModelItem>;
    /**
     * The docker container properties for the new task. If not provided then taken   from the original task
     */
    new_task_container?: { [key: string]: string; };
}
