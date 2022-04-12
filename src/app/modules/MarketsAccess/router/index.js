import MarketAccess from "@/app/modules/MarketsAccess/MarketAccess";
import Restriction from "@/app/modules/MarketsAccess/components/Restriction";
import Taxes from "@/app/modules/MarketsAccess/components/Taxes";


export const routes = [
    {
        path: '/market-access',
        name: 'app-market-access',
        component: MarketAccess
    },
    {
        path: '/market-access/:name',
        name: 'app-market-access-restriction',
        component: Restriction
    },
    {
        path: '/duties-and-taxes/:name',
        name: 'app-market-access-taxes',
        component: Taxes
    }
];