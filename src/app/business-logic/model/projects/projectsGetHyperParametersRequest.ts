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



export interface ProjectsGetHyperParametersRequest {
    /**
     * Project ID
     */
    project?: string;
    /**
     * Page number
     */
    page?: number;
    /**
     * Page size
     */
    page_size?: number;
    /**
     * If set to \'true\' and the project field is set then the result includes hyper   parameters from the subproject tasks
     */
    include_subprojects?: boolean;
}
