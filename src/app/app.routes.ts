import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Store } from './pages/store/store';
import { NewArrivals } from './pages/new-arrivals/new-arrivals';
import { Men } from './pages/men/men';
import { Women } from './pages/women/women';

export const routes: Routes = [
    {
        path:"",
        component:Home
    },
    {
        path:"Store",
        component:Store
    },
    {
        path:"NewArrivals",
        component:NewArrivals
    },
    {
        path:"Men",
        component:Men
    },
    {
        path:"Women",
        component:Women
    },
    {
        path:"Accessories",
        component:Women
    }
];
