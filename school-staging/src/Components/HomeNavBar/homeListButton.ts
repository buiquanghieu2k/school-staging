import ScreenNames from '@Constants/ScreenNames';
import {translate} from '@Languages/Translate';
import {IHomeListButton} from '@Types/IHomeListButton';

const homeListButton: IHomeListButton[] = [
  // {
  //   id: 1,
  //   name: translate('home.Checkin'),
  //   assetName: 'checkin',
  //   screenName: ScreenNames.Checkin,
  // },
  {
    id: 2,
    name: translate('home.TeacherList'),
    assetName: 'payment',
    screenName: ScreenNames.TeacherList,
  },
  {
    id: 3,
    name: translate('home.TopicList'),
    assetName: 'tuition',
    screenName: ScreenNames.TopicList,
  },
  {
    id: 4,
    name: translate('home.Conversation'),
    assetName: 'checkin',
    screenName: ScreenNames.ConversationList,
  },
  // {
  //   id: 4,
  //   name: translate('home.InOut2Line'),
  //   assetName: 'inOut',
  //   screenName: '',
  // },
  // {
  //   id: 5,
  //   name: translate('home.InternalAccount2Line'),
  //   assetName: 'internal',
  //   screenName: '',
  // },
];

export default homeListButton;
