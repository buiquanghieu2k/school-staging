import {Assets} from 'react-native-ui-lib';

Assets.loadAssetsGroup('home', {
  checkin: require('@Assets/Image/DiemDanh.png'),
  payment: require('@Assets/Image/ThanhToanDienTu.png'),
  tuition: require('@Assets/Image/ThanhToanHocPhi.png'),
  inOut: require('@Assets/Image/XacThucRaVao.png'),
  qr: require('@Assets/Image/DinhDanhTaiKhoan.png'),
  internal: require('@Assets/Image/TaiKhoanNoiBo.png'),
});

Assets.loadAssetsGroup('main', {
  defaultAvatar: require('@Assets/Image/Avatar.png'),
  logo: require('@Assets/Image/LogoWithoutBackground.png'),
  noAvatar: require('@Assets/Image/NoAvatar.png'),
});
