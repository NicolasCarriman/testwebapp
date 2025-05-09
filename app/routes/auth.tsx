import { getToken } from "~/services/auth";
import { Navigate } from "react-router";

export async function clientLoader() {
    try {
        const concreteUrl = new URL(window.location.href);
        const code = concreteUrl.searchParams.get('code');
        if (!code) throw new Error('Error on tryng to get auth_code');
        const token = await getToken(code, 'http://10.0.111.26:2500/product');
        if (token.error) throw new Error(token.message);
        window.localStorage.setItem('access_token', token.data.access_token);
    } catch (e: any) {
        throw new Error(e);
    }
}

export default function Auth() {
    return (<Navigate to='/product' />)
};
