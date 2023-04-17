import { __ } from '@wordpress/i18n';
import { Button, Modal } from '@wordpress/components';
import { useState } from '@wordpress/element';
import { createBlock } from '@wordpress/blocks';
import { useDispatch } from '@wordpress/data';
import { PluginPostStatusInfo } from '@wordpress/edit-post';

const CustomToolbar = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const { insertBlock } = useDispatch('core/block-editor');

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    const selectComponent = (componentName) => {
        let block;

        switch (componentName) {
            case 'paragraph':
                block = createBlock('core/paragraph');
                break;
            // 在此处添加更多组件类型
            default:
                break;
        }

        if (block) {
            insertBlock(block);
        }
        closeModal();
    };

    return (
        <>
            <Button isPrimary onClick={openModal}>
                {__('添加组件', 'jungle-page')}
            </Button>
            <Modal
                title={__('选择组件', 'jungle-page')}
                onRequestClose={closeModal}
                isOpen={isModalOpen}
            >
                <ul>
                    <li>
                        <Button onClick={() => selectComponent('paragraph')}>
                            {__('段落', 'jungle-page')}
                        </Button>
                    </li>
                    {/* 在此处添加更多组件列表项 */}
                </ul>
                <Button isSecondary onClick={closeModal}>
                    {__('关闭', 'jungle-page')}
                </Button>
            </Modal>
        </>
    );
};

const CustomToolbarPlugin = () => {
    return (
        <PluginPostStatusInfo>
            <CustomToolbar />
        </PluginPostStatusInfo>
    );
};

export default CustomToolbarPlugin;
