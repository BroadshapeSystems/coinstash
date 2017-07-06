import { Routes, RouterModule } from '@angular/router';
import { WalletComponent } from './wallet/wallet.component';
import { DashboardComponent } from './dashboard/dashboard.component';


const routes: Routes = [{ path: "wallet", component: WalletComponent },
 { path: "", component: DashboardComponent },
 { path: "dashboard", component: DashboardComponent }]


export const routing = RouterModule.forRoot(routes);