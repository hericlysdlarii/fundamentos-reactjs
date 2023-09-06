import styles from './Post.module.css'

export function Post() {
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <img 
          className={styles.avatar} 
          src="https://github.com/hericlysdlarii.png"
          />
          <div className={styles.authorInfo}>
            <strong>Hériclys D'Larii</strong>
            <span>Web Developer</span>
          </div>
        </div>

        <time title="05 de setembro às 21:42h" dateTime="2023-09-05 21:42:50">Publicado há 1h</time>

      </header>

      <div className={styles.content}>
        <p>E aí, galera!!! Este é o meu post na rede social.</p>
        <p>
          <a href="">#NewProject</a>
          <a href="">#AprendendoReactjs</a>
        </p>
      </div>

    </article>
    
    )
  }