import { Post, PostType } from './components/Post';
import { Header } from './components/Header';
import styles from './App.module.css';
import { Sidebar } from './components/Sidebar';

import './global.css';

interface Post {

}

const posts: PostType[] = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://avatars.githubusercontent.com/u/51939122?v=4',
      name: 'Victor Assunção',
      role: 'Web Developer',
    },
    content: [
      { type: 'paragraph', content: 'Fala galeraa 👋' },
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀' },
      { type: 'link', content: 'jane.design/doctorcare' },
    ],
    publishedAt: new Date('2024-11-10 01:00:00')
  },

  {
    id: 2,
    author: {
      avatarUrl: 'https://avatars.githubusercontent.com/u/51234628?v=4',
      name: 'Lucas Marcelino',
      role: 'Full-Stack Developer',
    },
    content: [
      { type: 'paragraph', content: 'Fala galeraa 👋', },
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀' },
      { type: 'link', content: 'jane.design/doctorcare' },
    ],
    publishedAt: new Date('2024-11-11 01:00:00')
  },
];



function App() {
  return (
    <div>
      <Header />
      
      <div className={styles.wrapper}>
       <Sidebar />
        <main>
         {posts.map (post => {
          return (
            <Post
              key={post.id} 
              post={post}
            />
          )
         })}
        </main>
      </div>
    </div>
  )
}

export default App

