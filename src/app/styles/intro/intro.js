/* Imports */
import { MediaQueryStyleSheet } from "react-native-responsive";
import { Fonts } from "@app/utils/Fonts";
/* /Imports/ */

export const intro = MediaQueryStyleSheet.create(
    {
        /* App Introduction */
        appIntroImage: {
            width: 200,
            height: 200,
        },
        appIntroText: {
            color: '#F5F5F5',
            fontSize: 20,
            fontFamily: Fonts.FiraSans
        },
        appIntroTitle: {
            fontSize: 28,
            fontFamily: Fonts.FiraSansMedium,
            color: 'white',
            backgroundColor: 'transparent',
            textAlign: 'center'
        },
        /* /App Introduction/ */
    },
    {
        "@media (min-device-width: 0) and (max-device-width: 320)": {
            appIntroImage: {
                width: 100,
                height: 100
            },
            appIntroText: {
                color: '#F5F5F5',
                fontSize: 15,
                fontFamily: Fonts.FiraSans
            },
            appIntroTitle: {
                fontSize: 25,
                fontFamily: Fonts.FiraSansMedium,
                color: 'white',
                backgroundColor: 'transparent',
                textAlign: 'center'
            },
        },
        "@media (min-device-width: 600) and (max-device-width: 1024)": {
            appIntroImage: {
                width: 300,
                height: 300
            },
            appIntroText: {
                color: '#F5F5F5',
                fontSize: 25,
                fontFamily: Fonts.FiraSans
            },
            appIntroTitle: {
                fontSize: 50,
                fontFamily: Fonts.FiraSansMedium,
                color: 'white',
                backgroundColor: 'transparent',
                textAlign: 'center'
            },
        }
    }
);
