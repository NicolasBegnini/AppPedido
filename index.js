/**
 * @format
 */

import React, {useState, useEffect} from 'react';
import {AppRegistry} from 'react-native'; 
import App from './App'; 
import {name as appName} from './app.json'; 
import {DefaultTheme, Provider as PaperProvider} from 'react-native-paper';
import ProductProvider from './app/ui/providers/ProductProvider';
import CartProvider from './app/ui/providers/CartProvider';


 const theme = {  
     ...DefaultTheme, 
     colors:{ 
         ...DefaultTheme.colors, 
         primary: '#D80045'
        } 
 }

 /*const tema2 = {  
    ...DefaultTheme, 
    colors:{ 
        ...DefaultTheme.colors, 
        primary: 'red'
       } 
}
*/

 export default function Main() { 

const [value, setValue] = useState(1)
useEffect((I) => {
    setTimeout(() => {
        setValue(2)
    },3000)
})

     return ( 
        
        <PaperProvider theme={theme}> 
            <ProductProvider>
                <CartProvider>
                    <App /> 
                </CartProvider>
            </ProductProvider>
        </PaperProvider> 
     ); 
 }
 
 AppRegistry.registerComponent(appName, () => Main);