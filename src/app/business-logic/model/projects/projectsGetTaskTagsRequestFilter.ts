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



/**
 * Filter on entities to collect tags from
 */
export interface ProjectsGetTaskTagsRequestFilter {
    /**
     * The list of tag values to filter by. Use \'null\' value to specify empty tags. Use \'__Snot\' value to specify that the following value should be excluded
     */
    tags?: Array<string>;
    /**
     * The list of system tag values to filter by. Use \'null\' value to specify empty system tags. Use \'__Snot\' value to specify that the following value should be excluded
     */
    system_tags?: Array<string>;
}
