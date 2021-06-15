import React from 'react';
import { StyleSheet, TouchableOpacity, TextInput, View, Text, Dimensions } from 'react-native';
import { Formik } from 'formik';
import * as yup from 'yup';
import {getRealm} from '../database/getRealmApp';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const formSchema = yup.object({
    author: yup.string()
        .required()
        .min(4),
    category: yup.string()
        .required()
        .min(4),
    title: yup.string()
        .required()
        .min(4)
})

export default EditScreen = () => {

    return (
            <Formik
                initialValues={{ author: '', category: '', title: '' }}
                validationSchema={formSchema}
                onSubmit={(values) => {
                    realm.write((props) => {
                        const Book = realm.create('Book', {
                            author: props.values.author,
                            category: props.values.category,
                            title: props.values.title
                        })
                    })
                    console.log(values);
                    console.log(book);
                }}
            >
                {(props) => (
                    <View style={styles.formContainer}>
                        <Text style={styles.inputLabel}>Auteur</Text>
                        <TextInput 
                        style={styles.input}
                        placeholder='Dan Brown'
                        placeholderTextColor='#F4ECE2'
                        onChangeText={props.handleChange('author')}
                        value={props.values.author}
                        />
                        <Text style={styles.errorText}>{props.errors.author}</Text>

                        <Text style={styles.inputLabel}>Catégorie</Text>
                        <TextInput 
                        style={styles.input}
                        placeholder='Thriller'
                        placeholderTextColor='#F4ECE2'
                        onChangeText={props.handleChange('category')}
                        value={props.values.category}
                        />
                        <Text style={styles.errorText}>{props.errors.category}</Text>

                        <Text style={styles.inputLabel}>Titre</Text>
                        <TextInput 
                        style={styles.input}
                        placeholder='Da Vinci Code'
                        placeholderTextColor='#F4ECE2'
                        onChangeText={props.handleChange('title')}
                        value={props.values.titre}
                        />
                        <Text style={styles.errorText}>{props.errors.title}</Text>

                        <TouchableOpacity style={styles.touchableStyle} onPress={props.handleSubmit}>
                            <Text style={styles.touchableLabel}>Ajouter</Text>
                        </TouchableOpacity>
                    </View>
                )}
            </Formik>

    );

}

const styles = StyleSheet.create({
    
    formContainer: {
        flex: 1,
        padding: 20,
        backgroundColor: 'rgba(244, 236, 226, 0.17)'
    },

    input: {
        borderWidth: 1,
        borderRadius: 5,
        padding: 10,
        fontSize: 18,
        borderColor: '#CDA97A',
        marginBottom: 30,
    },

    inputLabel: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#CDA97A',
        textAlign: 'center',
        marginBottom: 10
    },

    touchableStyle: {
        backgroundColor: '#3B2D2B',
        alignItems: 'center',
        paddingVertical: 20,
        borderRadius: 40
    },

    touchableLabel: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#CDA97A'
    },

    errorText: {
        marginTop: -30,
        color: '#91121D',
        fontSize: 18,
        marginBottom: 20
    }

})