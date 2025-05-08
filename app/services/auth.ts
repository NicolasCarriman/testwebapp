import { fetchData } from "~/utils/fetch";

const urlPath = 'http://127.0.0.1:2350/auth';

export const getAuthUrl = () => {
    const concreteUrl = new URL(urlPath);
    concreteUrl.searchParams.set('client_id', '4')
    concreteUrl.searchParams.set('redirect_url', 'http://127.0.0.1/product');
    return concreteUrl.href;
}
