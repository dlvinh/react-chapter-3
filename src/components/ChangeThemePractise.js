import React, { Component } from 'react'
import { ThemeProvider } from 'styled-components'
import { Button, DivStyled } from '../styledComponents/StyledButton'

export default class ChangeThemePractise extends Component {

    
    darkTheme = {
        backgroundColor: "#041C32",
        color: "#ffffff"
    }
    lightTheme = {
        backgroundColor: "#ffffff",
        color: "#041C32"
    }
    state = {
        themeStatus: 1, // 1 is dark and 2 is light
        currentTheme: this.darkTheme
    }


    onChangeThemeHandler = () => {
        console.log(this.state.themeStatus);
        let newTheme = "";
        let newStatus = "";
        if (this.state.themeStatus === 1) {
            newTheme = this.darkTheme;
            newStatus = 2;
        };
        if (this.state.themeStatus === 2){
            newTheme = this.lightTheme;
            newStatus = 1;
        };

        this.setState({
            themeStatus: newStatus,
            currentTheme: newTheme
        })
    }
    abc ={
        backgroundColor: "#041C32",
        color: "#ffffff"
    }

    // Binding props to styled components here is darkthem




    render() {
        return (
            <div className='container'>
                <h2>ThemeProvider Practise</h2>
                <ThemeProvider theme={this.state.currentTheme}>
                    <Button onClick={this.onChangeThemeHandler}>  <i className="fa fa-moon"></i> {this.state.themeStatus === 1 ? "Dark" : "Light"}</Button>
                    <DivStyled>
                        Using ThemeProvide of styled components help switching themes easier
                    </DivStyled>
                </ThemeProvider>

            </div>
        )
    }
}
