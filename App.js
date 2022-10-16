import React, {useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Keyboard, KeyboardAvoidingView, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import Task  from './app/Task';

export default function App() {

  const [task, setTask] = useState(); 

  const [taskItems, setTaskItems] = useState([]);

  const handleAddTask = () => {
    Keyboard.dismiss();
    setTaskItems([...taskItems], task)
    setTask(null);
  }

  
  return (
    <View style = {styles.container}>
      <ScrollView
        contentContainerStyle={{
          flexGrow: 1
        }}
        keyboardShouldPersistTaps='handled' >

        <View style = {styles.logo}>  
          <Image 
          source={require('./assets/Memoire.png')}/>
          <StatusBar hidden />
        </View>

        <View style={styles.tasks}>
          <Text style={styles.sectionTitle}> Your Tasks : </Text>

          <View style={styles.items}>
            {}
            {
              taskItems.map((item, index) => {
                return <Task key={index}  text={JSON.stringify(item)} /> 
              })
            }
          </View>
        </View>

      </ScrollView>
      
    <KeyboardAvoidingView
      style={styles.gabunginTools} >

      <TextInput style={styles.input} placeholder={"Write what you need to-do"}
      value={task} onChange={text => setTask(text)} />

      <TouchableOpacity onPress={() => handleAddTask()}>
        <View style={styles.tambahin}>
          <Text style={styles.inserttext}> + </Text>
        </View>

      </TouchableOpacity>

    </KeyboardAvoidingView>

    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E9E6FF',
  },
  logo: {
    alignItems: "center",
    justifyContent: 'center',
    paddingVertical: 20,
    backgroundColor: '#E9E6FF',
  },
  tasks: {
    paddingTop: 17,
    paddingHorizontal: 10
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    paddingLeft: 10,
  },
  items: {
    marginTop: 5,
    padding: 10,
  },
  gabunginTools: {
    position: 'absolute',
    bottom: 40,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingHorizontal: 10,
  },
  input: {
    borderWidth: 1,
    width: 260,
    padding: 10,
    backgroundColor: '#fff',
    borderRadius: 60,
  },
  tambahin: {
    width: 50,
    height: 50,
    borderWidth: 1,
    borderRadius: 50,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  inserttext: {
    fontSize: 25,
  },
        
});
