/**
 * projects
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * OpenAPI spec version: 2.14
 *
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */

import { ProjectsGetAllResponseSingle } from '././projectsGetAllResponseSingle';


export interface ProjectsGetAllExResponse {
    /**
     * Projects list
     */
    projects?: Array<ProjectsGetAllResponseSingle>;
    /**
     * The amount of tasks under this project (without children projects). Returned if   \'check_own_contents\' flag is set in the request
     */
    own_tasks?: number;
    /**
     * The amount of models under this project (without children projects). Returned   if \'check_own_contents\' flag is set in the request
     */
    own_models?: number;
    /**
     * Scroll ID that can be used with the next calls to get_all to retrieve more data
     */
    scroll_id?: string;
}
