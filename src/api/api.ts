import { ClientBase } from "./client-base";
//----------------------
// <auto-generated>
//     Generated using the NSwag toolchain v13.20.0.0 (NJsonSchema v10.9.0.0 (Newtonsoft.Json v13.0.0.0)) (http://NSwag.org)
// </auto-generated>
//----------------------

/* tslint:disable */
/* eslint-disable */
// ReSharper disable InconsistentNaming

export class Client extends ClientBase {
    private http: { fetch(url: RequestInfo, init?: RequestInit): Promise<Response> };
    private baseUrl: string;
    protected jsonParseReviver: ((key: string, value: any) => any) | undefined = undefined;

    constructor(baseUrl?: string, http?: { fetch(url: RequestInfo, init?: RequestInit): Promise<Response> }) {
        super();
        this.http = http ? http : window as any;
        this.baseUrl = baseUrl !== undefined && baseUrl !== null ? baseUrl : "";
    }

    /**
     * Get the list of WeatherForecast
     * @return Success
     */
    getAll(version: string): Promise<WeatherListVm> {
        let url_ = this.baseUrl + "/api/{version}/Weather";
        if (version === undefined || version === null)
            throw new Error("The parameter 'version' must be defined.");
        url_ = url_.replace("{version}", encodeURIComponent("" + version));
        url_ = url_.replace(/[?&]$/, "");

        let options_: RequestInit = {
            method: "GET",
            headers: {
                "Accept": "application/json"
            }
        };

        return this.transformOptions(options_)
            .then((transformedOptions_) => {
                return this.http.fetch(url_, transformedOptions_)
            })
            .then((_response: Response) => {
                return this.processGetAll(_response);
            });

        //return this.http.fetch(url_, options_).then((_response: Response) => {
        //    return this.processGetAll(_response);
        //});
    }

    protected processGetAll(response: Response): Promise<WeatherListVm> {
        const status = response.status;
        let _headers: any = {}; if (response.headers && response.headers.forEach) { response.headers.forEach((v: any, k: any) => _headers[k] = v); };
        if (status === 200) {
            return response.text().then((_responseText) => {
            let result200: any = null;
            result200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver) as WeatherListVm;
            return result200;
            });
        } else if (status === 401) {
            return response.text().then((_responseText) => {
            let result401: any = null;
            result401 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver) as ProblemDetails;
            return throwException("If the user is unauthorized", status, _responseText, _headers, result401);
            });
        } else if (status !== 200 && status !== 204) {
            return response.text().then((_responseText) => {
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            });
        }
        return Promise.resolve<WeatherListVm>(null as any);
    }

    /**
     * Create the weather forecast
     * @param body (optional) CreateWeatherDto object
     * @return Success
     */
    create(version: string, body: CreateWeatherDto | undefined): Promise<string> {
        let url_ = this.baseUrl + "/api/{version}/Weather";
        if (version === undefined || version === null)
            throw new Error("The parameter 'version' must be defined.");
        url_ = url_.replace("{version}", encodeURIComponent("" + version));
        url_ = url_.replace(/[?&]$/, "");

        const content_ = JSON.stringify(body);

        let options_: RequestInit = {
            body: content_,
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            }
        };

        return this.transformOptions(options_)
            .then((transformedOptions_) => {
                return this.http.fetch(url_, transformedOptions_)
            })
            .then((_response: Response) => {
                return this.processCreate(_response);
            });
    }

    protected processCreate(response: Response): Promise<string> {
        const status = response.status;
        let _headers: any = {}; if (response.headers && response.headers.forEach) { response.headers.forEach((v: any, k: any) => _headers[k] = v); };
        if (status === 201) {
            return response.text().then((_responseText) => {
            let result201: any = null;
            result201 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver) as string;
            return result201;
            });
        } else if (status === 401) {
            return response.text().then((_responseText) => {
            let result401: any = null;
            result401 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver) as ProblemDetails;
            return throwException("If the user is unauthorized", status, _responseText, _headers, result401);
            });
        } else if (status !== 200 && status !== 204) {
            return response.text().then((_responseText) => {
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            });
        }
        return Promise.resolve<string>(null as any);
    }

    /**
     * Update the weather forecast
     * @param body (optional) UpdateWeatherDto object
     * @return Success
     */
    update(version: string, body: UpdateWeatherDto | undefined): Promise<void> {
        let url_ = this.baseUrl + "/api/{version}/Weather";
        if (version === undefined || version === null)
            throw new Error("The parameter 'version' must be defined.");
        url_ = url_.replace("{version}", encodeURIComponent("" + version));
        url_ = url_.replace(/[?&]$/, "");

        const content_ = JSON.stringify(body);

        let options_: RequestInit = {
            body: content_,
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            }
        };

        return this.transformOptions(options_)
            .then((transformedOptions_) => {
                return this.http.fetch(url_, transformedOptions_)
            })
            .then((_response: Response) => {
                return this.processUpdate(_response);
            });
    }

    protected processUpdate(response: Response): Promise<void> {
        const status = response.status;
        let _headers: any = {}; if (response.headers && response.headers.forEach) { response.headers.forEach((v: any, k: any) => _headers[k] = v); };
        if (status === 204) {
            return response.text().then((_responseText) => {
            return;
            });
        } else if (status === 401) {
            return response.text().then((_responseText) => {
            let result401: any = null;
            result401 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver) as ProblemDetails;
            return throwException("If the user is unauthorized", status, _responseText, _headers, result401);
            });
        } else if (status !== 200 && status !== 204) {
            return response.text().then((_responseText) => {
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            });
        }
        return Promise.resolve<void>(null as any);
    }

    /**
     * Get the weatherforecast by City's name
     * @param city WeatheForecast City (string)
     * @return Success
     */
    get(city: string, version: string): Promise<WeatherDetailsVm> {
        let url_ = this.baseUrl + "/api/{version}/Weather/{city}";
        if (city === undefined || city === null)
            throw new Error("The parameter 'city' must be defined.");
        url_ = url_.replace("{city}", encodeURIComponent("" + city));
        if (version === undefined || version === null)
            throw new Error("The parameter 'version' must be defined.");
        url_ = url_.replace("{version}", encodeURIComponent("" + version));
        url_ = url_.replace(/[?&]$/, "");

        let options_: RequestInit = {
            method: "GET",
            headers: {
                "Accept": "application/json"
            }
        };

        return this.transformOptions(options_)
            .then((transformedOptions_) => {
                return this.http.fetch(url_, transformedOptions_)
            })
            .then((_response: Response) => {
                return this.processGet(_response);
            });
    }

    protected processGet(response: Response): Promise<WeatherDetailsVm> {
        const status = response.status;
        let _headers: any = {}; if (response.headers && response.headers.forEach) { response.headers.forEach((v: any, k: any) => _headers[k] = v); };
        if (status === 200) {
            return response.text().then((_responseText) => {
            let result200: any = null;
            result200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver) as WeatherDetailsVm;
            return result200;
            });
        } else if (status === 401) {
            return response.text().then((_responseText) => {
            let result401: any = null;
            result401 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver) as ProblemDetails;
            return throwException("If the user is unauthorized", status, _responseText, _headers, result401);
            });
        } else if (status !== 200 && status !== 204) {
            return response.text().then((_responseText) => {
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            });
        }
        return Promise.resolve<WeatherDetailsVm>(null as any);
    }

    /**
     * Delete the weatherforecast by City's name
     * @param city WeatheForecast City (string)
     * @return Success
     */
    delete(city: string, version: string): Promise<void> {
        let url_ = this.baseUrl + "/api/{version}/Weather/{city}";
        if (city === undefined || city === null)
            throw new Error("The parameter 'city' must be defined.");
        url_ = url_.replace("{city}", encodeURIComponent("" + city));
        if (version === undefined || version === null)
            throw new Error("The parameter 'version' must be defined.");
        url_ = url_.replace("{version}", encodeURIComponent("" + version));
        url_ = url_.replace(/[?&]$/, "");

        let options_: RequestInit = {
            method: "DELETE",
            headers: {
            }
        };

        return this.transformOptions(options_)
            .then((transformedOptions_) => {
                return this.http.fetch(url_, transformedOptions_)
            })
            .then((_response: Response) => {
                return this.processDelete(_response);
            });
    }

    protected processDelete(response: Response): Promise<void> {
        const status = response.status;
        let _headers: any = {}; if (response.headers && response.headers.forEach) { response.headers.forEach((v: any, k: any) => _headers[k] = v); };
        if (status === 204) {
            return response.text().then((_responseText) => {
            return;
            });
        } else if (status === 401) {
            return response.text().then((_responseText) => {
            let result401: any = null;
            result401 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver) as ProblemDetails;
            return throwException("If the user is unauthorized", status, _responseText, _headers, result401);
            });
        } else if (status !== 200 && status !== 204) {
            return response.text().then((_responseText) => {
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            });
        }
        return Promise.resolve<void>(null as any);
    }
}

export interface CreateWeatherDto {
    city: string;
    date?: Date;
    temperatureC?: number;
    summary?: string | undefined;
}

export interface ProblemDetails {
    type?: string | undefined;
    title?: string | undefined;
    status?: number | undefined;
    detail?: string | undefined;
    instance?: string | undefined;

    [key: string]: any;
}

export interface UpdateWeatherDto {
    city?: string | undefined;
    date?: Date;
    temperatureC?: number;
    summary?: string | undefined;
}

export interface WeatherDetailsVm {
    city?: string | undefined;
    date?: Date;
    temperatureC?: number;
    readonly temperatureF?: number;
    summary?: string | undefined;
}

export interface WeatherListVm {
    weatherList?: WeatherLookupDto[] | undefined;
}

export interface WeatherLookupDto {
    city?: string | undefined;
    date?: Date;
    temperatureC?: number;
}

export class ApiException extends Error {
    message: string;
    status: number;
    response: string;
    headers: { [key: string]: any; };
    result: any;

    constructor(message: string, status: number, response: string, headers: { [key: string]: any; }, result: any) {
        super();

        this.message = message;
        this.status = status;
        this.response = response;
        this.headers = headers;
        this.result = result;
    }

    protected isApiException = true;

    static isApiException(obj: any): obj is ApiException {
        return obj.isApiException === true;
    }
}

function throwException(message: string, status: number, response: string, headers: { [key: string]: any; }, result?: any): any {
    if (result !== null && result !== undefined)
        throw result;
    else
        throw new ApiException(message, status, response, headers, null);
}