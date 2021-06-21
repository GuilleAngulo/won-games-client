import { instantMeiliSearch } from '@meilisearch/instant-meilisearch'

const server = process.env.MEILISEARCH_SERVER ?? 'http://127.0.0.1:7700'
const key = process.env.MEILISEARCH_KEY ?? ''

export const searchClient = instantMeiliSearch(server, key)
