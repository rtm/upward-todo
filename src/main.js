

      debugger;
      import app from './app';
      import {U} from '../src/Up';

      var model      = U({name: 'todos'});
      var view       = app(model);
      var appElement = document.getElementById('todoapp');

      appElement.appendChild(view);
