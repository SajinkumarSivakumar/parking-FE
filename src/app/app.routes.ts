import { Routes } from '@angular/router';
import {Login} from "./authentication/login/login";
import {Register} from "./authentication/register/register";

import {Usermanagement} from "./settings/usermanagement/usermanagement";
import {UsermanagementManage} from "./settings/usermanagement/usermanagement-manage/usermanagement-manage";
import {Permissions} from "./settings/permissions/permissions";
import {PermissionsManage} from "./settings/permissions/permissions-manage/permissions-manage";
import {BranchManagment} from "./masters/branch-managment/branch-managment";
import {Guard} from "./reuseable/guard/guard";

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
];
