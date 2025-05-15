import type { IResponse } from "~/model/response";

const jwtInterceptor = (headers: Headers) => {
    const jwt = window.localStorage.getItem('accessToken');
    headers.append('Authorization', `Bearer ${jwt}`)
}

export async function fetchData<T>(url: string, method: string, data?: any): Promise<IResponse<T>> {
    const parsedData = JSON.stringify(data);

    const request = new Request(`${url}`, {
        method: method,
        headers: {
            'Content-Type': 'application/json'
        },
        body: data ? parsedData : null
    });

    jwtInterceptor(request.headers);
    const fetchData = fetch(request)
        .then(response => {
            return response.json() as Promise<IResponse<T>>;
        })
        .catch((err) => {
            throw new Error('Error on fetching report :' + err)
        });

    return fetchData;
}