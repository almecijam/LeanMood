import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { DashboardPage} from './dashboard/page'
import { ListStudentPage } from './student/list/page'
import { EditStudentPage } from './student/edit/page'
import { ListTrainingPage } from './training/list/page'
import { EditTrainingPage } from './training/edit/page'


import { Route } from 'react-router'

// http://stackoverflow.com/questions/35048738/react-router-import-routes
// AssembliesRoutes.js
// http://randycoulman.com/blog/2016/02/02/composing-routes-in-react-router/
export const AdminRoutes = (

    <div>
      <Route path='/admin' component={DashboardPage}/>
      <Route path='/admin/student/list' component={ListStudentPage}/>
      <Route path='/admin/student/edit' component={EditStudentPage}/>
      <Route path='/admin/training/list' component={ListTrainingPage}/>
      <Route path='/admin/training/edit' component={EditTrainingPage}/>
    </div>

);
