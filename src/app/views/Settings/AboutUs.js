/* Imports */
import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Content } from 'native-base';
import { styles } from '@app/styles/config';
import { responsives } from '@app/styles/config';
import { withTheme } from '@app/theme/themeProvider';
import { AntDesign, FontAwesome, Entypo } from '@app/utils/Icons';
/* /Imports/ */

class AboutUs extends Component {
    /* Navigation Options Like (Header, Title, Menu, Icon, Style) */
    static navigationOptions = ({ navigation, screenProps }) => {
        const custom = styles(screenProps);
        const responsive = responsives(screenProps);

        return {
            title: "За нас",
            headerStyle: responsive.headerStyle,
            headerTitleStyle: responsive.headerTitleStyle,
            headerLeft: <AntDesign name="arrowleft" size={24} color="#F5F5F5" onPress={() => { navigation.navigate('Settings') }} style={custom.headerLeft}/>
        };
    };
    /* /Navigation Options Like (Header, Title, Menu, Icon, Style)/ */

    /* Render Method - Is Place Where You Can View All Content Of The Page */
    render() {
        const custom = styles(this.props);
        const responsive = responsives(this.props);

        return (
            <Content style={custom.content}>
                <View style={responsive.settingsFirstView}>
                    <Text style={responsive.settingsQuestion}>
                        Кои сме ние?
                    </Text>
                    <Text style={responsive.settingsAnswer}>
                        Ние сме ученици на Професионална гимназия по икономика - гр.Перник.
                        Специалност - Икономическа информатика.
                    </Text>
                </View>
                <View style={responsive.settingsOtherView}>
                    <Text style={responsive.settingsQuestion}>
                        Имейл:
                    </Text>
                    <Text style={responsive.settingsAnswer}>
                        takeandreturn@gmail.com
                    </Text>
                </View>
                <View style={responsive.settingsOtherView}>
                    <Text style={responsive.settingsQuestion}>
                        Къде да ни намерите?
                    </Text>
                    <Text style={responsive.settingsAnswer}>
                        ПГИ Перник 2302, гр. Перник, ул. Г. Мамарчев pgi_pernik@abv.bg
                    </Text>
                </View>
            </Content>
        );
    }
    /* /Render Method - Is Place Where You Can View All Content Of The Page/ */
}

/* Exports */
export default withTheme(AboutUs);
/* /Exports/ */
