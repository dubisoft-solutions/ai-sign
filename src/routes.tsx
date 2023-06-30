import { matchPath } from 'react-router';
import { useLocation } from 'react-router-dom';


const publicPath = `${import.meta.env.VITE_BASE_URL}`;

export const routeCodes = {
  HOME: publicPath,
  DEMO: `${ publicPath }demo`,
  CONTACT: `${ publicPath }contact`,
};


export const routes = [
    routeCodes.HOME, routeCodes.DEMO, routeCodes.CONTACT
]


export function useMatchedRoute() {
    const { pathname } = useLocation();
    for (const route of routes) {
        if (matchPath({ path: route }, pathname)) {
            return route;
        }
    }
}