/** Declaration file generated by dts-gen */

export = passport_auth0;

declare class passport_auth0 {
    constructor(options: any, verify: any);

    authenticate(req: any, options: any): any;

    authorizationParams(options: any): any;

    userProfile(accessToken: any, done: any): any;

    static Strategy: any;

}

declare namespace passport_auth0 {

    function authenticate(req: any, options: any): any;

    function authorizationParams(options: any): any;

    function parseErrorResponse(body: any, status: any): any;

    function tokenParams(options: any): any;

    function userProfile(accessToken: any, done: any): any;

    namespace authenticate {
        const prototype: {
        };

    }

    namespace authorizationParams {
        const prototype: {
        };

    }

    namespace parseErrorResponse {
        const prototype: {
        };

    }

    namespace tokenParams {
        const prototype: {
        };

    }

    namespace userProfile {
        const prototype: {
        };

    }

}
