import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Upload, Modal, message } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import { RootState } from '../../redux/rootReducer';
import { setItemPhoto } from '../../redux/actions/creators/goods';

function getBase64(file: any) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = (error) => reject(error);
  });
}

const Pictures = () => {
  const dispatch = useDispatch();
  const [previewVisible, setPreviewVisible] = useState(false);
  const [previewImage, setPreviewImage] = useState('');
  const [previewTitle, setPreviewTitle] = useState('');
  const [fileList, setFileList] = useState([]);

  const photos = useSelector((state: RootState) => state.goods.photos);

  useEffect(() => {
    dispatch(setItemPhoto(fileList));
  }, [fileList]);

  const beforeUpload = (file: any) => {
    /*добавить тултип с статусом ошибки */
    return file.type === 'image/png' || file.type === 'image/jpg' || file.type === 'image/jpeg'
      ? true
      : Upload.LIST_IGNORE;
  };

  const dummyRequest = ({ file, onSuccess }: any) => {
    setTimeout(() => {
      onSuccess('ok');
    }, 0);
  };

  const handleCancel = () => {
    setPreviewVisible(false);
  };

  const handlePreview = async (file: any) => {
    if (!file.url && !file.preview) {
      file.preview = await getBase64(file.originFileObj);
    }

    setPreviewImage(file.url || file.preview);
    setPreviewVisible(true);
    setPreviewTitle(file.name || file.url.substring(file.url.lastIndexOf('/') + 1));
  };

  const handleChange = ({ fileList }: any) => setFileList([...fileList]);

  const uploadButton = (
    <div>
      <PlusOutlined />
      <div style={{ marginTop: 8 }}>Загрузить</div>
    </div>
  );
  return (
    <>
      <Upload
        listType='picture-card'
        //@ts-ignore
        fileList={fileList}
        onPreview={handlePreview}
        onChange={handleChange}
        customRequest={dummyRequest}
        beforeUpload={beforeUpload}
      >
        {fileList.length >= 5 ? null : uploadButton}
      </Upload>
      <Modal visible={previewVisible} title={previewTitle} footer={null} onCancel={handleCancel}>
        <img alt='example' style={{ width: '100%' }} src={previewImage} />
      </Modal>
    </>
  );
};

export default Pictures;
