import {
  DownloadOutlined,
  RotateLeftOutlined,
  RotateRightOutlined,
  SwapOutlined,
  ZoomInOutlined,
  ZoomOutOutlined,
} from '@ant-design/icons';
import React from 'react';
import { Image, Space } from 'antd';
import {  ImageBaseURL } from '../../api/config';
import useImageError from '../../Hooks/useImageError';
import { ErrorImage } from '../../Layout/app/Const';


const ColumnsImage= ({src}:any) => {
  const imageUrl = ImageBaseURL + src || ErrorImage;
  const handleError = useImageError;
  // or you can download flipped and rotated image
  // https://codesandbox.io/s/zi-ding-yi-gong-ju-lan-antd-5-7-0-forked-c9jvmp
  const onDownload = () => {
    fetch(src)
      .then((response) => response.blob())
      .then((blob) => {
        const url = URL.createObjectURL(new Blob([blob]));
        const link = document.createElement('a');
        link.href = url;
        link.download = 'image.png';
        document.body.appendChild(link);
        link.click();
        URL.revokeObjectURL(url);
        link.remove();
      });
  };

  return (
    <Image
      width={45}
      height={45}
      src={imageUrl }
      className='p-1 mb-1 columnImage '
      preview={{
        toolbarRender: (
          _,
          {
            transform: { scale },
            actions: { onFlipY, onFlipX, onRotateLeft, onRotateRight, onZoomOut, onZoomIn },
          },
        ) => (
          <Space size={12} className="toolbar-wrapper">
            <DownloadOutlined onClick={onDownload} />
            <SwapOutlined rotate={90} onClick={onFlipY} />
            <SwapOutlined onClick={onFlipX} />
            <RotateLeftOutlined onClick={onRotateLeft} />
            <RotateRightOutlined onClick={onRotateRight} />
            <ZoomOutOutlined disabled={scale === 1} onClick={onZoomOut} />
            <ZoomInOutlined disabled={scale === 50} onClick={onZoomIn} />
          </Space>
        ),
      }}
      onError={handleError}

    />
  );
};

export default ColumnsImage;







// {
//   name: t("image"),
//   center: "true",
//   cell: (row: any) => {
//     return (
//       <ColumnsImage src={row?.image} />
//     )
//   }
// },