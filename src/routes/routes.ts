
import { icon } from "../component/Image";
import SelectLocation from "../component/SelectLocation";
import TabNavigator from "../navigators/TabNavigator";
import AboutUsScreen from "../screen/profile/AboutUsScreen";
import EditProfile from "../screen/profile/EditProfile";
import NotificatioScreen from "../screen/profile/NotificationSetting";
import Privacy from "../screen/profile/Privacy";
import ScreenNameEnum from "./screenName.enum";


const _routes = {
  REGISTRATION_ROUTE: [
    {
      name: ScreenNameEnum.SPLASH_SCREEN,
      Component: Splash,
    },
    
    
    // {
    //   name: ScreenNameEnum.BOTTAM_TAB,
    //   Component: TabNavigator,
    // },
    
    {
      name: ScreenNameEnum.NOTIFICATION_SETTING,
      Component: NotificatioScreen,
    },
    {
      name: ScreenNameEnum.ABOUT_SCREEN,
      Component: AboutUsScreen,
    },
    {
      name: ScreenNameEnum.PRIVACY_POLICY,
      Component: Privacy,
    },
    {
      name: ScreenNameEnum.SELECT_LOCATION,
      Component: SelectLocation,
    },
    

  ],





  BOTTOM_TAB: [
    // {
    //   name: ScreenNameEnum.HOME_SCREEN,
    //   Component: Home,
    //   active: icon.home,
    //   logo: icon.home1,
    //   lable: 'Home'
    // },
    // {
    //   name: ScreenNameEnum.BOOKING_SCREEN,
    //   Component: Booking,
    //   active: icon.booking,
    //   logo: icon.booking,
    //   lable: 'Booking'
    // },
    // {
    //   name: ScreenNameEnum.SUPPORT_SCREEN,
    //   Component: TicketList,
    //   active: icon.support,
    //   logo: icon.support,
    //   lable: 'Help'
    // },
    // {
    //   name: ScreenNameEnum.REWARD_SCREEN,
    //   Component: Reward,
    //   active: icon.reward,
    //   logo: icon.reward,
    //   lable: 'Reward'
    // },
    // {
    //   name: ScreenNameEnum.PROFILE_SCREEN,
    //   Component: Profile,
    //   active: icon.profile,
    //   logo: icon.profile,
    //   lable: 'Profile'
    // },



  ]
  ,


};

export default _routes;
