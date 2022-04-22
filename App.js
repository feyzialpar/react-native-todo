import React,  {useState, useEffect }  from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, KeyboardAvoidingView, ScrollView, Keyboard, Image} from 'react-native';

import  Task from './components/Tasks';

export default function App() {

  const [date, setDate] = useState(null);
  useEffect(() => {
    let today = new Date();
    let date = today.getDate()+'/'+(today.getMonth()+1)+'/'+today.getFullYear();
    setDate(date);
  }, []);

  const [task, setTask] = useState();
  const [taskItems, setTaskItems] = useState([]);

  const handleAddTask = () => {
    Keyboard.dismiss();
    setTaskItems([...taskItems, task])
    setTask(null);
  }

  const completeTask = (index) => {
    let itemsCopy = [...taskItems];
    itemsCopy.splice(index, 1);
    setTaskItems(itemsCopy)
  }

  return (
    <View style={styles.container}>
    <ScrollView
      contentContainerStyle={{
        flexGrow: 1
      }}
      keyboardShouldPersistTaps='handled'
    >

      <View style={styles.titleArea}>
        <Text style={styles.tasksTitle}>My Tasks</Text>
        </View>

        <TouchableOpacity> 
        <View>
          <Image source={require('./img/user.png')} style={styles.user}/>  
        </View>
        </TouchableOpacity>
          <Text style={styles.date}>{}  {date}</Text>
        
        <View style={styles.items}>
          {
            taskItems.map((item, index) => {
              return (
                <TouchableOpacity key={index}  onPress={() => completeTask(index)}>
                  <Task text={item} /> 
                </TouchableOpacity>
              )
            })
          }
        </View>
      </ScrollView>
      
      <KeyboardAvoidingView 
          behavior={Platform.OS === "android" ? "padding" : "height"}
          style={styles.textTaskArea}>

        <TextInput style={styles.input} placeholder={'Add new task'}    // OK
          value={task} onChangeText={text => setTask(text)}/>

        <TouchableOpacity onPress={() => handleAddTask()}> 
          <View>

          <Image source={require('./img/add.png')}
            style={styles.AddIcon}/>  

          </View>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:'#FBFCFD',
    },

    titleArea: {
        paddingTop: 50,
        paddingHorizontal: 20,
        backgroundColor: '#83AAF3',
    }, 

    tasksTitle: { // My Tasks
        fontSize:24,
        fontWeight: 'bold',
        marginTop:20,
        marginBottom:10,
        color: 'white',
    },

    items: {
        marginTop: 20,
    },

    textTaskArea: {
    position: 'absolute',
    bottom: 60,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },

  input: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: '#FFF',
    borderRadius: 10,
    borderColor: 'white',
    borderWidth: 1,
    width: 250,
    marginTop:0,
    borderColor: 'black'
    
  },

  AddIcon: {
    width: 50,
    height: 50,
  },

  user: {
    width: 45,
    height: 45,
    marginHorizontal: 295,
    marginVertical: -50,
  },

  date: {
    marginHorizontal:10,
    marginVertical: 10,
    fontSize: 16,
    fontWeight: 'bold',
    color: 'black'
  },

});

