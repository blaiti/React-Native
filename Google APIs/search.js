import React, {Component} from 'react';
import { View, TouchableOpacity, ActivityIndicator, ScrollView, TextInput, FlatList, Keyboard, StyleSheet } from 'react-native';
import { Header } from 'react-native-elements';
import * as theme from '../constants/themes';
import SearchBookCard from '../components/searchBookCard';

export default class Search extends Component {
  constructor(props) {
    super(props);
    this.books = [],
    this.state = {
        bookTitle: '',
        isLoading: false,
        errorMessage: '',
    };
  }
  SearchBook() {
    Keyboard.dismiss();
    this.setState({ isLoading: true })
    const bookTitle = this.state.bookTitle;
    for (var i=0; i<bookTitle.length; i++) {
      if (bookTitle[i] == ' ') {
        bookTitle[i] = '+';
      }
    }
    if (bookTitle.length != 0) {
      fetch('https://www.googleapis.com/books/v1/volumes?q=' + bookTitle)
      .then((response) => response.json())
      .then((responseData) => {
          if (responseData.items) {
            this.books = responseData.items;
            this.setState({ isLoading: false });
          } else {
              this.setState({ errorMessage: 'No results found', isLoading: false });
          }
      })
      .catch(error =>
          this.setState({
              isLoading: false,
              errorMessage: error 
          }))
      .done();
    }
    else {
      alert('You must write a book title !');
    }
  }
  
  keyExtractor = (item, index) => index.toString()

  renderItem = ({ item }) => (
    <TouchableOpacity 
      onPress={() => this.props.navigation.navigate('BookPage', 
        { picture: item.volumeInfo.imageLinks.thumbnail ,
          title: item.volumeInfo.title, 
          description: item.volumeInfo.description,
          date: item.volumeInfo.publishedDate,
          author: item.volumeInfo.authors[0],
          pages: item.volumeInfo.pageCount,
          categories: item.volumeInfo.categories })}> 
      <SearchBookCard
      title={item.volumeInfo.title}
      vote={item.volumeInfo.averageRating}
      description={item.volumeInfo.description}
      date={item.volumeInfo.publishedDate}
      picture={item.volumeInfo.imageLinks.thumbnail} />
    </TouchableOpacity>
  )

  render() {
    if (this.state.isLoading) {
      return (
        <View style={styles.container}>
          <Header
            centerComponent={
              <TextInput
                placeholder='Search..'
                style={styles.searchInput}
                placeholderTextColor='#7F7F7F'
                returnKeyType='search'
                onChangeText={ (bookTitle) => this.setState({bookTitle})} />}
            placement='left'
            rightComponent={{ icon: 'search', color: '#FFAEA5', onPress: () => this.SearchBook() }}
            statusBarProps={{ translucent: true }}
            backgroundColor='#ffffff'
          />
          <View style={{marginTop: 15, alignItems: 'center'}}>
            <ActivityIndicator size="large" color="#e74c3c" />
          </View>
        </View>
      );
    }
    else {
      return (
        <View style={styles.container}>
          <Header
            centerComponent={
              <TextInput
                placeholder='Search..'
                style={styles.searchInput}
                placeholderTextColor='#7F7F7F'
                returnKeyType='search'
                onChangeText={ (bookTitle) => this.setState({bookTitle})} />}
            placement='left'
            rightComponent={{ icon: 'search', color: '#e74c3c', onPress: () => this.SearchBook() }}
            statusBarProps={{ translucent: true }}
            backgroundColor='#ffffff'
          />
          <ScrollView>
            <FlatList
              keyExtractor={this.keyExtractor}
              data={this.books}
              renderItem={this.renderItem}
            />
          </ScrollView>
        </View>
      );
    }
  }
}

const styles = StyleSheet.create({
  container: {
      flex: 1,
      backgroundColor: theme.colors.white,
  },
  textInput: {
    borderColor: '#FFAEA5', 
    borderWidth: 1,
    borderRadius: 15,
    padding: 10,  
    color: theme.colors.black, 
    backgroundColor: theme.colors.white,
  }
});