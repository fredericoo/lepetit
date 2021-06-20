import { Document } from '@prismicio/client/types/documents';

type PrismicDocument<T = unknown> = Omit<Document, 'data'> & { data: T };

export default PrismicDocument;
