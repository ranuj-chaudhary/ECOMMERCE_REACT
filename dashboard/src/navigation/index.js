import { allNav } from "./allNav";

export function getAllNav (role) {
    let validNavs = allNav.filter(nav => nav.role === role)
    return validNavs;
}
