import { registerPlugin } from '@wordpress/plugins';
import CustomToolbarPlugin from './custom-toolbar';

registerPlugin('jungle-page-custom-toolbar', {
    render: CustomToolbarPlugin,
});
