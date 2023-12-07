import React, { Component, useMemo, useState } from 'react';
import './styles/App.css'
import PostList from './components/postList';
import PostForm from './components/postForm';
import MySelect from './components/UI/select/MySelect';
import MyInput from './components/UI/input/MyInput';

function App() {

    const [posts, setPosts] = useState([
        {id:1, title:'Заголовок', body: 'Java Script - это программирование'},
        {id:2, title:'Заголовок', body: 'Тестовый текст'},
        {id:3, title:'Заголовок', body: 'И еще немного текста'},
    ])

    const [selectedSort, setSelectedSort] = useState('')
    const [searchQuery, setSearchQuery] = useState('')

    const sortedPosts = useMemo(() => {

        console.log('Хук отработал');
        if (selectedSort) {
            return [...posts].sort((a, b) => a[selectedSort].localeCompare(b[selectedSort]))
        }
        return posts

    }, [selectedSort, posts])

    const createPost = (newPost) => {
        setPosts([...posts, newPost])
    }

    // получаем post из дочернего элемента
    const removePost = (post) => {
        setPosts(posts.filter(p => p.id !== post.id))
    }

    const sortPosts = (sort) => {
        setSelectedSort(sort)
    }


    return (
    <div className="App">

        <MyInput
            placeholder='Поиск'
            value={searchQuery}
            onChange={e => setSearchQuery(e.target.value)}
        />
        <PostForm create={createPost}/>
        <hr style={{margin: '15px'}}/>
        <div>
            <MySelect
                value={selectedSort}
                onChange={sortPosts}
                defaultValue = 'Cортировка'
                options = {[
                    {value: 'title', name: 'По названию'},
                    {value: 'body', name: 'По описанию'}
                ]}

            />
        </div>
        {posts.length !== 0 ? <PostList remove={removePost} posts={sortedPosts} title={'Список постов'}/>
        : <h1 style={{textAlign: 'center', marginTop: '30px'}}>Посты не были найдены</h1>}
        
    </div>
    );
}

export default App;
