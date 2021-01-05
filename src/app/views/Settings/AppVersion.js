/* Imports */
import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Content } from 'native-base';
import { styles } from '@app/styles/config';
import { responsives } from '@app/styles/config';
import { withTheme } from '@app/theme/themeProvider';
import { AntDesign, FontAwesome, Entypo } from '@app/utils/Icons';
/* /Imports/ */

class AppVersion extends Component {
    /* Navigation Options Like (Header, Title, Menu, Icon, Style) */
    static navigationOptions = ({ navigation, screenProps }) => {
        const custom = styles(screenProps);
        const responsive = responsives(screenProps);

        return {
            title: "Версия на приложението",
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
                        Условия за ползване:
                    </Text>
                    <Text style={responsive.settingsAnswer}>
                        <FontAwesome name="warning" size={20} color={'#22364F'}/>{' '}
                        Когато извършвате някое от действията в приложението ни може да има леко забавяне, молим ви да изчакате малко, ако ли не рестартирайте приложението. Ако приложението не работи правилно или откриете грешка, молим да се свържете с нас!
                    </Text>
                </View>
                <View style={responsive.settingsOtherView}>
                    <Text style={responsive.settingsQuestion}>
                        Версия на приложението:
                    </Text>
                    <Text style={responsive.settingsAnswer}>
                        <Entypo name="info-with-circle" size={20} color={'#22364F'}/>{' '}
                        v3.0
                    </Text>
                </View>
                <View style={responsive.settingsOtherView}>
                    <Text style={responsive.settingsQuestion}>
                        Дата на публикуване:
                    </Text>
                    <Text style={responsive.settingsAnswer}>
                        <FontAwesome name="calendar-o" size={20} color={'#22364F'}/>{' '}
                        30 Ноември 2019 - 30/11/2019
                    </Text>
                </View>
            </Content>
        );
    }
    /* /Render Method - Is Place Where You Can View All Content Of The Page/ */
}

/* Exports */
export default withTheme(AppVersion);
/* /Exports/ */
