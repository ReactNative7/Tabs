import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Container, Header, Content, Tab, Tabs } from 'native-base';
export default class App extends React.Component {
render() {
return (
<Container>
<Header hasTabs/>
<Tabs>
<Tab heading="Home">
<Text style={{fontSize: 30, marginVertical: 30, textAlign:'center'}}>My Homepage</Text>
<Content>
<Text style={{padding:15}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas dapibus sit amet felis sit amet commodo. Cras aliquet risus lorem, et porta massa lacinia ut. Curabitur pharetra, metus sit amet vestibulum cursus, nisi elit pulvinar augue, quis consectetur enim orci ac lectus. Maecenas placerat metus id turpis iaculis ornare. Phasellus vehicula felis vitae enim dignissim, in condimentum neque malesuada. Duis pharetra euismod porttitor. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Fusce at nisl non massa luctus pretium. Mauris bibendum quis felis quis tristique. Quisque pulvinar euismod varius. Morbi et fringilla augue, ac pharetra tellus. Ut pretium dapibus metus sit amet malesuada. Sed quis massa ex. Sed auctor posuere nulla et luctus.</Text>
</Content>
</Tab>
<Tab heading="Services">
<Text style={{fontSize: 30, marginVertical: 30, textAlign:'center'}}>My Services Page</Text>
</Tab>
<Tab heading="Contact">
<Text style={{fontSize: 30, marginVertical: 30, textAlign:'center'}}>My Contact Page</Text>
</Tab>
</Tabs>
</Container>
);
}
}