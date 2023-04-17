import { Button, Modal } from '@wordpress/components';
import { useState } from '@wordpress/element';
import { PluginDocumentSettingPanel } from '@wordpress/edit-post';

const LibraryButton = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    return (
        <>
            <Button isPrimary onClick={openModal}>
                添加组件
            </Button>
            <Modal
                title="选择组件"
                onRequestClose={closeModal}
                isOpen={isModalOpen}
            >
                {/* 在此处添加组件列表，您可以根据需要自定义 */}
                <p>在这里列出可用的组件</p>
                <Button isSecondary onClick={closeModal}>
                    关闭
                </Button>
            </Modal>
        </>
    );
};

const LibraryButtonPlugin = () => {
    return (
        <PluginDocumentSettingPanel name="jungle-page-library-button" title="添加组件">
            <LibraryButton />
        </PluginDocumentSettingPanel>
    );
};

export default LibraryButtonPlugin;
