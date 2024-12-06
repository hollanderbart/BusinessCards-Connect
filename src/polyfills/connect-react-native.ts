// @ts-ignore
import { polyfillGlobal } from 'react-native/Libraries/Utilities/PolyfillFunctions';
import TextEncoder from 'react-native-fast-encoder';

polyfillGlobal('TextDecoder', () => TextEncoder);
