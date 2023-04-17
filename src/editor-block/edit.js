
import { __ } from '@wordpress/i18n';
import { BlockEditorProvider, BlockList, createBlock } from '@wordpress/block-editor';
import { Button, Modal } from '@wordpress/components';
import { useState } from '@wordpress/element';
import './editor.scss';
export default function Edit() {
    const [blocks, setBlocks] = useState([]);
    const [isModalOpen, setIsModalOpen] = useState(false);

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
            setBlocks([...blocks, block]);
        }
        closeModal();
    };
    return (
        <div className="editor">
            <BlockEditorProvider
                value={blocks}
                onInput={setBlocks}
                onChange={setBlocks}
            >
                <div className="editor__header">
                    {/* 添加按钮 */}
                    <Button isPrimary onClick={openModal}>
                        {__('添加组件', 'jungle-page')}
                    </Button>

                    {/* 添加弹窗 */}
                    <Modal
                        title={__('选择组件', 'jungle-page')}
                        onRequestClose={closeModal}
                        isOpen={isModalOpen}
                    >
                        {/* 添加组件列表 */}
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
                </div>
                <div className="editor__content">
                    <BlockList />
                </div>
            </BlockEditorProvider>
        </div>
    );
}
