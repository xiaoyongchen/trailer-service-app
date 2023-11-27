
export const CONSOLE_REQUEST_ENABLE = false;
export const CONSOLE_RESPONSE_ENABLE = false;

export const AXIOS_DEFAULT_CONFIG = {
	timeout: 20000,
	maxContentLength: 2000,
	withCredentials: false,
	headers: {
		"X-Requested-With": "XMLHttpRequest",
		"Access-Control-Allow-Origin": "*",
		'Content-Type': '"application/json; charset=utf-8',
		"Accept-Language": 'en-US'
	},
};