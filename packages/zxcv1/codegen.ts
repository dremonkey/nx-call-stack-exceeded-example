import { CodegenConfig } from '@graphql-codegen/cli';
 
const config: CodegenConfig = {
  generates: {
    './src/types/braintree.ts': {
      plugins: ['typescript'],
    }
  },
  schema: [
    {
      'https://payments.sandbox.braintree-api.com/graphql': {
        headers: {
          Authorization: 'Bearer sandbox_csh2vfw7_y6zk8bd946bmw799',
          'Braintree-Version': '2019-01-01',
        },
      },
    },
  ],
};
export default config;