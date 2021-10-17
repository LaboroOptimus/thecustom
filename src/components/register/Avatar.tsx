import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Upload, Modal } from 'antd';
import { setAvatar } from '../../redux/actions/creators/service'
import ImgCrop from 'antd-img-crop';

function getBase64(file: any) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = (error) => reject(error);
  });
}

const Avatar = () => {
  const dispatch = useDispatch();
  const [fileList, setFileList] = useState([]);
  const [previewVisible, setPreviewVisible] = useState(false);
  const [previewImage, setPreviewImage] = useState('');
  const [previewTitle, setPreviewTitle] = useState('');

  useEffect(() => {
    dispatch(setAvatar(fileList[0]));
  }, [fileList]);

  const onChange = ({ fileList: newFileList }: any) => {
    setFileList(newFileList);
  };

  const beforeUpload = async (file: any) => {
    const isJpgOrPng =
      file.type === 'image/png' || file.type === 'image/jpg' || file.type === 'image/jpeg';
    return isJpgOrPng ? true : Upload.LIST_IGNORE;
  };

  const dummyRequest = ({ file, onSuccess }: any) => {
    console.log('dummyRequest');
    setTimeout(() => {
      onSuccess('ok');
    }, 0);
  };

  const onPreview = async (file: any) => {
    let src = file.url;
    if (!src) {
      src = await new Promise((resolve) => {
        const reader = new FileReader();
        reader.readAsDataURL(file.originFileObj);
        reader.onload = () => resolve(reader.result);
      });
    }
    const image = new Image();
    image.src = src;
    const imgWindow = window.open(src);
    imgWindow.document.write(image.outerHTML);
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

  return (
    <>
      <ImgCrop rotate>
        <Upload
          listType='picture-card'
          fileList={fileList}
          onChange={onChange}
          onPreview={onPreview}
          customRequest={dummyRequest}
          beforeUpload={beforeUpload}
        >
          {fileList.length < 1 && 'Загрузить'}
        </Upload>
      </ImgCrop>
      <Modal visible={previewVisible} footer={null} onCancel={handleCancel}>
        <img alt='avatar' style={{ width: '100%' }} src={previewImage} />
      </Modal>
    </>
  );
};

export default Avatar;
