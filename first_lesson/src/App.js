import React, { Component, useState } from 'react';
import Counter from './components/counter';
import './styles/App.css'
import Post_Item from './components/post_item';
import PostList from './components/postList';
import MyButton from './components/UI/button/MyButton';
import MyInput from './components/UI/input/MyInput';

function App() {

    const [posts, setPosts] = useState([
        {id:1, title:'Заголовок', body: 'Java Script - это программирование'},
        {id:2, title:'Заголовок', body: 'Тестовый текст'},
        {id:3, title:'Заголовок', body: 'И еще немного текста'},
    ])

    const [posts2, setPosts2] = useState([
        {id:1, title:'Python', body: 'pythont - это программирование'},
        {id:2, title:'Python', body: 'Тестовый текст'},
        {id:3, title:'Python', body: 'И еще немного текста'},
    ])


    const [title, setTitle] = useState()
    const [body, setBody] = useState()



    
    const addNewPost = (e) => {
        e.preventDefault();
        const newPost = {
            id: Date.now(),
            title,
            body
        }
        console.log(newPost);

        setPosts([...posts, newPost])
    }


    return (
    <div className="App">

        {/* Управляемый компонент */}
        <form>

            <MyInput 

            value = {title}
            onChange = {e => setTitle(e.target.value)}

            type='text'
            placeholder='Название поста'/>


            <MyInput
            value = {body}
            onChange = {e => setBody(e.target.value)}
            type='text'
            placeholder='Описание поста'
            />

            <MyButton onClick={addNewPost}>Создаине поста</MyButton>
            

        </form>





        <PostList posts={posts} title={'Список постов'}/>
        <PostList posts={posts2} title={'Список постов Про Python'}/>
    </div>
    );
}

export default App;
