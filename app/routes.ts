import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [

    index("routes/home.tsx"),
    route("product", "routes/product.tsx"),
    route("auth", "routes/auth.tsx")
] satisfies RouteConfig;
