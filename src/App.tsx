import { Post } from './components/Post';
import { Header } from './components/Header';
import { Sidebar } from './components/Sidebar';

import styles from './App.module.css';

import './global.css';

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/hericlysdlarii.png',
      name: 'Hériclys DLarii',
      role: 'Web Developer',
    },
    content:[
      {type: 'paragraph', content: 'E aí, galera!!!'},
      {type: 'paragraph', content: 'Este é o meu post na rede social.'},
    ],
    publishedAt: new Date('2023-09-19 21:58:00'),
  },

  {
    id: 2,
    author: {
      avatarUrl: 'https://github.com/hericlysdlarii.png',
      name: 'Hériclys DLarii',
      role: 'Escravo',
    },
    content:[
      {type: 'paragraph', content: 'E aí, galera!!!'},
      {type: 'paragraph', content: 'Este é o meu post na rede social.'},
    ],
    publishedAt: new Date('2023-10-20 22:00:00'),
  },
]

export function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map(post => {
            return (
              <Post 
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />
            )
          })}
        </main>
      </div>
    </div>
  )
}


