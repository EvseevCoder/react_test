import React, { Component, useState } from 'react';
import Counter from './components/counter';
import './styles/App.css'
import Post_Item from './components/post_item';
import PostList from './components/postList';
import MyButton from './components/UI/button/MyButton';
import MyInput from './components/UI/input/MyInput';
import PostForm from './components/postForm';

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


    const createPost = (newPost) => {
        setPosts([...posts, newPost])
    }

    // получаем post из дочернего элемента
    const removePost = (post) => {
        setPosts(posts.filter(p => p.id !== post.id))
    }

    return (
    <div className="App">

        <PostForm create={createPost}/>

        <PostList remove={removePost} posts={posts} title={'Список постов'}/>
        <PostList remove={removePost} posts={posts2} title={'Список постов Про Python'}/>
    </div>
    );
}

export default App;
