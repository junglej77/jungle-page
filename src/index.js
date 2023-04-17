import { registerPlugin } from '@wordpress/plugins';
import LibraryButtonPlugin from './library-button';

registerPlugin('jungle-page-library-button', {
    render: LibraryButtonPlugin,
});
