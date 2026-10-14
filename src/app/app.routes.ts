import { Routes } from '@angular/router';
import {Login} from "./authentication/login/login";
import {Register} from "./authentication/register/register";

import {Usermanagement} from "./settings/usermanagement/usermanagement";
import {UsermanagementManage} from "./settings/usermanagement/usermanagement-manage/usermanagement-manage";
import {Permissions} from "./settings/permissions/permissions";
import {PermissionsManage} from "./settings/permissions/permissions-manage/permissions-manage";
import {BranchManagment} from "./masters/branch-managment/branch-managment";
import {Guard} from "./reuseable/guard/guard";
import {BranchManage} from "./masters/branch-managment/branch-manage/branch-manage";
import {ParkingConfigurations} from "./masters/parking-configurations/parking-configurations/parking-configurations";
import {Sample1} from "./masters/sample/sample1/sample1";
import {Sample2} from "./masters/sample/sample2/sample2";
import {DashboardSystem} from "./dashboard/dashboard-system/dashboard-system";
import {
    ParkingConfigurationsManage
} from "./masters/parking-configurations/parking-configurations-manage/parking-configurations-manage";

export const routes: Routes = [


    {
        path: '',
        component:Login
    },
    {
        path: 'new/register',
        component:Register
    },

    {
        path: 'system/dashboard',
        component:DashboardSystem
    },
    {
        path: 'settings/userManagement',
        component:Usermanagement
    },


    {
        path: 'settings/userManagement/manage',
        component:UsermanagementManage
    },

    {
        path: 'settings/userManagement/:id',
        component:Usermanagement
    },
    {
        path: 'settings/permissions',
        component:Permissions
    },
    {
        path: 'settings/permissions/manage',
        component:PermissionsManage
    },
    {
        path: 'settings/permissions/:id',
        component:Permissions
    },

    {
        path: 'master/branchManagement',
        component:BranchManagment,
        canDeactivate:[Guard]
    },
    {
        path: 'master/branchManagement/:id',
        component:BranchManagment,
        canDeactivate:[Guard]
    },
    {
        path: 'master/branch/manage',
        component:BranchManage,

    },

    {
        path: 'master/parkingConfiguration',
        component:ParkingConfigurations,

    },

    {
        path: 'master/parkingConfiguration/manage',
        component:ParkingConfigurationsManage,

    },

    {
        path: 'master/parkingConfiguration/:id',
        component:ParkingConfigurations,

    },


    // samples
    {
        path: 'master/sample1',
        component:Sample1,

    },

    {
        path: 'master/sample2',
        component:Sample2,

    },
];
