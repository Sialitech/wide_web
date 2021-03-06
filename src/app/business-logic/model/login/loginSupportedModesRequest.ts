/**
 * login
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * OpenAPI spec version: 2.14
 *
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */



export interface LoginSupportedModesRequest {
    /**
     * ASCII base64 encoded application state
     */
    state?: string;
    /**
     * URL prefix used to generate the callback URL for each supported SSO provider
     */
    callback_url_prefix?: string;
}
