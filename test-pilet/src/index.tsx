import * as React from 'react';
import { PiletApi } from 'piral-instance';
import { TestPage } from './TestPage/TestPage';
import { AnotherTestPage } from './AnotherTestPage/AnotherTestPage';

export function setup(app: PiletApi) {
  app.showNotification('Hello from Piral!', {
    autoClose: 2000,
  });
  app.registerMenu(() =>
    <a href="https://docs.piral.io" target="_blank" className="class1">Documentation</a>
  );
  app.registerTile(() => <div>Welcome to Piral!</div>, {
    initialColumns: 2,
    initialRows: 1,
  });
  
  app.registerPage('/test', TestPage);
  app.registerPage('/test2', AnotherTestPage);
}
