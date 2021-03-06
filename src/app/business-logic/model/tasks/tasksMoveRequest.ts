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



export interface TasksMoveRequest {
    /**
     * Tasks to move
     */
    ids: Array<string>;
    /**
     * Target project ID. If not provided, `project_name` must be provided.
     */
    project?: string;
    /**
     * Target project name. If provided and a project with this name does not exist, a   new project will be created. If not provided, `project` must be provided.
     */
    project_name?: string;
}
