import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import * as theme from './theme';

export default class Calcul extends React.Component{
    constructor(props) {
        super(props),
        this.state = {
            grayText: '',
            blueText: '0'
        }
    }

    calculate() {
        const {grayText, blueText} = this.state;

        equation = grayText + blueText;

        this.setState({grayText: equation});

        result = eval(equation);
        this.setState({blueText: result});
    }

    render() {
        return(
            <View style={styles.container}>
                <View style={styles.resultContainer}>
                    <View style={styles.grayResultContainer}>
                        <Text style={styles.grayResultText}>{this.state.grayText}</Text>
                    </View>

                    <View style={styles.blueResultContainer}>
                        <Text style={styles.blueResultText}>{this.state.blueText}</Text>
                    </View>
                </View>

                <View style={styles.buttonViewContainer}>
                    <View style={styles.buttonLineContainer}>
                        <TouchableOpacity 
                            style={styles.buttonContainer}
                            onPress={() => this.setState({grayText: '', blueText: '0'})}>
                            <Text style={styles.buttonText}>C</Text>
                        </TouchableOpacity>
                        <TouchableOpacity 
                            style={styles.buttonContainer}
                            onPress={() => this.setState({grayText: this.state.grayText + this.state.blueText + '/', blueText: '0'})}>
                            <Text style={styles.buttonText}>/</Text>
                        </TouchableOpacity>
                        <TouchableOpacity 
                            style={styles.buttonContainer}
                            onPress={() => this.setState({grayText: this.state.grayText + this.state.blueText + '%', blueText: '0'})}>
                            <Text style={styles.buttonText}>%</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.buttonContainer}>
                            <Text style={styles.buttonText}>+-</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={[styles.buttonLineContainer, {backgroundColor: theme.colors.midnightBlue}]}>
                        <TouchableOpacity 
                            style={styles.buttonContainer}
                            onPress={() => this.setState({blueText: this.state.blueText+'7'})}>
                            <Text style={{color: theme.colors.white, fontSize: 20}}>7</Text>
                        </TouchableOpacity>

                        <TouchableOpacity 
                            style={styles.buttonContainer}
                            onPress={() => this.setState({blueText: this.state.blueText+'8'})}>
                            <Text style={{color: theme.colors.white, fontSize: 20}}>8</Text>
                        </TouchableOpacity>

                        <TouchableOpacity 
                            style={styles.buttonContainer}
                            onPress={() => this.setState({blueText: this.state.blueText+'9'})}>
                            <Text style={{color: theme.colors.white, fontSize: 20}}>9</Text>
                        </TouchableOpacity>

                        <TouchableOpacity 
                            style={styles.buttonContainer}
                            onPress={() => this.setState({grayText: this.state.grayText + this.state.blueText + '*', blueText: '0'})}>
                            <Text style={{color: theme.colors.white, fontSize: 20}}>x</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.buttonLineContainer}>
                        <TouchableOpacity 
                            style={styles.buttonContainer}
                            onPress={() => this.setState({blueText: this.state.blueText+'4'})}>
                            <Text style={styles.buttonText}>4</Text>
                        </TouchableOpacity>

                        <TouchableOpacity 
                            style={styles.buttonContainer}
                            onPress={() => this.setState({blueText: this.state.blueText+'5'})}>
                            <Text style={styles.buttonText}>5</Text>
                        </TouchableOpacity>

                        <TouchableOpacity 
                            style={styles.buttonContainer}
                            onPress={() => this.setState({blueText: this.state.blueText+'6'})}>
                            <Text style={styles.buttonText}>6</Text>
                        </TouchableOpacity>

                        <TouchableOpacity 
                            style={[styles.buttonContainer, {backgroundColor: theme.colors.midnightBlue}]}
                            onPress={() => this.setState({grayText: this.state.grayText + this.state.blueText + '-', blueText: '0'})}>
                            <Text style={{color: theme.colors.white, fontSize: 20}}>-</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.buttonLineContainer}>
                        <TouchableOpacity 
                            style={styles.buttonContainer}
                            onPress={() => this.setState({blueText: this.state.blueText+'1'})}>
                            <Text style={styles.buttonText}>1</Text>
                        </TouchableOpacity>

                        <TouchableOpacity 
                            style={styles.buttonContainer}
                            onPress={() => this.setState({blueText: this.state.blueText+'2'})}>
                            <Text style={styles.buttonText}>2</Text>
                        </TouchableOpacity>

                        <TouchableOpacity 
                            style={styles.buttonContainer}
                            onPress={() => this.setState({blueText: this.state.blueText+'3'})}>
                            <Text style={styles.buttonText}>3</Text>
                        </TouchableOpacity>

                        <TouchableOpacity 
                            style={[styles.buttonContainer, {backgroundColor: theme.colors.midnightBlue}]}
                            onPress={() => this.setState({grayText: this.state.grayText + this.state.blueText + '+', blueText: '0'})}>
                            <Text style={{color: theme.colors.white, fontSize: 20}}>+</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.buttonLineContainer}>
                        <TouchableOpacity 
                            style={styles.buttonContainer}
                            onPress={() => this.setState({blueText: this.state.blueText+'.'})}>
                            <Text style={styles.buttonText}>.</Text>
                        </TouchableOpacity>

                        <TouchableOpacity 
                            style={styles.buttonContainer}
                            onPress={() => this.setState({blueText: this.state.blueText+'0'})}>
                            <Text style={styles.buttonText}>0</Text>
                        </TouchableOpacity>

                        <TouchableOpacity 
                            style={styles.buttonContainer}
                            onPress={() => this.setState({blueText: this.state.blueText+'00'})}>
                            <Text style={styles.buttonText}>00</Text>
                        </TouchableOpacity>

                        <TouchableOpacity 
                            style={[styles.buttonContainer, {backgroundColor: theme.colors.midnightBlue}]}
                            onPress={() => this.calculate()} >
                            <Text style={{color: theme.colors.white, fontSize: 20}}>=</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    resultContainer: {
        flex: 1,
        backgroundColor: theme.colors.white
    },
    grayResultContainer: {
        flex: 1,
        padding: 10,
        alignItems: 'flex-end',
        justifyContent: 'center'
    },
    grayResultText: {
        fontSize: 25,
        color: theme.colors.deepKoamaro
    },
    blueResultContainer: {
        flex: 1,
        padding: 10,
        alignItems: 'flex-end',
        justifyContent: 'center'
    },
    blueResultText: {
        fontSize: 40,
        color: theme.colors.midnightBlue
    },
    buttonViewContainer: {
        flex: 2,
    },
    buttonLineContainer: {
        flex: 1,
        flexDirection: 'row'
    },
    buttonContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    buttonText: {
        color: theme.colors.midnightBlue,
        fontSize: 20
    }
});
