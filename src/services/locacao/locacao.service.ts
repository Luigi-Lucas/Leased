// Initializes the `locacao` service on path `/locacao`
import { ServiceAddons } from '@feathersjs/feathers';
import { Application } from '../../declarations';
import { Locacao } from './locacao.class';
import createModel from '../../models/locacao.model';
import hooks from './locacao.hooks';

// Add this service to the service type index
declare module '../../declarations' {
  interface ServiceTypes {
    'locacao': Locacao & ServiceAddons<any>;
  }
}

export default function (app: Application): void {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate')
  };

  // Initialize our service with any options it requires
  app.use('/locacao', new Locacao(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('locacao');

  service.hooks(hooks);
}
