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



export interface Script {
    /**
     * Binary to use when running the script
     */
    binary?: string;
    /**
     * Name of the repository where the script is located
     */
    repository?: string;
    /**
     * Repository tag
     */
    tag?: string;
    /**
     * Repository branch id If not provided and tag not provided, default repository branch is used.
     */
    branch?: string;
    /**
     * Version (changeset) number. Optional (default is head version) Unused if tag is provided.
     */
    version_num?: string;
    /**
     * Path to execute within the repository
     */
    entry_point?: string;
    /**
     * Path to the folder from which to run the script Default - root folder of repository
     */
    working_dir?: string;
    /**
     * A JSON object containing requirements strings by key
     */
    requirements?: object;
    /**
     * Uncommitted changes found in the repository when task was run
     */
    diff?: string;
}
