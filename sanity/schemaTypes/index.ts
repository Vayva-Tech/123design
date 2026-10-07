import { objectSchemaTypes } from './objects';
import { moduleSchemaTypes } from './modules';
import { documentSchemaTypes } from './documents';

export const schemaTypes = [...objectSchemaTypes, ...moduleSchemaTypes, ...documentSchemaTypes];
