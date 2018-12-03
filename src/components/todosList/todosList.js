import React, { Component } from 'react'
import { connect } from 'react-redux'
import { View, Text, StyleSheet, TextInput, TouchableOpacity, FlatList } from 'react-native'
import { updateTitle, addTodo, toggleTodo } from '../../actions'

class TodosList extends Component {
  render() {
    const { title } = this.props
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Welcome to the Todos App!</Text>
        <View style={styles.inputContainer}>
          <TextInput style={styles.input} value={title} onChangeText={(key) => this.props.updateTitle(key)} />
          <TouchableOpacity style={styles.addTodo} title='Add Todo' onPress={() => this.props.addTodo(title)}>
            <Text style={styles.addTodoText}>Add Todo</Text>
          </TouchableOpacity>
        </View>
        
        <View style={styles.todosList}>
          {
            this.props.todosList.map((todo, index) => {
              return (
                <TouchableOpacity onPress={() => this.props.toggleTodo(index)} key={index} >
                  <Text style={todo.done ? styles.doneTodo : styles.todo}>• {todo.title}</Text>
                </TouchableOpacity>
              )
            })
          }
        </View>

        <View style={styles.filters}>
          <Text style={styles.filtersText}>Filter by: </Text>
          <TouchableOpacity><Text style={styles.filtersText}>All</Text></TouchableOpacity>
          <Text style={styles.filtersText}>, </Text>
          <TouchableOpacity><Text style={styles.filtersText}>Completed</Text></TouchableOpacity>
          <Text style={styles.filtersText}> or </Text><TouchableOpacity>
          <Text style={styles.filtersText}>Not completed</Text></TouchableOpacity><Text style={styles.filtersText}>.</Text>
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
    backgroundColor: '#4F6D7A',
  },
  title: {
    color: '#F5FCFF',
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
    paddingHorizontal: 5,
    marginTop: 20,
    color: '#F5FCFF'
  },
  addTodo: {
    borderColor: '#F5FCFF',
    borderWidth: 1,
    borderRadius: 3,
    marginVertical: 20,
    padding: 10
  },
  addTodoText: {
    color: '#F5FCFF',
    fontSize: 16
  },
  todosList: {
    flex: 1,
    flexDirection: 'column',
    flexWrap: 'nowrap',
    width: '100%',
    paddingHorizontal: 30
  },
  todo: {
    textAlign: 'left',
    fontSize: 16,
    color: '#F5FCFF'
  },
  doneTodo: {
    textAlign: 'left',
    fontSize: 16,
    color: '#F5FCFF',
    textDecorationLine: 'line-through',
    textDecorationStyle: 'solid'
  },
  filters: {
    width: '100%',
    paddingHorizontal: 30,
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'flex-start',
    justifyContent: 'flex-start'
  },
  filtersText: {
    color: '#F5FCFF',
    fontSize: 16
  }
})

const mapStateToProps = state => {
  const { todos } = state
  return todos
}

const mapDispatchToProps = { 
  updateTitle,
  addTodo,
  toggleTodo
}

export default connect(mapStateToProps, mapDispatchToProps)(TodosList)