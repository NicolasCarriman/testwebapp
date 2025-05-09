import type { IResponse } from "~/model/response";

const urlPath = 'http://127.0.0.1:2350/login';

export const getAuthUrl = () => {
    const concreteUrl = new URL(urlPath);
    concreteUrl.searchParams.set('response_type=', 'code')
    concreteUrl.searchParams.set('client_id', '4')
    concreteUrl.searchParams.set('redirect_url', 'http://10.0.111.26:2500/auth');
    return concreteUrl.href;
}

export const getToken = async (authCode: string, redirectUrl: string): Promise<IResponse<{ access_token: string, token_type: string, scope: string }>> => {
    try {
        const result = await fetch('http://127.0.0.1:2350/signin/token',
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    'authorization_code': authCode,
                    'redirect_url': redirectUrl,
                    'client_id': 4
                })
            }
        )

        return result.json();
    } catch (e: any) {
        throw new Error(e.message);
    }
};
