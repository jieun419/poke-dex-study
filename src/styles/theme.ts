import {DefaultTheme} from 'styled-components/native';

const dark: DefaultTheme = {
    color: {
        main: '#fff',
        background:'#fff'
    }
}

const light: DefaultTheme = {
    ...dark,
    color: {
        main: '#444',
        background:'#888'
    }
}

export {dark, light};