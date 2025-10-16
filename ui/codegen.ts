import 'dotenv/config'
import type { CodegenConfig } from '@graphql-codegen/cli'

const config: CodegenConfig = {
  documents: [
    'src/graphql/queries/**/*.ts',
    'src/graphql/mutations/**/*.ts',
    'src/graphql/subscriptions/**/*.ts'
  ],
  generates: {
    'src/graphql/generated/': {
      plugins: [],
      preset: 'client'
    }
  },
  overwrite: true,
  schema: `${process.env.NEXT_PUBLIC_API_URL}/graphql`
}

export default config
