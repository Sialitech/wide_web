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

import { Stats } from '././stats';
import { ProjectsGetAllResponseSingleSubProjects } from '././projectsGetAllResponseSingleSubProjects';


export interface ProjectsGetAllResponseSingle {
    /**
     * Project id
     */
    id?: string;
    /**
     * Project name
     */
    name?: string;
    /**
     * Project description
     */
    description?: string;
    /**
     * Associated user id
     */
    user?: string;
    /**
     * Company id
     */
    company?: {id: string; name?: string};
    /**
     * Creation time
     */
    created?: string;
    /**
     * User-defined tags
     */
    tags?: Array<string>;
    /**
     * System tags. This field is reserved for system use, please don\'t use it.
     */
    system_tags?: Array<string>;
    /**
     * The default output destination URL for new tasks under this project
     */
    default_output_destination?: string;
    stats?: Stats;
    /**
     * The list of sub projects
     */
    sub_projects?: Array<ProjectsGetAllResponseSingleSubProjects>;
    isRoot?: boolean;
    last_update?: string; //MANUALLY
}
