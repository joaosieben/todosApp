import React, { Component } from 'react'
import { connect } from 'react-redux'
import { View, Text, StyleSheet, TextInput, Button, FlatList } from 'react-native'
import { updateTitle, addTodo } from '../../actions'

class TodosList extends Component {
  renderTodo = ({ item }) => {
    return (
      <Text style={styles.todo}>• {item}</Text>
    )
  }
  render() {
    const { title } = this.props
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Welcome to the Todos App!</Text>
        <View style={styles.inputContainer}>
          <TextInput style={styles.input} value={title} onChangeText={(key) => this.props.updateTitle(key)} />
          <Button title='Add Todo' onPress={() => this.props.addTodo(title)} />
        </View>
        <View style={styles.todosList}>
          <FlatList
            data={this.props.todosList}
            refreshing={this.props.loading}
            renderItem={this.renderTodo}>
          </FlatList>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    flexWrap: 'nowrap',
    paddingVertical: 90,
    backgroundColor: '#fff',
  },
  title: {
    color: '#000',
    flex: 1,
    fontSize: 20,
    textAlign: 'center',
    position: 'absolute',
    top: 100
  },
  inputContainer: { 
    flexDirection: 'column', 
    flexWrap: 'nowrap', 
    justifyContent: 'center', 
    alignItems: 'center',
    maxHeight: 150,
    width: '100%',
    paddingHorizontal: 30,
    paddingTop: 40,
    flex: 1
  },
  input: {
    height: 30,
    width: '100%',
    borderColor: '#c3c3c3',
    borderWidth: 1,
    paddingHorizontal: 5
  },
  todosList: {
    flex: 1,
    flexDirection: 'column',
    flexWrap: 'nowrap',
    width: '100%',
    paddingHorizontal: 40
  },
  todo: {
    textAlign: 'left',
    fontSize: 16
  }
})

const mapStateToProps = state => {
  const { todos } = state
  return todos
}

const mapDispatchToProps = { 
  updateTitle,
  addTodo
}

export default connect(mapStateToProps, mapDispatchToProps)(TodosList)